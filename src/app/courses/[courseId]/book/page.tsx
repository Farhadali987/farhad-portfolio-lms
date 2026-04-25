'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/context/AuthContext'
import { FiChevronLeft, FiChevronRight, FiCheck, FiBook, FiMenu, FiX } from 'react-icons/fi'

interface Chapter {
  id: string
  title: string
  content: string
  order: number
}

interface Book {
  id: string
  title: string
  description: string
  chapters: Chapter[]
}

export default function BookReader() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string
  const { token } = useAuth()

  const [book, setBook] = useState<Book | null>(null)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [showSidebar, setShowSidebar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setShowSidebar(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    fetchBook()
  }, [courseId])

  useEffect(() => {
    if (token && book?.chapters) {
      loadCompletedChapters()
    }
  }, [token, book])

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/courses/${courseId}/book`)
      setBook(response.data)
    } catch (error) {
      console.error('Error fetching book:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadCompletedChapters = async () => {
    if (!book) return

    const completed = new Set<string>()
    for (const chapter of book.chapters) {
      try {
        const response = await axios.get(`/api/chapters/${chapter.id}/progress`)
        if (response.data.completed) {
          completed.add(chapter.id)
        }
      } catch (error) {
        console.error('Error loading chapter progress:', error)
      }
    }
    setCompletedChapters(completed)
  }

  const markChapterComplete = async (chapterId: string) => {
    if (!token) return

    try {
      await axios.post(`/api/chapters/${chapterId}/progress`, {
        completed: true,
      })
      setCompletedChapters(prev => new Set(prev).add(chapterId))
    } catch (error) {
      console.error('Error marking chapter complete:', error)
    }
  }

  const goToChapter = (index: number) => {
    if (book && index >= 0 && index < book.chapters.length) {
      setCurrentChapterIndex(index)
      if (isMobile) {
        setShowSidebar(false)
      }
    }
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeContent = ''
    let codeLanguage = ''

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
              {codeLanguage && (
                <div className="text-xs text-gray-400 mb-2">{codeLanguage}</div>
              )}
              <code className="text-sm">{codeContent}</code>
            </pre>
          )
          codeContent = ''
          codeLanguage = ''
          inCodeBlock = false
        } else {
          inCodeBlock = true
          codeLanguage = line.slice(3)
        }
        return
      }

      if (inCodeBlock) {
        codeContent += line + '\n'
        return
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-4xl font-bold text-gray-900 mt-8 mb-4">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-3xl font-semibold text-gray-800 mt-6 mb-3">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-2xl font-semibold text-gray-800 mt-5 mb-2">
            {line.slice(4)}
          </h3>
        )
      } else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/)
        if (match) {
          elements.push(
            <li key={index} className="ml-6 mb-2 text-gray-700">
              <strong className="text-gray-900">{match[1]}</strong>: {match[2]}
            </li>
          )
        }
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-6 mb-2 text-gray-700">
            {line.slice(2)}
          </li>
        )
      } else if (line.startsWith('---')) {
        elements.push(
          <hr key={index} className="my-8 border-gray-300" />
        )
      } else if (line.startsWith('*') && line.endsWith('*')) {
        elements.push(
          <p key={index} className="text-gray-600 italic my-4">
            {line.slice(1, -1)}
          </p>
        )
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-4" />)
      } else {
        elements.push(
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {line}
          </p>
        )
      }
    })

    return elements
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-600">Loading book...</p>
        </div>
      </main>
    )
  }

  if (!book || !book.chapters || book.chapters.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-600">Book not found</p>
        </div>
      </main>
    )
  }

  const currentChapter = book.chapters[currentChapterIndex]
  const progress = ((completedChapters.size / book.chapters.length) * 100).toFixed(0)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Chapter Sidebar */}
        <div
          className={`${
            isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'
          } ${
            showSidebar ? 'translate-x-0' : isMobile ? '-translate-x-full' : 'w-0'
          } transition-transform duration-300 bg-gray-50 border-r border-gray-200 ${
            isMobile ? 'w-80' : 'w-80 flex-shrink-0'
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Chapters</h3>
                {isMobile && (
                  <button onClick={() => setShowSidebar(false)}>
                    <FiX className="h-5 w-5 text-gray-600" />
                  </button>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">{progress}% Complete</p>
            </div>

            <div className="flex-1 overflow-y-auto">
              {book.chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => goToChapter(index)}
                  className={`w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition-colors ${
                    index === currentChapterIndex ? 'bg-white border-l-4 border-l-primary-600' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{chapter.title}</p>
                    </div>
                    {completedChapters.has(chapter.id) && (
                      <FiCheck className="h-4 w-4 text-green-500 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Reading Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chapter Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {!isMobile && (
                  <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiMenu className="h-5 w-5" />
                  </button>
                )}
                {isMobile && (
                  <button
                    onClick={() => setShowSidebar(true)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FiMenu className="h-5 w-5" />
                  </button>
                )}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{currentChapter.title}</h2>
                  <p className="text-sm text-gray-600">
                    Chapter {currentChapterIndex + 1} of {book.chapters.length}
                  </p>
                </div>
              </div>

              <button
                onClick={() => markChapterComplete(currentChapter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  completedChapters.has(currentChapter.id)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                <FiCheck className="h-4 w-4" />
                <span>{completedChapters.has(currentChapter.id) ? 'Completed' : 'Mark Complete'}</span>
              </button>
            </div>
          </div>

          {/* Reading Content */}
          <div className="flex-1 overflow-y-auto px-8 py-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {renderContent(currentChapter.content)}
              </div>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <button
                onClick={() => goToChapter(currentChapterIndex - 1)}
                disabled={currentChapterIndex === 0}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <FiChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => goToChapter(currentChapterIndex + 1)}
                disabled={currentChapterIndex === book.chapters.length - 1}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white"
              >
                <span>Next</span>
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
