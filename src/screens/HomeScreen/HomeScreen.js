import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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
    <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/car1.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Text style={styles.cardTitle}>ADVERT HEADING</Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/car2.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Text style={styles.cardTitle}>ADVERT HEADING</Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/car3.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            <Text style={styles.cardTitle}>ADVERT HEADING</Text>
          </View>
         
    </View>
</View>


export default HomeScreen;