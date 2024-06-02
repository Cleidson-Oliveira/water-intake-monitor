import { WIM_SETTINGS_KEY } from "constants/storeKeys";
import { useRepository } from "./useRepository";
import { TSettings } from "types/settings";
import { AppError } from "models/AppError";
import { Settings } from "models/Settings";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";



export function useAppSettings () {
    const { getRegister, setRegister } = useRepository(WIM_SETTINGS_KEY);

    const [settings, setAppSettings] = useState<undefined | TSettings>(undefined)

    const getSettings = async () => {
        const settings = await getRegister<TSettings>();

        if (settings instanceof AppError) {
            const settings = new Settings();
            setRegister(settings);

            return setAppSettings(settings);
        }

        setAppSettings(settings)
    }

    const setSettings = async (newSettings: TSettings) => {
        const settings = await getRegister<TSettings>();

        if (settings instanceof AppError) {
            const settings = new Settings();
            setRegister(settings);

            return setAppSettings(settings);
        }

        const updateSettings = {
            ...settings,
            ...newSettings
        }

        setRegister(updateSettings);    
        setAppSettings(updateSettings)    
    }

    useFocusEffect(useCallback(() => {
        getSettings();
    }, []));

    return {
        settings,
        setSettings
    }
}