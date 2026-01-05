import { memo } from 'react';

interface LoaderProps {
    isExiting?: boolean;
  }
  
  function Loader({ isExiting = false }: LoaderProps) {
    return (
      <div
        className={`fixed inset-0 z-[9999] bg-light dark:bg-dark-bg flex items-center justify-center overflow-hidden ${
          isExiting ? 'loader-exit' : ''
        }`}
        style={{ contain: 'layout style paint' }}
      >
        <div className="relative flex flex-col items-center gap-4">
          {/* Welcome Text - First animation */}
          <p 
            className="text-sm font-medium text-slate-600 dark:text-slate-400 animate-loader-fade-up"
            style={{ animationDelay: '0s' }}
          >
            Welcome To
          </p>

          {/* Brand Name - Second animation */}
          <h1 
            className="text-4xl md:text-5xl font-black tracking-tighter animate-loader-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-brand">Eco</span>
            <span className="text-highlight dark:text-white">laundry</span>
          </h1>

          {/* Location - Third animation */}
          <p 
            className="text-xs font-bold text-brand dark:text-highlight uppercase tracking-wider animate-loader-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Meknes - Morocco
          </p>
        </div>
      </div>
    );
  }

  export default memo(Loader);
  