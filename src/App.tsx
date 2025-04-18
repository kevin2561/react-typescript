import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Personajesdbz from './pages/Personajesdbz'
import Pagina404 from './pages/Pagina404'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/personajes' element={<Personajesdbz />} />
          <Route path='*' element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
