'use client';

import Navigation from '@/components/Navigation';

export default function EducationClient() {
  const educationHistory = [
    {
      institution: 'Universitas Katolik Parahyangan (UNPAR)',
      degree: 'Bachelor of Computer Science (Sarjana Komputer)',
      period: '22/08/2022 – 17/07/2026',
      status: 'Graduated',
      gpa: '3.67',
      thesis: 'Comparative Analysis of Backtracking and Simulated Annealing Algorithms for Solving the Tango Logic Puzzle',
      description: 'Graduated with a strong foundation in Computer Science principles, specializing in Artificial Intelligence, Performance Optimization, and Software Engineering.',
      color: 'blue',
    },
    {
      institution: 'SANTO ALOYSIUS (SMA)',
      degree: 'High School Diploma',
      period: '2019 - 2022',
      status: 'Graduated',
      description: 'Completed high school education with strong foundation in mathematics and sciences.',
      color: 'green',
    },
    {
      institution: 'YOS SUDARSO (SD-SMP)',
      degree: 'Elementary and Middle School',
      period: '2011 - 2019',
      status: 'Graduated',
      description: 'Completed elementary and middle school education, building fundamental academic skills.',
      color: 'purple',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 section-padding">
        <div className="max-width-container">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white font-mono">
            Education History
          </h1>

          <div className="relative font-mono">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-8 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 rounded-full hidden md:block -translate-x-1/2"></div>
                  
                  <div className="md:ml-20 w-full">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 ${
                      edu.color === 'blue' ? 'border-blue-600 dark:border-blue-400' :
                      edu.color === 'green' ? 'border-green-600 dark:border-green-400' :
                      'border-purple-600 dark:border-purple-400'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h2>
                        <span className="inline-block mt-2 sm:mt-0 text-sm font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          {edu.status}
                        </span>
                      </div>
                      
                      <p className={`text-lg font-semibold mb-2 ${
                        edu.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        edu.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`}>
                        {edu.degree}
                      </p>
                      
                      <div className="text-gray-600 dark:text-gray-400 mb-3 text-sm space-y-1">
                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.period}
                        </p>
                        {edu.gpa && (
                          <p className="text-sage-600 dark:text-sage-400 font-semibold">
                            🏆 Final Grade (GPA): {edu.gpa}
                          </p>
                        )}
                        {edu.thesis && (
                          <p className="text-gray-700 dark:text-gray-300 italic">
                            📜 Thesis: {edu.thesis}
                          </p>
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl font-mono">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Main Academic Focus & Subjects</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Core subject areas covered during Computer Science degree at Universitas Katolik Parahyangan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-gray-900/60 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">🧠 AI & Data Science</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Machine Learning, Fuzzy Systems, Information Retrieval, and Optimization Techniques.
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/60 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">⚙️ Software Engineering</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Advanced Data Structures, Object-Oriented Programming (OOP), and Algorithm Design.
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/60 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">📐 Computational Math</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Discrete Mathematics, Statistics for Computing, Matrix & Vector Spaces, and Logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}