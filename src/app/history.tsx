import { Chart } from "components/chart";
import { DailyGoalsMeter } from "components/dailyGoalsMeter";
import { Header } from "components/header";
import { WaterCuriosityCard } from "components/waterCuriosityCard";
import { useWaterRegister } from "hooks/useWaterRegister";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { generalStyles } from "styles";
import { colors } from "styles/colors";

export default function Hystory () {

    const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    const [ weekHydratationRecords, setWeekHydratationRecords ] = useState<number[] | undefined>(undefined);

    const { getLastWeekHydratationRecords, waterIngestedToday } = useWaterRegister();

    const handleGetLastWeekHydratationRecords = async () => {
        const weekHydratationRecords = await getLastWeekHydratationRecords();

        setWeekHydratationRecords(weekHydratationRecords);
    }

    useEffect(() => {
        handleGetLastWeekHydratationRecords();
    }, [])

    const loadingData = weekHydratationRecords === undefined;

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
    
            { !loadingData && <Chart labels={DAYS_OF_WEEK} data={weekHydratationRecords}/>}
        </View>
    )
}