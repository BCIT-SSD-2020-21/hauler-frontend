import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ServiceScreen({ navigation }) {

    return(
        <View style = {styles.root}>
            
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('AddJunkNavigator')} style={styles.button}>
                <Text style={styles.btnText}>JUNK REMOVAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MovingNavigator')} style={styles.button}>
                <Text style={styles.btnText}>MOVING</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ErrandNavigator')} style={styles.button}>
                <Text style={styles.btnText}>ERRAND</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}