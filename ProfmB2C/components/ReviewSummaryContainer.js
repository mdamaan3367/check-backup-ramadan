import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ReviewSummaryContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lineParent}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Pressable
        style={[styles.frameParent, styles.frameGroupPosition]}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
        </View>
        <Text style={[styles.location, styles.bookingTypo]}>Location</Text>
      </Pressable>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
        </View>
        <Text style={[styles.location, styles.bookingTypo]}>Payment</Text>
      </View>
      <View style={[styles.groupParent, styles.frameGroupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>4</Text>
        </View>
        <Text style={[styles.location, styles.bookingTypo]}>Summary</Text>
      </View>
      <Pressable
        style={[styles.frameContainer, styles.ellipseIconPosition]}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
        </View>
        <Text style={[styles.booking, styles.textFlexBox]}>{`Booking `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderColor: Color.praimary,
    borderStyle: "solid",
    top:"40%",
    position: "absolute",
  },
  frameGroupPosition: {
    top: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  bookingTypo: {
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  ellipseIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  groupChild: {
    left: "10%",
  },
  groupItem: {
    left: "30%",
  },
  groupInner: {
    left:"50%",
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon: {
    height: "30%",
    width: "37.5%",
    top: "37.5%",
    right: "30%",
    bottom: "32.5%",
    left: "32.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  location: {
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  frameParent: {
    left:"20%",
    alignItems: "flex-end",
  },
  frameGroup: {
    left: "40%",
  },
  ellipseIcon: {
    height: 40,
    width: 40,
  },
  text: {
    marginLeft: -4,
    top: 12,
    left: "50%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.whait,
    width: 8,
    height: 18,
    position: "absolute",
  },
  groupParent: {
    left: "60%",
    alignItems: "center",
  },
  booking: {
    color: Color.colorBlack,
    width: 39,
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    display: "flex",
  },
  frameContainer: {
    alignItems: "center",
  },
  lineParent: {
    top:"15%",
    left:"15%",
    width:"100%",
    height: 56,
    position: "absolute",
  },
});

export default ReviewSummaryContainer;
