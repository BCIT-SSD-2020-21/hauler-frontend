import React, { useState } from 'react'
import { Text, View} from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete, GooglePlacesDetailsQuery  } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import {GOOGLE_MAP_API} from '@env';

export default function ErrandPost2({ navigation, route }) {

    const [pickUpAddress, setPickUpAddress] = useState('')

    const {image, selectedweight, selectedquantity, postHeading, description, service} = route.params;

   return (
        // <SafeAreaView forceInset = {{top: 'always'}}>
        <View style={styles.container}>
          <Text style={styles.text}> Enter pick up location </Text>
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
                  onPress={(data, details) => {setPickUpAddress(details)}
                     }
                  value={pickUpAddress}
                  onFail={(error) => console.error(error)} 
                  query={{
                    key: GOOGLE_MAP_API,
                    language: 'en', // language of the results
                  }}
                />

          <TouchableOpacity onPress={() => navigation.navigate('ErrandPost3', {
            image: image, 
            selectedweight:  selectedweight,
            selectedquantity: selectedquantity, 
            postHeading: postHeading, 
            description: description, 
            pickUpAddress: pickUpAddress,
            service: service
          })} 
          style={styles.button} >
              <Text style={styles.buttonTitle}>Next</Text>
            </TouchableOpacity>
          </View>
          // </SafeAreaView>
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