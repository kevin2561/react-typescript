export interface DetallePersonaje {
    id: number
    name: string
    ki: string
    maxKi: string
    race: string
    gender: string
    description: string
    image: string
    affiliation: string
    deletedAt: any
    originPlanet: OriginPlanet
    transformations: Transformation[]
}

 interface OriginPlanet {
    id: number
    name: string
    isDestroyed: boolean
    description: string
    image: string
    deletedAt: any
}

 interface Transformation {
    id: number
    name: string
    image: string
    ki: string
    deletedAt: any
}
