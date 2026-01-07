"use client"

import { Check, Globe, Sparkles } from "lucide-react"

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

export default function LandingPage() {
  return (
    <div className="bg-[#fafbfc]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d233f] via-[#0d233f] to-[#1a3a5f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center py-8 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg mx-auto mb-6 animate-zoom-in">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-zoom-in"
            style={{ fontFamily: "'Sora', sans-serif", animationDelay: "0.1s" }}
          >
            Landing Page
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 opacity-0 animate-zoom-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Desde $70.000
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-zoom-in-up"
            style={{ fontFamily: "'Inter', sans-serif", animationDelay: "0.3s" }}
          >
            Una página web de una sola sección enfocada en presentar tu servicio o producto de forma clara y efectiva.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-3">
              Incluido
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">¿Qué incluye?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {landingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#0d233f] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-3">
              Extras
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">Opciones adicionales</h2>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d233f] text-lg font-display">Opción Autogestionable</h3>
                    <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      +$30.000
                    </p>
                  </div>
                </div>
                <p className="text-[#475569]">
                  Podés editar textos, imágenes y contenido sin depender del desarrollador.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d233f] text-lg font-display">Pestañas extra</h3>
                    <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      $20.000 c/u
                    </p>
                  </div>
                </div>
                <p className="text-[#475569] mb-3">Secciones adicionales para organizar mejor tu contenido.</p>
                <div className="flex flex-wrap gap-2">
                  {tabExamples.map((tab, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-cyan-50 to-blue-50 text-[#0d233f] text-sm px-3 py-1 rounded-full border border-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-colors cursor-default"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display mb-4">
            ¿Te interesa una Landing Page?
          </h2>
          <p className="text-[#475569] mb-6 max-w-xl mx-auto">
            Contactanos y te ayudamos a crear la página ideal para tu negocio.
          </p>
          <a
            href="https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20una%20Landing%20Page"
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
