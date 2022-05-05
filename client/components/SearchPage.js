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

// const background = require{"../../assets/purple.jpeg";

const SearchPage = (props) => {
  const [monster, setMonster] = useState(null);
  const [bannerMessage, setBannerMessage] = useState(
    "I'm not trying kill you... but the Goblins are!"
  );

  const setMessage = (message) => {
    setBannerMessage(message);
  };

  const setMonsterHandler = (monster) => {
    setMonster(monster);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ require("../../assets/purple.jpeg")}
        resizeMode="cover"
        style={styles.background}
      >
        <SearchBar
          style={styles.search}
          setMonster={props.setMonster}
          setMessage={setMessage}
        />
        {monster && <Monster style={styles.monster} monster={monster} />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // search: {
  //   flex: 2,
  //   backgroundColor: "red",
  // },
  // monster: {
  //   flex: 5,
  //   backgroundColor: "blue",
  // },
  background: {},
});

export default SearchPage;
