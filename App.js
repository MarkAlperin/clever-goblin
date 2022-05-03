// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import MonsterSearch from "./client/components/MonsterSearch.js";
import Banner from "./client/components/Banner.js";

const App = () => {
  return (
    <ScrollView>
      <Banner />

      <View style={styles.container}>
        <MonsterSearch />
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={styles.image}
        />

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
