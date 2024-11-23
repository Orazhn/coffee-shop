export default interface Item {
    _id: string
    id: number
    name: string,
    image_url: string
    description: string
    price: number
    region: string
    weight: number
    roast_level: number
    flavor_profile: string[]
    grind_option: string[]
    amount: number 
}

export interface Order {
    bagItems: Item[],
    total: number,
    date: string
}