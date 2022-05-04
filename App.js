import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import PagerView from "react-native-pager-view";

import MainPage from "./client/components/MainPage";
import SearchPage from "./client/components/SearchPage.js";


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <MainPage key="1" />
        <SearchPage key="2" />
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
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
