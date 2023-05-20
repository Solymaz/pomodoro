import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SettingsScreen(): JSX.Element {
  const [focusMinutes, setFocusMinutes] = useState<number>(25);
  const [breakMinutes, setBreakMinutes] = useState<number>(5);
  return (
    <View accessible={true} accessibilityLanguage="en-EN">
      <Text nativeID="focus minutes">
        Enter the number of minutes you want to focus
      </Text>
      <TextInput
        value={focusMinutes.toString()}
        onChangeText={(newTime) => setFocusMinutes(Number(newTime))}
        keyboardType="number-pad"
        accessibilityLabel="focus minutes input"
        accessibilityLabelledBy="focus minutes"
      />
      <Text nativeID="break minutes">
        Enter the number of minutes you want to take a break
      </Text>
      <TextInput
        value={breakMinutes.toString()}
        onChangeText={(newTime) => setFocusMinutes(Number(newTime))}
        keyboardType="number-pad"
        accessibilityLabel="break minutes input"
        accessibilityLabelledBy="break minutes"
      />
      <Button
        title="Save"
        onPress={() => onSumit(focusMinutes, breakMinutes)}
      />
    </View>
  );
}
