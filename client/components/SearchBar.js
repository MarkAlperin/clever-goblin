import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import api from "../api/helpers.js";

const SearchBar = (props) => {
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.value = "goblin"
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (searchInputRef.current.value.length > 0) {
      try {
        const monsterData = await api.getMonster(searchInputRef.current.value);
        console.log({monsterData});
        if (!monsterData) {
          props.setMessage(`${searchInputRef.current.value} not found, please try again...`);
        } else {
          api.addMonsterHandler(monsterData);
          props.setMonster(monsterData);
          props.setMessage(`Watch out, ${searchInputRef.current.value} right behind you!`);
        }
        const eventData = await api.fetchEventsHandler();
        console.log(eventData);
        searchInputRef.current.value = "";
      } catch (err) {
        console.log(true);
        console.error(err);
      }
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        ref={searchInputRef}
        onSubmit={submitHandler}
      />
      <button onClick={submitHandler}>Search</button>
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
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    color: "blue",
  },
});

export default SearchBar;
