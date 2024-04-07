import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const YourAddressLocation14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourAddressLocation}>
      <View style={styles.webViewbottom}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.yourAddressLocationChild} />
      <View style={styles.eReceiptParent}>
        <Text style={[styles.eReceipt, styles.logInTypo]}>E-Receipt</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-238769.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group16.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.bookingDetailsParent}>
            <Text style={styles.bookingDetails}>Booking Details</Text>
            <Image
              style={styles.svgexport1822}
              resizeMode="cover"
              source={require("../assets/svgexport18-2-2.png")}
            />
          </View>
          <View style={[styles.frameWrapper, styles.groupChildBorder]}>
            <View style={styles.totalParentFlexBox}>
              <View>
                <Text style={[styles.services, styles.poolClr]}>Services</Text>
                <Text style={[styles.serviceType, styles.poolClr]}>
                  Service type
                </Text>
                <Text style={[styles.swimmingPoolSize, styles.poolClr]}>
                  Swimming pool size
                </Text>
                <Text style={[styles.serviceType, styles.poolClr]}>
                  Length of service
                </Text>
                <Text style={[styles.serviceType, styles.poolClr]}>
                  Start date and time
                </Text>
              </View>
              <View style={styles.poolMaintenanceParent}>
                <Text style={styles.poolMaintenanceTypo}>pool Maintenance</Text>
                <Text
                  style={[
                    styles.sterilizationService,
                    styles.poolMaintenanceTypo,
                  ]}
                >
                  Sterilization service
                </Text>
                <Text style={styles.oneTimeService}>One-time service</Text>
                <Text style={styles.oneTimeService}>One-time service</Text>
                <Text
                  style={[
                    styles.sterilizationService,
                    styles.poolMaintenanceTypo,
                  ]}
                >
                  Jan 28, 2023 | 11:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <View>
            <Text style={styles.bookingDetails}>Cost</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.frameParent1, styles.parentPosition]}>
                <View style={styles.frameParent2}>
                  <View style={styles.poolMaintenanceSterilizatiParent}>
                    <Text
                      style={[
                        styles.poolMaintenanceContainer,
                        styles.groupChildPosition,
                      ]}
                    >
                      <Text style={styles.poolClr}>{`pool Maintenance `}</Text>
                      <Text
                        style={styles.sterilizationService1}
                      >{`( Sterilization service )  `}</Text>
                    </Text>
                    <Text style={[styles.sar, styles.sarTypo]}>79 SAR</Text>
                  </View>
                  <View style={styles.vat15Parent}>
                    <Text style={[styles.vat15, styles.poolClr]}>
                      <Text style={styles.poolTypo}>VAT</Text>
                      <Text style={styles.text}>{` (15%) `}</Text>
                    </Text>
                    <Text style={styles.sarTypo}>12 SAR</Text>
                  </View>
                </View>
                <View style={[styles.totalParent, styles.totalParentFlexBox]}>
                  <Text style={styles.total}>Total</Text>
                  <Text style={styles.sar2}>91 SAR</Text>
                </View>
              </View>
              <View style={[styles.groupItem, styles.groupItemPosition]} />
            </View>
          </View>
        </View>
      </View>
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
      <Pressable
        style={[styles.buttonBig, styles.groupItemPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.buttonBigChild, styles.iconLayout]} />
        <Text style={[styles.logIn, styles.logInTypo]}>Back to home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderRadius: Border.br_5xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.lightBGPrimary,
  },
  poolClr: {
    color: Color.color,
    fontSize: FontSize.med_size,
  },
  poolMaintenanceTypo: {
    width: 136,
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
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  sarTypo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontWeight: "600",
  },
  totalParentFlexBox: {
    width: 311,
    flexDirection: "row",
    alignItems: "center",
  },
  groupItemPosition: {
    width: 343,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  yourAddressLocationChild: {
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
    height: 86,
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  eReceipt: {
    lineHeight: 30,
    color: Color.black,
    width: 80,
    height: 24,
    textTransform: "capitalize",
    textAlign: "center",
  },
  frameChild: {
    width: 20,
    height: 20,
    marginLeft: 111,
  },
  eReceiptParent: {
    top: 102,
    left: 148,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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
  svgexport1822: {
    width: 18,
    marginLeft: 200,
    height: 18,
    overflow: "hidden",
  },
  bookingDetailsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  services: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  serviceType: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 16,
    textAlign: "left",
  },
  swimmingPoolSize: {
    width: 104,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 16,
    textAlign: "left",
    display: "flex",
    color: Color.color,
    alignItems: "center",
  },
  sterilizationService: {
    marginTop: 16,
  },
  oneTimeService: {
    width: 126,
    fontSize: FontSize.med_size,
    marginTop: 16,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  poolMaintenanceParent: {
    marginLeft: 79,
  },
  frameWrapper: {
    padding: Padding.p_base,
    marginTop: 16,
    overflow: "hidden",
  },
  groupChild: {
    height: 153,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_5xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
  },
  sterilizationService1: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary1,
  },
  poolMaintenanceContainer: {
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
  poolMaintenanceSterilizatiParent: {
    width: 310,
    padding: Padding.p_3xs,
    height: 18,
    flexDirection: "row",
  },
  poolTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text: {
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
  frameParent2: {
    height: 52,
    justifyContent: "space-between",
  },
  total: {
    color: Color.praimary1,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  sar2: {
    color: Color.red,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  totalParent: {
    marginTop: 37,
    justifyContent: "space-between",
  },
  frameParent1: {
    top: 24,
  },
  groupItem: {
    marginLeft: -171.6,
    top: 100,
    borderTopWidth: 0.3,
    height: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    width: 343,
  },
  rectangleParent: {
    marginTop: 16,
  },
  frameView: {
    marginTop: 16,
  },
  frameParent: {
    top: 256,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  icon: {
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
    flexDirection: "row",
    alignItems: "center",
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
    letterSpacing: 0.6,
    lineHeight: 44,
    color: Color.lightBGPrimary,
    position: "absolute",
  },
  buttonBig: {
    top: 729,
    height: 48,
    marginLeft: -171.5,
  },
  yourAddressLocation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default YourAddressLocation14;
