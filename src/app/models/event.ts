export interface Event {
    _id: string
    date: Date
    client: object
    type: number
    status: string
    price: number
    aditional: number
    total: number
    comments: string
    payments: object[]
}