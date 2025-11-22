"use client";

import { ContactForm } from "@/components";
import { useLanguage } from "@/contexts/language-context";

// TODO: fix the email service
export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)] pt-25 pb-25">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground">
            {t.contact_title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.contact_description}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
