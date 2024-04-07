import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReviewSummaryContainer from "../components/ReviewSummaryContainer";
import LocationSection from "../components/LocationSection";
import TotalSection from "../components/TotalSection";
import CreditCardForm from "../components/CreditCardForm";
import Property1Default from "./Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const YourAddressLocation51 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourAddressLocation}>
      <View style={styles.yourAddressLocationChild} />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.reviewSummary, styles.jan282023FlexBox]}>
        Review Summary2
      </Text>
      <ReviewSummaryContainer />
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-141.png")}
      />
      <View style={[styles.bookingDetailsParent, styles.parentFlexBox]}>
        <Text style={styles.bookingDetails}>Booking Details</Text>
        <Image
          style={styles.svgexport1822}
          resizeMode="cover"
          source={require("../assets/svgexport18-2-2.png")}
        />
      </View>
      <View style={[styles.yourAddressLocationInner, styles.yourPosition]}>
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
      <LocationSection />
      <TotalSection
        propTop={545}
        propMarginTop={16}
        propLeft={269}
        propTextAlign="right"
        propWidth={311}
      />
      <CreditCardForm />
      <Property1Default
        logIn="Confirm Payment"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={874}
        property1DefaultLeft="50%"
        property1DefaultWidth={343}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("YourAddressLocation61")}
      />
      <View style={[styles.yourAddressLocationItem, styles.yourPosition]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  jan282023FlexBox: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  yourPosition: {
    left: 16,
    position: "absolute",
  },
  servicesTypo: {
    color: Color.color,
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
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
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
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    height: 24,
    top: 43,
    left: 16,
    position: "absolute",
  },
  reviewSummary: {
    marginLeft: -87.5,
    top: 102,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    width: 175,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    height: 24,
    left: "50%",
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    width: 125,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  svgexport1822: {
    width: 18,
    height: 18,
    marginLeft: 200,
    overflow: "hidden",
  },
  bookingDetailsParent: {
    top: 221,
    left: 16,
    position: "absolute",
  },
  lengthOfService: {
    marginTop: 16,
  },
  oneTimeService: {
    marginTop: 16,
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 16,
  },
  cleaningFor2: {
    marginTop: 16,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  jan282023: {
    width: 136,
    marginTop: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningParent: {
    marginLeft: 79,
  },
  frameParent: {
    width: 311,
  },
  yourAddressLocationInner: {
    top: 255,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    padding: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.lightBGPrimary,
  },
  yourAddressLocationItem: {
    top: 937,
    width: 342,
    height: 34,
    overflow: "hidden",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default YourAddressLocation51;
