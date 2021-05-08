import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import SelectProvince from '../../components/SelectProvince/SelectProvince';

export default function MovingPost3({ navigation, route}) {

    const [sliderValue, setSliderValue] = useState(50);
    const [dropOffContactPerson, setDropOffContactPerson] = useState('')
    const [dropOffPhoneNumber, setDropOffPhoneNumber] = useState('')
    const [dropOffStreetAddress, setDropOffStreetAddress] = useState('')
    const [dropOffCity, setDropOffCity] = useState('')
    const [dropOffProvince, setDropOffProvince] = useState('')
    const [dropOffZipCode, setDropOffZipCode] = useState('')
    const [dropOffSpecialInstructions, setDropOffSpecialInstructions] = useState('')
    const {image,selectedweight,selectedquantity,postHeading,description, contactPerson, city, province, zipCode, specialInstructions, phoneNumber, streetAddress} = route.params;

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.screenHeading}> Add Drop Off Details </Text>

          <Text style={styles.text}> Contact Person : </Text>  
          <TextInput style={styles.inputLine1}
            onChangeText={(contactPerson) => {setDropOffContactPerson(contactPerson)}}
            value={dropOffContactPerson}
          />

          <Text style={styles.text}> Phone Number : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(phoneNumber) => {setDropOffPhoneNumber(phoneNumber)}}
            value={dropOffPhoneNumber}
          />

          <Text style={styles.text}> Street Address : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(streetAddress) => {setDropOffStreetAddress(streetAddress)}}
            value={dropOffStreetAddress}
          />

          <Text style={styles.text}> City : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(city) => {setDropOffCity(city)}}
            value={dropOffCity}
          />

          <SelectProvince
            province={dropOffProvince}
            province={setDropOffProvince}
          />

          <Text style={styles.text}> Zip Code : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(zipCode) => {setDropOffZipCode(zipCode)}}
            value={dropOffZipCode}
          />

          <Text style={styles.text}> Special Instructions : </Text>
          <TextInput style={styles.inputLine2}
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
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('MovingSummary', {image: image, selectedweight:  selectedweight,selectedquantity: selectedquantity, postHeading: postHeading, description: description, city: city, province: province, zipCode: zipCode, specialInstructions: specialInstructions, contactPerson: contactPerson, phoneNumber: phoneNumber, streetAddress: streetAddress, dropOffCity: dropOffCity, dropOffContactPerson: dropOffContactPerson, dropOffPhoneNumber: dropOffPhoneNumber, dropOffProvince: dropOffProvince, dropOffStreetAddress: dropOffStreetAddress, dropOffZipCode: dropOffZipCode, dropOffSpecialInstructions: dropOffSpecialInstructions, sliderValue: sliderValue })} 
          style={styles.button} >
              <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    marginVertical: 20
  },
  screenHeading: {
    fontSize: 30,
    fontWeight: '500',
    marginLeft: 20
  },
  inputLine1: {
    height: 25,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 30,
    paddingLeft: 16,
    width: '90%',
    borderBottomWidth: 1.0,
    borderColor: '#BFBFBF',
  },
  inputLine2: {
      height: 100,
      width: '90%',
      borderRadius: 5,
      overflow: 'hidden',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 30,
      paddingLeft: 16,
      borderWidth: 1.0,
      borderColor: '#BFBFBF'
  },
button: {
  backgroundColor: '#0177FC',
  marginLeft: 30,
  marginRight: 30,
  marginTop: 20,
  height: 48,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: 'center'
},
buttonTitle: {
  color: 'white',
  fontSize: 16,
  fontWeight: "bold"
},
text: {
  color: '#BFBFBF',
  marginLeft: 25,
  fontWeight: 'bold',
  marginTop: 20
},
containerSlider: {
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  backgroundColor: '#ecf0f1',
},
})