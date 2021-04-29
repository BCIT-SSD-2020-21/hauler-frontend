import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import JobStatus from '../JobStatus/JobStatus';
import Home from '../HomeScreen/Home'

const HomeScreenStack = createStackNavigator();

const HomeScreenNavigator = () => {
    return(
        <HomeScreenStack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: true,
            title: '',
        }}>
            <ServiceProviderStack.Screen name='Home' component={Home} options={{ headerRight: () => <MenuIcon /> }} />
            <ServiceProviderStack.Screen name='Job Status' component={JobStatus} options={{ headerRight: () => <MenuIcon /> }} />
        </HomeScreenStack.Navigator>
    );
};

export default HomeScreenNavigator;