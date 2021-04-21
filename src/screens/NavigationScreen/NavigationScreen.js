import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

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

import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../ServiceScreen/ServiceScreen';
import MenuIcon from './MenuIcon';

const ServiceScreenStack = createStackNavigator()
function ServiceScreenNavigator() {
    return (
        <ServiceScreenStack.Navigator>
            <ServiceScreenStack.Screen name='Post A Job' component={ServiceScreen} options={{ headerTitle: 'User Service Screen', headerRight: () => <MenuIcon /> }} />
        </ServiceScreenStack.Navigator>
    )
}
