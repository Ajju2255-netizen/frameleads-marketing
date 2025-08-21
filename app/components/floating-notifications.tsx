'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface Notification {
  id: number
  message: string
  icon: string
}

const notifications: Notification[] = [
  { id: 1, message: "Arjun from Delhi just bought the Starter Kit!", icon: "🔥" },
  { id: 2, message: "Sneha grabbed the Starter Kit 2 mins ago!", icon: "✅" },
  { id: 3, message: "Vikram scaled his ads to ₹1.8L in 7 days with this kit.", icon: "🚀" },
  { id: 4, message: "Priya generated ₹2.5L revenue in her first week using the toolkit.", icon: "💰" },
  { id: 5, message: "Ankit from Bangalore purchased the Starter Kit just now!", icon: "⚡" },
  { id: 6, message: "Rahul hit ₹3.2L in 7 days after applying strategies from the kit.", icon: "📈" },
  { id: 7, message: "Neha joined 500+ others who already bought this Starter Kit!", icon: "🔥" },
  { id: 8, message: "Karan made ₹1.2L in revenue within 7 days of using the toolkit.", icon: "💚" }
]

export default function FloatingNotifications() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= notifications.length) {
      return // Stop when all notifications have been shown
    }

    // Show notification
    setCurrentNotification(notifications[currentIndex])
    setIsVisible(true)

    // Hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    // Show next notification after 9 seconds (4s display + 5s delay)
    const nextTimer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
    }, 9000)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [currentIndex])

  if (!currentNotification || currentIndex >= notifications.length) {
    return null
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-2 opacity-0 scale-95'
        }`}
      >
        <div className="bg-[#121212] text-white rounded-xl px-4 py-3 shadow-2xl border-l-4 border-green-500 min-w-[320px] max-w-[400px] pointer-events-auto">
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0">{currentNotification.icon}</span>
            <p className="text-sm leading-relaxed flex-1">{currentNotification.message}</p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
