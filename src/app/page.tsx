'use client'

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiCode, FiBook, FiAward, FiExternalLink } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-primary-600">Farhad Gul</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Developer | AI Enthusiast | Lifelong Learner
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/farhad-gul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <FiLinkedin className="mr-2" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/farhadgul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center"
            >
              <FiGithub className="mr-2" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Farhad Gul, a passionate developer dedicated to continuous learning and building innovative solutions.
            My expertise spans across full-stack development, artificial intelligence, and modern web technologies.
            This platform showcases my projects, learning journey, and the courses I'm mastering.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <FiCode className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">
                Building responsive and scalable web applications using modern frameworks and best practices.
              </p>
            </div>
            <div className="card">
              <FiBook className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Actively pursuing knowledge in AI, databases, and cutting-edge technologies through certified courses.
              </p>
            </div>
            <div className="card">
              <FiAward className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-600">
                Multiple certifications in Python, AI, and software development from recognized platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Credentials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Generative AI with LLMs</h3>
              <p className="text-sm text-gray-600 mb-2">Coursera / DeepLearning.AI</p>
              <p className="text-xs text-gray-500">Credential ID: 8AHX3ZWTCDJY</p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Agentic AI using OpenAI Agent SDK</h3>
              <p className="text-sm text-gray-600 mb-2">Coursera / OpenAI</p>
              <p className="text-xs text-gray-500">Credential ID: E652RXL4WCLY</p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">🐍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Python for Beginners</h3>
              <p className="text-sm text-gray-600 mb-2">Coursera / DeepLearning.AI</p>
              <p className="text-xs text-gray-500">Credential ID: KF4JPMCCRXU9</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/certifications" className="btn-primary">
              View All Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Python Programming</h3>
              <p className="text-gray-600 mb-4">Master Python from basics to advanced concepts</p>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Beginner</span>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Systems</h3>
              <p className="text-gray-600 mb-4">Learn SQL, PostgreSQL, and database design principles</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Intermediate</span>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agentic AI</h3>
              <p className="text-gray-600 mb-4">Build intelligent agents using OpenAI and modern AI frameworks</p>
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Advanced</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Learning Today</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join my learning platform and track your progress through interactive courses
          </p>
          <Link href="/signup" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">© 2026 Farhad Gul. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/farhad-gul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/farhadgul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
