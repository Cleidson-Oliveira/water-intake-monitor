import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
    title: string
}

export function Header (props: HeaderProps) {

    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 18,
        backgroundColor: "#00000080",
        borderRadius: 8,
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "white"
    }
})