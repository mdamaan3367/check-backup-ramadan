import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import ColorDark from "./ColorDark";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WebViewBottom = ({
  webViewBottomPosition,
  webViewBottomBackgroundColor,
  webViewBottomMarginLeft,
  webViewBottomTop,
  webViewBottomLeft,
  webViewBottomBorderBottomRightRadius,
  webViewBottomBorderBottomLeftRadius,
  webViewBottomWidth,
  webViewBottomHeight,
  webViewBottomBottom,
  homeIndicatorBackgroundColor,
}) => {
  const webViewBottomStyle = useMemo(() => {
    return {
      ...getStyleValue("position", webViewBottomPosition),
      ...getStyleValue("backgroundColor", webViewBottomBackgroundColor),
      ...getStyleValue("marginLeft", webViewBottomMarginLeft),
      ...getStyleValue("top", webViewBottomTop),
      ...getStyleValue("left", webViewBottomLeft),
      ...getStyleValue(
        "borderBottomRightRadius",
        webViewBottomBorderBottomRightRadius
      ),
      ...getStyleValue(
        "borderBottomLeftRadius",
        webViewBottomBorderBottomLeftRadius
      ),
      ...getStyleValue("width", webViewBottomWidth),
      ...getStyleValue("height", webViewBottomHeight),
      ...getStyleValue("bottom", webViewBottomBottom),
    };
  }, [
    webViewBottomPosition,
    webViewBottomBackgroundColor,
    webViewBottomMarginLeft,
    webViewBottomTop,
    webViewBottomLeft,
    webViewBottomBorderBottomRightRadius,
    webViewBottomBorderBottomLeftRadius,
    webViewBottomWidth,
    webViewBottomHeight,
    webViewBottomBottom,
  ]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", homeIndicatorBackgroundColor),
    };
  }, [homeIndicatorBackgroundColor]);

  return (
    <View style={[styles.webViewbottom, webViewBottomStyle]}>
      <ColorDark
        colorDarkPosition="unset"
        homeIndicatorBackgroundColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webViewbottom: {
    backgroundColor: "rgba(190, 74, 74, 0.9)",
    width: 375,
  },
});

export default WebViewBottom;
