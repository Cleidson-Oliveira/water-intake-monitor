import { Chart } from "components/chart";
import { DailyGoalsMeter } from "components/dailyGoalsMeter";
import { Header } from "components/header";
import { WaterCuriosityCard } from "components/waterCuriosityCard";
import { useFocusEffect } from "expo-router";
import { useWaterRegister } from "hooks/useWaterRegister";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { generalStyles } from "styles";
import { colors } from "styles/colors";

type ShortDaysOfWeekName = "Dom"| "Seg"| "Ter"| "Qua"| "Qui"| "Sex"| "Sab";

export default function Hystory () {

    const DAYS_OF_WEEK: ShortDaysOfWeekName[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    const [ daysOfWeekLabel, setDaysOfWeekLabel ] = useState<ShortDaysOfWeekName[] | undefined>(undefined);

    const prefillDaysOfWeekLabel = () => {
        const today = new Date();

        const arr1: ShortDaysOfWeekName[] = DAYS_OF_WEEK.slice(today.getDay() + 1, 7);
        const arr2: ShortDaysOfWeekName[] = DAYS_OF_WEEK.slice(0, today.getDay() + 1);

        const daysOfWeekLabel = arr1.concat(arr2);

        setDaysOfWeekLabel(daysOfWeekLabel);
    }

    const [ weekHydratationRecords, setWeekHydratationRecords ] = useState<number[] | undefined>(undefined);

    const { getLastWeekHydratationRecords, waterIngestedToday } = useWaterRegister();

    const handleGetLastWeekHydratationRecords = async () => {
        const weekHydratationRecords = await getLastWeekHydratationRecords();

        setWeekHydratationRecords(weekHydratationRecords);
    }

    useFocusEffect(useCallback(() => {
        handleGetLastWeekHydratationRecords();
        prefillDaysOfWeekLabel();

        return (() => {
            setWeekHydratationRecords(undefined);
        })
    }, []))

    const loadingData = weekHydratationRecords === undefined || daysOfWeekLabel === undefined;

    if(loadingData) {
        return (
            <View style={[generalStyles.container, {justifyContent: "center"}]}>
                <ActivityIndicator size="large" color={colors["blue-900"]} />
            </View>
        )
    }

    return (
        <View style={generalStyles.container}>
            <Header title="Histórico" />

            <WaterCuriosityCard />

            <DailyGoalsMeter waterIngestedToday={waterIngestedToday ?? 0}/>
    
            { !loadingData && <Chart labels={daysOfWeekLabel} data={weekHydratationRecords}/>}
        </View>
    )
}