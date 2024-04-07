import React, {useState, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RegularCleaning9 from './RegularCleaning';
import ProfileSection from '../components/ProfileSection';
import InvoiceSection1 from '../components/InvoiceSection1';
import SectionMenu1 from '../components/SectionMenu1';
import WebViewBottom from '../components/WebViewBottom';
import Splash3 from '../components/Splash3';
import {Color, FontFamily, FontSize, Padding, Border} from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu1 = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const [buttonSmallContainerVisible, setButtonSmallContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  const openButtonSmallContainer = useCallback(() => {
    setButtonSmallContainerVisible(true);
  }, []);

  const closeButtonSmallContainer = useCallback(() => {
    setButtonSmallContainerVisible(false);
  }, []);

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <>
      <ScrollView scrollEnabled={false}>
        <View
          style={[
            styles.menu,
            styles.menuLayout,
            {height: windowHeight + 100, width: windowWidth},
          ]}>
          <View style={[styles.accountInfoParent, styles.accountPosition]}>
            <Text style={[styles.accountInfo, styles.accountTypo]}>
              Account Info
            </Text>
            <View style={styles.groupParent}>
              <ProfileSection
                iconImageUrl={require('../assets/group-238781.png')}
                actionButtonText="Profile"
              />
              <ProfileSection
                iconImageUrl={require('../assets/group-238793.png')}
                actionButtonText="Update password"
                groupIconMarginTop={8}
              />
              <ProfileSection
                iconImageUrl={require('../assets/group-238788.png')}
                actionButtonText="My addresses"
                groupIconMarginTop={8}
              />
            </View>
          </View>
          <InvoiceSection1
            iconImageUrl={require('../assets/group-238795.png')}
            itemCode="invoices"
          />
          <InvoiceSection1
            iconImageUrl={require('../assets/group-238796.png')}
            itemCode="Orders"
            propTop="60.59%"
            propBottom="32.51%"
          />
          <Text style={[styles.myAccount, styles.accountTypo]}>My account</Text>
          <SectionMenu1
            iconText={require('../assets/home221.png')}
            iconDescription={require('../assets/clock.png')}
            iconImageUrl={require('../assets/calendartick21.png')}
            onFramePressablePress={() => navigation.navigate('Home1')}
            onFramePressablePress1={() => navigation.navigate('Bookings2')}
            onFramePressablePress2={openFrameContainer7}
          />
          <View style={styles.groupContainer}>
            <View style={styles.groupContainer}>
              <View style={[styles.groupChild, styles.groupShadowBox]} />
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Image
                  style={[styles.profmLogo1111, styles.menuChildPosition,{left:"50%"}]}
                  resizeMode="cover"
                  source={require('../assets/3-1-1.png')}
                />
              </View>
              <Pressable
                style={styles.arrow21}
                onPress={() => navigation.goBack()}>
                <Image
                  style={[styles.icon, styles.menuLayout]}
                  resizeMode="cover"
                  source={require('../assets/arrow-2-11.png')}
                />
              </Pressable>
              <Text style={styles.menu1}>menu</Text>
            </View>
          </View>
          <Pressable
            style={[styles.menuChild, styles.menuChildPosition]}
            onPress={() => navigation.navigate('Menu')}
          />

          <View style={[styles.menuItem, styles.menuItemPosition]} />
          <View style={styles.menuInner} />
          <Image
            style={[
              styles.httpslottiefilescomanimatIcon,
              styles.menuChildPosition,{left:"50%"}
            ]}
            resizeMode="cover"
            source={require('../assets/logoutgiff.gif')}
          />
          <Text style={styles.doYouWant}>Do you want to logout?</Text>
          <Pressable
            style={[styles.buttonSmall, styles.buttonFlexBox]}
            onPress={() => {
              AsyncStorage.setItem('userInfo', '');
              AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
              navigation.navigate('LogIn', {enableModal: true}); // Pass enableModal: true as a route param
            }}>
            <Text style={[styles.accept, styles.acceptTypo]}>Yes</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonSmall1, styles.buttonFlexBox]}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.decline, styles.acceptTypo]}>No</Text>
          </Pressable>
        </View>

        <Modal
          animationType="fade"
          transparent
          visible={frameContainer7Visible}>
          <View style={styles.frameContainer7Overlay}>
            <Pressable
              style={styles.frameContainer7Bg}
              onPress={closeFrameContainer7}
            />
            <RegularCleaning9 onClose={closeFrameContainer7} />
          </View>
        </Modal>

        {/* <Modal
        animationType="fade"
        transparent
        visible={buttonSmallContainerVisible}
      >
        <View style={styles.buttonSmallContainerOverlay}>
          <Pressable
            style={styles.buttonSmallContainerBg}
            onPress={closeButtonSmallContainer}
          />
          <Splash3 onClose={closeButtonSmallContainer} />
        </View>
      </Modal> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    overflow: 'hidden',
  },
  accountPosition: {
    left: 16,
    position: 'absolute',
  },
  accountTypo: {
    height: 16,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  groupLayout: {
    height: 48,
    width: 160,
    left: '50%',
    position: 'absolute',
  },
  menuChildPosition: {
    left: '0%',
    position: 'absolute',
  },
  menuItemPosition: {
    backgroundColor: Color.whait,
    width: '100%',
    left: 0,
    position: 'absolute',
  },
  buttonFlexBox: {
    flexDirection: 'row',
    height: 40,
    borderRadius: Border.br_3xs,
    top: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 145,
  },
  acceptTypo: {
    width: 59,
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: FontSize.size_base,
    height: 24,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
  },
  frameContainer7Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  frameContainer7Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  accountInfo: {
    width: 131,
  },
  groupParent: {
    marginTop: 16,
  },
  accountInfoParent: {
    top: 156,
  },
  myAccount: {
    top: 396,
    width: 178,
    left: 16,
    position: 'absolute',
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    backgroundColor: Color.whait,
    width: 375,
    left: 0,
    position: 'absolute',
  },
  groupItem: {
    marginLeft: -80,
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
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 1,
    width: 100,
    height: 43,
  },
  rectangleGroup: {
    marginLeft: -79.5,
    top: 76,
  },
  icon: {
    height: '100%',
  },
  arrow21: {
    top: 43,
    height: 24,
    width: 24,
    left: 16,
    position: 'absolute',
  },
  menu1: {
    marginLeft: -20.5,
    top: 40,
    fontWeight: '600',
    width: 41,
    height: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: FontSize.size_base,
    color: Color.praimary1,
    left: '50%',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    textTransform: 'capitalize',
    position: 'absolute',
  },
  groupContainer: {
    height: 124,
    width: 375,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: 'absolute',
  },
  batteryIcon: {
    right: 0,
    height: 11,
    width: 24,
    top: 0,
    position: 'absolute',
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: 'none',
    position: 'absolute',
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: 'absolute',
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 42,
    top: 0,
    left: '50%',
    overflow: 'hidden',
  },
  menuChild: {
    blurRadius: 10,
    top: '0%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '102%',
    height: '100%',
  },
  menuItem: {
    top: '60%',
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 258,
  },
  menuInner: {
    top: 532,
    left: 164,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray,
    width: 47,
    height: 5,
    position: 'absolute',
  },
  httpslottiefilescomanimatIcon: {
    marginLeft: -24.5,
    top: '65%',
    width: 60,
    height: 59,
  },
  doYouWant: {
    top: '73%',
    left: '27%',
    color: Color.black,
    width: 174,
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    height: 19,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  buttonSmallContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  buttonSmallContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  accept: {
    color: Color.whait,
  },
  buttonSmall: {
    backgroundColor: Color.praimary,
    left: '6%',
    flexDirection: 'row',
    height: 40,
    borderRadius: Border.br_3xs,
    top: '80%',
  },
  decline: {
    color: Color.praimary,
    width: 122,
  },
  buttonSmall1: {
    right: '6%',
    borderStyle: 'solid',
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 20,
  },
  menu: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width:"100%"
  },
});

export default Menu1;
