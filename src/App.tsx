import Header from '@/site-web/shares/Header'
import Footer from '@/site-web/shares/Footer'
import Hero from '@/site-web/body/1-hero/Hero'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
