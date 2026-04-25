'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  content: string;
  order: number;
  courseId: string;
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLesson();
    fetchAllLessons();
  }, [params.courseId, params.lessonId]);

  const fetchLesson = async () => {
    try {
      const res = await fetch(`/api/courses/${params.courseId}/lessons`);
      const data = await res.json();
      const currentLesson = data.lessons?.find((l: Lesson) => l.id === params.lessonId);
      setLesson(currentLesson);
    } catch (error) {
      console.error('Failed to fetch lesson:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllLessons = async () => {
    try {
      const res = await fetch(`/api/courses/${params.courseId}/lessons`);
      const data = await res.json();
      setAllLessons(data.lessons || []);
    } catch (error) {
      console.error('Failed to fetch lessons:', error);
    }
  };

  const currentLessonIndex = allLessons.findIndex((l) => l.id === params.lessonId);
  const previousLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96"></div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <Link href={`/courses/${params.courseId}`} className="text-primary-600 hover:text-primary-700">
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href={`/courses/${params.courseId}`}
            className="text-primary-600 hover:text-primary-700 flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Course</span>
          </Link>
        </div>

        {/* Lesson Content */}
        <div className="card p-8 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <span className="text-sm text-gray-600">Lesson {lesson.order}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{lesson.title}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap">{lesson.content}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {previousLesson ? (
            <Link
              href={`/courses/${params.courseId}/lessons/${previousLesson.id}`}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </Link>
          ) : (
            <div></div>
          )}
          {nextLesson ? (
            <Link
              href={`/courses/${params.courseId}/lessons/${nextLesson.id}`}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Next Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link href={`/courses/${params.courseId}`} className="btn-secondary">
              Complete Course
            </Link>
          )}
        </div>

        {/* Lessons Sidebar */}
        <div className="card p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">All Lessons</h2>
          <div className="space-y-2">
            {allLessons.map((l, index) => (
              <Link
                key={l.id}
                href={`/courses/${params.courseId}/lessons/${l.id}`}
                className={`block p-3 rounded-lg transition-colors duration-200 ${
                  l.id === params.lessonId
                    ? 'bg-primary-50 border-2 border-primary-300'
                    : 'hover:bg-gray-50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <span className={`font-medium ${l.id === params.lessonId ? 'text-primary-600' : 'text-gray-900'}`}>
                    {l.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
