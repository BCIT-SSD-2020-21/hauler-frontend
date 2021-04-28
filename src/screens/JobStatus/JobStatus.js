import React from 'react';
import { Text, View , Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements'

export default function JobStatus() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> JOB STATUS </Text>
            <Text style={styles.text}> JUNK REMOVAL </Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Accept/Pending</Text></TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
            <Card>
                <Card.Title style={styles.cardTitle}> Vancouver Haulers </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Declined' />
            </Card>
            <Card>
                <Card.Title style={styles.cardTitle}> Surrey Movers </Card.Title>
                <Card.Divider />
                <Button buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }} title='Accepted' />
            </Card>
            </View>
            <View>
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Delete Post</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Return Home</Text></TouchableOpacity>
            </View>
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