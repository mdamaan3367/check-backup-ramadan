import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Property1Default from "./Property1Default";
import Property1Default1 from "./Property1Default1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Splash3 = ({ onClose }) => {
  return (
    <View style={[styles.splash21, styles.splash21Layout]}>
      <Image
        style={[styles.splash21Child, styles.splash21Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-4318.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.mobileEmail, styles.passwordLayout]}>
            Mobile / Email
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View
              style={[
                styles.vuesaxoutlinecallParent,
                styles.frameGroupPosition,
              ]}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/vuesaxoutlinecall.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>+966 500891756</Text>
            </View>
          </View>
        </View>
        <View style={styles.passwordParent}>
          <Text style={[styles.password, styles.passwordLayout]}>Password</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.frameGroup, styles.frameGroupPosition]}>
              <View style={styles.lockParent}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/lock.png")}
                />
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={[styles.ellipseIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.eyeSlashIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/eyeslash3.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Property1Default
        logIn="Log in"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={364}
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
      />
      <Text style={[styles.forgotPassword, styles.passwordLayout]}>
        Forgot Password?
      </Text>
      <View style={[styles.frameContainer, styles.frameContainerPosition]}>
        <View style={styles.lockParent}>
          <View style={[styles.lineView, styles.lineViewBorder]} />
          <Text style={[styles.orLogIn, styles.orLogInTypo]}>
            or log in with
          </Text>
          <View style={[styles.frameChild7, styles.lineViewBorder]} />
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIconLayout}
            resizeMode="cover"
            source={require("../assets/group-238655.png")}
          />
          <Image
            style={[styles.frameChild8, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-238654.png")}
          />
          <Image
            style={[styles.frameChild8, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-238656.png")}
          />
        </View>
      </View>
      <Property1Default1
        logIn="Sign Up"
        property1DefaultPosition="absolute"
        property1DefaultBackgroundColor="#fff"
        property1DefaultMarginLeft={-109.5}
        property1DefaultTop={687}
        property1DefaultLeft="50%"
        logInColor="#006daa"
      />
      <Text style={[styles.continueAsGuest, styles.orLogInTypo]}>
        Continue as guest
      </Text>
      <Image
        style={[styles.profmLogo1111, styles.splash21Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-1.png")}
      />
      <View style={[styles.iphoneXOrNewer, styles.splash21Position]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.arrow21Layout]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal1.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side1.png")}
        />
      </View>
      <Image
        style={[styles.arrow21, styles.arrow21Layout]}
        resizeMode="cover"
        source={require("../assets/arrow-2-1.png")}
      />
      <View style={[styles.splash21Item, styles.splash21Position]} />
      <View style={[styles.loginWithFaceId, styles.frameContainerPosition]}>
        <View style={styles.faceId}>
          <View style={[styles.attendanceSuccessful, styles.splash21Position]}>
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua.png")}
            />
            <View style={styles.successfulLogoutParent}>
              <Text style={[styles.successfulLogout, styles.textTypo]}>
                Successful logout
              </Text>
              <Text style={[styles.youCanLog, styles.textTypo]}>
                You can log in at any time
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vectorIcon, styles.splash21Layout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splash21Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  splash21Position: {
    left: "50%",
    position: "absolute",
  },
  passwordLayout: {
    display: "flex",
    height: 24,
    alignItems: "center",
    lineHeight: 30,
  },
  frameGroupPosition: {
    zIndex: 1,
    left: 12,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    height: 6,
    width: 6,
  },
  iconLayout1: {
    height: 18,
    width: 18,
  },
  frameContainerPosition: {
    marginLeft: -171.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  lineViewBorder: {
    opacity: 0.7,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.whait,
    borderStyle: "solid",
  },
  orLogInTypo: {
    height: 16,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  groupIconLayout: {
    height: 40,
    width: 40,
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  splash21Child: {
    top: "50%",
    marginLeft: -187.5,
    marginTop: -406,
    left: "50%",
    height: 812,
    width: 375,
  },
  mobileEmail: {
    width: 83,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.med_size,
  },
  frameShadowBox: {
    zIndex: 0,
    height: 48,
    borderWidth: 0.3,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
  },
  text: {
    color: Color.praimary,
    marginLeft: 8,
    fontSize: FontSize.med_size,
    textAlign: "center",
  },
  vuesaxoutlinecallParent: {
    top: 14,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 4,
  },
  password: {
    width: 92,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.med_size,
  },
  ellipseIcon: {
    marginLeft: 2,
  },
  ellipseParent: {
    marginLeft: 8,
    flexDirection: "row",
  },
  lockParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeSlashIcon: {
    marginLeft: 213,
  },
  frameGroup: {
    top: 15,
  },
  passwordParent: {
    marginTop: 16,
  },
  frameParent: {
    top: 172,
    left: 16,
    position: "absolute",
  },
  forgotPassword: {
    marginLeft: 72.5,
    top: 436,
    textAlign: "right",
    width: 99,
    height: 24,
    alignItems: "center",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontSize: FontSize.med_size,
    left: "50%",
    position: "absolute",
  },
  lineView: {
    width: 121,
  },
  orLogIn: {
    fontWeight: "300",
    width: 78,
    marginLeft: 13,
    color: Color.whait,
  },
  frameChild7: {
    width: 120,
    marginLeft: 13,
  },
  frameChild8: {
    marginLeft: 40,
  },
  groupParent: {
    marginTop: 48,
    flexDirection: "row",
  },
  frameContainer: {
    top: 500,
  },
  continueAsGuest: {
    marginLeft: -92.5,
    top: 751,
    letterSpacing: 0.7,
    color: Color.thacandry2,
    width: 185,
    fontWeight: "600",
    height: 16,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -74.5,
    top: 54,
    width: 150,
    height: 54,
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
  },
  arrow21: {
    top: 43,
    height: 24,
    left: 16,
    overflow: "hidden",
  },
  splash21Item: {
    backgroundColor: Color.colorGray_300,
    top: "50%",
    marginLeft: -187.5,
    marginTop: -406,
    left: "50%",
    height: 812,
    width: 375,
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  successfulLogout: {
    fontSize: FontSize.size_2xl,
    textTransform: "capitalize",
    fontWeight: "700",
    color: Color.colorMediumseagreen,
    width: 256,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
  },
  youCanLog: {
    fontSize: FontSize.size_base,
    color: Color.grayBlack,
    width: 292,
    marginTop: 8,
    height: 24,
    lineHeight: 30,
    textAlign: "center",
  },
  successfulLogoutParent: {
    marginTop: 32,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -138,
    marginLeft: -146.5,
    height: 276,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
  vectorIcon: {
    height: "5.99%",
    width: "5.83%",
    top: "5.99%",
    right: "5.83%",
    bottom: "88.02%",
    left: "88.34%",
    position: "absolute",
  },
  faceId: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    height: 334,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  loginWithFaceId: {
    marginTop: -167,
    justifyContent: "center",
    top: "50%",
  },
  splash21: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default Splash3;
