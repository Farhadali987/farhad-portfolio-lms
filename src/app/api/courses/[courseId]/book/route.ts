import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const book = await prisma.book.findUnique({
      where: { course_id: params.courseId },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
        },
      },
    })

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found for this course' },
        { status: 404 }
      )
    }

    return NextResponse.json(book)
  } catch (error) {
    console.error('Get book error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
