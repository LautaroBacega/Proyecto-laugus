import SEO from "../components/SEO"

const projects = [
  {
    title: "Consultorio Médico",
    category: "Sitio con Sistema de Turnos",
    description: "Sistema de turnos online para consultorio médico con gestión de pacientes.",
    image: "/medical-clinic-website-modern.jpg",
  },
  {
    title: "Estudio de Arquitectura",
    category: "Landing Page",
    description: "Landing page moderna para estudio de arquitectura con portfolio de proyectos.",
    image: "/architecture-studio-website-minimal.jpg",
  },
  {
    title: "Tienda de Ropa",
    category: "E-commerce",
    description: "Tienda online completa con catálogo de productos y carrito de compras.",
    image: "/clothing-store-ecommerce-website.jpg",
  },
  {
    title: "Restaurante",
    category: "Landing Page",
    description: "Landing page con menú digital y sistema de reservas para restaurante.",
    image: "/elegant-restaurant-website.png",
  },
  {
    title: "Gimnasio",
    category: "Sitio con Sistema de Turnos",
    description: "Plataforma para gimnasio con reserva de clases y gestión de membresías.",
    image: "/gym-fitness-website-modern.jpg",
  },
  {
    title: "Agencia de Marketing",
    category: "Landing Page",
    description: "Landing page corporativa con servicios y casos de éxito.",
    image: "/marketing-agency-website-professional.jpg",
  },
]

export default function Portfolio() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - Laugus",
    description: "Proyectos de desarrollo web realizados por Laugus. Landing pages, e-commerce y sistemas de turnos.",
    url: "https://laugus.com.ar/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
      })),
    },
  }

  return (
    <div className="py-20">
      <SEO
        title="Portfolio - Proyectos de Desarrollo Web"
        description="Conocé nuestros proyectos: landing pages, tiendas online y sistemas de turnos. Trabajos realizados para clientes en Argentina."
        keywords="portfolio, proyectos web, landing page, e-commerce, sistema de turnos, trabajos realizados, desarrollo web Argentina"
        url="https://laugus.com.ar/portfolio"
        schema={portfolioSchema}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d233f] mb-4" data-aos="fade-down">
            Portfolio
          </h1>
          <p className="text-[#475569] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#06b6d4] hover:text-white">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-[#0d233f] mt-3 mb-2 hover-lift">{project.title}</h3>
                <p className="text-[#475569] text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
