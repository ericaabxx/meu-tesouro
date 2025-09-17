import { View, Text, TextInput } from "react-native";
import { colors } from "../../theme";
import { styles } from "./styles";

type Props = {
  label: string; // O rótulo/título do campo, ex: "Valor" ou "Data"
  value: string; // O valor atual que será exibido no campo
  placeholder?: string; // Um texto de exemplo, opcional
  keyboardType?: "numeric" | "default"; // Tipo de teclado a ser exibido
  onChangeText: (text: string) => void; // A função que será chamada quando o valor mudar

}

export function ValueInput({
  label,
  value,
  placeholder = "",
  keyboardType = "numeric",
  onChangeText,
}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.gray[400]}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            />
        </View>
    )
}