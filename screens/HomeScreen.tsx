import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CountdownDisplay from "../CountdownDisplay";
import TimerMode, { TimerModes } from "../TimerMode";
import TimerToggleButton from "../TimerToggleButton";
import { TimerContext } from "../context/TimerContext";

export default function HomeScreen() {
  const { focusMinutes, breakMinutes } = useContext(TimerContext);
  const FocusMilliseconds = focusMinutes * 60 * 1000;
  const BreakMilliseconds = breakMinutes * 60 * 1000;
  const [focusTimerCount, setFocusTimerCount] = useState(FocusMilliseconds);
  const [breakTimerCount, setBreakTimerCount] = useState(BreakMilliseconds);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");

  useEffect(() => {
    setFocusTimerCount(FocusMilliseconds);
    setBreakTimerCount(BreakMilliseconds);
  }, [focusMinutes, breakMinutes]);

  // switch from focus to break mode and vis a vis when the timer is 0
  useEffect(() => {
    if (timerMode === "Focus" && focusTimerCount === 0) {
      setTimerMode("Break");
      setBreakTimerCount(BreakMilliseconds);
      stopTimer();
    }
    if (timerMode === "Break" && breakTimerCount === 0) {
      setTimerMode("Focus");
      setFocusTimerCount(FocusMilliseconds);
      stopTimer();
    }
  }, [focusTimerCount, breakTimerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    if (timerMode === "Focus") {
      const id = setInterval(
        () => setFocusTimerCount((prev) => prev - 1000),
        1000
      );
      setTimerInterval(id);
    }
    if (timerMode == "Break") {
      const id = setInterval(
        () => setBreakTimerCount((prev) => prev - 1000),
        1000
      );
      setTimerInterval(id);
    }
  };
  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  };

  const timerDate = new Date(
    timerMode === "Focus" ? focusTimerCount : breakTimerCount
  );
  return (
    <View
      style={[
        styles.container,
        timerMode === "Focus" ? styles.focusMode : styles.breakMode,
      ]}
    >
      <StatusBar style="auto" />
      <TimerMode timerMode={timerMode} />
      <TimerToggleButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <CountdownDisplay timerDate={timerDate} />
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
