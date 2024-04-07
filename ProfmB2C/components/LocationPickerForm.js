import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LocationPickerForm = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.frameIconPosition]} />
      <View style={[styles.frameParent, styles.moveTheMapLayout]}>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        />
        <Text style={[styles.moveTheMap, styles.moveTheMapLayout]}>
          Move the map or enter your address to set your pickup location
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 61,
    width: "100%",
  },
  frameIconPosition: {
    left: 0,
    position: "absolute",
  },
  moveTheMapLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    top: 0,
    height: 61,
    width:"93.5%",
  },
  frameIcon: {
    top: 8,
    width: 16,
    height: 17,
    overflow: "hidden",
  },
  moveTheMap: {
    left: "7%",
    fontSize: FontSize.med_size,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    width: "85%",
    top: 0,
  },
  frameParent: {
    top: "15%",
    left: "3%",
    width: "100%",
  },
  rectangleParent: {
    top: "19.5%",
    left: "3%",
    position: "absolute",
    width: "100%",
  },
});

export default LocationPickerForm;
