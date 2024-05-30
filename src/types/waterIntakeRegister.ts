export type WaterIngestedRegisterData = {
    id: string
    amount: number
    createdAt: string
}

export type WaterIngestedRegister = {
    title: string
    data: WaterIngestedRegisterData[]
}