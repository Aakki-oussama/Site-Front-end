import { useEffect } from 'react';
import { ANIMATION_CONFIG } from '@/site-web/shares/animation/animation';

/**
 * Hook global pour observer tous les éléments avec la classe animate-fade-up-on-scroll
 * 
 * Un seul Intersection Observer observe tous les éléments dans le composant
 * et ajoute la classe 'visible' quand ils entrent dans la vue.
 * 
 * Performance: Un seul observer pour tous les éléments = meilleure performance
 * 
 * @example
 * ```tsx
 * useScrollAnimationGlobal();
 * 
 * return (
 *   <div className="animate-fade-up-on-scroll">Card 1</div>
 *   <div className="animate-fade-up-on-scroll">Card 2</div>
 * );
 * ```
 */
export function useScrollAnimationGlobal() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Utiliser requestAnimationFrame pour éviter forced reflow
    // Attend que le navigateur termine le rendu avant de lire le DOM
    const rafId = requestAnimationFrame(() => {
      // Sélectionner tous les éléments avec les classes d'animation
      const elements = document.querySelectorAll('.animate-fade-up-on-scroll, .animate-fade-up-y-on-scroll, .animate-progress-bar, .animate-gallery-card');
      
      // Si aucun élément, on ne fait rien
      if (elements.length === 0) return;

      // Créer un seul observer pour tous les éléments
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Si l'élément est visible dans le viewport
            if (entry.isIntersecting) {
              // Ajouter la classe 'visible' pour déclencher l'animation
              entry.target.classList.add('visible');
              
              // Arrêter d'observer après la première animation (performance)
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: ANIMATION_CONFIG.scroll.threshold, // Déclenche quand 10% est visible
          rootMargin: '0px', // Pas de marge
        }
      );

      // Observer tous les éléments
      elements.forEach((element) => {
        observer?.observe(element);
      });
    });

    // Nettoyage: Arrêter d'observer et annuler le requestAnimationFrame
    return () => {
      cancelAnimationFrame(rafId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Seulement au montage du composant
}

