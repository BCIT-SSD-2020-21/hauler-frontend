import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceProviderScreen from '../ServiceProviderScreen/ServiceProviderScreen';
import ServiceScreen from '../ServiceScreen/ServiceScreen'

const ServiceProviderStack = createStackNavigator();

const ServiceProviderNavigator = () => {
    return(
        <ServiceProviderStack.Navigator initialRouteName='ServiceProviderScreen' screenOptions={{
            headerShown: true,
            title: '',
        }}>
            <ServiceProviderStack.Screen name='ServiceProvider' component={ServiceProviderScreen} options={{ headerRight: () => <MenuIcon /> }} />
            <ServiceProviderStack.Screen name='Post A Job' component={ServiceScreen} options={{ headerRight: () => <MenuIcon /> }} />
        </ServiceProviderStack.Navigator>
    )
}