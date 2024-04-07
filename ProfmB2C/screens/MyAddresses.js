import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import BookingSection from "../components/BookingSection";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MyAddresses = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myAddresses}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-3.png")}
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
        style={styles.myAddressesChild}
        resizeMode="cover"
        source={require("../assets/frame-1171276338.png")}
      />
      <View style={styles.inputFild}>
        <Text style={styles.password}>Password</Text>
        <Image
          style={styles.inputFildChild}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={styles.eyeSlashIcon}
          resizeMode="cover"
          source={require("../assets/eyeslash2.png")}
        />
        <View style={styles.ellipseParent}>
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
      <BookingSection
        imageDimensions={require("../assets/profm-logo1-1-1-2.png")}
        bookingIds="My addresses"
        onArrow21Press={() => navigation.goBack()}
      />
      <Pressable
        style={styles.buttonBig}
        onPress={() => navigation.navigate("AddNewAddress")}
      >
        <View style={styles.buttonBigChild} />
        <Text style={styles.logIn}>add new address</Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={styles.home2Parent}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.alRawdahDistrictParent}>
            <Text style={styles.alRawdahDistrict}>
              {`Al-Rawdah `}
              <Text style={styles.d}>d</Text>istrict
            </Text>
            <Text style={styles.kingdomOfSaudi}>
              Kingdom of Saudi Arabia, Jeddah, Al Rawdah District, Building No.
              50, Floor No. 2
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.home2Parent}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/briefcase.png")}
          />
          <View style={styles.alRawdahDistrictParent}>
            <Text style={styles.alRawdahDistrict}>Al-Ruwais district</Text>
            <Text style={styles.kingdomOfSaudi}>
              Kingdom of Saudi Arabia, Jeddah, Al Rawdah District, Building No.
              50, Floor No. 2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 85,
    left: 16,
    width: 343,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: Color.colorAliceblue_200,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 85,
    borderStyle: "solid",
    width: 343,
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
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
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
    fontSize: FontSize.med_size,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    width: 18,
    height: 18,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
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
    flexDirection: "row",
    height: 7,
    top: "50%",
    position: "absolute",
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
  buttonBigChild: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.6,
    lineHeight: 44,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    position: "absolute",
  },
  buttonBig: {
    marginLeft: -171.5,
    top: 722,
    height: 48,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderWidth: 1,
    borderColor: Color.praimary1,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  d: {
    textTransform: "capitalize",
  },
  alRawdahDistrict: {
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  kingdomOfSaudi: {
    lineHeight: 16,
    fontWeight: "300",
    color: Color.grayBlack,
    width: 275,
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  alRawdahDistrictParent: {
    width: 271,
    marginLeft: 16,
  },
  home2Parent: {
    top: 16,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 156,
  },
  groupItem: {
    borderColor: Color.gray,
    borderWidth: 0.5,
  },
  rectangleGroup: {
    top: 257,
  },
  myAddresses: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyAddresses;
