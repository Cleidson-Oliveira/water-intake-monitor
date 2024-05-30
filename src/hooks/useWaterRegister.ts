import { useEffect, useId, useState } from "react";
import { useRepository } from "./useRepository";
import { WIM_WATER_INGESTED_KEY } from "constants/storeKeys";
import { WaterIngestedRegister, WaterIngestedRegisterData } from "types/waterIntakeRegister";
import { AppError } from "models/AppError";
import { waterIntakeTodayReducer } from "reducers/waterIntakeTodayReducer";
import { WaterIntake } from "models/WaterIntake";

export function useWaterRegister () {

    const [ waterIngestedToday, setWaterIngestedToday ] = useState<undefined | null | number>(undefined);

    const { getRegister, setRegister, deleteRegister } = useRepository(WIM_WATER_INGESTED_KEY);

    const getWaterIngestedToday = async () => {

        const store = await getRegister<WaterIngestedRegister[]>();

        if (store instanceof AppError) {

            if (store.cause === "unstored") {
                return setWaterIngestedToday(0);
            }

            return setWaterIngestedToday(null);
        }
        
        const waterIngestedToday = waterIntakeTodayReducer(store);

        setWaterIngestedToday(waterIngestedToday);
    }

    const newWaterIngested = async (amount: number) => {

        const title = new Intl.DateTimeFormat('pt-BR').format(new Date());

        const newRegister = new WaterIntake(amount);

        const store = await getRegister<WaterIngestedRegister[]>();

        if (store instanceof AppError) {

            if (store.cause === "unstored") {
                return setRegister<WaterIngestedRegister[]>([{
                    title,
                    data: [newRegister]
                }])
            }

            return store
        }

        const storeUpdated = store.map(register => {
            if(register.title === title) {
                register.data.push(newRegister);
            }

            return register;
        })

        setRegister(storeUpdated);

        setWaterIngestedToday(prev => prev + amount);
    }

    useEffect(() => {
        getWaterIngestedToday();
    }, [])

    return {
        waterIngestedToday,
        newWaterIngested
    }
}