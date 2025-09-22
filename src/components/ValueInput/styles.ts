import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";


export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        gap: 5

    },
    label: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[600],
    },
    input: {
        height: 44,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 12,
        color: colors.gray[600],
    }
})