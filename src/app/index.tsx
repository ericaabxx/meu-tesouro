import { Text, View } from 'react-native'
import { Header } from '../components/Header'
import { Carrossel } from "../components/Carrossel"
import { Button } from '../components/Button'
import { router } from 'expo-router'
import { FormEmpty } from '../components/FormEmpty'


export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Header 
        title="Controle financeiro" 
        subtitle='Gerencie suas finanças de forma inteligente'
      />
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
      <Button title='Nova transação'
      onPress={ () => router.navigate("/transactionForm")}
      />

      <FormEmpty />
    </View>
  )
}
