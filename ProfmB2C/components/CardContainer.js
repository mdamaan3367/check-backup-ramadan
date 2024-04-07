import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainer = ({ groupIconTop }) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupIconTop),
    };
  }, [groupIconTop]);

  return (
    <View style={[styles.groupParent, frameView2Style]}>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/group-238933.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.groupFlexBox}>
          <Text style={[styles.khalidAlQahtani, styles.khalidAlQahtaniTypo]}>
            Khalid Al Qahtani
          </Text>
        </View>
        <View style={[styles.groupGroup, styles.groupFlexBox]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group13.png")}
          />
          <Text style={[styles.alRawdahDistrict, styles.khalidAlQahtaniTypo]}>
            Al Rawdah district , Jeddah
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  khalidAlQahtaniTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    width: 98,
    height: 98,
  },
  khalidAlQahtani: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.black,
  },
  groupIcon: {
    width: 10,
    height: 14,
  },
  alRawdahDistrict: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.grayBlack,
    marginLeft: 4,
  },
  groupGroup: {
    marginTop: 8,
    height: 14,
  },
  frameParent: {
    marginTop: 16,
    alignItems: "center",
  },
  groupParent: {
    position: "absolute",
    top: "40%",
    left: "30%",
    alignItems: "center",
  },
});

export default CardContainer;
