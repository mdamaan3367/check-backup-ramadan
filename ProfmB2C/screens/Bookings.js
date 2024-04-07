import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingSection from "../components/BookingSection";
import SectionCard from "../components/SectionCard";
import MenuSection from "../components/MenuSection";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Bookings = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={[styles.bookings, styles.bookingsLayout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-3.png")}
      />
      <Image
        style={styles.bookingsChild}
        resizeMode="cover"
        source={require("../assets/frame-1171276338.png")}
      />
      <View style={[styles.inputFild, styles.inputTransform]}>
        <Text style={[styles.password, styles.inputTransform]}>Password</Text>
        <Image
          style={[styles.inputFildChild, styles.inputTransform]}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={styles.eyeSlashIcon}
          resizeMode="cover"
          source={require("../assets/eyeslash2.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
        </View>
      </View>
      <BookingSection
        imageDimensions={require("../assets/profm-logo1-1-1-13.png")}
        bookingIds="bookings"
        onArrow21Press={() => navigation.goBack()}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupItem, styles.itemLayout]} />
        <Text style={[styles.past, styles.pastTypo]}>past</Text>
        <Text style={[styles.upcoming, styles.pastTypo]}>upcoming</Text>
      </View>
      <SectionCard
        orderNumber="20"
        appointmentDetails="feb"
        taskDescription="Regular cleaning"
        orderNumberLabel="order number: 00025"
        appointmentTime="11:00 AM"
        paymentMethod="Cash Payment"
        packageDimensions={require("../assets/calendaredit.png")}
        appointmentChangeReason="change appointment"
        onFramePressablePress={() => navigation.navigate("PinYourLocation1")}
      />
      <SectionCard
        orderNumber="25"
        appointmentDetails="feb"
        taskDescription="Equipment maintenance"
        orderNumberLabel="order number: 00140"
        appointmentTime="10:00 AM"
        paymentMethod="Paid online"
        packageDimensions={require("../assets/calendaredit.png")}
        appointmentChangeReason="change appointment"
        propTop={392}
        propWidth={323}
        propWidth1={157}
        propMarginLeft="unset"
        propWidth2={42}
        propColor="#bd7f3f"
        propFontWeight="unset"
        propWidth3={148}
        onFramePressablePress={() => navigation.navigate("PinYourLocation1")}
      />
      <Pressable
        style={[styles.bookingsItem, styles.itemLayout]}
        onPress={() => navigation.navigate("Bookings1")}
      />
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bookingsLayout: {
    width: "100%",
    overflow: "hidden",
  },
  inputTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 343,
    position: "absolute",
  },
  itemLayout: {
    height: 32,
    position: "absolute",
  },
  pastTypo: {
    height: 16,
    width: 77,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    top: 12,
    position: "absolute",
  },
  map3Icon: {
    top: -229,
    right: 90,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  bookingsChild: {
    top: 47,
    right: 16,
    width: 20,
    height: 20,
    position: "absolute",
  },
  password: {
    top: "-1.72%",
    left: "90.38%",
    fontSize: FontSize.med_size,
    letterSpacing: 0.5,
    fontFamily: FontFamily.dubai,
    color: Color.primary3,
    textAlign: "left",
  },
  inputFildChild: {
    height: "82.76%",
    top: "17.24%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    width: 18,
    height: 18,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  frameChild: {
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    right: 17,
    width: 62,
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 7,
    top: "50%",
    position: "absolute",
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    display: "none",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue_300,
  },
  groupItem: {
    top: 4,
    left: 176,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary,
    width: 163,
  },
  past: {
    left: 47,
    fontWeight: "300",
    color: Color.praimary,
  },
  upcoming: {
    left: 219,
    fontWeight: "700",
    color: Color.whait,
  },
  rectangleParent: {
    top: 156,
    left: 16,
  },
  bookingsItem: {
    top: 160,
    left: 45,
    width: 114,
  },
  bookings: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Bookings;
