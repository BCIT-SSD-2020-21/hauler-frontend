import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuIcon from './MenuIcon';
import Confirmation from '../ConfirmationScreen/Confirmation';
import MovingPost1 from '../MovingPost1/MovingPost1';
import MovingPost2 from '../MovingPost2/MovingPost2';
import MovingPost3 from '../MovingPost3/MovingPost3';
import MovingSummary from '../MovingSummary/MovingSummary';

const MovingScreenStack = createStackNavigator()
export default function MovingScreenNavigator() {
    return (
        <MovingScreenStack.Navigator initialRouteName='MovingPost1' screenOptions={{
            headerShown: true,
            title: 'Moving Service',
        }}>
            <MovingScreenStack.Screen name='MovingPost1' component={MovingPost1} options={{ headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingPost2' component={MovingPost2} options={{ headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingPost3' component={MovingPost3} options={{ headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingSummary' component={MovingSummary} options={{ headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='Confirmation' component={Confirmation} options={{ headerRight: () => <MenuIcon /> }} />
        </MovingScreenStack.Navigator>
    )
}