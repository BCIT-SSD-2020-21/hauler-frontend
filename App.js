import React from 'react';
import { View, Text } from 'react-native';
import { AuthProvider } from './src/context/ContextProvider';

export default function App() {
  return (
    <View>
      <AuthProvider>
        <Text>Open up App.js to start working on your app!</Text>
      </AuthProvider>
    </View>
  );
}

