import Header from './components/partials/Header/Header'
import Footer from './components/partials/Footer/Footer'
import './App.css'
import Process from './components/Process/Process'
import Testimonials from './components/Testimonials/Testimonials'
import Hero from './components/HeroSection/HeroSection'
function App() {

  return (
    <div className="min-h-screen text-dark">
        <Header />
        <Hero />
        <Process />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App;
