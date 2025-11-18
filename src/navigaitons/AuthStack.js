import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import ListScreen from "../screens/ListScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTintColor: "red",
        headerBackTitle: "뒤로가기",
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          headerTintColor: "green",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
