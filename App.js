import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./screens/RegistrationScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
