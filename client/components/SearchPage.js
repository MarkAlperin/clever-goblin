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
      <SearchBar setMonster={setMonsterHandler} setMessage={setMessage} />
      {monster && <Monster monster={monster} />}
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

});

export default SearchPage;
