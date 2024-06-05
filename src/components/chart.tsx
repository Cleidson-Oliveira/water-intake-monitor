import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { colors } from "styles/colors";

interface ChartProps {
    labels: string[]
    data: number[]
}

export function Chart ({ labels, data }: ChartProps) {

    return (
        <View style={{paddingTop: 20, backgroundColor: colors["blue-900"], borderRadius: 8}}>
            <LineChart
                data={{ labels, datasets: [{ data }] }}
                width={Dimensions.get("window").width - 20}
                height={280}    
                yAxisSuffix="ml"
                chartConfig={chartConfig}
                bezier
                style={styles.chartContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    chartContainer: {
        marginTop: 8,
        borderRadius: 8,
    }
})

const chartConfig:AbstractChartConfig = {
    backgroundGradientFrom: colors["blue-900"],
    backgroundGradientTo: colors["blue-900"],
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#26f1ff"
    }
}