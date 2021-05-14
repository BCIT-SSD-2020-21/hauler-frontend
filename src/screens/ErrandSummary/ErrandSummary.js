import React, { useContext, useState, useRef } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../context/ContextProvider';
import { postItem } from '../../../network';
import PostInfo from '../../components/PostInfo/PostInfo'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API } from '@env';

export default function ErrandSummary({ navigation, route }) {
    const { width, height } = Dimensions.get('window');
    const mapView = useRef();
    const { image, selectedweight, selectedquantity, postHeading, description, pickUpAddress, 
        dropOffAddress, pickContactPerson, pickUpPhoneNumber, pickUpSpecialInstructions, 
        dropOffContactPerson, dropOffPhoneNumber, dropOffSpecialInstructions, sliderValue, service } = route.params;

    const { currentUser } = useContext(Context)

    const pickUpAddressLat = pickUpAddress.geometry.location.lat
    const pickUpAddressLng = pickUpAddress.geometry.location.lng
    const dropOffAddressLat = dropOffAddress.geometry.location.lat
    const dropOffAddressLng = dropOffAddress.geometry.location.lng

    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [coordinates, setCoordinates] = useState([
        {
            latitude: pickUpAddressLat,
            longitude: pickUpAddressLng,
        },
        {
            latitude: dropOffAddressLat,
            longitude: dropOffAddressLng,
        }
    ])
    return (
        <ScrollView>
            <View style={styles.container}>
                <PostInfo 
                    postHeading={postHeading}
                    description={description}
                    selectedweight={selectedweight}
                    selectedquantity={selectedquantity}
                    pickUpAddress={pickUpAddress}
                    image={image}
                    pickContactPerson={pickContactPerson}
                    pickUpPhoneNumber={pickUpPhoneNumber}
                    pickUpSpecialInstructions={pickUpSpecialInstructions}
                    dropOffAddress= {dropOffAddress}
                    dropOffContactPerson={dropOffContactPerson}
                    dropOffContactNumber={dropOffPhoneNumber}
                    sliderValue={sliderValue}
                    distance={distance}
                    duration={duration}
                 />
                    <MapView
                        style={styles.map}
                        ref={mapView}
                    >
                        {coordinates.map((coordinate, index) =>
                            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}
                            />
                        )}
                        <MapViewDirections
                            apikey={GOOGLE_MAP_API}
                            origin={coordinates[0]}
                            waypoints={coordinates}
                            destination={coordinates[coordinates.length - 1]}
                            strokeWidth={3}
                            strokeColor='#DE0303'
                            optimizeWaypoints={true}
                            onReady={result => {
                                setDistance(result.distance)
                                setDuration(result.duration)
                                mapView.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (width / 20),
                                        bottom: (height / 20),
                                        left: (width / 20),
                                        top: (height / 20),
                                    }
                                }
                                );
                            }}
                            onError={(errorMessage) => {
                                console.log(`Error: ${errorMessage}`);
                            }}
                        />
                    </MapView>
                </View>
                
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ErrandPost1')}><Text style={styles.buttonTitle}> Edit </Text></TouchableOpacity>
                    
                    <View>
                    <TouchableOpacity style={styles.button} onPress={async () => {
                        await postItem(
                            currentUser.uid,
                            service,
                            postHeading,
                            description,
                            selectedweight,
                            selectedquantity,
                            image,
                            sliderValue,
                            pickUpAddress.formatted_address,
                            pickUpAddress.vicinity,
                            pickUpAddressLat,
                            pickUpAddressLng,
                            pickContactPerson,
                            pickUpPhoneNumber,
                            pickUpSpecialInstructions,
                            dropOffAddress.formatted_address,
                            dropOffAddress.vicinity,
                            dropOffAddressLat,
                            dropOffAddressLng,
                            dropOffContactPerson,
                            dropOffPhoneNumber,
                            dropOffSpecialInstructions,
                            distance
                        ); navigation.navigate('Confirmation')
                    }}><Text style={styles.buttonTitle}> Post the Job </Text></TouchableOpacity>
                    </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        marginVertical: 20,
        backgroundColor: 'white',
        
    },
    screenHeading: {
        fontSize: 30,
        fontWeight: '500',
        marginLeft: 20
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    imageDisplay: {
        width: 150,
        height: 150,
        margin: 5,
        resizeMode: 'contain',
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
        height: 300,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight:10
    },
})