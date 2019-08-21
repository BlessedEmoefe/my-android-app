import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./src/components/Todo";

export default function MyApp() {
  return (
    <View style={styles.container}>
      <Todo />
      {/* <Flex/> */}
      {/* <Text>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222"
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
