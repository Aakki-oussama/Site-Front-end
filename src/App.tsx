import Header from '@/site-web/shares/Header'
import Footer from '@/site-web/shares/Footer'
import Hero from '@/site-web/body/1-hero/Hero'
import Services from '@/site-web/body/2-service/Services'
import Timeline from '@/site-web/body/3-timeline/Timeline'
import WhyUs from '@/site-web/body/4-about/Whyus'
import Galerie from '@/site-web/body/5-galery/Galerie'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Timeline />
        <WhyUs />
        <Galerie />
      </main>
      <Footer />
    </>
  )
}

export default App
