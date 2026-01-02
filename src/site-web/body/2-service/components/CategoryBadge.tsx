import { ServiceCategory } from '@/site-web/body/2-service/core/index';

interface CategoryBadgeProps {
  category: ServiceCategory;
  className?: string;
}

// Mapping personnalisé pour les labels des badges
const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  [ServiceCategory.LAVAGE]: "Populaire",
  [ServiceCategory.SPECIALISE]: "Sur Mesure",
  [ServiceCategory.REPASSAGE]: "Finition",
  [ServiceCategory.LIVRAISON]: "À Domicile",
  [ServiceCategory.GARANTIE]: "Confiance"
};

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  return (
    <div 
      className={`absolute top-6 left-6 px-4 py-1.5 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand dark:text-highlight border border-white/20 ${className}`}
    >
      {CATEGORY_LABELS[category]}
    </div>
  );
}

