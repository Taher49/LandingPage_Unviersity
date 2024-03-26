import './App.css'


import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Cards from "./Components/cards"
import Card from "./Components/Card"
import About from './Components/About'
import Next from './Components/Next'
import Contactus from './Components/Contactus'
import Accordion from './Components/Accordion'
import Footer from './Components/footer'

const App = () => {


  return (
    <>
      <Navbar  />
      <Hero />
      <Cards />
      <About />
      <Next />
      <Accordion />
      <Contactus />
      <Footer />
      
    </>
  )
}

export default App
