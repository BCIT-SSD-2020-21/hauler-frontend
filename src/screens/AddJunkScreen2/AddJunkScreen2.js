import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddItemScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <Text>Junk Screen 2</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddJunkScreen3')} ><Text>Next</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})