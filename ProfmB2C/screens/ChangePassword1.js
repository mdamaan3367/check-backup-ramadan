import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import WebViewBottom from "../components/WebViewBottom";
import ChangePasswordFormSection from "../components/ChangePasswordFormSection";
import Property1Default from "../components/Property1Default";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ChangePassword1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.changePassword, styles.changePasswordLayout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-31.png")}
      />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <WebViewBottom
          webViewBottomPosition="absolute"
          webViewBottomBackgroundColor="#fafdff"
          webViewBottomMarginLeft={-187.5}
          webViewBottomTop={0}
          webViewBottomLeft="50%"
          webViewBottomBorderBottomRightRadius={5}
          webViewBottomBorderBottomLeftRadius={5}
          webViewBottomWidth={375}
          webViewBottomHeight={34}
          webViewBottomBottom="unset"
          homeIndicatorBackgroundColor="#1d2939"
        />
      </View>
      <Image
        style={styles.changePasswordChild}
        resizeMode="cover"
        source={require("../assets/frame-11712763381.png")}
      />
      <View style={[styles.inputFild, styles.inputFildPosition]}>
        <Text style={styles.password}>Password</Text>
        <Image
          style={[styles.inputFildChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.eyeSlashIcon, styles.eyeSlashIconPosition]}
          resizeMode="cover"
          source={require("../assets/eyeslash2.png")}
        />
        <View style={[styles.ellipseParent, styles.eyeSlashIconPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1781.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-177.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-176.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-175.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-174.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-173.png")}
          />
        </View>
      </View>
      <ChangePasswordFormSection
        passwordRequirements="Minimum 8 characters"
        passwordRequirementsText="At least one uppercase and lowercase letter"
        propWidth={258}
      />
      <Property1Default
        logIn="Log in"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={722}
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
      <View style={styles.groupParent}>
        <View style={styles.groupParent}>
          <View style={styles.groupChild} />
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.faceIdShadowBox]} />
            <Image
              style={[styles.profmLogo1111, styles.buttonPosition]}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-111.png")}
            />
          </View>
          <Pressable
            style={[styles.arrow21, styles.arrow21Layout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-11.png")}
            />
          </Pressable>
          <Text style={[styles.changePassword1, styles.logInTypo]}>
            Change password
          </Text>
        </View>
        <View style={[styles.iphoneXOrNewer, styles.buttonPosition]}>
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
              source={require("../assets/wifi3.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              resizeMode="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={[styles.recordingIndicatorIcon, styles.inputFildPosition]}
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
      <View style={[styles.changePasswordItem, styles.navBarPosition]} />
      <View style={[styles.faceId, styles.faceIdShadowBox]}>
        <Image
          style={styles.httpsapplottiefilescomanIcon}
          resizeMode="cover"
          source={require("../assets/httpsapplottiefilescomanimationda65a2f79fe04f8cb69c27e6819678af.png")}
        />
        <View style={styles.thePasswordWasChangedSucceWrapper}>
          <Text style={styles.thePasswordWas}>
            The password was changed successfully
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonPosition]}
          onPress={() => navigation.goBack()}
        >
          <View style={[styles.buttonChild, styles.iconLayout]} />
          <Text style={[styles.logIn, styles.logInTypo]}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changePasswordLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  inputFildPosition: {
    display: "none",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  eyeSlashIconPosition: {
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 160,
    height: 48,
  },
  faceIdShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  logInTypo: {
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    left: "50%",
    position: "absolute",
  },
  map3Icon: {
    top: -229,
    right: 90,
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  navBar: {
    top: 778,
    height: 34,
  },
  changePasswordChild: {
    top: 47,
    right: 16,
    width: 20,
    height: 20,
    position: "absolute",
  },
  password: {
    top: "-1.72%",
    left: "90.38%",
    fontSize: FontSize.med_size,
    letterSpacing: 0.5,
    fontFamily: FontFamily.dubai,
    color: Color.primary3,
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  inputFildChild: {
    height: "82.76%",
    top: "17.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    width: 18,
    height: 18,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChild: {
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    right: 17,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    width: 160,
    top: 0,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleGroup: {
    marginLeft: -79.5,
    top: 76,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    left: 16,
    top: 43,
    height: 24,
  },
  changePassword1: {
    marginLeft: -72.5,
    top: 40,
    color: Color.praimary1,
    width: 146,
    height: 30,
    textTransform: "capitalize",
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  groupParent: {
    height: 124,
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
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
    height: 11,
    width: 15,
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
  changePasswordItem: {
    bottom: 0,
    backgroundColor: Color.colorGray_300,
    height: 812,
  },
  httpsapplottiefilescomanIcon: {
    left: 71,
    width: 200,
    height: 200,
    top: 0,
    position: "absolute",
  },
  thePasswordWas: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    fontWeight: "600",
    color: Color.black,
    width: 256,
    height: 59,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    textTransform: "capitalize",
  },
  thePasswordWasChangedSucceWrapper: {
    top: 165,
    right: 44,
    height: 59,
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    top: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  logIn: {
    height: "50%",
    marginLeft: -143.5,
    top: "25%",
    color: Color.whait,
    width: 288,
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  button: {
    marginLeft: -150.5,
    top: 264,
    width: 301,
    height: 48,
  },
  faceId: {
    marginTop: -167,
    marginLeft: -171.5,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 343,
    height: 333,
    backgroundColor: Color.whait,
    shadowRadius: 10,
    top: "50%",
    overflow: "hidden",
  },
  changePassword: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default ChangePassword1;
