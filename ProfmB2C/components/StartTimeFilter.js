import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const StartTimeFilter = () => {
  return (
    <View style={styles.chooseTheStartTimeParent}>
      <Text style={styles.chooseTheStart}>Choose the start time</Text>
      <View style={styles.timeParent}>
        <View style={styles.timeLayout}>
          <View style={[styles.timeChild, styles.timePosition]} />
          <Text style={[styles.to0100Pm, styles.to0100Position]}>
            08:00 to 10:00 AM
          </Text>
        </View>
        <View style={[styles.time1, styles.timeLayout]}>
          <View style={[styles.timeItem, styles.timePosition]} />
          <Text style={styles.to0100Position}>
            <Text style={styles.to0100PmContainer1}>
              <Text style={[styles.text, styles.textTypo]}>{`11:00  `}</Text>
              <Text style={styles.toTypo}>
                <Text style={styles.to1}>to</Text>
              </Text>
              <Text style={styles.pm}>
                <Text style={styles.toTypo}>{` `}</Text>
                <Text style={styles.textTypo}>{` 01:00  `}</Text>
                <Text style={styles.toTypo}>PM</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.time1, styles.timeLayout]}>
          <View style={[styles.timeChild, styles.timePosition]} />
          <Text style={[styles.to0100Pm, styles.to0100Position]}>
            02:00 to 04:00 PM
          </Text>
        </View>
        <View style={[styles.time1, styles.timeLayout]}>
          <View style={[styles.timeChild, styles.timePosition]} />
          <Text style={[styles.to0100Pm, styles.to0100Position]}>
            05:00 to 07:00 PM
          </Text>
        </View>
        <View style={[styles.time1, styles.timeLayout]}>
          <View style={[styles.timeChild, styles.timePosition]} />
          <Text style={[styles.to0100Pm, styles.to0100Position]}>
            08:00 to 10:00 PM
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  to0100Position: {
    textAlign: "center",
    fontSize: FontSize.med_size,
    left: "0.85%",
    top: "18.75%",
    width: "98.29%",
    height: "62.5%",
    position: "absolute",
    alignItems: "center",
    display: "flex",
  },
  timeLayout: {
    height: 32,
    width: 117,
  },
  textTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  chooseTheStart: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.colorBlack,
    textAlign: "left",
    width: 152,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  timeChild: {
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
  },
  to0100Pm: {
    color: Color.a6A6A6,
    justifyContent: "center",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  timeItem: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.praimary,
    borderWidth: 1,
  },
  text: {
    color: Color.praimary,
  },
  to1: {
    color: Color.black,
  },
  toTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  pm: {
    color: Color.praimary,
  },
  to0100PmContainer1: {
    width: "100%",
  },
  time1: {
    marginLeft: 12,
  },
  timeParent: {
    width: 359,
    flexDirection: "row",
    marginTop: 16,
  },
  chooseTheStartTimeParent: {
    width: 343,
    marginTop: 24,
  },
});

export default StartTimeFilter;
