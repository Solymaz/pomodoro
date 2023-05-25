import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  timerDate: Date;
};

export default function CountdownDisplay({ timerDate }: Props): JSX.Element {
  return (
    <View>
      <Text style={styles.text}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
