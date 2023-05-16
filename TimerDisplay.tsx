import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  timerDate: Date;
};

export default function TimerDisplay({ timerDate }: Props): JSX.Element {
  return (
    <View>
      <Text style={styles.styledText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  styledText: {
    fontSize: 30,
    fontWeight: "700",
  },
});
