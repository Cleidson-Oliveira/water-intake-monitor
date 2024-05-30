import { WaterIngestedRegister } from "types/waterIntakeRegister";

export function waterIntakeTodayReducer (dataStored: WaterIngestedRegister[]) {

    const title = new Intl.DateTimeFormat('pt-BR').format(new Date());
    
    const dataToday = dataStored.find(register => register.title === title)
    
    const amount = dataToday.data.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0)

    return amount;
}