import React from "react";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home.screen";
import NoteScreen from "../screens/notes.screen";
import Colors from "../theme/colors.theme";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background2,
        },
        headerTintColor: Colors.heading,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Notes",
          headerStyle:{
            fontFamily:"Azonix"
          }
        }}
      />
      <Stack.Screen
        name="Note"
        component={NoteScreen}
        options={{ 
            title: "", 
            headerShown: true, 
            headerTransparent: true,
            headerStyle:{
                backgroundColor:Colors.background
            }
         }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
  },
});
