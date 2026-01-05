import { lazy, Suspense, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/site-web/shares/Header'
import Footer from '@/site-web/shares/Footer'
import Hero from '@/site-web/body/1-hero/Hero'
import ErrorBoundary from '@/site-web/shares/errorboundary/ErrorBoundary'
import Loader from '@/site-web/shares/animation/Loader'
import SEOHead from '@/site-web/shares/seo/SEOHead'
import { useLoader } from '@/site-web/shares/hooks/useLoader'
import './App.css'

// Load critical sections immediately (visible on first load - above the fold)
import Services from '@/site-web/body/2-service/Services'
import Timeline from '@/site-web/body/3-timeline/Timeline'

// Lazy load sections below the fold (load when needed, not all at once)
const WhyUs = lazy(() => import('@/site-web/body/4-about/Whyus'))
const Galerie = lazy(() => import('@/site-web/body/5-galery/Galerie'))
const Contact = lazy(() => import('@/site-web/body/6-contact/Contact'))
const Testimonials = lazy(() => import('@/site-web/body/7-testimonial/Testimonials'))
const Faq = lazy(() => import('@/site-web/body/8-faq/Faq'))

// Loading fallback component (shows while section loads)
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand/20 border-t-brand rounded-full animate-spin" aria-label="Chargement..." />
  </div>
)

function App() {
  const { isLoading, isExiting } = useLoader()

  // Prefetch critical sections after initial load (improves perceived performance)
  useEffect(() => {
    // Prefetch WhyUs, Galerie, and Testimonials after page load (non-blocking)
    const prefetchTimer = setTimeout(() => {
      import('@/site-web/body/4-about/Whyus')
      import('@/site-web/body/5-galery/Galerie')
      import('@/site-web/body/7-testimonial/Testimonials')
    }, 2000) // Wait 2s after page load to not interfere with critical resources

    return () => clearTimeout(prefetchTimer)
  }, [])

  return (
    <>
      <SEOHead />
      {/* Simple: Loader on top, site below - loader z-index covers everything */}
      {isLoading && <Loader isExiting={isExiting} />}
      
      <Header />
      <main className="min-h-screen">
        <Hero />
        {/* Critical sections - load immediately (above the fold) */}
        <ErrorBoundary>
          <Services />
        </ErrorBoundary>
        <ErrorBoundary>
          <Timeline />
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <WhyUs />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Galerie />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Faq />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
