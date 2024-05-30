import * as SecureStore from "expo-secure-store";
import { AppError } from "models/AppError";
import { AppSuccess } from "models/AppSuccess";

type GetRegisterReturn<T> = Promise<T | AppError | undefined>;

export function useRepository(storeKey: string) {

    const getRegister = async <T> (): GetRegisterReturn<T> => {
        try {
            const store: string | null = await SecureStore.getItemAsync(storeKey);

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

            await SecureStore.setItemAsync(storeKey, dataToString);
            
            return new AppSuccess("Item salvo com sucesso!");
        } catch (error) {
            return new AppError(error.message);
        }
    }

    const deleteRegister = async () => {
        try {
            await SecureStore.deleteItemAsync(storeKey);

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