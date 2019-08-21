import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
const Todos = [
  { name: "Study", id: 1 },
  { name: "visit", id: 2 },
  { name: "Code", id: 3 },
  { name: "Walk", id: 4 }
];
export default class FlatListExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Todos}
          renderItem={({ item }) => (
            <Text style={styles.todoText}>{item.name}</Text>
          )}
          keyExtractor={item => item.id}
        />
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
