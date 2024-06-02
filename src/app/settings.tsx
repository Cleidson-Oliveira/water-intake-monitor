import { Button } from "components/button";
import { useAppSettings } from "hooks/useAppSettings";
import { Text, View } from "react-native";
import { generalStyles } from "styles";

interface SettingsProps {}

export default function Settings (props: SettingsProps) {

    const {settings, setSettings} = useAppSettings();

    const updateCupSizeSetting = (newCupSize: number) => {
        setSettings({cupSize: newCupSize});
    }

    return (
        <View style={generalStyles.container}>
            <View style={{width: "80%"}}>
                <Text>
                    Quantidade (ml)
                </Text>
                <View style={{flexDirection: "row", width: "80%", gap: 4}}>
                    <Button
                        disabled={settings?.cupSize === 100}
                        onPress={()=> updateCupSizeSetting(100)}
                    >
                        100
                    </Button>
                    <Button
                        disabled={settings?.cupSize === 200}
                        onPress={()=> updateCupSizeSetting(200)}
                    >
                        200
                    </Button>
                    <Button
                        disabled={settings?.cupSize === 300}
                        onPress={()=> updateCupSizeSetting(300)}
                    >
                        300
                    </Button>
                    <Button
                        disabled={settings?.cupSize === 400}
                        onPress={()=> updateCupSizeSetting(400)}
                    >
                        400
                    </Button>
                </View>
            </View>
        </View>
    )
}