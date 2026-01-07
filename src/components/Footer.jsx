import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#0d233f] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and description */}
          <div className="flex items-center gap-3">
            <img src="/images/laugusico.jpg" alt="Laugus Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Laugus
            </span>
            <span className="hidden md:inline text-gray-400 text-sm ml-2">Soluciones web simples y efectivas</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Laugus</p>
        </div>
      </div>
    </footer>
  )
}
