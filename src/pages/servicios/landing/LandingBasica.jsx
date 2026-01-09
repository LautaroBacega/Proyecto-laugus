"use client"

import { useState } from "react"
import {
  Check,
  Globe,
  Smartphone,
  Eye,
  Target,
  MessageCircle,
  Megaphone,
  ChevronDown,
  Users,
  Briefcase,
  User,
  ImageIcon,
  Link2,
  Server,
  Shield,
} from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Visibilidad online",
    description: "Darle visibilidad online a tu negocio con un diseño moderno y llamativo",
  },
  {
    icon: Target,
    title: "Oferta clara",
    description: "Presentar tu oferta principal de forma clara, rápida y enfocada",
  },
  {
    icon: MessageCircle,
    title: "Chat integrado",
    description: "Ofrecer atención inmediata con chat online integrado (opcional)",
  },
  {
    icon: Megaphone,
    title: "Máxima efectividad",
    description: "Promocionar un producto, servicio o campaña puntual con máxima efectividad",
  },
]

const targetAudience = [
  { icon: Users, text: "Emprendedores que quieren arrancar con una web simple y escalable" },
  { icon: Briefcase, text: "Negocios que necesitan destacar una propuesta puntual" },
  { icon: User, text: "Profesionales que buscan mostrar su servicio de forma directa" },
]

const designFeatures = [
  { icon: ImageIcon, text: "Hasta 6 imágenes o banners" },
  { icon: Link2, text: "Vínculos a redes sociales y enlaces estratégicos" },
  { icon: MessageCircle, text: "Botón flotante de WhatsApp siempre visible" },
  { icon: Smartphone, text: "Diseño 100% adaptable a celulares, tablets y PC" },
]

const additionals = [
  {
    title: "Hosting",
    icon: Server,
    description: "Primer año incluido",
  },
  {
    title: "Dominio .com.ar",
    icon: Globe,
    description: "Primer año incluido",
  },
  {
    title: "Certificado SSL",
    icon: Shield,
    description: "Primer año incluido",
  },
]

const faqs = [
  {
    question: "¿Qué es una landing page y para qué sirve?",
    answer:
      "Una landing page es una página web pensada para mostrar una oferta puntual o destacar un servicio, con el objetivo de generar consultas o ventas.",
  },
  {
    question: "¿Cuánto tarda en estar lista la landing page?",
    answer: "El tiempo promedio de entrega es de 3 a 5 días hábiles desde que recibimos toda la información necesaria.",
  },
  {
    question: "¿Puedo elegir colores, imágenes y textos?",
    answer:
      "Sí, todo se personaliza según tu marca o preferencia. También podemos ayudarte a definirlo si no tenés nada armado.",
  },
  {
    question: "¿Puedo tener un botón de WhatsApp?",
    answer: "Sí, el botón flotante de WhatsApp está incluido y se configura con tu número.",
  },
  {
    question: "¿Funciona bien en celulares?",
    answer: "Sí, el diseño es 100% responsive, adaptado a móviles y tablets.",
  },
  {
    question: "¿Puedo cambiar el contenido en el futuro?",
    answer: "Sí, podés solicitar modificaciones o actualizaciones (pueden tener costo según el cambio).",
  },
  {
    question: "¿Sirve si estoy iniciando con mi negocio?",
    answer: "Sí, es ideal para dar el primer paso en internet sin invertir en una web completa.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-[#0d233f] pr-3 text-sm">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-32" : "max-h-0"}`}>
        <p className="px-3 pb-3 text-[#475569] text-sm">{answer}</p>
      </div>
    </div>
  )
}

export default function LandingBasica() {
  const [openFAQ, setOpenFAQ] = useState(null)

  return (
    <div className="bg-[#fafbfc]">
      {/* <BackButton sticky /> */}
      <section className="py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* COLUMNA IZQUIERDA - 70% */}
            <div className="lg:w-[68%] space-y-6">
              <div data-aos="fade-right">
                <img
                  src="/landingbasica/imglb.jpg"
                  alt="Landing Page Básica"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              <div className="lg:hidden space-y-4">
                {/* Precio */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <p className="text-xs uppercase tracking-wider mb-1 text-gray-500">Precio único</p>
                  <div className="text-3xl font-bold mb-1 text-[#0d233f]">Desde $70.000</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs mb-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-500" /> Sin cuotas
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-500" /> Sin costos ocultos
                    </span>
                  </div>

                  {/* Botón WhatsApp */}
                  <a
                    href="https://wa.me/541173739055?text=Hola!%20Me%20interesa%20la%20Landing%20Page%20Básica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0d233f] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1a3a5c] hover:shadow-md transition-all duration-500 ease-out w-full"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                {/* El primer año incluye - compacto */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Incluido en el primer año</h3>
                  <div className="space-y-2">
                    {additionals.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="text-[#0d233f] font-medium">{item.title}</span>
                        <Check className="w-4 h-4 text-gray-500 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Información de pago - compacto */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Información de pago</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#0d233f] font-medium">Método de pago: Transferencia</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#0d233f] font-medium">Realizamos factura</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Para quién es - compacto como texto con iconos inline */}
              <div data-aos="fade-right">
                <h2 className="text-lg font-bold text-[#0d233f] font-display mb-2">¿Para quién es este servicio?</h2>
                <div className="space-y-1.5">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#475569]">
                      <item.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qué incluye el diseño - compacto como texto con iconos inline */}
              <div data-aos="fade-right" data-aos-delay="50">
                <h2 className="text-lg font-bold text-[#0d233f] font-display mb-2">¿Qué incluye el diseño?</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-sm text-[#475569]">
                      <feature.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-lg font-bold text-[#0d233f] font-display mb-3">Preguntas Frecuentes</h2>
                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === index}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-[32%]">
              <div className="space-y-4" data-aos="fade-left">
                {/* Precio desktop */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <p className="text-xs uppercase tracking-wider mb-1 text-gray-500">Precio único</p>
                  <div className="text-3xl font-bold mb-1 text-[#0d233f]">Desde $70.000</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs mb-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-500" /> Sin cuotas
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-500" /> Sin costos ocultos
                    </span>
                  </div>

                  {/* Botón WhatsApp desktop */}
                  <a
                    href="https://wa.me/541173739055?text=Hola!%20Me%20interesa%20la%20Landing%20Page%20Básica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0d233f] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1a3a5c] hover:shadow-md transition-all duration-500 ease-out w-full"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                {/* El primer año incluye desktop */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Incluido en el primer año</h3>
                  <div className="space-y-2">
                    {additionals.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="text-[#0d233f] font-medium">{item.title}</span>
                        <Check className="w-4 h-4 text-gray-500 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Información de pago desktop */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-500 ease-out">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Información de pago</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#0d233f] font-medium">Método de pago: Transferencia</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-[#0d233f] font-medium">Realizamos factura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
