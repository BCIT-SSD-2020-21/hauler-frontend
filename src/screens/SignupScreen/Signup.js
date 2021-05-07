import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function Signup({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDob] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    

    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={{ flex: 1, width: '100%' }}>
                        <View style={styles.avatarView}>
                            <Avatar
                                size={125}
                                rounded 
                                source={{uri: 'https://siddharthagarwalclasses.com/wp-content/uploads/2020/05/Human-Face-6.png'}}
                            />
                        </View>
                    <Text > {error && alert(error)}</Text>

                    <Text style={styles.text}> First Name : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(firstName) => { setError(""); setFirstName(firstName) }}
                        value={firstName}
                    />

                    <Text style={styles.text}> Last Name : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(lastName) => { setError(""); setLastName(lastName) }}
                        value={lastName}
                    />

                    <Text style={styles.text}> Email : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(email) => { setError(""); setEmail(email) }}
                        value={email}
                    />

                    <Text style={styles.text}> Password : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        secureTextEntry
                        onChangeText={(password) => { setError(""); setPassword(password) }}
                        value={password}
                    />

                    <Text style={styles.text}> Confirm Password : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        secureTextEntry
                        onChangeText={(password) => { setError(""); setConfirmPassword(password) }}
                        value={confirmPassword}
                    />

                    <Text style={styles.text}> Date Of Birth : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(date) => { setError(""); setDob(date) }}
                        value={dateOfBirth}
                    />

                    <Text style={styles.text}> Unit Number : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(unitNumber) => { setError(""); setUnitNumber(unitNumber) }}
                        value={unitNumber}
                    />

                    <Text style={styles.text}> Street Address : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(streetAddress) => { setError(""); setStreetAddress(streetAddress) }}
                        value={streetAddress}
                    />

                    <Text style={styles.text}> City : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(city) => { setError(""); setCity(city) }}
                        value={city}
                    />

                    <Text style={styles.text}> Province : </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(province) => { setError(""); setProvince(province) }}
                        value={province}
                    />
                    
                    <Text style={styles.text}> Phone Number : </Text>                    
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#C0C0C0"
                        onChangeText={(contactNumber) => { setError(""); setContactNumber(contactNumber) }}
                        value={contactNumber}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignUpScreen2', {firstName: firstName, lastName: lastName, email: email, password: password, confirmPassword: confirmPassword, contactNumber: contactNumber, province: province, city: city, streetAddress: streetAddress, unitNumber: unitNumber, dateOfBirth: dateOfBirth})}>
                        <Text style={styles.buttonTitle}> Next Step </Text>
                    </TouchableOpacity>
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
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
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
    avatarView: {
        marginLeft: 25,
        marginRight: 200,
        marginTop: 40
    },
    text: {
        color: '#BFBFBF',
        marginLeft: 35
    }
})