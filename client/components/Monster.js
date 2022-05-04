import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";



const Monster = (props) => {
  return <Text>{props.monster.name}</Text>
};

export default Monster;