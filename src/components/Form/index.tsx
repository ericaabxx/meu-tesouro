import { TransactionType } from "../TransactionType"
import { styles } from "./styes" 
import { View, Text } from "react-native"
import { useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { TransactionTypes } from "../../utils/TransactionTypes" 

export function Form(){
    const [type, setType] = useState(TransactionTypes.Input)
    const params = useLocalSearchParams<{id: string}>()


    return(
        <View style={styles.form}>
    <View style={styles.container}>
        <View style={styles.text}>
        <Text style={styles.title}>Nova transação</Text>
        <Text style={styles.subtitle}>tipo de transação</Text>
        </View>
        <TransactionType selected={type} onChange={setType}/>
    </View>
    </View>
    )
}