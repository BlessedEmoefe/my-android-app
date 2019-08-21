/**
 * @format
 */

import { AppRegistry } from "react-native";
import MyApp from "./MyApp";
import { name as appName } from "./app.json";
import FlatListExample from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";
import AppContainer from "./AppContainer";

AppRegistry.registerComponent(appName, () => AppContainer);
