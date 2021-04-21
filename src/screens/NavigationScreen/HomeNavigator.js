import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../SigninScreen/Signin';
import Home from '../HomeScreen/Home';
import Signup from '../SignupScreen/Signup';

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
                name='Home'
                component={Home}
                options={{ headerRight: () => <MenuIcon /> }}
            />

        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
