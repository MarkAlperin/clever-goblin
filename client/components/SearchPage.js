import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import SearchBar from "./SearchBar.js";
import Monster from "./Monster.js";
import tactics from "../../assets/tactics.js";

// const background = require{"../../assets/purple.jpeg";

const SearchPage = (props) => {
  // const [monster, setMonster] = useState(null);
  const [message, setMessage] = useState("No monster selected");

  // const setMonsterHandler = (monster) => {
  //   setMonster(monster);
  // };

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/purple.jpeg")}
        resizeMode="cover"
        style={styles.background}
      > */}
        <View style={styles.top}>
          <SearchBar
            style={styles.search}
            setMonster={props.setMonster}
            setMessage={setMessage}
          />
        </View>

        <View style={styles.middle}>
          {!props.monster && <Text>{message}</Text>}
          {props.monster && <Text>{props.monster.name}</Text>}
          {props.monster && <Text>{tactics[props.monster.name.toLowerCase()]}</Text>}
        </View>
        <View style={styles.bottom} >
            {props.monster && <Text>How would you play this monster</Text>}
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.2,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    textAlign: "center",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.5,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.2,
    backgroundColor: "brown",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  background: {},
});

export default SearchPage;
