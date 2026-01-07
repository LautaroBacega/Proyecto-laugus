"use client"

import { useEffect } from "react"

const SITE_URL = "https://laugus.com.ar"
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`

export default function SEO({
  title = "Laugus | Desarrollo Web Profesional en Argentina",
  description = "Agencia de desarrollo web en Argentina. Creamos landing pages, tiendas online y plataformas e-learning a medida. Soluciones web simples, rápidas y efectivas para tu negocio.",
  keywords = "desarrollo web, páginas web, landing page, tienda online, e-commerce, e-learning, diseño web, Argentina",
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = "website",
  schema = null,
}) {
  const fullTitle = title.includes("Laugus") ? title : `${title} | Laugus`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Helper to update or create meta tags
    const setMeta = (attribute, key, content) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content)
    }

    // Primary Meta Tags
    setMeta("name", "title", fullTitle)
    setMeta("name", "description", description)
    setMeta("name", "keywords", keywords)

    // Open Graph / Facebook
    setMeta("property", "og:type", type)
    setMeta("property", "og:url", url)
    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:image", image)

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:url", url)
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", description)
    setMeta("name", "twitter:image", image)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)

    // Schema.org JSON-LD
    const existingSchema = document.querySelector("script[data-seo-schema]")
    if (existingSchema) {
      existingSchema.remove()
    }
    if (schema) {
      const schemaScript = document.createElement("script")
      schemaScript.type = "application/ld+json"
      schemaScript.setAttribute("data-seo-schema", "true")
      schemaScript.textContent = JSON.stringify(schema)
      document.head.appendChild(schemaScript)
    }
  }, [fullTitle, description, keywords, image, url, type, schema])

  return null
}
