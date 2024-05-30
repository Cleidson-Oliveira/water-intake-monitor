import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["blue-100"],
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    text: {
        color: "white",
        fontSize: 16,
    }
});