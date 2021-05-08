import React, { useState, useEffect }from 'react'
import { Text, View, TextInput, Picker, ScrollView, Image, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function ErrandPost1({ navigation }) {

    const[selectedweight, setSelectedWeight] = useState('Select')
    const[selectedquantity, setSelectedQuantity] = useState('Select')
    const[image, setImage] = useState(null);
    const [postHeading, setPostHeading] = useState('')
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImageAlbum = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
          //allowsMultipleSelection: true,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return (
        <ScrollView>
            <View style={styles.container}>
            <Text> ERRAND </Text>
            <TextInput style={styles.inputLine1} placeholder='Post Heading' 
                onChangeText={(postHeading) => {setPostHeading(postHeading)}}
                value={postHeading}
            />

            <TextInput style={styles.inputLine2} placeholder='Item Name / List of Items / Description' 
                onChangeText={(description) => {setDescription(description)}}
                value={description}
            />

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}
                onPress={() => pickImageAlbum() } >Upload Image</Text>
                </TouchableOpacity>
            </View>
            <View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ErrandPost2', {selectedweight: selectedweight, image: image, selectedquantity: selectedquantity, postHeading: postHeading, description: description})} style={styles.button}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
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