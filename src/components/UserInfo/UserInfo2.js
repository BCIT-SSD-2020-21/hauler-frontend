import React from 'react'
import {StyleSheet, Text, View, TextInput } from 'react-native'

export default function UserInfo2 ({ creditCardNumber, expiryDate, cvv, cardHolderName, setCreditCardNumber, setExpiryDate,
    setCvv, setCardHolderName}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Card Number'
                placeholderTextColor='#C0C0C0'
                onChangeText={(number) => { setError(""); setCreditCardNumber(number) }}
                value={creditCardNumber}
            />
            <TextInput
                style={styles.input}
                placeholder='Expiry Date'
                placeholderTextColor='#C0C0C0'
                onChangeText={(date) => { setError(""); setExpiryDate(date) }}
                value={expiryDate}
            />
            <TextInput
                style={styles.input}
                placeholder='CVV'
                placeholderTextColor='#C0C0C0'
                onChangeText={(cvv) => { setError(""); setCvv(cvv) }}
                value={cvv}
            />
            <TextInput
                style={styles.input}
                placeholder='Card Holder Name'
                placeholderTextColor='#C0C0C0'
                onChangeText={(name) => { setError(""); setCardHolderName(name) }}
                value={cardHolderName}
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
    },
})