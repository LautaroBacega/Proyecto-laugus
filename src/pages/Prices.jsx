"use client"

import { useState } from "react"
import { Check, Globe, Calendar, ShoppingCart } from "lucide-react"

const pricingOptions = [
  {
    id: "landing",
    icon: Globe,
    title: "Landing Page",
    price: "$100.000 ARS",
    description: "Una página web de una sola sección enfocada en presentar un servicio o producto de forma clara.",
    useCase: "Ideal para generar leads, mostrar información clave y convertir visitantes en contactos.",
    includes: [
      "Diseño personalizado responsive",
      "Desarrollo y configuración",
      "Formulario de contacto",
      "SEO básico",
      "Rondas de revisión",
      "Hosting incluido por 1 año",
      "Dominio incluido por 1 año",
      "Certificado SSL incluido por 1 año",
    ],
    payment: "30% de anticipo para comenzar",
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Sitio con Sistema de Turnos",
    price: "$150.000 ARS",
    description: "Un sitio web multi-sección con sistema integrado de turnos o reservas.",
    useCase: "Perfecto para gestionar citas o reservas de manera eficiente para tu negocio.",
    includes: [
      "Diseño personalizado responsive",
      "Sistema de turnos/reservas",
      "Formulario de contacto",
      "SEO básico",
      "Rondas de revisión",
      "Hosting incluido por 1 año",
      "Dominio incluido por 1 año",
      "Certificado SSL incluido por 1 año",
    ],
    payment: "30% de anticipo para comenzar",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    price: "Consultar precio",
    description: "Una tienda online completa para vender productos o servicios.",
    useCase: "Gestiona ventas online, catálogos de productos y pedidos de clientes.",
    includes: [
      "Diseño personalizado responsive",
      "Catálogo de productos",
      "Gestión de pedidos",
      "Formulario de contacto",
      "SEO básico",
      "Rondas de revisión",
      "Hosting incluido por 1 año",
      "Dominio incluido por 1 año",
      "Certificado SSL incluido por 1 año",
    ],
    payment: "Definido según el proyecto",
  },
]

export default function Prices() {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Precios</h1>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Precios transparentes y sin sorpresas. Elegí la opción que mejor se adapte a tu negocio.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(selectedOption === option.id ? null : option.id)}
              className={`p-6 rounded-2xl text-left transition-all ${
                selectedOption === option.id
                  ? "bg-[#0f172a] text-white shadow-lg scale-[1.02]"
                  : "bg-white border border-gray-200 hover:border-[#06b6d4] hover:shadow-md"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  selectedOption === option.id ? "bg-[#06b6d4]" : "bg-[#06b6d4]/10"
                }`}
              >
                <option.icon
                  className={`w-6 h-6 ${selectedOption === option.id ? "text-[#0f172a]" : "text-[#06b6d4]"}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className={`text-2xl font-bold ${selectedOption === option.id ? "text-[#06b6d4]" : "text-[#0f172a]"}`}>
                {option.price}
              </p>
              <p className={`text-sm mt-2 ${selectedOption === option.id ? "text-gray-300" : "text-[#475569]"}`}>
                Click para ver detalles
              </p>
            </button>
          ))}
        </div>

        {/* Expanded Details */}
        {selectedOption && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-in fade-in duration-300">
            {pricingOptions
              .filter((option) => option.id === selectedOption)
              .map((option) => (
                <div key={option.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center">
                      <option.icon className="w-7 h-7 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0f172a]">{option.title}</h2>
                      <p className="text-[#06b6d4] font-semibold">{option.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-2">¿Qué es?</h3>
                      <p className="text-[#475569] mb-4">{option.description}</p>

                      <h3 className="font-semibold text-[#0f172a] mb-2">¿Para qué sirve?</h3>
                      <p className="text-[#475569] mb-4">{option.useCase}</p>

                      <h3 className="font-semibold text-[#0f172a] mb-2">Forma de pago</h3>
                      <p className="text-[#475569]">{option.payment}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-4">¿Qué incluye?</h3>
                      <ul className="space-y-3">
                        {option.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                            <span className="text-[#475569]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#06b6d4]/10 rounded-xl">
                    <p className="text-[#0f172a] text-sm font-medium">
                      Hosting, dominio y certificado SSL incluidos por el primer año en todos los planes.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
