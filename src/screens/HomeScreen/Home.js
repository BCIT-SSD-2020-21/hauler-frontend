import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'
import styles from './styles';

export default function Home({ navigation }) {

return (
    <View>
        <Text> MY POSTED JOBS </Text>
        <View style={styles.cardContainer}>
            <Card>
                <Image source={{ uri: 'https://www.supplypost.com/Moxie/Files/HEAVY%20HAUL.jpg'}} onPress={() => navigation.navigate('JobStatus')}/>
                <Card.Divider />
                <Card.Title style={styles.cardTitle}> Vancouver Haulers </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Accepted/Pending' />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Edit' onPress={() => navigation.navigate('')} />
            </Card>
        </View>
    </View>
    )
};