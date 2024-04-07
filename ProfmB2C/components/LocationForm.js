import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LocationForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lineParent}>
      <View style={styles.groupChild} />
      <View style={[styles.groupItem, styles.groupBorder]} />
      <View style={[styles.groupInner, styles.groupBorder]} />
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <Text style={[styles.location, styles.paymentTypo]}>Location</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-184.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>3</Text>
        </View>
        <Text style={[styles.payment, styles.textClr]}>Payment</Text>
      </View>
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-186.png")}
          />
          <Text style={[styles.text2, styles.textClr]}>4</Text>
        </View>
        <Text style={[styles.payment, styles.textClr]}>Summary</Text>
      </View>
      <Pressable
        style={[styles.frameParent, styles.framePosition]}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.ellipseParent1}>
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
        <Text style={[styles.booking, styles.paymentTypo]}>{`Booking `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    opacity: 0.5,
    borderColor: Color.a6A6A6,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: "40%",
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
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
  paymentTypo: {
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  textClr: {
    color: Color.grayBlack,
    textAlign: "center",
  },
  framePosition: {
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: "10%",
    borderColor: Color.praimary,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: "40%",
    position: "absolute",
  },
  groupItem: {
    left: "30%",
  },
  groupInner: {
    left: "50%",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    color: Color.whait,
    textAlign: "center",
    marginLeft: -4,
    height: 18,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
  },
  location: {
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  groupParent: {
    left: "20%",
    alignItems: "flex-end",
  },
  text1: {
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
    marginLeft: -4,
  },
  payment: {
    fontWeight: "300",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  groupContainer: {
    left: "40%",
  },
  text2: {
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
  frameView: {
    left: "59%",
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
  ellipseParent1: {
    flexDirection: "row",
  },
  booking: {
    color: Color.colorBlack,
    width: 39,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  frameParent: {
    left: 0,
  },
  lineParent: {
    top:"17%",
    left:"15%",
    width: "100%",
    height: 56,
    position: "absolute",
  },
});

export default LocationForm;
