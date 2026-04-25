import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: NextRequest,
  { params }: { params: { chapterId: string } }
) {
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { completed } = await request.json()

    const progress = await prisma.chapterProgress.upsert({
      where: {
        user_id_chapter_id: {
          user_id: userId,
          chapter_id: params.chapterId,
        },
      },
      update: {
        completed,
      },
      create: {
        user_id: userId,
        chapter_id: params.chapterId,
        completed: true,
      },
    })

    // Update course enrollment progress
    const chapter = await prisma.chapter.findUnique({
      where: { id: params.chapterId },
      include: {
        book: {
          include: {
            course: {
              include: {
                enrollments: {
                  where: { user_id: userId },
                },
              },
            },
          },
        },
      },
    })

    if (chapter && chapter.book.course.enrollments.length > 0) {
      const enrollment = chapter.book.course.enrollments[0]
      const totalChapters = await prisma.chapter.count({
        where: { book_id: chapter.book_id },
      })
      const completedChapters = await prisma.chapterProgress.count({
        where: {
          user_id: userId,
          completed: true,
          chapter: {
            book_id: chapter.book_id,
          },
        },
      })

      const newProgress = (completedChapters / totalChapters) * 100

      await prisma.enrollment.update({
        where: { id: enrollment.id },
        data: {
          progress: Math.round(newProgress),
        },
      })
    }

    return NextResponse.json(progress)
  } catch (error) {
    console.error('Update chapter progress error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { chapterId: string } }
) {
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const progress = await prisma.chapterProgress.findUnique({
      where: {
        user_id_chapter_id: {
          user_id: userId,
          chapter_id: params.chapterId,
        },
      },
    })

    return NextResponse.json(progress || { completed: false })
  } catch (error) {
    console.error('Get chapter progress error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
