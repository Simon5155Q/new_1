/*import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import { gapi } from 'gapi-script'

export default class DashboardScreen extends Component {
  constructor(){
    super();
    this.state={
      calendarDetails: [],

    }
  }

  fetchCalendarDetails(){
      let that = this;
  function start() {
    gapi.client.init({
      'apiKey': "AIzaSyAAw7531kN5a0bpS6QGXB7lCXd6P2e3hu0"
    }).then(function() {
      return gapi.client.request({
        'path': `https://www.googleapis.com/calendar/v3/calendars`,
      })
    }).then( (response) => {
      let calendarDetails = response.result.items
      that.setState({
        calendarDetails
      }, ()=>{
        console.log(that.state.calendarDetails);
      })
    }, function(reason) {
      console.log(reason);
    });
  }
  gapi.load('client', start)
  }

  componentDidMount(){
    this.fetchCalendarDetails();
  }

  render(){
    return(
      <View>
        <Text>dashboard</Text>
      </View>
    )
  }
}*/

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import CalendarEvents from "../calendarScreen";


export default class DashboardScreen extends React.Component{

  handleDateClick = () => { // bind with an arrow function
    alert("clicked")
    console.log("clicked")  
  }
  render(){
    return (
      <View>
       <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        
      /> 
      {/* <CalendarEvents/> */}
      </View>
    )
  }
}



// export default DashboardScreen();
