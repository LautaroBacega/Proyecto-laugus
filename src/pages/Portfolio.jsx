import SEO from "../components/SEO"

const projects = [
  {
    title: "Accesorios Bmx",
    category: "Ecommerce",
    description:
      "Una tienda online completa para productos BMX con carrito de compras, sistema de pagos, autenticacion y gestión de inventario.",
    image: "/tiendabmxIMG3.png",
    url: "https://accesoriosbmx.onrender.com/",
  },
  {
    title: "ABBMX Frestyle",
    category: "Landing Page",
    description: "Sitio web para una escuela de BMX Freestyle con información de cursos y instructores.",
    image: "/abbmxIMG1.png",
    url: "https://abbmxfreestyle.netlify.app/",
  },
  {
    title: "LauchaBmxStore",
    category: "Tienda Autogestionable",
    description:
      "Tienda online estática desarrollada para Laucha BMX Store. El sitio público muestra un catálogo de productos y carrito de compras. Localmente incluye un panel de administración para gestionar productos (CRUD).",
    image: "/LauchaBmxStore.png",
    url: "https://lauchabmxstore.netlify.app/",
  },
  {
    title: "Somos Bahía",
    category: "Sitio con Sistema de Turnos",
    description:
      "Landing page moderna y responsive para el movimiento político Somos Bahía, con propuestas, valores, candidatos e integración de participación ciudadana.",
    image: "/somosBahia1.png",
    url: "https://somosbahia.netlify.app/",
  },
  {
    title: "SilverFitness",
    category: "Landing Page",
    description: "Landing page corporativa con servicios y casos de éxito.",
    image: "/SilverFitness1.png",
    url: "https://silverfitness1.netlify.app/",
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
    <div className="py-10">
      <SEO
        title="Portfolio - Proyectos de Desarrollo Web"
        description="Conocé nuestros proyectos: landing pages, tiendas online y sistemas de turnos. Trabajos realizados para clientes en Argentina."
        keywords="portfolio, proyectos web, landing page, e-commerce, sistema de turnos, trabajos realizados, desarrollo web Argentina"
        url="https://laugus.com.ar/portfolio"
        schema={portfolioSchema}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block relative" data-aos="fade-up">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0d233f] mb-4 relative inline-block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Portfolio
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent rounded-full"></div>
                
              </h2>
            </div>
          
          <p className="text-[#475569] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group cursor-pointer block"
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
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
