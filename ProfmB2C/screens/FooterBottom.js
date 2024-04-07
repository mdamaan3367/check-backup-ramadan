import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontSize, FontFamily, Padding, Border} from '../GlobalStyles';


const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

const FooterBottom = () => {
    const navigation = useNavigation();
  return (
    <View style={{bottom:"-4%"}}>
           <View style={[styles.navBar, styles.navPosition]}>
            <View style={[styles.navBar1, styles.navFlexBox]}>
              <Pressable
                style={[styles.navBarInner, styles.navFlexBox]}
                onPress={() => navigation.navigate('Bottom', {screen: 'Home'})}>
                <View style={styles.parentSpaceBlock}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/home23.png')}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </Pressable>
              <View style={[styles.navBarChild, styles.navBarChildLayout]}>
                <View style={styles.navFlexBox}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/clock3.png')}
                  />
                  <Text style={[styles.history, styles.homeTypo]}>History</Text>
                </View>
              </View>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Bookings'})}>
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/calendartick4.png')}
                  />
                  <Text style={[styles.bookings, styles.homeTypo]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Profile'})}>
                <View style={styles.navFlexBox}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/vuesaxlinearuser.png')}
                  />
                  <Text style={[styles.bookings, styles.homeTypo]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Menu'})}>
                <View
                  style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/textalignleft.png')}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            
          </View> 
    </View>
  )
}

export default FooterBottom

const styles = StyleSheet.create({
    serviceTransform: {
        display: 'flex',
        textTransform: 'capitalize',
        alignItems: 'center',
      },
      nextWrapper: {
        top: '-30%',
        left: '72%',
        width: 85,
        height: 36,
        paddingHorizontal: Padding.p_3xs,
        backgroundColor: Color.praimary,
        position: 'absolute',
      },
      next: {
        color: 'white',
        fontWeight: '600',
      },
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
      iconPosition: {
        bottom: '11.11%',
        top: '79.17%',
        height: '9.72%',
        maxHeight: '100%',
      },
      componentLayout: {
        height: 72,
        width: "100%",
        marginTop:5
      },
      vectorIconPosition: {
        left: '50%',
        position: 'absolute',
      },
      vectorIconPosition2: {
        left: '2%',
        position: 'absolute',
      },
      regularCleaningChildPosition: {
        width: "100%",
        left: 0,
        position: 'absolute',
      },
      serviceDetailsTypo: {
        color: Color.grayBlack,
        fontSize: FontSize.med_size,
        fontWeight: '300',
        textAlign: 'left',
        fontFamily: FontFamily.dGBaysan,
      },
      cleaningServicePosition: {
        left: "4%",
        position: 'absolute',
      },
      navPosition: {
        position: 'absolute',
        bottom: "-5%",
        left: 0,
        width: '100%',
        zIndex: 120, // Adjust the z-index as needed
      },
      navFlexBox: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      homeTypo: {
        marginTop: 4,
        color: "gray",
        lineHeight: 16,
        fontSize: FontSize.med_size,
        textAlign: 'left',
      },
      navBarChildLayout: {
        width: 94,
        justifyContent: 'center',
        height: 56,
        alignItems: 'center',
      },
      parentSpaceBlock: {
        paddingVertical: Padding.p_8xs,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      component10Child: {
        left: '0%',
        backgroundColor: Color.colorAliceblue_200,
        bottom: '0%',
        right: '0%',
        top: '0%',
        height: '100%',
        position: 'absolute',
        width: '100%',
      },
      regularCleaning1: {
        height: '60%',
        width: '100.87%',
        top: '20%',
        left: '4.27%',
        fontSize: FontSize.size_sm,
        color: Color.praimary,
        textAlign: 'left',
        fontFamily: FontFamily.dGBaysan,
        display: 'flex',
        position: 'absolute',
      },
      component10Item: {
        width: '49.87%',
        left: '50.13%',
        maxHeight: '100%',
        overflow: 'hidden',
        maxWidth: '100%',
        bottom: '0%',
        right: '0%',
        top: '0%',
        height: '100%',
        position: 'absolute',
      },
      groupIcon: {
        width: '3.2%',
        right: '48.27%',
        left: '48.53%',
        overflow: 'hidden',
        maxWidth: '100%',
        bottom: '11.11%',
        top: '79.17%',
        height: '9.72%',
        position: 'absolute',
      },
      component11: {
        marginTop: 14,
      },
      vectorIcon: {
        marginLeft: -5.5,
        width: 12,
        bottom: '11.11%',
        top: '79.17%',
        height: '9.72%',
        maxHeight: '100%',
      },
      frameChild: {
        width: windowWidth,
        height: 49,
        marginTop: 65,
        overflow: 'hidden',
      },
      frameParent: {
        top: "55%",
        position: 'absolute',
        left:"0%"
      },
      profm: {
        textTransform: 'uppercase',
      },
      profmProvidesAWideRangeOf: {
        lineHeight: 16,
      },
      blankLine: {
        lineHeight: 15,
      },
      profmProvidesAContainer: {
        width: "95%",
        height: 32,
        left: "4%",
        position: 'absolute',
        top: "30%",
      },
      cleaningService: {
        top: "12%",
        fontSize: FontSize.size_base,
        fontWeight: '600',
        color: Color.black,
        width: "100%",
        height: 24,
        display: 'flex',
        textTransform: 'capitalize',
        alignItems: 'center',
        textAlign: 'left',
        fontFamily: FontFamily.dGBaysan,
      },
      frameIcon: {
        width: 14,
        height: 14,
        overflow: 'hidden',
      },
      frameIcon2: {
        width: 29,
        height: 29,
        overflow: 'hidden',
      },
      serviceDetails: {
        width: 120,
        height: 16,
        marginLeft: 8,
        display: 'flex',
        textTransform: 'capitalize',
        alignItems: 'center',
      },
      frameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      vectorIcon1: {
        width: 7,
        height: 12,
        marginLeft: "50%",
      },
      frameGroup: {
        top: "55%",
        borderRadius: Border.br_5xs,
        backgroundColor:"#d3d3d3",
        padding: Padding.p_xs,
        flexDirection: 'row',
        alignItems: 'center',
      },
      profmProvidesAWideRangeOfParent: {
        top: "30%",
        height: 176,
        backgroundColor: Color.lightBGPrimary,
        overflow: 'hidden',
      },
      regularCleaningChild: {
        height: 208,
        top: 0,
      },
      home2Icon: {
        width: 24,
        height: 24,
      },
      home: {
        fontWeight: '300',
        marginTop: 4,
        color: "gray",
        fontFamily: FontFamily.dGBaysan,
      },
      navBarInner: {
        width: 93,
        height: 56,
        justifyContent: 'center',
      },
      history: {
        fontWeight: '500',
        fontFamily: FontFamily.med,
      },
      navBarChild: {
        display: 'none',
      },
      bookings: {
        fontWeight: '300',
        marginTop: 4,
        color:"gray",
        fontFamily: FontFamily.dGBaysan,
        textTransform: 'capitalize',
      },
      calendarTickParent: {
        alignItems: 'center',
      },
      frameContainer12Overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(113, 113, 113, 0.3)',
      },
      frameContainer12Bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
      },
      textalignLeftParent: {
        height: 53,
      },
      navBar1: {
        height: 56,
        justifyContent: 'center',
        marginLeft: -187.5,
        left: '50%',
        width: 375,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        backgroundColor: Color.lightBGPrimary,
      },
      homeIndicator1: {
        borderRadius: Border.br_81xl,
        backgroundColor: Color.colorGray_200,
        width: 134,
        height: 5,
      },
      homeIndicator: {
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        paddingVertical: Padding.p_5xs,
        height: 34,
        paddingHorizontal: 0,
        alignItems: 'center',
      },
      webViewbottom: {
        borderBottomRightRadius: Border.br_8xs,
        borderBottomLeftRadius: Border.br_8xs,
        height: 34,
        top: 56,
        backgroundColor: Color.lightBGPrimary,
      },
      navBar: {
        bottom: "0%",
        height: 80,
        zIndex: 1,
        elevation: 1, // Minimum value for visible elevation on Android
        shadowColor: "#808080", // Use hexadecimal or RGB color code for iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "white",
      
        overflow: "hidden",

      },
      
      regularCleaning: {
        backgroundColor: Color.colorGray_100,
        flex: 1,
      },
})