"use client"

import { Check, GraduationCap, Shield, Zap, Users } from "lucide-react"

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

const benefits = [
  {
    icon: Shield,
    title: "Control total",
    description: "Vos decidís precios, contenido y diseño.",
  },
  {
    icon: Zap,
    title: "Sin comisiones",
    description: "No pagás porcentaje por cada venta.",
  },
  {
    icon: Users,
    title: "Tu marca",
    description: "Dominio y diseño propio.",
  },
]

export default function Elearning() {
  return (
    <div className="bg-[#fafbfc]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d233f] via-[#0d233f] to-[#1a3a5f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center py-8 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg mx-auto mb-6 animate-zoom-in">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-zoom-in"
            style={{ fontFamily: "'Sora', sans-serif", animationDelay: "0.1s" }}
          >
            E-learning
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 opacity-0 animate-zoom-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A consultar
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-zoom-in-up"
            style={{ fontFamily: "'Inter', sans-serif", animationDelay: "0.3s" }}
          >
            Plataforma donde podés crear, organizar y vender tus cursos online. Tus alumnos acceden a clases, videos y
            material desde cualquier dispositivo.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-3">
              Incluido
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">¿Qué incluye?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {elearningFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#0d233f] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-3">
              Ventajas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display">
              ¿Por qué tu propia plataforma?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative bg-white rounded-2xl p-5 border border-gray-100 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0d233f] text-lg font-display mb-2">{benefit.title}</h3>
                  <p className="text-[#475569]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d233f] font-display mb-4">
            ¿Te interesa una plataforma E-learning?
          </h2>
          <p className="text-[#475569] mb-6 max-w-xl mx-auto">
            Contactanos y te ayudamos a crear tu propia academia online.
          </p>
          <a
            href="https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20una%20plataforma%20E-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar E-learning
          </a>
        </div>
      </section>
    </div>
  )
}
