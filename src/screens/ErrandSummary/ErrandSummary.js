import React, {useContext} from 'react'
import { Text, View, TextInput, Image, Dimensions } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../context/ContextProvider';
import { postItem } from '../../../network';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_MAP_API} from '@env';

export default function ErrandSummary({ navigation, route }) {

    const{image, selectedweight, selectedquantity, postHeading, description,pickUpAddress, dropOffAddress, pickContactPerson, pickUpPhoneNumber, pickUpSpecialInstructions, dropOffContactPerson, dropOffPhoneNumber, dropOffSpecialInstructions, sliderValue} = route.params;

    const service = "Errands"
    const { currentUser } = useContext(Context)

    const googleAPI = GOOGLE_MAP_API

    // this.state = {
    //     pickUpAddress: [],
    // }

    getLocationData(() => {
        Geocoder.setApiKey({googleAPI});

        Geocoder.getFromLocation ({pickUpAddress}).then(
            JSON => {
                var location = json.results[0].geometry.location;
                console.log(location.lat + location.lng)
            }
        )
    })

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> Errand Summary </Text>
          <Text style={styles.inputLine1} >Post Heading: {postHeading}</Text>
          <Text style={styles.inputLine1} >Post Description: {description}</Text>
          <Text style={styles.inputLine1} >Item Weigth: {selectedweight}</Text>
          <Text style={styles.inputLine1} >Number of Items: {selectedquantity}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >Pick Up Details: </Text>
          <Text style={styles.inputLine1} >Contact Person: {pickContactPerson}</Text>
          <Text style={styles.inputLine1} >Phone Number: {pickUpPhoneNumber}</Text>
          <Text style={styles.inputLine2} >Street Address: {pickUpAddress.description}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {pickUpSpecialInstructions}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} > Drop Off Details: </Text>
          <Text style={styles.inputLine1} >Contact Person: {dropOffContactPerson}</Text>
          <Text style={styles.inputLine1} >Phone Number: {dropOffPhoneNumber}</Text>
          <Text style={styles.inputLine2} >Street Address: {dropOffAddress.description}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {dropOffSpecialInstructions}</Text>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: image}}/>
          </View>
          <Text style={styles.inputLine1}>Quoted Price: {sliderValue}</Text>
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ErrandPost1')}><Text style={styles.btnText}> Edit </Text></TouchableOpacity>
          </View> 

          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText} onPress={async () => { await postItem(
                currentUser.uid,
                service,
                image, 
                selectedweight,
                selectedquantity,
                postHeading,
                description,
                pickUpAddress,
                dropOffAddress,
                pickContactPerson,
                pickUpPhoneNumber,
                pickUpSpecialInstructions,
                dropOffContactPerson,
                dropOffPhoneNumber,
                dropOffSpecialInstructions,
                sliderValue);navigation.navigate('Confirmation')}}> Post the Job </Text></TouchableOpacity>
          </View>
        </View>
        <View>
        <TouchableOpacity>Get Location Data</TouchableOpacity>
        </View>
        <View style={styles.containerMap}>
          <MapView style={styles.map} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain', 
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