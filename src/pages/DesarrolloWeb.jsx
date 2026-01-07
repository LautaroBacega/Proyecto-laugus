"use client"

import { useState } from "react"
import {
  Check,
  Globe,
  GraduationCap,
  ShoppingCart,
  Users,
  MessageSquare,
  FileSearch,
  Palette,
  Settings,
  Rocket,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Reunión / Entrevista inicial",
    description: "Conocemos tu negocio, tus objetivos y lo que necesitás comunicar.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FileSearch,
    title: "Análisis de necesidades",
    description: "Definimos la estructura, funcionalidades y contenido de tu sitio.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Palette,
    title: "Presentación de prototipo",
    description: "Te mostramos un diseño inicial para que veas cómo va a quedar.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Settings,
    title: "Ajustes con el cliente",
    description: "Hacemos las modificaciones necesarias hasta que estés conforme.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Desarrollo final",
    description: "Construimos tu sitio web con las últimas tecnologías.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Rocket,
    title: "Publicación",
    description: "Subimos tu sitio a internet y lo dejamos funcionando.",
    color: "from-rose-500 to-orange-500",
  },
]

const landingFeatures = [
  "Diseño personalizado responsive",
  "Desarrollo y configuración",
  "Formulario de contacto",
  "SEO básico",
  "Rondas de revisión",
  "Hosting incluido por 1 año",
  "Dominio incluido por 1 año",
  "Certificado SSL incluido por 1 año",
]

const elearningFeatures = [
  "Plataforma autogestionable",
  "Sistema de usuarios y login",
  "Gestión de cursos y módulos",
  "Reproductor de video integrado",
  "Certificados automáticos",
  "Pasarela de pagos",
  "Panel de administración",
  "Soporte técnico incluido",
]

const ecommerceFeatures = [
  "Catálogo de productos ilimitado",
  "Carrito de compras",
  "Checkout optimizado",
  "Múltiples métodos de pago",
  "Gestión de inventario",
  "Panel de administración",
  "Integración con envíos",
  "SEO optimizado para productos",
]

const tabExamples = ["Nosotros", "Servicios", "Contacto", "Galería", "Preguntas frecuentes", "Blog"]

const whoNeedsWebsite = [
  {
    title: "Emprendedores",
    description: "Que buscan dar el primer paso hacia la presencia digital.",
    icon: Rocket,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Negocios locales",
    description: "Que quieren ser encontrados por clientes de su zona.",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Profesionales independientes",
    description: "Médicos, abogados, contadores, consultores y más.",
    icon: Users,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "Marcas personales",
    description: "Influencers, coaches y creadores de contenido.",
    icon: Sparkles,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Academias y centros educativos",
    description: "Que necesitan mostrar sus cursos y servicios.",
    icon: GraduationCap,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "PyMEs y empresas",
    description: "Que buscan profesionalizar su imagen online.",
    icon: Shield,
    color: "from-rose-400 to-rose-600",
  },
]

const whyHaveWebsite = [
  {
    title: "Presencia online 24/7",
    description: "Tu negocio está disponible para tus clientes en cualquier momento del día.",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Credibilidad y confianza",
    description: "Una página profesional genera confianza y mejora tu imagen de marca.",
    icon: Shield,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Más ventas y clientes",
    description: "Llegás a más personas y convertís visitantes en clientes.",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Contacto directo",
    description: "Tus clientes pueden contactarte fácilmente por formularios o WhatsApp.",
    icon: MessageSquare,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Control total del contenido",
    description: "Vos decidís qué mostrar y cómo comunicar tu mensaje.",
    icon: Settings,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Diferenciación",
    description: "Destacate de la competencia con un sitio único y profesional.",
    icon: Zap,
    gradient: "from-rose-500 to-orange-500",
  },
]

