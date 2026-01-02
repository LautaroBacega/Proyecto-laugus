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
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Portfolio</h1>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-[#0f172a] mt-3 mb-2">{project.title}</h3>
                <p className="text-[#475569] text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
