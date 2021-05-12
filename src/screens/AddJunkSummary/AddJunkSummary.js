import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { postItem } from '../../../network';
import PostInfo from '../../components/PostInfo/PostInfo';
import { Context } from '../../context/ContextProvider';

export default function AddJunkSummary({ navigation, route }) {

    const { image, selectedweight, selectedquantity, postHeading, description, pickUpAddress, pickContactPerson, pickUpPhoneNumber, pickUpSpecialInstructions, sliderValue } = route.params;

    const pickUpAddressLat = pickUpAddress.geometry.location.lat
    const pickUpAddressLng = pickUpAddress.geometry.location.lng

    const service = "Junk"
    const { currentUser } = useContext(Context)

    return (
        <ScrollView>
            <View style={styles.container}>
                <PostInfo
                    postHeading={postHeading}
                    description={description}
                    pickUpAddress={pickUpAddress}
                    image={image}
                    selectedweight={selectedweight}
                    selectedquantity={selectedquantity}
                    pickContactPerson={pickContactPerson}
                    pickUpPhoneNumber={pickUpPhoneNumber}
                    pickUpSpecialInstructions={pickUpSpecialInstructions}
                    sliderValue={sliderValue}
                    dropOffAddress=''
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItemScreen')}><Text style={styles.buttonTitle}> Edit </Text></TouchableOpacity>
                <View >
                    <TouchableOpacity style={styles.button}
                        onPress={async () => {
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
                            ); navigation.navigate('Confirmation')
                        }}><Text style={styles.buttonTitle}>  Post the Job </Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginVertical: 20
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
    view: {
        flexDirection: 'row'
    }
})