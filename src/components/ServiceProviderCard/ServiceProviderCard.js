import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Badge, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';

export default function ServiceProviderCard({ post, serviceProviders }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={post.response.slice(1)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        item &&
                        <View style={styles.cardContainer}>
                            <Card containerStyle={{ borderRadius: 10, padding: 10 }}>
                            <View style={styles.avatar}>
                            <Avatar
                            rounded
                                title='name'
                                size='large'
                                source={{
                                    uri:
                                    serviceProviders[index] && serviceProviders[index].profilePicUrl,
                                }}
                            />
                        </View>
                                <Text>{serviceProviders[index] && serviceProviders[index].firstName} {serviceProviders[index] && serviceProviders[index].lastName}</Text>
                                <Text>{serviceProviders[index] && serviceProviders[index].vehicleType[0].vehicle}</Text>
                                <Text>{item.serviceProviderResponseSchema[item.serviceProviderResponseSchema.length-1] && item.serviceProviderResponseSchema[item.serviceProviderResponseSchema.length-1].serviceProviderActionPrice}</Text>
                                <Text>{item.responseStatus}</Text>
                            </Card>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 130,
    },
    cardContainer: {
        width: '95%',
        alignSelf: 'center',
        position: 'relative',
        marginTop: 5,
    },
    avatar: {
       
    },
})

