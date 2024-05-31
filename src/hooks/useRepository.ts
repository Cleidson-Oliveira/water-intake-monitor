import { AppError } from "models/AppError";
import { AppSuccess } from "models/AppSuccess";
import AsyncStorage from '@react-native-async-storage/async-storage';

type GetRegisterReturn<T> = Promise<T | AppError>;

export function useRepository(storeKey: string) {

    const getRegister = async <T> (): GetRegisterReturn<T> => {
        try {
            const store: string | null = await AsyncStorage.getItem(storeKey);

            if(store === null) return new AppError(
                "Não foi possível encontrar o registro!",
                "unstored"
            );

            const item: T = JSON.parse(store);

            return item;
        } catch (error) {
            return new AppError(error.message);
        }
    }

    const setRegister = async <T> (data: T) => {
        try {
            const dataToString = JSON.stringify(data);

            await AsyncStorage.setItem(storeKey, dataToString);
            
            return new AppSuccess("Item salvo com sucesso!");
        } catch (error) {
            return new AppError(error.message);
        }
    }

    const deleteRegister = async () => {
        try {
            await AsyncStorage.removeItem(storeKey);

            return new AppSuccess("Item removido com sucesso!");
        } catch (error) {
            return new AppError(error.message);
        }
    }

    return {
        getRegister,
        setRegister,
        deleteRegister
    }
    
}