import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PostInfo({ image, selectedweight, selectedquantity, postHeading, description, pickUpAddress, pickContactPerson, pickUpPhoneNumber, pickUpSpecialInstructions, sliderValue, dropOffAddress, dropOffContactNumber, dropOffContactPerson, dropOffSpecialInstruction, duration, distance }) {

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Post Heading</Text>
                <Text style={styles.infoValue}>{postHeading}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Post Description</Text>
                <Text style={styles.infoValue}>{description}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Total Weight</Text>
                <Text style={styles.infoValue}>{selectedweight}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Number of items </Text>
                <Text style={styles.infoValue}>{selectedquantity}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Pick Up Address</Text>
                <Text style={styles.infoValue}>
                    {pickUpAddress.formatted_address}
                </Text>
            </View>
                    <View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoKey}>Pick Up Contact Name</Text>
                            <Text style={styles.infoValue}>{pickContactPerson}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoKey}>Pick Up Contact Number</Text>
                            <Text style={styles.infoValue1}>{pickUpPhoneNumber}  </Text>
                            <Text style={styles.iconStyle}><Feather name='phone' size={24} color='white' /></Text>
                        </View>
                    </View>
            
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Pick Up Instructions</Text>
                <Text style={styles.infoValue}>{pickUpSpecialInstructions}</Text>
            </View>
            <Text>
            {dropOffAddress &&
                <View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoKey}>Drop Off Address</Text>
                        <Text style={styles.infoValue}>
                            {dropOffAddress.formatted_address}
                        </Text>
                    </View>
                    <Text>
                        
                            <View>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoKey}>Drop Off Contact Name</Text>
                                    <Text style={styles.infoValue}>{dropOffContactPerson}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoKey}>Drop Off Contact Number</Text>
                                    <Text style={styles.infoValue1}>{dropOffContactNumber}  </Text>
                                    <Text style={styles.iconStyle}><Feather name='phone' size={24} color='white' /></Text>
                                </View>
                            </View>
                    
                    </Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoKey}>Drop Off Instructions</Text>
                        <Text style={styles.infoValue}>{dropOffSpecialInstruction}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoKey}>Distance </Text>
                        <Text style={styles.infoValue1}>{distance} km </Text>
                        <TouchableOpacity onPress={() => onMapsPress()}><Text style={styles.iconStyle}><MaterialCommunityIcons name='map-marker-multiple-outline' size={24} color='white' /></Text></TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoKey}>Duration </Text>
                        <Text style={styles.infoValue1}>{duration} mins</Text>
                    </View>
                </View>
            }
            </Text>
            <View style={styles.infoContainer}>
                            <Text style={styles.infoKey}>Price</Text>
                            <Text style={styles.infoValue1}>{sliderValue}  </Text>
                            <Text style={styles.iconStyle}><Feather name='phone' size={24} color='white' /></Text>
                        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    infoContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    imageContainer: {
        marginVertical: 10
    },
    infoKey: {
        color: '#A9A9A9',
        width: 140,
    },
    infoValue: {
        marginRight: 10,
        width: '65%',
        fontWeight: 'bold',
    },
    infoValue1: {
        marginRight: 10,
        fontWeight: 'bold',
        paddingTop: 8
    },
    iconStyle: {
        backgroundColor: '#0077FC',
        borderRadius: 20,
        padding: 5,
        overflow: 'hidden'
    },
    modalContainer:{
        width: '100%',
        marginHorizontal: 16
    },
    buttons:{
        backgroundColor: '#0077FC',
        marginVertical: 10,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})


