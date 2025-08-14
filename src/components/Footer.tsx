'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-gray-400">
            <p>
              Made with ❤️ by{" "}
              <Link
                href="https://www.codinasion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codinasion
              </Link>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer