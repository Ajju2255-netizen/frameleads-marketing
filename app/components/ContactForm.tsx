"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitLead, type LeadSource } from "@/lib/lead-api"

type Props = {
  /** Lead source tag for analytics + ops. Defaults to "contact". */
  source?: LeadSource
  /** Optional override for the service field (e.g. on a service-hub page). */
  defaultService?: string
}

export function ContactForm({ source = "contact", defaultService }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService || "",
    message: "",
    hp: "",
  })
  const [state, setState] = useState<
    | { status: "idle" }
    | { status: "submitting" }
    | { status: "success"; leadId: string }
    | { status: "error"; error: string }
  >({ status: "idle" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (state.status === "submitting") return
    setState({ status: "submitting" })
    const res = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      service: formData.service || undefined,
      message: formData.message || undefined,
      source,
      hp: formData.hp || undefined,
    })
    if (res.ok) {
      setState({ status: "success", leadId: res.leadId })
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: defaultService || "",
        message: "",
        hp: "",
      })
    } else {
      setState({ status: "error", error: res.error })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 ..."
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service interest (optional)
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="SEO">SEO</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Performance Marketing">Performance Marketing</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="CRO">CRO</option>
            <option value="Website Development">Website Development</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project and goals."
          required
          className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
        />
      </div>

      {/* Honeypot — invisible to humans, bots fill it */}
      <input
        type="text"
        name="hp"
        value={formData.hp}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Button
        type="submit"
        disabled={state.status === "submitting"}
        className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] w-full text-white font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <Send className="h-5 w-5 mr-2 relative z-10" />
        {state.status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      {state.status === "success" && (
        <div role="status" className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800">
          Got it — we'll reply within 24 hours. (Reference: {state.leadId.slice(0, 8)})
        </div>
      )}
      {state.status === "error" && (
        <div role="alert" className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          {state.error}
        </div>
      )}
    </form>
  )
}

export default ContactForm
