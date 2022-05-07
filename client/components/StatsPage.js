// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TextInput,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";

import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Stat = (p) => {
  return <Text style={styles.t}>{`${p.type.name}: ${p.type.desc} \n\n`}</Text>
};


const StatsPage = (p) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {p.m && <Text style={styles.tb}>{p.m.name}</Text>}
        {!p.m && <Text style={styles.tb}>No monster selected</Text>}
        {p.m && (
          <Text style={styles.t}>{`Str: ${p.m.strength} Dex: ${p.m.dexterity} Con: ${p.m.constitution} Int: ${p.m.intelligence} Wis: ${p.m.wisdom} Cha: ${p.m.charisma}`}</Text>
        )}
      </View>
      <View style={styles.middle}>
      <Text style={styles.tb}>Actions</Text>
      {p.m &&<Text style={styles.t}>{p.m.actions.map(type => <Stat type={type}/>)}</Text>}
      </View>
      <View style={styles.bottom} >
      <Text style={styles.tb}>Special Abilities</Text>
        {p.m &&<Text style={styles.t}>{p.m.special_abilities.map(type => <Stat type={type}/>)}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    // alignContent: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    textAlign: "center",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "green",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  t: {
    textAlign: "center"
  },
  tb: {
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default StatsPage;
