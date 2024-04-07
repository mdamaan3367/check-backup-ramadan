import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  Alert,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Property1Default from '../components/Property1Default';
import FormContainer from '../components/FormContainer';
import PasswordSection from '../components/PasswordSection';
import ConfirmPasswordForm from '../components/ConfirmPasswordForm';
import {Color, Border, FontSize, FontFamily} from '../GlobalStyles';
import {Button, Modal, RadioButton} from 'react-native-paper';
import {post} from '../Utils/WebServer';
import axios from 'axios';

const SignUp = () => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;

  const [hidePassword, setHidePassword] = useState(true);
  const [value, setValue] = useState('first');
  const [fName, setFName] = useState(null);
  const [lName, setLName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);
  const [otpInput, setOtpInput] = useState('');
  const [otpInputMob, setOtpInputMob] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleMob, setModalVisibleMob] = useState(false);
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [isValidOtpMob, setIsValidOtpMob] = useState(true);
  const [expectedOtp, setExpectedOtp] = useState('');
  const [expectedOtpMob, setExpectedOtpMob] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobileVerify, setMobileVerify] = useState(false);
  useEffect(() => {
    // Generate the expected OTP once when the component mounts
    setExpectedOtp(generateOtpFromTicks());
  }, []); // Empty dependency array ensures that this effect runs only once

  useEffect(() => {
    // Generate the expected OTP once when the component mounts
    setExpectedOtpMob(generateOtpFromTicksMob());
  }, []); // Empty dependency array ensures that this effect runs only once

  function generateOtpFromTicks() {
    const ticks = Date.now().toString(); // Get current time ticks as string
    const otpLength = 4; // Define the length of the OTP
    const startIndex = ticks.length - otpLength; // Calculate the start index for substring
    const otpFromTicks = '2002'; //ticks.substring(startIndex); // Extract last 4 digits as OTP

    console.log('Generated OTP:', otpFromTicks); // Log the generated OTP
    return otpFromTicks;
  }
  function generateOtpFromTicksMob() {
    const ticks = Date.now().toString(); // Get current time ticks as string
    const otpLength = 4; // Define the length of the OTP
    const startIndex = ticks.length - otpLength; // Calculate the start index for substring
    const otpFromTicks = '2002'; //ticks.substring(startIndex); // Extract last 4 digits as OTP
    console.log('Generated OTP:', otpFromTicks); // Log the generated OTP
    return otpFromTicks;
  }

  const handleValidate = () => {
    if (otpInput === expectedOtp) {
      // Handle OTP validation logic here
      console.log('OTP is valid:', otpInput);
      // You can add your logic for what to do when OTP is valid
      // For demonstration, let's just close the modal
      setEmailVerify(true);
      setModalVisible(false);
    } else {
      // If OTP doesn't match, show an alert
      setIsValidOtp(false);
      setModalVisible(false);
      Alert.alert(
        'Invalid OTP',
        'The entered OTP does not match. Please try again.',
        [{text: 'OK', onPress: () => setIsValidOtp(true)}],
      );
    }
  };

  //mob
  const handleValidateMob = () => {
    if (otpInputMob === expectedOtpMob) {
      // Handle OTP validation logic here
      console.log('OTP is valid:', otpInputMob);
      // You can add your logic for what to do when OTP is valid
      // For demonstration, let's just close the modal
      setMobileVerify(true);
      setModalVisibleMob(false);
    } else {
      // If OTP doesn't match, show an alert
      setIsValidOtpMob(false);
      setModalVisibleMob(false);
      Alert.alert(
        'Invalid OTP',
        'The entered OTP does not match. Please try again.',
        [{text: 'OK', onPress: () => setIsValidOtpMob(true)}],
      );
    }
  };
  //mob

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const emailBody = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #006daa;text-decoration:none;font-weight:600">PROfm</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing PROfm. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
    <h2 style="background: #006daa;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${expectedOtp}</h2>
    <p style="font-size:0.9em;">Regards,<br />PROfm</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>PROfm Inc</p>
      <p>Banjara Hills,Hyd</p>
      <p>TS,IND</p>
    </div>
  </div>
