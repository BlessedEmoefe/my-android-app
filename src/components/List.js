import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

const Todos = [
  { name: "Study" },
  { name: "visit" },
  { name: "Code" },
  { name: "Walk" },
  { name: "Bath the dog" },
  { name: "Shopping" },
  { name: "Clear workspace" },
  { name: "sleep" },
  { name: "Set the day plan" },
  { name: "Eat" },
  { name: "play soccer" },
  { name: "Pray" },
  { name: "watch netflix" },
  { name: "meditation" }
];

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {Todos.map(todoItem => {
            return (
              <Text key={todoItem.name} style={styles.todoText}>
                {todoItem.name}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17859b",
    marginTop: 30,
    padding: 10
  },
  todoText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "#222e50",
    padding: 10,
    marginTop: 10
  }
});
