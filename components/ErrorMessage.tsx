import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ErrorMessage() {
  return (
    <Text style={styles.errMsg}>Please enter a number between 1 and 59 😕</Text>
  );
}

const styles = StyleSheet.create({
  errMsg: {
    fontWeight: "bold",
  },
});
