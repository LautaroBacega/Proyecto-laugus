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
import BackButton from "../../../components/BackButton"

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
  {
    icon: Users,
    text: "Emprendedores que quieren arrancar con una web simple pero poderosa",
  },
  {
    icon: Briefcase,
    text: "Negocios que necesitan destacar una propuesta puntual",
  },
  {
    icon: User,
    text: "Profesionales que buscan mostrar su servicio de forma directa",
  },
]

const designFeatures = [
  { icon: ImageIcon, text: "Hasta 6 imágenes o banners" },
  { icon: Link2, text: "Vínculos a redes sociales y enlaces estratégicos" },
  { icon: MessageCircle, text: "Botón flotante de WhatsApp siempre visible" },
  { icon: Smartphone, text: "Diseño 100% adaptable a celulares, tablets y PC" },
]

const additionals = [
  {
    title: "Hosting Básico",
    icon: Server,
    details: [
      "1 sitio web",
      "30GB de espacio en disco",
      "Tráfico mensual ilimitado*",
      "Cuentas de correo ilimitadas*",
      "Correo corporativo",
      "Base de datos y FTP",
      "Soporte básico 24/7 vía ticket",
    ],
    price: "Primer año gratis – luego AR$ 85.000 / año",
  },
  {
    title: "Dominio .com",
    icon: Globe,
    details: [],
    price: "Primer año gratis – luego AR$ 60.000 / año",
  },
  {
    title: "Certificado SSL (sitio seguro)",
    icon: Shield,
    details: [],
    price: "Primer año gratis – luego AR$ 45.000 / año",
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
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0d233f] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
        <p className="px-4 pb-4 text-[#475569]">{answer}</p>
      </div>
    </div>
  )
}

export default function LandingBasica() {
  const [openFAQ, setOpenFAQ] = useState(null)

  return (
    <div className="bg-[#fafbfc]">

      <BackButton gradient="from-cyan-500 to-blue-500" />

      {/* Benefits Section - New section "Qué vas a lograr" */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">
              Con tu landing personalizada vas a poder:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative bg-[#fafbfc] rounded-2xl p-5 border border-gray-100 h-full flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d233f] text-lg font-display mb-1">{benefit.title}</h3>
                    <p className="text-[#475569] text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section - "Para quién es" */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">
              ¿Para quién es este servicio?
            </h2>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#0d233f] font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Features Section - "Qué incluye el diseño" */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">¿Qué incluye el diseño?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {designFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#0d233f] font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additionals Section - "Adicionales y detalles" */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">Adicionales y detalles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
            {additionals.map((item, index) => (
              <div key={index} className="relative group h-full">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative bg-white rounded-2xl p-5 border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0d233f] text-lg font-display mb-3">{item.title}</h3>
                  {item.details.length > 0 && (
                    <ul className="space-y-1 mb-4 flex-grow">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                          <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-sm font-semibold text-cyan-600 mt-auto">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info Section - "Aclaración de pago" */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-3xl mx-auto px-4" data-aos="fade-up">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-center text-white shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Pagás una vez, el sitio es tuyo para siempre</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6" />
                <span className="font-medium">Sin cuotas mensuales</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6" />
                <span className="font-medium">Sin costos ocultos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6" />
                <span className="font-medium">Pago único</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - "Preguntas Frecuentes" */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
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
      </section>

      {/* CTA Section - "¿Arrancamos?" */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display mb-4">¿Arrancamos?</h2>
          <p className="text-[#475569] mb-6 max-w-xl mx-auto">
            Contanos tu idea y te ayudamos a poner tu negocio online.
          </p>
          <a
            href="https://wa.me/541173739055?text=Hola!%20Me%20interesa%20la%20Landing%20Page%20Básica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Landing Page
          </a>
        </div>
      </section>
    </div>
  )
}
