import { Text, View } from 'react-native'
import { Button } from '../components/Button'
import { router } from 'expo-router'
import { TransactionType } from '../components/TransactionType'
import { useLocalSearchParams} from 'expo-router'
import { useState } from 'react'
import { TransactionTypes } from '../utils/TransactionTypes'
import { Header } from '../components/Header'
import { Carrossel } from '../components/Carrossel'
import { Form } from '../components/Form'
import { ScrollView } from 'react-native'

export default function TransactionForm() {
    const [type, setType] = useState(TransactionTypes.Input)
    const params = useLocalSearchParams<{id: string}>()
  return (
    <View style={{ flex: 1 }}>
          <Header 
            title="Controle financeiro" 
            subtitle='Gerencie suas finanças de forma inteligente'
          />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}

        >         

        <View 
        style={{flexDirection: "row", justifyContent: "center", gap: 7, marginTop: 10}}>
          <Carrossel
          title="Receitas"
          value="R$0,00"
          subtitle="Este mês"
          bgColor="#E5E5E5"
          />
          <Carrossel 
          title="Despesas"
          value="R$0,00"
          subtitle="Este mês"
          bgColor="#E5E5E5"
          />
          <Carrossel 
          title="Saldo"
          value="R$0,00"
          subtitle="Este mês"
          bgColor="#E5E5E5"
          />
          </View>
   <Form />
    </ScrollView>    

</View>
  )
}