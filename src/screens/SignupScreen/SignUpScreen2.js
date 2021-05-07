import React, { useState, useContext } from 'react'
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { Context } from '../../context/ContextProvider'
import { StyleSheet } from 'react-native';
import { signUp } from '../../../network';


export default function SignUpScreen2({ navigation, route }) {

    const { signup, currentUser } = useContext(Context)
    const [creditCardNumber, setCreditCardNumber] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const { firstName, lastName, email, password, confirmPassword, contactNumber, province, city, streetAddress, unitNumber, dateOfBirth} = route.params;

    const onSignUpClicked = async () => {
        if (password !== confirmPassword) {
            setError("Password does not match")
            return
        }
        try {
            setError("")
            setLoading(true)
            const response = await signup(email, password)
            const currentUid = response.user.uid
            await signUp(
                currentUid,
                firstName,
                lastName,
                dateOfBirth,
                province,
                city,
                streetAddress,
                unitNumber,
                email,
                contactNumber,
                creditCardNumber,
                expiryDate,
                cvv,
                password,
                confirmPassword
            )
            navigation.navigate('ServiceProviderNavigator')
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={{ flex: 1, width: '100%' }}>
                        
                    <Text > {error && alert(error)}</Text>
                    <Text style={styles.text1}> Add Your Card Details </Text>

                    <View style={styles.details}>
                    <Text style={styles.text}> Card Number : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(number) => { setError(""); setCreditCardNumber(number) }}
                        value={creditCardNumber}
                    />

                    <Text style={styles.text}> Expiry Date : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(date) => { setError(""); setExpiryDate(date) }}
                        value={expiryDate}
                    />

                    <Text style={styles.text}> CVV : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        secureTextEntry
                        onChangeText={(cvv) => { setError(""); setCvv(cvv) }}
                        value={cvv}
                    />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        disabled={loading}
                        onPress={() => onSignUpClicked()}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                    <View style={styles.option}>
                        <Text style={styles.optionText}>
                            Already have an account?
                        <Text style={styles.optionLink}
                                onPress={() => navigation.navigate('Signin')}>
                                Log in</Text>
                        </Text>
                        <Text style={styles.email}>
                            Current user : {currentUser && currentUser.email}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
    },
    input: {
        height: 25,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        width: '80%',
        borderBottomWidth: 1.0,
        borderColor: '#BFBFBF',
    },
    email: {
        color: '#73AB84',
        textAlign: 'center'
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
    option: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    optionText: {
        fontSize: 16,
        color: '#BFBFBF'
    },
    optionLink: {
        color: "#BB4430",
        fontWeight: "bold",
        fontSize: 16
    },
    avatarView: {
        marginLeft: 25,
        marginRight: 200,
        marginTop: 40
    },
    text: {
        color: '#BFBFBF',
        marginLeft: 35,
    },
    text1: {
        color: 'black',
        fontSize: 30,
        fontWeight: '100',
        marginLeft: 20,
        marginTop: 100 
    },
    details: {
        marginTop: 50
    }
})