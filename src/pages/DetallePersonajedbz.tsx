import { useLocation } from 'react-router-dom'
import { Personaje } from '../models/Personaje'
import { useEffect, useState } from 'react';
import { getDetallePersonaje } from '../services/dbz.api';
import { DetallePersonaje } from '../models/DetallePersonaje';

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



    return (
        <section>
            <div>
                {/* {personajeSeleccionado ? (
                    personajeSeleccionado.transformations.map((transformation) => (
                        <span key={transformation.id}>{transformation.name}<br></br></span>
                    ))
                ) : (
                    <span>Cargando...</span>
                )} */}

                {personajeSeleccionado?.transformations.map((transformacion) => (
                    <span key={transformacion.id}>{transformacion.name}<br></br></span>

                )


                )}

                <h2>{personajeSeleccionado?.originPlanet.deletedAt === null ? "no" : "SI"}</h2>
            </div>
        </section>
    )
}
