import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingFormContainer from "../components/BookingFormContainer";
import SectionForm from "../components/SectionForm";
import SectionCard1 from "../components/SectionCard1";
import WebViewBottom from "../components/WebViewBottom";
import Property1Default from "./Property1Default";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const PinYourLocation19 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pinYourLocation}>
      <View
        style={[styles.pinYourLocationChild, styles.buttonBigParentPosition]}
      />
      <Text style={[styles.bookingTheService, styles.arrow21Layout]}>
        Booking the service
      </Text>
      <BookingFormContainer />
      <View style={styles.pinYourLocationItem} />
      <View style={styles.frameParent}>
        <SectionForm />
        <SectionCard1 />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.startTimeParent, styles.parentFlexBox]}>
            <Text style={styles.startTime}>start time</Text>
            <View style={[styles.addCircleParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/addcircle.png")}
              />
              <Text style={[styles.am, styles.amTypo]}>08:00 AM</Text>
              <Image
                style={[styles.minusCirlceIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/minuscirlce1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.writeCommentsOrPreferencesParent}>
          <Text style={[styles.writeCommentsOr, styles.writeFlexBox]}>
            Write comments or preferences
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.writeHere, styles.writeHereTypo]}>
              Write here.......
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-13.png")}
        />
      </Pressable>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
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
      <View style={[styles.buttonBigParent, styles.parentFlexBox]}>
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
          onButtonBigPress={() => navigation.navigate("YourAddressLocation111")}
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
    backgroundColor: Color.lightBGPrimary,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    width: 343,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  amTypo: {
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  writeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupLayout: {
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
    backgroundColor: Color.lightBGPrimary,
    marginLeft: -187.5,
  },
  bookingTheService: {
    marginLeft: -77.5,
    top: 102,
    lineHeight: 30,
    width: 155,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    height: 24,
    left: "50%",
  },
  pinYourLocationItem: {
    marginLeft: -165.5,
    top: 877,
    width: 331,
    height: 38,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    height: 53,
    width: 343,
  },
  startTime: {
    color: Color.colorBlack,
    textTransform: "capitalize",
    fontSize: FontSize.med_size,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  am: {
    width: 56,
    marginLeft: 8,
    height: 16,
    fontSize: FontSize.med_size,
    justifyContent: "center",
    textAlign: "center",
    color: Color.black,
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: 142,
    justifyContent: "center",
  },
  startTimeParent: {
    top: 16,
    position: "absolute",
    left: 16,
  },
  rectangleParent: {
    marginTop: 24,
  },
  writeCommentsOr: {
    fontSize: FontSize.size_sm,
    width: 207,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "left",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: "absolute",
  },
  writeHere: {
    marginLeft: -155.5,
    fontSize: FontSize.size_3xs,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorBlack,
    top: 16,
    position: "absolute",
    left: "50%",
  },
  rectangleGroup: {
    marginTop: 16,
  },
  writeCommentsOrPreferencesParent: {
    marginTop: 24,
  },
  frameParent: {
    top: 230,
    height: 590,
    left: 16,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    top: 44,
    width: 24,
    left: 16,
  },
  icon1: {
    marginLeft: -34.5,
    top: 43,
    width: 70,
    height: 27,
    left: "50%",
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
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    width: 375,
    backgroundColor: Color.lightBGPrimary,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default PinYourLocation19;
