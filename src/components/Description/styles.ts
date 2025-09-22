import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[900],
    minHeight: 100, // altura inicial maior
  },
})
