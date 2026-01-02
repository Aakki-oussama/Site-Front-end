export const ServiceCategory = {
    LAVAGE: "Lavage",
    SPECIALISE: "Spécialisé",
    REPASSAGE: "Repassage",
    LIVRAISON: "Livraison",
    GARANTIE: "Garantie"
} as const;

export type ServiceCategory = typeof ServiceCategory[keyof typeof ServiceCategory];

export interface ServicePrice {
    amount: string;
    unit: string;
    prefix?: string; // Ex: "À partir de"
  }
  
  export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    price?: ServicePrice;
    iconName: string;
    category: ServiceCategory;
  }