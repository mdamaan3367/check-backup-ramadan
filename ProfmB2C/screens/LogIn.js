import React, {useContext, useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Touchable,
  Keyboard,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Property1Default from '../components/Property1Default';
import Property1Default1 from '../components/Property1Default1';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {post} from '../Utils/WebServer';
import messaging from '@react-native-firebase/messaging';
import store from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {makeApiRequest} from '../Utils/WebServer';
import {useDispatch} from 'react-redux';
import {setData} from '../redux/dataSlice';
import { setItems } from '../redux/itemSlice';
import { setUser } from '../redux/userSlice';

const LogIn = ({route}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataList, setDataList] = useState([]);

  const dispatch = useDispatch();

  const [fcmToken, setFcmToken] = useState('');
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const generateFcmToken = async () => {
    const fcmToken2 = await messaging().getToken();
    setFcmToken(fcmToken2);
  };
  useEffect(() => {
    generateFcmToken();
  }, []);

  useEffect(() => {
    if (route.params && route.params.enableModal) {
      setModalVisible(true);
    }
  }, [route.params]);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  //test api--
  const onPressLogin = async () => {
    console.log('in');
    if (email !== '' && password !== '') {
      Keyboard.dismiss();
      try {
        const param = {
          userName: email,
          password: password,
          token: fcmToken,
        };
        const response = await post('/FomMobB2C/api/FomMobB2CLogin', param);
        dispatch(setUser(response));
        // Adjust the endpoint accordingly
        loginCallback(response);
        logitems(response);
      } catch (error) {
        console.error('Error logging in:', error);
        Alert.alert('Error logging in. Please try again.');
      }
    } else {
      Alert.alert('Please enter login credentials');
    }
  };

  const loginCallback = response => {
    if (response && response.message === undefined) {
      const userInfo = {
        token: response.token,
        userId: response.userId,
        userName: response.userName,
        email: response.email,
        mobile: response.mobile,
        loginType: response.loginType,
        customerCode: response.customerCode,
      };
      try {
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        hitNotification();
        setEmail('');
        setPassword('');
        console.log(userInfo.token);
        //3 item start--

        // Example usage:
        const url =
          'https://hvserp.com/FomMobB2C/api/ServicePeriods/getAllActiveFomServicePeriodsForB2C';
        const token = userInfo.token; // Replace with the actual token
        const method = 'GET'; // Specify the HTTP method (GET, POST, etc.)

        // Call the function
        makeApiRequest(url, token, method)
          .then(data => {
            // Dispatch action to store the data in Redux
            dispatch(setData(data));
            // AsyncStorage.setItem('dataServices', JSON.stringify(data));
            // Update state or do other operations with the response data
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });

        //3 item end---
        navigation.navigate('Bottom');
      } catch (error) {
        console.error('AsyncStorage Error:', error);
      }
    } else {
      Alert.alert(response.message);
    }
  };

  const logitems=async(response)=>{
console.log("call items");
try {
  const url =
    'https://hvserp.com/FomMobB2C/api/FomMobB2CService/getDepartmentList';
  const token = response.token; // Replace with the actual token
  const method = 'GET'; // Specify the HTTP method (GET, POST, etc.)

  // Call the function
  makeApiRequest(url, token, method)
    .then(data => {
      dispatch(setItems(data)); 
      // Dispatch action to store the data in Redux
     // console.log(data)
     
    })
    .catch(error => {
      // Handle errors
      console.error('Erroritme:', error);
    });

  //3 item end---
 
} catch (error) {
  console.error('AsyncStorage Error:', error);
}




  }

  //noti--
  const hitNotification = async () => {
    try {
      const response = await axios.post(
        'https://hvserp.com/FomMobNotificationsB2C/api/PushNotificationsForMobile/singleNotificationForMobileUser',
        {
          userId: 0,
          token: fcmToken,
          eventType: 'hi',
        },
      );

      // Handle response data if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };

  //noti end--
  const checkLoginDetails = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo !== null && userInfo !== undefined) {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'true');

        // navigation.navigate("Bottom");
      } else {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  useEffect(() => {
    {
      checkLoginDetails();
    }
  }, []);

  //test end--
  return (
    <>
      <ScrollView scrollEnabled={false}>
        <View
          style={[
            styles.logIn,
            styles.iconLayout1,
            {height: windowHeight, width: windowWidth},
          ]}>
          <Image
            style={[styles.logInChild, styles.containerPosition]}
            resizeMode="cover"
            source={require('../assets/rectangle-4318.png')}
          />
          <View style={[styles.frameParent, styles.arrow21Position]}>
            {/* <View>
          <Text style={[styles.mobileEmail, styles.passwordTypo]}>
            Mobile / Email
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View
              style={[
                styles.vuesaxoutlinecallParent,
                styles.frameGroupPosition,
              ]}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/vuesaxoutlinecall.png")}
              />
              
              <Text style={styles.text}>+966 500891756</Text>
              
            </View>
          </View>
        </View> */}
            {/**fdsfkjsf */}
            <View>
              <Text style={[styles.password, styles.passwordTypo]}>
                {' '}
                Mobile / Email
              </Text>
              <View style={styles.rectangleParent}>
                <View style={styles.frameShadowBox} />
                <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                  <View style={styles.lockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require('../assets/vuesaxoutlinecall.png')}
                    />
                    <TextInput
                      value={email}
                      placeholder="+966 500891756"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={text => setEmail(text)}
                      style={{color: '#006daa', padding: 10, marginTop: '2%'}}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/**fdsfkjsf */}

            <View style={styles.passwordParent}>
              <Text style={[styles.password, styles.passwordTypo]}>
                Password
              </Text>
              <View style={styles.rectangleParent}>
                <View style={styles.frameShadowBox} />
                <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                  <View style={styles.lockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require('../assets/lock.png')}
                    />
                    <TextInput
                      value={password}
                      secureTextEntry={hidePassword}
                      placeholder="******"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={text => setPassword(text)}
                      style={{color: '#006daa', padding: 10, marginTop: '2%'}}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image
                    style={[styles.eyeSlashIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={
                      hidePassword
                        ? require('../assets/eyeslash.png')
                        : require('../assets/eyeslash.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Property1Default
            logIn="Log in"
            property1DefaultPosition="absolute"
            property1DefaultMarginLeft={'0%'}
            property1DefaultTop={'53%'}
            property1DefaultLeft="4.5%"
            property1DefaultWidth={'92%'}
            property1DefaultHeight={48}
            property1DefaultRight="unset"
            property1DefaultBottom="unset"
            logInLetterSpacing={0.6}
            logInLineHeight={26}
            logInTextTransform="capitalize"
            logInWidth="58.31%"
            logInLeft="20.7%"
            onButtonBigPress={() => onPressLogin()}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={[styles.passwordTypo]}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={[styles.frameContainer, styles.containerPosition]}>
            <View style={styles.lockParent}>
              <View style={[styles.lineView, styles.lineViewBorder]} />
              <Text style={[styles.orLogIn, styles.orLogInTypo]}>
                or log in with
              </Text>
              <View style={[styles.frameChild7, styles.lineViewBorder]} />
            </View>
            <View style={styles.groupParent}>
              <TouchableOpacity>
                <Image
                  style={styles.groupIconLayout}
                  resizeMode="cover"
                  source={require('../assets/group-238655.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={[styles.frameChild8, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require('../assets/group-238654.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={[styles.frameChild8, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require('../assets/group-238656.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Property1Default1
            logIn="Sign Up"
            property1DefaultPosition="absolute"
            property1DefaultBackgroundColor="#fff"
            property1DefaultMarginLeft={'15%'}
            property1DefaultTop={'82.5%'}
            property1DefaultLeft="0%"
            logInColor="#006daa"
            onButtonMidimePress={() => navigation.navigate('SignUp')}
          />

          <Pressable
            style={[styles.continueAsGuestContainer, styles.containerPositionN]}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.continueAsGuest, styles.orLogInTypo]}>
              Continue as guest
            </Text>
          </Pressable>
          <Image
            style={[styles.profmLogo1111, styles.containerPosition2]}
            resizeMode="cover"
            source={require('../assets/3-1-1.png')}
          />
          <Pressable
            style={[styles.arrow21, styles.arrow21Position]}
            onPress={() => navigation.navigate('OnbordingCarousel')}>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require('../assets/arrow-2-1.png')}
            />
          </Pressable>
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '80%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{left: '45%'}}>
              <Image
                resizeMode="cover"
                source={require('../assets/frame9.png')}
              />
            </TouchableOpacity>

            <Image
              resizeMode="cover"
              source={require('../assets/successgiff.gif')}
            />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                color: '#20ae5c',
                fontWeight: '600',
              }}>
              Successful Logout
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginBottom: 10,
                color: '#a6a6a6',
                fontWeight: '400',
              }}>
              You can Login at any time
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: 'hidden',
  },
  containerPosition: {
    left: '0%',
    position: 'absolute',
  },
  containerPositionN: {
    left: '50%',
    position: 'absolute',
  },
  containerPosition2: {
    left: '31%',
    position: 'absolute',
  },
  arrow21Position: {
    left: 16,
    position: 'absolute',
  },
  passwordTypo: {
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.med_size,
    height: 24,
    alignItems: 'center',
    color: Color.whait,
  },
  frameGroupPosition: {
    zIndex: 1,
    left: 12,
    flexDirection: 'row',
    position: 'absolute',
  },
  frameInnerLayout: {
    height: 6,
    width: 6,
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  lineViewBorder: {
    opacity: 0.7,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.whait,
    borderStyle: 'solid',
  },
  orLogInTypo: {
    height: 16,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
  },
  groupIconLayout: {
    height: 40,
    width: 40,
  },
  logInChild: {
    top: '0%',
    width: '100%',
    height: '130%',
  },
  mobileEmail: {
    width: 83,
    height: 24,
    alignItems: 'center',
    textAlign: 'left',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.med_size,
  },
  frameShadowBox: {
    zIndex: 0,
    height: 48,
    width: '102%',
    borderWidth: 0.3,
    borderColor: Color.a6A6A6,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
  },
  text: {
    color: Color.praimary,
    marginLeft: 8,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  vuesaxoutlinecallParent: {
    top: 14,
    height: 20,
    justifyContent: 'center',
    zIndex: 1,
    left: 12,
    alignItems: 'center',
  },
  rectangleParent: {
    marginTop: 4,
  },
  password: {
    width: 92,
    height: 24,
    alignItems: 'center',
    textAlign: 'left',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.med_size,
  },
  ellipseIcon: {
    marginLeft: 2,
  },
  ellipseParent: {
    marginLeft: 8,
    flexDirection: 'row',
  },
  lockParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeSlashIcon: {
    marginLeft: '85%',
    top: '-145%',
  },
  frameGroup: {
    top: 3,
    zIndex: 1,
    left: 12,
  },
  passwordParent: {
    marginTop: 16,
  },
  frameParent: {
    top: '20%',
  },
  forgotPassword: {
    marginLeft: '12%',
    top: '45%',
    textAlign: 'right',
    width: 99,
    height: 24,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 26,
    fontSize: FontSize.med_size,
    left: '50%',
    position: 'absolute',
  },
  lineView: {
    width: 121,
  },
  orLogIn: {
    fontWeight: '300',
    width: 98,
    marginLeft: 13,
    color: Color.whait,
    height: 16,
    fontSize: FontSize.size_sm,
  },
  frameChild7: {
    width: 120,
    marginLeft: 13,
  },
  frameChild8: {
    marginLeft: 40,
  },
  groupParent: {
    marginTop: 48,
    flexDirection: 'row',
  },
  frameContainer: {
    marginLeft: '0%',
    top: '64%',
    alignItems: 'center',
  },
  continueAsGuest: {
    marginLeft: -92.5,
    letterSpacing: 0.7,
    color: Color.thacandry2,
    width: 185,
    height: 16,
    fontSize: FontSize.size_sm,
    fontWeight: '600',
  },
  continueAsGuestContainer: {
    top: '92%',
  },
  profmLogo1111: {
    top: '7%',
    width: 150,
    height: 62.5,
  },
  icon: {
    height: '100%',
  },
  arrow21: {
    top: 43,
    width: 24,
    height: 24,
  },
  logIn: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default LogIn;
