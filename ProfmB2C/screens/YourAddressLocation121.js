import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import TotalSection from "../components/TotalSection";
import Property1Default from "./Property1Default";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const YourAddressLocation121 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
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
      <View style={styles.yourAddressLocationChild} />
      <View style={[styles.eReceiptParent, styles.parentFlexBox]}>
        <Text style={[styles.eReceipt, styles.eReceiptTypo]}>E-Receipt</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-238769.png")}
        />
      </View>
      <View style={[styles.bookingDetailsParent, styles.parentPosition]}>
        <Text style={styles.bookingDetails}>Booking Details</Text>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View>
              <Text style={styles.servicesTypo}>Services</Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Length of service
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Number of Workers
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Working Hours
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Start date and time
              </Text>
            </View>
            <View style={styles.regularCleaningParent}>
              <Text style={styles.oneTimeServiceTypo}>Regular cleaning</Text>
              <Text style={[styles.oneTimeService, styles.oneTimeServiceTypo]}>
                One-time service
              </Text>
              <Text style={[styles.text, styles.textTypo]}>1</Text>
              <Text
                style={[styles.cleaningFor2, styles.textTypo]}
              >{`Cleaning for 2 hours  `}</Text>
              <Text style={[styles.jan282023, styles.textTypo]}>
                Jan 28, 2023 | 11:00 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TotalSection />
      <Property1Default
        logIn="Back to home"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={729}
        property1DefaultLeft="50%"
        property1DefaultWidth={343}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={44}
        logInTextTransform="unset"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("Home")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group71.png")}
      />
      <View style={[styles.arrow21Parent, styles.parentPosition]}>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-13.png")}
          />
        </Pressable>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  eReceiptTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  servicesTypo: {
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  oneTimeServiceTypo: {
    width: 126,
    fontSize: FontSize.med_size,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.med_size,
    marginTop: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  yourAddressLocationChild: {
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
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
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  eReceipt: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
  },
  frameChild: {
    width: 20,
    height: 20,
    marginLeft: 111,
  },
  eReceiptParent: {
    top: 102,
    left: 148,
    position: "absolute",
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    width: 125,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    alignItems: "center",
  },
  lengthOfService: {
    marginTop: 16,
  },
  oneTimeService: {
    marginTop: 16,
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
  },
  cleaningFor2: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  jan282023: {
    width: 136,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  regularCleaningParent: {
    marginLeft: 79,
  },
  frameParent: {
    width: 311,
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xl,
    marginTop: 16,
    backgroundColor: Color.lightBGPrimary,
    overflow: "hidden",
  },
  bookingDetailsParent: {
    top: 256,
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
  },
  icon1: {
    width: 70,
    height: 27,
    marginLeft: 113,
  },
  arrow21Parent: {
    top: 43,
    alignItems: "center",
    flexDirection: "row",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default YourAddressLocation121;
