import React, { useRef, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import api from "../api/helpers.js";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const onChangeHandler = (event) => {
    setSearchInput(event);
    console.log('changeHandler: ', event);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (searchInput.length > 0) {
      try {
        const monsterData = await api.getMonster(searchInput.toLowerCase());
        if (!monsterData) {
          props.setMessage(`${searchInput} not found, please try again...`);
        } else {
          // console.log({monsterData});
          props.setMonster(monsterData);
          // props.setMessage(`Watch out, ${searchInput} right behind you!`);
        }
        // const tactics = await api.fetchMonsterHandler(searchInput);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchInput}
        onChangeText={onChangeHandler}
        placeholder="Search monster..."
      />
      <TouchableOpacity style={styles.button} onPress={submitHandler}><Text>Search</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "space-evenly",
    padding: 10,
    // width: 100,
    // height: 100
  },
  input: {
    flex: .6,
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    borderColor: "green",
    borderWidth: 3,
    padding: 12,
    borderRadius: 15,
    margin: 5,
    minWidth: 100,
  },
  button: {
    flex: .2,

    borderColor: "green",
    borderWidth: 3,
    padding: 5,
    minWidth: 75,
    borderRadius: 15,

  },
});

export default SearchBar;
