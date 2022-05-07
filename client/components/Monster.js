import React, {useEffect} from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import tactics from "../../assets/tactics.js";

const Monster = (props) => {

useEffect(() => {
  let strat = tactics[props.monster.name.toLowerCase()]
  console.log(strat);
},[props.monster]);

  return (
    <View style={styles.container}>

      <Text>{props.monster.name}</Text>
      {<Text>{tactics[props.monster.name.toLowerCase()]}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 16,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    padding: 10,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,

  },

});

export default Monster;
