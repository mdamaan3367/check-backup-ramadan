import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails31 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.serviceDetailsChild, styles.framePosition]} />
      <Text
        style={[
          styles.filtrationSystemMaintenance,
          styles.servicesProvidedTypo,
        ]}
      >
        Filtration system maintenance
      </Text>
      <Text style={[styles.profmOffersFiltrationContainer, styles.homeTypo1]}>
        <Text style={styles.profm}>Profm</Text>
        {` offers filtration system maintenance service, which is a comprehensive service for maintaining all components of the filtration system in your swimming pool
`}
      </Text>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View
          style={[
            styles.periodicInspectionParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text style={styles.periodicInspection}>Periodic inspection</Text>
          <Text style={[styles.anyDamageOr, styles.anyDamageOrTypo]}>
            Any damage or defect detected is repaired
          </Text>
          <Text
            style={[styles.preventiveMaintenanceWork, styles.anyDamageOrTypo]}
          >
            Preventive maintenance work is carried out to prevent malfunctions
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View
          style={[
            styles.periodicInspectionParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text style={styles.periodicInspection}>
            Inspection or repair of leaks in the swimming pool.
          </Text>
          <Text
            style={[styles.removingLimescaleDimming, styles.anyDamageOrTypo]}
          >
            Removing limescale (dimming) works
          </Text>
          <Text
            style={[styles.removingLimescaleDimming, styles.anyDamageOrTypo]}
          >
            Changing the filter or sand in the filter
          </Text>
          <Text
            style={[styles.removingLimescaleDimming, styles.anyDamageOrTypo]}
          >
            Emptying or supplying the pool with water
          </Text>
          <Text
            style={[styles.removingLimescaleDimming, styles.anyDamageOrTypo]}
          >
            Process of winding the motor
          </Text>
          <Text
            style={[styles.removingLimescaleDimming, styles.anyDamageOrTypo]}
          >
            All types of utilities, such as electricity, water, gas, etc.
          </Text>
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
                source={require("../assets/calendartick21.png")}
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
          source={require("../assets/rectangle-432761.png")}
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
            source={require("../assets/profm-logo1-1-1-14.png")}
          />
          <Text style={[styles.theBestSpecialists, styles.navFlexBox]}>
            The best specialists in maintenance
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
  servicesProvidedTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    height: 24,
    textTransform: "capitalize",
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  anyDamageOrTypo: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
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
    height: 134,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  filtrationSystemMaintenance: {
    top: 232,
    color: Color.black,
    width: 251,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  profm: {
    textTransform: "uppercase",
  },
  profmOffersFiltrationContainer: {
    top: 264,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: Color.grayBlack,
    width: 343,
    height: 54,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  periodicInspection: {
    width: 329,
    height: 16,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  anyDamageOr: {
    width: 330,
    marginTop: 8,
    height: 16,
  },
  preventiveMaintenanceWork: {
    height: 32,
    width: 330,
    marginTop: 8,
  },
  periodicInspectionParent: {
    left: 16,
  },
  servicesProvided: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 350,
    height: 160,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  removingLimescaleDimming: {
    width: 326,
    height: 16,
  },
  frameGroup: {
    top: 518,
    height: 216,
    width: 375,
    position: "absolute",
    overflow: "hidden",
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
  theBestSpecialists: {
    color: Color.whait,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    justifyContent: "center",
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
    overflow: "hidden",
    width: "100%",
  },
});

export default ServiceDetails31;
