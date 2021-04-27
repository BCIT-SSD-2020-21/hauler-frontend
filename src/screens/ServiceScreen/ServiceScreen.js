import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

export default function ServiceScreen({ navigation }) {

    return(
        <View style = {styles.root}>
            <ImageBackground source = {{ uri: 'https://www.nindelivers.com/wp-content/uploads/2019/03/courier-deliveries.jpeg'}} style={styles.image}>
            <Text style={styles.text, styles.centerText}>POST A JOB</Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('AddJunkNavigator')} style={styles.button}>
                <Text style={styles.btnText}>JUNK REMOVAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>MOVING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>ERRAND</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}