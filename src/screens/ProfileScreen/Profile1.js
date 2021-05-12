import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Context } from '../../context/ContextProvider';
import { getOneUser } from '../../../network';

export default function Profile1({ navigation }) {
    const { signout, currentUser } = useContext(Context)

     const [userInformation, setUserInformation] = useState('')
     const [modalVisible, setModalVisible] = useState(false)
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [dateOfBirth, setDob] = useState()
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')
     const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
     const [error, setError] = useState('')
     const [loading, setLoading] = useState('')
     const [reload, setReload] = useState(true)

    // const userInformation = {
    //     firstName : "Abhishek",
    //     lastName : "Pundir",
    //     email : "apundir@my.bcit.ca",
    //     dateOfBirth:" 01/02/03",
    //     streetAddress : "123 Abc",
    //     unitNumber:"1",
    //     city : "Surrey",
    //     province:"BC",
    //     contactNumber:"12345667",
    //     cardNumber : "1234567890123456",
    //     expiryDate : "01/23",
    //     profilePicUrl : "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999"
    // }

    const onSignOutClicked = async () => {
        try {
            setError("")
            setLoading(true)
            await signout()
            navigation.navigate('Home')
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

     const onEditClicked = async () => {
         setModalVisible(true)
     }
    // const onEditSubmitted = async () => {
    //     await updateOneServiceProvider(
    //         currentUser.uid,
    //         firstName,
    //         lastName,
    //         profilePicUrl,
    //         dateOfBirth,
    //         province,
    //         city,
    //         streetAddress,
    //         unitNumber,
    //         contactNumber
    //     )
    //     setReload(!reload)
    //     setModalVisible(!modalVisible)
    // }

    useEffect(() => {
        currentUser &&
            (async () => {
                const profile = await getOneUser(currentUser.uid)
                setUserInformation(profile)
                console.log(profile)
                // setCity(profile.city)
                // setStreetAddress(profile.streetAddress)
                // setUnitNumber(profile.unitNumber)
                // setDob(profile.dateOfBirth)
                // setContactNumber(profile.contactNumber)
                // setProvince(profile.province)
                 //setFirstName(profile.firstName)
                // setLastName(profile.lastName)
                // setProfilePicUrl(profile.profilePicUrl)
            })()
    }, [reload])

    return (
        <ScrollView>
            {userInformation ?
                <View style={styles.container}>
                    <View style={styles.profileContainer}>
                        <Text > {error && alert(error)}</Text>
                        <View style={styles.avatar}>
                            <Avatar
                                title='name'
                                size='xlarge'
                                source={{
                                    uri:
                                        userInformation.profilePicUrl,
                                }}
                                containerStyle={{ borderRadius: 30, overflow: 'hidden' }}
                            />
                        </View>

                        <Text style={styles.user}>
                            {userInformation.firstName}
                        </Text>
                        <View style={styles.headerContainer} >
                            <FontAwesome name='star' size={20} color='#2EBCAC' />
                            <FontAwesome name='star' size={20} color='#2EBCAC' />
                            <FontAwesome name='star' size={20} color='#2EBCAC' />
                            <FontAwesome name='star' size={20} color='#2EBCAC' />
                            <FontAwesome name='star' size={20} color='#2EBCAC' />
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='user' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {userInformation.firstName} {userInformation.lastName}
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='birthday-cake' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {userInformation.dateOfBirth}
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='envelope' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {currentUser && currentUser.email}
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='phone' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {userInformation.contactNumber}
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {userInformation.unitNumber}, {userInformation.streetAddress}, {userInformation.city}, {userInformation.province}
                            </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <FontAwesome style={styles.infoIcon} name='credit-card' size={24} color='black' />
                            <Text style={styles.userInfo}>
                                {userInformation.cardNumber} {userInformation.expiryDate}
                            </Text>
                        </View>

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
                            <ScrollView style={styles.modalContainer}>
                                {/* <UserInfo
                                    firstName={firstName}
                                    lastName={lastName}
                                    province={province}
                                    city={city}
                                    streetAddress={streetAddress}
                                    unitNumber={unitNumber}
                                    profilePicUrl={profilePicUrl}
                                    dateOfBirth={dateOfBirth}
                                    contactNumber={contactNumber}
                                    setCity={setCity}
                                    setStreetAddress={setStreetAddress}
                                    setUnitNumber={setUnitNumber}
                                    setDob={setDob}
                                    setContactNumber={setContactNumber}
                                    setProvince={setProvince}
                                    setFirstName={setFirstName}
                                    setLastName={setLastName}
                                    setProfilePicUrl={setProfilePicUrl}
                                    setError={setError}
                                /> */}
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={[styles.buttons, styles.logOutButton]}
                                        onPress={() => onEditSubmitted()}>
                                        <Text style={styles.buttonTitle}>Submit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.buttons, styles.logOutButton]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.buttonTitle}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </Modal>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttons, styles.editButton]}
                            disabled={loading}
                            onPress={() => onEditClicked()}>
                            <Text style={styles.buttonTitle}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttons, styles.logOutButton]}
                            disabled={loading}
                            onPress={() => onSignOutClicked()}>
                            <Text style={styles.buttonTitle}>Log Out</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                : <View></View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    profileContainer: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {
        alignItems: 'center'
    },
    user: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        color: '#5C5C5C',
        marginBottom: 10
    },
    infoContainer: {
        flexDirection: 'row'
    },
    infoIcon: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    userInfo: {
        color: 'black',
        fontSize: 20,
        marginVertical: 20,
    },
    modalContainer: {
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttons: {

        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editButton: {
        backgroundColor: '#16B3D5',
    },
    logOutButton: {
        backgroundColor: '#F68347',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})

