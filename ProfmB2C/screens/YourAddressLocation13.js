import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const YourAddressLocation13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourAddressLocation}>
      <Image
        style={[styles.vectorIcon, styles.buttonBigLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
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
        <Text style={[styles.messageToWorkers, styles.logInFlexBox]}>
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
        style={[styles.buttonBig, styles.buttonBigLayout]}
        onPress={() => navigation.navigate("YourAddressLocation14")}
      >
        <View style={[styles.buttonBigChild, styles.iconLayout]} />
        <Text style={[styles.logIn, styles.logInFlexBox]}>View E-Receipt</Text>
      </Pressable>
      <Pressable
        style={[styles.arrow211, styles.icon2Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon2, styles.icon2Position]}
        resizeMode="cover"
        source={require("../assets/3-1-13.png")}
      />
      <View style={styles.webViewbottom}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBigLayout: {
    width: 343,
    position: "absolute",
  },
  paymentSuccessfulLayout: {
    width: 175,
    lineHeight: 30,
    display: "flex",
    textAlign: "center",
    color: Color.lightBGPrimary,
    textTransform: "capitalize",
    alignItems: "center",
  },
  messageToWorkersTypo: {
    fontSize: FontSize.size_sm,
    height: 24,
  },
  youvePaidTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  logInFlexBox: {
    lineHeight: 44,
    letterSpacing: 0.6,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  icon2Position: {
    top: 43,
    position: "absolute",
  },
  vectorIcon: {
    top: 16,
    left: 16,
    height: 316,
  },
  httpslottiefilescomanimatIcon: {
    width: 288,
    height: 150,
  },
  paymentSuccessful: {
    height: 24,
    justifyContent: "center",
    fontSize: FontSize.size_base,
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
    lineHeight: 30,
    display: "flex",
    textAlign: "center",
    color: Color.lightBGPrimary,
    textTransform: "capitalize",
    alignItems: "center",
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
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "center",
    fontWeight: "300",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  messageToWorkers: {
    marginLeft: -80,
    top: 0,
    color: Color.praimary1,
    width: 138,
    fontSize: FontSize.size_sm,
    height: 24,
    left: "50%",
  },
  icon: {
    overflow: "hidden",
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
  buttonBigChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    color: Color.lightBGPrimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    letterSpacing: 0.6,
  },
  buttonBig: {
    marginLeft: -171.5,
    top: 729,
    height: 48,
    left: "50%",
  },
  arrow211: {
    left: 32,
    width: 24,
    height: 24,
  },
  icon2: {
    marginLeft: -34.5,
    width: 70,
    height: 27,
    left: "50%",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    marginLeft: -187.5,
    bottom: 0,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default YourAddressLocation13;
