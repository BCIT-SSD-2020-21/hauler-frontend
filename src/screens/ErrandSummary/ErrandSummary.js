import React, {useContext} from 'react'
import { Text, View, TextInput, Image, Dimensions } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../context/ContextProvider';
import { postItem } from '../../../network';
import MapView from 'react-native-maps';
import {GOOGLE_MAP_API} from '@env';

export default function ErrandSummary({ navigation, route }) {

    const{image, selectedweight, selectedquantity, postHeading, description,pickUpAddress, dropOffAddress, pickContactPerson, pickUpPhoneNumber, pickUpSpecialInstructions, dropOffContactPerson, dropOffPhoneNumber, dropOffSpecialInstructions, sliderValue} = route.params;

    const service = "Errands"
    const { currentUser } = useContext(Context)

    const googleAPI = GOOGLE_MAP_API

    const pickUpAddressLat = pickUpAddress.geometry.location.lat
    const pickUpAddressLng = pickUpAddress.geometry.location.lng
    const dropOffAddressLat = dropOffAddress.geometry.location.lat
    const dropOffAddressLng = dropOffAddress.geometry.location.lng

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
          <Text style={styles.inputLine2} >Street Address: {pickUpAddress.formatted_address}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {pickUpSpecialInstructions}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} > Drop Off Details: </Text>
          <Text style={styles.inputLine1} >Contact Person: {dropOffContactPerson}</Text>
          <Text style={styles.inputLine1} >Phone Number: {dropOffPhoneNumber}</Text>
          <Text style={styles.inputLine2} >Street Address: {dropOffAddress.formatted_address}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {dropOffSpecialInstructions}</Text>
          <View style={styles.imageContainer}>
              <Image style={styles.imageDisplay} source={{uri:image}}/>
          </View>
          <Text style={styles.inputLine1}>Quoted Price: {sliderValue}</Text>


            <View style={styles.containerMap}>
                <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: pickUpAddressLat,
                    longitude: pickUpAddressLng,
                    latitudeDelta: 0.6,
                    longitudeDelta: 0.6

                }}>
                    <MapView.Marker
                        coordinate = {{
                            latitude: pickUpAddressLat,
                            longitude: pickUpAddressLng
                        }}
                        title={"Pick Up Location"}
                    />
                    <MapView.Marker
                       coordinate = {{
                        latitude: dropOffAddressLat,
                        longitude: dropOffAddressLng
                    }}
                    title={"Drop Off Location"}
                    />

                </MapView>
            </View>

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
      imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    imageDisplay:{
        width: 150,
        height: 150,
        margin: 5,
        resizeMode: 'contain', 
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
    text1: {
        color: '#BFBFBF',
        marginLeft: 25,
        fontWeight: 'bold',
        marginTop: 20
      },
    text2: {
        color: 'black',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 20,
        position: 'relative'
    },
    containerMap: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: 400,
      },
})