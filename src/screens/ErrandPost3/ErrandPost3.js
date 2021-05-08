import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';

export default function ErrandPost3({ navigation, route }) {

    const [pickContactPerson, setPickContactPerson] = useState('')
    const [pickUpPhoneNumber, setPickUpPhoneNumber] = useState('')
    const [pickUpSpecialInstructions, setPickUpSpecialInstructions] = useState('')
    const [dropOffContactPerson, setDropOffContactPerson] = useState('')
    const [dropOffPhoneNumber, setDropOffPhoneNumber] = useState('')
    const [dropOffSpecialInstructions, setDropOffSpecialInstructions] = useState('')
    const [sliderValue, setSliderValue] = useState(50);
    const { image, selectedweight, selectedquantity, postHeading, description, contactPerson, phoneNumber, specialInstructions, zipCode, province, city, streetAddress} = route.params;

    return (
        <ScrollView>
        <View style={styles.container}>

          <Text> ERRAND </Text>
          <br></br>
          <Text> PICK UP DETAILS </Text>

          <TextInput style={styles.inputLine1} placeholder='Contact Person' 
            onChangeText={(contactPerson) => {setPickContactPerson(contactPerson)}}
            value={pickContactPerson}
          />

          <TextInput style={styles.inputLine1} placeholder='Phone Number' 
            onChangeText={(phoneNumber) => {setPickUpPhoneNumber(phoneNumber)}}
            value={pickUpPhoneNumber}
          />

          <TextInput style={styles.inputLine2} placeholder='Special Instructions' 
            onChangeText={(specialInstructions) => setPickUpSpecialInstructions(specialInstructions)}
            value={pickUpSpecialInstructions}
          />

          <Text> DROP OFF DETAILS </Text>

          <TextInput style={styles.inputLine1} placeholder='Contact Person' 
            onChangeText={(contactPerson) => {setDropOffContactPerson(contactPerson)}}
            value={dropOffContactPerson}
          />

          <TextInput style={styles.inputLine1} placeholder='Phone Number' 
            onChangeText={(phoneNumber) => {setDropOffPhoneNumber(phoneNumber)}}
            value={dropOffPhoneNumber}
          />

          <TextInput style={styles.inputLine2} placeholder='Special Instructions' 
            onChangeText={(specialInstructions) => setDropOffSpecialInstructions(specialInstructions)}
            value={dropOffSpecialInstructions}
          />

          <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerSlider}>
                {/*Text to show slider value*/}
                <Text style={{color: 'black'}}>
                    Your Price Value : $ {sliderValue}
                </Text>
                {/*Slider with max, min, step and initial value*/}
                <Slider
                maximumValue={1000}
                minimumValue={50}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue}
                onValueChange={
                    (sliderValue) => setSliderValue(sliderValue)
                }
                />
            </View>
          </SafeAreaView>
       
         <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ErrandSummary', {image: image, selectedweight: selectedweight, selectedquantity: selectedquantity, postHeading: postHeading, description: description, contactPerson: contactPerson, phoneNumber: phoneNumber, specialInstructions: specialInstructions, zipCode: zipCode, province: province, city: city, streetAddress: streetAddress, sliderValue: sliderValue, dropOffCity: dropOffCity, dropOffContactPerson: dropOffContactPerson, dropOffPhoneNumber: dropOffPhoneNumber, dropOffProvince: dropOffProvince, dropOffSpecialInstructions: dropOffSpecialInstructions, dropOffStreetAddress: dropOffStreetAddress, dropOffZipCode: dropOffZipCode})} 
          style={styles.button}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
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
        backgroundColor: '#0177FC',
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