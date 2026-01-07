"use client"

import { Check, Globe, Edit3, Layers, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const landingVersions = [
  {
    id: "base",
    title: "Landing Page básica",
    price: "$70.000",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
    description: "Página web de una sola sección para presentar tu servicio o producto de forma clara y efectiva.",
    features: [
      "Diseño personalizado responsive",
      "Desarrollo y configuración",
      "Formulario de contacto",
      "SEO básico",
      "Rondas de revisión",
      "Hosting incluido por 1 año",
      "Dominio incluido por 1 año",
      "Certificado SSL incluido por 1 año",
    ],
    route: "/servicios/landing-page/basica",
  },
  {
    id: "autogestionable",
    title: "Landing Autogestionable",
    price: "$100.000",
    icon: Edit3,
    gradient: "from-blue-500 to-indigo-500",
    description: "Editá textos, imágenes y contenido vos mismo sin depender del desarrollador.",
    features: [
      "Todo lo incluido en la Landing básica",
      "Panel de administración",
      "Editor de textos e imágenes",
      "Gestión de contenido autónoma",
      "Capacitación de uso incluida",
    ],
    route: "/servicios/landing-page/autogestionable",
  },
  {
    id: "pestanas",
    title: "Landing con Pestañas Extra",
    price: "Desde $90.000",
    icon: Layers,
    gradient: "from-indigo-500 to-purple-500",
    description: "Secciones adicionales para organizar mejor tu contenido y mostrar más información.",
    features: [
      "Todo lo incluido en Landing Base",
      "Pestañas adicionales ($20.000 c/u)",
      "Navegación entre secciones",
      "Diseño coherente en todas las páginas",
    ],
    tabExamples: ["Nosotros", "Servicios", "Contacto", "Galería", "Preguntas frecuentes", "Blog"],
    route: "/servicios/landing-page/pestanas",
  },
]

export default function LandingPage() {
  return (
    <div className="bg-[#fafbfc]">
      {/* Versiones Section - bg-[#fafbfc] for consistency */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">Elegí tu futuro sitio web</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {landingVersions.map((version, index) => (
              <div key={version.id} className="relative group h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                <div
                  className={`absolute -inset-[2px] bg-gradient-to-r ${version.gradient} rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-md`}
                ></div>
                <div className="relative bg-[#fafbfc] rounded-3xl p-6 shadow-xl flex flex-col h-full border border-gray-100">
                  {/* Header */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${version.gradient} flex items-center justify-center shadow-lg mb-4`}
                  >
                    <version.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#0d233f] font-display mb-2">{version.title}</h3>

                  <p
                    className={`text-2xl font-bold bg-gradient-to-r ${version.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {version.price}
                  </p>

                  <p className="text-[#475569] text-sm mb-5">{version.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-5 flex-grow">
                    {version.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${version.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#0d233f] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tab examples for pestañas version */}
                  {version.tabExamples && (
                    <div className="mb-5">
                      <p className="text-[#475569] text-xs mb-2">Ejemplos de pestañas:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {version.tabExamples.map((tab, idx) => (
                          <span
                            key={idx}
                            className={`bg-gradient-to-r from-indigo-50 to-purple-50 text-[#0d233f] text-xs px-2 py-1 rounded-full border border-indigo-200`}
                          >
                            {tab}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Link
                      to={version.route}
                      className={`inline-flex items-center justify-center gap-2 bg-[#fafbfc] border-2 border-transparent bg-clip-padding text-[#0d233f] px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full relative before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:${version.gradient} before:-z-10`}
                      style={{
                        background: `linear-gradient(#fafbfc, #fafbfc) padding-box, linear-gradient(to right, var(--tw-gradient-stops)) border-box`,
                        borderColor: "transparent",
                      }}
                    >
                      <span
                        className={`bg-gradient-to-r ${version.gradient} bg-clip-text text-transparent font-semibold`}
                      >
                        Ver más
                      </span>
                      <ArrowRight
                        className={`w-4 h-4`}
                        style={{
                          color: version.gradient.includes("cyan")
                            ? "#06b6d4"
                            : version.gradient.includes("indigo")
                              ? "#6366f1"
                              : "#3b82f6",
                        }}
                      />
                    </Link>
                    <a
                      href={`https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20la%20${encodeURIComponent(version.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${version.gradient} text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - bg-[#fafbfc] for consistency */}
      <section className="py-10 md:py-14 bg-[#fafbfc]">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display mb-4">¿No sabés cuál elegir?</h2>
          <p className="text-[#475569] mb-6 max-w-xl mx-auto">
            Contactanos y te asesoramos para encontrar la opción ideal para tu negocio.
          </p>
          <a
            href="https://wa.me/5491112345678?text=Hola!%20Necesito%20asesoramiento%20para%20elegir%20una%20Landing%20Page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir asesoramiento
          </a>
        </div>
      </section>
    </div>
  )
}
