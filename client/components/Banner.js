import React, { Fragment } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
// import styled from 'styled-components/native';

// const StyledText = styled.Text`
//   textAlign: center;
//   fontWeigh
// `;

const Banner = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.banner}>Clever Goblin</Text>
      <Text style={styles.text}>I'm not trying to kill you... but the goblins are.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    textAlign: "center",
    fontWeight: "bold",
    margin: "2%",
    marginTop: "5%"
  },
  text: {
    textAlign: "center",
    margin: "1%",
  }
});

export default Banner;
