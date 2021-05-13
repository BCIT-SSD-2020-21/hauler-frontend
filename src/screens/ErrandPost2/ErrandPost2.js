import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker, Dimensions} from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete, GooglePlacesDetailsQuery  } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import {GOOGLE_MAP_API} from '@env';

import SelectPickUpProvince from '../../components/SelectPickUpProvince/SelectPickUpProvince';

export default function ErrandPost2({ navigation, route }) {

    const [pickUpAddress, setPickUpAddress] = useState('')

    const {image, selectedweight, selectedquantity, postHeading, description, service} = route.params;

   return (
        // <SafeAreaView forceInset = {{top: 'always'}}>
        <View style={styles.container}>
          <Text>Enter your pick up location</Text>
              <GooglePlacesAutocomplete
                  placeholder="Full Address"
                  minLength={2}
                  fetchDetails= {true}
                  onPress={(data, details) => {setPickUpAddress(details)}
                     }
                  value={pickUpAddress}
                  onFail={(error) => console.error(error)} 
                  query={{
                    key: GOOGLE_MAP_API,
                    language: 'en', // language of the results
                  }}
                />



              <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ErrandPost4', {
            image: image, 
            selectedweight:  selectedweight,
            selectedquantity: selectedquantity, 
            postHeading: postHeading, 
            description: description, 
            pickUpAddress: pickUpAddress,
            service: service
          })} 
          style={styles.button} >
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
          </View>
          // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 10,
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