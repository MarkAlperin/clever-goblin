import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";


const MonsterSearch = () => {
  return (
    <TextInput
        style={styles.input}
        defaultValue="You can type in me"
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  }
});

export default MonsterSearch;