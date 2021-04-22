import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddJunkScreen2 from '../AddJunkScreen2/AddJunkScreen2'
import AddJunkScreen3 from '../AddJunkScreen3/AddJunkScreen3'
import MenuIcon from './MenuIcon';
import AddItemScreen from '../AddItemScreen/AddItemScreen';

const JunkScreenStack = createStackNavigator()
export default function JunkScreenNavigator() {
    return (
        <JunkScreenStack.Navigator initialRouteName='AddItemScreen' screenOptions={{
            headerShown: true,
            title: 'Hauler',
        }}>
            <JunkScreenStack.Screen name='AddItemScreen' component={AddItemScreen} options={{ headerTitle: 'User Service Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='AddJunkScreen2' component={AddJunkScreen2} options={{ headerTitle: 'User Service Screen', headerRight: () => <MenuIcon /> }} />
            <JunkScreenStack.Screen name='AddJunkScreen3' component={AddJunkScreen3} options={{ headerTitle: 'User Add Item Screen', headerRight: () => <MenuIcon /> }} />
        </JunkScreenStack.Navigator>
    )
}