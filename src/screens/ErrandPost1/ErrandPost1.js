import React, { useState, useEffect }from 'react'
import { Text, View, TextInput, Picker, ScrollView, Image, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import SelectWeight from '../../components/SelectWeight/SelectWeight'

export default function ErrandPost1({ navigation }) {

    const[selectedweight, setSelectedWeight] = useState('')
    const[selectedquantity, setSelectedQuantity] = useState('')
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
            <Text style={styles.screenHeading}> Add Item </Text>

            <Text style={styles.text}> Post Heading : </Text>
            <TextInput style={styles.inputLine1} 
                onChangeText={(postHeading) => {setPostHeading(postHeading)}}
                value={postHeading}
            />

            <Text style={styles.text}> Post Description : </Text>
            <TextInput style={styles.inputLine2} 
                onChangeText={(description) => {setDescription(description)}}
                value={description}
            />

            <SelectWeight
                selectedweight={selectedweight}
                setSelectedWeight={setSelectedWeight}
            />

            <View>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonTitle}
                onPress={() => pickImageAlbum() } >Upload Image</Text>
                </TouchableOpacity>
            </View>

            <View>
            {image && <Image source={{ uri: image }} style={styles.imageDisplay} />}
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ErrandPost2', {selectedweight: selectedweight, image: image, selectedquantity: selectedquantity, postHeading: postHeading, description: description})} style={styles.button}><Text style={styles.buttonTitle}>Next</Text></TouchableOpacity>
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
        fontSize: 40,
        fontWeight: '500',
        marginLeft: 20
      },
      inputLine1: {
        height: 25,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 30,
        paddingLeft: 16,
        width: '90%',
        borderBottomWidth: 1.0,
        borderColor: '#BFBFBF',
      },
      inputLine2: {
          height: 100,
          width: '90%',
          borderRadius: 5,
          overflow: 'hidden',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 30,
          paddingLeft: 16,
          borderWidth: 1.0,
          borderColor: '#BFBFBF'
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
    imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageDisplay:{
        width: 200,
        height: 200,
        marginLeft: 50,
        marginTop: 5,
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
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain"
      },
    text: {
        color: '#BFBFBF',
        marginLeft: 25,
        fontWeight: 'bold',
        marginTop: 20
      },
})