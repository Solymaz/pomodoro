import React, { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { TimerContext } from "../context/TimerContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;
export default function SettingsScreen({ navigation }: Props): JSX.Element {
  const { focusMinutes, setFocusMinutes, breakMinutes, setBreakMinutes } =
    useContext(TimerContext);
  const [newFocusMinutes, setNewFocusMinutes] = useState<number>(focusMinutes);
  const [newBreakMinutes, setNewBreakMinutes] = useState<number>(breakMinutes);
  return (
    <View accessible={true} accessibilityLanguage="en-EN">
      <Text nativeID="focus minutes">
        Enter the number of minutes you want to focus
      </Text>
      <TextInput
        value={newFocusMinutes.toString()}
        onChangeText={(newTime) => setNewFocusMinutes(Number(newTime))}
        keyboardType="number-pad"
        accessibilityLabel="focus minutes input"
        accessibilityLabelledBy="focus minutes"
      />
      <Text nativeID="break minutes">
        Enter the number of minutes you want to take a break
      </Text>
      <TextInput
        value={newBreakMinutes.toString()}
        onChangeText={(newTime) => setNewBreakMinutes(Number(newTime))}
        keyboardType="number-pad"
        accessibilityLabel="break minutes input"
        accessibilityLabelledBy="break minutes"
      />
      <Button
        title="Done"
        onPress={() => {
          setFocusMinutes(newFocusMinutes),
            setBreakMinutes(newBreakMinutes),
            navigation.pop();
        }}
      />
    </View>
  );
}
