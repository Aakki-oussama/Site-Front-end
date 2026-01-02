import { type ServiceItem, ServiceCategory } from '@/site-web/body/2-service/core/index';

// Service Images
export const SERVICE_IMAGES: Record<string, string> = {
  'lavage-sechage': '/images/avif/Lavages-au-kg.avif',
  'nettoyage-tapis': '/images/avif/Tapis.avif',
  'Garantie & Assistance Premium': '/images/avif/support.avif',
  'repassage': '/images/avif/Repassage.avif',
  'livraison': '/images/avif/EcoLoundry-Laivraison.avif'
};

export const SERVICES: ServiceItem[] = [
    {
      id: "lavage-sechage",
      title: "Lavage & Séchage",
      description: "Nettoyage quotidien haute performance pour tous vos vêtements, tapis et couettes. Chaque pièce est soigneusement lavée, séchée et pliée, prête à être portée avec fraîcheur et élégance.",
      price: {
        prefix: "À partir de",
        amount: "15",
        unit: "DH/kg"
      },
      iconName: "WashingMachine",
      category: ServiceCategory.LAVAGE
    },
    {
      id: "nettoyage-tapis",
      title: "Tapis & Couettes",
      description: "Nettoyage en profondeur pour vos tapis et couettes, assurant hygiène et fraîcheur optimales.",
      iconName: "Bed",
      category: ServiceCategory.SPECIALISE
    },
    {
      id: "Garantie & Assistance Premium",
      title: "Garantie & Assistance Premium",
      description: "Si votre linge n'est pas traité à la hauteur de vos attentes, nous intervenons immédiatement. Service client dédié, réactivité et transparence assurées.",
      iconName: "ShieldCheck",
      category: ServiceCategory.GARANTIE
    },
    {
      id: "repassage",
      title: "Repassage Professionnel",
      description: "Repassage soigné de vos chemises, costumes et textiles délicats pour une finition impeccable et élégante.",
      iconName: "Wind",
      category: ServiceCategory.REPASSAGE
    },
    {
      id: "livraison",
      title: "Livraison Express",
      description: "Récupération et livraison rapides directement à votre porte, partout à Meknès, pour un service simple et pratique.",
      iconName: "Truck",
      category: ServiceCategory.LIVRAISON
    }
  ];