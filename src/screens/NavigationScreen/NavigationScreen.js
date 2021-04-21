import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import ServiceScreenNavigator from './ServiceScreenNavigator';

const Drawer = createDrawerNavigator();

export default function NavigationScreen() {
    return (
        <Drawer.Navigator initialRouteName='ServiceScreen'>
            <Drawer.Screen name="Home" component={HomeNavigator} />
            <Drawer.Screen name="Post A Job" component={ServiceScreenNavigator} />
            <Drawer.Screen name="Profile" component={ProfileNavigator} />
        </Drawer.Navigator>
    )
}


