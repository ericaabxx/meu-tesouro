import { StyleSheet } from "react-native";
import { fontFamily } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    width: "100%",
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center",     // centraliza horizontalmente
    height: 215,
  },

  title: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: "#fff"
  },  
    subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: "#fff"
  },  

})
