import React, { useState, useEffect }from 'react'
import { Text, View, TextInput, Picker, ScrollView, Image,  Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function AddItemScreen({ navigation }) {

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
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    // const pickImageCamera = async () => {
    //   let result = await ImagePicker.launchCameraAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [1, 1],
    //     quality: 1,
    //   });
  
    //   console.log(result);
  
    //   if (!result.cancelled) {
    //     setImage(result.uri);
    //   }
    // };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text> Junk Removal </Text>
            <TextInput style={styles.inputLine1} placeholder='Post Heading' 
            onChangeText={(postHeading) => {setPostHeading(postHeading)}} 
            value={postHeading}
            />

            <TextInput style={styles.inputLine2} placeholder='Item Name / List of Items / Description' 
            onChangeText={(description) => {setDescription(description)}} 
            value={description}
            />

            <Picker selectedValue={selectedweight} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
                <Picker.Item label="No selection" value="None selected" />
                <Picker.Item label="Light 0-20kgs" value="Light 0-20kgs" />
                <Picker.Item label="Medium 21-50Kgs" value="Medium 21-50Kgs" />
                <Picker.Item label="Heavy 50Kgs & above" value="Heavy 50Kgs & above" />
            </Picker>
            <Picker selectedValue={selectedquantity} style={{height: 50, width: 380}} onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
                <Picker.Item label="1" value="1"/>
                <Picker.Item label="2" value="2" />
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
                <TouchableOpacity style={styles.button} onPress={() => pickImageAlbum() }><Text style={styles.btnText}>Upload Image</Text></TouchableOpacity>
            </View>
            <View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View> 
                <TouchableOpacity 
                onPress={() => navigation.navigate('AddJunkScreen2',
                {image: image,
                selectedweight:  selectedweight,
                selectedquantity: selectedquantity, 
                postHeading: postHeading, 
                description: description}
                )} style={styles.button}>
                <Text style={styles.btnText}>Next</Text></TouchableOpacity>
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
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain"
      }
})