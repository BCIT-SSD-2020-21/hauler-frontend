import React, { useState, useContext } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { Context } from '../../context/ContextProvider'
import { StyleSheet } from 'react-native';
import { signUp } from '../../../network';

export default function Signup({ navigation }) {
    const { signup, currentUser } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [dateOfBirth, setDob] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [creditCardNumber, setCreditCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')

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
                profilePicUrl,
                // dateOfBirth,
                province,
                city,
                streetAddress,
                unitNumber,
                email,
                contactNumber,
                creditCardNumber,
                // expiryDate,
                cvv
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
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor="#C0C0C0"
                        secureTextEntry
                        onChangeText={(password) => { setError(""); setConfirmPassword(password) }}
                        value={confirmPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='First Name'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(firstName) => { setError(""); setFirstName(firstName) }}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Last Name'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(lastName) => { setError(""); setLastName(lastName) }}
                        value={lastName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Date of Birth'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(date) => { setError(""); setDob(date) }}
                        value={dateOfBirth}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='profilePicUrl'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(profilePicUrl) => { setError(""); setProfilePicUrl(profilePicUrl) }}
                        value={profilePicUrl}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Province'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(province) => { setError(""); setProvince(province) }}
                        value={province}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='City'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(city) => { setError(""); setCity(city) }}
                        value={city}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Unit Number'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(unitNumber) => { setError(""); setUnitNumber(unitNumber) }}
                        value={unitNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Street Address'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(streetAddress) => { setError(""); setStreetAddress(streetAddress) }}
                        value={streetAddress}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Contact Number'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(contactNumber) => { setError(""); setContactNumber(contactNumber) }}
                        value={contactNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Credit Card Number'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(number) => { setError(""); setCreditCardNumber(number) }}
                        value={creditCardNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Expiry Date'
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(date) => { setError(""); setExpiryDate(date) }}
                        value={expiryDate}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='CVV'
                        placeholderTextColor="#C0C0C0"
                        secureTextEntry
                        onChangeText={(cvv) => { setError(""); setCvv(cvv) }}
                        value={cvv}
                    />

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
        marginVertical: 20
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
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