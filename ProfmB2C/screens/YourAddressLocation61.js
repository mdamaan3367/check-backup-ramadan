import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "./Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const YourAddressLocation61 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.httpslottiefilescomanimatParent}>
        <Image
          style={styles.httpslottiefilescomanimatIcon}
          resizeMode="cover"
          source={require("../assets/httpslottiefilescomanimationscheckmotion6wswjisehy.png")}
        />
        <View style={styles.paymentSuccessfulParent}>
          <Text
            style={[styles.paymentSuccessful, styles.paymentSuccessfulLayout]}
          >
            Payment Successful!
          </Text>
          <Text
            style={[styles.youvePaid91Container, styles.messageToWorkersTypo]}
          >
            <Text style={styles.youvePaid91Container1}>
              <Text style={styles.youvePaidTypo}>You’ve paid</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.text1}>91</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.youvePaidTypo}>SAR</Text>
            </Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.receiptHasBeen, styles.youvePaidTypo]}>
        Receipt has been sent to your email address
      </Text>
      <View style={styles.messageToWorkersParent}>
        <Text style={[styles.messageToWorkers, styles.messageToWorkersTypo]}>
          Message to workers
        </Text>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-12.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.arrow211, styles.arrow211Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.profmLogo1111, styles.arrow211Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-15.png")}
      />
      <Property1Default
        logIn="View E-Receipt"
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
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("YourAddressLocation121")}
      />
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="unset"
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
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  paymentSuccessfulLayout: {
    width: 175,
    color: Color.lightBGPrimary,
    textTransform: "capitalize",
    lineHeight: 30,
  },
  messageToWorkersTypo: {
    fontSize: FontSize.size_sm,
    height: 24,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  youvePaidTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  arrow211Position: {
    top: 43,
    position: "absolute",
  },
  vectorIcon: {
    top: 16,
    left: 16,
    width: 343,
    height: 316,
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    width: 288,
    height: 150,
  },
  paymentSuccessful: {
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  youvePaid91Container1: {
    width: "100%",
  },
  youvePaid91Container: {
    marginTop: 12,
    width: 175,
    color: Color.lightBGPrimary,
    textTransform: "capitalize",
    lineHeight: 30,
  },
  paymentSuccessfulParent: {
    marginTop: 32,
  },
  httpslottiefilescomanimatParent: {
    marginLeft: -144.5,
    top: 53,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  receiptHasBeen: {
    marginLeft: -155.5,
    top: 380,
    color: Color.colorGray_600,
    width: 312,
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  messageToWorkers: {
    marginLeft: -80,
    top: 0,
    letterSpacing: 0.6,
    lineHeight: 44,
    color: Color.praimary1,
    width: 138,
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow21: {
    left: 146,
    top: 6,
    width: 14,
    height: 14,
    position: "absolute",
  },
  messageToWorkersParent: {
    marginLeft: -79.5,
    top: 434,
    width: 160,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  arrow211: {
    left: 32,
    width: 24,
    height: 24,
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    left: "50%",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default YourAddressLocation61;
