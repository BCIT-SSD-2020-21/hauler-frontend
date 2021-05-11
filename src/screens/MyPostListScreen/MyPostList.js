import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/SearchByService/SearchByService';
import SearchByLocation from '../../components/SearchByLocation/SearchByLocation';
import PostsList from '../../components/PostList/PostList'
import { Context } from '../../context/ContextProvider'
import { useIsFocused } from "@react-navigation/native";
import { getAllPosts, getPostsByIdAndLocation, getPostsByIdAndService } from '../../../network';

export default function MyPostList({ navigation }) {
    const { currentUser } = useContext(Context)
    const isFocused = useIsFocused();

    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [posts, setPosts] = useState('')

    const searchService = async (value) => {
        const posts = await getPostsByIdAndService(currentUser && currentUser.uid, value.service)
        setPosts(posts)
    }

    const searchLocation = async (value) => {
        const posts = await getPostsByIdAndLocation(currentUser && currentUser.uid, value.location)
        setPosts(posts)
    }
    
    const onActiveImagePress = async (value) => {
        console.log("Active post image pressed")
    }

    const onAcceptedDetails = async (value) => {
        console.log("In Progress post image pressed")
    }

    const onOffersPress = async (value) => {
        navigation.navigate('JobOffers')
    }

    useEffect(() => {
        currentUser &&
            (async () => {
                const posts = await getAllPosts(currentUser.uid)
                setPosts(posts)
            })()
    }, [isFocused])

return (
    <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
                searchService={searchService}
            />
            <PostsList
                posts={posts}
                onActiveImagePress={onActiveImagePress}
                onAcceptedDetails={onAcceptedDetails}
                onOffersPress={onOffersPress}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    }
})
