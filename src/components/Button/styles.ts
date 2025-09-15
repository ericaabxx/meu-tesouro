import { StyleSheet } from "react-native";
import { fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center",     // centraliza horizontalmente
  },

button: {
    width: 360,
    height: 50,
    backgroundColor: "#233e89ff",
    borderRadius: 8,
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center",     // centraliza horizontalmente
},

  title: {
    fontSize: 12,
    fontFamily: fontFamily.bold,
    color: "#fff"
  },  
})