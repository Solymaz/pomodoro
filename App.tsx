import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.2 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES);
  const startTimer = () => {
    setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Start timer" onPress={() => startTimer()} />
      <Text>{timerCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
