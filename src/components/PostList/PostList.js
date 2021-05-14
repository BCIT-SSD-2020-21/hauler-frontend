import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Badge, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function PostsList({ posts, onActiveImagePress, onOffersPress, onAcceptedDetails }) {

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        item &&
                        <View style={styles.cardContainer}>
                            <Card containerStyle={{ borderRadius: 10, padding: 10 }}>
                                {(item.response.length > 1) && (item.status === 'Active') ?
                                    <Badge
                                        badgeStyle={{ display: 'flex' }}
                                        status="success"
                                        value={item.response.length - 1}
                                        containerStyle={{ position: 'absolute', top: -20, left: -20 }}
                                    /> :
                                    <View></View>}
                                <TouchableOpacity
                                    onPress={() => { item.status === 'Active' ? onActiveImagePress({ postId: item._id }) : onAcceptedDetails({ postId: item._id }) }}
                                >
                                    <Image
                                        style={styles.cardImage} source={{ uri: item.loadImages[0].imageUrl }}
                                    /></TouchableOpacity>
                                <View style={styles.cardTextContainer}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.cardHeadingText}>
                                            {item.postHeading}
                                        </Text>
                                        <Text style={styles.cardText}>
                                            {item.pickUpCity}
                                            {item.dropOffCity &&
                                                <Text style={styles.cardText}> to {item.dropOffCity} ({item.distance} km)
                                                </Text>}
                                        </Text>
                                    </View>
                                    <View style={styles.cardButton}>
                                        <Text style={styles.cardButtonContainer}>
                                            {
                                                (item.status === 'In Progress') ?
                                                    <View style={styles.statusButton}>
                                                        <Button
                                                            buttonStyle={{ borderRadius: 10, backgroundColor: '#0077FC', width: 100 }}
                                                            onPress={() => onAcceptedDetails({ postId: item._id })}
                                                            title={`$ ${item.acceptedPrice}`}
                                                        />
                                                        <Text style={[styles.cardText, styles.statusText]}>{item.status}</Text>
                                                    </View>
                                                    : ((item.response.length > 1) ?
                                                        <View style={styles.statusButton}>
                                                            <Button
                                                                buttonStyle={{ borderRadius: 10, backgroundColor: '#0077FC', width: 100 }}
                                                                onPress={() => onOffersPress({ postId: item._id })}
                                                                title='See Offers'
                                                            />
                                                            <Text style={[styles.cardText, styles.statusText]}>{item.status}</Text>
                                                        </View> :
                                                        <Button
                                                            buttonStyle={{ borderRadius: 10, backgroundColor: '#0077FC', width: 100 }}
                                                            onPress={() => onActiveImagePress({ postId: item._id })}
                                                            title={`$ ${item.price}`}
                                                        />
                                                    )   
                                            }
                                        </Text>
                                    </View>
                                </View>
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
    cardTextContainer: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    textContainer: {
        width: '60%'
    },
    cardButton: {
        width: '40%',
        overflow: 'hidden',
    },
    cardButtonContainer: {
        alignSelf: 'flex-end',
    },
    statusButton: {
        width: '100%'
    },
    cardImage: {
        width: '95%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 10,
    },
    cardText: {
        color: '#A9A9A9',
        fontSize: 12,
    },
    statusText: {
        textAlign: 'center'
    }
})

