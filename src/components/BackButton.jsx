"use client"

import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BackButton({ gradient = "from-cyan-500 to-blue-500" }) {
  const navigate = useNavigate()

  return (
    <section className="bg-[#fafbfc] py-6">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 bg-gradient-to-r ${gradient} text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Volver</span>
        </button>
      </div>
    </section>
  )
}
