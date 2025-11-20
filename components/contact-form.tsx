"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset form after 3 seconds
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
          Nome
        </label>
        <Input id="name" name="name" required placeholder="Seu nome" className="w-full" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          E-mail
        </label>
        <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="w-full" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Mensagem
        </label>
        <Textarea id="message" name="message" required placeholder="Sua mensagem aqui..." rows={6} className="w-full" />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full bg-foreground text-background hover:opacity-90"
      >
        {submitted ? "✓ Mensagem enviada!" : isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}
