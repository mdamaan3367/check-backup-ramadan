import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails46 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={styles.serviceDetailsChild} />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
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
          <Text style={[styles.theCompanyIs, styles.theLayout]}>
            The company is not responsible for any air conditioner spare parts
            lost from the home due to lack of security.
          </Text>
          <Text style={[styles.inTheEvent1, styles.theTypo1]}>
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
      <View style={[styles.serviceDetailsItem, styles.frameParentLayout]} />
      <Text
        style={[styles.airConditionerElectrical, styles.theBestSpecializedTypo]}
      >
        Air conditioner electrical check (voltage/amp)
      </Text>
      <Text style={[styles.theVoltageAnd, styles.theLayout]}>
        The voltage and frequency levels of the electrical current supplied to
        the air conditioner are checked.
      </Text>
      <View style={[styles.frameGroup, styles.frameParentLayout]}>
        <View
          style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
        >
          <Text style={styles.theTypo}>
            Measure the voltage and frequency of the electrical current supplied
            to the air conditioner.
          </Text>
          <Text style={[styles.compareTheReadings, styles.theTypo]}>
            Compare the readings of the electric meter with the values
            recommended by the manufacturer.
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services provided</Text>
      </View>
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
          source={require("../assets/rectangle-432775.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.thePosition]}
          onPress={() => navigation.goBack()}
        >
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
  frameParentLayout: {
    width: 375,
    position: "absolute",
  },
  thePosition: {
    left: 16,
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
  theLayout: {
    height: 40,
    textAlign: "left",
  },
  theTypo1: {
    width: 329,
    display: "flex",
    color: Color.gray,
    marginTop: 8,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  theBestSpecializedTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  theTypo: {
    height: 32,
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
  serviceDetailsChild: {
    marginLeft: -171.5,
    top: 909,
    height: 68,
    width: 343,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    height: 40,
  },
  inTheEvent1: {
    height: 72,
    marginTop: 8,
    textAlign: "left",
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
    top: 512,
    height: 372,
    backgroundColor: Color.whait,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  serviceDetailsItem: {
    top: 208,
    height: 136,
    backgroundColor: Color.whait,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  airConditionerElectrical: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    height: 40,
    textAlign: "left",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  theVoltageAnd: {
    top: 280,
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    height: 40,
    left: 16,
    width: 343,
    position: "absolute",
  },
  compareTheReadings: {
    marginTop: 8,
  },
  frameGroup: {
    top: 352,
    height: 152,
    backgroundColor: Color.whait,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
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
    lineHeight: 16,
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
    marginLeft: -187.5,
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
    marginLeft: -187.5,
    left: "50%",
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    marginLeft: -187.5,
    width: 375,
    left: "50%",
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
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 24,
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

export default ServiceDetails46;
