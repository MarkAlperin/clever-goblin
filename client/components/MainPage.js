// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import SearchBar from "./SearchBar.js";
import Monster from "./Monster.js";
import Banner from "./Banner.js";

const MainPage = (props) => {
  // const [monster, setMonster] = useState(null);
  // const [bannerMessage, setBannerMessage] = useState(
  //   "I'm not trying kill you... but the Goblins are!"
  // );

  // const setMessage = (message) => {
  //   setBannerMessage(message);
  // };

  return (
    <View style={styles.container}>
      <Banner monster={props.monster}/>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={styles.image}
      />
      <Text>Swipe ➡️</Text>

    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // position: "absolute",
    // zIndex: -1,
    width: 300,
    height: 300,
  },
});
