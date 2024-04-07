import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning from "./RegularCleaning";
import WebViewBottom from "./WebViewBottom";
import Property1Default from "./Property1Default";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Menu3 = ({ onClose }) => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [frameContainer19Visible, setFrameContainer19Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(true);
  }, []);

  const closeFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.accountInfoParent, styles.parentPosition]}>
          <Text style={[styles.accountInfo, styles.text1Typo]}>
            Account Info
          </Text>
          <Pressable
            style={[styles.rectangleParent, styles.rectangleLayout]}
            onPress={openGroupContainer}
          >
            <View style={styles.groupChildShadowBox} />
            <View style={[styles.frameParent, styles.parentPosition]}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-2387811.png")}
                />
                <Text style={[styles.signIn, styles.textTypo]}>sign in</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </Pressable>
        </View>
        <View style={[styles.aboutAppParent, styles.parentPosition]}>
          <Text style={[styles.aboutApp, styles.text1Typo]}>About app</Text>
          <View style={styles.groupContainer}>
            <Pressable
              style={[styles.rectangleGroup, styles.rectangleLayout]}
              onPress={() => navigation.navigate("AboutApp")}
            >
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.frameParent, styles.parentPosition]}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-2387891.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    about app
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </Pressable>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.frameParent, styles.parentPosition]}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-238790.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    terms of service
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.frameParent, styles.parentPosition]}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-2387911.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    privacy policy
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.frameParent, styles.parentPosition]}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-2387921.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>تغيير اللغة</Text>
              </View>
              <Image
                style={[styles.groupIcon4, styles.menuLayout]}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>العربية</Text>
            </View>
          </View>
        </View>
        <View style={[styles.navBarWrapper, styles.menuPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.homeTypo]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer19}
            >
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
              </View>
            </Pressable>
            <View style={styles.navBarChildLayout}>
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft1.png")}
                />
                <Text style={[styles.menu1, styles.homeTypo]}>Menu</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent4, styles.groupChildPosition]}>
          <View style={[styles.groupParent4, styles.groupChildPosition]}>
            <View style={[styles.groupChild2, styles.groupChildPosition]} />
            <View style={[styles.rectangleParent3, styles.groupChild3Layout]}>
              <View style={[styles.groupChild3, styles.groupChild3Layout]} />
              <Image
                style={[styles.profmLogo1111, styles.menuPosition]}
                resizeMode="cover"
                source={require("../assets/profm-logo1-1-1-17.png")}
              />
            </View>
            <Pressable
              style={[styles.arrow21, styles.arrow21Layout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrow-2-11.png")}
              />
            </Pressable>
            <Text style={[styles.menu2, styles.menu2FlexBox]}>menu</Text>
          </View>
          <View style={[styles.iphoneXOrNewer, styles.menuPosition]}>
            <Image
              style={styles.notchIcon}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi3.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                resizeMode="cover"
                source={require("../assets/mobile-signal.png")}
              />
              <Image
                style={styles.recordingIndicatorIcon}
                resizeMode="cover"
                source={require("../assets/recording-indicator.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require("../assets/left-side3.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.menuChild, styles.menuPosition]}
          onPress={() => navigation.navigate("Menu2")}
        />
        <View style={[styles.webViewbottomParent, styles.menuPosition]}>
          <WebViewBottom
            webViewBottomPosition="absolute"
            webViewBottomBackgroundColor="#fff"
            webViewBottomMarginLeft={-187.5}
            webViewBottomTop={258}
            webViewBottomLeft="50%"
            webViewBottomBorderBottomRightRadius={5}
            webViewBottomBorderBottomLeftRadius={5}
            webViewBottomWidth={375}
            webViewBottomHeight={34}
            webViewBottomBottom="unset"
            homeIndicatorBackgroundColor="#1d2939"
          />
          <View style={[styles.groupChild4, styles.groupChildPosition]} />
        </View>
        <Text style={[styles.language, styles.text2Layout]}>language</Text>
        <View style={styles.menuItem} />
        <Property1Default
          logIn="save"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={-171.5}
          property1DefaultTop={717}
          property1DefaultLeft="50%"
          property1DefaultWidth={343}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom="unset"
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
          onButtonBigPress={() => navigation.goBack()}
        />
        <View style={[styles.instanceParent, styles.parentPosition]}>
          <View style={styles.rectangleParentLayout}>
            <View style={styles.instanceChild} />
            <View style={styles.englishParent}>
              <Text style={[styles.english, styles.text2Layout]}>English</Text>
              <Text style={[styles.text2, styles.text2Layout]}>الإنجليزية</Text>
            </View>
          </View>
          <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
            <View style={styles.instanceItem} />
            <View style={styles.englishParent}>
              <Text style={[styles.english, styles.text2Layout]}>العربية</Text>
              <Text style={[styles.text2, styles.text2Layout]}>Arabic</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <RegularCleaning onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer19Visible}>
        <View style={styles.frameContainer19Overlay}>
          <Pressable
            style={styles.frameContainer19Bg}
            onPress={closeFrameContainer19}
          />
          <RegularCleaning onClose={closeFrameContainer19} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  text1Typo: {
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  rectangleLayout: {
    width: 343,
    height: 56,
  },
  textTypo: {
    marginLeft: 8,
    color: Color.black,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  menuPosition: {
    left: "50%",
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  navBarChildLayout: {
    width: 94,
    justifyContent: "center",
    height: 56,
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  groupChild3Layout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  menu2FlexBox: {
    textAlign: "center",
    justifyContent: "center",
  },
  text2Layout: {
    width: 72,
    lineHeight: 30,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  rectangleParentLayout: {
    height: 93,
    width: 160,
  },
  accountInfo: {
    width: 131,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    height: 16,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChildShadowBox: {
    borderWidth: 0.3,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  signIn: {
    width: 120,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    width: 7,
    height: 12,
    marginLeft: 152,
  },
  frameParent: {
    top: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 16,
    height: 56,
  },
  accountInfoParent: {
    top: 156,
  },
  aboutApp: {
    width: 178,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    height: 16,
  },
  rectangleGroup: {
    height: 56,
  },
  rectangleContainer: {
    marginTop: 8,
    height: 56,
  },
  text: {
    width: 68,
  },
  groupIcon4: {
    height: "21.43%",
    width: "2.04%",
    top: "39.29%",
    right: "4.66%",
    bottom: "39.29%",
    left: "93.29%",
    position: "absolute",
  },
  text1: {
    top: 20,
    left: 275,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    width: 37,
    fontWeight: "300",
    position: "absolute",
  },
  groupContainer: {
    marginTop: 16,
  },
  aboutAppParent: {
    top: 268,
  },
  home: {
    color: Color.a6A6A6,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
    height: 56,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    color: Color.a6A6A6,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    color: Color.a6A6A6,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer19Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer19Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menu1: {
    fontWeight: "700",
    color: Color.praimary,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    bottom: 0,
    left: "50%",
    position: "absolute",
    marginLeft: -187.5,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.whait,
    height: 56,
  },
  navBarWrapper: {
    bottom: 34,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    height: 56,
  },
  groupChild2: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  groupChild3: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleParent3: {
    marginLeft: -79.5,
    top: 76,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    top: 43,
    left: 16,
    position: "absolute",
  },
  menu2: {
    marginLeft: -20.5,
    top: 40,
    fontSize: FontSize.size_base,
    width: 41,
    height: 30,
    fontWeight: "600",
    color: Color.praimary,
    left: "50%",
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupParent4: {
    height: 124,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
    width: 24,
    position: "absolute",
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
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 42,
    top: 0,
    overflow: "hidden",
    left: "50%",
  },
  menuChild: {
    marginTop: -406,
    top: "50%",
    backgroundColor: Color.colorGray_300,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    height: 812,
  },
  groupChild4: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 258,
    backgroundColor: Color.whait,
  },
  webViewbottomParent: {
    top: 520,
    height: 292,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
  },
  language: {
    top: 552,
    fontWeight: "600",
    color: Color.black,
    lineHeight: 30,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  menuItem: {
    top: 532,
    left: 164,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.a6A6A6,
    width: 47,
    height: 5,
    position: "absolute",
  },
  instanceChild: {
    borderColor: Color.praimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.whait,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  english: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: Color.praimary,
  },
  text2: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: 8,
    fontWeight: "300",
    color: Color.grayBlack,
    lineHeight: 30,
  },
  englishParent: {
    height: "43.01%",
    width: "45%",
    top: "27.96%",
    right: "27.5%",
    bottom: "29.03%",
    left: "27.5%",
    position: "absolute",
  },
  instanceItem: {
    borderWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  rectangleParent5: {
    marginLeft: 23,
  },
  instanceParent: {
    top: 592,
    flexDirection: "row",
  },
  menu: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default Menu3;
