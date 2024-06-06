import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "styles/colors";

export default function () {
    return (
        <>
            <Tabs 
                screenOptions={{
                    tabBarActiveTintColor: "#ffffffaa",
                    tabBarInactiveTintColor: "#00000050",
                    headerShown: false,
                    tabBarItemStyle: {padding: 8},
                    tabBarLabelStyle: {fontWeight: "bold"},
                    tabBarStyle: {
                        backgroundColor: colors["blue-900"],
                        height: 60,                        
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Início",
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="history"
                    options={{
                        title: "Histórico",
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="clock-o" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Configurações",
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }}
                />
            </Tabs>
            <StatusBar style="auto" />
        </>
    )
}