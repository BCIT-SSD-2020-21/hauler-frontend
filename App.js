import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AuthProvider } from './src/context/ContextProvider';
import  Signup  from './src/screens/Signup';
import  Signin  from './src/screens/Signin';

export default function App() {
  return (
    <View>
      <AuthProvider>
      <Signin />
      {/* <Signup /> */}
      </AuthProvider>
    </View>
  );
}