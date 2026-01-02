import { X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  imageSrc: string;
  imageAlt: string;
  trigger: React.ReactNode;
  className?: string;
}

export default function Lightbox({ imageSrc, imageAlt, trigger, className }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={className}>
        {trigger}
      </div>

      {isOpen && typeof window !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90"
          onClick={() => setIsOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            className="relative text-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
