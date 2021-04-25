import React, { setState } from 'react'
import { Text, View, ScrollView, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import RangeSlider from 'rn-range-slider';

export default function AddJunkScreen2({ navigation }) {

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text>Junk Removal</Text>
          <TextInput style={styles.inputLine1} placeholder='Province' />
          <TextInput style={styles.inputLine1} placeholder='City' />
          <TextInput style={styles.inputLine1} placeholder='Street Address' />
          <TextInput style={styles.inputLine1} placeholder='Zip Code' />
          <TextInput style={styles.inputLine1} placeholder='Contact Person' />
          <TextInput style={styles.inputLine1} placeholder='Contact Number' />
          <TextInput style={styles.inputLine2} placeholder='Special Instructions' />
          {/* <RangeSlider 
            style={{width:160, height: 80}}
            gravity={'center'}
            min={50}
            max={1000}
            step={20}
            selectionColor='#3df'
            blankColor='#f618'
            onValueChnaged={(low, high, fromUser) => {
                this.setState({rangeLow: low, rangeHigh: high})
            }}/> */}
          <TextInput style={styles.inputLine1} placeholder='CAD $$' />
          <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AddJunkScreen3')} style={styles.button} ><Text style={styles.btnText}>Submit</Text></TouchableOpacity>
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