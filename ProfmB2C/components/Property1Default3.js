import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default3 = ({
  fiRrZoomOut,
  property1DefaultPosition,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
    };
  }, [
    property1DefaultPosition,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <View style={[styles.property1default, property1Default2Style]}>
      <View style={styles.fiRrZoomOutParent}>
        <Image
          style={styles.fiRrZoomOutIcon}
          resizeMode="cover"
          source={fiRrZoomOut}
        />
        <Text style={styles.sea}>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fiRrZoomOutIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    left:"-200%"
  },
  sea: {
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    color: Color.a6A6A6,
    textAlign: "left",
    display: "flex",
    width: 242,
    height: 24,
    left:"-160%",
    alignItems: "center",
  },
  fiRrZoomOutParent: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  property1default: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    width: "91.3%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
  },
});

export default Property1Default3;
