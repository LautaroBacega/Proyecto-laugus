"use client"

import { useState } from "react"
import {
  Check,
  Globe,
  GraduationCap,
  Users,
  MessageSquare,
  FileSearch,
  Palette,
  Settings,
  Rocket,
  ChevronDown,
} from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Reunión / Entrevista inicial",
    description: "Conocemos tu negocio, tus objetivos y lo que necesitás comunicar.",
  },
  {
    icon: FileSearch,
    title: "Análisis de necesidades",
    description: "Definimos la estructura, funcionalidades y contenido de tu sitio.",
  },
  {
    icon: Palette,
    title: "Presentación de prototipo",
    description: "Te mostramos un diseño inicial para que veas cómo va a quedar.",
  },
  {
    icon: Settings,
    title: "Ajustes con el cliente",
    description: "Hacemos las modificaciones necesarias hasta que estés conforme.",
  },
  {
    icon: Globe,
    title: "Desarrollo final",
    description: "Construimos tu sitio web con las últimas tecnologías.",
  },
  {
    icon: Rocket,
    title: "Publicación",
    description: "Subimos tu sitio a internet y lo dejamos funcionando.",
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

const tabExamples = ["Nosotros", "Servicios", "Contacto", "Galería", "Preguntas frecuentes", "Blog"]

const whoNeedsWebsite = [
  {
    title: "Emprendedores",
    description: "Que buscan dar el primer paso hacia la presencia digital.",
  },
  {
    title: "Negocios locales",
    description: "Que quieren ser encontrados por clientes de su zona.",
  },
  {
    title: "Profesionales independientes",
    description: "Médicos, abogados, contadores, consultores y más.",
  },
  {
    title: "Marcas personales",
    description: "Influencers, coaches y creadores de contenido.",
  },
  {
    title: "Academias y centros educativos",
    description: "Que necesitan mostrar sus cursos y servicios.",
  },
  {
    title: "PyMEs y empresas",
    description: "Que buscan profesionalizar su imagen online.",
  },
]

const whyHaveWebsite = [
  {
    title: "Presencia online 24/7",
    description: "Tu negocio está disponible para tus clientes en cualquier momento del día.",
  },
  {
    title: "Credibilidad y confianza",
    description: "Una página profesional genera confianza y mejora tu imagen de marca.",
  },
  {
    title: "Más ventas y clientes",
    description: "Llegás a más personas y convertís visitantes en clientes.",
  },
  {
    title: "Contacto directo",
    description: "Tus clientes pueden contactarte fácilmente por formularios o WhatsApp.",
  },
  {
    title: "Control total del contenido",
    description: "Vos decidís qué mostrar y cómo comunicar tu mensaje.",
  },
  {
    title: "Diferenciación",
    description: "Destacate de la competencia con un sitio único y profesional.",
  },
]

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl md:text-2xl font-bold text-[#0d233f] hover-lift">{title}</h2>
        <ChevronDown
          className={`w-6 h-6 text-[#06b6d4] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">{children}</div>
      </div>
    </div>
  )
}

export default function DesarrolloWeb() {
  return (
    <div className="bg-[#f6fbff]">
      <section className="bg-[#0d233f] text-white min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center py-8">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Desarrollo Web
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Creamos páginas web profesionales que impulsan tu negocio y te conectan con más clientes.
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-[#06b6d4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0891b2] transition-colors btn-hover"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Conocé nuestros servicios
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="servicios" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div data-aos="fade-up">
            <CollapsibleSection title="¿Quién debería tener una página web?">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {whoNeedsWebsite.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 hover-lift cursor-default">
                    <div className="w-10 h-10 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center flex-shrink-0 icon-hover">
                      <Users className="w-5 h-5 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d233f] mb-1">{item.title}</h3>
                      <p className="text-[#475569] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <CollapsibleSection title="¿Por qué tener una página web?">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {whyHaveWebsite.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f6fbff] p-4 md:p-6 rounded-xl hover-lift cursor-default transition-all duration-300 hover:bg-[#e8f4ff]"
                  >
                    <h3 className="font-semibold text-[#0d233f] mb-2">{item.title}</h3>
                    <p className="text-[#475569] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* Nuestro proceso de desarrollo */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] mb-6 text-center hover-lift" data-aos="fade-up">
            Nuestro proceso de desarrollo
          </h2>
          <p
            className="text-[#475569] text-center mb-8 md:mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Un proceso claro y ordenado para que tu proyecto avance sin complicaciones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 card-hover h-full"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0d233f] text-white rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="w-6 h-6 text-[#06b6d4] icon-hover" />
                </div>
                <h3 className="font-semibold text-[#0d233f] mb-2 hover-lift cursor-default">{step.title}</h3>
                <p className="text-[#475569] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] mb-4 text-center hover-lift" data-aos="fade-up">
            Nuestros Planes
          </h2>
          <p
            className="text-[#475569] text-center mb-8 md:mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Elegí la opción que mejor se adapte a tus necesidades. Todos nuestros planes incluyen soporte personalizado.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Landing Page */}
            <div
              className="bg-[#f6fbff] rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col h-full card-hover"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center flex-shrink-0 animate-float">
                  <Globe className="w-7 h-7 text-[#06b6d4]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0d233f] hover-lift">Landing Page</h3>
                  <p className="text-[#06b6d4] font-semibold text-lg md:text-xl">$70.000</p>
                </div>
              </div>

              <p className="text-[#475569] mb-6 text-sm md:text-base">
                Una página web de una sola sección enfocada en presentar tu servicio o producto de forma clara y
                efectiva.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4 hover-lift cursor-default transition-all duration-300 hover:shadow-md">
                  <h4 className="font-semibold text-[#0d233f] mb-2 text-sm md:text-base">
                    Opción Autogestionable: +$30.000
                  </h4>
                  <p className="text-[#475569] text-xs md:text-sm">
                    Podés editar textos, imágenes y contenido sin depender del desarrollador.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 hover-lift cursor-default transition-all duration-300 hover:shadow-md">
                  <h4 className="font-semibold text-[#0d233f] mb-2 text-sm md:text-base">
                    Pestañas extra: $20.000 c/u
                  </h4>
                  <p className="text-[#475569] text-xs md:text-sm mb-3">
                    Secciones adicionales para organizar mejor tu contenido.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tabExamples.map((tab, index) => (
                      <span
                        key={index}
                        className="bg-[#f6fbff] text-[#0d233f] text-xs px-3 py-1 rounded-full border border-gray-200 transition-all duration-300 hover:bg-[#06b6d4] hover:text-white hover:border-[#06b6d4] cursor-default"
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-[#0d233f] mb-3 text-sm md:text-base">¿Qué incluye?</h4>
              <ul className="space-y-2 mb-6 flex-grow">
                {landingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 hover-lift cursor-default">
                    <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#475569] text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20una%20Landing%20Page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors w-full justify-center mt-auto btn-hover animate-pulse-glow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Landing Page
              </a>
            </div>

            {/* E-learning */}
            <div
              id="elearning"
              className="bg-[#0d233f] rounded-2xl p-6 md:p-8 text-white flex flex-col h-full card-hover"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 bg-[#06b6d4] rounded-xl flex items-center justify-center flex-shrink-0 animate-float"
                  style={{ animationDelay: "500ms" }}
                >
                  <GraduationCap className="w-7 h-7 text-[#0d233f]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold hover-lift">Plataforma E-learning</h3>
                  <p className="text-[#06b6d4] font-semibold text-lg md:text-xl">A consultar</p>
                </div>
              </div>

              <h4 className="font-semibold mb-3 text-sm md:text-base">¿Qué es una plataforma e-learning?</h4>
              <p className="text-gray-300 mb-6 text-xs md:text-sm">
                Es un sitio web donde podés crear, organizar y vender tus cursos online. Tus alumnos pueden acceder a
                las clases, ver videos, descargar material y seguir su progreso desde cualquier dispositivo.
              </p>

              <h4 className="font-semibold mb-3 text-sm md:text-base">¿Por qué conviene tener tu propia plataforma?</h4>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-3 hover-lift cursor-default">
                  <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs md:text-sm">
                    <strong className="text-white">Control total:</strong> Vos decidís precios, contenido y diseño.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover-lift cursor-default">
                  <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs md:text-sm">
                    <strong className="text-white">Sin comisiones:</strong> A diferencia de otras plataformas, no pagás
                    un porcentaje por cada venta.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover-lift cursor-default">
                  <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs md:text-sm">
                    <strong className="text-white">Tu marca:</strong> Construís una imagen profesional con tu propio
                    dominio y diseño.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover-lift cursor-default">
                  <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs md:text-sm">
                    <strong className="text-white">Gestión de alumnos:</strong> Administrás inscripciones, pagos y
                    acceso a contenido fácilmente.
                  </span>
                </li>
              </ul>

              <a
                href="https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20una%20plataforma%20e-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-colors w-full justify-center mt-auto btn-hover animate-pulse-glow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] mb-4 hover-lift" data-aos="fade-up">
            ¿Tenés dudas sobre qué necesitás?
          </h2>
          <p
            className="text-[#475569] mb-8 max-w-2xl mx-auto text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Escribinos y te ayudamos a encontrar la mejor opción para tu negocio. Sin compromiso.
          </p>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20bd5a] transition-colors btn-hover animate-pulse-glow"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactanos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
