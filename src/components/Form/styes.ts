import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../theme";

export const styles = StyleSheet.create({
    form: {
        justifyContent: "center",
        alignItems: "center",
    },

    
    container: {
        padding: 20,
        width: 360,
        height: 540,
        borderRadius: 8,
        borderColor: colors.gray[400],
        borderWidth: 1,
        backgroundColor: colors.gray[200],
        marginTop: 10,
        gap: 5,
    },

    text: {
        gap: 5,
        marginBottom: 10
    },

    title: {
        color: colors.black,
        fontFamily: fontFamily.bold
    },
    subtitle:{
        color: colors.black,
        fontFamily: fontFamily.regular
    },
})