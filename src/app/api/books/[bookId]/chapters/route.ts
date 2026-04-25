import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    const chapters = await prisma.chapter.findMany({
      where: { book_id: params.bookId },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(chapters)
  } catch (error) {
    console.error('Get chapters error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    const { title, content, order } = await request.json()

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const chapter = await prisma.chapter.create({
      data: {
        title,
        content,
        order: order || 0,
        book_id: params.bookId,
      },
    })

    return NextResponse.json(chapter, { status: 201 })
  } catch (error) {
    console.error('Create chapter error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
