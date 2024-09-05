
import './App.css'
import AboutMe from './Components/AboutMe'
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
        <div>
          <Home />
        </div>

        <div>
          <AboutMe />
        </div>

        <div>
          <Skills />
        </div>


        <div>
          <Services />
        </div>

        <div>
          <Testing />
        </div>

        <div>
          <Testimonials />
        </div>

      </main>
    </div>
  )
}

export default App
