import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingFormContainer from "../components/BookingFormContainer";
import SectionForm from "../components/SectionForm";
import SectionCard1 from "../components/SectionCard1";
import StartTimeFilter from "../components/StartTimeFilter";
import WebViewBottom from "../components/WebViewBottom";
import Property1Default from "../components/Property1Default";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const PinYourLocation19 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pinYourLocation}>
      <View
        style={[styles.pinYourLocationChild, styles.buttonBigParentPosition]}
      />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.bookingTheService, styles.notIncludingVatFlexBox]}>
        Booking the service
      </Text>
      <BookingFormContainer />
      <View style={[styles.pinYourLocationItem, styles.writeHerePosition]} />
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
      />
      <View style={styles.frameParent}>
        <SectionForm />
        <SectionCard1 />
        <StartTimeFilter />
        <View style={styles.writeCommentsOrPreferencesParent}>
          <Text style={[styles.writeCommentsOr, styles.writeFlexBox]}>
            Write comments or preferences
          </Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.writeHere, styles.writeHereTypo]}>
              Write here.......
            </Text>
          </View>
        </View>
      </View>
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="#fafdff"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop={778}
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={5}
        webViewBottomBorderBottomLeftRadius={5}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom="unset"
        homeIndicatorBackgroundColor="#1d2939"
      />
      <View style={[styles.buttonBigParent, styles.buttonBigParentPosition]}>
        <Property1Default
          logIn="Continue"
          property1DefaultPosition="relative"
          property1DefaultMarginLeft="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultWidth={251}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom="unset"
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.33%"
          logInLeft="20.72%"
          onButtonBigPress={() => navigation.navigate("YourAddressLocation11")}
        />
        <View style={styles.sarParent}>
          <Text style={styles.sar}>79 SAR</Text>
          <Text style={[styles.notIncludingVat, styles.writeHereTypo]}>
            not including vat
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBigParentPosition: {
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.whait,
    left: "50%",
    position: "absolute",
  },
  notIncludingVatFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  writeHerePosition: {
    left: "50%",
    position: "absolute",
  },
  writeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChildLayout: {
    height: 143,
    width: 343,
  },
  writeHereTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  pinYourLocationChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 86,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    width: 375,
    marginLeft: -187.5,
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
  bookingTheService: {
    marginLeft: -77.5,
    top: 102,
    lineHeight: 30,
    color: Color.black,
    width: 155,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    height: 24,
    left: "50%",
    position: "absolute",
  },
  pinYourLocationItem: {
    marginLeft: -165.5,
    top: 877,
    width: 331,
    height: 38,
    overflow: "hidden",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  writeCommentsOr: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    width: 207,
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    backgroundColor: Color.whait,
    width: 343,
    position: "absolute",
  },
  writeHere: {
    marginLeft: -155.5,
    top: 16,
    fontSize: FontSize.size_3xs,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  writeCommentsOrPreferencesParent: {
    marginTop: 24,
  },
  frameParent: {
    top: 222,
    height: 590,
    left: 16,
    position: "absolute",
  },
  sar: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.red,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  notIncludingVat: {
    fontSize: FontSize.size_4xs,
    color: Color.gray,
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  sarParent: {
    alignItems: "center",
  },
  buttonBigParent: {
    top: 714,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    width: 375,
    marginLeft: -187.5,
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default PinYourLocation19;
