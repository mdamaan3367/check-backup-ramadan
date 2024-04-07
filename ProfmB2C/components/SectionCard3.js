import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard3 = ({
  taskImageUrl,
  taskDescription,
  taskDuration,
  taskDateTime,
  servicePrice1,
  propWidth,
  propMarginTop,
  propWidth1,
  propMarginLeft,
  onFramePressablePress,
}) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propWidth, propMarginTop]);

  const regularCleaning1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const sAR1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <Pressable
      style={[styles.frameParent, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={taskImageUrl}
        />
        <View style={styles.regularCleaningParent}>
          <Text style={[styles.regularCleaning, regularCleaning1Style]}>
            {taskDescription}
          </Text>
          <Text style={[styles.cleaningFor2, styles.clockParentSpaceBlock]}>
            {taskDuration}
          </Text>
          <View style={[styles.clockParent, styles.clockParentSpaceBlock]}>
            <Image
              style={styles.clockIcon}
              resizeMode="cover"
              source={require("../assets/clock4.png")}
            />
            <Text style={[styles.jan282023, styles.jan282023Typo]}>
              {taskDateTime}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.sar, sAR1Style]}>
        <Text style={styles.sar1}>{servicePrice1}</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  clockParentSpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  jan282023Typo: {
    fontWeight: "300",
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChild: {
    width: 64,
    height: 64,
    borderRadius: Border.br_5xs,
  },
  regularCleaning: {
    fontSize: FontSize.size_sm,
    color: Color.black,
    width: 128,
    height: 16,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    alignItems: "center",
  },
  cleaningFor2: {
    fontSize: FontSize.med_size,
    color: Color.praimary,
    width: 130,
    fontWeight: "300",
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    marginTop: 8,
  },
  clockIcon: {
    width: 12,
    height: 12,
  },
  jan282023: {
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    color: Color.grayBlack,
    width: 109,
    marginLeft: 6,
  },
  clockParent: {
    flexDirection: "row",
  },
  regularCleaningParent: {
    marginLeft: 16,
  },
  rectangleParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  sar1: {
    textTransform: "capitalize",
  },
  text: {
    textTransform: "lowercase",
  },
  sar: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.red,
    textAlign: "right",
    marginLeft: 62,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent: {
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    alignItems: "flex-end",
    padding: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
});

export default SectionCard3;
