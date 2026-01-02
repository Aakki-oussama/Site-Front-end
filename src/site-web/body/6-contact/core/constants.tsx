import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '@/site-web/shares/core/constants';
import { ANIMATION_CONFIG } from '@/site-web/shares/animation/animation';
import type { ContactLink, ChatMessage } from '@/site-web/body/6-contact/core/index';

// Contact links data
export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Phone,
    title: "WhatsApp & Mobile",
    value: CONTACT_INFO.phone,
    href: CONTACT_INFO.whatsapp.url(CONTACT_INFO.whatsapp.number, CONTACT_INFO.whatsapp.message),
    color: "bg-[#25D366]"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    color: "bg-brand"
  }
];

// Social media links
export const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: CONTACT_INFO.social.instagram,
    color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: CONTACT_INFO.social.facebook,
    color: "bg-[#1877F2]"
  }
];

// Chat messages for phone mockup
export const CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    text: "Bonjour! J'ai besoin d'un nettoyage pour un tapis de 2x3m. Quand pouvez-vous passer?",
    time: "10:02",
    isFromUser: true
  },
  {
    id: 2,
    text: "Bonjour! Nous pouvons passer cet après-midi vers 16h. Nos tarifs commencent à 45 DH/m² pour les tapis. 🚛",
    time: "10:03",
    isFromUser: false,
    delay: ANIMATION_CONFIG.durations.medium
  },
  {
    id: 3,
    text: "C'est parfait pour 16h. Merci!",
    time: "10:04",
    isFromUser: true,
    delay: ANIMATION_CONFIG.durations.slow
  }
];
