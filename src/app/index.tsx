import { Button } from 'components/button';
import { WaterAmountCounter } from 'components/waterAmontCounter';
import { useWaterRegister } from 'hooks/useWaterRegister';
import { Text, View } from 'react-native';
import { generalStyles } from 'styles';

export default function App() {
    const {newWaterIngested, waterIngestedToday} = useWaterRegister();

    if(waterIngestedToday === undefined) {
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
            
            <WaterAmountCounter waterAmount={waterIngestedToday} />

            <Button onPress={() => newWaterIngested(100)}>
                bebi água
            </Button>
        </View>
    );
}
