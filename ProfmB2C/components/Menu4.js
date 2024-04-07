import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Menu4 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu, styles.menuLayout]}>
      <View style={styles.aboutAppParent}>
        <Text style={[styles.aboutApp, styles.accountLayout]}>About app</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238789.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>
                  about app
                </Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238790.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>
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
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238791.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>
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
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/group-238792.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>تغيير اللغة</Text>
            </View>
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
            <Text style={[styles.text1, styles.homeTypo1]}>العربية</Text>
          </View>
          <Pressable
            style={[styles.rectangleGroup, styles.rectangleLayout]}
            onPress={() => navigation.navigate("Menu1")}
          >
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/group-2387971.png")}
              />
              <Text style={[styles.doYouWant, styles.textTypo]}>
                Do you want to logout?
              </Text>
            </View>
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.accountInfoParent}>
        <Text style={[styles.accountInfo, styles.accountLayout]}>
          Account Info
        </Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238781.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>Profile</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238793.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>
                  Change password
                </Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupContainer}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-238788.png")}
                />
                <Text style={[styles.aboutApp1, styles.textTypo]}>
                  My addresses
                </Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
        <View style={styles.groupChildShadowBox} />
        <View style={styles.frameParent}>
          <View style={styles.groupContainer}>
            <Image
              style={styles.arrow21Layout}
              resizeMode="cover"
              source={require("../assets/group-238795.png")}
            />
            <Text style={[styles.aboutApp1, styles.textTypo]}>invoices</Text>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
        <View style={styles.groupChildShadowBox} />
        <View style={styles.frameParent}>
          <View style={styles.groupContainer}>
            <Image
              style={styles.arrow21Layout}
              resizeMode="cover"
              source={require("../assets/group-238796.png")}
            />
            <Text style={[styles.aboutApp1, styles.textTypo]}>Orders</Text>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
        </View>
      </View>
      <Text style={[styles.myAccount, styles.accountLayout]}>My account</Text>
      <View style={[styles.navBarParent, styles.navSpaceBlock]}>
        <View style={[styles.navBar, styles.navFlexBox]}>
          <View style={[styles.navBarInner, styles.navFlexBox]}>
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/home22.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
          <View style={[styles.navBarChild, styles.navLayout]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
          <View style={styles.navLayout}>
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/calendartick2.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
            </View>
          </View>
          <View style={styles.navLayout}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearuser.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
            </View>
          </View>
          <View style={styles.navLayout}>
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/textalignleft1.png")}
              />
              <Text style={[styles.menu1, styles.homeTypo]}>Menu</Text>
            </View>
          </View>
        </View>
        <WebViewBottom
          webViewBottomPosition="absolute"
          webViewBottomBackgroundColor="#fff"
          webViewBottomMarginLeft={-187.5}
          webViewBottomTop={56}
          webViewBottomLeft="50%"
          webViewBottomBorderBottomRightRadius={5}
          webViewBottomBorderBottomLeftRadius={5}
          webViewBottomWidth={375}
          webViewBottomHeight={34}
          webViewBottomBottom="unset"
          homeIndicatorBackgroundColor="#1d2939"
        />
      </View>
      <View style={[styles.groupParent10, styles.groupPosition]}>
        <View style={[styles.groupParent10, styles.groupPosition]}>
          <View style={[styles.groupChild7, styles.groupPosition]} />
          <View style={[styles.rectangleParent7, styles.groupChild8Layout]}>
            <View style={[styles.groupChild8, styles.faceIdShadowBox]} />
            <Image
              style={styles.profmLogo1111}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-11.png")}
            />
          </View>
          <Pressable
            style={[styles.arrow21, styles.menu2Position]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/arrow-2-11.png")}
            />
          </Pressable>
          <Text style={[styles.menu2, styles.menu2FlexBox]}>menu</Text>
        </View>
        <View style={styles.iphoneXOrNewer}>
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
            source={require("../assets/left-side.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.menuChild, styles.menuChildPosition]}
        onPress={() => navigation.navigate("Menu")}
      />
      <View style={[styles.loginWithFaceId, styles.menuChildPosition]}>
        <View style={[styles.faceId, styles.faceIdShadowBox]}>
          <View style={[styles.attendanceSuccessful, styles.menuChildPosition]}>
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua1.png")}
            />
            <View style={styles.changesSavedWrapper}>
              <Text style={[styles.changesSaved, styles.menu2FlexBox]}>
                Changes saved
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("Menu")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector7.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  accountLayout: {
    height: 16,
    display: "flex",
    color: Color.grayBlack,
    alignItems: "center",
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
  groupIconLayout: {
    left: "93.29%",
    right: "4.66%",
    width: "2.04%",
    height: "21.43%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleParentPosition: {
    left: "4.27%",
    right: "4.27%",
    width: "91.47%",
    height: "6.9%",
    position: "absolute",
  },
  navSpaceBlock: {
    marginLeft: -187.5,
    width: 375,
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
  navLayout: {
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
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  groupChild8Layout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  faceIdShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
  },
  menu2Position: {
    top: 43,
    position: "absolute",
  },
  menu2FlexBox: {
    textAlign: "center",
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  menuChildPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  aboutApp: {
    width: 178,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  groupChildShadowBox: {
    borderWidth: 0.3,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  aboutApp1: {
    width: 120,
  },
  groupContainer: {
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
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: 56,
  },
  rectangleGroup: {
    marginTop: 8,
    height: 56,
  },
  text: {
    width: 68,
  },
  groupIcon3: {
    top: "39.29%",
    bottom: "39.29%",
  },
  text1: {
    top: 20,
    left: 275,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    width: 37,
    height: 16,
    display: "flex",
    color: Color.grayBlack,
    alignItems: "center",
    textTransform: "capitalize",
    fontWeight: "300",
    position: "absolute",
  },
  doYouWant: {
    width: 162,
  },
  groupIcon4: {
    top: "60.71%",
    bottom: "17.86%",
  },
  groupParent: {
    marginTop: 16,
  },
  aboutAppParent: {
    top: 572,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  accountInfo: {
    width: 131,
    height: 16,
    display: "flex",
    color: Color.grayBlack,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  accountInfoParent: {
    top: 156,
    left: 16,
    position: "absolute",
  },
  rectangleParent4: {
    top: "52.71%",
    bottom: "40.39%",
  },
  rectangleParent5: {
    top: "60.59%",
    bottom: "32.51%",
  },
  myAccount: {
    top: 396,
    left: 16,
    width: 178,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    position: "absolute",
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
  menu1: {
    color: Color.praimary,
    fontWeight: "700",
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    bottom: 34,
    marginLeft: -187.5,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.whait,
    justifyContent: "center",
    height: 56,
    left: "50%",
    position: "absolute",
  },
  navBarParent: {
    bottom: 0,
    height: 90,
    left: "50%",
    position: "absolute",
  },
  groupChild7: {
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
    left: 0,
    backgroundColor: Color.whait,
  },
  groupChild8: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  rectangleParent7: {
    marginLeft: -79.5,
    top: 76,
  },
  arrow21: {
    height: 24,
    width: 24,
    left: 16,
  },
  menu2: {
    marginLeft: -20.5,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    width: 41,
    top: 43,
    position: "absolute",
    color: Color.praimary,
    left: "50%",
  },
  groupParent10: {
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
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  menuChild: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  changesSaved: {
    fontSize: FontSize.size_2xl,
    lineHeight: 30,
    color: Color.colorMediumseagreen,
    width: 294,
    fontWeight: "700",
  },
  changesSavedWrapper: {
    marginTop: 32,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -116,
    marginLeft: -146.5,
    height: 231,
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "88.34%",
    top: "7.22%",
    right: "5.83%",
    bottom: "85.56%",
    width: "5.83%",
    height: "7.22%",
    position: "absolute",
  },
  faceId: {
    height: 277,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    shadowRadius: 10,
    backgroundColor: Color.whait,
    width: 343,
    overflow: "hidden",
  },
  loginWithFaceId: {
    marginTop: -139,
    height: 278,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -171.5,
  },
  menu: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    height: 812,
    width: 375,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default Menu4;
