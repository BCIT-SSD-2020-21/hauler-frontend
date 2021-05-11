import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Badge, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function ServiceProviderCard({ post }) {
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
                                <Text>{item.serviceProviderResponseSchema[item.serviceProviderResponseSchema.length-1].serviceProviderActionPrice}</Text>
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
})

