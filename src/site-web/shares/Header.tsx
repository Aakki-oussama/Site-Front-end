import { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { NAV_LINKS, APP_NAME } from '@/site-web/shares/core/constants';
import { ANIMATION_CONFIG } from '@/site-web/shares/animation/animation';
import ComingSoonModal from '@/site-web/body/2-service/components/ComingSoonModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let lastCall = 0;

    const handleScroll = () => {
      const now = Date.now();

      // Throttle: Only execute every 100ms (reduces calls from 60+/sec to ~10/sec)
      if (now - lastCall >= ANIMATION_CONFIG.scroll.throttleMs) {
        lastCall = now;
        setScrolled(window.scrollY > ANIMATION_CONFIG.scroll.headerShrink);
      }
    };

    // Add passive listener for smooth scrolling (doesn't block browser)
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'
      }`}>
      <div className="container mx-auto px-6">
        <nav className={`bg-white/10 dark:bg-slate-900/30 backdrop-blur-[25px] rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg border border-white/20`}>
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label={`${APP_NAME} - Retour à l'accueil`}
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center animate-liquid">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-brand font-extrabold text-2xl tracking-tight hidden sm:block uppercase">
              {APP_NAME}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-highlight font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-2 text-brand hover:text-highlight transition-colors font-semibold"
              aria-label="Connexion"
            >
              <LogIn size={20} />
              <span>Connexion</span>
            </button>
            <button
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 p-2 text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-highlight transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false); // Close mobile menu when opening modal
            }}
            className="flex items-center gap-2 text-brand hover:text-highlight transition-colors font-semibold text-xl"
            aria-label="Connexion"
          >
            <LogIn size={28} />
            <span>Connexion</span>
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}
