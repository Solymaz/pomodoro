import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { TimerContext } from "../context/TimerContext";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "../components/ErrorMessage";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { focusMinutes, setFocusMinutes, breakMinutes, setBreakMinutes } =
    useContext(TimerContext);
  const [newFocusMinutes, setNewFocusMinutes] = useState<number>(focusMinutes);
  const [newBreakMinutes, setNewBreakMinutes] = useState<number>(breakMinutes);
  const [showErrMsg, setShowErrMsg] = useState<boolean>(false);

  const handelSubmit = () => {
    if (
      newFocusMinutes > 1 &&
      newFocusMinutes <= 59 &&
      newBreakMinutes > 1 &&
      newBreakMinutes <= 59
    ) {
      setShowErrMsg(false);
      setFocusMinutes(newFocusMinutes),
        setBreakMinutes(newBreakMinutes),
        navigation.goBack();
    } else {
      setShowErrMsg(true);
      return;
    }
  };

  return (
    <View
      accessible={true}
      accessibilityLanguage="en-EN"
      style={styles.container}
    >
      <View style={[styles.focus, styles.wrapper]}>
        <Text style={styles.label} nativeID="focus minutes">
          Enter the number of minutes you want to focus 🧠
        </Text>
        <TextInput
          value={newFocusMinutes.toString()}
          onChangeText={(newTime) => setNewFocusMinutes(Number(newTime))}
          keyboardType="number-pad"
          accessibilityLabel="focus minutes input"
          accessibilityLabelledBy="focus minutes"
          style={styles.border}
          clearTextOnFocus={true}
        />
      </View>
      <View style={[styles.break, styles.wrapper]}>
        <Text style={styles.label} nativeID="break minutes">
          Enter the number of minutes you want to take a break ☕️
        </Text>
        <TextInput
          value={newBreakMinutes.toString()}
          onChangeText={(newTime) => setNewBreakMinutes(Number(newTime))}
          keyboardType="number-pad"
          accessibilityLabel="break minutes input"
          accessibilityLabelledBy="break minutes"
          style={styles.border}
          clearTextOnFocus={true}
        />
      </View>
      {showErrMsg && <ErrorMessage />}
      <Pressable style={[styles.border, styles.button]} onPress={handelSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "white",
    padding: 15,
    textAlign: "center",
    width: "25%",
    fontSize: 16,
  },
  button: {
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
  break: {
    backgroundColor: "#2a9d8f",
  },
  container: {
    alignItems: "center",
  },
  focus: {
    backgroundColor: "#d95550",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  wrapper: {
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 15,
    width: "90%",
  },
});
