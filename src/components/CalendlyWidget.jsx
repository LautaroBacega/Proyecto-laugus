import { InlineWidget, PopupButton, PopupWidget } from "react-calendly"

// Componente para widget embebido (inline)
export function CalendlyInline({ url, styles = {} }) {
  return (
    <div className="calendly-inline-container">
      <InlineWidget
        url={url}
        styles={{
          height: "650px",
          minWidth: "320px",
          ...styles,
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "06b6d4",
          textColor: "0d233f",
        }}
      />
    </div>
  )
}

// Componente para botón popup
export function CalendlyPopupButton({ url, text = "Agendar reunión", className = "" }) {
  return (
    <PopupButton
      url={url}
      rootElement={document.getElementById("root")}
      text={text}
      className={`inline-flex items-center gap-2 bg-[#06b6d4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0891b2] transition-all duration-300 hover:scale-105 ${className}`}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        primaryColor: "06b6d4",
        textColor: "0d233f",
      }}
    />
  )
}

// Componente para popup flotante (badge)
export function CalendlyBadge({ url, text = "Agendar reunión" }) {
  return (
    <PopupWidget
      url={url}
      rootElement={document.getElementById("root")}
      text={text}
      textColor="#ffffff"
      color="#06b6d4"
      pageSettings={{
        backgroundColor: "ffffff",
        primaryColor: "06b6d4",
        textColor: "0d233f",
      }}
    />
  )
}
