import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../src/navigaitons/AuthStack";
import { UserProvider } from "./context/UserContext"; 

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
