import { memo } from 'react';
import { CheckCircle2, Truck } from 'lucide-react';
import { HERO_FEATURES } from '@/site-web/body/1-hero/core/constants';
import { Button } from '@/site-web/shares/components/ui/button';
import Lightbox from '@/site-web/body/1-hero/components/lightbox';
import { CONTACT_INFO } from '@/site-web/shares/core/constants';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-light dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-left">
            {/* Semantic Badge */}
            <div
              className="inline-flex items-center gap-2 bg-light/80 dark:bg-dark-bg/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brand/10 mb-6"
              role="status"
              aria-label="Service Premium disponible à Meknès"
            >
              <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-brand dark:text-slate-300 font-bold text-sm uppercase tracking-widest">
                Service Premium à Meknès
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-[1.1] mb-8">
              Service de blanchisserie, <br />
              <span className="text-heoro italic font-light underline decoration-highlight underline-offset-8">au kilo.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-lg md:max-w-2xl">
              Lavage au kilo, soin professionnel du linge et livraison à domicile.
              Une solution simple, fiable et écologique pour des vêtements propres, frais et parfaitement entretenus.
              <span className="block mt-4 font-bold text-brand dark:text-highlight">À partir de 15 DH / kg</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="brand"
                size="site-md"
                className="w-full sm:w-auto"
                asChild
                aria-label="Contactez-nous sur WhatsApp"
              >
                <a
                  href={CONTACT_INFO.whatsapp.url(CONTACT_INFO.whatsapp.number, CONTACT_INFO.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Appeler maintenant
                </a>
              </Button>
              <Lightbox
                imageSrc="/images/avif/Tarif/Tarif.avif"
                imageAlt="Nos tarifs - EcoLaundry"
                trigger={
                  <Button
                    variant="brand-outline"
                    size="site-md"
                    className="w-full sm:w-auto"
                    aria-label="Voir nos tarifs"
                  >
                    Nos Tarifs
                  </Button>
                }
              />
            </div>

            <ul className="mt-12 flex flex-wrap gap-6 items-center" aria-label="Avantages du service">
              {HERO_FEATURES.map((text) => (
                <li key={text} className="flex items-center gap-2 text-brand dark:text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-highlight" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand/10 border-4 border-white/20">
              <img
                src="/images/avif/hero.avif"
                alt="Ecolaundry Meknes"
                fetchPriority="high"
                loading="eager"
                className="w-full object-cover aspect-[4/5] md:max-h-[450px] lg:max-h-none hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Glass Card Overlay using Highlight border */}
            <article
              className="absolute -bottom-10 -left-10 z-20 bg-white/10 dark:bg-slate-900/30 backdrop-blur-[25px] p-8 rounded-3xl shadow-xl max-w-xs border-highlight/30"
              aria-label="Service de collecte express disponible"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center text-white" aria-hidden="true">
                  <Truck aria-hidden="true" />
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase">Collecte Express</p>
                  <p className="text-brand dark:text-white font-black text-xl">Disponible</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Nous arrivons chez vous en moins de 60 minutes à Meknès.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
