import { Users, Target, Zap, Code, Heart } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Entregamos proyectos en tiempos cortos sin sacrificar calidad.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Nos concentramos en soluciones prácticas que realmente funcionan.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Trabajamos de cerca con cada cliente para entender sus necesidades.",
    color: "from-purple-400 to-pink-500",
  },
]

export default function About() {
  return (
    <div className="bg-[#f6fbff]">

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block relative" data-aos="fade-up">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0d233f] mb-4 relative inline-block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nuestros Valores
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent rounded-full"></div>
                <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] rounded-full"></div>
              </h2>
            </div>
            <p
              className="text-lg text-[#475569] max-w-2xl mx-auto font-light mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Los principios que guían nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#f6fbff] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#0d233f] mb-3 text-center group-hover:text-[#06b6d4] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#475569] text-center leading-relaxed font-light">{value.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="bg-gradient-to-br from-white to-[#f6fbff] p-10 md:p-14 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden"
            data-aos="fade-up"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#06b6d4]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0d233f]" style={{ fontFamily: "var(--font-display)" }}>
                  Nuestra Historia
                </h2>
              </div>
              <p className="text-[#475569] text-lg leading-relaxed mb-5 font-light">
                Laugus es una agencia de desarrollo web fundada por dos compañeros de universidad del área de sistemas.
                Uno de nosotros ya graduado y el otro próximo a recibirse, decidimos unir conocimientos técnicos y
                experiencia académica para ofrecer soluciones web prácticas, eficientes y accesibles.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed font-light">
                Nuestro objetivo es ayudar a negocios y emprendedores a tener una presencia digital profesional, sin
                procesos innecesarios ni costos excesivos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
