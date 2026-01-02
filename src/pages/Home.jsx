import { Link } from "react-router-dom"
import { Globe, Calendar, ShoppingCart, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Páginas de una sola sección enfocadas en presentar tu servicio o producto de forma clara y efectiva.",
  },
  {
    icon: Calendar,
    title: "Sitios con Sistema de Turnos",
    description: "Sitios web multi-sección con sistema integrado de reservas o turnos para tu negocio.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas para vender tus productos o servicios de forma profesional.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Soluciones web simples, rápidas y efectivas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Desarrollo de landing pages y sitios para negocios.</p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            En Laugus desarrollamos landing pages y sitios web pensados para negocios que necesitan una presencia online
            rápida, accesible y funcional. Nos enfocamos en soluciones claras, tiempos de entrega cortos y precios
            transparentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/precios"
              className="bg-[#06b6d4] text-[#0f172a] px-8 py-3 rounded-lg font-semibold hover:bg-[#22d3ee] transition-colors"
            >
              Ver Precios
            </Link>
            <Link
              to="/contacto"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f172a] transition-colors"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-4">Nuestros Servicios</h2>
          <p className="text-[#475569] text-center mb-12 max-w-2xl mx-auto">
            Ofrecemos soluciones web adaptadas a las necesidades de tu negocio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#06b6d4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-[#475569] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">¿Listo para empezar?</h2>
          <p className="text-[#475569] mb-8 max-w-2xl mx-auto">
            Contanos sobre tu proyecto y te ayudamos a encontrar la mejor solución para tu negocio.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
          >
            Contactanos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
