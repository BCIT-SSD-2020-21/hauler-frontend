import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import Profile1 from '../ProfileScreen/Profile1';
import ServiceScreenNavigator from './ServiceScreenNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                goBack: 'history',
                style: {
                    backgroundColor: '#E0E0E0',
                    height: '8%',
                },
            }}
        >
            <BottomTab.Screen
                name="Home" 
                component={HomeNavigator}
                options={{
                    tabBarIcon: () =>
                        <FontAwesome name="home" size={25} color="black" />,
                }}
            />
            <BottomTab.Screen
                name="Post A Job" 
                component={ServiceScreenNavigator}
                options={{
                    tabBarIcon: () =>
                    <MaterialIcons name="post-add" size={25} color="black" />,
                }}
            />
            <BottomTab.Screen
                name='Profile'
                component={Profile1}
                options={{
                    tabBarIcon: () =>
                    <FontAwesome name="user" size={25} color="black" />
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigation;
