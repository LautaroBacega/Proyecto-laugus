import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laugus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones web simples, rápidas y efectivas para negocios y emprendedores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">
                Inicio
              </Link>
              <Link to="/precios" className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">
                Precios
              </Link>
              <Link to="/portfolio" className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">
                Portfolio
              </Link>
              <Link to="/nosotros" className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">
                Nosotros
              </Link>
              <Link to="/contacto" className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm">Respondemos en pocas horas</p>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-[#06b6d4] text-[#0f172a] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#22d3ee] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Laugus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
