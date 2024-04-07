import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, Padding, Border, Color} from '../GlobalStyles';

const OnBordeing5 = ({onNext}) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View
        style={[
          styles.onBordeing6,
          {height: windowHeight, width: windowWidth},
        ]}>
        <Image
          style={styles.onBordeing6Child}
          resizeMode="cover"
          source={require('../assets/group-239086.png')}
        />
        <View style={styles.maintenanceServicesParent}>
          <Text style={styles.maintenanceServices}>Maintenance services</Text>
          <Text style={[styles.transformYourMaintenance, styles.nextTypo]}>
            Transform your maintenance routine with our smart interface.
            Designed around your specific needs, making it easier than ever to
            stay on top of everything.
          </Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <Image
            style={[styles.frameItem, styles.frameSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <View style={[styles.frameInner, styles.frameSpaceBlock]} />
          <Image
            style={[styles.frameItem, styles.frameSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
        </View>
        <Pressable
          style={[styles.nextWrapper, styles.wrapperFlexBox]}
          onPress={onNext}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </Pressable>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require('../assets/maintenance.png')}
        />
        <View style={[styles.skipParent, styles.parentFlexBox]}>
          <Pressable onPress={() => navigation.navigate('LogIn')}>
            <Text style={[styles.skip1, styles.textTypo]}>Skip</Text>
          </Pressable>
          <Image
            style={[styles.frameIcon1, styles.frameSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/skip.png')}
          />
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo2]}>العربية</Text>
          <View style={[styles.signInWrapper, styles.wrapperFlexBox]}>
            <Pressable onPress={() => navigation.navigate('LogIn')}>
              <Text style={[styles.signIn1, styles.textTypo]}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
  },
  frameSpaceBlock: {
    marginLeft: '5%',
    height: 10,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  textTypo: {
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo2: {
    color: 'black',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dGBaysan,
  },
  onBordeing6Child: {
    top: 0,
    left: '-3%',
    width: '105%',
    height: '69%',
    position: 'absolute',
  },
  maintenanceServices: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    width: '35%',
    height: 32,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '700',
  },
  transformYourMaintenance: {
    lineHeight: 20,
    color: 'gray',
    width: '35%',
    height: 58,
    marginTop: 8,
    textAlign: 'center',
  },
  maintenanceServicesParent: {
    top: '70%',
    left: '3%',
    position: 'absolute',
  },
  frameChild: {
    height: 10,
    width: 10,
  },
  frameItem: {
    width: 10,
    marginLeft: 8,
  },
  frameInner: {
    borderRadius: Border.br_mini,
    width: 28,
    backgroundColor: Color.praimary,
  },
  ellipseParent: {
    top: '96%',
    flexDirection: 'row',
    left: '40%',
    position: 'absolute',
  },
  next: {
    color: 'white',
    fontWeight: '600',
  },
  nextWrapper: {
    top: '94%',
    left: '75%',
    width: 75,
    height: 36,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.praimary,
    position: 'absolute',
  },
  frameIcon: {
    top: '35%',
    width: 200,
    height: 200,
    left: '24%',
    position: 'absolute',
    overflow: 'hidden',
  },
  skip1: {
    fontWeight: '600',
    textAlign: 'center',
  },
  frameIcon1: {
    width: 10,
    marginLeft: '4%',
    overflow: 'hidden',
  },
  skipParent: {
    top: '95%',
    left: '4%',
  },
  text: {
    textAlign: 'left',
    fontWeight: '600',
  },
  signIn1: {
    lineHeight: 26,
    display: 'flex',
    width: 44,
    height: 24,
    justifyContent: 'center',
    color: Color.praimary,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
  signInWrapper: {
    borderStyle: 'solid',
    borderColor: Color.praimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    marginLeft: '66%',
  },
  parent: {
    top: '5%',
    left: '4%',
  },
  onBordeing6: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: 'hidden',
  },
});

export default OnBordeing5;
