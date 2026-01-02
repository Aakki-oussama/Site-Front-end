import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/site-web/body/7-testimonial/core/constants';
import { useTestimonialSlider } from '@/site-web/body/7-testimonial/core/useTestimonialSlider';
import { CONTACT_INFO } from '@/site-web/shares/core/constants';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';

export default function Testimonials() {
  const { activeIndex, next, prev } = useTestimonialSlider({ 
    totalItems: TESTIMONIALS.length 
  });
  const headerRef = useScrollAnimation<HTMLDivElement>();

  const current = TESTIMONIALS[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 bg-white dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative"
      aria-label="Témoignages clients"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text and Map */}
          <div className="space-y-12">
            <div
              ref={headerRef}
              className="animate-fade-up-on-scroll"
            >
              <div className="flex items-center gap-2 mb-4" aria-label="Badge Confiance & Proximité">
                <span className="w-6 h-[2px] bg-highlight rounded-full" aria-hidden="true" />
                <span className="text-highlight font-black text-xs uppercase tracking-[0.3em]">Confiance & Proximité</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-8">
                Ils nous font <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">confiance à EcoLaundry.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                Découvrez les avis de nos clients locaux et retrouvez-nous au cœur de la ville.
              </p>
            </div>

            {/* Google Maps */}
            <div className="relative w-full overflow-hidden rounded-[2rem] shadow-xl h-80 md:h-auto md:aspect-video border border-slate-100 dark:border-white/10">
              <iframe
                src={CONTACT_INFO.googleMaps.embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Localisation Ecolaundry - Ave Zitoune, Meknès"
                aria-label="Carte Google Maps montrant l'emplacement d'Ecolaundry à Ave Zitoune, Meknès"
              />
            </div>
          </div>

          {/* Right Side: Simple Testimonial Slider */}
          <div className="flex flex-col justify-center min-h-[400px]">
            <div className="relative h-full flex flex-col">
              <div
                key={activeIndex}
                className="w-full animate-testimonial-card"
              >
                <div 
                  className="bg-light dark:bg-white/5 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative h-full"
                  role="article"
                  aria-label={`Témoignage de ${current.name}, ${current.role}`}
                >
                    <Quote className="text-highlight/20 w-10 h-10 mb-6" aria-hidden="true" />
                    
                    <div className="flex items-center gap-1 mb-6" role="img" aria-label={`Note: ${current.rating} sur 5 étoiles`}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < current.rating ? "fill-highlight text-highlight" : "text-slate-200 dark:text-slate-700"} 
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 leading-snug mb-8 tracking-tight italic">
                      "{current.content}"
                    </blockquote>

                    <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                      <h3 className="text-xl md:text-2xl font-black text-brand dark:text-white mb-2 leading-tight">{current.name}</h3>
                      <p className="text-slate-600 dark:text-slate-200 text-xs font-black uppercase tracking-widest">{current.role}</p>
                    </div>

                    {/* Slider Controls - Inside Card */}
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 md:gap-3">
                      <button 
                        onClick={prev}
                        className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand dark:hover:text-highlight hover:border-brand dark:hover:border-highlight transition-all shadow-sm hover:shadow-md"
                        aria-label="Témoignage précédent"
                      >
                        <ChevronLeft size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                      </button>
                      <button 
                        onClick={next}
                        className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand dark:hover:text-highlight hover:border-brand dark:hover:border-highlight transition-all shadow-sm hover:shadow-md"
                        aria-label="Témoignage suivant"
                      >
                        <ChevronRight size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
