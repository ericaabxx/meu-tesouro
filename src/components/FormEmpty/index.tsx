import { styles } from "./styles"
import { View, Text } from "react-native"

export function FormEmpty(){
    return(
        <View style={styles.form}>
    <View style={styles.container}>
        <Text style={styles.title}>Nenhuma transação</Text>
    </View>
    </View>
    )
}