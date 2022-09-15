/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import  MenuScreen  from "./screens/MenuScreen";
import GridView from "./components/GridView"

AppRegistry.registerComponent(appName, () => MenuScreen);
