import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/login';
import LoadingScreen from './screens/loadingScreen'
import Screen1 from './screens/screen1';
import firebase from "firebase";
import { firebaseConfig } from "./config";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


const AppSwitchNavigator = createSwitchNavigator({
  // LoginScreen: LoginScreen,
  // Screen1: Screen1,
  DashboardScreen: DashboardScreen,
  // LoadingScreen: LoadingScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}




