import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

class Likes extends Component {
  state = {
    likes: 0
  };

  //increaseLikes handler
  increaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };
  // decreaseLikes handler
  decreaseLikes = () => {
    this.state.likes &&
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1
        };
      });
  };

  // resetLikes handler
  resetLikes = () => {
    this.setState(() => {
      return {
        likes: 0
      };
    });
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Likes App",

      headerStyle: {
        backgroundColor: "#222e50"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
      },

      headerRight: (
        <Button
          title="like:+5"
          color="#222e50"
          onPress={() => params.increaseLikesBy5()}
        />
      ),

      headerLeft: (

        <TouchableOpacity

          onPress={() => params.decreaseLikesBy5()}

          style={{ padding: 6, borderWidth: 0.8, borderColor: "black" }}

        >

          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>

            unlike:-5

          </Text>

        </TouchableOpacity>

      )
    };
  };

  //increaseLikes by 5 handler

  increaseLikesBy5 = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 5
      };
    });
  };

  // decreaseLikes by handler

  decreaseLikesBy5 = () => {
    this.state.likes &&
      this.setState(prevState => {
        return {
          likes: prevState.likes - 5
        };
      });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      increaseLikesBy5: this.increaseLikesBy5
    });

    this.props.navigation.setParams({
      decreaseLikesBy5: this.decreaseLikesBy5
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome to my Likes App</Text>

        <Text style={styles.text}>
        Likes: <Text style={styles.countNumber}>{this.state.likes}</Text>
        </Text>

        <View style={styles.btn}>
          <Button onPress={this.increaseLikes} title="like" color="blue" />
        </View>
        <View style={styles.btn}>
          <Button onPress={this.decreaseLikes} title="unlike" color="#841584" />
        </View>
        <View style={styles.btn}>
          <Button
            onPress={this.resetLikes}
            title="reset"
            color="red"
            disabled={this.state.likes <= 0}
          />
        </View>
      </View>
    );
  }
}

export default Likes;

const styles = StyleSheet.create({
  btn: {
    padding: 10
  },
  text: {

    textAlign: "center",

    fontWeight: "bold"

  },

  countNumber: {

    fontWeight: "bold",

    fontSize: 70,

    color: "#222e50"

  }
});
