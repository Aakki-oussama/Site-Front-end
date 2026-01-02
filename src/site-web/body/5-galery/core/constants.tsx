import type { GalleryItem, GalleryStat } from '@/site-web/body/5-galery/core/index';

// Gallery items data
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Lavage & Séchage au Kilo',
    category: 'Toutes Types',
    image: '/images/avif/Extrait/Lavage.avif',
    tag: 'Textiles légers',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 2,
    title: 'Linge de Table',
    category: 'Restauration',
    image: '/images/avif/Extrait/Nappe.avif',
    tag: 'Finition Luxe',
    aspect: 'aspect-square'
  },
  {
    id: 3,
    title: 'Service de Repassage',
    category: 'Linge & Textile',
    image: '/images/avif/Extrait/Repassage.avif',
    tag: 'Haute Couture',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 4,
    title: 'Couettes Propres',
    category: 'Traitement',
    image: '/images/avif/Extrait/Couettes.avif',
    tag: 'linge de maison',
    aspect: 'aspect-square'
  },
  {
    id: 5,
    title: 'Nettoyage de Chaussures',
    category: 'Soins Spécialisés',
    image: '/images/avif/Extrait/Chaussures.avif',
    tag: 'Lavage delicat',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 6,
    title: 'Lavage de Tapis',
    category: 'Textiles Volumineux',
    image: '/images/avif/Extrait/Tapis-clean.avif',
    tag: 'Nettoyage en profondeu',
    aspect: 'aspect-[3/4]'
  }
];

// Gallery statistics
export const GALLERY_STATS: GalleryStat[] = [
  { label: "Articles Photos", value: "240+" },
  { label: "Clients Meknès", value: "758+" },
  { label: "Soin Garanti", value: "100%" },
  { label: "Délai Moyen", value: "24h" }
];

