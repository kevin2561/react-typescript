import { useEffect, useState } from "react"
import { Personaje } from "../models/Personaje"
import { getPersonajes } from "../services/dbz.api";
import './Personajesdbz.css'

export default function Personajesdbz() {
    const [perosnajes, setPersonajes] = useState<Personaje[]>([])
    const [paginaActual, setPaginaActual] = useState(0)
    const [totalPaginas, setTotalPaginas] = useState(10)
    //const []

    useEffect(() => {
        leerPersonajes();
    }, [])

    const leerPersonajes = async () => {
        const datos = await getPersonajes();
        setPersonajes(datos)
        console.log(datos)
    }
    const htmlPersonajes = () => {
        return (
            <>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {perosnajes.map(personaje =>
                        <div className="col" key={personaje.id}>
                            <div className="card">
                                <div className="img-personaje">
                                    <img id="img-personajes" src={personaje.image} className="card-img-top" alt="..." />

                                </div>
                                <div className="card-body mt-3">
                                    <h5 className="card-title">Nombre: {personaje.name}</h5>
                                    <p className="card-text">Raza: {personaje.race}</p>
                                    <p className="card-text">ki: {parseFloat(personaje.ki).toFixed(6)}</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
    return (
        <>
            <section className="container">
                {htmlPersonajes()}
            </section>
        </>
    )
}
