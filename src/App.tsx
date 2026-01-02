import { lazy, Suspense } from 'react'
import Header from '@/site-web/shares/Header'
import Footer from '@/site-web/shares/Footer'
import Hero from '@/site-web/body/1-hero/Hero'
import './App.css'

// Lazy load sections (load when needed, not all at once)
const Services = lazy(() => import('@/site-web/body/2-service/Services'))
const Timeline = lazy(() => import('@/site-web/body/3-timeline/Timeline'))
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
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Galerie />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Faq />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
