
import './App.css'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Testimonials from './Components/Testimonials'
import Testing from './Components/testing'

function App() {

  return (
    <div>
      <Navbar />

      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='about'>
          <AboutMe />
        </div>

        <div id='skills'>
          <Skills />
        </div>


        <div id='services'>
          <Services />
        </div>

        <div id=''>
          <Testing />
        </div>

        <div id='testimonials'>
          <Testimonials />
        </div>

        <div id='contact'>
          <Contact />
        </div>

      </main>
    </div>
  )
}

export default App
