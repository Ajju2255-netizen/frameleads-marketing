"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, Sparkles, X } from "lucide-react"

const WHATSAPP_INTENT =
  "https://wa.me/916362821368?text=Hi%20Frameleads%2C%20I%27d%20like%20to%20discuss%20a%20marketing%20project."

const SHOW_AFTER_SCROLL_PCT = 0.3
const DISMISS_KEY = "frameleads:sticky-cta:dismissed-at"
// Re-show 7 days after dismissal so we don't pester repeat visitors forever.
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000

function shouldShowAfterDismissal(): boolean {
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    if (!raw) return true
    const dismissedAt = Number.parseInt(raw, 10)
    if (Number.isNaN(dismissedAt)) return true
    return Date.now() - dismissedAt > DISMISS_TTL_MS
  } catch {
    return true
  }
}

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!shouldShowAfterDismissal()) {
      setDismissed(true)
      return
    }
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const total = (doc.scrollHeight || 1) - (doc.clientHeight || 0)
      if (total <= 0) return
      const pct = scrollTop / total
      setVisible(pct >= SHOW_AFTER_SCROLL_PCT)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 pt-2 md:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 12px)" }}
    >
      <div className="relative mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-[#FFE4D6] bg-white/95 px-3 py-2 shadow-xl shadow-[#FF6B35]/15 backdrop-blur">
        <Link
          href="/free-marketing-audit?utm_source=sticky-cta"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#FF6B35]/25 active:scale-[0.98]"
        >
          <Sparkles className="h-4 w-4" />
          Get free audit
        </Link>
        <a
          href={WHATSAPP_INTENT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/30 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => {
            try {
              localStorage.setItem(DISMISS_KEY, String(Date.now()))
            } catch {
              // ignore quota / private mode
            }
            setDismissed(true)
          }}
          className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-gray-700"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

export default StickyMobileCTA
