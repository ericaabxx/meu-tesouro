import { Text, View } from 'react-native'
import { Button } from '../components/Button'
import { router } from 'expo-router'
import { TransactionType } from '../components/TransactionType'
import { useLocalSearchParams} from 'expo-router'
import { useState } from 'react'
import { TransactionTypes } from '../utils/TransactionTypes'

export default function TransactionForm() {
    const [type, setType] = useState(TransactionTypes.Input)
    const params = useLocalSearchParams<{id: string}>()
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <TransactionType selected={type} onChange={setType}/>
        <Button title='voltar'
        onPress={()=> router.back()}/>
    </View>
  )
}