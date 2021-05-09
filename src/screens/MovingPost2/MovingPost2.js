import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectPickUpProvince from '../../components/SelectPickUpProvince/SelectPickUpProvince';

export default function MovingPost2({ navigation, route }) {

    const [contactPerson, setContactPerson] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [specialInstructions, setSpecialInstructions] = useState('')
    const {image,selectedweight,selectedquantity,postHeading,description} = route.params;

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.screenHeading}> Add Pick Up Details </Text>

          <Text style={styles.text}> Contact Person : </Text>
          <TextInput style={styles.inputLine1}  
            onChangeText={(contactPerson) => {setContactPerson(contactPerson)}}
            value={contactPerson}
          />

          <Text style={styles.text}> Phone Number : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(phoneNumber) => {setPhoneNumber(phoneNumber)}}
            value={phoneNumber}
          />

          <Text style={styles.text}> Street Address : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(streetAddress) => {setStreetAddress(streetAddress)}}
            value={streetAddress}
          />

          <Text style={styles.text}> City : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(city) => {setCity(city)}}
            value={city}
          />

          <SelectPickUpProvince
            province={province}
            setProvince={setProvince}
          />

          <Text style={styles.text}> Zip Code : </Text>
          <TextInput style={styles.inputLine1} 
            onChangeText={(zipCode) => {setZipCode(zipCode)}}
            value={zipCode}
          />

          <Text style={styles.text}> Special Instructions : </Text>
          <TextInput style={styles.inputLine2} 
            onChangeText={(specialInstructions) => setSpecialInstructions(specialInstructions)}
            value={specialInstructions}
          />
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('MovingPost3', {image: image, selectedweight:  selectedweight,selectedquantity: selectedquantity, postHeading: postHeading, description: description, city: city, province: province, zipCode: zipCode, specialInstructions: specialInstructions, contactPerson: contactPerson, phoneNumber: phoneNumber, streetAddress: streetAddress})} 
          style={styles.button} >
              <Text style={styles.buttonTitle}>Next</Text>
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
})