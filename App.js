// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import SearchBar from "./client/components/SearchBar.js";
import Monster from "./client/components/Monster.js";
import Banner from "./client/components/Banner.js";

const App = () => {
  const [monster, setMonster] = useState(null);
  const [bannerMessage, setBannerMessage] = useState(
    "I'm not trying kill you... but the Goblins are!"
  );

  const setMessage = (message) => {
    setBannerMessage(message);
  };

  return (
    <ScrollView>
      <Banner message={bannerMessage} />
      <View style={styles.container}>
        <SearchBar setMonster={setMonster} setMessage={setMessage} />
        <ImageBackground
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={styles.image}
        />
        {monster && <Monster monster={monster}/>}
        {/* <StatusBar style="auto" /> */}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
