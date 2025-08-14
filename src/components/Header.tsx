'use client'
import React from 'react'
import { Code } from 'lucide-react'

const Header = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Base64 Pro</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#converter"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Converter
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Reviews
            </a>
          </nav>
        </div>
      </div>
  )
}

export default Header