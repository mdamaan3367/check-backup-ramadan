import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({ fullName, personName, propWidth, propMarginLeft }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propWidth, propMarginLeft]);

  return (
    <View>
      <Text style={[styles.firstName, styles.assemTypo]}>{fullName}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.profileParent}>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile.png")}
          />
          <Text style={[styles.assem, styles.assemTypo]}>{personName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  assemTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 30,
    fontSize: FontSize.med_size,
    alignItems: "center",
  },
  groupChildLayout: {
    height: 48,
    width: 159,
  },
  firstName: {
    color: Color.grayBlack,
    width: 83,
    height: 24,
    alignItems: "center",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 0.5,
    position: "absolute",
  },
  profileIcon: {
    width: 18,
    height: 18,
  },
  assem: {
    color: Color.black,
    width: 42,
    height: 16,
    marginLeft: 8,
    alignItems: "center",
  },
  profileParent: {
    top: "28%",
    left: 12,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 4,
  },
});

export default FormContainer;
