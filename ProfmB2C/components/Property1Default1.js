import React, { useMemo } from "react";
import { Text, StyleSheet, View, Touchable, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  logIn,
  property1DefaultPosition,
  property1DefaultBackgroundColor,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
  logInColor,
  onButtonMidimePress,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [
    property1DefaultPosition,
    property1DefaultBackgroundColor,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const logIn1Style = useMemo(() => {
    return {
      ...getStyleValue("color", logInColor),
    };
  }, [logInColor]);

  return (
    <TouchableOpacity
      style={[
        styles.property1default,
        styles.logInFlexBox,
        property1Default1Style,
      ]}
      onPress={onButtonMidimePress}
    >
      <Text style={[styles.logIn, styles.logInFlexBox, logIn1Style]}>
        {logIn}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logIn: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    color: Color.whait,
    textAlign: "center",
    display: "flex",
    width: 150,
    height: 24,
  },
  property1default: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    width: 220,
    height: 48,
    flexDirection: "row",
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
  },
});

export default Property1Default1;
