import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/home.screen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/root.navigation";
import { Provider } from "react-redux";
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading";
import store from "./redux/store";

const fetchFont=()=>{
    return Font.loadAsync({
      'Azonix':require('./assets/fonts/Azonix.otf')
    })
  }

export default function App() {
const [fontLoaded,setFontLoaded]=useState(false)
  
if(!fontLoaded){
  return(
    <AppLoading startAsync={fetchFont} onFinish={setFontLoaded(true)} />
  )}
  return (
    <Provider store={store}>
      
        <RootNavigator />
      
    </Provider>
  );
}
