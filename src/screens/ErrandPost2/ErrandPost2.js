import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView, Picker, Dimensions} from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API} from '@env';
import MapView from 'react-native-maps';


export default function ErrandPost2({ navigation, route }) {

    // const [pickUpAddress, setpickUpAddress] = useState('')
    // const [dropOffAddress, setDropOffAddress] = useState('')

    const {image, selectedweight, selectedquantity, postHeading, description} = route.params;

    // const googleAPI = GOOGLE_MAP_API


   return (
     <View>
    <View style={styles.container}>
      <Text>Pick Up Location</Text>
    <GooglePlacesAutocomplete
      placeholder="Search"
      query={{
        key: GOOGLE_MAP_API,
        language: 'en', // language of the results
      }}
      onPress={(data, details = null) => console.log(data)}
      onFail={(error) => console.error(error)}
    />
     {/* <Text>Drop off Location</Text>
    <GooglePlacesAutocomplete
      placeholder="Search"
      query={{
        key: GOOGLE_MAP_API,
        language: 'en', // language of the results
      }}
      onPress={(data, details = null) => console.log(data)}
      onFail={(error) => console.error(error)}
    /> */}
    
  {/* </View>
  <View style={styles.containerMap}>
  <MapView style={styles.map} />
</View> */}
</View>
</View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
  },
  containerMap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})