import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Splash1 from './Splash1';
import {useNavigation} from '@react-navigation/native';
import {Border, Color} from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  //bypass--
  const checkLoginDetails = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo !== null && userInfo !== undefined) {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'true');
        navigation.navigate('Bottom');
      } else {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
        navigation.navigate('OnbordingCarousel');
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  //bypass

  useEffect(() => {
    setTimeout(() => {
      checkLoginDetails();
      // navigation.navigate('OnbordingCarousel')
      console.log('navigations');
    }, 2000);
  }, []);

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={[styles.splash15, {height: windowHeight, width: windowWidth}]}>
      <Image
        source={require('../assets/splashScreen.gif')}
        style={styles.gif}
        resizeMode="contain" // Adjust this based on your layout requirements
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gif: {
    width: '100%',
    height: '100%',
  },
  vectorIconPosition: {
    left: '50%',
    position: 'absolute',
  },
  groupIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  vectorIcon: {
    marginLeft: '-92%',
    top: '-13%',
    width: '190%',
  },
  groupIcon: {
    height: '12.87%',
    top: '87.07%',
    right: '0%',
    bottom: '0.06%',
    left: '0%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  splash15Child: {
    marginLeft: '-25%',
    top: '75.3%',
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 240,
    height: 12,
  },
  groupIcon1: {
    height: '7.36%',
    width: '8.16%',
    top: '69.70%',
    right: '70.93%',
    bottom: '34.67%',
    left: '21.31%',
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 380,
    width: 200,
    height: 70,
  },
  splash15: {
    backgroundColor: Color.colorGray_100,
    flex: 1,

    overflow: 'visible',
  },
});

export default Splash;
