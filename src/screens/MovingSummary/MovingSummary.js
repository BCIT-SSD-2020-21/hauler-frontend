import React from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function MovingSummary({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> Moving Summary </Text>
          <TextInput style={styles.inputLine1} placeholder='Contact Person' />
          <TextInput style={styles.inputLine1} placeholder='Contact Number' />
          <TextInput style={styles.inputLine2} placeholder='PickUp Address' />
          <TextInput style={styles.inputLine2} placeholder='Drop Off Location' />
          <TextInput style={styles.inputLine2} placeholder='Post Description' />
          <TextInput style={styles.inputLine1} placeholder='Number of Items' />
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: 'https://www.supplypost.com/Moxie/Files/HEAVY%20HAUL.jpg'}}/>
          </View>
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MovingPost1')}><Text style={styles.btnText}> Edit </Text></TouchableOpacity>
          </View> 
          <TextInput style={styles.inputLine1} placeholder='CAD $$' />
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText} onPress={() => navigation.navigate('Confirmation')}> Post the Job </Text></TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputLine1: {
        height: 40,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    inputLine2: {
        height: 150,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain', 
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        display: 'flex',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
})