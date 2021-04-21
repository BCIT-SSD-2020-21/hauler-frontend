import React, { useState, useContext } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { Context } from '../../context/ContextProvider';
import { StyleSheet } from 'react-native';

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const { signin, currentUser } = useContext(Context)

    const onSigninClicked = async () => {

        try {
            setError("")
            setLoading(true)
            await signin(email, password)
        } catch {
            setError("Failed to Login")
        }
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <View
                style={{ flex: 1, width: '100%' }}>
                <Image source={require('../../../assets/haulerLogo.png')} style={styles.logo} />
                <Text > {error && alert(error)}</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#C0C0C0"
                    onChangeText={(email) => { setError(""); setEmail(email) }}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#C0C0C0"
                    secureTextEntry
                    onChangeText={(password) => { setError(""); setPassword(password) }}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    disabled={loading}
                    onPress={() => onSigninClicked()}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
                <View style={styles.option}>
                    <Text style={styles.optionText}>
                        Create an account?
                        <Text style={styles.optionLink}>
                            Register</Text>
                    </Text>
                    <Text style={styles.email}>
                        Current user : {currentUser && currentUser.email}
                    </Text>
                </View>
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
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
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
    option: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    optionText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    optionLink: {
        color: "#BB4430",
        fontWeight: "bold",
        fontSize: 16
    }
})