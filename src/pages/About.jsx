import { Users, Target, Zap } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Entregamos proyectos en tiempos cortos sin sacrificar calidad.",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Nos concentramos en soluciones prácticas que realmente funcionan.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Trabajamos de cerca con cada cliente para entender sus necesidades.",
  },
]

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Nosotros</h1>
          <p className="text-[#475569] max-w-2xl mx-auto">Conocé más sobre quiénes somos y cómo trabajamos.</p>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#475569] text-lg leading-relaxed">
              Laugus es una agencia de desarrollo web fundada por dos compañeros de universidad del área de sistemas.
              Uno de nosotros ya graduado y el otro próximo a recibirse, decidimos unir conocimientos técnicos y
              experiencia académica para ofrecer soluciones web prácticas, eficientes y accesibles.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed mt-4">
              Nuestro objetivo es ayudar a negocios y emprendedores a tener una presencia digital profesional, sin
              procesos innecesarios ni costos excesivos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#06b6d4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{value.title}</h3>
                <p className="text-[#475569]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
