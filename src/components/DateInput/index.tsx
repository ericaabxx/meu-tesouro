import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { getFormattedCurrentDate } from "../../utils/Date"; 


type Props = {
  label: string;
  value: string;
  placeholder?: string;
  keyboardType?: "numeric" | "default";
  onChangeText: (text: string) => void;
};


export function DateInput({
  label,
  value,
  placeholder,
  keyboardType = "default",
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder ?? getFormattedCurrentDate()}
        onFocus={() => {
          if (value === getFormattedCurrentDate()) {
            onChangeText("");
          }
        }}
        onBlur={() => {
          if (value === "") {
            onChangeText(getFormattedCurrentDate());
          }
        }}
      />
    </View>
  );
}
