"use client"

import { useState } from "react"
import {
  Check,
  BarChart3,
  AlertTriangle,
  FileText,
  Globe,
  Shield,
  Server,
  ChevronDown,
  Users,
  Briefcase,
  Package,
  Smartphone,
} from "lucide-react"

const targetAudience = [
  { icon: Users, text: "Comercios que quieren ordenar su inventario de forma digital" },
  { icon: Briefcase, text: "Depósitos y almacenes que necesitan trazabilidad de productos" },
  { icon: Package, text: "Distribuidoras que buscan control de entradas y salidas" },
]

const designFeatures = [
  { icon: BarChart3, text: "Inventario en tiempo real" },
  { icon: AlertTriangle, text: "Alertas de stock bajo automáticas" },
  { icon: FileText, text: "Reportes y estadísticas detalladas" },
  { icon: Smartphone, text: "Acceso desde cualquier dispositivo" },
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
    question: "¿Qué es un sistema de control de stock?",
    answer:
      "Es una plataforma web que te permite gestionar tu inventario, registrar movimientos y tener visibilidad total de tu mercadería.",
  },
  {
    question: "¿Cuánto tarda en estar listo?",
    answer:
      "El tiempo promedio de entrega es de 7 a 10 días hábiles desde que recibimos toda la información necesaria.",
  },
  {
    question: "¿Puedo categorizar mis productos?",
    answer: "Sí, podés crear categorías, subcategorías y etiquetas para organizar tu inventario como prefieras.",
  },
  {
    question: "¿Recibo alertas cuando hay poco stock?",
    answer: "Sí, el sistema te notifica automáticamente cuando un producto está por debajo del mínimo configurado.",
  },
  {
    question: "¿Puedo ver el historial de movimientos?",
    answer: "Sí, tenés acceso completo al historial de entradas, salidas y ajustes de inventario.",
  },
  {
    question: "¿Funciona bien en celulares?",
    answer: "Sí, el diseño es 100% responsive, adaptado a móviles y tablets.",
  },
  {
    question: "¿Qué rubros pueden usarlo?",
    answer: "Comercios minoristas, ferreterías, farmacias, librerías, tiendas de ropa, supermercados y más.",
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
          className={`w-4 h-4 text-amber-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-32" : "max-h-0"}`}>
        <p className="px-3 pb-3 text-[#475569] text-sm">{answer}</p>
      </div>
    </div>
  )
}

export default function ControlStock() {
  const [openFAQ, setOpenFAQ] = useState(null)

  return (
    <div className="bg-[#fafbfc]">
      <section className="py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* COLUMNA IZQUIERDA - 70% */}
            <div className="lg:w-[68%] space-y-6">
              <div data-aos="fade-right">
                <img
                  src="/controlstock/controlstockIMG.avif"
                  alt="Sistema de Control de Stock"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Mobile: Precio y adicionales */}
              <div className="lg:hidden space-y-4">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white text-center shadow-lg">
                  <p className="text-xs uppercase tracking-wider mb-1 opacity-80">Precio único</p>
                  <div className="text-3xl font-bold mb-1">Desde $150.000</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs mb-4 opacity-90">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3" /> Sin cuotas
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3" /> Sin costos ocultos
                    </span>
                  </div>

                  <a
                    href="https://wa.me/541173739055?text=Hola!%20Me%20interesa%20un%20sistema%20de%20control%20de%20stock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-amber-600 px-4 py-2.5 rounded-lg font-semibold text-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 w-full"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Incluido en el primer año</h3>
                  <div className="space-y-2">
                    {additionals.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#0d233f] font-medium">{item.title}</span>
                        <Check className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              {/* Para quién es */}
              <div data-aos="fade-right">
                <h2 className="text-lg font-bold text-[#0d233f] font-display mb-2">¿Para quién es este servicio?</h2>
                <div className="space-y-1.5">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#475569]">
                      <item.icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qué incluye */}
              <div data-aos="fade-right" data-aos-delay="50">
                <h2 className="text-lg font-bold text-[#0d233f] font-display mb-2">¿Qué incluye el sistema?</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-sm text-[#475569]">
                      <feature.icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
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

            {/* COLUMNA DERECHA - 30% (solo desktop) */}
            <div className="hidden lg:block lg:w-[32%]">
              <div className="space-y-4" data-aos="fade-left">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white text-center shadow-lg">
                  <p className="text-xs uppercase tracking-wider mb-1 opacity-80">Precio único</p>
                  <div className="text-3xl font-bold mb-1">Desde $150.000</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs mb-4 opacity-90">
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3" /> Sin cuotas
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3 h-3" /> Sin costos ocultos
                    </span>
                  </div>

                  <a
                    href="https://wa.me/541173739055?text=Hola!%20Me%20interesa%20un%20sistema%20de%20control%20de%20stock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-amber-600 px-4 py-2.5 rounded-lg font-semibold text-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 w-full"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0d233f] mb-3 text-center">Incluido en el primer año</h3>
                  <div className="space-y-2">
                    {additionals.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#0d233f] font-medium">{item.title}</span>
                        <Check className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
