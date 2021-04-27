import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../ServiceScreen/ServiceScreen';
import MenuIcon from './MenuIcon';
import AddJunkNavigator from './AddJunkNavigator';
import MovingNavigator from './MovingNavigator';

const ServiceScreenStack = createStackNavigator()
export default function ServiceScreenNavigator() {
    return (
        <ServiceScreenStack.Navigator initialRouteName='Post A Job'>
            <ServiceScreenStack.Screen name='Post A Job' component={ServiceScreen} options={{ headerTitle: 'User Service Screen', headerRight: () => <MenuIcon /> }} />
            <ServiceScreenStack.Screen name='AddJunkNavigator' component={AddJunkNavigator} options={{ headerShown: false }} />
            <ServiceScreenStack.Screen name='MovingNavigator' component={MovingNavigator} options={{ headerShown: false }} />
        </ServiceScreenStack.Navigator>

    )
}