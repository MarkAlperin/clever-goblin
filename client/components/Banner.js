import React, { Fragment } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
// import styled from 'styled-components/native';

// const StyledText = styled.Text`
//   textAlign: center;
//   fontWeigh
// `;

const Banner = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.banner}>Clever Goblin</Text>
      {props.monster && <Text>{`The ${props.monster.name}s don't know they are here to lose, the ${props.monster.name}s are trying to win.`}</Text>}
      {!props.monster && <Text style={styles.text}>A tool to help dungeon masters get the most out of their monsters on the tabletop</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    textAlign: "center",
    fontWeight: "bold",
    margin: "2%",
    marginTop: "25%"
  },
  text: {
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
  }
});

export default Banner;
