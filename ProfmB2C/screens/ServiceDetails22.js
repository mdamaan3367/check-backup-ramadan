import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails22 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.serviceDetailsChild, styles.framePosition]} />
      <Text style={[styles.otherLightCarpentry, styles.servicesProvidedTypo]}>
        Other light carpentry work
      </Text>
      <Text style={[styles.aServiceAimed, styles.aServiceAimedLayout]}>
        A service aimed at repairing and maintaining any wooden furniture or
        simple home furnishings.
      </Text>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View
          style={[
            styles.inspectTheFurnitureForAnyParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text style={[styles.inspectTheFurniture, styles.allTypesOfTypo]}>
            Inspect the furniture for any signs of damage or breakage.
          </Text>
          <Text style={[styles.repairAnyDefects, styles.allTypesOf1Typo]}>
            Repair any defects in wooden, metal or glass parts.
          </Text>
          <Text style={[styles.repairAnyDefects, styles.allTypesOf1Typo]}>
            Install any damaged or missing parts.
          </Text>
          <Text style={[styles.adjustThePosition, styles.allTypesOf1Typo]}>
            Adjust the position of furniture if it is hung or installed
            incorrectly.
          </Text>
          <Text style={[styles.adjustThePosition, styles.allTypesOf1Typo]}>
            Polishing wooden furniture to maintain its beautiful appearance.
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View
          style={[
            styles.inspectTheFurnitureForAnyParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text style={[styles.allTypesOf, styles.allTypesOfLayout]}>
            All types of Spare Parts
          </Text>
          <Text
            style={[styles.allTypesOf1, styles.allTypesOf1Typo]}
          >{`All types of utilities, such as electricity, water, gas, etc. `}</Text>
        </View>
        <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
          Services Exclude
        </Text>
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
        <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleParent}
          resizeMode="cover"
          source={require("../assets/rectangle-432743.png")}
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
          <Text style={styles.theBestSpecialized}>
            The best specialized technicians
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  servicesProvidedTypo: {
    display: "flex",
    textAlign: "left",
    height: 24,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  aServiceAimedLayout: {
    height: 32,
    width: 343,
  },
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  allTypesOfTypo: {
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  allTypesOf1Typo: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  allTypesOfLayout: {
    width: 329,
    height: 16,
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
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
    top: 208,
    height: 112,
  },
  otherLightCarpentry: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  aServiceAimed: {
    top: 264,
    lineHeight: 18,
    color: Color.grayBlack,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
    height: 32,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  inspectTheFurniture: {
    height: 16,
    width: 343,
    lineHeight: 16,
  },
  repairAnyDefects: {
    width: 329,
    height: 16,
  },
  adjustThePosition: {
    height: 32,
    width: 343,
  },
  inspectTheFurnitureForAnyParent: {
    left: 16,
  },
  servicesProvided: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    alignItems: "center",
  },
  frameParent: {
    top: 328,
    height: 224,
  },
  allTypesOf: {
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  allTypesOf1: {
    width: 326,
    height: 16,
  },
  frameGroup: {
    top: 560,
    height: 120,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
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
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    marginTop: 4,
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
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
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
    width: "100%",
  },
});

export default ServiceDetails22;
