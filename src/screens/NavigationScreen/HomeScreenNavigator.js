import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import JobStatus from '../JobStatus/JobStatus';
import Home from '../HomeScreen/Home'
import AddJunkScreen3 from '../AddJunkScreen3/AddJunkScreen3';

const HomeScreenStack = createStackNavigator();

const HomeScreenNavigator = () => {
    return(
        <HomeScreenStack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: true,
            title: 'Hauler',
        }}>
            <HomeScreenStack.Screen name='Home' component={Home} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeScreenStack.Screen name='Job Status' component={JobStatus} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeScreenStack.Screen name='Junk Screen' component={AddJunkScreen3} options={{ headerRight: () => <MenuIcon /> }} />
        </HomeScreenStack.Navigator>
    );
};

export default HomeScreenNavigator;