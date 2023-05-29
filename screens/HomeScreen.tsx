import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Audio } from "expo-av";
import CountdownDisplay from "../components/CountdownDisplay";
import TimerToggleButton from "../components/TimerToggleButton";
import { TimerContext } from "../context/TimerContext";
import { TimerModeContext } from "../context/TimerModeContext";
import TimerMode from "../components/TimerMode";

export default function HomeScreen() {
  const { focusMinutes, breakMinutes } = useContext(TimerContext);
  const { timerMode, setTimerMode } = useContext(TimerModeContext);
  const FocusMilliseconds = focusMinutes * 60 * 1000;
  const BreakMilliseconds = breakMinutes * 60 * 1000;
  const [focusTimerCount, setFocusTimerCount] = useState(FocusMilliseconds);
  const [breakTimerCount, setBreakTimerCount] = useState(BreakMilliseconds);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/time-is-up.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

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
      playSound();
    }
    if (timerMode === "Break" && breakTimerCount === 0) {
      setTimerMode("Focus");
      setFocusTimerCount(FocusMilliseconds);
      stopTimer();
      playSound();
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
    <SafeAreaView
      style={[
        styles.container,
        timerMode === "Focus" ? styles.focusMode : styles.breakMode,
      ]}
    >
      <StatusBar style="auto" />
      <TimerMode />
      <TimerToggleButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <CountdownDisplay timerDate={timerDate} />
    </SafeAreaView>
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
