import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker, Dimensions} from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import {GOOGLE_MAP_API} from '@env';
// import MapView from 'react-native-maps';


export default function ErrandPost3({ navigation, route }) {

    const [dropOffAddress, setdropOffAddress] = useState('')

    const {image, selectedweight, selectedquantity, postHeading, description, pickUpAddress, service} = route.params;

   return (
    //  <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <Text style={styles.text}>Enter drop off location</Text>
              <GooglePlacesAutocomplete
                styles={{
                  textInput: {
                    backgroundColor: "#F5F5F5",
                    height: 44,
                    borderRadius: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginHorizontal: 20,
                    fontSize: 15,
                    flex: 1,
                  },
                  listView: {
                    paddingHorizontal: 20,
                  },
                }}
                  placeholder="Full Address"
                  minLength={2}
                  fetchDetails= {true}
                  onPress={(data, details = null) => {setdropOffAddress(details),
                    console.log(details)}
                     }
                  value={dropOffAddress}
                  onFail={(error) => console.error(error)}
                  query={{
                    key: GOOGLE_MAP_API,
                    language: 'en', // language of the results
                  }}
                />

          <TouchableOpacity onPress={() => navigation.navigate('ErrandPost4', {
            image: image, 
            selectedweight:  selectedweight,
            selectedquantity: selectedquantity, 
            postHeading: postHeading, 
            description: description, 
            pickUpAddress: pickUpAddress, 
            dropOffAddress: dropOffAddress,
            service: service
          })} 
          style={styles.button} >
              <Text style={styles.buttonTitle}>Next</Text>
            </TouchableOpacity>
          </View>
          // </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  text: {
    color: '#BFBFBF',
    marginLeft: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#0177FC',
    alignSelf: 'center',
    marginVertical: 10,
    width: '90%',
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center'
  },

})