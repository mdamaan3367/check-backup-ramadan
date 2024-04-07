import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant = ({
  cleaning,
  property1Variant2MarginLeft,
  rectangleViewBackgroundColor,
  rectangleViewBorderStyle,
  rectangleViewBorderColor,
  rectangleViewBorderWidth,
  cleaningFontWeight,
  cleaningColor,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", property1Variant2MarginLeft),
    };
  }, [property1Variant2MarginLeft]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      ...getStyleValue("borderStyle", rectangleViewBorderStyle),
      ...getStyleValue("borderColor", rectangleViewBorderColor),
      ...getStyleValue("borderWidth", rectangleViewBorderWidth),
    };
  }, [
    rectangleViewBackgroundColor,
    rectangleViewBorderStyle,
    rectangleViewBorderColor,
    rectangleViewBorderWidth,
  ]);

  const cleaningStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", cleaningFontWeight),
      ...getStyleValue("color", cleaningColor),
    };
  }, [cleaningFontWeight, cleaningColor]);

  return (
    <View style={[styles.property1variant2, property1Variant2Style]}>
      <View style={[styles.property1variant2Child, rectangleViewStyle]} />
      <View style={styles.cleaningWrapper}>
        <Text style={[styles.cleaning, cleaningStyle]}>{cleaning}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1variant2Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.praimary,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    position: "absolute",
  },
  cleaning: {
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    color: Color.whait,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 115,
    height: 16,
  },
  cleaningWrapper: {
    height: "50%",
    width: "87.12%",
    top: "25%",
    right: "6.44%",
    bottom: "25%",
    left: "6.44%",
    flexDirection: "row",
    position: "absolute",
  },
  property1variant2: {
    width: 132,
    height: 32,
  },
});

export default Property1Variant;
