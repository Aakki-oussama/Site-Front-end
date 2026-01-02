import { APP_NAME, CONTACT_INFO, SEO_INFO } from '@/site-web/shares/core/constants';

// SEO Configuration - All SEO-related metadata in one place
export const SEO_CONFIG = {
    // Canonical URL - prevents duplicate content issues
    canonicalUrl: "https://ecolaundry.online",

    // Open Graph - Controls how your site appears when shared on Facebook, LinkedIn, WhatsApp
    openGraph: {
        type: "website",
        locale: "fr_MA",
        siteName: "Ecolaundry",
        title: "Ecolaundry - Pressing Éco-Responsable à Meknès",
        description: "Service de blanchisserie premium à Meknès. Lavage au kilo à partir de 15 DH/kg, nettoyage de tapis, repassage de luxe et livraison à domicile. Collecte express en moins de 60 minutes.",
        image: "https://ecolaundry.online/images/avif/seo/brand.png",
        imageAlt: "Ecolaundry - Service de pressing éco-responsable à Meknès",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://ecolaundry.online",
    },
};

// JSON-LD Structured Data Generator
export function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SEO_CONFIG.canonicalUrl}/#organization`,
        "name": APP_NAME,
        "alternateName": "Ecolaundry Meknès",
        "description": SEO_INFO.default.description,
        "url": SEO_CONFIG.canonicalUrl,
        "logo": `${SEO_CONFIG.canonicalUrl}/images/logo.png`,
        "image": SEO_CONFIG.openGraph.image,
        "priceRange": "15 DH - 100 DH",
        "telephone": CONTACT_INFO.phone,
        "email": CONTACT_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": CONTACT_INFO.address.district,
            "addressLocality": "Meknès",
            "postalCode": "50000",
            "addressCountry": "MA",
            "addressRegion": "Fès-Meknès"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.8582317",
            "longitude": "-5.5762441"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": CONTACT_INFO.hours.open,
                "closes": CONTACT_INFO.hours.close
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de Blanchisserie",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lavage au Kilo",
                        "description": "Service de lavage professionnel au kilo avec produits écologiques"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Nettoyage de Tapis",
                        "description": "Nettoyage professionnel de tapis et moquettes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Repassage de Luxe",
                        "description": "Service de repassage professionnel pour tous types de vêtements"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Livraison à Domicile",
                        "description": "Collecte et livraison express à domicile à Meknès"
                    }
                }
            ]
        },
        "sameAs": [
            CONTACT_INFO.social.facebook,
            CONTACT_INFO.social.instagram
        ],
        "areaServed": {
            "@type": "City",
            "name": "Meknès",
            "containedIn": {
                "@type": "Country",
                "name": "Morocco"
            }
        }
    };
}
