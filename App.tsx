import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TimerDisplay from "./TimerDisplay";
import TimerToggleButton from "./TimerToggleButton";

const FOCUS_TIME_MINUTES = 0.1 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<"Focus" | "Break">("Focus");

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode("Focus");
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  };
  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  };
  const timerDate = new Date(timerCount);
  return (
    <View
      style={[
        styles.container,
        timerMode === "Focus" ? styles.focusMode : styles.breakMode,
      ]}
    >
      <StatusBar style="auto" />
      <Text>{timerMode === "Focus" ? "Focus Time" : "Break Time"}</Text>
      <TimerToggleButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerDisplay timerDate={timerDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d95550",
    alignItems: "center",
    justifyContent: "center",
  },
  focusMode: {
    backgroundColor: "#d95550",
  },
  breakMode: {
    backgroundColor: "#2a9d8f",
  },
});
