import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
          <Text>This Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})