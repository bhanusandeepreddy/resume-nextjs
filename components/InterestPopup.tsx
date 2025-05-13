"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCustomToast } from "./CustomToast"
import CustomToast from "./CustomToast"
import { logInterestMessage } from "@/app/actions/log-message"

interface InterestPopupProps {
  language?: "en" | "de"
}

const InterestPopup = ({ language = "en" }: InterestPopupProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast, closeToast, toasts } = useCustomToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Log the message using the webhook
      const result = await logInterestMessage({
        email,
        message,
        language,
      })

      if (result.success) {
        showToast(
          language === "en" ? "Message sent!" : "Nachricht gesendet!",
          language === "en" ? "Thank you for your interest." : "Vielen Dank für Ihr Interesse.",
        )
        setIsVisible(false)
        setEmail("")
        setMessage("")
      } else {
        showToast(
          language === "en" ? "Error sending message" : "Fehler beim Senden der Nachricht",
          language === "en"
            ? "Please try again later or contact directly via email."
            : "Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per E-Mail.",
        )
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      showToast(
        language === "en" ? "Error sending message" : "Fehler beim Senden der Nachricht",
        language === "en"
          ? "Please try again later or contact directly via email."
          : "Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per E-Mail.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg rounded-t-lg max-w-4xl mx-auto">
        <Button variant="outline" size="icon" className="absolute top-2 right-2" onClick={() => setIsVisible(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">{language === "en" ? "Close" : "Schließen"}</span>
        </Button>
        <h3 className="text-lg font-semibold mb-2">
          {language === "en"
            ? "Interested in hiring me or want to collaborate on a new project?"
            : "Interesse an einer Zusammenarbeit oder einem neuen Projekt?"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder={language === "en" ? "Your email" : "Ihre E-Mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <Textarea
            placeholder={language === "en" ? "Your message" : "Ihre Nachricht"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (language === "en" ? "Sending..." : "Senden...") : language === "en" ? "Send" : "Senden"}
          </Button>
        </form>
      </div>

      {toasts.map((toast) => (
        <CustomToast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          message={toast.message}
          onClose={() => closeToast(toast.id)}
        />
      ))}
    </>
  )
}

export default InterestPopup
