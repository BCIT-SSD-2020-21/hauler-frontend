import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/SearchByService/SearchByService';
import SearchByLocation from '../../components/SearchByLocation/SearchByLocation';

export default function Home({ navigation }) {

    const [location, setLocation] = useState('')
    const [service, setService] = useState('')

    const searchService = async (value) => {
       console.log("search pressed")
    }

    const searchLocation = async (value) => {
        console.log("location pressed")
    }

return (
    <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
                searchService={searchService}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    }
})
