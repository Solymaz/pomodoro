import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type TimerModes = "Focus" | "Break";
type Props = {
  timerMode: TimerModes;
};

export default function TimerMode({ timerMode }: Props): JSX.Element {
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
