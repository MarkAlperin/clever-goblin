import React, { Fragment } from "react";
import { Text, StyleSheet } from "react-native";
// import styled from 'styled-components/native';

// const StyledText = styled.Text`
//   textAlign: center;
//   fontWeigh
// `;

const Banner = () => {
  return (
    <Fragment>
      <Text style={styles.banner}>Clever Goblin</Text>
      <Text style={styles.text}>I'm not trying kill you, but the Goblins are!</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  banner: {
    textAlign: "center",
    fontWeight: 800,
    margin: "10px",
  },
  text: {
    textAlign: "center",
    margin: "5px",
  }
});

export default Banner;
