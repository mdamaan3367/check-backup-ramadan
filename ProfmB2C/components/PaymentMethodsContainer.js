import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const PaymentMethodsContainer = ({
  onFramePressablePress,
  onFramePressablePress1,
}) => {
  return (
    <View style={styles.lineParent}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Pressable
        style={[styles.frameParent, styles.parentPosition]}
        onPress={onFramePressablePress}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group8.png")}
          />
        </View>
        <Text style={[styles.location, styles.summaryTypo]}>Location</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <Text style={[styles.location, styles.summaryTypo]}>Payment</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-186.png")}
          />
          <Text style={[styles.text1, styles.text1Clr]}>4</Text>
        </View>
        <Text style={[styles.summary, styles.text1Clr]}>Summary</Text>
      </View>
      <Pressable
        style={[styles.frameGroup, styles.groupPosition]}
        onPress={onFramePressablePress1}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group8.png")}
          />
        </View>
        <Text style={styles.booking}>{`Booking `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 1,
    width:"12%",
    borderTopWidth: 1,
    borderStyle: "solid",
    top: "40%",
    position: "absolute",
  },
  parentPosition: {
    top: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  summaryTypo: {
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  textTypo: {
    height: 18,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    position: "absolute",
  },
  groupPosition: {
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  text1Clr: {
    color: Color.grayBlack,
    textAlign: "center",
  },
  groupChild: {
    left: "10%",
    borderColor: Color.praimary,
    width: "20%",
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
  },
  groupItem: {
    left:"30%",
    borderColor: Color.praimary,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
  },
  groupInner: {
    left: "50%",
    borderColor: Color.a6A6A6,
    opacity: 0.5,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon: {
    height: "29%",
    width: "37.5%",
    top: "37.5%",
    right: "30%",
    bottom: "33.5%",
    left: "32.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  location: {
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  frameParent: {
    left: "20%",
    alignItems: "flex-end",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -4,
    color: Color.whait,
    textAlign: "center",
  },
  groupParent: {
    left: "40%",
  },
  text1: {
    marginLeft: -4.5,
    height: 18,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    position: "absolute",
  },
  summary: {
    fontWeight: "300",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
  },
  groupContainer: {
    left: "60%",
  },
  booking: {
    color: Color.colorBlack,
    width: 39,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  frameGroup: {
    left:"0%",
  },
  lineParent: {
    top:"20%",
    left:"16%",
    width:"100%",
    height: 56,
    position: "absolute",
  },
});

export default PaymentMethodsContainer;
