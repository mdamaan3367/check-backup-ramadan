import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PaymentSection = ({
  iconCode,
  paymentMethodIconCode,
  productCode,
  propMarginLeft,
}) => {
  const ellipseIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.frameFlexBox}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={iconCode}
          />
          <Text style={styles.applePay}>{paymentMethodIconCode}</Text>
        </View>
        <Image
          style={[styles.frameChild, ellipseIconStyle]}
          resizeMode="cover"
          source={productCode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 56,
    width: 343,
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    position: "absolute",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  applePay: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    marginLeft: 8,
  },
  frameChild: {
    width: 18,
    height: 18,
    marginLeft: 186,
  },
  frameParent: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 24,
  },
});

export default PaymentSection;
