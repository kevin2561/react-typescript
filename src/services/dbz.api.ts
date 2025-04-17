import { Personaje } from "../models/Personaje"

const url = "https://dragonball-api.com/api/characters?limit=100"
export const getPersonajes = async (): Promise<Personaje[]> => {
    let data: Personaje[] = []

    try {
        const response = await fetch(url)
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