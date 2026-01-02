/**
 * Animation Configuration - Centralized animation constants
 * 
 * Single source of truth for all animation values across the site.
 * Makes it easy to experiment with timing and maintain consistency.
 */

export const ANIMATION_CONFIG = {
    // Scroll animations
    scroll: {
      threshold: 0.1,        // Trigger when 10% visible (Intersection Observer)
      headerShrink: 50,      // Header shrinks after 50px scroll
      throttleMs: 100,       // Throttle scroll events to 100ms
    },
  
    // Durations (in seconds)
    durations: {
      instant: 0.1,   // Immediate feedback
      fast: 0.2,      // Quick transitions
      normal: 0.3,    // Standard animations
      medium: 0.5,    // Medium animations
      slow: 0.8,      // Dramatic effects
      verySlow: 1.2,  // Complex animations
      progress: 1.5,  // Progress bar animations
    },
  
    // Framer Motion spring physics
    spring: {
      gentle: { 
        stiffness: 100, 
        damping: 30 
      },  // Soft, bouncy (for parallax)
      normal: { 
        stiffness: 300, 
        damping: 30 
      },  // Standard (for sliders)
      snappy: { 
        stiffness: 500, 
        damping: 40 
      },  // Quick, responsive
    },
  
    // Stagger delays (for sequential animations)
    stagger: {
      fast: 0.05,    // Quick stagger (Service, Gallery)
      normal: 0.1,   // Standard stagger (Whyus)
      slow: 0.2,     // Slow stagger (Timeline)
    },
  
    // Easing functions
    easing: {
      easeOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
      easeInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
      default: [0.43, 0.13, 0.23, 0.96], // Custom bezier for loader
    },
  } as const;
  
  