import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCardForm = ({
  imageDimensions,
  propTop,
  propHeight,
  onArrow21Press,
}) => {
  const menuStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <View style={[styles.menuInner, styles.menuInnerPosition]}>
      <View style={[styles.menuInner, styles.menuInnerPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.profmLogo1111}
            resizeMode="cover"
            source={imageDimensions}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.menuPosition]}
          onPress={onArrow21Press}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-11.png")}
          />
        </Pressable>
        <Text style={[styles.menu, styles.menuPosition, menuStyle]}>menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuInnerPosition: {
    width: "100%",
    left: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  groupLayout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  menuPosition: {
    height: 24,
    top: "34%",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 20,
    elevation: 20,
    height: "81%",
    width: "100%",
    left: 0,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 1,
    width: 105,
    height: 43,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: "-16%",
    top: "60%",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    left: "4%",
    width: 24,
  },
  menu: {
    marginLeft: -20.5,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 41,
    left: "50%",
  },
  menuInner: {
    height: 124,
    top: 0,
    width: "100%",
    left: 0,
  },
});

export default SectionCardForm;
