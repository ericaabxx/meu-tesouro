import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  bgColor?: string; // cor de fundo opcional

};

export function Carrossel({ title, value, subtitle, bgColor = '#fff' }: Props) {
  const renderIcon = () => {
    if (title === "Receitas") {
      return <MaterialIcons name="arrow-upward" size={16} color="#000" />;
    }
    if (title === "Despesas") {
      return <MaterialIcons name="arrow-downward" size={16} color="#000" />;
    }
    if (title === "Saldo") {
      return <MaterialIcons name="account-balance-wallet" size={16} color="#000" />;
    }
    return null;
  };

  return (
    <View style={[styles.carrossel, { backgroundColor: bgColor }]}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text style={styles.title}>{title}</Text>
        {renderIcon()}
      </View>

      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
