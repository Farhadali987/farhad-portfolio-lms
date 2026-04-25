'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/context/AuthContext'
import { FiBook, FiClock, FiCheckCircle } from 'react-icons/fi'

interface Course {
  id: string
  title: string
  description: string
  level: string
  lessons: any[]
  _count: {
    enrollments: number
  }
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user, token } = useAuth()

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses')
      setCourses(response.data)
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const enrollCourse = async (courseId: string) => {
    if (!token) {
      alert('Please login to enroll in courses')
      return
    }

    try {
      await axios.post('/api/enrollments', { course_id: courseId })
      alert('Successfully enrolled!')
      fetchCourses()
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to enroll')
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'BEGINNER':
        return 'bg-green-100 text-green-800'
      case 'INTERMEDIATE':
        return 'bg-yellow-100 text-yellow-800'
      case 'ADVANCED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Available Courses</h1>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading courses...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No courses available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="card">
                <FiBook className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="mr-1" />
                    {course.lessons.length} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {course._count.enrollments} students
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      href={`/courses/${course.id}/book`}
                      className="btn-secondary text-sm flex items-center"
                    >
                      <FiBook className="mr-1" />
                      Read Book
                    </Link>
                    {user && (
                      <button
                        onClick={() => enrollCourse(course.id)}
                        className="btn-primary text-sm"
                      >
                        Enroll Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!user && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Login to enroll in courses and track your progress</p>
            <a href="/login" className="btn-primary">Login to Continue</a>
          </div>
        )}
      </div>
    </main>
  )
}
