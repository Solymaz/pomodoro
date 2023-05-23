import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimerModeContext } from "../context/TimerModeContext";

export default function TimerMode(): JSX.Element {
  const { timerMode } = useContext(TimerModeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {timerMode === "Focus" ? "Focus Time 🤓" : "Break Time 😎"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
