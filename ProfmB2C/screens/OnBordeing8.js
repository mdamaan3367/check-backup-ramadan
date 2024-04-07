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
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, Padding, Border, Color} from '../GlobalStyles';

const OnBordeing8 = ({onNext}) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View
        style={[
          styles.onBordeing5,
          {height: windowHeight, width: windowWidth},
        ]}>
        <Image
          style={styles.onBordeing5Child}
          resizeMode="cover"
          source={require('../assets/group-239085.png')}
        />
        <View style={styles.onBordeing5Item} />
        <View style={styles.cleaningServicesParent}>
          <Text style={styles.cleaningServices}>
            <Text style={styles.cleaning}>{`cleaning `}</Text>
            <Text style={styles.cleaning}>Services</Text>
          </Text>
          <Text style={[styles.transformYourSpace, styles.nextTypo]}>
            Transform your space with our cleaning services. Let us bring
            effortless shine and a sparkling environment to your door say hello
            to a home you love .
          </Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <View style={[styles.frameItem, styles.frameSpaceBlock]} />
          <Image
            style={[styles.frameInner, styles.frameSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <Image
            style={[styles.frameInner, styles.frameSpaceBlock]}
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
          source={require('../assets/cleanOnboard.png')}
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
    marginLeft: '7%',
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
  onBordeing5Child: {
    top: 0,
    width: '100%',
    height: '69%',
    position: 'absolute',
  },
  onBordeing5Item: {
    marginLeft: -61.5,
    top: 437,
    width: 123,
    opacity: 0.2,
    height: 24,
    backgroundColor: Color.praimary1,
    left: '50%',
    position: 'absolute',
  },
  cleaning: {
    textTransform: 'capitalize',
  },
  s: {
    textTransform: 'lowercase',
  },
  cleaningServices: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    width: '100%',
    height: 32,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '700',
  },
  transformYourSpace: {
    letterSpacing: 0.3,
    lineHeight: 20,
    color: 'gray',
    width: '97%',
    marginTop: 8,
    textAlign: 'center',
  },
  cleaningServicesParent: {
    top: '72%',
    width: '100%',
    position: 'absolute',
  },
  frameChild: {
    height: 10,
    width: 10,
  },
  frameItem: {
    borderRadius: Border.br_mini,
    width: 28,
    backgroundColor: Color.praimary,
  },
  frameInner: {
    width: 10,
    marginLeft: 8,
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
    left: '74%',
    width: 75,
    height: 36,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.praimary,
    position: 'absolute',
  },
  frameIcon: {
    top: '34%',
    width: 200,
    height: 200,
    left: '25%',
    position: 'absolute',
    overflow: 'hidden',
  },
  skip1: {
    fontWeight: '600',
    textAlign: 'center',
  },
  frameIcon1: {
    width: 10,
    marginLeft: '2%',
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
    justifyContent: 'center',
    color: Color.praimary,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
    height: 26,
  },
  signInWrapper: {
    borderStyle: 'solid',
    borderColor: Color.praimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    marginLeft: '66.5%',
  },
  parent: {
    top: '6%',
    left: '3%',
  },
  onBordeing5: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: 'hidden',
  },
});

export default OnBordeing8;
