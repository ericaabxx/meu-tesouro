import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    gap: 10, 
    width: "100%",
    justifyContent: "center",
    marginBottom: 12, // garante espaçamento entre inputs e descrição
  },
  inputWrapper: {
    flex: 1, // garante que os dois inputs dividam o espaço igualmente
  }
})
