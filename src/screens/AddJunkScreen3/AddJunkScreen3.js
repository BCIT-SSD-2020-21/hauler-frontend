import React, {useContext} from 'react'
import { Text, View, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { postJunkItem } from '../../../network';
import { Context } from '../../context/ContextProvider';

export default function AddJunkScreen3({ navigation, route }) {

    const {image,selectedweight,selectedquantity, postHeading, description, city, province, zipCode, specialInstructions, contactPerson, phoneNumber, streetAddress, sliderValue} = route.params;

    const service = "Junk Removal"
    const { currentUser } = useContext(Context)

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.screenHeading}> Post Summary </Text>
          <Text style={styles.text1} >Post Heading: {postHeading}</Text>
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
          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
          <Text style={styles.text1} >Quoted Price: {sliderValue}</Text>
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItemScreen')}><Text style={styles.btnText}> Edit </Text></TouchableOpacity>
          </View> 
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText} 
          onPress={async () => { await postJunkItem(
            currentUser.uid,
            service,
            image,
            selectedweight,
            selectedquantity,
            postHeading,
            description,
            city,
            province,
            zipCode,
            specialInstructions,
            contactPerson,
            phoneNumber,
            streetAddress,
            sliderValue); navigation.navigate('Confirmation')}}> Post the Job </Text></TouchableOpacity>
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
    image:{
        width: 150,
        height: 150,
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
})