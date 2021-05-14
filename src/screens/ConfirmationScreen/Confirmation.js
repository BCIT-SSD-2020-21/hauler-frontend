import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Confirmation({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Successfully Posted !!</Text>
                <Text style={styles.text}>Thank You!</Text>
                <Text style={styles.text1}>Your job has been posted</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', { screen: 'MyPostList'})} style={styles.button}><Text style={styles.btnText}>Return To My Job List </Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 150,
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
})