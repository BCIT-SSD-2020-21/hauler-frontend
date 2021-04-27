import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuIcon from './MenuIcon';
import Confirmation from '../ConfirmationScreen/Confirmation';

const JunkScreenStack = createStackNavigator()
export default function JunkScreenNavigator() {
    return (
        <JunkScreenStack.Navigator initialRouteName='MovingPost1' screenOptions={{
            headerShown: true,
            title: 'Hauler',
        }}>
            <JunkScreenStack.Screen name='MovingPost1' component={AddItemScreen} options={{ headerTitle: 'User Add Item Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='MovingPost2' component={AddJunkScreen2} options={{ headerTitle: 'User Add Item Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='MovingPost3' component={AddJunkScreen3} options={{ headerTitle: 'User Add Item Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='MovingSummary' component={AddJunkScreen3} options={{ headerTitle: 'User Add Item Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='Confirmation' component={Confirmation} options={{ headerTitle: 'Confirmation Screen', headerRight: () => <MenuIcon /> }} />
        </JunkScreenStack.Navigator>
    )
}