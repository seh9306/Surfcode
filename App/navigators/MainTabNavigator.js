import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  TouchableHighlight
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import FirstScreen from "../tabs/FirstScreen";
import SecondScreen from "../tabs/SecondScreen";

import { createBottomTabNavigator } from "react-navigation";
import { AddButton } from "../components/AddButton";
this.state = {
  addingBtnVisable: false
};

const MainTabNavigator = createBottomTabNavigator(
  {
    Biometrics: {
      screen: FirstScreen,
      navigationOptions: ({ navigation }) => ({
        title: "생체정보",
        tabBarLabel: "Biometrics",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" color={tintColor} size={24} />
        ),
        tabBarColor: "#f2f2f2",      
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          this.state.addingBtnVisable = true;
          defaultHandler();
        }
      })
    },
    Book: {
      screen: SecondScreen,
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "WeatherInfo",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="weather-lightning-rainy" color={tintColor} size={24} />
        ),
        tabBarColor: "#ff0000",
        tabBarOnPress: ({ navigation, defaultHandler }) => {         
          this.state.addingBtnVisable = false;
          defaultHandler();
        }
      })
    },
    Adding: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        //tabBarVisible: this.state.addingBtnVisable,
        tabBarIcon: <AddButton />
      })
    },
    WeatherInfo: {
      screen: SecondScreen,      
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "WeatherInfo",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="weather-lightning-rainy" color={tintColor} size={24} />
        ),
        tabBarColor: "#ff0000"
      })
    },
    Setting: {
      screen: SecondScreen,
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "Setting",        
        tabBarIcon: ({ tintColor }) => (
          <Icon name="weather-lightning-rainy" color={tintColor} size={24} />
        ),
        tabBarColor: "#ff0000"
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#000000",
      inactiveTintColor: "#000000",
      //order: ["Biometrics", "Book", "Adding", "WeatherInfo", "Setting"], //표시 순서
      style: {
        backgroundColor: "#f9f9fa"
      },
      tabStyle: {}
    }
  }
);

export default MainTabNavigator;