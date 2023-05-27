import React, { useContext, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { TimerContext } from "../context/TimerContext";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { focusMinutes, setFocusMinutes, breakMinutes, setBreakMinutes } =
    useContext(TimerContext);
  const [newFocusMinutes, setNewFocusMinutes] = useState<number>(focusMinutes);
  const [newBreakMinutes, setNewBreakMinutes] = useState<number>(breakMinutes);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const handelSubmit = () => {
    if (
      newFocusMinutes > 1 &&
      newFocusMinutes <= 59 &&
      newBreakMinutes > 1 &&
      newBreakMinutes <= 59
    ) {
      setFocusMinutes(newFocusMinutes),
        setBreakMinutes(newBreakMinutes),
        navigation.goBack();
    } else {
      Toast.show({
        type: "error",
        text1: "Please Eneter a number between 1 and 59 🙃",
      });
    }
  };

  return (
    <SafeAreaView
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
      <Toast />
      <Pressable
        style={[
          styles.border,
          styles.button,
          buttonPressed && styles.buttonPressed,
        ]}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={handelSubmit}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </SafeAreaView>
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
    backgroundColor: "#2c2f2c",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonPressed: {
    marginTop: 33,
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
