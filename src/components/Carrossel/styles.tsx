// styles.ts
import { StyleSheet } from "react-native";
import { fontFamily } from "../../theme";

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
    fontFamily: fontFamily.medium,
    color: "#000",
  },

  value: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: "#000",
    marginTop: 4,
  },

  subtitle: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: "#000",
    marginTop: 2,
  },
});
