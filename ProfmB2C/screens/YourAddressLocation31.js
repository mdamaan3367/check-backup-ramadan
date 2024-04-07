import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "./Property1Default";
import SectionCard2 from "../components/SectionCard2";
import WebViewBottom from "../components/WebViewBottom";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const YourAddressLocation31 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View style={styles.yourAddressLocationChild} />
      <Text style={[styles.addCard, styles.addCardLayout]}>Add Card</Text>
      <Text style={[styles.pleaseProvideThe, styles.addCardLayout]}>
        Please provide the details :
      </Text>
      <Property1Default
        logIn="Payment by card"
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
        onButtonBigPress={() => navigation.navigate("YourAddressLocation41")}
      />
      <SectionCard2 />
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
      <View style={styles.arrow21Parent}>
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
    overflow: "hidden",
    width: "100%",
  },
  addCardLayout: {
    width: 175,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    left: "50%",
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
    left: "50%",
    position: "absolute",
  },
  addCard: {
    marginLeft: -87.5,
    top: 102,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    height: 24,
  },
  pleaseProvideThe: {
    marginLeft: -171.5,
    top: 158,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    color: Color.praimary1,
    textAlign: "left",
    height: 16,
  },
  icon: {
    height: "100%",
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
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default YourAddressLocation31;
