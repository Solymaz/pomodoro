import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";

export default function SettingsScreen(): JSX.Element {
  const [focusMinutes, setFocusMinutes] = useState<number>(20);
  const [breakMinutes, setBreakMinutes] = useState<number>(5);
  return (
    <>
      <Text>Enter the number of minutes you want to focus</Text>
      <TextInput
        value={focusMinutes}
        onChangeText={(newTime) => setFocusMinutes(newTime)}
      />
      <Text>Enter the number of minutes you want to take a break</Text>
      <TextInput
        value={breakMinutes}
        onChangeText={(newTime) => setFocusMinutes(newTime)}
      />
      <Button
        title="Save"
        onPress={() => onSumit(focusMinutes, breakMinutes)}
      />
    </>
  );
}
