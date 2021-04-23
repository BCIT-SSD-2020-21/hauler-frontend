import React, { useState }from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDown from 'react-native-dropdown-menu';

export default function AddItemScreen({ navigation }) {
    const[selectedweight, setSelectedWeight] = useState('Select')
    const[selectedquantity, setSelectedQuantity] = useState('Select')

    return (
        <View style={styles.container}>
          <Text>Add Items </Text>
          <TextInput style={styles.input} placeholder='Item Name' />
          <TextInput style={styles.input} placeholder='Lenght' />
          <TextInput style={styles.input} placeholder='Width' />
          <Picker selectedValue={selectedweight} style={{height: 50, width: 200}} onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
            <Picker.Item label="Light 0-20kgs" value="light" />
            <Picker.Item label="Medium 21-50Kgs" value="medium" />
            <Picker.Item label="Heavy 50Kgs & above" value="heavy" />
          </Picker>
          <Picker selectedValue={selectedquantity} style={{height: 50, width: 200}} onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
            <Picker.Item label="1"  />
            <Picker.Item label="2"  />
            <Picker.Item label="3"  />
            <Picker.Item label="4"  />
            <Picker.Item label="5"  />
            <Picker.Item label="6"  />
            <Picker.Item label="7"  />
            <Picker.Item label="8"  />
            <Picker.Item label="9"  />
            <Picker.Item label="10"  />
          </Picker>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Upload Image</Text></TouchableOpacity>
          <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AddJunkScreen2')} style={styles.button}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
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
    }
})