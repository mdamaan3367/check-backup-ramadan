import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import WebViewBottom from "./WebViewBottom";
import { FontSize, Padding, Color, FontFamily } from "../GlobalStyles";

const SectionMenu1 = ({
  iconText,
  iconDescription,
  iconImageUrl,
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
}) => {
  return (
    <View style={[styles.navBarSignUpParent, styles.navPosition]}>
      <View style={[styles.navBarSignUp, styles.navFlexBox]}>
        <Pressable
          style={[styles.navBarSignUpInner, styles.navFlexBox]}
          onPress={onFramePressablePress}
        >
          <View style={styles.parentSpaceBlock}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={iconText}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
        </Pressable>
        <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
          <View style={styles.navFlexBox}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={iconDescription}
            />
            <Text style={[styles.history, styles.homeTypo]}>History</Text>
          </View>
        </View>
        <Pressable
          style={styles.framePressableLayout}
          onPress={onFramePressablePress1}
        >
          <View style={styles.calendarTickParent}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={iconImageUrl}
            />
            <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.framePressableLayout}
          onPress={onFramePressablePress2}
        >
          <View style={styles.navFlexBox}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearuser.png")}
            />
            <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
          </View>
        </Pressable>
        <View style={styles.framePressableLayout}>
          <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
            <Image
              style={styles.home2Icon}
              resizeMode="cover"
              source={require("../assets/textalignleft1.png")}
            />
            <Text style={[styles.menu, styles.homeTypo]}>Menu</Text>
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
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  framePressableLayout: {
    width: 94,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
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
    color: Color.a6A6A6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  navBarSignUpInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    color: Color.a6A6A6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    textTransform: "capitalize",
    color: Color.a6A6A6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  menu: {
    fontWeight: "700",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    bottom: 34,
    backgroundColor: Color.whait,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
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

export default SectionMenu1;
