import { useEffect, useState } from "react"
import { Personaje } from "../models/Personaje"
import { getPersonajes } from "../services/dbz.api";
import './Personajesdbz.css'
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import DetallePersonajedbz from "./DetallePersonajedbz";

export default function Personajesdbz() {
    const [personajes, setPersonajes] = useState<Personaje[]>([])

    const [personajesFiltrados, setPersonajesFiltrados] = useState<Personaje[]>([])
    const [textoFiltro, setTextoFiltro] = useState("")
    const [cardsPagina, setCardsPagina] = useState(10)
    const [paginaActual, setPaginaActual] = useState(0)
    const [totalPaginas, setTotalPaginas] = useState(0)

    useEffect(() => {
        leerPersonajes();
    }, [])

    const leerPersonajes = async () => {
        const datos = await getPersonajes();
        setPersonajes(datos)
        setPersonajesFiltrados(datos)
        // console.log(datos)
        setTotalPaginas(Math.ceil(datos.length / cardsPagina))
    }
    const filtrarPersonajes = (texto: string) => {

        setTextoFiltro(texto)
        if (texto.trim() === "") {
            setPersonajesFiltrados(personajes)
        }
        else {
            const filtrados = personajes.filter(personaje =>
                personaje.name.toLowerCase().includes(texto.trim().toLowerCase())
            )
            setPersonajesFiltrados(filtrados)
            setPaginaActual(0)
        }
    }
    const retrocedorPagina = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1)
        }
        console.log(paginaActual)

        console.log("atras")
    }
    const avanzarPagina = () => {
        if (paginaActual < totalPaginas - 1) {
            setPaginaActual(paginaActual + 1)

        }
        console.log(paginaActual)

        console.log("adelante")

    }


    const htmlPersonajes = () => {
        return (
            <>
                <nav aria-label="Page navigation example" className="mb-5">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link cursor-pointer" href="#" aria-label="Previous" onClick={(e) => { e.preventDefault(); retrocedorPagina() }}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pagination()}
                        <li className="page-item">
                            <a className="page-link cursor-pointer" href="#" aria-label="Next" onClick={(e) => { e.preventDefault(); avanzarPagina() }}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {personajesFiltrados.slice(paginaActual * cardsPagina, (paginaActual + 1) * cardsPagina).map((personaje, index) =>
                        <Link key={personaje.id} to={"/personajes/detalle-personaje/" + personaje.name} state={{ personaje }}   >
                            <div className="col">
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
                        </Link>

                    )}

                </div >

            </>
        )
    }
    const pagination = () => {
        return (
            <>
                {[...Array(totalPaginas)].map((_, index) =>
                    <li key={index} className={"page-item " + (index === paginaActual ? "active" : "")}
                    >

                        <a className="page-link" onClick={() => setPaginaActual(index)}>{index + 1}</a></li>


                )}
            </>

        )
    }

    const mensaje = () => {
        return (
            <>
                <div className="alert alert-warning" role="alert">
                    No se encontraron personajes

                </div>
            </>
        )
    }
    return (
        <>
            <PageHeader tituloPage={"Personajes"} />
            <section className="container mt-5">
                <div className="mb-5">
                    <input type="text" placeholder="Buscar personaje" className="form-control" value={textoFiltro} onChange={(e) => filtrarPersonajes(e.target.value)} />
                </div>
                {htmlPersonajes()}
                {personajesFiltrados.length === 0
                    ? mensaje()
                    : personajesFiltrados.length + " registros"}
            </section>
        </>
    )
}
