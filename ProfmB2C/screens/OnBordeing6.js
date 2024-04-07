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
import {FontFamily, Color, FontSize, Padding, Border} from '../GlobalStyles';

const OnBordeing6 = ({onNext}) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View
        style={[
          styles.onBordeing7,
          {height: windowHeight, width: windowWidth},
        ]}>
        <Image
          style={styles.onBordeing7Child}
          resizeMode="cover"
          source={require('../assets/group-239086.png')}
        />
        <Pressable
          style={[styles.getStartedWrapper, styles.signWrapperFlexBox]}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            get started
          </Text>
        </Pressable>
        <View style={styles.facilitiesManagementAndMainParent}>
          <Text
            style={[
              styles.facilitiesManagementAnd,
              styles.getStartedTypo,
            ]}>{`Facilities management and maintenance
`}</Text>
          <Text
            style={[
              styles.joinACommunity,
              styles.getStartedTypo,
            ]}>{`join a community of satisfied users who have transformed their approach to facility maintenance and management let's optimize your workflow together.


`}</Text>
        </View>
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <Image
            style={[styles.frameItem, styles.frameItemSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <Image
            style={[styles.frameItem, styles.frameItemSpaceBlock]}
            resizeMode="cover"
            source={require('../assets/ellipse-701.png')}
          />
          <View style={[styles.rectangleView, styles.frameItemSpaceBlock]} />
        </View>
        <Image
          style={[styles.frameIcon, styles.parentPosition]}
          resizeMode="cover"
          source={require('../assets/facility.png')}
        />
        <View style={[styles.parent, styles.parentPosition1]}>
          <Text style={[styles.text, styles.textTypo2]}>العربية</Text>
          <View style={[styles.signInWrapper, styles.signWrapperFlexBox]}>
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
  signWrapperFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedTypo: {
    fontFamily: FontFamily.dGBaysan,
    textAlign: 'center',
  },
  parentPosition: {
    left: '50%',
    position: 'absolute',
  },
  parentPosition1: {
    left: '4%',
    position: 'absolute',
  },
  frameItemSpaceBlock: {
    marginLeft: '6%',
    height: 10,
  },
  textTypo: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  textTypo2: {
    color: 'black',
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_lg,
  },
  onBordeing7Child: {
    top: 0,
    left: '-2%',
    width: '105%',
    height: '69%',
    position: 'absolute',
  },
  getStarted: {
    textTransform: 'capitalize',
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  getStartedWrapper: {
    top: '93%',
    left: '71%',
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    backgroundColor: Color.praimary,
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    position: 'absolute',
  },
  facilitiesManagementAnd: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    width: '100%',
    height: 64,
    textAlign: 'center',
    fontWeight: '700',
  },
  joinACommunity: {
    lineHeight: 20,
    color: 'gray',
    width: '94%',
    height: 58,
    marginTop: 8,
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  facilitiesManagementAndMainParent: {
    top: '70%',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
  frameChild: {
    height: 10,
    width: 10,
  },
  frameItem: {
    width: 10,
    marginLeft: 8,
  },
  rectangleView: {
    borderRadius: Border.br_mini,
    width: 28,
    backgroundColor: Color.praimary,
  },
  ellipseParent: {
    marginLeft: '-6%',
    top: '96%',
    flexDirection: 'row',
  },
  frameIcon: {
    marginLeft: '-23.5%',
    top: '34%',
    width: 225,
    height: 200,
    overflow: 'hidden',
  },
  text: {
    fontWeight: '600',
    textAlign: 'left',
  },
  signIn1: {
    lineHeight: 26,
    display: 'flex',
    width: 44,
    height: 24,
    textAlign: 'center',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInWrapper: {
    borderStyle: 'solid',
    borderColor: Color.praimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: '66%',
    flexDirection: 'row',
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
  },
  parent: {
    top: '5%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  onBordeing7: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: 'hidden',
  },
});

export default OnBordeing6;
