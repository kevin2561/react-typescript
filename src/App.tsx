import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Personajesdbz from './pages/Personajesdbz'
import Pagina404 from './pages/Pagina404'
import Footer from './common/Footer'
import Header from './common/Header'
import Inicio from './pages/Inicio'
import DetallePersonajedbz from './pages/DetallePersonajedbz'
import Hooks from './components/HooksUseContent'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <main>

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/personajes' element={<Personajesdbz />} />
          <Route path='/personajes/detalle-personaje/:name' element={<DetallePersonajedbz />} />
          <Route path='/hooks' element={<Hooks />} />

          <Route path='*' element={<Pagina404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
