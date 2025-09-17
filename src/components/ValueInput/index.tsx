import { View, Text, TextInput } from "react-native";
import { colors } from "../../theme";
import { styles } from "./styles";
import { useState, useEffect } from "react";

type Props = {
  label: string; 
  value: string; // Este é o valor vindo do componente pai
  placeholder?: string;
  keyboardType?: "numeric" | "default";
  onChangeText: (text: string) => void; 
};

export function ValueInput({
  label,
  value, // O valor inicial que vem do componente pai
  placeholder,
  keyboardType = "default",
  onChangeText, // A função para atualizar o estado no componente pai
}: Props) {
  // Use um estado local para controlar o valor exibido no TextInput
  const [inputValue, setInputValue] = useState(value);

  // Use useEffect para garantir que o input seja atualizado
  // se o valor da prop 'value' mudar
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => {
          // 1. Atualiza o estado local para o input
          setInputValue(text);
          // 2. Chama a função onChangeText da prop para atualizar
          //    o estado no componente pai (Inputs)
          onChangeText(text);
        }}
        keyboardType="numeric"
        onFocus={() => {
          if (inputValue === "0,00" || inputValue === "0,00") {
            setInputValue("");
          }
        }}
        onBlur={() => {
          if (inputValue === "") {
            setInputValue("0,00");
          }
        }}
      />
    </View>
  );
}