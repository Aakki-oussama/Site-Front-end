import { SERVICES, SERVICE_IMAGES } from '@/site-web/body/2-service/core/constants';
import { ICONS } from '@/site-web/shares/core/constants';
import CategoryBadge from '@/site-web/body/2-service/components/CategoryBadge';
import { Button } from '@/site-web/shares/components/ui/button';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';
import { useScrollAnimationGlobal } from '@/site-web/shares/hooks/useScrollAnimationGlobal';

export default function Services() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const descriptionRef = useScrollAnimation<HTMLDivElement>();
  
  // Observer central pour toutes les cartes
  useScrollAnimationGlobal();

  return (
    <section id="services" className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-xl lg:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div
            ref={headerRef}
            className="max-w-2xl animate-fade-up-on-scroll"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-highlight" />
              <span className="text-highlight font-black text-xs uppercase tracking-[0.3em]">Excellence Operationnelle</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight">
              Soin Textile <br />
              <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8"> Haute Couture.</span>
            </h2>
          </div>
          
          <div 
            ref={descriptionRef}
            className="lg:max-w-md animate-fade-up-on-scroll"
          >
            <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed">
              Nous traitons chaque article comme une pièce d'exception. Notre processus combine technologie de pointe et savoir-faire artisanal à Meknès.
            </p>
          </div>
        </div>

        {/* New Modular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className={`group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 animate-fade-up-on-scroll ${
                index === 0 ? 'md:col-span-2 lg:flex-row' : ''
              }`}
              aria-label={`Service: ${service.title}`}
            >
              {/* Image Section */}
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-64'}`}>
                <img 
                  src={SERVICE_IMAGES[service.id]} 
                  alt={`Illustration du service ${service.title}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent" />
                <CategoryBadge category={service.category} />
              </div>

              {/* Content Section */}
              <div className={`p-10 flex flex-col justify-between ${index === 0 ? 'lg:w-1/2' : 'flex-1'}`}>
                <div>
                  <div 
                    className="w-14 h-14 bg-brand/5 dark:bg-highlight/10 rounded-2xl flex items-center justify-center text-brand dark:text-highlight mb-8 lg:group-hover:scale-110 lg:group-hover:bg-brand lg:group-hover:text-white dark:lg:group-hover:bg-highlight dark:lg:group-hover:text-dark-bg transition-all duration-500"
                    aria-hidden="true"
                  >
                    {ICONS[service.iconName]}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-brand dark:text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {service.price && (
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-col">
                      {service.price.prefix && (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{service.price.prefix}</span>
                      )}
                      <span className="text-xl font-black text-brand dark:text-highlight tracking-tighter">{service.price.amount} {service.price.unit}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] bg-brand/5 backdrop-blur-sm text-white flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative overflow-hidden"
        >
          <div>
            <h3 className="text-brand text-2xl md:text-3xl font-black mb-2">Vous avez un article volumineux ?</h3>
            <p className="text-black dark:text-white text-base md:text-lg lg:text-xl opacity-80">Couettes, tapis de luxe, ou rideaux — nous avons l'équipement adapté.</p>
          </div>
          <Button 
            variant="highlight"
            size="site-lg"
            className="relative z-10 shrink-0 font-black w-full lg:w-auto"
            aria-label="Demander un devis gratuit pour articles volumineux"
          >
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}
