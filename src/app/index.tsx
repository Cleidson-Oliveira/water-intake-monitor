import { Button } from "components/button";
import { WaterAmountCounter } from "components/waterAmontCounter";
import { WaterCuriosityCard } from "components/waterCuriosityCard";
import { useAppSettings } from "hooks/useAppSettings";
import { useWaterRegister } from "hooks/useWaterRegister";
import { Text, View } from "react-native";
import { generalStyles } from "styles";

export default function App() {
    const {newWaterIngested, waterIngestedToday} = useWaterRegister();
    const {settings} = useAppSettings();

    if(waterIngestedToday === undefined || settings === undefined) {
        return (
            <View style={generalStyles.container}>
                <Text style={{color: "white", fontSize: 30}}>
                    Carregando...
                </Text>
            </View>
        )
    }

    return (
        <View style={generalStyles.container}>

            <WaterCuriosityCard />
            
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 30}}>
                
                <WaterAmountCounter waterAmount={waterIngestedToday ?? 0} />

                <View style={{flexDirection: "row", width: "60%"}}>
                    <Button onPress={() => newWaterIngested(settings.cupSize!)}>
                        Bebi água
                    </Button>
                </View>

            </View>
        </View>
    );
}
