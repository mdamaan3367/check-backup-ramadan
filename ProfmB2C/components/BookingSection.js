import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BookingSection = ({ imageDimensions, bookingIds, onArrow21Press }) => {
  return (
    <View style={[styles.bookingsInner, styles.groupChildPosition]}>
      <View style={[styles.bookingsInner, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={[styles.profmLogo1111, styles.bookingsPosition]}
            resizeMode="cover"
            source={imageDimensions}
          />
        </View>
        <Pressable style={styles.arrow21} onPress={onArrow21Press}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-11.png")}
          />
        </Pressable>
        <Text style={[styles.bookings, styles.bookingsPosition]}>
          {bookingIds}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 375,
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
  bookingsPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    width: 375,
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
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleGroup: {
    marginLeft: -79.5,
    top: 76,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    left: 16,
    top: 43,
    width: 24,
    height: 24,
    position: "absolute",
  },
  bookings: {
    marginLeft: -72.5,
    top: 40,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 146,
    height: 30,
  },
  bookingsInner: {
    height: 124,
    top: 0,
    left: 0,
  },
});

export default BookingSection;
