import { useLocation } from 'react-router-dom'
import { Personaje } from '../models/Personaje'
import { useEffect, useState } from 'react';
import { getDetallePersonaje } from '../services/dbz.api';
import { DetallePersonaje } from '../models/DetallePersonaje';
import './DetallePersonajedbz.css'

type Props = {
    personaje: Personaje
}

export default function DetallePersonajedbz() {
    const [personajeSeleccionado, setPersoanjeSeleccionado] = useState<DetallePersonaje | undefined>(undefined)
    useEffect(() => {
        leerServicioDetalle()
    }, [])
    const location = useLocation();
    const { personaje } = location.state as { personaje: Personaje }

    const leerServicioDetalle = async () => {
        const personajeUnico = await getDetallePersonaje(personaje.id)
        setPersoanjeSeleccionado(personajeUnico)
    }

    const carruselTransformaciones = () => {
        return (
            <div className='col-md-6'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    {/* <div className="carousel-indicators">
                        {personajeSeleccionado?.transformations.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div> */}
                    <div className="carousel-inner">
                        {personajeSeleccionado?.transformations.map((transformacion, index) => (
                            <div key={transformacion.id} className={"carousel-item " + (index === 0 ? "active" : "")}>
                                {/* <div key={transformacion.id} className={"carousel-item " + (index === 0 ? "active" : "")}> */}
                                <div className="contenedor-carusel">
                                    <img src={transformacion.image} className="img-thumbnail" alt="..." />

                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='h2 text-black'>{transformacion.name}</h2>
                                    <p>Ki: {transformacion.ki}</p>
                                </div>
                            </div>
                        ))}




                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="" aria-hidden="true">&laquo;</span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="" aria-hidden="true">&raquo;</span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }



    return (
        <section className='container'>
            <div className="row">
                <div className={personajeSeleccionado?.transformations.length === 0 ? "col-md-12" : "col-md-6"}>
                    <div id='columna-1' className='text-center'>
                        <h2 className="h2">{personaje.name}</h2>
                        <img src={personaje.image} className='card-img-top' alt="" />
                    </div>
                </div>
                {personajeSeleccionado?.transformations.length === 0 ? "" : carruselTransformaciones()}
            </div>


        </section>
    )
}




{/* {personajeSeleccionado ? (
                    personajeSeleccionado.transformations.map((transformation) => (
                        <span key={transformation.id}>{transformation.name}<br></br></span>
                    ))
                ) : (
                    <span>Cargando...</span>
                )} */}

{/* {personajeSeleccionado?.transformations.map((transformacion) => (
                    <span key={transformacion.id}>{transformacion.name}<br></br></span>

                )


                )}

                <h2>{personajeSeleccionado?.originPlanet.deletedAt === null ? "no" : "SI"}</h2> */}

