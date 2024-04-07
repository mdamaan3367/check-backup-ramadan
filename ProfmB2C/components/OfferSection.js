import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OfferSection = ({ timeAgo, propTop, propBackgroundColor }) => {
  const groupView8Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView8Style]}
    >
      <View
        style={[
          styles.groupChild,
          styles.groupChildLayout,
          rectangleView2Style,
        ]}
      />
      <View style={styles.frameWrapper}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238976.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.newOfferParent}>
              <Text style={styles.newOffer}>new offer</Text>
              <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                {timeAgo}
              </Text>
            </View>
            <Text style={[styles.onTheOccasion, styles.minsAgoTypo]}>
              On the occasion of Ramadan, 20% discount on deep cleaning
            </Text>
          </View>
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
  newOffer: {
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
    width: 56,
    marginLeft: 27,
  },
  newOfferParent: {
    flexDirection: "row",
  },
  onTheOccasion: {
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
    width: 343,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    top: 13,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 234,
  },
});

export default OfferSection;
