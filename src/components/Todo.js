import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  DrawerLayoutAndroid,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import Menu from "./Menu";
import AsyncStorage from '@react-native-community/async-storage';
import Entypo from "react-native-vector-icons/Entypo";

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const makeid = length => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default class Todo extends React.Component {
  state = {
    newTodo: "",
    todos: [],
    isAnimating: false
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos.length !== this.state.todos.length) {
  //     const jsonState = JSON.stringify(this.state.todos);
  //     //saving starts here
  //     AsyncStorage.setItem("todos", jsonState)
  //       .then(value => value)
  //       .catch(err => console.warn(err));
  //   }
  // }

  //componentDidUpdate with try/catch
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const jsonState = JSON.stringify(this.state.todos);
      try {
        //saving starts here
        const value = await AsyncStorage.setItem("todos", jsonState);
      } catch (err) {
        console.warn(err);
      }
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("todos")
  //     .then(value => {
  //       if (value !== null) {
  //         // if value is not null or if Asynctorage is not empty.
  //         let valueToArray = JSON.parse(value);
  //         this.setState({
  //           todos: valueToArray
  //         });
  //       }
  //     })
  //     .catch(err => console.warn(err));
  // }

  //componentDidMount with try/catch
 async componentDidMount() {
    //  setState here
    this.setState({
      isAnimating: true
    });
    //setTimeout here
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem("todos");
        if (value !== null) {
          // if value is not null or if Asynctorage is not empty.
          let valueToArray = JSON.parse(value);
          this.setState({
            todos: valueToArray,
             isAnimating: false
          });
        }
      } 
      catch (e) {
        console.warn(err);
      }
    }, 5000);
  }

  addTodo = () => {
    if (!this.state.newTodo) {
      return;
    }
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(this.state.newTodo),
        newTodo: (prevState.newTodo = "")
      };
    });
  };

  handleChangeText = newTodo => {
    this.setState({ newTodo });
  };

  handleDeleteAll = () => {
    this.setState({
      todos: []
    });
  };

  handleDeleteOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoItem => todoItem !== itemToBeRemoved)
    }));

    alert = item => {
      alert(item);
    };
  };

  openDrawer = () => {
    this.drawer.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <Menu
            navigation={this.props.navigation}
            closeDrawer={this.closeDrawer}
          />
        )}
        ref={_drawer => {
          this.drawer = _drawer;
        }}
      >
        <View style={styles.container}>
          {/* Header View */}
          <View style={styles.headerContainer}>
            <TouchableNativeFeedback onPress={(onPress = this.openDrawer)}>
              <View>
                <Ionicons name="md-menu" size={32} color="white" />
              </View>
            </TouchableNativeFeedback>
            <Text style={styles.headerText}> Todo App </Text>
            <AntDesign name="setting" size={32} color="white" />
          </View>

          {/* Body View */}
          <View style={styles.body}>
            {/* Input and Button View */}
            {/* TextInput */}
            <View style={styles.textAndButtonView}>
              <TextInput
                style={styles.textInput}
                value={this.state.newTodo}
                underlineColorAndroid="transparent"
                placeholder="New Todo"
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={this.handleChangeText}
              />

              {/* Button */}
              <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
              <Entypo name="add-to-list" size={20} color="white" />
              </TouchableOpacity>
            </View>

            { this.state.isAnimating &&  <ActivityIndicator size="large" color="#222e50" />  }
            
            {/* Todo Items View */}
            <FlatList
              data={this.state.todos}
              renderItem={({ item }) => (
                <View style={styles.renderItemView}>
                  <Text
                    onPress={e => {
                      this.alert(item);
                    }}
                    style={styles.todoItemText}
                  >
                    {item}
                  </Text>
                  <TouchableOpacity
                    onPress={e => {
                      this.handleDeleteOneItem(item);
                    }}
                  >
                    <Text style={styles.deleteItemText}>X</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => makeid(5)}
            />

            {/* Remove all button */}
             <TouchableHighlight
              style={styles.removeButton}
              onPress={this.handleDeleteAll}
            >
              <Text style={styles.removeButtonText}> Remove all</Text>
            </TouchableHighlight>
          </View>

          {/* Footer View */}
          <View style={{ flex: 1, backgroundColor: "#222e50" }} />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 20
  },
headerContainer: {
    flex: 1,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222e50",
    alignItems: "center",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 0.5
  },
  todoText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50"
  },
  textInput: {
    marginBottom: 10,
    width: "73%",
    height: 40,
    borderColor: "#222e50",
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 5
  },
  body: {
    flex: 5,
    padding: 10,
    backgroundColor: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 15
  },
  addButton: {
    padding: 8,
    backgroundColor: "#222e50",
    borderRadius: 5,
    marginBottom: 30,
    width: "25%",
    alignItems: "center"
  },
  textAndButtonView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
 removeButton: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50"
  },
  removeButtonText: {
    color: "#222e50",
    fontSize: 15
  },
  renderItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50",
    padding: 10,
    marginTop: 10
  },
  todoItemText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent"
  },
  deleteItemText: {
    fontWeight: "900",
    color: "red",
    fontSize: 19
  }
})