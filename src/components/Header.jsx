"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const productosDesarrolloWeb = [
  {
    name: "Diseño Web Profesional",
    path: "/servicios/landing-page",
    subcategories: [
      { name: "Landing Page Básica", path: "/servicios/landing-page/basica" },
      { name: "Landing Autogestionable", path: "/servicios/landing-page/autogestionable" },
      { name: "Landing con Pestañas Extra", path: "/servicios/landing-page/pestanas" },
    ],
  },
  { name: "Sistema de Turnos", path: "/servicios/turnos" },
  { name: "Control de Stock", path: "/servicios/control-stock" },
  { name: "E-learning", path: "/servicios/e-learning" },
  { name: "E-commerce", path: "/servicios/e-commerce" },
]

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Clientes", path: "/portfolio" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesarrolloOpen, setIsDesarrolloOpen] = useState(false)
  const [isDisenoWebOpen, setIsDisenoWebOpen] = useState(false)
  const [mobileDesarrolloOpen, setMobileDesarrolloOpen] = useState(false)
  const [mobileDisenoWebOpen, setMobileDisenoWebOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesarrolloOpen(false)
        setIsDisenoWebOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-[#0d233f] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/laugusico.jpg"
              alt="Laugus Logo"
              className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#06b6d4]">
              Laugus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Link Inicio */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#06b6d4] hover-underline ${
                location.pathname === "/" ? "text-[#06b6d4]" : "text-white"
              }`}
            >
              Inicio
            </Link>

            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDesarrolloOpen(true)}
              onMouseLeave={() => {
                setIsDesarrolloOpen(false)
                setIsDisenoWebOpen(false)
              }}
            >
              <Link
                to="/desarrollo-web"
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#06b6d4] ${
                  location.pathname === "/desarrollo-web" ? "text-[#06b6d4]" : "text-white"
                }`}
              >
                Diseño Web
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isDesarrolloOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Dropdown Menu */}
              {isDesarrolloOpen && (
                <div className="absolute top-full left-0 z-50">
                  <div className="w-64 bg-[#0d233f] border border-[#1a3a5c] rounded-lg shadow-xl">
                    {productosDesarrolloWeb.map((producto, index) => (
                      <div key={producto.name} className="relative">
                        {producto.subcategories ? (
                          // Producto con subcategorías
                          <div
                            className="relative"
                            onMouseEnter={() => setIsDisenoWebOpen(true)}
                            onMouseLeave={() => setIsDisenoWebOpen(false)}
                          >
                            <Link
                              to={producto.path}
                              onClick={() => {
                                setIsDesarrolloOpen(false)
                                setIsDisenoWebOpen(false)
                              }}
                              className={`w-full flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-[#1a3a5c] hover:text-[#06b6d4] transition-colors ${index === 0 ? "rounded-t-lg" : ""}`}
                            >
                              {producto.name}
                              <ChevronRight size={14} />
                            </Link>

                            {/* Subcategorías */}
                            {isDisenoWebOpen && (
                              <div className="absolute left-full top-0">
                                <div className="w-56 bg-[#0d233f] border border-[#1a3a5c] rounded-lg shadow-xl">
                                  {producto.subcategories.map((sub, subIndex) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      onClick={() => {
                                        setIsDesarrolloOpen(false)
                                        setIsDisenoWebOpen(false)
                                      }}
                                      className={`block px-4 py-2 text-sm text-white hover:bg-[#1a3a5c] hover:text-[#06b6d4] transition-colors ${subIndex === 0 ? "rounded-t-lg" : ""} ${subIndex === producto.subcategories.length - 1 ? "rounded-b-lg" : ""}`}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          // Producto sin subcategorías
                          <Link
                            to={producto.path}
                            onClick={() => setIsDesarrolloOpen(false)}
                            className={`block px-4 py-2 text-sm text-white hover:bg-[#1a3a5c] hover:text-[#06b6d4] transition-colors ${index === productosDesarrolloWeb.length - 1 ? "rounded-b-lg" : ""}`}
                          >
                            {producto.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resto de links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#06b6d4] hover-underline ${
                  location.pathname === link.path ? "text-[#06b6d4]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/541173739055"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#20bd5a] transition-colors btn-hover"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {/* Inicio */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium transition-all duration-300 hover:text-[#06b6d4] hover:translate-x-2 ${
                location.pathname === "/" ? "text-[#06b6d4]" : "text-white"
              }`}
            >
              Inicio
            </Link>

            <div>
              <button
                onClick={() => setMobileDesarrolloOpen(!mobileDesarrolloOpen)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#06b6d4] ${
                  location.pathname === "/desarrollo-web" ? "text-[#06b6d4]" : "text-white"
                }`}
              >
                Diseño Web
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileDesarrolloOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDesarrolloOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pt-2 flex flex-col gap-2">
                  {productosDesarrolloWeb.map((producto) => (
                    <div key={producto.name}>
                      {producto.subcategories ? (
                        <div>
                          <div className="flex items-center gap-2">
                            <Link
                              to={producto.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm text-gray-300 hover:text-[#06b6d4] transition-colors"
                            >
                              {producto.name}
                            </Link>
                            <button
                              onClick={() => setMobileDisenoWebOpen(!mobileDisenoWebOpen)}
                              className="p-1 text-gray-300 hover:text-[#06b6d4] transition-colors"
                            >
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${mobileDisenoWebOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>

                          {/* Mobile Sub-subcategorías */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              mobileDisenoWebOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pl-4 pt-2 flex flex-col gap-2">
                              {producto.subcategories.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-sm text-gray-400 hover:text-[#06b6d4] transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={producto.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-gray-300 hover:text-[#06b6d4] transition-colors"
                        >
                          {producto.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resto de links mobile */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#06b6d4] hover:translate-x-2 ${
                  location.pathname === link.path ? "text-[#06b6d4]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/541173739055"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#20bd5a] transition-colors w-fit btn-hover mt-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
