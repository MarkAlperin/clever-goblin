import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const StatsPage = (props) => {

    return (
      <View>
        {props.monster && <Text>{props.monster.name}</Text>}
        {!props.monster && <Text>No monster selected</Text>}
      </View>
    );
};

export default StatsPage;
