import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CreditCardForm = () => {
  return (
    <View style={[styles.paymentMethodsParent, styles.parentPosition]}>
      <Text style={[styles.paymentMethods, styles.textLayout]}>
        Payment Methods
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameFlexBox}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={[styles.text, styles.textLayout]}>
              **** **** **** 9235
            </Text>
          </View>
          <Image
            style={styles.svgexport1822}
            resizeMode="cover"
            source={require("../assets/svgexport18-2-21.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left:"4%",
    position: "absolute",
  },
  textLayout: {
    height: 18,
    color: Color.colorBlack,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 56,
    width:"163%",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentMethods: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    display: "flex",
    width: 125,
    alignItems: "center",
    height: 18,
    color: Color.colorBlack,
    fontWeight: "600",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    position: "absolute",
    width:"100%",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    width:"70%",
    marginLeft: 8,
    height: 16,
    color: Color.colorBlack,
    fontWeight: "600",
  },
  svgexport1822: {
    width: 18,
    height: 18,
    marginLeft:"30%",
    overflow: "hidden",
  },
  frameParent: {
    top:"26%",
    left:"4%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: "4%",
  },
  paymentMethodsParent: {
    top: "82.5%",
    width:"34.8%"
  },
});

export default CreditCardForm;
