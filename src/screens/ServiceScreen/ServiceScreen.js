import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ServiceScreen({ navigation }) {

    return(
        <View style = {styles.root}>
            <Text style={styles.text, styles.centerText}>Post A JOB</Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('AddJunkNavigator')} style={styles.button}>
                <Text style={styles.btnText}>JUNK REMOVAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>HAULING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>COURIER</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}