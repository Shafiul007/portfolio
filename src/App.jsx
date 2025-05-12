import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Projects from './components/pages/projects/Projects'
import Experience from './components/pages/experience/Experience'
import About from './components/pages/about/About'

function App() {

  return (
    <div className='flex flex-col space-y-5 justify-center items-center mx-auto max-w-7xl'>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
     
    
    </div>
  )
}

export default App
