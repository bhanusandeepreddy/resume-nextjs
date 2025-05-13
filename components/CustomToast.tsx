"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

// Define the toast type
export type Toast = {
  id: string
  title: string
  message: string
}

// Custom hook for managing toasts
export function useCustomToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, title = "") => {
    const newToast = {
      id: uuidv4(),
      title,
      message,
    }
    setToasts((prev) => [...prev, newToast])

    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      closeToast(newToast.id)
    }, 5000)

    return newToast.id
  }

  const closeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return { showToast, closeToast, toasts }
}

// Toast component
const CustomToast = ({
  id,
  title,
  message,
  onClose,
}: {
  id: string
  title: string
  message: string
  onClose: () => void
}) => {
  useEffect(() => {
    // Auto-remove after 5 seconds
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md animate-in slide-in-from-right-5 duration-300">
      <div className="flex justify-between items-start">
        <div>
          {title && <h4 className="font-semibold text-gray-900">{title}</h4>}
          <p className="text-gray-700">{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}

export default CustomToast
