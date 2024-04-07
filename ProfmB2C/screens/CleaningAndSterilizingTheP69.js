import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const CleaningAndSterilizingTheP69 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cleaningAndSterilizingTheP}>
      <View style={styles.frameParent}>
        <View>
          <View style={styles.maintainingSalinityPhLayout}>
            <View
              style={[
                styles.swimmingPoolSterilizationChild,
                styles.swimmingPosition,
              ]}
            />
            <Text
              style={[
                styles.swimmingPoolSterilization1,
                styles.serviceTransform,
              ]}
            >
              Swimming pool sterilization
            </Text>
            <Image
              style={[
                styles.swimmingPoolSterilizationItem,
                styles.vectorIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-43816.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
          </View>
          <View
            style={[
              styles.maintainingSalinityPh,
              styles.maintainingSalinityPhLayout,
            ]}
          >
            <View
              style={[
                styles.swimmingPoolSterilizationChild,
                styles.swimmingPosition,
              ]}
            />
            <Text
              style={[
                styles.swimmingPoolSterilization1,
                styles.serviceTransform,
              ]}
            >{`Maintaining salinity (PH) `}</Text>
            <Image
              style={[
                styles.swimmingPoolSterilizationItem,
                styles.vectorIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-43817.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
          </View>
          <View
            style={[
              styles.maintainingSalinityPh,
              styles.maintainingSalinityPhLayout,
            ]}
          >
            <View
              style={[
                styles.swimmingPoolSterilizationChild,
                styles.swimmingPosition,
              ]}
            />
            <Image
              style={[
                styles.swimmingPoolSterilizationItem,
                styles.vectorIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-43818.png")}
            />
            <Text
              style={[
                styles.filtrationSystemMaintenance1,
                styles.serviceTransform,
              ]}
            >
              Filtration system maintenance
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
          </View>
          <View
            style={[
              styles.maintainingSalinityPh,
              styles.maintainingSalinityPhLayout,
            ]}
          >
            <View
              style={[
                styles.swimmingPoolSterilizationChild,
                styles.swimmingPosition,
              ]}
            />
            <Text
              style={[
                styles.swimmingPoolSterilization1,
                styles.serviceTransform,
              ]}
            >
              Vacuuming the pool
            </Text>
            <Image
              style={[
                styles.swimmingPoolSterilizationItem,
                styles.vectorIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-43819.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
          </View>
          <View
            style={[
              styles.maintainingSalinityPh,
              styles.maintainingSalinityPhLayout,
            ]}
          >
            <View
              style={[
                styles.swimmingPoolSterilizationChild,
                styles.swimmingPosition,
              ]}
            />
            <Text
              style={[
                styles.swimmingPoolSterilization1,
                styles.serviceTransform,
              ]}
            >
              Equipment maintenance
            </Text>
            <Image
              style={[
                styles.swimmingPoolSterilizationItem,
                styles.vectorIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-438110.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/group1.png")}
            />
          </View>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View
        style={[
          styles.poolMaintenanceServiceIsAParent,
          styles.poolMaintenanceServiceIsAParentPosition,
        ]}
      >
        <Text
          style={[styles.poolMaintenanceService, styles.serviceTypo]}
        >{`Pool maintenance service is a set of services provided to maintain the cleanliness and condition of swimming pools.
`}</Text>
        <Text style={[styles.poolMaintenanceService1, styles.poolPosition]}>
          pool Maintenance service
        </Text>
        <Pressable
          style={styles.frameGroup}
          onPress={() => navigation.navigate("ServiceDetails95")}
        >
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame18.png")}
            />
            <Text style={[styles.serviceDetails, styles.serviceTypo]}>
              Service details
            </Text>
          </View>
          <Image
            style={styles.vectorIcon5}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[
          styles.cleaningAndSterilizingThePChild,
          styles.poolMaintenanceServiceIsAParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/group-239109.png")}
      />
      <View style={[styles.navBarSignUpParent, styles.navPosition]}>
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
                source={require("../assets/calendartick2.png")}
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
                source={require("../assets/user.png")}
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
        <View style={[styles.webViewbottom, styles.navPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swimmingPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  serviceTransform: {
    display: "flex",
    textTransform: "capitalize",
    alignItems: "center",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  maintainingSalinityPhLayout: {
    height: 72,
    width: 375,
  },
  poolMaintenanceServiceIsAParentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  serviceTypo: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  poolPosition: {
    left: 16,
    position: "absolute",
  },
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
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
  swimmingPoolSterilizationChild: {
    left: "0%",
    backgroundColor: Color.colorAliceblue_200,
    position: "absolute",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  swimmingPoolSterilization1: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.praimary1,
    fontSize: FontSize.size_sm,
    left: "4.27%",
    top: "19.44%",
    width: "46.93%",
    height: "61.11%",
    position: "absolute",
  },
  swimmingPoolSterilizationItem: {
    width: "49.87%",
    left: "50.13%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  vectorIcon: {
    height: "9.72%",
    width: "3.2%",
    top: "79.17%",
    right: "48.27%",
    bottom: "11.11%",
    left: "48.53%",
  },
  maintainingSalinityPh: {
    marginTop: 16,
  },
  filtrationSystemMaintenance1: {
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.praimary1,
    fontSize: FontSize.size_sm,
    left: "4.27%",
    top: "19.44%",
    width: "46.93%",
    height: "61.11%",
    position: "absolute",
  },
  frameChild: {
    width: 343,
    height: 38,
    marginTop: 73,
    overflow: "hidden",
  },
  frameParent: {
    top: 396,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  poolMaintenanceService: {
    lineHeight: 18,
    width: 344,
    height: 36,
    left: 16,
    position: "absolute",
    top: 56,
  },
  poolMaintenanceService1: {
    top: 24,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontWeight: "600",
    color: Color.black,
    width: 248,
    height: 24,
    display: "flex",
    textTransform: "capitalize",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: 16,
  },
  frameIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  serviceDetails: {
    width: 120,
    height: 16,
    marginLeft: 8,
    display: "flex",
    textTransform: "capitalize",
    alignItems: "center",
  },
  frameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon5: {
    width: 7,
    height: 12,
    marginLeft: 170,
  },
  frameGroup: {
    marginLeft: -171.5,
    top: 116,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkgray_400,
    padding: Padding.p_xs,
    flexDirection: "row",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  poolMaintenanceServiceIsAParent: {
    top: 208,
    height: 180,
    backgroundColor: Color.lightBGPrimary,
    overflow: "hidden",
  },
  cleaningAndSterilizingThePChild: {
    height: 208,
    top: 0,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "300",
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
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
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    height: 56,
    justifyContent: "center",
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    backgroundColor: Color.lightBGPrimary,
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
    height: 34,
    top: 56,
    backgroundColor: Color.lightBGPrimary,
  },
  navBarSignUpParent: {
    top: 722,
    height: 90,
  },
  cleaningAndSterilizingTheP: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default CleaningAndSterilizingTheP69;
