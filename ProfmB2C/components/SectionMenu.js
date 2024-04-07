import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import Property1Home from "./Property1Home";
import WebViewBottom from "./WebViewBottom";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionMenu = ({
  iconCode,
  iconTextCode,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  const property1HomeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("bottom", propBottom1),
    };
  }, [propTop1, propBottom1]);

  return (
    <View style={[styles.navBarSignUpParent, groupView1Style]}>
      <Property1Home
        home2={require("../assets/home2.png")}
        calendarTick={require("../assets/calendartick.png")}
        property1HomePosition="absolute"
        property1HomeMarginLeft={-187.5}
        property1HomeTop={0}
        property1HomeLeft="50%"
        onFramePressablePress={() => navigation.navigate("Bookings")}
        onFramePressablePress1={() => navigation.navigate("Profile")}
        onFramePressablePress2={() => navigation.navigate("Menu")}
      />
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
  navBarSignUpParent: {
    position: "absolute",
    marginLeft: -187.5,
    top: 722,
    left: "50%",
    width: 375,
    height: 90,
  },
});

export default SectionMenu;
