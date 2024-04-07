import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MyAddresses1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myAddresses, styles.icon1Layout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-3.png")}
      />
      <Image
        style={styles.myAddressesChild}
        resizeMode="cover"
        source={require("../assets/frame-1171276338.png")}
      />
      <View style={[styles.inputFild, styles.passwordTransform]}>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.inputFildChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.eyeSlashIcon, styles.passwordTransform]}
          resizeMode="cover"
          source={require("../assets/eyeslash2.png")}
        />
        <View style={[styles.ellipseParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
        </View>
      </View>
      <View style={[styles.myAddressesInner, styles.innerPosition]}>
        <View style={[styles.myAddressesInner, styles.innerPosition]}>
          <View style={styles.groupChild} />
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.faceIdShadowBox]} />
            <Image
              style={[styles.profmLogo1111, styles.profmLogo1111Position]}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-13.png")}
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
          <Text style={[styles.myAddresses1, styles.logInFlexBox]}>
            My addresses
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonBig, styles.buttonBigPosition]}
        onPress={() => navigation.navigate("AddNewAddress")}
      >
        <View style={[styles.buttonBigChild, styles.iconLayout]} />
        <Text style={[styles.logIn, styles.logInTypo]}>add new address</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.faceIdLayout]} />
        <View style={[styles.home2Parent, styles.parentFlexBox]}>
          <Image
            style={styles.arrow21Layout}
            resizeMode="cover"
            source={require("../assets/home25.png")}
          />
          <View style={styles.alRawdahDistrictParent}>
            <Text style={[styles.alRawdahDistrict, styles.logInTypo]}>
              {`Al-Rawdah `}
              <Text style={styles.d}>d</Text>istrict
            </Text>
            <Text style={[styles.kingdomOfSaudi, styles.youCanChooseClr]}>
              Kingdom of Saudi Arabia, Jeddah, Al Rawdah District, Building No.
              50, Floor No. 2
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.myAddressesItem, styles.navBarPosition]} />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <WebViewBottom
          webViewBottomPosition="absolute"
          webViewBottomBackgroundColor="#c8cacc"
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
      <View style={[styles.loginWithFaceId, styles.buttonBigPosition]}>
        <View style={[styles.faceId, styles.faceIdLayout]}>
          <View style={[styles.attendanceSuccessful, styles.logInFlexBox]}>
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua.png")}
            />
            <View style={styles.savedSuccessfullyParent}>
              <Text style={[styles.savedSuccessfully, styles.logInFlexBox]}>
                Saved successfully
              </Text>
              <Text style={[styles.youCanChoose, styles.youCanChooseClr]}>
                You can choose the new address or cancel it at any time
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("MyAddresses")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  passwordTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  innerPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  faceIdShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  profmLogo1111Position: {
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  logInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBigPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    fontWeight: "600",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  groupInnerLayout: {
    height: 85,
    position: "absolute",
  },
  faceIdLayout: {
    borderRadius: Border.br_5xs,
    width: 343,
  },
  youCanChooseClr: {
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  navBarPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  map3Icon: {
    top: -229,
    right: 90,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  myAddressesChild: {
    top: 47,
    right: 16,
    width: 20,
    height: 20,
    position: "absolute",
  },
  password: {
    top: "-1.72%",
    left: "90.38%",
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
    opacity: 0.5,
    width: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    width: 18,
    height: 18,
    top: "50%",
  },
  frameChild: {
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    right: 17,
    width: 62,
    justifyContent: "flex-end",
    height: 7,
    flexDirection: "row",
    top: "50%",
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    display: "none",
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
    position: "absolute",
    width: 375,
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
    shadowRadius: 10,
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
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    top: 43,
    left: 16,
    position: "absolute",
  },
  myAddresses1: {
    marginLeft: -72.5,
    top: 40,
    width: 146,
    height: 30,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 30,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  myAddressesInner: {
    height: 124,
    position: "absolute",
    width: 375,
  },
  buttonBigChild: {
    top: "0%",
    borderRadius: Border.br_3xs,
    borderColor: Color.praimary,
    borderWidth: 2,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  buttonBig: {
    top: 722,
    width: 343,
    height: 48,
  },
  groupInner: {
    backgroundColor: Color.colorAliceblue_200,
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    height: 85,
    position: "absolute",
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  d: {
    textTransform: "capitalize",
  },
  alRawdahDistrict: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  kingdomOfSaudi: {
    lineHeight: 16,
    fontWeight: "300",
    width: 275,
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  alRawdahDistrictParent: {
    width: 271,
    marginLeft: 16,
  },
  home2Parent: {
    top: 16,
    alignItems: "center",
    left: 16,
  },
  rectangleContainer: {
    top: 156,
    width: 343,
    left: 16,
  },
  myAddressesItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    top: "50%",
    height: 812,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  savedSuccessfully: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: 294,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    textTransform: "capitalize",
    height: 24,
  },
  youCanChoose: {
    lineHeight: 21,
    width: 292,
    height: 56,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  savedSuccessfullyParent: {
    marginTop: 32,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -138,
    marginLeft: -146.5,
    height: 276,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "88.34%",
    top: "5.99%",
    right: "5.83%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  faceId: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 334,
    elevation: 10,
    shadowRadius: 10,
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
    alignItems: "center",
    top: "50%",
  },
  myAddresses: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default MyAddresses1;
