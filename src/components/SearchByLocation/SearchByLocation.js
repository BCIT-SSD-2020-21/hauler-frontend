import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SearchByLocation({ location, setLocation }) {

    return (
        <View style={styles.search}>
            <RNPickerSelect
                value={location}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputAndroid: {
                        fontSize: 14,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        color: 'black'
                    },
                }}
                onValueChange={(value) => setLocation(value)}
                placeholder={{ label: "Search by location", value: null }}
                items={[
                    { label: 'Surrey', value: 'Surrey' },
                    { label: 'Langely', value: 'Langely' },
                    { label: 'Richmond', value: 'Richmond' },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 5
    }
})

