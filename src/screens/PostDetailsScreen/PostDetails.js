import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {  getOnePost } from '../../../network';
import { Context } from '../../context/ContextProvider';

export default function PostDetails({ navigation, route }) {
    const { currentUser } = useContext(Context)

    const [posts, setPosts] = useState('')
    const [error, setError] = useState('')
    const { postId } = route.params;

    useEffect(() => {
        (async () => {
            setError('')
            const post = await getOnePost(postId)
            setPosts(post)
        })()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text > {error && alert(error)}</Text>   
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '2%',
        width: '100%',
        height: '100%'
    },
})