import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient";

export type Props = {
    title: string,
    subtitle: string
}


export function Header({title, subtitle}: Props){
    return(
   <LinearGradient
            colors={['#98CDE4', '#104A8C']} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </LinearGradient>
    )
}