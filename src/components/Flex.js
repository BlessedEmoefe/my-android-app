import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Flex = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "black" }} />
      <View style={{ flex: 2, backgroundColor: "blue" }} />
      <View style={{ flex: 3, backgroundColor: "purple" }} />
      <View style={{ flex: 4, backgroundColor: "pink" }} />
    </View>
  );
};

export default Flex;
