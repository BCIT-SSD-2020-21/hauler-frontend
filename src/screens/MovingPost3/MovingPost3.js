import React, { useState, setState } from 'react'
import { Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';

export default function MovingPost3({ navigation }) {

    const [sliderValue, setSliderValue] = useState(50);

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> MOVING </Text>
          <Text> DROP OFF LOCATION </Text>
          <TextInput style={styles.inputLine1} placeholder='Province' />
          <TextInput style={styles.inputLine1} placeholder='City' />
          <TextInput style={styles.inputLine1} placeholder='Street Address' />
          <TextInput style={styles.inputLine1} placeholder='Zip Code' />
          <TextInput style={styles.inputLine1} placeholder='Contact Person' />
          <TextInput style={styles.inputLine1} placeholder='Contact Number' />
          <TextInput style={styles.inputLine2} placeholder='Special Instructions' />
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerSlider}>
                {/*Text to show slider value*/}
                <Text style={{color: 'black'}}>
                    Your Price Value : $ {sliderValue}
                </Text>
                {/*Slider with max, min, step and initial value*/}
                <Slider
                maximumValue={1000}
                minimumValue={50}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue}
                onValueChange={
                    (sliderValue) => setSliderValue(sliderValue)
                }
                />
            </View>
          </SafeAreaView>
          <TextInput style={styles.inputLine1} placeholder='CAD $$' onValueChange={(sliderValue) => setSliderValue(sliderValue)}/>
          <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MovingSummary')} style={styles.button} ><Text style={styles.btnText}>Submit</Text></TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerSlider: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
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
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        display: 'flex',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
})