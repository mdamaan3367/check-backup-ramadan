import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";


const Property1Default4 = () => {
 

  return (
    <View style={[styles.property1default, styles.property1Default3Style]}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.frameChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>50%</Text>
          <View style={[styles.rectangleGroup, styles.getADiscountSpaceBlock]}>
            <View style={styles.groupChild} />
            <Text style={[styles.todaysSpecial, styles.getADiscountTypo]}>
              Today’s Special
            </Text>
          </View>
          <Text style={[styles.getADiscount, styles.getADiscountTypo]}>
            Get a discount on every furniture cleaning and repair order valid
            for today only
          </Text>
        </View>
        <Image
          style={styles.serviceMaintenanceWorkerRepIcon}
          resizeMode="cover"
          source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4364.png")}
        />
      </View>
      <Image
        style={styles.property1defaultChild}
        resizeMode="cover"
        source={require("../assets/frame-1171276084.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 160,
    top: 0,
    position: "absolute",
  },
  property1Default3Style:{
    position:"absolute",
     marginLeft:"0",
     top:"52.5%",
      left:"2%",
      marginTop:"30%"

  },
  getADiscountSpaceBlock: {
    marginTop: 8,
    height: 24,
  },
  getADiscountTypo: {
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  frameChild: {
    backgroundColor: Color.color,
    left: 0,
    height: 160,
    top: 0,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  text: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    width: 74,
    height: 34,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_300,
    opacity: 0.5,
    height: 24,
    width: 123,
    left: 0,
    top: 0,
    position: "absolute",
  },
  todaysSpecial: {
    top: 2,
    left: 5,
    fontSize: FontSize.size_base,
    width: 113,
    height: 19,
    position: "absolute",
  },
  rectangleGroup: {
    width: 123,
    marginTop: 8,
  },
  getADiscount: {
    fontSize: FontSize.size_4xs,
    width: 183,
    marginTop: 8,
    height: 24,
  },
  parent: {
    top: 32,
    left: 16,
    position: "absolute",
  },
  serviceMaintenanceWorkerRepIcon: {
    top: -1,
    left: 205,
    width: 154,
    height: 154,
    display: "none",
    position: "absolute",
  },
  frameItem: {
    left: 204,
    width: 139,
    height: 160,
    top: 0,
  },
  rectangleParent: {
    height: "91.43%",
    width: "100%",
    top: "10%",
    right: "0%",
    bottom: "8.57%",
    left: "0%",
    backgroundColor: Color.colorSkyblue,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  property1defaultChild: {
    marginTop: 80.5,
    marginLeft: -13.5,
    top: "50%",
    left: "50%",
    width: 27,
    height: 7,
    position: "absolute",
  },
  property1default: {
    height: 175,
    width: 343,
  },
});

export default Property1Default4;
