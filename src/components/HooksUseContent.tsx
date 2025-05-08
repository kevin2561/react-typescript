import { createContext, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import Boton from "./Boton"


export default function Hooks() {
  const MensajeContext = createContext("Hola desde contento");

  const temasClaro = {
    background: 'blue',
    color: 'yellow'
  }

  const nieto = () => {
    const mensaje = useContext(MensajeContext);
    return <p>{mensaje}</p>;
  }

  return (
    <>
      <section>
        <h2 className="h2">useContext</h2>
        <ThemeContext.Provider value={temasClaro}>
          <Boton />
        </ThemeContext.Provider>
        <br />
        <MensajeContext.Provider value="">
          {nieto()}
        </MensajeContext.Provider>
      </section>

      <section>
        <h2 className="h2">useContext</h2>
      </section>

      <section>
        <h2 className="h2">useContext</h2>
      </section>

      <section>
        <h2 className="h2">useContext</h2>
      </section>
    </>

  )
}


