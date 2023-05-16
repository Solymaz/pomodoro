import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

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
    <Button
      title={isTimerRunning ? "Stop" : "Start"}
      onPress={isTimerRunning ? stopTimer : startTimer}
    />
  );
}
