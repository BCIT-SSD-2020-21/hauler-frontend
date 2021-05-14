import React from 'react';
import  NavigationScreen from './src/screens/NavigationScreen/NavigationScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AuthProvider } from './src/context/ContextProvider';
import { Platform } from 'react-native';
import BottomTabNavigation from './src/screens/NavigationScreen/BottomTabNavigation'

const Stack = createStackNavigator();

const PlatformSpecificNavigator = Platform.select({
  ios: () => BottomTabNavigation,
  android: () => NavigationScreen,
})();

export default function App() {
  return (
      <SafeAreaProvider>
         <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = 'Root' component = {PlatformSpecificNavigator} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
  );
}