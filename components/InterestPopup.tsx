"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function InterestPopup({ language }: { language: 'en' | 'de' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log('Submitted:', { email, message })
    toast({
      title: language === 'en' ? "Message sent!" : "Nachricht gesendet!",
      description: language === 'en' ? "Thank you for your interest." : "Vielen Dank für Ihr Interesse.",
    })
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-3 right-3 p-4 bg-gray-300 shadow-lg rounded-t-lg border-black max-w-4xl mx-auto">
      <Button 
        variant="outline" 
        size="icon"
        className="absolute top-2 right-2"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">{language === 'en' ? 'Close' : 'Schließen'}</span>
      </Button>
      <h3 className="text-lg font-semibold mb-2">
        {language === 'en' 
          ? "Interested in hiring me? Want to collaborate on a new project?" 
          : "Interesse an einer Zusammenarbeit oder einem neuen Projekt?"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder={language === 'en' ? "Your email" : "Ihre E-Mail"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder={language === 'en' ? "Your message" : "Ihre Nachricht"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">
          {language === 'en' ? "Send" : "Senden"}
        </Button>
      </form>
    </div>
  )
}