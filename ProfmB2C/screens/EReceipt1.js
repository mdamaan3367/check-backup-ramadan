import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import WebViewBottom from "../components/WebViewBottom";
import { useNavigation } from "@react-navigation/native";
import BookingDetailsSection from "../components/BookingDetailsSection";
import TotalSection1 from "../components/TotalSection1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const EReceipt1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.eReceipt, styles.iconLayout]}>
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="#fafdff"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop="unset"
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={5}
        webViewBottomBorderBottomLeftRadius={5}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom={0}
        homeIndicatorBackgroundColor="#1d2939"
      />
      <View style={styles.eReceiptChild} />
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-141.png")}
      />
      <Text style={[styles.eReceipt1, styles.arrow21Layout]}>E-Receipt</Text>
      <Image
        style={styles.eReceiptItem}
        resizeMode="cover"
        source={require("../assets/group-238769.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group141.png")}
      />
      <View style={styles.frameParent}>
        <BookingDetailsSection />
        <TotalSection1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  arrow21Layout: {
    height: 24,
    position: "absolute",
  },
  eReceiptChild: {
    marginLeft: -187.5,
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 86,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    left: 16,
    width: 24,
    top: 43,
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  eReceipt1: {
    marginLeft: -39.5,
    top: 102,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    left: "50%",
  },
  eReceiptItem: {
    top: 104,
    left: 339,
    width: 20,
    height: 20,
    position: "absolute",
  },
  groupIcon: {
    height: "11.08%",
    width: "24%",
    top: "17.49%",
    right: "38.13%",
    bottom: "71.43%",
    left: "37.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 256,
    left: "50%",
    position: "absolute",
  },
  eReceipt: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default EReceipt1;
