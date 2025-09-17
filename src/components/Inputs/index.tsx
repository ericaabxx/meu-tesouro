import { ValueInput } from '../ValueInput' 
import { DateInput } from '../DateInput' 
import { getFormattedCurrentDate } from '../../utils/Date' 

import { Text, View } from 'react-native'
import { useLocalSearchParams, router} from 'expo-router'
import { useState } from 'react'
import {styles} from "./styles"
 

export function Inputs() {
  const [inputValue, setValor] = useState("0,00");
  const [date, setDate] = useState(() => getFormattedCurrentDate());

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <ValueInput label='Valor' value={inputValue} onChangeText={setValor} />
      </View>
      <View style={styles.inputWrapper}>
        <DateInput label="Data" value={date} onChangeText={setDate} />
      </View>
    </View>
  )
}