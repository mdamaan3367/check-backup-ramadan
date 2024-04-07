import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SectionCard1 = ({ childItem }) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.numberOfWorkersParent}>
          <Text style={[styles.numberOfWorkers, styles.textTypo]}>
            Number of Workers
          </Text>
          <View style={[styles.addCircleParent, styles.textFlexBox]}>
            
            <Text style={[styles.text, styles.textFlexBox]}>{ childItem.minReqResource }</Text>
           
          </View>
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  workersTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  groupChild: {
    top: 0,
    left: 0,
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
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    position: "absolute",
    height: 53,
    width: "100%",
  },
  numberOfWorkers: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    width: 16,
    height: 23,
    marginLeft: 8,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
  numberOfWorkersParent: {
    top: 16,
    left: "4%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    height: 53,
    width: "98%",
  },
  additionalWorkersBeyond: {
    lineHeight: 18,
    fontWeight: "300",
    color: Color.a6A6A6,
    textAlign: "left",
    height: 34,
    marginTop: 8,
    width: "100%",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  groupParent: {
    marginTop: 24,
  },
});

export default SectionCard1;
