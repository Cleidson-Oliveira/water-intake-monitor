import { StyleSheet, Text, View } from "react-native";
import { colors } from "styles/colors";

interface WaterAmountCounterProps {
    waterAmount: number
}

export function WaterAmountCounter (props: WaterAmountCounterProps) {

    return (
        <View style={style.container}>
            <Text style={style.text}>
                {props.waterAmount} ml
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: colors["blue-900"],
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 70
    }
})