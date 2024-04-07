import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Home = ({
  home2,
  calendarTick,
  property1HomePosition,
  property1HomeMarginLeft,
  property1HomeTop,
  property1HomeLeft,
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
}) => {
  const property1HomeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1HomePosition),
      ...getStyleValue("marginLeft", property1HomeMarginLeft),
      ...getStyleValue("top", property1HomeTop),
      ...getStyleValue("left", property1HomeLeft),
    };
  }, [
    property1HomePosition,
    property1HomeMarginLeft,
    property1HomeTop,
    property1HomeLeft,
  ]);

  return (
    <View
      style={[styles.property1home, styles.parentFlexBox, property1HomeStyle]}
    >
      <View style={[styles.property1homeInner, styles.parentFlexBox]}>
        <View style={[styles.home2Parent, styles.parentFlexBox]}>
          <Image style={styles.home2Icon} resizeMode="cover" source={home2} />
          <Text style={styles.home}>Home</Text>
        </View>
      </View>
      <Pressable
        style={[styles.property1homeChild, styles.parentFlexBox]}
        onPress={onFramePressablePress}
      >
        <View style={styles.calendarTickParent}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={calendarTick}
          />
          <Text style={[styles.bookings, styles.menuTypo]}>bookings</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.property1homeChild, styles.parentFlexBox]}
        onPress={onFramePressablePress1}
      >
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
          <Text style={[styles.bookings, styles.menuTypo]}>account</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.property1homeChild, styles.parentFlexBox]}
        onPress={onFramePressablePress2}
      >
        <Image
          style={styles.home2Icon}
          resizeMode="cover"
          source={require("../assets/textalignleft.png")}
        />
        <View style={styles.menuWrapper}>
          <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuTypo: {
    color: Color.a6A6A6,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "700",
    color: Color.praimary,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  home2Parent: {
    height: 53,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
  },
  property1homeInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
  },
  bookings: {
    textTransform: "capitalize",
    marginTop: 4,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  property1homeChild: {
    width: 94,
    height: 56,
    justifyContent: "center",
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  menuWrapper: {
    width: 30,
    height: 16,
    marginTop: 4,
  },
  property1home: {
    backgroundColor: Color.whait,
    width: 375,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
  },
});

export default Property1Home;
