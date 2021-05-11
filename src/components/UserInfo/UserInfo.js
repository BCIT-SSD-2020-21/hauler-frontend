import React from 'react';
import { TextInput, View, Picker } from 'react-native';
import { StyleSheet } from 'react-native';

export default function UserInfo({ firstName, lastName, province, city, streetAddress,
    unitNumber, setCity, setStreetAddress, setUnitNumber, profilePicUrl, dateOfBirth, setDob, contactNumber, setContactNumber, setProvince, setFirstName, setLastName, setProfilePicUrl, setError }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='profilePicUrl'
                placeholderTextColor='#C0C0C0'
                onChangeText={(profilePic) => { setError(""); setProfilePicUrl(profilePic) }}
                value={profilePicUrl}
            />
            <TextInput
                style={styles.input}
                placeholder='First Name'
                placeholderTextColor='#C0C0C0'
                onChangeText={(fname) => { setError(""); setFirstName(fname) }}
                value={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder='Last Name'
                placeholderTextColor='#C0C0C0'
                onChangeText={(lname) => { setError(""); setLastName(lname) }}
                value={lastName}
            />
            <TextInput
                style={styles.input}
                placeholder='Date of Birth'
                placeholderTextColor='#C0C0C0'
                onChangeText={(date) => { setError(""); setDob(date) }}
                value={dateOfBirth}
            />
            <TextInput
                style={styles.input}
                placeholder='Province'
                placeholderTextColor='#C0C0C0'
                onChangeText={(province) => { setError(""); setProvince(province) }}
                value={province}
            />
            <TextInput
                style={styles.input}
                placeholder='City'
                placeholderTextColor='#C0C0C0'
                onChangeText={(city) => { setError(""); setCity(city) }}
                value={city}
            />
            <TextInput
                style={styles.input}
                placeholder='StreetAddress'
                placeholderTextColor='#C0C0C0'
                onChangeText={(streetAddress) => { setError(""); setStreetAddress(streetAddress) }}
                value={streetAddress}
            />
            <TextInput
                style={styles.input}
                placeholder='Unit Number'
                placeholderTextColor='#C0C0C0'
                onChangeText={(unitNumber) => { setError(""); setUnitNumber(unitNumber) }}
                value={unitNumber}
            />
            <TextInput
                style={styles.input}
                placeholder='Contact Number'
                placeholderTextColor='#C0C0C0'
                onChangeText={(number) => { setError(""); setContactNumber(number) }}
                value={contactNumber}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: '1%',
        marginHorizontal: '2%',
        paddingLeft: 16
    }
})

