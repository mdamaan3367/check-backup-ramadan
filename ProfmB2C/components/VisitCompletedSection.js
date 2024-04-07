import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VisitCompletedSection = ({ timeAgo, propTop, propBackgroundColor }) => {
  const groupView7Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView7Style]}
    >
      <View
        style={[
          styles.groupChild,
          styles.groupChildLayout,
          rectangleView1Style,
        ]}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-238975.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.visitCompletedSuccessfullyParent}>
            <Text style={styles.visitCompletedSuccessfully}>
              Visit completed successfully
            </Text>
            <Text style={[styles.minsAgo, styles.minsAgoTypo]}>{timeAgo}</Text>
          </View>
          <Text style={[styles.weArePleased, styles.minsAgoTypo]}>
            We are pleased to inform you that the repair work related to order
            No. 00215 has been completed....
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 81,
    width: 375,
    left: 0,
    position: "absolute",
  },
  minsAgoTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorAliceblue_200,
  },
  frameChild: {
    width: 50,
    height: 50,
  },
  visitCompletedSuccessfully: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "700",
    color: Color.black,
    width: 194,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
  },
  minsAgo: {
    fontSize: FontSize.size_4xs,
    color: Color.a6A6A6,
    textAlign: "right",
    width: 46,
    marginLeft: 37,
  },
  visitCompletedSuccessfullyParent: {
    flexDirection: "row",
  },
  weArePleased: {
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
    width: 265,
    height: 30,
    marginTop: 8,
    textAlign: "left",
  },
  frameParent: {
    marginLeft: 16,
  },
  groupParent: {
    top: 13,
    left: 16,
    width: 343,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 145,
  },
});

export default VisitCompletedSection;
