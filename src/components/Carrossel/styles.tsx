// styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carrossel: {
    flex: 1,
    maxWidth: 115,
    backgroundColor: "#E5E5E5", // cinza claro
    height: 92,
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
  },

  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },

  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginTop: 4,
  },

  subtitle: {
    fontSize: 10,
    fontWeight: "400",
    color: "#000",
    marginTop: 2,
  },
});
