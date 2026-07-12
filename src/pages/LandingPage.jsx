import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Destinations from '../components/Destinations.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Testimonials from '../components/Testimonials.jsx'
import TravelTips from '../components/TravelTips.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'
import './LandingPage.css'

/**
 * Landing page — assembles all marketing sections in order.
 */
function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <HowItWorks />
        <Testimonials />
        <TravelTips />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
