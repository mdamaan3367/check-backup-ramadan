import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import WebViewBottom from "../components/WebViewBottom";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const EReceipt = () => {
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
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
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
      <View style={styles.eReceiptParent}>
        <Text style={[styles.eReceipt1, styles.eReceipt1Typo]}>E-Receipt</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-238769.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View>
          <Text style={styles.bookingDetails}>Booking Details</Text>
          <View style={[styles.frameWrapper, styles.groupChildBorder]}>
            <View style={styles.frameGroupFlexBox}>
              <View>
                <Text style={[styles.services, styles.vat15Clr]}>Services</Text>
                <Text style={[styles.workingHours, styles.vat15Clr]}>
                  Working Hours
                </Text>
                <Text style={[styles.workingHours, styles.vat15Clr]}>
                  Number of Workers
                </Text>
                <Text style={[styles.workingHours, styles.vat15Clr]}>
                  Length of service
                </Text>
                <Text style={[styles.workingHours, styles.vat15Clr]}>
                  Start date and time
                </Text>
              </View>
              <View style={styles.regularCleaningParent}>
                <Text style={styles.oneTimeServiceTypo}>Regular cleaning</Text>
                <Text
                  style={[styles.cleaningFor2, styles.textTypo1]}
                >{`Cleaning for 2 hours  `}</Text>
                <Text style={[styles.text, styles.textTypo]}>1</Text>
                <Text
                  style={[styles.oneTimeService, styles.oneTimeServiceTypo]}
                >
                  One-time service
                </Text>
                <Text style={[styles.jan282023, styles.textTypo1]}>
                  Jan 28, 2023 | 11:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.costParent}>
          <Text style={styles.bookingDetails}>Cost</Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.frameContainer, styles.framePosition]}>
              <View style={styles.frameView}>
                <View style={styles.regularCleaningCleaningFoParent}>
                  <Text
                    style={[
                      styles.regularCleaningContainer,
                      styles.groupChildPosition,
                    ]}
                  >
                    <Text style={styles.vat15Clr}>{`Regular cleaning `}</Text>
                    <Text
                      style={styles.cleaningFor21}
                    >{`( Cleaning for 2 hours )  `}</Text>
                  </Text>
                  <Text style={[styles.sar, styles.sarTypo]}>79 SAR</Text>
                </View>
                <View style={styles.vat15Parent}>
                  <Text style={[styles.vat15, styles.vat15Clr]}>
                    <Text style={styles.vatTypo}>VAT</Text>
                    <Text style={styles.text1}>{` (15%) `}</Text>
                  </Text>
                  <Text style={styles.sarTypo}>12 SAR</Text>
                </View>
              </View>
              <View style={[styles.totalParent, styles.frameGroupFlexBox]}>
                <Text style={[styles.total, styles.totalTypo]}>Total</Text>
                <Text style={[styles.sar2, styles.textTypo]}>91 SAR</Text>
              </View>
            </View>
            <View style={styles.groupItem} />
          </View>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group71.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  eReceipt1Typo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  framePosition: {
    left: 16,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
  },
  vat15Clr: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  textTypo1: {
    fontSize: FontSize.med_size,
    marginTop: 16,
    color: Color.colorBlack,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
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
  groupChildLayout: {
    height: 153,
    width: 343,
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  sarTypo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontWeight: "600",
  },
  frameGroupFlexBox: {
    width: 311,
    alignItems: "center",
    flexDirection: "row",
  },
  totalTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textAlign: "left",
  },
  eReceiptChild: {
    marginLeft: -187.5,
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
    backgroundColor: Color.whait,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
    top: 43,
    left: 16,
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
  eReceipt1: {
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    textTransform: "capitalize",
    display: "flex",
    fontSize: FontSize.size_base,
    height: 24,
  },
  frameChild: {
    width: 20,
    height: 20,
    marginLeft: 111,
  },
  eReceiptParent: {
    top: 102,
    left: 148,
    alignItems: "center",
    flexDirection: "row",
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
  services: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  workingHours: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 16,
    textAlign: "left",
  },
  cleaningFor2: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  text: {
    fontSize: FontSize.med_size,
    marginTop: 16,
    color: Color.colorBlack,
  },
  oneTimeService: {
    marginTop: 16,
  },
  jan282023: {
    width: 136,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  regularCleaningParent: {
    marginLeft: 79,
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xl,
    marginTop: 16,
    overflow: "hidden",
  },
  groupChild: {
    height: 153,
    width: 343,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  cleaningFor21: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary1,
  },
  regularCleaningContainer: {
    top: 2,
    zIndex: 0,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  sar: {
    left: 264,
    zIndex: 1,
    top: 0,
    position: "absolute",
  },
  regularCleaningCleaningFoParent: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  vatTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  vat15: {
    textAlign: "left",
  },
  vat15Parent: {
    width: 303,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameView: {
    height: 52,
    justifyContent: "space-between",
  },
  total: {
    color: Color.praimary1,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  sar2: {
    color: Color.red,
    fontSize: FontSize.size_base,
  },
  totalParent: {
    marginTop: 37,
    justifyContent: "space-between",
  },
  frameContainer: {
    top: 24,
  },
  groupItem: {
    marginLeft: -171.6,
    top: 100,
    borderTopWidth: 0.3,
    height: 0,
    width: 343,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 14,
  },
  costParent: {
    marginTop: 48,
  },
  frameParent: {
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
  eReceipt: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default EReceipt;
