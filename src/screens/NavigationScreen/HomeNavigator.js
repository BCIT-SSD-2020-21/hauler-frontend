import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../SigninScreen/Signin';
import Home from '../HomeScreen/Home';
import Signup from '../SignupScreen/Signup';
import ServiceProviderScreen from '../ServiceProviderScreen/ServiceProviderScreen';
import JobStatus from '../../screens/JobStatus/JobStatus';
import AddJunkNavigator from '../NavigationScreen/AddJunkNavigator';
//import ServiceScreenNavigator from '../NavigationScreen/ServiceScreenNavigator';
import ServiceProviderNavigator from './ServiceProviderNavigator';
import SignUpScreen2 from '../SignupScreen/SignUpScreen2'

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                title: 'Hauler',
            }}>
            <HomeStack.Screen
                name='Signin'
                component={Signin}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='Signup'
                component={Signup}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='SignUpScreen2'
                component={SignUpScreen2}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='ServiceProviderNavigator'
                component={ServiceProviderNavigator}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='Home'
                component={Home}
                options={{ headerRight: () => <MenuIcon /> }}
            />
            <HomeStack.Screen name='JobStatus' component={JobStatus} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeStack.Screen name='AddJunkNavigator' component={AddJunkNavigator} options={{ headerRight: () => <MenuIcon /> }} />

        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
