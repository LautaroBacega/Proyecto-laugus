"use client"

import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-24 left-4 z-40 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0d233f] px-4 py-2 rounded-full shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="font-medium text-sm">Volver</span>
    </button>
  )
}
