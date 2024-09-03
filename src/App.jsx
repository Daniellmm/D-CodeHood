
import './App.css'
import AboutMe from './Components/AboutMe'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

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


      </main>
    </div>
  )
}

export default App
