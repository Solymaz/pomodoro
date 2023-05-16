import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
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
    <Pressable>
      <View>
        <FontAwesome
          name={isTimerRunning ? "pause" : "play"}
          size={125}
          color="red"
          onPress={isTimerRunning ? stopTimer : startTimer}
        />
      </View>
    </Pressable>
  );
}
