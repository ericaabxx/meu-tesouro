import { StyleSheet } from "react-native"
import { colors, fontFamily } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[700],
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.gray[200],
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[900],
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  arrow: {
    fontSize: 16,
    color: colors.gray[700],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  optionText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[900],
  },
  closeButton: {
    marginTop: 12,
    backgroundColor: "#326BA2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontFamily: fontFamily.bold,
    fontSize: 16,
  },
})
