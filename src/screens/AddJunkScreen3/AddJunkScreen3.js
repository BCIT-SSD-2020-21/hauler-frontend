import React, {useContext} from 'react'
import { ScrollView, TouchableOpacity, Text, View, Image,StyleSheet, Platform } from 'react-native'
import { postJunkItem } from '../../../network';
import { Context } from '../../context/ContextProvider';

export default function AddJunkScreen3({ navigation, route }) {

    const {image,selectedweight,selectedquantity, postHeading, description, city, province, zipCode, specialInstructions, contactPerson, phoneNumber, streetAddress, sliderValue} = route.params;

    const service = "Junk Removal"
    const { currentUser } = useContext(Context)

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.screenHeading}> Junk Summary </Text>
        <View style={styles.view}>
          <Text style={styles.text1} >Post Heading: </Text><Text style={styles.text2}>{postHeading}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Post Description: </Text><Text style={styles.text2}>{description}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Item Weigth:</Text><Text style={styles.text2}>{selectedweight}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Number of Items: </Text><Text style={styles.text2}>{selectedquantity}</Text></View>

          <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 20, marginLeft: 25}} >Pick Up Details: </Text>

          <View style={styles.view}>
          <Text style={styles.text1} >Contact Person: </Text><Text style={styles.text2}>{contactPerson}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Phone Number: </Text><Text style={styles.text2}>{phoneNumber}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Street Address: </Text><Text style={styles.text2}>{streetAddress}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >City: </Text><Text style={styles.text2}>{city}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Province: </Text><Text style={styles.text2}>{province}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Zip Code: </Text><Text style={styles.text2}>{zipCode}</Text></View>

          <View style={styles.view}>
          <Text style={styles.text1} >Special Instructions: </Text><Text style={styles.text2}>{specialInstructions}</Text></View>

          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={styles.imageDisplay} />}
          </View>

          <View style={styles.view}>
          <Text style={styles.text1} >Quoted Price: </Text><Text style={styles.text2}>{sliderValue}</Text></View>
          <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItemScreen')}><Text style={styles.buttonTitle}> Edit </Text></TouchableOpacity>
          </View> 
          <View >
          <TouchableOpacity style={styles.button}><Text style={styles.buttonTitle} 
          onPress={async () => { await postJunkItem(
            currentUser.uid,
            service,
            Platform.OS === "android" ? image.replace("file:///", "file://") : image.replace("file://", ""),
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
    view: {
        flexDirection: 'row'
    }
})