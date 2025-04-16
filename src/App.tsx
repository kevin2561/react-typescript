import { useEffect, useState } from 'react'
import './App.css'
import { leerApis } from './services/dbz.api'
import { Personaje } from './models/Personaje'


function App() {
  const [personajes, setPersonajes] = useState<Personaje[]>([])

  useEffect(() => {
    leerPersonajes()
  }, [])

  const leerPersonajes = async () => {
    const datos = await leerApis();
    setPersonajes(datos)
    console.log(datos)
  }
  return (
    <>
  {personajes.map((personaje) => (
      <h1 key={personaje.id}>{personaje.name}</h1>
  ))}
    </>
  )
}

export default App
