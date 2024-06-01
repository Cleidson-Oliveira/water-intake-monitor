import { Button } from 'components/button';
import { WaterAmountCounter } from 'components/waterAmontCounter';
import { useAppSettings } from 'hooks/useAppSettings';
import { useWaterRegister } from 'hooks/useWaterRegister';
import { Text, View } from 'react-native';
import { generalStyles } from 'styles';

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
            
            <WaterAmountCounter waterAmount={waterIngestedToday ?? 0} />

            <View style={{flexDirection: "row", width: "60%"}}>
                <Button onPress={() => newWaterIngested(settings.cupSize!)}>
                    Bebi água
                </Button>
            </View>
        </View>
    );
}
