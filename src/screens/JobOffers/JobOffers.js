import React from 'react';
import { Text, View , Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements'
import ServiceProviderCard from '../../components/ServiceProviderCard/ServiceProviderCard';

export default function JobOffers({ navigation }) {
    return(
        <View style={styles.container}>
            <ServiceProviderCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        display: 'flex',
        margin: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    cardContainer: {
        width: '100%'
    },
    cardText: {
        marginTop: 10,
        width: 300,
        textAlign: 'center'
    },
    cardTitle: {
        color: '#2EBCAC'
    }
})