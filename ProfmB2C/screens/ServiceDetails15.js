import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ServiceDetails15 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={styles.serviceDetailsChild} />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View
          style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
        >
          <Text style={[styles.allTypeOf, styles.allTypeOfTypo]}>
            All type of Spare Parts
          </Text>
          <Text
            style={[styles.replacingDamagedPlants, styles.replacingSpaceBlock]}
          >
            Replacing damaged plants and planning annuals
          </Text>
          <Text
            style={[styles.replacingDamagedTrees, styles.aServiceProvidedTypo]}
          >
            Replacing damaged trees and crops of all kinds if the causes of the
            damage are extreme high temperatures
          </Text>
          <Text
            style={[styles.replacingDamagedPlants, styles.replacingSpaceBlock]}
          >
            High ground water levels in the soil
          </Text>
          <Text
            style={[styles.replacingDamagedPlants, styles.replacingSpaceBlock]}
          >
            The old age of the trees and rotting of their roots
          </Text>
          <Text style={[styles.anyOtherNatural, styles.anyOtherNaturalTypo]}>
            Any other natural conditions that lead to damage to the trees
          </Text>
          <Text
            style={[styles.theIrrigationProcess, styles.anyOtherNaturalTypo]}
          >
            The irrigation process and damage to crops due to a lack of
            irrigation water, and the customer must provide a sufficient
            quantity and source of water
          </Text>
          <Text style={[styles.anyOtherNatural, styles.anyOtherNaturalTypo]}>
            All type of utilities such as electricity, water, gas etc.
          </Text>
        </View>
        <Text style={styles.servicesExclude}>Services Exclude</Text>
      </View>
      <View style={[styles.serviceDetailsItem, styles.frameParentLayout]} />
      <Text
        style={[
          styles.controllingAgriculturalPests,
          styles.theBestSpecializedTypo,
        ]}
      >
        Controlling agricultural pests when infested
      </Text>
      <Text style={[styles.aServiceProvided, styles.aServiceProvidedTypo]}>
        A service provided by PROFM to customers who suffer from the problem of
        agricultural pests.
      </Text>
      <View style={[styles.frameGroup, styles.frameParentLayout]}>
        <View
          style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
        >
          <Text style={[styles.allTypeOf, styles.allTypeOfTypo]}>
            Examination
          </Text>
          <Text style={[styles.selection, styles.replacingSpaceBlock]}>
            Selection
          </Text>
          <Text style={[styles.selection, styles.replacingSpaceBlock]}>
            Processing
          </Text>
          <Text style={[styles.selection, styles.replacingSpaceBlock]}>
            Follow-up
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
          source={require("../assets/rectangle-432730.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
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
          <Text
            style={[styles.theBestSpecialized, styles.theBestSpecializedTypo]}
          >
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
  wrapperPosition: {
    left: 16,
    position: "absolute",
  },
  allTypeOfTypo: {
    width: 329,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  replacingSpaceBlock: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
  },
  aServiceProvidedTypo: {
    height: 32,
    width: 343,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  anyOtherNaturalTypo: {
    width: 343,
    marginTop: 8,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  theBestSpecializedTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "left",
    color: Color.gray,
    lineHeight: 16,
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
    marginLeft: -160.5,
    top: 849,
    width: 321,
    height: 53,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  allTypeOf: {
    height: 16,
    color: Color.gray,
    lineHeight: 16,
    width: 329,
  },
  replacingDamagedPlants: {
    width: 326,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    marginTop: 8,
  },
  replacingDamagedTrees: {
    alignItems: "center",
    display: "flex",
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
  },
  anyOtherNatural: {
    height: 16,
  },
  theIrrigationProcess: {
    height: 48,
    alignItems: "center",
    display: "flex",
  },
  allTypeOfSparePartsParent: {
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
    top: 504,
    height: 312,
    backgroundColor: Color.whait,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  serviceDetailsItem: {
    top: 208,
    height: 128,
    backgroundColor: Color.whait,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  controllingAgriculturalPests: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    height: 40,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  aServiceProvided: {
    top: 280,
    lineHeight: 18,
    color: Color.grayBlack,
    left: 16,
    position: "absolute",
  },
  selection: {
    height: 16,
    width: 329,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  frameGroup: {
    top: 328,
    height: 168,
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

export default ServiceDetails15;
