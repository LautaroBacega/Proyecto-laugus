import { Link } from "react-router-dom"
import { Globe, ShoppingCart, GraduationCap, ArrowRight, Star } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Institucional, blog personal, blog de noticias, entre otros.",
    cta: "MÁS INFORMACIÓN",
    link: "/desarrollo-web",
  },
  {
    icon: GraduationCap,
    title: "Plataforma E-learning",
    description: "Vendé tus cursos online desde tu propia casa.",
    cta: "MÁS INFORMACIÓN",
    link: "/desarrollo-web#elearning",
  },
  {
    icon: ShoppingCart,
    title: "Tienda Online",
    description: "Vendé tus productos sin pagar comisiones por ventas.",
    cta: "MÁS INFORMACIÓN",
    link: "/contacto",
  },
]

const testimonials = [
  {
    name: "Martín García",
    rating: 5,
    text: "Excelente trabajo, muy profesionales. Mi página web quedó exactamente como la imaginaba. La atención fue impecable desde el primer día.",
    date: "Hace 2 semanas",
  },
  {
    name: "Carolina López",
    rating: 5,
    text: "Contraté el servicio para mi academia de idiomas y superó mis expectativas. Rápidos, eficientes y siempre disponibles para resolver dudas.",
    date: "Hace 1 mes",
  },
  {
    name: "Federico Ruiz",
    rating: 5,
    text: "Mi tienda online funciona perfecto. Las ventas aumentaron un 40% desde que tengo la página. Muy recomendable.",
    date: "Hace 3 semanas",
  },
  {
    name: "Luciana Méndez",
    rating: 5,
    text: "Muy contentos con el resultado. Nos guiaron en todo el proceso y entregaron antes de tiempo. Sin dudas volveremos a trabajar con ellos.",
    date: "Hace 2 meses",
  },
]

export default function Home() {
  return (
    <div className="bg-[#fafbfc]">
      <section className="bg-gradient-to-br from-[#0d233f] via-[#0d233f] to-[#1a3a5f] text-white min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 text-balance leading-tight animate-zoom-in"
            style={{ fontFamily: "'Sora', sans-serif", animationDelay: "0.1s" }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Soluciones web simples, rápidas y efectivas
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8 font-light max-w-3xl mx-auto opacity-0 animate-zoom-in-up"
            style={{ fontFamily: "'Inter', sans-serif", animationDelay: "0.3s" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Desarrollo de landing pages y sitios para negocios.
          </p>
          <a
            href="https://wa.me/541173739055"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 opacity-0 animate-zoom-in-button"
            style={{ animationDelay: "0.5s" }}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-white via-[#fafbfc] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-block relative" data-aos="fade-up">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0d233f] mb-4 relative inline-block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Servicios
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent rounded-full"></div>
                <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                style={{
                  boxShadow: "0 4px 20px rgba(13, 35, 63, 0.08)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/8 via-[#22d3ee]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-7 lg:p-8 h-full flex flex-col">
                  {/* Icon container */}
                  <div className="mb-5 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4]/15 to-[#06b6d4]/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-[#06b6d4]/20">
                      <service.icon className="w-7 h-7 text-[#06b6d4]" strokeWidth={1.5} />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#06b6d4]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold text-[#0d233f] mb-3 group-hover:text-[#06b6d4] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[#475569] leading-relaxed mb-5 font-light flex-grow">{service.description}</p>

                  {/* CTA Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#06b6d4] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300 mt-auto"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-7 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-block relative" data-aos="fade-up">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0d233f] mb-4 relative inline-block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Testimonios
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent rounded-full"></div>
                <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] rounded-full"></div>
              </h2>
            </div>
            <p className="text-[#475569] max-w-2xl mx-auto font-light mt-3" data-aos="fade-up" data-aos-delay="100">
              Lo que dicen nuestros clientes sobre nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f6fbff] p-6 rounded-2xl border border-gray-100 card-hover h-full"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform hover:scale-110"
                    />
                  ))}
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-4 font-light">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0d233f]">{testimonial.name}</span>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-xs text-gray-500">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
