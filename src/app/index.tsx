import { Text, View } from 'react-native'
import { Header } from '../components/Header'
import { Carrossel } from "../components/Carrossel"

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
      />
      <Carrossel 
      title="Receitas"
      value="R$0,00"
      subtitle="Este mês"
      />
      <Carrossel 
      title="Receitas"
      value="R$0,00"
      subtitle="Este mês"
      />
      </View>

    </View>
  )
}
