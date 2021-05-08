import React, { useContext} from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { postItem } from '../../../network';
import { Context } from '../../context/ContextProvider';

export default function MovingSummary({ navigation, route}) {

    const {image, selectedweight,selectedquantity, postHeading, description, city, province, zipCode, specialInstructions, contactPerson, phoneNumber, streetAddress, dropOffCity, dropOffContactPerson, dropOffPhoneNumber, dropOffProvince, dropOffStreetAddress, dropOffZipCode, dropOffSpecialInstructions, sliderValue} = route.params;
    const service = "Moving"

    const { currentUser } = useContext(Context)

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.screenHeading}> Post Summary </Text>
        <View style={styles.view}>
          <Text style={styles.text1} >Post Heading: </Text><Text style={styles.text1}>{postHeading}</Text></View>
          <Text style={styles.text1} >Post Description: {description}</Text>
          <Text style={styles.text1} >Item Weigth: {selectedweight}</Text>
          <Text style={styles.text1} >Number of Items: {selectedquantity}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 20, marginLeft: 25}} >Pick Up Details: </Text>
          <Text style={styles.text1} >Contact Person: {contactPerson}</Text>
          <Text style={styles.text1} >Phone Number: {phoneNumber}</Text>
          <Text style={styles.text1} >Street Address: {streetAddress}</Text>
          <Text style={styles.text1} >City: {city}</Text>
          <Text style={styles.text1} >Province: {province}</Text>
          <Text style={styles.text1} >Zip Code: {zipCode}</Text>
          <Text style={styles.text1} >Special Instructions: {specialInstructions}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 20, marginLeft: 25}} > Drop Off Details: </Text>
          <Text style={styles.text1} >Contact Person: {dropOffContactPerson}</Text>
          <Text style={styles.text1} >Phone Number: {dropOffPhoneNumber}</Text>
          <Text style={styles.text1} >Street Address: {dropOffStreetAddress}</Text>
          <Text style={styles.text1} >City: {dropOffCity}</Text>
          <Text style={styles.text1} >Province: {dropOffProvince}</Text>
          <Text style={styles.text1} >Zip Code: {dropOffZipCode}</Text>
          <Text style={styles.text1} >Special Instructions: {dropOffSpecialInstructions}</Text>
          <View style={styles.imageContainer}>
              <Image style={styles.imageDisplay} source={{uri:image}}/>
          </View>
          <Text style={styles.text1} >Quoted Price: {sliderValue}</Text>
          <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MovingPost1')}><Text style={styles.buttonTitle}> Edit </Text></TouchableOpacity>
          </View> 
          <View>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonTitle} 
          onPress={async () => { await postItem(
                currentUser.uid,
                image,
                service,
                postHeading,
                description,
                selectedweight,
                selectedquantity,
                contactPerson,
                phoneNumber,
                streetAddress,
                city,
                province,
                zipCode,
                specialInstructions,
                sliderValue,
                dropOffContactPerson,
                dropOffPhoneNumber,
                dropOffStreetAddress,
                dropOffCity,
                dropOffProvince,
                dropOffZipCode,
                dropOffSpecialInstructions); navigation.navigate('Confirmation')}}> Post the Job </Text></TouchableOpacity>
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
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 20,
        position: 'relative'
    },
    view: {
        flexDirection: 'row'
    }
})