import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const MonsterSearch = () => {

  const searchInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(searchInputRef.current.value);

  };


  return (
    <View>
      <TextInput style={styles.input} ref={searchInputRef} onSubmit={submitHandler}/>
      <button  onClick={submitHandler}>Search</button>
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
  }
});

export default MonsterSearch;
