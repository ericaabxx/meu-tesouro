import { TouchableOpacity, TouchableOpacityProps, Text, View, StyleSheet } from "react-native";
import { styles } from "./styles"

export type Props = TouchableOpacityProps & {
  title: string
  
}

export function Button({title, ...rest}: Props){
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}