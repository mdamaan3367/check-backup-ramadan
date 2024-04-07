import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import AddCardSection from "../components/AddCardSection";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const YourAddressLocation21 = ({ route}) => {
  const navigation = useNavigation();
  const { responseData, parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap, selectedTime } = route.params;


  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View
        style={[styles.yourAddressLocationChild, styles.frameParentPosition]}
      />
      <Text style={styles.paymentMethods}>Payment Methods</Text>
      <PaymentMethodsContainer
        onFramePressablePress={() => navigation.goBack()}
        onFramePressablePress1={() => navigation.goBack()}
      />
      <AddCardSection />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame51.png")}
          />
          <Pressable
            style={styles.agreeToTermsContainer}
            onPress={() => navigation.navigate("TermsAndConditions")}
          >
            <Text style={styles.agreeToTermsAndConditions}>
              agree to terms and conditions
            </Text>
          </Pressable>
        </View>
        <Property1Default
          logIn="Continue"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft="unset"
          property1DefaultTop="73.33%"
          property1DefaultLeft="0%"
          property1DefaultWidth="100%"
          property1DefaultHeight="26.67%"
          property1DefaultRight="0%"
          property1DefaultBottom="0%"
          property1DefaultOpacity={0.5}
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
        />
      </View>
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="unset"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop={777}
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={16}
        webViewBottomBorderBottomLeftRadius={16}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom="unset"
        homeIndicatorBackgroundColor="#1d2939"
      />
      <View style={[styles.arrow21Parent, styles.frameGroupFlexBox]}>
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
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  frameGroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  yourAddressLocationChild: {
    marginLeft: -187.5,
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.lightBGPrimary,
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
  },
  paymentMethods: {
    marginLeft: -87.5,
    top: 102,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.black,
    display: "flex",
    justifyContent: "center",
    width: 175,
    height: 24,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  agreeToTermsAndConditions: {
    fontSize: FontSize.med_size,
    textDecoration: "underline",
    fontWeight: "300",
    color: Color.praimary1,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  agreeToTermsContainer: {
    marginLeft: 8,
  },
  frameGroup: {
    height: "11.11%",
    width: "61.52%",
    top: "0%",
    right: "38.48%",
    bottom: "88.89%",
    left: "0%",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 596,
    width: 343,
    height: 180,
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
    left: 16,
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default YourAddressLocation21;
