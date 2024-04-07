import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileSection = ({
  iconImageUrl,
  actionButtonText,
  groupIconMarginTop,
}) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", groupIconMarginTop),
    };
  }, [groupIconMarginTop]);

  return (
    <View style={[styles.rectangleParent, groupView4Style]}>
      <View style={styles.groupChild} />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={iconImageUrl}
          />
          <Text style={styles.profile}>{actionButtonText}</Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
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
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  profile: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    width: 120,
    height: 16,
    marginLeft: 8,
    alignItems: "center",
  },
  groupParent: {
    alignItems: "center",
  },
  groupIcon: {
    width: 7,
    height: 12,
    marginLeft: 152,
  },
  frameParent: {
    top: 16,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    width: 343,
    height: 56,
  },
});

export default ProfileSection;
