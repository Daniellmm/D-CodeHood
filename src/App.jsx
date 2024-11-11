import './App.css'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <MainLayout>

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

        
        <div id='testimonials'>
          <Testimonials />
        </div>

        <div id='contact'>
          <Contact />
        </div>

        {/* <div>
          <Footer />
        </div> */}

      </main>
   
    </MainLayout>
    
  )
}

export default App
