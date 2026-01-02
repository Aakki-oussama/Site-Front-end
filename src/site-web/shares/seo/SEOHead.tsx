import { useEffect } from 'react'
import { SEO_CONFIG, generateStructuredData } from './seo'

export default function SEOHead() {
  useEffect(() => {
    // Update title
    document.title = SEO_CONFIG.openGraph.title

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Basic SEO Meta Tags
    updateMetaTag('description', SEO_CONFIG.openGraph.description)
    updateMetaTag('keywords', 'pressing Meknès, lavage Meknès, nettoyage tapis Meknès, repassage Meknès, livraison Meknès, pressing écologique')
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', SEO_CONFIG.openGraph.title, true)
    updateMetaTag('og:description', SEO_CONFIG.openGraph.description, true)
    updateMetaTag('og:image', SEO_CONFIG.openGraph.image, true)
    updateMetaTag('og:image:alt', SEO_CONFIG.openGraph.imageAlt, true)
    updateMetaTag('og:image:width', SEO_CONFIG.openGraph.imageWidth, true)
    updateMetaTag('og:image:height', SEO_CONFIG.openGraph.imageHeight, true)
    updateMetaTag('og:url', SEO_CONFIG.openGraph.url, true)
    updateMetaTag('og:type', SEO_CONFIG.openGraph.type, true)
    updateMetaTag('og:site_name', SEO_CONFIG.openGraph.siteName, true)
    updateMetaTag('og:locale', SEO_CONFIG.openGraph.locale, true)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', SEO_CONFIG.canonicalUrl)

    // JSON-LD Structured Data
    let jsonLd = document.querySelector('script[type="application/ld+json"]')
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.setAttribute('type', 'application/ld+json')
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(generateStructuredData(), null, 2)

    // Update HTML lang attribute
    document.documentElement.lang = 'fr'
  }, [])

  return null // This component doesn't render anything
}

