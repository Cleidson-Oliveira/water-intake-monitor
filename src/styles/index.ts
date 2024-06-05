import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["blue-100"],
        alignItems: "center",
        gap: 20,
        padding: 10,
        paddingTop: 60,
    },
    text: {
        color: "white",
        fontSize: 16,
    }
});