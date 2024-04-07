import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TermsAndConditionsSection = ({ propWidth, onGroupPressablePress }) => {
  const termsAndConditionsContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <Pressable style={styles.rectangleParent} onPress={onGroupPressablePress}>
      <View style={styles.groupChild} />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238790.png")}
          />
          <Text
            style={[
              styles.termsAndConditionsContainer,
              termsAndConditionsContainerStyle,
            ]}
          >
            <Text style={styles.termsAndConditionsContainer1}>
              <Text style={styles.terms}>{`terms `}</Text>
              <Text style={styles.and}>and</Text>
              <Text style={styles.terms}> conditions</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  terms: {
    textTransform: "capitalize",
  },
  and: {
    textTransform: "lowercase",
  },
  termsAndConditionsContainer1: {
    width: "100%",
  },
  termsAndConditionsContainer: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    width: 142,
    height: 16,
    marginLeft: 8,
    alignItems: "center",
  },
  groupParent: {
    alignItems: "center",
  },
  groupIcon: {
    width: 8,
    height: 12,
  },
  frameParent: {
    top: 15,
    left: "4%",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    width: "187.5%",
    height: 56,
    marginTop: 8,
  },
});

export default TermsAndConditionsSection;
