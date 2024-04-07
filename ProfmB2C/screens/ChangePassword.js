import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import ChangePasswordFormSection from "../components/ChangePasswordFormSection";
import Property1Default from "../components/Property1Default";
import BookingSection from "../components/BookingSection";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.changePassword, styles.changePasswordLayout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-31.png")}
      />
      <View style={styles.navBar}>
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
      <View style={styles.inputFild}>
        <Text style={styles.password}>Password</Text>
        <Image
          style={[styles.inputFildChild, styles.changePasswordLayout]}
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
        passwordRequirements="Minimum 8 characters."
        passwordRequirementsText="At least one uppercase, one lowercase and a letter."
      />
      <Property1Default
        logIn="Confirm"
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
        onButtonBigPress={() => navigation.navigate("ChangePassword1")}
      />
      <BookingSection
        imageDimensions={require("../assets/profm-logo1-1-1-2.png")}
        bookingIds="Change password2"
        onArrow21Press={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  changePasswordLayout: {
    width: "100%",
    overflow: "hidden",
  },
  eyeSlashIconPosition: {
    top: "50%",
    position: "absolute",
  },
  map3Icon: {
    top: -229,
    right: 90,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  navBar: {
    marginLeft: -187.5,
    top: 778,
    left: "50%",
    width: 375,
    height: 34,
    position: "absolute",
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
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
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
    display: "none",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  changePassword: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default ChangePassword;
