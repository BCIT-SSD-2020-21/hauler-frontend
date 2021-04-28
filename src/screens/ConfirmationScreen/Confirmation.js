import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Confirmation({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Confirmation</Text>
                <Text style={styles.text}>Your Job Has been Posted</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={styles.btnText}>Return To Home </Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 30,
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