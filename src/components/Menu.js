import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Menu extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.Menucontainer}>
        <View><TouchableOpacity onPress={this.addTodo} style={styles.addButton}>

         <Entypo name="add-to-list" size={20} color="white" />

</TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={require("../../assets/blemo.jpg")}
          />
        </View>
        <View style={styles.board}>
          <View style={styles.eachIcon}>
            <AntDesign
              name="addfile"
              size={25}
              color="#09392e"
              style={styles.icon}
            />

            <Text
              style={styles.boardText}
              onPress={() => {
                this.props.navigation.navigate("Todo");
                // this.props.closeDrawer();
              }}
            >
              Todo App
            </Text>
          </View>
          <View style={styles.eachIcon}>
            <AntDesign
              name="like2"
              size={25}
              color="#09392e"
              style={styles.icon}
            />
            <Text
              onPress={() => {
                this.props.navigation.navigate("Likes");
                // this.props.closeDrawer();
              }}
              style={styles.boardText}
            >
              Likes App
            </Text>
          </View>

          <View style={styles.eachIcon}>
            <MaterialIcons
              name="touch-app"
              size={25}
              color="#09392e"
              style={styles.icon}
            />
            <Text
              onPress={() => {
                this.props.navigation.navigate("Touchables");
                // this.props.closeDrawer();
              }}
              style={styles.boardText}
            >
              Touchables
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Menucontainer: {
    flex: 1
    // marginTop: 50
  },

  board: {
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    height: 450,
    width: 350
    // marginTop: -20
  },

  boardText: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: -25,
    marginLeft: 70
  },

  icon: {
    marginTop: 10,
    marginLeft: 20
  },

  eachIcon: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingBottom: 7
  },

  profileImage: {
    height: 200,
    width: 200
  }
});