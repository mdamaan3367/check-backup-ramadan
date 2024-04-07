import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SectionLanguageChange = ({ iconId, onGroupPressablePress }) => {
  return (
    <Pressable style={styles.rectangleParent} onPress={onGroupPressablePress}>
      <View style={styles.groupChild} />
      <View style={styles.groupParent}>
        <Image style={styles.frameChild} resizeMode="cover" source={iconId} />
        <Text style={[styles.text, styles.textTypo]}>تغيير اللغة</Text>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group6.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>العربية</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    textTransform: "capitalize",
    alignItems: "center",
  },
  groupChild: {
    height: "100%",
    width: "100%",
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
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    width: 68,
    marginLeft: 8,
  },
  groupParent: {
    top: "26%",
    left: "4%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupIcon: {
    height: "21.43%",
    width: "2.04%",
    top: "39.29%",
    left: "92.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  text1: {
    top: "37%",
    left: "77%",
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
    textAlign: "right",
    width: 37,
    position: "absolute",
  },
  rectangleParent: {
    width: "187%",
    height: 56,
    marginTop: 8,
  },
});

export default SectionLanguageChange;
