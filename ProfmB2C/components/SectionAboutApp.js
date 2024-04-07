import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionAboutApp = ({
  iconImageUrl,
  pageDescription,
  groupIconMarginTop,
  onGroupPressablePress,
  width
}) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", groupIconMarginTop),
    };
  }, [groupIconMarginTop]);

  return (
    <Pressable
      style={[styles.rectangleParent, groupPressableStyle,{
    width: width,}]}
      onPress={onGroupPressablePress}
    >
      <View style={styles.groupChild} />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={iconImageUrl}
          />
          <Text style={styles.aboutApp}>{pageDescription}</Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.3,
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  aboutApp: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    width: 120,
    height: 18,
    marginLeft: 8,
    alignItems: "center",
  },
  groupParent: {
    alignItems: "center",
  },
  groupIcon: {
    width: 7,
    height: 12,
    marginLeft: "45%",
  },
  frameParent: {
    top: "26%",
    left: "4%",
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: 56,
  },
});

export default SectionAboutApp;
