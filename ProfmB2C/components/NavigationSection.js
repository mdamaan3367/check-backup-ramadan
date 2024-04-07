import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const NavigationSection = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.navBarSignUpParent, styles.navPosition]}>
      <View style={[styles.navBarSignUp, styles.navFlexBox]}>
        <Pressable
          style={[styles.navBarSignUpInner, styles.navFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.parentSpaceBlock}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={require("../assets/home22.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.navBarSignUpChild, styles.navFlexBox]}
          onPress={() => navigation.navigate("Bookings")}
        >
          <View style={styles.calendarTickParent}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={require("../assets/calendartick2.png")}
            />
            <Text style={[styles.bookings, styles.accountTypo]}>bookings</Text>
          </View>
        </Pressable>
        <View style={[styles.navBarSignUpChild, styles.navFlexBox]}>
          <View style={[styles.userParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={require("../assets/user1.png")}
            />
            <Text style={[styles.account, styles.accountTypo]}>account</Text>
          </View>
        </View>
        <Pressable
          style={[styles.navBarSignUpChild, styles.navFlexBox]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/textalignleft.png")}
          />
          <View style={styles.menuWrapper}>
            <Text style={[styles.menu, styles.homeTypo]}>Menu</Text>
          </View>
        </Pressable>
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
  );
};

const styles = StyleSheet.create({
  navPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    height: 56,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    color: Color.a6A6A6,
    fontWeight: "300",
  },
  accountTypo: {
    textTransform: "capitalize",
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    marginTop: 4,
  },
  navBarSignUpInner: {
    width: 93,
  },
  bookings: {
    color: Color.a6A6A6,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  navBarSignUpChild: {
    width: 94,
  },
  account: {
    fontWeight: "700",
    color: Color.praimary,
  },
  userParent: {
    height: 53,
  },
  menu: {
    top: 0,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  menuWrapper: {
    width: 30,
    height: 16,
    marginTop: 4,
  },
  navBarSignUp: {
    bottom: 34,
    backgroundColor: Color.whait,
    flexDirection: "row",
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
  },
});

export default NavigationSection;
