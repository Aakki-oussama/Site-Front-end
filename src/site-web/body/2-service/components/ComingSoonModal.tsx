import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CONTACT_INFO } from '@/site-web/shares/core/constants';
import WhatsAppIcon from '@/site-web/shares/components/ui/whatsapp-icon';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-2xl border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 id="modal-title" className="text-2xl font-black text-brand dark:text-white mb-4">
            Service en Maintenance
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            Ce service sera bientôt disponible.
          </p>
          
          {/* WhatsApp Button */}
          <a
            href={CONTACT_INFO.whatsapp.url(CONTACT_INFO.whatsapp.number, CONTACT_INFO.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-black rounded-xl transition-colors duration-200"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <WhatsAppIcon size={20} />
            <span>Nous contacter</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

