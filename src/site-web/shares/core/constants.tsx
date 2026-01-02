import type { ReactNode } from 'react';
import { WashingMachine, Droplets, Wind, Truck, Sparkles, MapPin, Phone, Instagram, Facebook, MessageCircle, Mail, Clock, Bed, ShieldCheck, PackageCheck } from 'lucide-react';

export const APP_NAME = "Ecolaundry";
export const LOCATION = "Meknès, Maroc";

// SEO Information
// Centralized SEO metadata for better maintainability and consistency across pages
export const SEO_INFO = {
  default: {
    // Page title - appears in browser tab and search results
    title: "Ecolaundry - Pressing Éco-Responsable à Meknès",

    // Meta description - shown in search engine results (150-160 characters recommended)
    description: "Ecolaundry - Pressing éco-responsable à Meknès. Services de lavage, nettoyage de tapis, repassage de luxe et livraison à domicile. Excellence du soin textile depuis Meknès.",

    // SEO keywords - relevant search terms for better discoverability
    keywords: "pressing Meknès, lavage Meknès, nettoyage tapis Meknès, repassage Meknès, livraison Meknès, pressing écologique, pressing éco-responsable, nettoyage à sec Meknès, blanchisserie Meknès, service de pressing, collecte et livraison Meknès"
  }
};

// Contact Information
export const CONTACT_INFO = {
  address: {
    city: "Meknès, Maroc",
    district: "Ave Zitoune",
    full: "Ave Zitoune, Meknès 50000, Morocco"
  },
  phone: "+212664755026",
  email: "contact@ecolaundry.ma", // Update with your real email
  whatsapp: {
    number: "+212664755026",
    message: "Bonjour Ecolaundry, je souhaite commander un service à Meknès.",
    url: (number: string, message: string) => `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  },
  social: {
    facebook: "https://www.facebook.com/ecolaundrymeknes/",
    instagram: "https://www.instagram.com/eco_laundry22/"
  },
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2195734442635!2d-5.5762441!3d33.8582317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05b8259552bbd%3A0xac74b63a08f46e13!2zRWNvbGF1bmRyeSDZhdi12KjZhtmA2YDYqSDYqNin2YTZg9mK2YDZgNmE2Yg!5e0!3m2!1sfr!2sma!4v1766935946850!5m2!1sfr!2sma"
  },
  hours: {
    open: "9:00",
    close: "21:00",
    display: "9:00 - 21:00",
    days: "Lun-Dim (sauf Vendredi)"
  }
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Processus", href: "#process" },
  { name: "Pourquoi Nous", href: "#why-us" },
  { name: "Contact", href: "#contact" }
];

// Social Media Icons
export const SOCIAL_ICONS: Record<string, ReactNode> = {
  Facebook: <Facebook size={24} />,
  Instagram: <Instagram size={24} />,
  WhatsApp: <MessageCircle size={24} />
};

// Contact Icons
export const CONTACT_ICONS: Record<string, ReactNode> = {
  MapPin: <MapPin size={24} />,
  Phone: <Phone size={24} />,
  Mail: <Mail size={24} />,
  WhatsApp: <MessageCircle size={24} />,
  Clock: <Clock size={24} />
};

// Service/Content Icons (for center sections)
export const SERVICE_ICONS: Record<string, ReactNode> = {
  WashingMachine: <WashingMachine size={24} />,
  Droplets: <Droplets size={24} />,
  Wind: <Wind size={24} />,
  Truck: <Truck size={24} />,
  Sparkles: <Sparkles size={24} />,
  Bed: <Bed size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  PackageCheck: <PackageCheck size={24} />
};

// All Icons (for backward compatibility)
export const ICONS: Record<string, ReactNode> = {
  ...SOCIAL_ICONS,
  ...CONTACT_ICONS,
  ...SERVICE_ICONS
};