function CollapsibleSection({ title, children, defaultOpen = false, gradient = "from-cyan-500 to-blue-500" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="relative group">
      {/* Borde con gradiente */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
      ></div>
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-[#0d233f] font-display">{title}</h2>
          </div>
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
        </button>
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ title, price, icon: Icon, features, gradient, whatsappMessage, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group self-start">
      <div
        className={`absolute -inset-[2px] bg-gradient-to-r ${gradient} rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-md`}
      ></div>
      <div className="relative bg-white rounded-3xl p-5 md:p-6 shadow-xl flex flex-col border border-gray-100">
        {/* Header con icono, título y precio */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0d233f] font-display">{title}</h3>
            <p className={`text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{price}</p>
          </div>
        </div>

        {/* Botón desplegable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-10 mb-4 hover:shadow-md transition-all duration-300`}
          style={{ background: `linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))` }}
        >
          <span className="text-sm font-semibold text-[#0d233f]">Ver detalles del producto</span>
          <ChevronDown
            className={`w-5 h-5 text-[#06b6d4] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Contenido desplegable */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1500px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}
        >
          {children}

          {features && (
            <div className="mt-4">
              <h4 className="font-semibold text-[#0d233f] mb-3 text-sm">¿Qué incluye?</h4>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 w-[calc(50%-0.25rem)] min-w-[140px]">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#475569] text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Botón WhatsApp */}
        <a
          href={`https://wa.me/541173739055`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-3 bg-gradient-to-r ${gradient} text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full justify-center`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Solicitar {title}
        </a>
      </div>
    </div>
  )
}

export default function DesarrolloWeb() {
  return (
    <div className="bg-[#fafbfc]">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d233f] via-[#0d233f] to-[#1a3a5f]">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center py-8 relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-zoom-in"
            style={{ fontFamily: "'Sora', sans-serif", animationDelay: "0.1s" }}
          >
            Desarrollo Web
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-zoom-in-up"
            style={{ fontFamily: "'Inter', sans-serif", animationDelay: "0.3s" }}
          >
            Creamos páginas web profesionales que impulsan tu negocio y te conectan con más clientes.
          </p>
        </div>
      </section>

      <section id="servicios" className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div data-aos="fade-up">
            <CollapsibleSection title="¿Quienes necesitan una página web?" gradient="from-cyan-500 to-blue-500">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whoNeedsWebsite.map((item, index) => (
                  <div
                    key={index}
                    className="relative group/item p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-md group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0d233f] mb-1 font-display">{item.title}</h3>
                    <p className="text-[#475569] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <CollapsibleSection title="¿Por qué necesitás una página web?" gradient="from-blue-500 to-indigo-500">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyHaveWebsite.map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden p-4 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group/item"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`}></div>
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 shadow-md group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0d233f] mb-1 font-display">{item.title}</h3>
                    <p className="text-[#475569] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Título con diseño decorativo */}
          <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-3">
              Paso a paso
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">
              Nuestro proceso de desarrollo
            </h2>
            <p className="text-[#475569] mt-3 max-w-2xl mx-auto text-sm md:text-base">
              Un proceso claro y ordenado para que tu proyecto avance sin complicaciones.
            </p>
          </div>

          {/* Timeline con cards */}
          <div className="relative">
            {/* Línea central (solo desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500"></div>

            <div className="space-y-4 lg:space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`lg:flex lg:items-center lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="relative group">
                      <div
                        className={`absolute -inset-[1px] bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                      ></div>
                      <div className="relative bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-gray-100">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                          >
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                          >
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="font-bold text-[#0d233f] mb-1 font-display">{step.title}</h3>
                        <p className="text-[#475569] text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Punto central (solo desktop) */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg relative z-10"></div>

                  {/* Espaciador */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Título con diseño decorativo */}
          <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-3">
              Soluciones web
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">Productos disponibles</h2>
            <p className="text-[#475569] mt-3 max-w-2xl mx-auto text-sm md:text-base">
              Elegí la opción que mejor se adapte a tus necesidades. Todos nuestros productos incluyen soporte
              personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-start">
            {/* Landing Page */}
            <div data-aos="fade-up" data-aos-delay="100">
              <ProductCard
                title="Landing Page"
                price="$70.000"
                icon={Globe}
                features={landingFeatures}
                gradient="from-cyan-500 to-blue-500"
                whatsappMessage="Hola! Me interesa una Landing Page"
              >
                <p className="text-[#475569] text-sm mb-4">
                  Una página web de una sola sección enfocada en presentar tu servicio o producto de forma clara y
                  efectiva.
                </p>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 border border-cyan-100">
                    <h4 className="font-semibold text-[#0d233f] mb-1 text-sm">Opción Autogestionable: +$30.000</h4>
                    <p className="text-[#475569] text-xs">
                      Podés editar textos, imágenes y contenido sin depender del desarrollador.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 border border-cyan-100">
                    <h4 className="font-semibold text-[#0d233f] mb-1 text-sm">Pestañas extra: $20.000 c/u</h4>
                    <p className="text-[#475569] text-xs mb-2">
                      Secciones adicionales para organizar mejor tu contenido.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {tabExamples.map((tab, index) => (
                        <span
                          key={index}
                          className="bg-white text-[#0d233f] text-xs px-2 py-0.5 rounded-full border border-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-colors cursor-default"
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ProductCard>
            </div>

            {/* E-learning */}
            <div data-aos="fade-up" data-aos-delay="200">
              <ProductCard
                title="E-learning"
                price="A consultar"
                icon={GraduationCap}
                features={elearningFeatures}
                gradient="from-indigo-500 to-purple-500"
                whatsappMessage="Hola! Me interesa una plataforma E-learning"
              >
                <p className="text-[#475569] text-sm mb-4">
                  Plataforma donde podés crear, organizar y vender tus cursos online. Tus alumnos acceden a clases,
                  videos y material desde cualquier dispositivo.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100">
                  <h4 className="font-semibold text-[#0d233f] mb-2 text-sm">¿Por qué tu propia plataforma?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Control total:</strong> Vos decidís precios, contenido y
                        diseño.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Sin comisiones:</strong> No pagás porcentaje por cada venta.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Tu marca:</strong> Dominio y diseño propio.
                      </span>
                    </li>
                  </ul>
                </div>
              </ProductCard>
            </div>

            {/* E-commerce */}
            <div data-aos="fade-up" data-aos-delay="300">
              <ProductCard
                title="E-commerce"
                price="A consultar"
                icon={ShoppingCart}
                features={ecommerceFeatures}
                gradient="from-rose-500 to-orange-500"
                whatsappMessage="Hola! Me interesa una tienda E-commerce"
              >
                <p className="text-[#475569] text-sm mb-4">
                  Tienda online completa para vender tus productos. Sistema de carrito, pagos integrados y gestión de
                  inventario.
                </p>

                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-3 border border-rose-100">
                  <h4 className="font-semibold text-[#0d233f] mb-2 text-sm">Beneficios de tu tienda online</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Ventas 24/7:</strong> Tu tienda siempre abierta.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Alcance nacional:</strong> Vendé a todo el país.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[#475569] text-xs">
                        <strong className="text-[#0d233f]">Automatización:</strong> Pagos y envíos integrados.
                      </span>
                    </li>
                  </ul>
                </div>
              </ProductCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
