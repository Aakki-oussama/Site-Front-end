import { useEffect, useRef, useMemo } from 'react';
import { ANIMATION_CONFIG } from '@/site-web/shares/animation/animation';

/**
 * Hook personnalisé pour déclencher les animations au scroll
 * 
 * Utilise Intersection Observer API pour détecter quand un élément
 * entre dans la zone visible de l'écran et ajoute la classe 'visible'
 * pour déclencher l'animation CSS.
 * 
 * @param options - Options pour l'Intersection Observer
 * @param options.threshold - Pourcentage de visibilité requis (0.1 = 10%)
 * @param options.rootMargin - Marge autour du viewport ('-50px' = déclenche 50px avant)
 * 
 * @returns ref - Référence à attacher à l'élément à animer
 * 
 * @example
 * ```tsx
 * // Pour un div
 * const ref = useScrollAnimation<HTMLDivElement>();
 * 
 * return (
 *   <div ref={ref} className="animate-fade-up-on-scroll">
 *     <h2>Title</h2>
 *   </div>
 * );
 * 
 * // Pour un section
 * const ref = useScrollAnimation<HTMLElement>();
 * <section ref={ref}>...</section>
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options?: {
    threshold?: number;
    rootMargin?: string;
}) {
    // Référence à l'élément DOM à observer (type générique pour type safety)
    const ref = useRef<T>(null);

    // Mémoriser les options pour éviter les re-renders inutiles
    const observerOptions = useMemo(
        () => ({
            threshold: options?.threshold ?? ANIMATION_CONFIG.scroll.threshold, // Déclenche quand 10% est visible
            rootMargin: options?.rootMargin ?? '0px', // Pas de marge par défaut
        }),
        [options?.threshold, options?.rootMargin]
    );

    useEffect(() => {
        const element = ref.current;
        
        // Si l'élément n'existe pas, on ne fait rien
        if (!element) return;

        // Création de l'Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Si l'élément est visible dans le viewport
                    if (entry.isIntersecting) {
                        // Ajouter la classe 'visible' pour déclencher l'animation
                        entry.target.classList.add('visible');
                        
                        // Arrêter d'observer après la première animation
                        // Pour éviter les re-animations et améliorer les performances
                        observer.unobserve(entry.target);
                    }
                });
            },
            observerOptions
        );

        // Commencer à observer l'élément
        observer.observe(element);

        // Nettoyage: Arrêter d'observer quand le composant est démonté
        return () => {
            observer.disconnect();
        };
    }, [observerOptions]);

    // Retourner la référence à attacher à l'élément
    return ref;
}

