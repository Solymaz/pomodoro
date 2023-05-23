import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TimerContextProvider from "./context/TimerContext";
import TimerModesContextProvider, {
  TimerModeContext,
} from "./context/TimerModeContext";
import { useContext } from "react";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator();

// to access the timerMode context I needed to define this separate component for the screen options
const HomeScreenOptions = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { timerMode } = useContext(TimerModeContext);

  return {
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <MaterialCommunityIcons
          name="timer-cog-outline"
          size={30}
          color="white"
        />
      </Pressable>
    ),
    title: "",
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: timerMode === "Focus" ? "#d95550" : "#2a9d8f",
    },
  };
};

export default function App() {
  return (
    <TimerModesContextProvider>
      <TimerContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={HomeScreenOptions}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TimerContextProvider>
    </TimerModesContextProvider>
  );
}
