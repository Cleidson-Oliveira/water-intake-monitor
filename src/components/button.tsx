import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { colors } from "styles/colors";

interface ButtonProps extends TouchableOpacityProps {
    textStyle?: StyleProp<TextStyle>
}

export function Button ({children, style, textStyle, ...props}: ButtonProps) {

    return (
        <TouchableOpacity
            {...props}
            activeOpacity={0.8}
            style={[ buttonStyle.button, style ]}
        >
            <Text style={[ buttonStyle.text, textStyle ]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const buttonStyle = StyleSheet.create({
    button: {
        width: "60%",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: colors["blue-900"],
    },
    text: {
        color: "white",
        fontSize: 20,
        textTransform: "capitalize",
        textAlign: "center"
    }
})