export type CityType = {
    title: string
    houses: Array<HouseType>
    cityzensNumber: number
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}