import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";
import FlatListExample from "./FlatListExample";
import Todo from "./Todo";
import Likes from "./Flex";

const Touchables = props => {
  onPress = () => {
    // alert('hello')
  };
  return (
    <View style={styles.container}>
      {/* TouchableOpacity */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Todo");
        }}
        style={styles.touches}
      >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      {/* TouchableNativeFeedback*/}
      <TouchableNativeFeedback
        // onPress={() => {
        //   props.navigation.navigate("Todo");
        // }}
        onPress={() => {
          props.navigation.navigate("Likes");
        }}
      >
        <View style={styles.touches}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableHighlight
        style={styles.touches}
        // onPress={() => {
        //   props.navigation.navigate("Likes");
        // }}
        onPress={() => {
          props.navigation.navigate("FlatListExample");
        }}
      >
        <Text style={styles.text}> TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17859b"
  },
  text: {
    color: "white",
    fontSize: 18
  },
  touches: {
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30
  }
});
