"use client"

import { useState, useEffect } from "react"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export function ContactPopup({ language = "en" }: { language?: "en" | "de" }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  const handleEmailClick = () => {
    toast({
      title: language === "en" ? "Opening email client" : "E-Mail-Client wird geöffnet",
      description:
        language === "en" ? "Redirecting to your email application." : "Weiterleitung zu Ihrer E-Mail-Anwendung.",
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
          <div className="relative max-w-md w-full bg-[#f0ede8] rounded-2xl shadow-lg p-6 border border-gray-200">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-3 right-3 rounded-full h-8 w-8 p-0"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">{language === "en" ? "Close" : "Schließen"}</span>
            </Button>

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
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {language === "en"
                  ? "The best conversations start with a simple 'hello'."
                  : "Die besten Gespräche beginnen mit einem einfachen 'Hallo'."}
              </h2>

              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Curious how we can help each other grow? Let's chat, challenge ideas, and explore smarter ways to improve your business — it all starts with one email"
                  : "Neugierig, wie wir gemeinsam wachsen können? Lassen Sie uns plaudern, Ideen austauschen und intelligentere Wege zur Verbesserung Ihres Unternehmens erkunden — alles beginnt mit einer E-Mail"}
              </p>

              <a
                href="mailto:bhanusandeepreddy@gmail.com"
                className="inline-block bg-[#ff7a6b] hover:bg-[#ff6a59] text-white font-medium py-3 px-6 rounded-full transition-colors shadow-sm"
                onClick={handleEmailClick}
              >
                {language === "en" ? "Send Email!" : "E-Mail senden!"}
              </a>
            </div>
          </div>
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-2 right-2 rounded-full shadow-lg"
        onClick={() => setIsVisible(true)}
      >
        <Mail className="h-6 w-6" />
        <span className="sr-only">{language === "en" ? "Contact" : "Kontakt"}</span>
      </Button>
    </>
  )
}

export default ContactPopup
