import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Confirmation({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/IMG-20210504-WA0000.jpg')} style={styles.imageDisplay}/>
                </View>
                <Text style={styles.text}>Successfully Posted !!</Text>
                <Text style={styles.text}>Thank You!</Text>
                <Text style={styles.text1}>Your job has been posted</Text>
            </View>
            
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={styles.buttonTitle}>Return To My Job List </Text></TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        height: '100%',
        paddingVertical: 10
    },
    text: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 30,
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
    imageContainer: {
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
})