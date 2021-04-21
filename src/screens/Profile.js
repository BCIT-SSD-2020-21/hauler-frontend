import React, { useState, useContext } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Context } from '../context/ContextProvider'
import { StyleSheet } from 'react-native';

export default function Profile() {
    const { signout, currentUser } = useContext(Context)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const onSignOutClicked = async () => {
        try {
            setError("")
            setLoading(true)
            await signout()
        } catch {
            setError("Failed to Log out")
        }
        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <View
                style={{ flex: 1, width: '100%' }}>
                <Image source={require('../../assets/haulerLogo.png')} style={styles.logo} />
                <Text > {error && alert(error)}</Text>
                <Text style={styles.userEmail}>
                    Current user : {currentUser && currentUser.email}
                </Text>
                <TouchableOpacity
                    disabled={loading}
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
    userEmail: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
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