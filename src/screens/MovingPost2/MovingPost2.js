import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovingPost2({ navigation }) {

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> MOVING </Text>
          <Text> PICK UP LOCATION </Text>
          <TextInput style={styles.inputLine1} placeholder='Province' />
          <TextInput style={styles.inputLine1} placeholder='City' />
          <TextInput style={styles.inputLine1} placeholder='Street Address' />
          <TextInput style={styles.inputLine1} placeholder='Zip Code' />
          <TextInput style={styles.inputLine1} placeholder='Contact Person' />
          <TextInput style={styles.inputLine1} placeholder='Contact Number' />
          <TextInput style={styles.inputLine2} placeholder='Special Instructions' />
          <TextInput style={styles.inputLine1} placeholder='CAD $$' />
          <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MovingPost3')} style={styles.button} ><Text style={styles.btnText}>Next</Text></TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerSlider: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
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