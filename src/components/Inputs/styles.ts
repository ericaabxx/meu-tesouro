import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row', 
    gap: 10, 
    // Adicione esta propriedade para alinhar os itens verticalmente
  },
  inputWrapper: {
    flex: 1,
    // faz o input ocupar metade do espaço disponível
  }
})