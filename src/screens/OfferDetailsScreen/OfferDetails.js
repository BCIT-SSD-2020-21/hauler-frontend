import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

export default function OfferDetails({ navigation, route }) {
    const { serviceProviderId, postId } = route.params;

    const [response, setResponse] = useState('')
    const [offer, setOffer] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const onSendOffer = async () => {
        console.log("send offer clicked")
    }
    const onDecline = () => {
        setModalVisible(true)
    }

    const onDeclineConfirmed = async () => {
       console.log("decline clicked")
    }
    const onAccept = async () => {
        console.log("accept clicked")
    }

    return (
        <>
            <Modal
                animationType='slide'
                transparent={false}
                opacity={0.5}
                visible={modalVisible}
                backdropOpacity={0.5}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.message}>Are you sure you want to decline? Doing so will end comminication on this post</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttons, styles.closeButton]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={[styles.buttonTitle, styles.closeButtonTitle]}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttons, styles.declineButton]}
                            onPress={() => onDeclineConfirmed()}>
                            <Text style={styles.buttonTitle}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 250
    },
    message:{
        marginVertical: 20,
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttons: {
        margin: 10,
        width: '50%',
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    declineButton: {
        backgroundColor: '#DE0303',
    },
    closeButton: {
        backgroundColor: '#E0E0E0',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    closeButtonTitle:{
        color: 'black'
    }
})
