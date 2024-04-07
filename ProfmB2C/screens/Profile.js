import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardContainer from '../components/CardContainer';
import {useNavigation} from '@react-navigation/native';
import NavigationSection from '../components/NavigationSection';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView scrollEnabled={false}>
      <View
        style={[
          styles.profile,
          styles.iconLayout,
          {height: windowHeight, width: windowWidth},
        ]}>
        <View
          style={[
            styles.cleaningWindowByUsingSpeciParent,
            styles.groupChildLayout,
          ]}>
          <Image
            style={[
              styles.cleaningWindowByUsingSpeciIcon,
              styles.profileChildPosition,
            ]}
            resizeMode="cover"
            source={require('../assets/cleaningwindowbyusingspecialliquidrepairmanisworkingindoorsmodernroom-2.png')}
          />
          <LinearGradient
            style={[styles.groupChild, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.2)']}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.myAccount, styles.arrow21Position]}>
            My Account
          </Text>
        </View>
        <View style={[styles.profileChild, styles.profileChildPosition]} />
        <CardContainer />
        <View style={[styles.profileItem, styles.profileItemPosition]} />
        <Pressable
          style={[
            styles.encapsulatedGroupParent,
            styles.encapsulatedGroupFlexBox,
          ]}
          onPress={() => navigation.navigate('Profile1')}>
          <Image
            style={styles.encapsulatedGroupIcon}
            resizeMode="cover"
            source={require('../assets/encapsulated-group.png')}
          />
          <View
            style={[
              styles.editAccountInformationWrapper,
              styles.encapsulatedGroupFlexBox,
            ]}>
            <Text style={[styles.editAccountInformation, styles.logOutTypo]}>
              Edit Account Information
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.encapsulatedGroupGroup,
            styles.encapsulatedGroupFlexBox,
          ]}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Image
            style={styles.encapsulatedGroupIcon}
            resizeMode="cover"
            source={require('../assets/encapsulated-group1.png')}
          />
          <Text style={[styles.changePassword, styles.logOutTypo]}>
            Change Password
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.encapsulatedGroupContainer,
            styles.encapsulatedGroupFlexBox,
          ]}
          onPress={() => {
            navigation.navigate('Menu1');
          }}>
          {/*  onPress={() => navigation.navigate("Menu1")*/}
          <Image
            style={styles.encapsulatedGroupIcon}
            resizeMode="cover"
            source={require('../assets/encapsulated-group2.png')}
          />
          <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
        </Pressable>
        <Image
          style={[styles.profmLogo1112, styles.groupChildPosition]}
          resizeMode="cover"
          source={require('../assets/3-1-17.png')}
        />
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/arrow-2-1.png')}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
  },
  groupChildLayout: {
    height: 404,
    width: '100%',
    top: '0%',
  },
  profileChildPosition: {
    width: '100%',
    right: 0,
    position: 'absolute',
  },
  groupChildPosition: {
    left: '50%',
    position: 'absolute',
  },
  arrow21Position: {
    height: 24,
    top: 43,
    position: 'absolute',
  },
  profileItemPosition: {
    right: 0,
    position: 'absolute',
  },
  encapsulatedGroupFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  cleaningWindowByUsingSpeciIcon: {
    height: '100%',
    top: 0,
    width: '100%',
  },
  groupChild: {
    marginLeft: -187.5,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: Color.color,
    height: 404,
    width: 375,
    top: 0,
  },
  myAccount: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontWeight: '700',
    color: Color.whait,
    textAlign: 'center',
    display: 'flex',
    width: 135,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FontFamily.dGBaysan,
    height: 24,
    top: 43,
    left: '50%',
  },
  cleaningWindowByUsingSpeciParent: {
    right: 0,
    position: 'absolute',
  },
  profileChild: {
    top: '47%',
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: '100%',
    backgroundColor: Color.colorGray_100,
  },
  profileItem: {
    top: '69%',
    borderStyle: 'solid',
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: '100%',
    height: 1,
  },
  encapsulatedGroupIcon: {
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  editAccountInformation: {
    color: Color.black,
    textAlign: 'left',
    fontSize: FontSize.size_sm,
  },
  editAccountInformationWrapper: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
  encapsulatedGroupParent: {
    top: '73%',
    left: '2%',
    position: 'absolute',
    flexDirection: 'row',
  },
  changePassword: {
    color: Color.black,
    textAlign: 'left',
    fontSize: FontSize.size_sm,
    marginLeft: 10,
  },
  encapsulatedGroupGroup: {
    top: '80%',
    left: '2%',
    position: 'absolute',
    flexDirection: 'row',
  },
  logOut: {
    color: '#f21e1e',
    textAlign: 'left',
    fontSize: FontSize.size_sm,
    marginLeft: 16,
  },
  encapsulatedGroupContainer: {
    top: '87%',
    left: '2%',
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
  profmLogo1112: {
    marginLeft: -149.5,
    top: 140,
    width: 300,
    height: 115,
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
  },
  arrow21: {
    left: 16,
    width: 24,
    height: 24,
    top: 43,
  },
  profile: {
    flex: 1,

    overflow: 'hidden',
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile;
