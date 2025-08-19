import { StyleSheet, Text, View } from "react-native";
import params from "../src/params";


export default function Index() {


  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}> Inciciando o Mines! </Text>
      <Text style={Styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
    </View>
  )

}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

