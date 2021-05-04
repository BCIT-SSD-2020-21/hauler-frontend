import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovingPost2({ navigation }) {

    const [contactPerson, setContactPerson] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [specialInstructions, setSpecialInstructions] = useState('')

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> MOVING </Text>
          <Text> PICK UP LOCATION </Text>
          <TextInput style={styles.inputLine1} placeholder='Contact Person' 
            onChangeText={(contactPerson) => {setContactPerson(contactPerson)}}
            value={contactPerson}
          />

          <TextInput style={styles.inputLine1} placeholder='Phone Number' 
            onChangeText={(phoneNumber) => {setPhoneNumber(phoneNumber)}}
            value={phoneNumber}
          />

          <TextInput style={styles.inputLine1} placeholder='Street Address' 
            onChangeText={(streetAddress) => {setStreetAddress(streetAddress)}}
            value={streetAddress}
          />

          <TextInput style={styles.inputLine1} placeholder='City' 
            onChangeText={(city) => {setCity(city)}}
            value={city}
          />

          <Picker selectedValue={province} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) =>      setProvince(itemValue)}>
                <Picker.Item label="Alberta" value="Alberta" />
                <Picker.Item label="BC" value="BC" />
                <Picker.Item label="Ontario" value="Ontario" />
                <Picker.Item label="Quebec" value="Quebec" />
            </Picker>

          <TextInput style={styles.inputLine1} placeholder='Zip Code' 
            onChangeText={(zipCode) => {setZipCode(zipCode)}}
            value={zipCode}
          />

          <TextInput style={styles.inputLine2} placeholder='Special Instructions' 
            onChangeText={(specialInstructions) => setSpecialInstructions(specialInstructions)}
            value={specialInstructions}
          />
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