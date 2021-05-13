import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {  getOnePost } from '../../../network';
import { Context } from '../../context/ContextProvider';
import PostInfo from '../../components/PostInfo/PostInfo';

export default function PostDetails({ navigation, route }) {
    const { currentUser } = useContext(Context)

    const [posts, setPosts] = useState('')
    const [error, setError] = useState('')
    const { postId } = route.params;

    const onEditPressed = () => {
        console.log("Edit clicked")
    }

    const onDeletePress = () =>{
        console.log("Delete clicked")
    }

    useEffect(() => {
        (async () => {
            setError('')
            const post = await getOnePost(postId)
            console.log(post)
            setPosts(post)
        })()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.postinfo}> 
                    {posts &&
                <PostInfo
                image='' 
                selectedweight={posts.loadWeight} 
                selectedquantity={posts.numberOfItems} 
                postHeading={posts.postHeading} 
                description={posts.postDescription} 
                pickUpAddress={posts.pickUpAddress} 
                pickContactPerson= {posts.pickUpContactPerson} 
                pickUpPhoneNumber= {posts.pickUpContactNumber}
                pickUpSpecialInstructions={posts.pickUpSpecialInstruction}
                sliderValue= {posts.price} 
                dropOffAddress= {posts.dropOffAddress && posts.dropOffAddress}
                dropOffContactPerson = {posts.dropOffContactPerson && posts.dropOffContactPerson}
                dropOffContactNumber= {posts.dropOffContactNumber && posts.dropOffContactNumber}
                dropOffSpecialInstruction={posts.dropOffSpecialInstruction && posts.dropOffSpecialInstruction}
                distance={posts.distance && posts.distance}
                /> 
                    }
                    </Text>
                    {posts && posts.status === "Active" ? 
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.acceptButton]}
                                onPress={() => onEditPressed()}>
                                <Text style={styles.buttonTitle}>EDIT POST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.declineButton]}
                                onPress={() => onDeletePress()}>
                                <Text style={styles.buttonTitle}>DELETE POST</Text>
                            </TouchableOpacity>
                            </View>
                        :
                        <View></View>}
                
                <Text > {error && alert(error)}</Text> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '2%',
        width: '100%',
        height: '100%',
        paddingVertical: 10
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        marginTop: 30
    },
    button: {
        marginVertical: 10,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        marginHorizontal: '2%',
    },
    offerButton:{
        backgroundColor: '#E0E0E0',
    }, 
    acceptButton:{
        backgroundColor: '#0077FC',
    },
    declineButton:{
        backgroundColor: '#DE0303',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    offerButtonTitle:{
        color: 'black'
    },
})