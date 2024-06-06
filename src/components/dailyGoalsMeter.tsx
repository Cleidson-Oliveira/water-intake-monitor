import { useAppSettings } from "hooks/useAppSettings";
import { StyleSheet, Text, View } from "react-native";

interface DailyGoalsMeterProps {
    waterIngestedToday: number
}

export function DailyGoalsMeter (props: DailyGoalsMeterProps) {

    const { settings } = useAppSettings();
    
    const percentage = props.waterIngestedToday! * 100 / settings?.dailyGoal!;
    const dailyGoalPercentage = percentage > 100 ? 100 : percentage;
    
    const selectColorStatus = () => {
        let colorStatus = "#ff0000"

        if(dailyGoalPercentage > 20 && dailyGoalPercentage < 40) {
            colorStatus = "#fd0262"
        }
        
        if(dailyGoalPercentage > 40 && dailyGoalPercentage < 60) {
            colorStatus = "#fd02b2"
        }
        
        if(dailyGoalPercentage > 60 && dailyGoalPercentage < 80) {
            colorStatus = "#8c02fd"
        }
 
        if(dailyGoalPercentage > 80) {
            colorStatus = "#0000ff"
        }

        return colorStatus;
    }

    return (
        <View style={style.container}>
            <View style={[style.progress, {
                width: `${dailyGoalPercentage}%`,
                backgroundColor: selectColorStatus()
            }]}></View>
            <View style={style.content}>
                <Text style={style.text}>Meta diária: {settings?.dailyGoal}ml</Text>
                <Text style={style.text}>{dailyGoalPercentage}%</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 54,
        borderRadius: 8,
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    progress: {
        position: "absolute",
        left: 0,
        top: 0,        
        height: 54,
    },
    content: {
        width: "98%",
        borderRadius: 8,
        backgroundColor: "blue",
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    text: {
        color: "white",
        fontSize: 20
    }
})