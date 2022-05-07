import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import PagerView from "react-native-pager-view";

import MainPage from "./client/components/MainPage";
import SearchPage from "./client/components/SearchPage.js";
import StatsPage from "./client/components/StatsPage.js";

const App = () => {
  const [monster, setMonster] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <MainPage monster={monster} key="1" />
        <SearchPage monster={monster} setMonster={setMonster} key="2" />
        <StatsPage m={monster} key="3" />
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
