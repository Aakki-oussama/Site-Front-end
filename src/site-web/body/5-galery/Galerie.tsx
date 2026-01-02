import { Camera } from 'lucide-react';
import type { GalleryItem } from '@/site-web/body/5-galery/core/index';
import { GALLERY_ITEMS, GALLERY_STATS } from '@/site-web/body/5-galery/core/constants';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';
import { useScrollAnimationGlobal } from '@/site-web/shares/hooks/useScrollAnimationGlobal';

const GalleryCard = ({ item, index }: { item: GalleryItem; index: number }) => {
  return (
    <article
      style={{ 
        transitionDelay: `${index * 0.05}s`,
        willChange: 'transform'
      }}
      className="break-inside-avoid mb-8 group relative animate-gallery-card"
      aria-label={`Galerie: ${item.title}`}
    >
      <div className={`relative ${item.aspect} overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm transition-shadow duration-500 hover:shadow-2xl`}>
        
        {/* Image */}
        <div className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img
            src={item.image}
            alt={`${item.title} - ${item.category}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom Metadata Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-brand">
          <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-1">
            {item.category}
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-black">{item.title}</h3>
        </div>
      </div>

      {/* Static Label Below (For accessibility and always-on branding) */}
      <div className="mt-5 px-3 md:px-4 flex justify-between items-start">
        <div>
          <h4 className="font-black text-brand dark:text-white text-2xl md:text-3xl tracking-tight group-hover:text-highlight transition-colors duration-300">
            {item.title}
          </h4>
          <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest mt-0.5">
            EcoLaundry Archive • {item.category}
          </p>
        </div>
      </div>
    </article>
  );
};

export default function Gallery() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  // Observer global pour toutes les cartes de galerie
  useScrollAnimationGlobal();

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-dark-bg transition-colors duration-500 overflow-hidden" role="region" aria-label="Galerie de nos réalisations">
      <div className="container mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="mb-20 md:mb-32">
          <div
            ref={headerRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up-on-scroll"
          >
            <div className="max-w-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand/5 dark:bg-highlight/10 rounded-xl flex items-center justify-center text-highlight" aria-hidden="true">
                  <Camera size={20} aria-hidden="true" />
                </div>
                <span className="text-brand dark:text-highlight font-black text-xs uppercase tracking-[0.5em]">Work Archive</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight">
                L'Excellence <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">documentée.</span>
              </h2>
            </div>
            
            <div className="lg:max-w-md flex flex-col gap-2">
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                Chaque textile est une pièce d'histoire. Découvrez comment nous préservons l'éclat de vos articles les plus précieux.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand dark:text-highlight">Mise à jour aujourd'hui</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="relative columns-1 md:columns-2 lg:columns-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Minimalist Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 bg-brand/5 dark:bg-white/5 rounded-[3rem] border border-brand/10 dark:border-white/10" role="region" aria-label="Statistiques de performance">
          {GALLERY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl lg:text-4xl font-black text-brand dark:text-brand tracking-tighter mb-1">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
