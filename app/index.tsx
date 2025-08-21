import { StyleSheet, Text, View } from "react-native";
import Field from "../src/components/Field";
import params from "../src/params";


export default function Index() {


  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}> Inciciando o Mines! </Text>
      <Text style={Styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
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
    marginBottom: 6,
  },
});

