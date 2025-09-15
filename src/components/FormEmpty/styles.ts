import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({
    form: {
        justifyContent: "center",
        alignItems: "center",
    },

    
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 360,
        height: 211,
        borderRadius: 8,
        borderColor: colors.gray[400],
        borderWidth: 1,
        backgroundColor: colors.gray[200],
        marginTop: 10,
    },
    title: {
        color: colors.gray[600]
    }
})