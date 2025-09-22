import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./styles"
import { colors, fontFamily } from "../../theme";

type Props = {
  label: string
  value: string
  placeholder?: string
  onChangeText: (text: string) => void
}


export function Description({ label, value, placeholder, onChangeText }: Props) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: isFocused ? colors.gray[500] : colors.gray[300] }
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[400]}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        blurOnSubmit={true}          // Sai do input ao enviar
        returnKeyType="done"         // Mostra "concluir" no teclado
        onSubmitEditing={() => {     // Ao apertar o retorno
        setIsFocused(false)
  }}
      />
    </View>
  )
}