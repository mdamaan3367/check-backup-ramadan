import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ServiceDetails10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View
          style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
        >
          <Text style={[styles.inTheEvent, styles.airTypo]}>
            In the event of replacing the compressor, dismantling the air
            conditioning unit, or any non-routine maintenance work, adding Freon
            gas will be at the customer's expense.
          </Text>
          <Text style={[styles.airDuctCleaning, styles.airTypo]}>
            Air duct cleaning is not included in the offer. A separate offer
            will be provided for this service at the customer's expense.
          </Text>
          <Text style={[styles.theCompanyIs, styles.theLayout]}>
            The company is not responsible for any air conditioner spare parts
            lost from the home due to lack of security.
          </Text>
          <Text style={[styles.inTheEvent1, styles.theLayout]}>
            In the event of replacing a compressor or condenser, replacing an
            outdoor or indoor unit, or replacing the entire unit, the cost of
            the installation fee will be calculated in a separate quote.
          </Text>
          <Text style={[styles.theCompanyIs, styles.theLayout]}>
            The service does not include the provision or maintenance of basic
            utilities such as electricity, water and gas.
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services Exclude</Text>
      </View>
      <View style={[styles.serviceDetailsChild, styles.frameParentLayout]} />
      <Text
        style={[
          styles.airConditionerMaintenance,
          styles.theBestSpecializedTypo,
        ]}
      >
        Air conditioner maintenance
      </Text>
      <Text style={[styles.profmProvidesAir, styles.profmProvidesAirPosition]}>
        PROFM provides air conditioner maintenance service and has extensive
        experience in the field, ensuring you receive high-quality maintenance
        service.
      </Text>
      <View style={[styles.frameGroup, styles.frameParentLayout]}>
        <View
          style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
        >
          <Text style={styles.cleanAirFiltersTypo}>
            Clean air filters and replace them when needed.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Cleaning condenser coils.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Replace damaged belts.
          </Text>
          <Text style={styles.checkTheLevel}>
            Check the level of refrigerant gas (Freon) and add it when needed.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Check electrical connections.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Lubrication
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Check fan motors.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Check the thermostat.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Cleaning the air outlets.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            General inspection of all air conditioning units.
          </Text>
          <Text
            style={[styles.cleaningCondenserCoils, styles.cleanAirFiltersTypo]}
          >
            Electrical inspection of the air conditioner (loudness/amp).
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services provided</Text>
      </View>
      <View
        style={[styles.serviceDetailsItem, styles.profmProvidesAirPosition]}
      />
      <View style={[styles.navBarSignUpParent, styles.frameParentLayout]}>
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
                source={require("../assets/calendartick.png")}
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
        <View style={[styles.webViewbottom, styles.frameParentLayout]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.frameParentLayout]}>
        <Image
          style={[styles.rectangleParent, styles.frameParentLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-432720.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.thePosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-238737.png")}
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
  frameParentLayout: {
    width: 375,
    position: "absolute",
  },
  thePosition: {
    left: 16,
    position: "absolute",
  },
  airTypo: {
    height: 54,
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
  profmProvidesAirPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  cleanAirFiltersTypo: {
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
  inTheEvent: {
    width: 329,
    display: "flex",
    color: Color.gray,
    alignItems: "center",
  },
  airDuctCleaning: {
    marginTop: 8,
    width: 329,
    display: "flex",
    color: Color.gray,
    alignItems: "center",
  },
  theCompanyIs: {
    height: 40,
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    display: "flex",
    color: Color.gray,
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
    top: 56,
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
    top: 710,
    height: 372,
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    overflow: "hidden",
  },
  serviceDetailsChild: {
    top: 208,
    height: 134,
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    overflow: "hidden",
  },
  airConditionerMaintenance: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    alignItems: "center",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  profmProvidesAir: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    height: 54,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  cleaningCondenserCoils: {
    marginTop: 8,
  },
  checkTheLevel: {
    height: 32,
    lineHeight: 16,
    width: 343,
    marginTop: 8,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  frameGroup: {
    top: 350,
    height: 352,
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    overflow: "hidden",
  },
  serviceDetailsItem: {
    top: 1101,
    height: 68,
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
    position: "absolute",
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
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
    top: 56,
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
  },
  rectangleParent: {
    top: 0,
    left: 0,
    height: 208,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
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

export default ServiceDetails10;
