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
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';

const OnBordeing7 = ({onNext}) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View
        style={[styles.onBordeing, {height: windowHeight, width: windowWidth}]}>
        <Image
          style={[styles.onBordeingChild, styles.bordeingLayout]}
          resizeMode="cover"
          source={require('../assets/group-239086.png')}
        />
        <View style={styles.welcomeParent}>
          <Text style={styles.welcome}>{`Welcome 
`}</Text>
          <Text style={styles.whichIncludesFacilities}>
            Which includes facilities management improving and organizing
            cleaning, maintenance and facility operations smoothly.
          </Text>
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require('../assets/ellipse-70.png')}
          />
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require('../assets/ellipse-70.png')}
          />
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require('../assets/ellipse-70.png')}
          />
        </View>

        <Pressable
          style={[styles.nextWrapper, styles.wrapperFlexBox]}
          onPress={onNext}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </Pressable>
        <View style={[styles.skipParent, styles.parentFlexBox]}>
          <Pressable onPress={() => navigation.navigate('LogIn')}>
            <Text style={[styles.skip1, styles.textTypo]}>Skip</Text>
          </Pressable>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            resizeMode="cover"
            source={require('../assets/skip.png')}
          />
        </View>

        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require('../assets/welcome.png')}
        />
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
    left: '4%',
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
  frameLayout: {
    marginLeft: 8,
    width: 10,
    height: 10,
  },
  onBordeingChild: {
    top: 0,
    left: '-2%',
    width: '105%',
    height: '69%',
    position: 'absolute',
  },
  welcome: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    width: '100%',
    height: 32,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '700',
  },
  whichIncludesFacilities: {
    letterSpacing: 0.3,
    lineHeight: 20,
    color: 'gray',
    width: '100%',
    marginTop: 8,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  welcomeParent: {
    top: '70%',
    width: '100%',
    position: 'absolute',
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    width: 28,
    height: 10,
    backgroundColor: Color.praimary,
  },
  rectangleParent: {
    top: '97%',
    flexDirection: 'row',
    left: '40%',
    position: 'absolute',
  },
  next: {
    color: 'white',
    fontWeight: '600',
  },
  nextWrapper: {
    top: '94.5%',
    left: '74%',
    width: 75,
    height: 36,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.praimary,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    position: 'absolute',
  },
  skip1: {
    fontWeight: '600',
    textAlign: 'center',
  },
  frameIcon: {
    overflow: 'hidden',
  },
  skipParent: {
    top: '95.5%',
  },
  frameIcon1: {
    top: '35%',
    width: 200,
    height: 200,
    left: '23%',
    position: 'absolute',
    overflow: 'hidden',
  },
  text: {
    textAlign: 'left',
    fontWeight: '600',
  },
  signIn1: {
    lineHeight: 24,
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
  },
  onBordeing: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: 'hidden',
  },
});

export default OnBordeing7;
