import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View
          style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
        >
          <Text style={styles.inTheEventTypo}>
            In the event of replacing the compressor, dismantling the air
            conditioning unit, or any non-routine maintenance work, adding Freon
            gas will be at the customer's expense.
          </Text>
          <Text style={[styles.airDuctCleaning, styles.inTheEventTypo]}>
            Air duct cleaning is not included in the offer. A separate offer
            will be provided for this service at the customer's expense.
          </Text>
          <Text style={[styles.theCompanyIs, styles.theCompanyIsTypo]}>
            The company is not responsible for any air conditioner spare parts
            lost from the home due to lack of security.
          </Text>
          <Text style={[styles.inTheEvent1, styles.theLayout]}>
            In the event of replacing a compressor or condenser, replacing an
            outdoor or indoor unit, or replacing the entire unit, the cost of
            the installation fee will be calculated in a separate quote.
          </Text>
          <Text style={[styles.theCompanyIs, styles.theCompanyIsTypo]}>
            The service does not include the provision or maintenance of basic
            utilities such as electricity, water and gas.
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services Exclude</Text>
      </View>
      <View style={[styles.serviceDetailsChild, styles.framePosition]} />
      <Text
        style={[styles.cleaningCondenserCoils, styles.theBestSpecializedTypo]}
      >{`Cleaning condenser coils `}</Text>
      <Text style={[styles.aMaintenanceService, styles.serviceLayout]}>
        A maintenance service in which the condenser coils are removed from the
        air conditioning unit and cleaned.
      </Text>
      <View style={[styles.serviceDetailsItem, styles.serviceLayout]} />
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View
          style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
        >
          <Text style={styles.condenserTypo}>Check condenser coils</Text>
          <Text style={[styles.cleaningCondenserCoils1, styles.condenserTypo]}>
            Cleaning condenser coils
          </Text>
          <Text style={[styles.cleaningCondenserCoils1, styles.condenserTypo]}>
            Reinstall the condenser coils
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services provided</Text>
      </View>
      <View style={styles.navBarSignUpParent}>
        <View style={[styles.navBarSignUp, styles.navFlexBox]}>
          <Pressable
            style={[styles.navBarSignUpInner, styles.navFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/home221.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Bookings")}
          >
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/calendartick1.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.navFlexBox}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearuser.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Menu")}
          >
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.webViewbottom, styles.thePosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleParent}
          resizeMode="cover"
          source={require("../assets/rectangle-432716.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-2387371.png")}
          />
        </Pressable>
        <View style={styles.profmLogo1111Parent}>
          <Image
            style={styles.profmLogo1111}
            resizeMode="cover"
            source={require("../assets/profm-logo1-1-1-11.png")}
          />
          <Text style={[styles.theBestSpecialized, styles.navFlexBox]}>
            The best specialized technicians
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  thePosition: {
    top: 56,
    position: "absolute",
  },
  inTheEventTypo: {
    height: 54,
    width: 329,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  theCompanyIsTypo: {
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  theLayout: {
    width: 329,
    display: "flex",
    color: Color.gray,
    marginTop: 8,
    alignItems: "center",
  },
  theBestSpecializedTypo: {
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  serviceLayout: {
    width: 343,
    position: "absolute",
  },
  condenserTypo: {
    height: 16,
    lineHeight: 16,
    width: 329,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    lineHeight: 16,
    textAlign: "left",
    color: Color.gray,
    fontSize: FontSize.med_size,
  },
  framePressableLayout: {
    width: 94,
    justifyContent: "center",
    height: 56,
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  airDuctCleaning: {
    marginTop: 8,
  },
  theCompanyIs: {
    marginTop: 8,
    width: 329,
    display: "flex",
    color: Color.gray,
    alignItems: "center",
  },
  inTheEvent1: {
    height: 72,
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    display: "flex",
    color: Color.gray,
  },
  inTheEventOfReplacingTheParent: {
    left: 16,
  },
  servicesExclude: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 488,
    height: 372,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  serviceDetailsChild: {
    top: 208,
    height: 120,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  cleaningCondenserCoils: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    alignItems: "center",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  aMaintenanceService: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    left: 16,
  },
  serviceDetailsItem: {
    marginLeft: -171.5,
    top: 887,
    height: 68,
    left: "50%",
    overflow: "hidden",
  },
  cleaningCondenserCoils1: {
    marginTop: 8,
  },
  frameGroup: {
    top: 336,
    height: 144,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  navBarSignUpInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    textTransform: "capitalize",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    bottom: 34,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
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
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    height: 208,
    width: 375,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: 16,
    position: "absolute",
  },
  profmLogo1111: {
    width: 200,
    height: 73,
  },
  theBestSpecialized: {
    color: Color.whait,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  profmLogo1111Parent: {
    top: 65,
    left: 48,
    alignItems: "center",
    position: "absolute",
  },
  serviceDetails: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ServiceDetails8;
