import React from 'react';
import { View } from 'react-native';
import {AuthProvider } from './src/context/ContextProvider';
import  Signup  from './src/screens/Signup';


export default function App() {
  return (
    <View>
      <AuthProvider>
      <Signup />
      </AuthProvider>
    </View>
  );
}
