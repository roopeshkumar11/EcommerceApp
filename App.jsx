import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Settings from "./src/screens/Settings";
import Buy from "./src/screens/Buy";
import Cart from "./src/screens/Cart";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// 🔵 Stack inside Drawer (for navigation Home → Details → Buy)
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Buy" component={Buy} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{ marginRight: 15 }}
            >
              <Text style={{ fontSize: 22 }}>🛒</Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
