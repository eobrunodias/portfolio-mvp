"use client"

import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground">Contato</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vamos conversar! Preencha o formulário abaixo e eu retornarei em breve.
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
