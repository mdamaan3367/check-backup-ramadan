import React, { useMemo } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  logIn,
  property1DefaultPosition,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultOpacity,
  logInLetterSpacing,
  logInLineHeight,
  logInTextTransform,
  logInWidth,
  logInLeft,
  onButtonBigPress,
  disabled,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
      ...getStyleValue("right", property1DefaultRight),
      ...getStyleValue("bottom", property1DefaultBottom),
      ...getStyleValue("opacity", property1DefaultOpacity),
    };
  }, [
    property1DefaultPosition,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultOpacity,
  ]);

  const logInStyle = useMemo(() => {
    return {
      ...getStyleValue("letterSpacing", logInLetterSpacing),
      ...getStyleValue("lineHeight", logInLineHeight),
      ...getStyleValue("textTransform", logInTextTransform),
      ...getStyleValue("width", logInWidth),
      ...getStyleValue("left", logInLeft),
    };
  }, [
    logInLetterSpacing,
    logInLineHeight,
    logInTextTransform,
    logInWidth,
    logInLeft,
  ]);

  return (
    <TouchableOpacity
      style={[styles.property1default, property1DefaultStyle]}
      onPress={onButtonBigPress} disabled={disabled}
    >
      <View style={styles.property1defaultChild} />
      <Text style={[styles.logIn, logInStyle]}>{logIn}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  property1defaultChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.6,
    lineHeight: 44,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.whait,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  property1default: {
    width: 343,
    height: 48,
  },
});

export default Property1Default;
