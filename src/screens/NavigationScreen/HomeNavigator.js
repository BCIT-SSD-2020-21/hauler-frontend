import React from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../SigninScreen/Signin';
import MyPostList from '../MyPostListScreen/MyPostList';
import Signup from '../SignupScreen/Signup';
import ServiceProviderScreen from '../ServiceProviderScreen/ServiceProviderScreen';
import JobOffers from '../JobOffers/JobOffers';
import AddJunkNavigator from '../NavigationScreen/AddJunkNavigator';
//import ServiceScreenNavigator from '../NavigationScreen/ServiceScreenNavigator';
import ServiceProviderNavigator from './ServiceProviderNavigator';
import SignUpScreen2 from '../SignupScreen/SignUpScreen2'
import OfferDetails from '../OfferDetailsScreen/OfferDetails';
import PostDetails from '../PostDetailsScreen/PostDetails';
import ErrandScreenNavigator from './ErrandNavigator';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            initialRouteName='MyPostList'
            screenOptions={{
                headerShown: true,
                title: 'Hauler',
            }}>
            <HomeStack.Screen
                name='Signin'
                component={Signin}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='Signup'
                component={Signup}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='SignUpScreen2'
                component={SignUpScreen2}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='ServiceProviderNavigator'
                component={ServiceProviderNavigator}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='MyPostList'
                component={MyPostList}
                options={{ headerRight: () => <MenuIcon /> }}
            />
             <HomeStack.Screen
                name='PostDetails'
                component={PostDetails}
                options={{ headerRight: () => <MenuIcon /> }}
            />
            <HomeStack.Screen name='JobOffers' component={JobOffers} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeStack.Screen name='OfferDetails' component={OfferDetails} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeStack.Screen name='AddJunkNavigator' component={AddJunkNavigator} options={{ headerRight: () => <MenuIcon /> }} />
            <HomeStack.Screen name='ErrandNavigator' component={ErrandScreenNavigator} options={{ headerRight: () => <MenuIcon /> }} />

        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
