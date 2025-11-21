"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // You can integrate with FormSubmit, Resend, or your own backend
    // For now, this simulates submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          {t.form_name}
        </label>
        <Input id="name" name="name" required placeholder={t.form_name_placeholder} className="w-full" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          {t.form_email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.form_email_placeholder}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          {t.form_message}
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t.form_message_placeholder}
          rows={6}
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full bg-foreground text-background hover:opacity-90"
      >
        {submitted ? t.form_sent : isSubmitting ? t.form_sending : t.form_submit}
      </Button>
    </form>
  )
}
