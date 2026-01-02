
import { STEPS, METRICS } from '@/site-web/body/3-timeline/core/constants';
import { ICONS } from '@/site-web/shares/core/constants';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';
import { useScrollAnimationGlobal } from '@/site-web/shares/hooks/useScrollAnimationGlobal';

export default function Timeline() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const progressBarRef = useScrollAnimation<HTMLDivElement>();
  
  // Observer global pour toutes les cartes avec animate-fade-up-y-on-scroll
  useScrollAnimationGlobal();

  return (
    <section id="process" className="py-16 bg-white dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative border-y border-slate-100 dark:border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 dark:bg-highlight/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div
            ref={headerRef}
            className="animate-fade-up-on-scroll"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-6">
              Un processus <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">maîtrisé.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed">
              De la collecte à la livraison, nous veillons sur chaque fibre avec une attention particulière.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-brand via-highlight to-brand animate-progress-bar"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                style={{ 
                  transitionDelay: `${index * 0.15}s`,
                  willChange: 'transform'
                }}
                className="relative z-10 group flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up-y-on-scroll"
                aria-label={`Étape ${step.id}: ${step.title}`}
              >
                {/* Step Marker */}
                <div className="relative z-10 flex items-center justify-center mb-8">
                  {/* Outer Ring */}
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-highlight group-hover:shadow-2xl group-hover:shadow-highlight/20">
                    {/* Inner Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-brand/5 dark:bg-highlight/10 flex items-center justify-center text-brand dark:text-highlight group-hover:bg-brand group-hover:text-white dark:group-hover:bg-highlight dark:group-hover:text-dark-bg transition-all duration-500">
                      <span aria-hidden="true">{ICONS[step.iconName]}</span>
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-highlight text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-highlight/30 border-2 border-white dark:border-slate-900">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="lg:pr-4">
                  <h3 className="text-2xl md:text-3xl font-black text-brand dark:text-white mb-4 transition-colors group-hover:text-highlight dark:group-hover:text-highlight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics/Trust Badges */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 bg-brand/5 dark:bg-white/5 rounded-[3rem] border border-brand/10 dark:border-white/10"
          role="region"
          aria-label="Statistiques de performance"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-black text-brand dark:text-highlight tracking-tighter mb-1">{metric.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
