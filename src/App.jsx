import './App.css'
import Acerca from './components/Acerca/Acerca.jsx'
import Educacion from './components/Educacion/Educacion.jsx'
import Experiencia from './components/Experiencia/Experiencia.jsx'
import Footer from './components/Footer/Footer.jsx'
import MyNavbar from './components/Navbar/Navbar.jsx'
import Proyectos from './components/Proyectos/Proyectos.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() {

  return (
    <>
      <MyNavbar />
      <Acerca />
      <Educacion />
      <Skills />
      <Experiencia />
      <Proyectos />
      <Footer />
    </>
  )
}

export default App
