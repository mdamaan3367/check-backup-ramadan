import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import AddCardSection from "../components/AddCardSection";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const YourAddressLocation21 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View
        style={[styles.yourAddressLocationChild, styles.frameParentPosition]}
      />
      <Pressable
        style={[styles.arrow21, styles.arrow21Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.paymentMethods, styles.frameGroupFlexBox]}>
        Payment Methods
      </Text>
      <PaymentMethodsContainer
        onFramePressablePress={() => navigation.goBack()}
        onFramePressablePress1={() => navigation.goBack()}
      />
      <Image
        style={[styles.profmLogo1111, styles.arrow21Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
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
            <Text
              style={[
                styles.agreeToTermsAndConditions,
                styles.paymentMethodsTypo,
              ]}
            >
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    position: "absolute",
    left: "50%",
  },
  arrow21Position: {
    top: 43,
    position: "absolute",
  },
  frameGroupFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  paymentMethodsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  yourAddressLocationChild: {
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
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    left: 16,
    width: 24,
    height: 24,
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
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    height: 24,
    left: "50%",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    left: "50%",
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
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: -171.5,
    top: 596,
    width: 343,
    height: 180,
    left: "50%",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default YourAddressLocation21;
