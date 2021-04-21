import React from 'react';
import { View } from 'react-native';
import {AuthProvider } from './src/context/ContextProvider';
import  Signup  from './src/screens/Signup';
import  Signin  from './src/screens/Signin';
import  Profile  from './src/screens/Profile';

export default function App() {
  return (
    <View>
      <AuthProvider>
      <Profile />
      {/* <Signin /> */}
      {/* <Signup /> */}
      </AuthProvider>
    </View>
  );
}