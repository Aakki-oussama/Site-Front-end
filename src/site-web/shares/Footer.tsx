import { APP_NAME, ICONS, NAV_LINKS, CONTACT_INFO } from '@/site-web/shares/core/constants';

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark-bg pt-24 pb-12 border-t border-brand/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand dark:bg-brand-static rounded-xl flex items-center justify-center text-light font-bold shadow-lg shadow-brand/20">
                E
              </div>
              <span className="text-brand dark:text-brand font-black text-2xl tracking-tighter uppercase">
                {APP_NAME}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
              L'excellence du pressing éco-responsable au cœur de Meknès. Un soin unique pour chaque fibre, du quotidien au tapis d'exception.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Facebook"
                className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:bg-white dark:hover:bg-white/10 transition-all border border-brand/5 shadow-sm"
              >
                {ICONS.Facebook}
              </a>
              <a 
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Instagram"
                className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:bg-white dark:hover:bg-white/10 transition-all border border-brand/5 shadow-sm"
              >
                {ICONS.Instagram}
              </a>
              <a 
                href={CONTACT_INFO.whatsapp.url(CONTACT_INFO.whatsapp.number, CONTACT_INFO.whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactez-nous sur WhatsApp"
                className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:bg-white dark:hover:bg-white/10 transition-all border border-brand/5 shadow-sm"
              >
                {ICONS.WhatsApp}
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-brand dark:text-brand mb-6 uppercase tracking-widest text-xs">Navigation</h2>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-highlight transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand dark:text-brand mb-6 uppercase tracking-widest text-xs">Nos Services</h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300 font-semibold">
              <li>Lavage & Séchage</li>
              <li>Nettoyage de Tapis</li>
              <li>Repassage de Luxe</li>
              <li>Rideaux & Couettes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand dark:text-brand mb-6 uppercase tracking-widest text-xs">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 font-semibold">
                <div className="text-brand dark:text-brand mt-1">{ICONS.MapPin}</div>
                <address className="not-italic">
                  <a 
                    href="https://www.google.com/maps?q=33.8582317,-5.5762441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand dark:hover:text-highlight transition-colors"
                    aria-label={`Voir l'adresse ${CONTACT_INFO.address.full} sur Google Maps`}
                  >
                    {CONTACT_INFO.address.full}
                  </a>
                </address>
              </li>
              <li className="flex items-center gap-4 text-slate-600 dark:text-slate-300 font-semibold">
                <div className="text-brand dark:text-brand">{ICONS.Phone}</div>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-highlight transition-colors"
                  aria-label={`Appeler ${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-600 dark:text-slate-300 font-semibold">
                <div className="text-brand dark:text-brand">{ICONS.Mail}</div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-highlight transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 font-semibold">
                <div className="text-brand dark:text-brand mt-1">{ICONS.Clock}</div>
                <div className="flex flex-col">
                  <span>Ouvert : {CONTACT_INFO.hours.display}</span>
                  <span>{CONTACT_INFO.hours.days}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand/10 flex items-center justify-center">
          <p className="text-brand dark:text-slate-300 text-sm font-bold">
            © {new Date().getFullYear()} {APP_NAME}. <span className="text-brand dark:text-slate-300/70">L'éclat durable à Meknès.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
