import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const TotalSection1 = () => {
  return (
    <View style={styles.frameWrapper}>
      <View>
        <Text style={[styles.cost, styles.costFlexBox]}>Cost</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupBorder]} />
          <View style={[styles.frameParent, styles.parentPosition]}>
            <View
              style={[
                styles.equipmentMaintenancePumpMParent,
                styles.parentFlexBox,
              ]}
            >
              <Text
                style={[styles.equipmentMaintenanceContainer, styles.vatTypo]}
              >
                <Text style={styles.vat15Clr}>{`Equipment maintenance `}</Text>
                <Text
                  style={styles.pumpMaintenance}
                >{`( Pump maintenance )  `}</Text>
              </Text>
              <Text style={[styles.sar, styles.sarTypo]}>40 SAR</Text>
            </View>
            <View style={[styles.vat15Parent, styles.parentFlexBox]}>
              <Text style={[styles.vat15, styles.vat15Clr]}>
                <Text style={styles.vatTypo}>VAT</Text>
                <Text style={styles.text}>{` (15%) `}</Text>
              </Text>
              <Text style={[styles.sar1, styles.sarTypo]}>6 SAR</Text>
            </View>
          </View>
          <Text style={[styles.thisPriceCovers, styles.vat15Clr]}>
            This price covers the visit and inspection we'll assess your needs
            and provide a final quote after
          </Text>
          <View style={[styles.totalParent, styles.parentFlexBox]}>
            <Text style={[styles.total, styles.sar2Typo]}>Total</Text>
            <Text style={[styles.sar2, styles.sar2Typo]}>46 SAR</Text>
          </View>
          <View style={[styles.groupItem, styles.groupBorder]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  costFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  groupBorder: {
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    position: "absolute",
    width: 343,
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    width: 311,
  },
  vatTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  sarTypo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  vat15Clr: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  sar2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "600",
  },
  cost: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    width: 125,
    height: 16,
    alignItems: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderWidth: 0.5,
    left: 0,
    height: 220,
  },
  pumpMaintenance: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
  },
  equipmentMaintenanceContainer: {
    zIndex: 0,
    top: 2,
    position: "absolute",
    left: 0,
    textAlign: "left",
  },
  sar: {
    left: 266,
    width: 45,
    height: 14,
    zIndex: 1,
    top: 2,
    position: "absolute",
  },
  equipmentMaintenancePumpMParent: {
    alignItems: "flex-end",
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  vat15: {
    textAlign: "left",
  },
  sar1: {
    width: 38,
  },
  vat15Parent: {
    justifyContent: "space-between",
    marginTop: 16,
  },
  frameParent: {
    top: 24,
    height: 52,
    justifyContent: "center",
  },
  thisPriceCovers: {
    top: 92,
    lineHeight: 18,
    width: 312,
    height: 32,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    left: 16,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  total: {
    color: Color.praimary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  sar2: {
    color: Color.red,
    marginLeft: 218,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
  },
  totalParent: {
    top: 172,
    left: 16,
    position: "absolute",
    alignItems: "center",
  },
  groupItem: {
    marginLeft: -171.6,
    top: 148,
    left: "50%",
    borderTopWidth: 0.3,
    height: 0,
  },
  rectangleParent: {
    marginTop: 16,
    height: 220,
    width: 343,
  },
  frameWrapper: {
    marginTop: 48,
  },
});

export default TotalSection1;
