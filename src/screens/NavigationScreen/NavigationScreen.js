import React from 'react'
import { createDrawerNavigation } from '@react-navigation/drawer';

const Drawer = createDrawerNavigation();

export default function NavigationScreen() {
    return(
        <Drawer.Navigator initialRouteName='ServiceScreen'>
            <Drawer.Screen name ="ServiceScreen" component={ServiceScreenNavigator} />
        </Drawer.Navigator>
    )
}

import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../ServiceScreen/ServiceScreen';
import MenuIcon from './MenuIcon';

const ServiceScreenStack = createStackNavigator()
function ServiceScreenNavigator(){
    return(
        <ServiceScreenStack.Navigator>
            <ServiceScreenStack.Screen name='ServiceScreen' component={ServiceScreen} options={{headerTitle: 'User Service Screen', headerLeft: () => <MenuIcon /> }} />
        </ServiceScreenStack.Navigator>
    )
}