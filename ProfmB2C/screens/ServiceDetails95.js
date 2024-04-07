import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails95 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={styles.frameParent}>
        <View>
          <View style={styles.poolLayout}>
            <View
              style={[styles.poolMaintenanceServiceChild, styles.iconLayout]}
            />
            <View style={styles.frameGroup}>
              <View>
                <Text
                  style={[styles.swimmingPoolSterilization, styles.poolTypo]}
                >
                  Swimming pool sterilization
                </Text>
                <Text style={styles.serviceDetails1}>Service details</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
          <View style={[styles.poolMaintenanceService1, styles.poolLayout]}>
            <View
              style={[styles.poolMaintenanceServiceChild, styles.iconLayout]}
            />
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.maintainingSalinityPh, styles.poolTypo]}>
                  Maintaining salinity (PH)
                </Text>
                <Text style={styles.serviceDetails1}>Service details</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
          <View style={[styles.poolMaintenanceService1, styles.poolLayout]}>
            <View
              style={[styles.poolMaintenanceServiceChild, styles.iconLayout]}
            />
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.vacuumingThePool, styles.poolTypo]}>
                  Vacuuming the pool
                </Text>
                <Text style={styles.serviceDetails1}>Service details</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
          <View style={[styles.poolMaintenanceService1, styles.poolLayout]}>
            <View
              style={[styles.poolMaintenanceServiceChild, styles.iconLayout]}
            />
            <View style={styles.frameGroup}>
              <View>
                <Text
                  style={[styles.filtrationSystemMaintenance, styles.poolTypo]}
                >
                  Filtration system maintenance
                </Text>
                <Text style={styles.serviceDetails1}>Service details</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
          <View style={[styles.poolMaintenanceService1, styles.poolLayout]}>
            <View
              style={[styles.poolMaintenanceServiceChild, styles.iconLayout]}
            />
            <View style={styles.frameGroup}>
              <View>
                <Text
                  style={[styles.filtrationSystemMaintenance, styles.poolTypo]}
                >
                  Equipment maintenance
                </Text>
                <Text style={styles.serviceDetails1}>Service details</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.serviceDetailsChild, styles.navPosition]} />
      <Text
        style={[styles.poolMaintenanceService5, styles.theBestSpecialistsTypo]}
      >
        pool Maintenance service
      </Text>
      <Text style={styles.poolMaintenanceService6}>
        Pool maintenance service is a set of services provided to maintain the
        cleanliness and condition of swimming pools.
      </Text>
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
      <View style={[styles.rectangleParent, styles.navBarSignUpPosition]}>
        <Image
          style={[styles.rectangleParent, styles.navBarSignUpPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-432784.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group-238737.png")}
          />
        </Pressable>
        <View style={styles.parent}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-14.png")}
          />
          <Text
            style={[styles.theBestSpecialists, styles.theBestSpecialistsTypo]}
          >
            The best specialists in hygiene and sterilization
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  poolTypo: {
    height: 16,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    alignItems: "center",
  },
  poolLayout: {
    height: 68,
    width: 375,
  },
  navPosition: {
    left: "50%",
    marginLeft: -187.5,
  },
  theBestSpecialistsTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    color: Color.gray,
    marginTop: 4,
    fontSize: FontSize.med_size,
    textAlign: "left",
    lineHeight: 16,
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
  navBarSignUpPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  poolMaintenanceServiceChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  swimmingPoolSterilization: {
    width: 211,
  },
  serviceDetails1: {
    width: 81,
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupIcon: {
    width: 12,
    height: 7,
  },
  frameGroup: {
    top: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 343,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  maintainingSalinityPh: {
    width: 191,
  },
  poolMaintenanceService1: {
    marginTop: 8,
  },
  vacuumingThePool: {
    width: 151,
  },
  filtrationSystemMaintenance: {
    width: 226,
  },
  frameChild: {
    width: 298,
    height: 59,
    marginTop: 40,
    overflow: "hidden",
  },
  frameParent: {
    top: 328,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 112,
    overflow: "hidden",
    backgroundColor: Color.lightBGPrimary,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  poolMaintenanceService5: {
    top: 232,
    color: Color.black,
    width: 251,
    height: 24,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  poolMaintenanceService6: {
    top: 264,
    height: 32,
    color: Color.grayBlack,
    lineHeight: 18,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    width: 343,
    left: 16,
    position: "absolute",
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "300",
    color: Color.gray,
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
    color: Color.gray,
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
    top: 0,
    width: 375,
    position: "absolute",
    left: "50%",
    marginLeft: -187.5,
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
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    backgroundColor: Color.lightBGPrimary,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  navBarSignUpParent: {
    top: 722,
    height: 90,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  rectangleParent: {
    height: 208,
    left: 0,
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: 16,
    position: "absolute",
  },
  icon1: {
    width: 200,
    height: 76,
  },
  theBestSpecialists: {
    color: Color.lightBGPrimary,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    height: 24,
  },
  parent: {
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

export default ServiceDetails95;