</div>`;
  const sendEmail = async () => {
    if (email !== null) {
      Keyboard.dismiss();
      // Alert.alert("in mail")
      try {
        // Alert.alert("Trying to send email...");
        const response = await axios.post(
          'http://shamimmn-002-site32.atempurl.com/sendemail',
          {
            toEmail: email,
            subject: 'Email confirmation required',
            body: emailBody,
            attachments: 'string',
          },
        );

        // Check if the response status is 200
        if (response.status === 200) {
          Alert.alert('Email sent successfully!');
        } else {
          // If response status is not 200, handle the error
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle errors here
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          // Alert.alert(`Failed to send email. Status code: ${error.response.status}`);
        } else if (error.request) {
          console.error('No response received:', error.request);
          const errorMessage = `Failed to send email. No response received from server. \n\nRequest URL: ${error.request.url}`;
          // Alert.alert(errorMessage);
        } else {
          console.error('Error during request:', error.message);
          //Alert.alert('Failed to send email. Error during request.');
        }
      }
    } else {
      Alert.alert('Please enter login credentials');
    }
  };

  return (
    <>
      <ScrollView scrollEnabled={true}>
        <View
          style={[
            {
              height: windowHeight,
              backgroundColor: Color.colorGray_100,
              flex: 1,
            },
            styles.iconLayout,
          ]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupShadowBox]} />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.profmLogo1111, styles.profmLogo1111Position]}
                resizeMode="cover"
                source={require('../assets/3-1-1.png')}
              />
            </View>
            <Pressable
              style={styles.arrow21}
              onPress={() => navigation.goBack()}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/arrow-2-11.png')}
              />
            </Pressable>
            <Text style={styles.signUp1}>Sign up</Text>
          </View>
          <View style={styles.container}>
            <RadioButton.Group
              onValueChange={newValue => setValue(newValue)}
              value={value}>
              <View style={styles.radioGroup}>
                <RadioButton.Item
                  label="Individual"
                  value="first"
                  color="#006daa"
                  labelStyle={{color: Color.colorDarkgray_100}}
                />
                <RadioButton.Item
                  label="Micro Organization"
                  value="second"
                  color="#006daa"
                  labelStyle={{color: Color.colorDarkgray_100}}
                />
              </View>
            </RadioButton.Group>
          </View>
          <Property1Default
            logIn="sign up"
            property1DefaultPosition="absolute"
            property1DefaultMarginLeft={'2%'}
            property1DefaultTop={'92.9%'}
            property1DefaultLeft="3%"
            property1DefaultWidth={'92%'}
            property1DefaultHeight={48}
            property1DefaultRight="unset"
            property1DefaultBottom="unset"
            logInLetterSpacing={0.6}
            logInLineHeight={26}
            logInTextTransform="capitalize"
            logInWidth="58.31%"
            logInLeft="20.7%"
            onButtonBigPress={() => navigation.navigate('Forget')}
            disabled={!emailVerify || !mobileVerify}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              {/* <FormContainer fullName="First name" personName="Assem" />
          <FormContainer
            fullName="Last name"
            personName="Emara"
            propWidth={"30%"}
            propMarginLeft={"30%"}
          /> */}
              <View style={styles.mobileParent2}>
                <Text style={[styles.passwordN, styles.passwordTypo]}>
                  First name
                </Text>
                <View style={styles.rectangleParentN}>
                  <View style={styles.frameShadowBoxN} />
                  <View
                    style={[styles.frameGroupN, styles.frameGroupPositionN]}>
                    <View style={styles.lockParentN}>
                      <Image
                        style={styles.iconLayoutN}
                        resizeMode="cover"
                        source={require('../assets/profile.png')}
                      />
                      <TextInput
                        value={fName}
                        placeholder="Amaan"
                        placeholderTextColor="#D3D3D3"
                        onChangeText={text => setFName(text)}
                        style={{color: 'black', padding: 10, marginTop: '2%'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {/* */}
              <View style={styles.mobileParent2}>
                <Text style={[styles.passwordN2, styles.passwordTypo]}>
                  Last name
                </Text>
                <View style={styles.rectangleParentN}>
                  <View style={styles.frameShadowBoxN2} />
                  <View
                    style={[styles.frameGroupN2, styles.frameGroupPositionN2]}>
                    <View style={styles.lockParentN}>
                      <Image
                        style={styles.iconLayoutN}
                        resizeMode="cover"
                        source={require('../assets/profile.png')}
                      />
                      <TextInput
                        value={lName}
                        placeholder="mohammed"
                        placeholderTextColor="#D3D3D3"
                        onChangeText={text => setLName(text)}
                        style={{color: 'black', padding: 10, marginTop: '2%'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {/* */}
            </View>

            {/*mobile */}
            {/* <View style={styles.mobileParent}>
          <Text style={styles.mobile}>{`Mobile `}</Text>
          <View style={styles.rectangleContainer}>
            <View style={styles.frameShadowBox} />
            <View
              style={[styles.vuesaxoutlinecallParent, styles.parentPosition]}
            >
              <Image
                style={styles.vuesaxoutlinecallIcon}
                resizeMode="cover"
                source={require("../assets/vuesaxoutlinecall1.png")}
              />
              <Text style={styles.text}>+966 500891756</Text>
            </View>
          </View>
        </View> */}

            <View style={styles.mobileParent}>
              <Text style={[styles.passwordN3, styles.passwordTypo]}>
                Mobile
              </Text>
              <View style={styles.rectangleParentN}>
                <View style={styles.frameShadowBoxN3} />
                <View
                  style={[styles.frameGroupN3, styles.frameGroupPositionN3]}>
                  <View style={styles.lockParentN}>
                    <Image
                      style={styles.iconLayoutN}
                      resizeMode="cover"
                      source={require('../assets/vuesaxoutlinecall1.png')}
                    />
                    <TextInput
                      value={mobile}
                      placeholder="+966 500891756"
                      placeholderTextColor="#D3D3D3"
                      maxLength={14}
                      keyboardType="numeric"
                      onChangeText={text => setMobile(text)}
                      style={{color: 'black', padding: 10, marginTop: '2%'}}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisibleMob(true);
                    }}
                    style={{position: 'absolute', right: '-107%', top: '20%'}}>
                    {mobileVerify ? (
                      <Text style={{color: 'green'}}>Verified</Text>
                    ) : (
                      <Text style={{color: 'red'}}>Verify</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/*mobile */}
            {/*mail */}
            {/* <View style={styles.mobileParent}>
       
          <Text style={styles.mobile}>Email</Text>
          <View style={styles.rectangleContainer}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.smsParent, styles.parentPosition]}>
              <Image
                style={styles.smsIcon}
                resizeMode="cover"
                source={require("../assets/sms.png")}
              />
               <TextInput style={styles.mobile}/>
              <Text style={styles.text}>Logicsystems@gmail.com</Text>
            </View>
          </View>
        </View> */}

            <View style={styles.mobileParent}>
              <Text style={[styles.passwordN3, styles.passwordTypo]}>
                Email
              </Text>
              <View style={styles.rectangleParentN}>
                <View style={styles.frameShadowBoxN3} />
                <View
                  style={[styles.frameGroupN3, styles.frameGroupPositionN3]}>
                  <View style={styles.lockParentN}>
                    <Image
                      style={styles.iconLayoutN}
                      resizeMode="cover"
                      source={require('../assets/sms.png')}
                    />
                    <TextInput
                      value={email}
                      placeholder="Logicsystems@gmail.com"
                      placeholderTextColor="#D3D3D3"
                      maxLength={35}
                      onChangeText={text => setEmail(text)}
                      style={{color: 'black', padding: 10, marginTop: '2%'}}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      sendEmail();
                    }}
                    style={{position: 'absolute', right: '-50%', top: '20%'}}>
                    {emailVerify ? (
                      <Text style={{color: 'green'}}>Verified</Text>
                    ) : (
                      <Text style={{color: 'red'}}>Verify</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/*mail */}
            {/*pass */}

            <View style={styles.mobileParent}>
              <Text style={[styles.passwordN3, styles.passwordTypo]}>
                Password
              </Text>
              <View style={styles.rectangleParentN}>
                <View style={styles.frameShadowBoxN3} />
                <View
                  style={[styles.frameGroupN3, styles.frameGroupPositionN3]}>
                  <View style={styles.lockParentN}>
                    <Image
                      style={styles.iconLayoutN}
                      resizeMode="cover"
                      source={require('../assets/lock1.png')}
                    />
                    <TextInput
                      value={password}
                      placeholder="*************"
                      placeholderTextColor="#D3D3D3"
                      maxLength={12}
                      secureTextEntry
                      onChangeText={text => setPassword(text)}
                      style={{color: 'black', padding: 10, marginTop: '2%'}}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/*pass */}
            {/*passC */}
            <View style={styles.mobileParent}>
              <Text style={[styles.passwordN3, styles.passwordTypo]}>
                Confirm Password
              </Text>
              <View style={styles.rectangleParentN}>
                <View style={styles.frameShadowBoxN3} />
                <View
                  style={[styles.frameGroupN3, styles.frameGroupPositionN3]}>
                  <View style={styles.lockParentN}>
                    <Image
                      style={styles.iconLayoutN}
                      resizeMode="cover"
                      source={require('../assets/lock1.png')}
                    />
                    <TextInput
                      value={cpassword}
                      placeholder="*************"
                      placeholderTextColor="#D3D3D3"
                      maxLength={12}
                      secureTextEntry={hidePassword}
                      onChangeText={text => setCPassword(text)}
                      style={{color: 'black', padding: 10, marginTop: '2%'}}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('PinYourLocation19N')}>
                      <Image
                        style={[styles.eyeSlashIcon, styles.iconLayoutN]}
                        resizeMode="cover"
                        source={require('../assets/eyeslash1.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/*passC */}
            {/* <PasswordSection /> */}
            {/* <ConfirmPasswordForm /> */}
          </View>
          {/* <View style={[styles.frameContainer, styles.profmLogo1111Position]}>
        <View style={styles.lineParent}>
          <View style={[styles.frameInner, styles.lineViewBorder]} />
          <Text style={styles.orSignUp}>or sign up with</Text>
          <View style={[styles.lineView, styles.lineViewBorder]} />
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIconLayout}
            resizeMode="cover"
            source={require("../assets/group-2386551.png")}
          />
          <Image
            style={[styles.frameChild1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-2386541.png")}
          />
          <Image
            style={[styles.frameChild1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-2386561.png")}
          />
        </View>
      </View> */}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleMob}
        onRequestClose={() => setModalVisibleMob(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 9998,
              pointerEvents: 'none',
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              width: 300,
              height: 200,
              borderRadius: 10,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}>
            <Text style={{fontSize: 18, marginBottom: 10, color: 'gray'}}>
              Verify OTP
            </Text>

            <TextInput
              style={[styles.input, !isValidOtp && styles.invalidInput]}
              placeholder="Enter OTP Recieved on Mobile"
              placeholderTextColor="gray"
              onChangeText={text => setOtpInputMob(text)}
              value={otpInputMob}
              keyboardType="numeric"
            />

            <TouchableOpacity
              onPress={handleValidateMob}
              style={{marginTop: 10}}>
              <Text style={{fontSize: 16, color: 'red'}}>Validate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 9998,
              pointerEvents: 'none',
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              width: 300,
              height: 200,
              borderRadius: 10,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}>
            <Text style={{fontSize: 18, marginBottom: 10, color: 'gray'}}>
              Verify OTP
            </Text>

            <TextInput
              style={[styles.input, !isValidOtp && styles.invalidInput]}
              placeholder="Enter OTP Recieved on Email"
              placeholderTextColor="gray"
              onChangeText={text => setOtpInput(text)}
              value={otpInput}
              keyboardType="numeric"
            />

            <TouchableOpacity onPress={handleValidate} style={{marginTop: 10}}>
              <Text style={{fontSize: 16, color: 'red'}}>Validate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: 'black',
  },
  invalidInput: {
    borderColor: 'red',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  eyeSlashIcon: {
    right: '-700%',
    top: '0%',
  },
  iconLayoutN: {
    height: 18,
    width: 18,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: '38%',
    left: '2%',
  },
  radioGroup: {
    flexDirection: 'row', // Arrange items horizontally
  },
  passwordTypo: {
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.med_size,
    height: 24,
    alignItems: 'center',
    color: Color.colorDarkgray_100,
  },
  passwordN: {
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
  passwordN3: {
    width: 152,
    height: 24,
    alignItems: 'center',
    textAlign: 'left',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.med_size,
    left: '2%',
  },
  passwordN2: {
    width: 92,
    height: 24,
    alignItems: 'center',
    textAlign: 'left',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    lineHeight: 30,
    fontSize: FontSize.med_size,
    left: '100%',
  },
  iconLayoutN: {
    height: 18,
    width: 18,
  },
  lockParentN: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameGroupPositionN: {
    zIndex: 1,
    left: 12,
    flexDirection: 'row',
    position: 'absolute',
  },
  frameGroupPositionN3: {
    zIndex: 1,
    left: 12,
    flexDirection: 'row',
    position: 'absolute',
  },
  frameGroupPositionN2: {
    zIndex: 1,
    left: '100%',
    flexDirection: 'row',
    position: 'absolute',
  },
  frameGroupN: {
    top: 3,
    zIndex: 1,
    left: 12,
  },
  frameGroupN3: {
    top: 3,
    zIndex: 1,
    left: 12,
  },
  frameGroupN2: {
    top: 3,
    zIndex: 1,
    left: '0%',
  },
  frameShadowBoxN: {
    zIndex: 0,
    height: 48,
    width: '160%',
    borderWidth: 0.3,
    borderColor: Color.praimary,
    borderStyle: 'solid',
    shadowOpacity: 1,
    left: '2%',
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
  frameShadowBoxN2: {
    zIndex: 0,
    height: 48,
    width: '160%',
    borderWidth: 0.3,
    borderColor: Color.praimary,
    borderStyle: 'solid',
    shadowOpacity: 1,
    left: '92%',
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
  frameShadowBoxN3: {
    zIndex: 0,
    height: 48,
    width: '176%',
    borderWidth: 0.3,
    borderColor: Color.praimary,
    borderStyle: 'solid',
    shadowOpacity: 1,
    left: '2%',
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
  rectangleParentN: {
    marginTop: 4,
  },
  groupLayout: {
    height: 48,
    width: 160,
    left: '50%',
    position: 'absolute',
  },
  profmLogo1111Position: {
    left: '50%',
    position: 'absolute',
  },
  parentPosition: {
    zIndex: 1,
    top: 14,
    justifyContent: 'center',
    height: 20,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  lineViewBorder: {
    opacity: 0.7,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: 'solid',
  },
  groupIconLayout: {
    height: 60,
    width: 60,
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 99,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: '100%',
    left: 0,
    position: 'absolute',
  },
  groupItem: {
    marginLeft: '-60%',
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    width: 160,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: '10%',
    width: 100,
    height: 41,
  },
  rectangleGroup: {
    marginLeft: '-15%',
    top: '60%',
  },
  icon: {
    height: '100%',
  },
  arrow21: {
    top: '40%',
    width: 24,
    height: 24,
    left: '5%',
    position: 'absolute',
  },
  signUp1: {
    marginLeft: -27.5,
    top: '27%',
    fontSize: FontSize.size_base,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    left: '50%',
    position: 'absolute',
  },
  rectangleParent: {
    height: 124,
    width: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  frameGroup: {
    flexDirection: 'row',
  },
  mobile: {
    fontWeight: '600',
    color: Color.grayBlack,
    textAlign: 'left',
    width: 83,
    alignItems: 'center',
    display: 'flex',
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    height: 24,
    left: '5%',
  },
  mobile: {
    fontWeight: '600',
    color: Color.grayBlack,
    textAlign: 'left',
    width: 83,
    alignItems: 'center',
    display: 'flex',
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    height: 24,
    left: '5%',
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.3,
    borderColor: Color.praimary,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    width: 343,
    height: 48,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.whait,
  },
  frameShadowBoxName: {
    zIndex: 0,
    borderWidth: 0.3,
    borderColor: Color.praimary,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    width: 160,
    height: 48,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    marginLeft: '3%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.whait,
  },
  vuesaxoutlinecallIcon: {
    width: 18,
    height: 18,
  },
  text: {
    color: Color.black,
    marginLeft: 8,
    fontSize: FontSize.med_size,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
  },
  vuesaxoutlinecallParent: {
    left: '10%',
  },
  rectangleContainer: {
    marginTop: 4,
  },
  mobileParent: {
    marginTop: 16,
    width:"71.0%"
  },
  mobileParent2: {
    marginTop: 16,
    width:"35.8%"
  },
  smsIcon: {
    width: 20,
    height: 20,
  },
  smsParent: {
    left: 11,
  },
  frameParent: {
    top: '15%',
    left: '5%',
    position: 'absolute',
  },
  frameInner: {
    width: 121,
  },
  orSignUp: {
    fontSize: FontSize.size_sm,
    fontWeight: '300',
    width: 93,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  lineView: {
    width: 120,
  },
  lineParent: {
    justifyContent: 'space-between',
    width: 343,
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameChild1: {
    marginLeft: 40,
  },
  groupParent: {
    marginTop: 24,
    flexDirection: 'row',
  },
  frameContainer: {
    marginLeft: -171.5,
    top: 680,
    alignItems: 'center',
  },
  signUp: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default SignUp;
