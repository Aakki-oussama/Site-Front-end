import { Send, CheckCheck, MoreHorizontal, Camera, Signal, Wifi, Battery } from 'lucide-react';
import { APP_NAME } from '@/site-web/shares/core/constants';
import { CONTACT_LINKS, SOCIAL_LINKS, CHAT_MESSAGES } from '@/site-web/body/6-contact/core/constants';
import type { ContactLink } from '@/site-web/body/6-contact/core/index';
import { useScrollAnimation } from '@/site-web/shares/hooks/useScrollAnimation';
import { useScrollAnimationGlobal } from '@/site-web/shares/hooks/useScrollAnimationGlobal';

const ContactLinkComponent = ({ icon: Icon, title, value, href, color }: ContactLink) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all group"
  >
    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${color}`}>
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{title}</p>
      <p className="text-brand dark:text-white font-black text-base sm:text-lg group-hover:text-highlight transition-colors">{value}</p>
    </div>
  </a>
);

export default function Contact() {
  const currentTime = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  // Observer global pour toutes les animations
  useScrollAnimationGlobal();

  return (
    <section id="contact" className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 dark:bg-highlight/5 -z-10 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div
            ref={headerRef}
            className="animate-fade-up-on-scroll"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-highlight rounded-full" />
              <span className="text-brand dark:text-highlight font-black text-xs uppercase tracking-[0.4em]">Contact Rapide</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-8">
              Prêt pour un <br />
              <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">nouveau départ?</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-md">
              Que ce soit pour une collecte urgente ou un conseil d'entretien, notre équipe à Meknès est à votre écoute.
            </p>

            <div className="grid gap-4 max-w-md">
              {CONTACT_LINKS.map((link) => (
                <ContactLinkComponent
                  key={link.title}
                  icon={link.icon}
                  title={link.title}
                  value={link.value}
                  href={link.href}
                  color={link.color}
                />
              ))}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitez notre page ${social.label}`}
                      className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] ${social.color} text-white font-black uppercase tracking-widest text-xs hover:shadow-xl hover:-translate-y-1 transition-all`}
                    >
                      <Icon size={20} aria-hidden="true" /> {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="relative flex justify-center lg:justify-end animate-fade-up-y-on-scroll"
          >
            {/* Minimalist Phone Mockup */}
            <div 
              className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-white dark:bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border-[4px] sm:border-[6px] border-slate-900 dark:border-slate-800 overflow-hidden"
              aria-hidden="true"
            >
              
              {/* Screen Content */}
              <div className="h-full flex flex-col">
                
                {/* Simplified Status Bar */}
                <div className="h-12 flex items-center justify-between px-8 pt-4">
                  <span className="text-[11px] font-bold text-slate-400">{currentTime}</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Signal size={12} />
                    <Wifi size={12} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* Chat Header */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-slate-50 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white text-sm font-black">E</div>
                    <div>
                      <p className="text-xs font-black text-brand dark:text-white">{APP_NAME} Support</p>
                      <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> En ligne
                      </span>
                    </div>
                  </div>
                  <MoreHorizontal size={18} className="text-slate-300" />
                </div>

                {/* Chat Stream */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-slate-50/50 dark:bg-black/10">
                  {CHAT_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      style={{ 
                        transitionDelay: `${message.delay || 0}s`,
                        willChange: 'transform'
                      }}
                      className={`p-3 rounded-2xl max-w-[85%] shadow-sm animate-gallery-card ${
                        message.isFromUser
                          ? 'bg-white dark:bg-slate-800 rounded-tl-none self-start border border-slate-100 dark:border-white/5'
                          : 'bg-brand text-white rounded-tr-none self-end shadow-md'
                      }`}
                    >
                      <p className={`text-[11px] font-medium ${message.isFromUser ? 'text-slate-600 dark:text-slate-300' : ''}`}>
                        {message.text}
                      </p>
                      <div className={`flex items-center gap-1 mt-1 ${message.isFromUser ? 'justify-end' : 'justify-end'}`}>
                        <span className={`text-[8px] ${message.isFromUser ? 'text-slate-400' : 'opacity-70'}`}>
                          {message.time}
                        </span>
                        {!message.isFromUser && (
                          <CheckCheck size={10} className="text-highlight" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-white/5 pb-10">
                  <div className="bg-slate-100 dark:bg-white/5 rounded-2xl px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Message...</span>
                    <div className="flex gap-2 text-slate-300">
                      <Camera size={16} />
                      <Send size={16} className="text-brand dark:text-highlight" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-highlight/10 blur-[100px] rounded-full -z-10 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}