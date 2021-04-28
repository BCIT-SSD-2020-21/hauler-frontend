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
            title: 'Hauler',
        }}>
            <MovingScreenStack.Screen name='MovingPost1' component={MovingPost1} options={{ headerTitle: 'User Moving Screen', headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingPost2' component={MovingPost2} options={{ headerTitle: 'User Moving Item Screen', headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingPost3' component={MovingPost3} options={{ headerTitle: 'User Moving Item Screen', headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='MovingSummary' component={MovingSummary} options={{ headerTitle: 'User Moving Item Screen', headerRight: () => <MenuIcon /> }} />
            <MovingScreenStack.Screen name='Confirmation' component={Confirmation} options={{ headerTitle: 'Confirmation Screen', headerRight: () => <MenuIcon /> }} />
        </MovingScreenStack.Navigator>
    )
}