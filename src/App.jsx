import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import ValueProp from './components/ValueProp'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import RecognisedBy from './components/RecognisedBy'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div style={{ background: '#FFFDF7' }}>
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <Hero />
        <ProblemStatement />
        <ValueProp />
        <HowItWorks />
        <Features />
        <Pricing />
        <Contact />
        <FinalCTA />
        <RecognisedBy />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
