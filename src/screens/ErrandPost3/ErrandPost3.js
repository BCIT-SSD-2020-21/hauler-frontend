import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import SelectDropOffProvince from '../../components/SelectDropOffProvince/SelectDropOffProvince';

export default function ErrandPost3({ navigation, route }) {

    const [pickContactPerson, setPickContactPerson] = useState('')
    const [pickUpPhoneNumber, setPickUpPhoneNumber] = useState('')
    const [pickUpSpecialInstructions, setPickUpSpecialInstructions] = useState('')
    const [dropOffContactPerson, setDropOffContactPerson] = useState('')
    const [dropOffPhoneNumber, setDropOffPhoneNumber] = useState('')
    const [dropOffSpecialInstructions, setDropOffSpecialInstructions] = useState('')
    const [sliderValue, setSliderValue] = useState(50);
    const { image, selectedweight, selectedquantity, postHeading, description, pickUpAddress, service } = route.params;

    return (
        <ScrollView>
        <View style={styles.container}>

          <Text> ERRAND </Text>
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
       
         <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ErrandSummary', {
            image: image, 
            selectedweight: selectedweight, 
            selectedquantity: selectedquantity, 
            postHeading: postHeading, 
            description: description,
            pickUpAddress:pickUpAddress, 
            dropOffAddress:dropOffAddress, 
            pickContactPerson: pickContactPerson, 
            pickUpPhoneNumber: pickUpPhoneNumber, 
            pickUpSpecialInstructions: pickUpSpecialInstructions, 
            pickUpSpecialInstructions: pickUpSpecialInstructions, 
            dropOffContactPerson: dropOffContactPerson, 
            dropOffPhoneNumber: dropOffPhoneNumber, 
            dropOffSpecialInstructions: dropOffSpecialInstructions, 
            sliderValue: sliderValue,
            service: service })} 
          style={styles.button}>
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