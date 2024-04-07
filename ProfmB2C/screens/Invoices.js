import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import BookingSection from "../components/BookingSection";
import SectionCard3 from "../components/SectionCard3";
import Property1Default3 from "../components/Property1Default3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Invoices = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.invoices, styles.invoicesLayout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-3.png")}
      />
      <View style={styles.navBar}>
        <WebViewBottom
          webViewBottomPosition="absolute"
          webViewBottomBackgroundColor="#fafdff"
          webViewBottomMarginLeft={-187.5}
          webViewBottomTop={0}
          webViewBottomLeft="50%"
          webViewBottomBorderBottomRightRadius={5}
          webViewBottomBorderBottomLeftRadius={5}
          webViewBottomWidth={375}
          webViewBottomHeight={34}
          webViewBottomBottom="unset"
          homeIndicatorBackgroundColor="#1d2939"
        />
      </View>
      <Image
        style={styles.invoicesChild}
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
        imageDimensions={require("../assets/profm-logo1-1-1-2.png")}
        bookingIds="invoices"
        onArrow21Press={() => navigation.goBack()}
      />
      <View style={styles.frameParent}>
        <SectionCard3
          taskImageUrl={require("../assets/rectangle-4348.png")}
          taskDescription="Regular cleaning"
          taskDuration="Cleaning for 2 hours  "
          taskDateTime="Jan 28, 2023 | 11:00 AM"
          servicePrice1="91 SAR "
          onFramePressablePress={() => navigation.navigate("EReceipt")}
        />
        <SectionCard3
          taskImageUrl={require("../assets/rectangle-43481.png")}
          taskDescription="Equipment maintenance"
          taskDuration="Pump maintenance"
          taskDateTime="Jan 30, 2023 | 9:00 AM"
          servicePrice1="46 SAR "
          propWidth={343}
          propMarginTop={16}
          propWidth1={160}
          propMarginLeft="unset"
          onFramePressablePress={() => navigation.navigate("EReceipt1")}
        />
        <SectionCard3
          taskImageUrl={require("../assets/rectangle-4348.png")}
          taskDescription="Regular cleaning"
          taskDuration="Cleaning for 2 hours  "
          taskDateTime="Jan 28, 2023 | 11:00 AM"
          servicePrice1="91 SAR "
          propWidth="unset"
          propMarginTop={16}
          propWidth1={128}
          propMarginLeft={62}
          onFramePressablePress={() => navigation.navigate("EReceipt")}
        />
        <SectionCard3
          taskImageUrl={require("../assets/rectangle-43481.png")}
          taskDescription="Equipment maintenance"
          taskDuration="Pump maintenance"
          taskDateTime="Jan 30, 2023 | 9:00 AM"
          servicePrice1="46 SAR "
          propWidth={343}
          propMarginTop={16}
          propWidth1={160}
          propMarginLeft="unset"
          onFramePressablePress={() => navigation.navigate("EReceipt1")}
        />
        <SectionCard3
          taskImageUrl={require("../assets/rectangle-4348.png")}
          taskDescription="Regular cleaning"
          taskDuration="Cleaning for 2 hours  "
          taskDateTime="Jan 28, 2023 | 11:00 AM"
          servicePrice1="91 SAR "
          propWidth="unset"
          propMarginTop={16}
          propWidth1={128}
          propMarginLeft={62}
          onFramePressablePress={() => navigation.navigate("EReceipt")}
        />
      </View>
      <Property1Default3
        fiRrZoomOut={require("../assets/firrzoomout3.png")}
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={148}
        property1DefaultLeft="50%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  invoicesLayout: {
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
  map3Icon: {
    top: -229,
    right: 90,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  navBar: {
    marginLeft: -187.5,
    top: 778,
    left: "50%",
    width: 375,
    height: 34,
    position: "absolute",
  },
  invoicesChild: {
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
  frameParent: {
    top: 208,
    left: 16,
    position: "absolute",
  },
  invoices: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Invoices;
