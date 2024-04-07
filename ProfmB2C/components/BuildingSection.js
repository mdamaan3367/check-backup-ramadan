import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BuildingSection = ({ locationDetails, buildingOrFloorNumber }) => {
  return (
    <View style={styles.buildingNumberParent}>
      <Text style={[styles.buildingNumber, styles.textTypo]}>
        {locationDetails}
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text style={[styles.text, styles.textTypo]}>
          {buildingOrFloorNumber}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  buildingNumber: {
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.black,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 101,
    height: 24,
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 0.3,
    width: 343,
    height: 48,
    zIndex: 0,
  },
  text: {
    position: "absolute",
    top: 17,
    left: 16,
    fontWeight: "300",
    color: Color.grayBlack,
    textAlign: "center",
    zIndex: 1,
  },
  rectangleParent: {
    marginTop: 4,
  },
  buildingNumberParent: {
    marginTop: 24,
  },
});

export default BuildingSection;
