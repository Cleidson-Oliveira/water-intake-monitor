import Slider from "@react-native-community/slider";
import { Button } from "components/button";
import { Header } from "components/header";
import { InputRange } from "components/slider";
import { useAppSettings } from "hooks/useAppSettings";
import { Settings } from "models/Settings";
import { ActivityIndicator, Text, View } from "react-native";
import { generalStyles } from "styles";
import { colors } from "styles/colors";

interface SettingsProps {}

export default function SettingsScreen (props: SettingsProps) {

    const {settings, setSettings} = useAppSettings();

    const updateCupSizeSetting = (cupSize: number) => {
        const updateSetting = new Settings({...settings, cupSize});
        setSettings(updateSetting);
    }

    const updateDailyGoalSetting = (dailyGoal: number) => {
        const updateSetting = new Settings({...settings, dailyGoal});
        setSettings(updateSetting);
    }

    const loading = settings === undefined;

    if(loading) {
        return (
            <View style={[generalStyles.container, {justifyContent: "center"}]}>
                <ActivityIndicator size="large" color={colors["blue-900"]} />
            </View>
        )
    }

    return (
        <View style={generalStyles.container}>
            <Header title="Configurações" />

            <View style={{width: "100%", gap: 8}}>
                <InputRange
                    step={100}
                    label="Quantidade (ml)"
                    minimumValue={100}
                    maximumValue={500}
                    defaultValue={settings.cupSize}
                    onChange={updateCupSizeSetting}
                />
                <InputRange
                    step={500}
                    label="Objetivo diário (ml)"
                    minimumValue={1500}
                    maximumValue={4000}
                    defaultValue={settings.dailyGoal}
                    onChange={updateDailyGoalSetting}
                />
            </View>
        </View>
    )
}