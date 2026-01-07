"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import SEO from "../components/SEO"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto - Laugus",
    description: "Contactanos para tu proyecto de desarrollo web. Respuesta en pocas horas.",
    url: "https://laugus.com.ar/contacto",
    mainEntity: {
      "@type": "Organization",
      name: "Laugus",
      telephone: "+54-11-7373-9055",
      email: "contacto@laugus.com.ar",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-11-7373-9055",
        contactType: "customer service",
        availableLanguage: ["Spanish"],
      },
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-10">
      <SEO
        title="Contacto - Hablemos de tu Proyecto"
        description="Contactanos para tu proyecto de desarrollo web. Te respondemos en pocas horas. WhatsApp, email o formulario de contacto."
        keywords="contacto, presupuesto web, consulta desarrollo web, Argentina, WhatsApp"
        url="https://laugus.com.ar/contacto"
        schema={contactSchema}
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-block relative" data-aos="fade-down">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#0d233f] mb-4 relative inline-block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contacto
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent rounded-full"></div>
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] rounded-full"></div>
            </h1>
          </div>
          <p
            className="text-[#475569] max-w-2xl mx-auto mt-6 text-lg font-light"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ¿Tenés un proyecto en mente? Contanos y te respondemos en pocas horas.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {submitted ? (
              <div className="text-center py-8" data-aos="zoom-in">
                <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#06b6d4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d233f] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#475569]">Te contactaremos pronto.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#06b6d4] font-medium hover:underline hover-lift"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold text-[#0d233f] mb-6 hover-lift">Envianos un mensaje</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0d233f] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0d233f] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0d233f] mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Contanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0d233f] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-hover"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
