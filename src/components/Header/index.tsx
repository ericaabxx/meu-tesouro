import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles"

export type Props = {
    title: string,
    subtitle: string
}


export function Header({title, subtitle}: Props){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    )
}