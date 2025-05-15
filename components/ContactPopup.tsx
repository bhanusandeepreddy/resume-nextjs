"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="relative max-w-md w-full bg-[#f0ede8] rounded-2xl shadow-lg p-6 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-black hover:bg-gray-200 rounded-full p-1 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Squirrel doodles */}
        <div className="flex justify-center mb-4">
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#5d5a55]"
          >
            {/* Left squirrel */}
            <path
              d="M40 35C42 32 45 30 48 32C51 34 50 38 47 40C44 42 41 40 40 35Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M47 32C49 28 53 30 54 33" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M42 38C40 40 38 45 40 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M45 41C44 44 45 48 48 49" stroke="currentColor" strokeWidth="1.5" fill="none" />

            {/* Middle squirrel */}
            <path
              d="M90 20C95 18 102 20 105 25C108 30 105 38 98 40C91 42 84 38 82 30C80 22 85 15 90 20Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M103 25C108 20 112 25 110 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M85 35C80 38 78 45 82 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M92 41C90 46 92 52 98 54" stroke="currentColor" strokeWidth="1.5" fill="none" />

            {/* Right squirrel */}
            <path
              d="M150 35C152 32 155 30 158 32C161 34 160 38 157 40C154 42 151 40 150 35Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M157 32C159 28 163 30 164 33" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M152 38C150 40 148 45 150 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M155 41C154 44 155 48 158 49" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">The best conversations start with a simple 'hello'.</h2>

          <p className="text-gray-600 mb-6">
            Curious how we can help each other grow? Let's chat, challenge ideas, and explore smarter ways to improve
            your business — it all starts with one email
          </p>

          <a
            href="mailto:bhanusandeepreddy@gmail.com"
            className="inline-block bg-[#ff7a6b] hover:bg-[#ff6a59] text-white font-medium py-3 px-6 rounded-full transition-colors shadow-sm"
          >
            Send Email!
          </a>
        </div>
      </div>
    </div>
  )
}
