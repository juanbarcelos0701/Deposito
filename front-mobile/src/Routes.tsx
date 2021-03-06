import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Home";
import OrderDetails from "./OrderDetails";
import Orders from "./Orders";

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle:{
            backgroundColor:'#fff'
          }
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}