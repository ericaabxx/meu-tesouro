import { Text, View } from 'react-native'
import { useLocalSearchParams, router} from 'expo-router'
import { useState } from 'react'

import { TransactionTypes } from '../utils/TransactionTypes'
import { fontFamily } from '../theme'


import { Button } from '../components/Button'
import { TransactionType } from '../components/TransactionType'
import { Inputs } from '../components/Inputs'
import { Description } from '../components/Description'
import { CategorySelect } from '../components/CategorySelect'





export default function TransactionForm() {
    const [type, setType] = useState(TransactionTypes.Input);
    const params = useLocalSearchParams<{id: string}>();

    const [description, setDescription] = useState("")
    const [category, setCategory] = useState<string | null>(null)



    return (
    <View style={{ flex: 1, padding: 16, gap: 5}}>
      <Text style={{fontSize: 22, fontFamily: fontFamily.bold}}>Nova Transação</Text>
      <Text style={{fontSize: 14, fontFamily: fontFamily.regular, marginTop: 5}}>tipo de transação</Text>
      <TransactionType selected={type} onChange={setType} />
        <Inputs />

      <Description
        label="Descrição"
        value={description}
        placeholder="Digite a descrição"
        onChangeText={setDescription}
      />
       <CategorySelect
      label="Categoria Principal"
      value={category}
      onChange={setCategory}
    />

      <Button title='voltar' onPress={()=> router.back()} />
    </View>
  );
}