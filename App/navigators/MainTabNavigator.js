import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid,
  TouchableHighlight
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import FirstTab from "../tabs/FirstTab";
import SecondTab from "../tabs/SecondTab";
import ThirdTab from "../tabs/ThirdTab";
import FourthTab from "../tabs/FourthTab";

import { createBottomTabNavigator } from "react-navigation";
import { AddButton } from "../components/AddButton";

this.state = {
  addingBtnVisable: false
};

const MainTabNavigator = createBottomTabNavigator(
  {
    Biometrics: {
      screen: FirstTab,
      navigationOptions: ({ navigation }) => ({
        title: "생체정보",
        tabBarLabel: "Biometrics",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{ idth: 24, height: 24, resizeMode: 'contain' }} source={focused?(require('../images/tab/Asset-53xxxhdpi.png')):(require('../images/tab/heart-beatxxxhdpi.png'))} />
          ),
        tabBarColor: "#f2f2f2",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          console.log("!@#!$!@$!@$!@#!@$dddddddddddddddddddddd");
          this.state.addingBtnVisable = true;
          defaultHandler();
        }
      })
    },
    Book: {
      screen: SecondTab,
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "WeatherInfo",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{ idth: 24, height: 24, resizeMode: 'contain' }} source={focused?(require('../images/tab/calendar-colorxxxhdpi.png')):(require('../images/tab/calendar-monoxxxhdpi.png'))} />          
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
        tabBarIcon: <AddButton />
      })
    },
    WeatherInfo: {
      screen: ThirdTab,
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "WeatherInfo",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{ idth: 24, height: 24, resizeMode: 'contain' }} source={focused?(require('../images/tab/wave-lv3xxxhdpi.png')):(require('../images/tab/wave-monoxxxhdpi.png'))} />      
        ),
        tabBarColor: "#ff0000",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          this.state.addingBtnVisable = false;
          defaultHandler();
        }
      })
    },
    Setting: {
      screen: FourthTab,
      navigationOptions: ({ navigation }) => ({
        title: "파도정보",
        tabBarLabel: "Setting",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image style={{ idth: 24, height: 24, resizeMode: 'contain' }} source={focused?(require('../images/tab/setting-colorxxxhdpi.png')):(require('../images/tab/setting-monoxxxhdpi.png'))} />      
        ),
        tabBarColor: "#ff0000",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          this.state.addingBtnVisable = false;
          defaultHandler();
        }
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#000000",
      inactiveTintColor: "#000000",     
      style: {
        backgroundColor: "#f9f9fa"
      },
      tabStyle: {}
    },
    lazy:false
  }
);

export default MainTabNavigator;
