import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {

return (
    <View style={styles.cardsWrapper}>

            <Text
            style={{
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
            }}>
            MY POSTED JOBS
            </Text>
            
            <View style={styles.container}>
                <View style={styles.rectangle}></View>
                {/* <Image source={require('assets/car1.png')} /> */}
            </View>

        <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
                
                <Text style={styles.cardTitle}>ADVERT HEADING</Text>
            </View>

            <View style={styles.cardImgWrapper}>
                <Image
                //source={require('../assets/car2.png')}
                resizeMode="cover"
                style={styles.cardImg}
                />
                <Text style={styles.cardTitle}>ADVERT HEADING</Text>
            </View>

            <View style={styles.cardImgWrapper}>
                <Image
                //source={require('../assets/car3.png')}
                resizeMode="cover"
                style={styles.cardImg}
                />
                <Text style={styles.cardTitle}>ADVERT HEADING</Text>
            </View>
            
        </View>
    </View>
    )
};