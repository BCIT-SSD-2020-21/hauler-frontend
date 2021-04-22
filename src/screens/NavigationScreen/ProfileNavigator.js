import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../ProfileScreen/Profile'

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown: true,
                title: '',
            }}>
            <ProfileStack.Screen
                name='Profile'
                component={Profile}
                options={{ headerRight: () => <MenuIcon /> }}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigator;
