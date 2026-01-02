import { useState, useEffect, useCallback } from 'react';

interface UseTestimonialSliderProps {
  totalItems: number;
  autoPlayInterval?: number;
}

export function useTestimonialSlider({ totalItems, autoPlayInterval = 8000 }: UseTestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    setActiveIndex((current) => {
      setDirection(index > current ? 1 : -1);
      return index;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return {
    activeIndex,
    direction,
    next,
    prev,
    goTo
  };
}
