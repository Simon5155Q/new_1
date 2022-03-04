import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import DashboardScreen from "./DashboardScreen";

export default class Screen1 extends Component {
  render(){
    return(
      <View>
      <Text>screen1</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("DashboardScreen")}><Text>button</Text>
      </TouchableOpacity>
      </View>
      )
  }
}
