import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles"

export type Props = {
    title: string,
    subtitle: string,
    value: string
}


export function Carrossel({title, subtitle, value, ...rest}: Props){
    return(
        <View style={styles.carrossel}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    )
}