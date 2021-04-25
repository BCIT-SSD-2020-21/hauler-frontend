import React, { useState }from 'react'
import { Text, View, TextInput, Picker, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDown from 'react-native-dropdown-menu';

export default function AddItemScreen({ navigation }) {
    const[selectedweight, setSelectedWeight] = useState('Select')
    const[selectedquantity, setSelectedQuantity] = useState('Select')

    return (
        <ScrollView>
            <View style={styles.container}>
            <Text>Add Items </Text>
            <TextInput style={styles.inputLine1} placeholder='Post Heading' />
            <TextInput style={styles.inputLine2} placeholder='Item Name / List of Items / Description' />
            <Picker selectedValue={selectedweight} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
                <Picker.Item label="Light 0-20kgs" value="light" />
                <Picker.Item label="Medium 21-50Kgs" value="medium" />
                <Picker.Item label="Heavy 50Kgs & above" value="heavy" />
            </Picker>
            <Picker selectedValue={selectedquantity} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
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
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Upload Image</Text></TouchableOpacity>
            </View>
            <View style={styles.imageRow}>
                <View style={styles.imageColumn}>
                <Image style={styles.image} source={{uri:'https://www.supplypost.com/Moxie/Files/HEAVY%20HAUL.jpg'}}/></View>
                <View style={styles.imageColumn}>
                <Image source={{uri:'https://www.logisticdynamics.com/wp-content/uploads/2017/01/eq12-1.jpeg'}}/></View>
                <View style={styles.imageColumn}>
                <Image source={{uri:'https://image.shutterstock.com/image-photo/big-rig-long-haul-industrial-260nw-1762531160.jpg'}}/></View>
                </View>

                <View style={styles.imageRow}>
                    <View style={styles.imageColumn}>
                    <Image source={{uri:'https://www.effectuation.org/wp-content/uploads/2016/08/U-Haul-1200x656.jpg'}}/></View>
                    <View style={styles.imageColumn}>
                    <Image source={{uri:'https://media-exp1.licdn.com/dms/image/C561BAQGeoODWyXQujA/company-background_10000/0/1576006955491?e=2159024400&v=beta&t=NxUjpgsOeQmnnesMer32t89wdFdNOAWg7qdoCvR9c6U'}}/></View>
                    <View style = {styles.imageColumn}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iNd9M5e6riVgLLME2Bid7-2C0CXeVFjZ42T9bSGM1_IhSkHTjhyiMtkbsHsD3nAOs48&usqp=CAU'}}/>
                    </View>
                </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddJunkScreen2')} style={styles.button}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
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
        height: 100,
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
    image:{
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain', 
    },
    imageRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    imageColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
    },
})