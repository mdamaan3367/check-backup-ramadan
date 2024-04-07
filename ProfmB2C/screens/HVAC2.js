import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const HVAC2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hvac}>
      <Text style={[styles.monthlyService, styles.monthlyServiceLayout]}>
        monthly service
      </Text>
      <View style={[styles.hvacChild, styles.searchLayout]} />
      <View style={[styles.search, styles.searchBorder]}>
        <View style={styles.fiRrZoomOutParent}>
          <Image
            style={[styles.fiRrZoomOutIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/firrzoomout3.png")}
          />
          <Text style={[styles.sea, styles.seaTypo]}>Sea</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.frameLayout]}>
        <LinearGradient
          style={[styles.frameChild, styles.hvacInnerPosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={styles.airConditionerMaintenancePrParent}>
          <Text
            style={[
              styles.airConditionerMaintenance,
              styles.contractRenewalClr,
            ]}
          >
            Air conditioner maintenance program
          </Text>
          <Text style={styles.aComprehensiveProgram}>
            A comprehensive program for maintaining and maintaining the air
            conditioner
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-436429.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.refresh2Parent}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/refresh2.png")}
            />
            <Text style={[styles.contractExpiresIn, styles.seaTypo]}>
              Contract expires in 15 days
            </Text>
          </View>
          <Pressable
            style={[styles.buttonSmall, styles.buttonSmallFlexBox]}
            onPress={() => navigation.navigate("YourAddressLocation")}
          >
            <Text style={[styles.contractRenewal, styles.hvac1Typo]}>
              contract renewal
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.navBarSignUpParent, styles.hvacInnerLayout]}>
        <View style={[styles.navBarSignUp, styles.navFlexBox]}>
          <Pressable
            style={[styles.navBarSignUpInner, styles.navFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/home221.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
            <View style={styles.buttonSmallFlexBox}>
              <Image
                style={styles.arrow21Layout}
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
                style={styles.arrow21Layout}
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
            <View style={styles.buttonSmallFlexBox}>
              <Image
                style={styles.arrow21Layout}
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
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.webViewbottom, styles.groupItemBg]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
        <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={styles.profmLogo1111}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-111.png")}
            />
          </View>
          <Pressable
            style={[styles.arrow21, styles.arrow21Layout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-11.png")}
            />
          </Pressable>
          <Text style={[styles.hvac1, styles.hvac1Typo]}>HVAC</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthlyServiceLayout: {
    height: 16,
    textTransform: "capitalize",
  },
  searchLayout: {
    width: 343,
    position: "absolute",
  },
  searchBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  iconLayout: {
    width: 16,
    height: 16,
  },
  seaTypo: {
    marginLeft: 8,
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameLayout: {
    height: 140,
    position: "absolute",
  },
  hvacInnerPosition: {
    left: 0,
    top: 0,
  },
  contractRenewalClr: {
    color: Color.whait,
    display: "flex",
  },
  groupPosition: {
    height: 60,
    left: "50%",
    marginLeft: -171.5,
    width: 343,
    position: "absolute",
  },
  buttonSmallFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  hvac1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  hvacInnerLayout: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    lineHeight: 16,
    color: Color.gray,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  framePressableLayout: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  groupItemBg: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  groupLayout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  monthlyService: {
    top: 292,
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 133,
    display: "flex",
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    left: 16,
    position: "absolute",
  },
  hvacChild: {
    top: 2123,
    height: 74,
    overflow: "hidden",
    left: 16,
  },
  fiRrZoomOutIcon: {
    overflow: "hidden",
  },
  sea: {
    width: 242,
    height: 24,
    color: Color.gray,
    marginLeft: 8,
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  search: {
    top: 148,
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    left: "50%",
    marginLeft: -171.5,
    overflow: "hidden",
    width: 343,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    position: "absolute",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  airConditionerMaintenance: {
    lineHeight: 22,
    width: 175,
    height: 40,
    alignItems: "center",
    color: Color.whait,
    textAlign: "left",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  aComprehensiveProgram: {
    lineHeight: 15,
    color: Color.colorGainsboro_400,
    width: 172,
    marginTop: 8,
    height: 48,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  airConditionerMaintenancePrParent: {
    top: 22,
    left: 16,
    position: "absolute",
  },
  frameItem: {
    marginTop: -70,
    top: "50%",
    right: 0,
    width: 139,
  },
  rectangleParent: {
    top: 324,
    backgroundColor: Color.colorSkyblue,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    height: 140,
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: Color.colorMintcream,
    borderColor: Color.praimary1,
    borderWidth: 0.3,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  contractExpiresIn: {
    width: 151,
    color: Color.praimary1,
    fontWeight: "300",
    height: 16,
    textTransform: "capitalize",
  },
  refresh2Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  contractRenewal: {
    width: 101,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "300",
    color: Color.whait,
    display: "flex",
    height: 24,
    fontSize: FontSize.med_size,
    textAlign: "center",
  },
  buttonSmall: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPeru,
    width: 113,
    height: 28,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_sm,
    marginLeft: 31,
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: -159.5,
    top: 16,
    width: 319,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 208,
  },
  home: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 4,
    lineHeight: 16,
  },
  navBarSignUpInner: {
    width: 93,
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
    marginTop: 4,
    lineHeight: 16,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    flexDirection: "row",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    marginLeft: -187.5,
    left: "50%",
  },
  navBarSignUpParent: {
    top: 722,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
  },
  groupItem: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  groupInner: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  groupView: {
    marginLeft: -79.5,
    top: 76,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    top: 43,
    left: 16,
    position: "absolute",
  },
  hvac1: {
    marginLeft: -22.5,
    top: 40,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.praimary1,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  hvacInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  hvac: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default HVAC2;
