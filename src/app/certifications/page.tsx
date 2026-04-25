'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { FiAward, FiCalendar, FiExternalLink, FiBriefcase, FiBookOpen } from 'react-icons/fi'

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId: string
  url: string
  icon: string
}

interface Experience {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: 'education' | 'certification' | 'experience'
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Generative AI with LLMs - Coursera',
      issuer: 'Coursera / DeepLearning.AI',
      date: '2025',
      credentialId: '8AHX3ZWTCDJY',
      url: 'https://www.coursera.org/account/accomplishments/verify/8AHX3ZWTCDJY',
      icon: '🤖',
    },
    {
      id: '2',
      title: 'Agentic AI using OpenAI Agent SDK - Coursera',
      issuer: 'Coursera / OpenAI',
      date: '2025',
      credentialId: 'E652RXL4WCLY',
      url: 'https://www.coursera.org/account/accomplishments/verify/E652RXL4WCLY',
      icon: '🧠',
    },
    {
      id: '3',
      title: 'AI Python for Beginners - Coursera',
      issuer: 'Coursera / DeepLearning.AI',
      date: '2025',
      credentialId: 'KF4JPMCCRXU9',
      url: 'https://www.coursera.org/account/accomplishments/verify/KF4JPMCCRXU9',
      icon: '🐍',
    },
    {
      id: '4',
      title: 'Prompt Engineering - Coursera',
      issuer: 'Coursera',
      date: '2025',
      credentialId: 'U6YYEICMA2AA',
      url: 'https://www.coursera.org/account/accomplishments/verify/U6YYEICMA2AA',
      icon: '✍️',
    },
    {
      id: '5',
      title: 'AI for Everyone - Coursera',
      issuer: 'Coursera / DeepLearning.AI',
      date: '2025',
      credentialId: 'W6SD3QR36TGB',
      url: 'https://www.coursera.org/account/accomplishments/verify/W6SD3QR36TGB',
      icon: '🌐',
    },
    {
      id: '6',
      title: 'Basic Computer Certificate',
      issuer: 'Computer Science Fundamentals',
      date: '2025',
      credentialId: 'CERT-001',
      url: '#',
      icon: '💻',
    },
  ]

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'AI & Machine Learning Specialist',
      organization: 'Coursera / DeepLearning.AI',
      period: '2025',
      description: 'Specialized training in Generative AI, LLMs, Agentic AI, and Prompt Engineering from world-class institutions.',
      type: 'certification',
    },
    {
      id: '2',
      title: 'Full-Stack Development',
      organization: 'Self-Directed Learning',
      period: '2024-2026',
      description: 'Building complete web applications with Next.js, PostgreSQL, Prisma, and modern frontend technologies.',
      type: 'experience',
    },
    {
      id: '3',
      title: 'LinkedIn Learning & Professional Development',
      organization: 'LinkedIn',
      period: 'Ongoing',
      description: 'Continuous professional development through LinkedIn Learning courses and industry engagement.',
      type: 'education',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-primary-100 text-primary-800 text-sm px-4 py-2 rounded-full mb-4">
            <FiAward className="inline mr-2" />
            Verified Credentials
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements in AI, Machine Learning, and Software Development.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FiAward className="mr-2 text-primary-600" />
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="card hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {cert.date}
                  </div>
                  <div className="text-xs">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center"
                >
                  <FiExternalLink className="mr-2" />
                  Verify Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FiBriefcase className="mr-2 text-primary-600" />
            Professional Journey
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-primary-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="card">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-sm text-primary-600 font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                  <div className="mt-2">
                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                      exp.type === 'certification' ? 'bg-green-100 text-green-800' :
                      exp.type === 'education' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <FiBookOpen className="mr-2 text-primary-600" />
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 Artificial Intelligence</h3>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLMs', 'Agentic AI', 'Prompt Engineering', 'OpenAI API', 'LangChain'].map((skill) => (
                  <span key={skill} className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💻 Software Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Node.js'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🗄️ Databases & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Prisma', 'SQL', 'Git', 'GitHub', 'REST APIs'].map((skill) => (
                  <span key={skill} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <p className="text-lg mb-6 text-primary-100">
            View my complete profile and connect on LinkedIn for professional networking.
          </p>
          <a
            href="https://www.linkedin.com/in/farhad-gul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Visit LinkedIn Profile
            <FiExternalLink className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2026 Farhad Gul. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Portfolio & Learning Platform | Built with Next.js, PostgreSQL, and Prisma
          </p>
        </div>
      </footer>
    </main>
  )
}
