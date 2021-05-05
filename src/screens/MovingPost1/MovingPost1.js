import React, { useState }from 'react'
import { Text, View, TextInput, Picker, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovingPost1({ navigation }) {

    const[selectedweight, setSelectedWeight] = useState('Select')
    const[selectedquantity, setSelectedQuantity] = useState('Select')
    const [postHeading, setPostHeading] = useState('')
    const [description, setDescription] = useState('')

    return (
        <ScrollView>
            <View style={styles.container}>
            <Text> MOVING </Text>
            <TextInput style={styles.inputLine1} placeholder='Post Heading' 
                onChangeText={(postHeading) => {setPostHeading(postHeading)}} 
                value={postHeading}
            />

            <TextInput style={styles.inputLine2} placeholder='Item Name / List of Items / Description' 
                onChangeText={(description) => {setDescription(description)}} 
                value={description}
            />
            <Picker selectedValue={selectedweight} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
                <Picker.Item label="Light 0-20kgs" value="Light" />
                <Picker.Item label="Medium 21-50Kgs" value="Medium" />
                <Picker.Item label="Heavy 50Kgs & above" value="Heavy" />
            </Picker>
            <Picker selectedValue={selectedquantity} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2"/>
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
            </Picker>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Upload Image</Text></TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
            <View style={styles.imageRow}>
                <View style={styles.imageColumn}>
                <Image style={styles.image} source={{uri:'https://threebestrated.ca/images/SmallMoves-Vancouver-BC.jpeg'}}/></View>
                <View style={styles.imageColumn}>
                <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/LUNa3tFlpG-rKwo7z2IglsU0rgnubN3o9JdO-Sb9jqWd4NCyb5ZW_1AzKiTwdhmpRHyWdNocQler50BcJqzZR18MJQdWBrk5vponPNZofKBVwkebBdSPcBsp7kFveEFtdGgN-Q'}}/></View>
                <View style={styles.imageColumn}>
                <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/ChtVFBUq1FxzdbuoXK6JYcDivJQ19403u-gIdk-QnJGy3z6-Va30RpAQGvsweNAQQunQRXWbXdPeORpyhdplFohIVaNAzk9o247Ri8vQ14GXGcuOkKa7rJXrebe4Ohc'}}/></View>
                </View>

                <View style={styles.imageRow}>
                    <View style={styles.imageColumn}>
                    <Image style={styles.image} source={{uri:'https://threebestrated.ca/images/AcademyMovers-Surrey-BC.jpeg'}}/></View>
                    <View style={styles.imageColumn}>
                    <Image style={styles.image} source={{uri:'https://5moversquotes.com/wp-content/uploads/2015/09/Local-and-Long-Distance-Movers-offer-a-wide-array-of-moving-services-and-moving-packages.jpg'}}/></View>
                    <View style = {styles.imageColumn}>
                    <Image style={styles.image} source={{uri:'https://moversdev.com/wp-content/uploads/2019/06/9.7.-ig-e1577379582500.jpg'}}/>
                    </View>
                </View>
                </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MovingPost2', {selectedweight:  selectedweight,selectedquantity: selectedquantity, postHeading: postHeading, description: description})} 
                style={styles.button}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
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