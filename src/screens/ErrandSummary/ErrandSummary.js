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
              <Image style={styles.image} source={{uri: image}}/>
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
        height: 400,
      },
})