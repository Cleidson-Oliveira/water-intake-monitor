import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import { generalStyles } from "styles";
import { colors } from "styles/colors";

type Props = {
    label: string
    minimumValue: number
    maximumValue: number
    step: number
    defaultValue: number
    onChange(value: number): void
}

export function InputRange (props: Props) {

    const steps: number[] = [];

    for (let i = props.minimumValue; i <= props.maximumValue; i += props.step) {
        steps.push(i);
    }

    return (
        <View style={{width: "100%", backgroundColor: "#00000050", padding: 12, borderRadius: 8}}>
            <Text style={[generalStyles.text, {paddingHorizontal: 16}]}>{props.label}</Text>
            <Slider
                style={{width: "100%", height: 40}}
                minimumValue={props.minimumValue}
                maximumValue={props.maximumValue}
                step={props.step}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor={colors["blue-900"]}
                onValueChange={props.onChange}
                value={props.defaultValue}
            />
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12}}>
                {steps.map(q => (
                    <Text style={generalStyles.text} key={q}>{q}</Text>
                ))}
            </View>
        </View>
    )
}