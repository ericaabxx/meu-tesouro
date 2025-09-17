import { Text, View } from 'react-native'
import { useLocalSearchParams, router} from 'expo-router'
import { useState } from 'react'

import { TransactionTypes } from '../utils/TransactionTypes'
import { fontFamily } from '../theme'


import { Button } from '../components/Button'
import { TransactionType } from '../components/TransactionType'
import { ValueInput } from '../components/ValueInput'

// A função de formatação da data deve ser declarada fora do componente ou na raiz dele.
const getFormattedCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
};



export default function TransactionForm() {
    const [type, setType] = useState(TransactionTypes.Input);
    const [value, setValue] = useState('0,00');
    const [date, setDate] = useState(getFormattedCurrentDate());

    const params = useLocalSearchParams<{id: string}>();


    const handleChangeValue = (text) => {
    setValue(text);
}

    return (
    <View style={{ flex: 1, padding: 16, gap: 5}}>
      <Text style={{fontSize: 22, fontFamily: fontFamily.bold}}>Nova Transação</Text>
      <Text style={{fontSize: 14, fontFamily: fontFamily.regular, marginTop: 5}}>tipo de transação</Text>
      <TransactionType selected={type} onChange={setType} />
      
      <View style={{ flexDirection: 'row', gap: 10, width: "100%" }}>
        <ValueInput label='Valor' value={value} onChangeText={handleChangeValue}/>
        <ValueInput label='Data' value={date} onChangeText={handleChangeValue} keyboardType='default' />
      </View>

      <Button title='voltar' onPress={()=> router.back()} />
    </View>
  );
}