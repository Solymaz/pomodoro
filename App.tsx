import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TimerContextProvider from "./context/TimerContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TimerContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
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
                backgroundColor: "#d95550",
              },
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TimerContextProvider>
  );
}
