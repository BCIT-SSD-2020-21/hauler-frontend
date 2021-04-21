import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Profile() {
    const onSignOutClicked = async () => {
       console.log("logout clicked")
    }

    return (
        <View style={styles.container}>
            <View
                style={{ flex: 1, width: '100%' }}>
                <Image source={require('../../assets/haulerLogo.png')} style={styles.logo} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSignOutClicked()}>
                    <Text style={styles.buttonTitle}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop: 100,
    },
    email: {
        color: '#73AB84',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})