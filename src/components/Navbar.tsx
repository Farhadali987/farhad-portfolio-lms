'use client'

import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { FiGithub, FiLinkedin, FiHome, FiBook, FiUser, FiLogOut } from 'react-icons/fi'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <FiHome className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Farhad Gul</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Courses
            </Link>
            <Link href="/certifications" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Certifications
            </Link>
            <a
              href="https://www.linkedin.com/in/farhad-gul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FiLinkedin className="h-4 w-4 mr-1" />
              LinkedIn
            </a>
            <a
              href="https://github.com/farhadgul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FiGithub className="h-4 w-4 mr-1" />
              GitHub
            </a>

            {user ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FiUser className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FiLogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
