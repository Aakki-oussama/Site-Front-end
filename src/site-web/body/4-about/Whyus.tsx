import { Trophy, Heart } from 'lucide-react';
import { REASONS } from '@/site-web/body/4-about/core/constants';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';
import { useScrollAnimationGlobal } from '@/site-web/shares/hooks/useScrollAnimationGlobal';

export default function WhyUs() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  // Observer central pour toutes les cartes
  useScrollAnimationGlobal();

  return (
    <section id="why-us" className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div
              ref={headerRef}
              className="animate-fade-up-on-scroll"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/5 dark:bg-highlight/10 rounded-full border border-brand/10 dark:border-highlight/20 mb-8">
                <Trophy size={16} className="text-highlight" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brand dark:text-slate-300">Expert Textile</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-8">
                L'excellence est dans le <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">détail.</span>
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-12">
                Ecolaundry n'est pas qu'un pressing, c'est une promesse de longévité pour vos vêtements préférés.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="text-3xl lg:text-4xl font-black text-brand dark:text-highlight mb-1">98%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Satisfaction</div>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="text-3xl lg:text-4xl font-black text-brand dark:text-highlight mb-1">15k+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Articles Traités</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {REASONS.map((reason, index) => (
              <div
                key={reason.id}
                className={`group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-up-on-scroll ${reason.border} border-transparent`}
              >
                {/* Number Watermark */}
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 dark:text-white/5 select-none transition-colors group-hover:text-brand/10 dark:group-hover:text-highlight/10">
                  {reason.id}
                </div>

                {/* Icon Container with Gradient Glow */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-brand dark:text-highlight mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {reason.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-brand dark:text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Decorative Bar */}
                <div className="mt-8 w-12 h-1 bg-slate-100 dark:bg-white/10 rounded-full group-hover:w-full group-hover:bg-highlight dark:group-hover:bg-highlight transition-all duration-700" />
              </div>
            ))}

            {/* Specialized Card */}
            <div
              className="group sm:col-span-2 p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-brand/5 backdrop-blur-sm text-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shrink-0 border border-brand/20 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-10 h-10 fill-brand dark:group-hover:fill-brand" />
              </div>
              <div>
                <h4 className="text-brand text-2xl md:text-3xl font-black mb-2">Un service avec du cœur</h4>
                <p className="text-black dark:text-white font-medium opacity-90">
                  Parce que vos vêtements font partie de votre histoire, nous les traitons avec le respect qu'ils méritent.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
