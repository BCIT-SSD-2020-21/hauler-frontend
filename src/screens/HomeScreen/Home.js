import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default function Home({ navigation }) {

return (
    <ScrollView>
    <View style={styles.container}>
        <Text> MY POSTED JOBS </Text>
        <View style={styles.cardContainer}>
            <Card>
                <TouchableOpacity onPress={() => navigation.navigate('JobStatus')}>
                <Image style={styles.cardImage} source={{ uri: 'https://www.supplypost.com/Moxie/Files/HEAVY%20HAUL.jpg'}}  /></TouchableOpacity>
                <Card.Divider />
                <Card.Title style={styles.cardTitle}> Vancouver Haulers </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Accepted/Pending' />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Edit' onPress={() => navigation.navigate('AddJunkNavigator')} />
            </Card>
        </View>
        <View style={styles.cardContainer}>
            <Card>
                <Image style={styles.cardImage} source={{ uri: 'https://threebestrated.ca/images/SmallMoves-Vancouver-BC.jpeg'}} />
                <Card.Divider />
                <Card.Title style={styles.cardTitle}> Surrey Movers </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Accepted/Pending' />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Edit' />
            </Card>
        </View>
        <View style={styles.cardContainer}>
            <Card>
                <Image style={styles.cardImage} source={{ uri: 'https://yocoman.com/wp-content/uploads/2019/05/earned-services.jpg'}} />
                <Card.Divider />
                <Card.Title style={styles.cardTitle}> Vancouver Errand </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Accepted/Pending' />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Edit' />
            </Card>
        </View>
    </View>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    cardContainer: {
        width: '100%'
    },
    cardText: {
        marginTop: 10,
        width: 300,
        textAlign: 'center'
    },
    cardTitle: {
        color: '#2EBCAC'
    },
    cardImage: {
        width: 250,
        height: 150,
        alignSelf: 'center'
    },
})