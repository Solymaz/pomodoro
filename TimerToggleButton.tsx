import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
  isTimerRunning: boolean;
  stopTimer: () => void;
  startTimer: () => void;
};

export default function TimerToggleButton({
  isTimerRunning,
  stopTimer,
  startTimer,
}: Props): JSX.Element {
  return (
    <Pressable style={styles.icon}>
      <View style={styles.container}>
        <FontAwesome
          name={isTimerRunning ? "pause" : "play"}
          size={125}
          onPress={isTimerRunning ? stopTimer : startTimer}
          style={styles.icon}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    color: "#fff",
  },
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#fff",
    marginVertical: 50,
  },
});
