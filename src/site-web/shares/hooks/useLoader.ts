import { useState, useEffect } from 'react'

export function useLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // OPTIMIZED: Minimum display time
    const minDisplayTime = 1800 // 1.8 seconds minimum
    const startTime = Date.now()

    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDisplayTime - elapsed)

      setTimeout(() => {
        // Start exit animation
        setIsExiting(true)
        
        // Remove from DOM after exit animation completes (0.8s)
        setTimeout(() => {
          setIsLoading(false)
        }, 800)
      }, remaining)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return { isLoading, isExiting }
}

