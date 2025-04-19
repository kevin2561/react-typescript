import { DetallePersonaje } from "../models/DetallePersonaje"
import { Personaje } from "../models/Personaje"

export const getPersonajes = async (): Promise<Personaje[]> => {
    let data: Personaje[] = []

    try {
        const response = await fetch("https://dragonball-api.com/api/characters?limit=100")
        if (response.ok) {
            const json = await response.json()
            data = json.items

        }

        //    console.log(data.items)
    } catch (error) {
        console.log(error)
    }
    return data

}

export const getDetallePersonaje = async (id: number): Promise<DetallePersonaje> => {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data = await response.json()
    console.log(data)
    return data 

}