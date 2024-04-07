import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorDark = ({ colorDarkPosition, homeIndicatorBackgroundColor }) => {
  const colorDarkStyle = useMemo(() => {
    return {
      ...getStyleValue("position", colorDarkPosition),
    };
  }, [colorDarkPosition]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", homeIndicatorBackgroundColor),
    };
  }, [homeIndicatorBackgroundColor]);

  return (
    <View style={[styles.colordark, colorDarkStyle]}>
      <View style={[styles.homeIndicator, homeIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.textPrimary,
    width: 134,
    height: 5,
  },
  colordark: {
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
});

export default ColorDark;
