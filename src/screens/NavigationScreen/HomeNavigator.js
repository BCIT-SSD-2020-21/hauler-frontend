import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../SigninScreen/Signin';
import Home from '../HomeScreen/Home';
import Signup from '../SignupScreen/Signup';
import Profile from '../ProfileScreen/Profile'

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='Signin'
      screenOptions={{
        headerShown: true,
        title: '',
        headerStyle: {
          backgroundColor: 'black',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      <HomeStack.Screen
        name='SigninScreen'
        component={Signin}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={{headerRight: () => <MenuIcon />}}
      />
       <HomeStack.Screen
        name='Profile'
        component={Profile}
        options={{headerRight: () => <MenuIcon />}}
      />
      <HomeStack.Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
