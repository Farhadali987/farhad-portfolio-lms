import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        enrollments: {
          include: {
            course: {
              include: {
                lessons: true,
              },
            },
          },
        },
        projects: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const totalCourses = user.enrollments.length
    const completedCourses = user.enrollments.filter(e => e.progress === 100).length
    const averageProgress = totalCourses > 0
      ? user.enrollments.reduce((sum, e) => sum + e.progress, 0) / totalCourses
      : 0

    const dashboardData = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      stats: {
        totalCourses,
        completedCourses,
        averageProgress: Math.round(averageProgress),
        totalProjects: user.projects.length,
      },
      enrollments: user.enrollments,
      projects: user.projects,
    }

    return NextResponse.json(dashboardData)
  } catch (error) {
    console.error('Get dashboard error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
