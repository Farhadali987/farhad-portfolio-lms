'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/context/AuthContext'
import { FiBook, FiCheckCircle, FiTrendingUp, FiCode, FiExternalLink } from 'react-icons/fi'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface DashboardData {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
  stats: {
    totalCourses: number
    completedCourses: number
    averageProgress: number
    totalProjects: number
  }
  enrollments: any[]
  projects: any[]
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user, token } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
    fetchDashboard()
  }, [token])

  const fetchDashboard = async () => {
    try {
      const response = await axios.get('/api/dashboard')
      setDashboard(response.data)
    } catch (error) {
      console.error('Error fetching dashboard:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </main>
    )
  }

  if (!dashboard) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-600">Failed to load dashboard</p>
        </div>
      </main>
    )
  }

  const progressData = dashboard.enrollments.map(e => ({
    name: e.course.title.substring(0, 15) + '...',
    progress: e.progress,
  }))

  const pieData = [
    { name: 'Completed', value: dashboard.stats.completedCourses },
    { name: 'In Progress', value: dashboard.stats.totalCourses - dashboard.stats.completedCourses },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, {dashboard.user.name}!</h1>
        <p className="text-gray-600 mb-8">Track your learning progress and achievements</p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Courses</p>
                <p className="text-3xl font-bold text-gray-900">{dashboard.stats.totalCourses}</p>
              </div>
              <FiBook className="h-10 w-10 text-primary-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-600">{dashboard.stats.completedCourses}</p>
              </div>
              <FiCheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
                <p className="text-3xl font-bold text-yellow-600">{dashboard.stats.averageProgress}%</p>
              </div>
              <FiTrendingUp className="h-10 w-10 text-yellow-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Projects</p>
                <p className="text-3xl font-bold text-purple-600">{dashboard.stats.totalProjects}</p>
              </div>
              <FiCode className="h-10 w-10 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Progress</h3>
            {progressData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-600 text-center py-8">No enrollments yet</p>
            )}
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Completion</h3>
            {pieData.some(d => d.value > 0) ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-600 text-center py-8">No data available</p>
            )}
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="card mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">My Courses</h3>
          {dashboard.enrollments.length > 0 ? (
            <div className="space-y-4">
              {dashboard.enrollments.map((enrollment) => (
                <div key={enrollment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{enrollment.course.title}</h4>
                    <span className="text-sm text-gray-600">{enrollment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${enrollment.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {enrollment.course.lessons.length} lessons
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              You haven't enrolled in any courses yet. <a href="/courses" className="text-primary-600 hover:underline">Browse courses</a>
            </p>
          )}
        </div>

        {/* Projects */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">My Projects</h3>
          {dashboard.projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {dashboard.projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech: string, idx: number) => (
                      <span key={idx} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-sm text-primary-600 hover:underline"
                    >
                      <FiExternalLink className="mr-1" />
                      View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No projects yet</p>
          )}
        </div>
      </div>
    </main>
  )
}
