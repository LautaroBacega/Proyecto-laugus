"use client"

import { useState } from "react"
import { MessageCircle, Send, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Contacto</h1>
          <p className="text-[#475569] max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Contanos y te respondemos en pocas horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div>
            <div className="bg-[#0f172a] text-white p-8 rounded-2xl mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#06b6d4] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#0f172a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">La forma más rápida de contactarnos</p>
                </div>
              </div>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#06b6d4] text-[#0f172a] text-center py-3 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
              >
                Enviar mensaje por WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a]">Tiempo de respuesta</h3>
                <p className="text-[#475569] text-sm">Respondemos en pocas horas</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#06b6d4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#475569]">Te contactaremos pronto.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-[#06b6d4] font-medium hover:underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Envianos un mensaje</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0f172a] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-shadow"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0f172a] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-shadow"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0f172a] mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-shadow resize-none"
                      placeholder="Contanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0f172a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e293b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
