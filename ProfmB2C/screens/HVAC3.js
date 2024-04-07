import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HVAC3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hvac}>
      <Text style={styles.oneTimeService}>One time service</Text>
      <View style={[styles.hvacChild, styles.searchLayout]} />
      <View style={[styles.search, styles.searchPosition]}>
        <View style={styles.fiRrZoomOutParent}>
          <Image
            style={styles.fiRrZoomOutIcon}
            resizeMode="cover"
            source={require("../assets/firrzoomout.png")}
          />
          <Text style={styles.sea}>Sea</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.searchPosition]}>
        <Pressable
          style={[styles.rectangleParent, styles.frameChildLayout]}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP9")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[
                styles.airConditionerMaintenance,
                styles.cleanAndReplaceTypo,
              ]}
            >
              Air conditioner maintenance
            </Text>
            <Text style={styles.maintainingTheAir}>
              Maintaining the air conditioner in good condition and preventing
              malfunctions
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436433.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP8")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.cleanAndReplace, styles.cleanAndReplaceTypo]}>
              Clean and replace the air filter
            </Text>
            <Text style={[styles.removeDirtDust, styles.theLayout]}>
              Remove dirt, dust and debris from the air filter,
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436434.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP7")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[
                styles.cleaningCondenserCoils,
                styles.cleanAndReplaceTypo,
              ]}
            >{`Cleaning condenser coils `}</Text>
            <Text style={[styles.toMaintainThe, styles.theLayout]}>
              To maintain the efficiency and longevity of the air conditioner
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436435.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP6")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[styles.changingDamagedBelts, styles.cleanAndReplaceTypo]}
            >
              Changing damaged belts
            </Text>
            <Text style={[styles.checkTheBelts, styles.theLayout]}>
              Check the belts in the air conditioner to ensure their safety.
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436436.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP5")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.cleanAndReplace, styles.cleanAndReplaceTypo]}>
              Checking the level of refrigerant gas (Freon)
            </Text>
            <Text style={[styles.removeDirtDust, styles.theLayout]}>
              Maintain air conditioner cooling efficiency.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436437.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP4")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.cleanAndReplace, styles.cleanAndReplaceTypo]}>
              Check the unit's electrical connections
            </Text>
            <Text style={[styles.removeDirtDust, styles.theLayout]}>
              Ensuring the safety and efficiency of the air conditioning unit.
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436438.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP3")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[styles.changingDamagedBelts, styles.cleanAndReplaceTypo]}
            >
              Air conditioner lubrication
            </Text>
            <Text style={[styles.addingOilTo, styles.theLayout]}>
              Adding oil to the friction parts of the air conditioner.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP2")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.checkTheFan, styles.checkTypo]}>
              Check the fan motors
            </Text>
            <Text style={[styles.checkTheFan1, styles.checkTypo]}>
              Check the fan motors in the air conditioning unit to make sure
              they are working properly.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436439.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP1")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[styles.checkingTheThermostat, styles.cleanAndReplaceTypo]}
            >
              Checking the thermostat
            </Text>
            <Text style={[styles.hvacVerificationVia, styles.theLayout]}>
              HVAC verification via thermostat for optimal comfort.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436440.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text
              style={[styles.cleaningAirDiffusers, styles.removeDirtAndTypo]}
            >
              Cleaning air diffusers
            </Text>
            <Text style={[styles.removeDirtAnd, styles.removeDirtAndTypo]}>
              Remove dirt and debris from air outlets.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436441.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP33")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.cleanAndReplace, styles.cleanAndReplaceTypo]}>
              General inspection of all air conditioning units
            </Text>
            <Text style={[styles.ensuringTheSafety1, styles.theTypo]}>
              Ensuring the safety and efficiency of all air conditioning units
              in the building.
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436442.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleParentShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP32")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View
            style={[
              styles.airConditionerMaintenanceParent,
              styles.arrow21Position,
            ]}
          >
            <Text style={[styles.cleanAndReplace, styles.cleanAndReplaceTypo]}>
              Air conditioner electrical check (voltage/amp)
            </Text>
            <Text style={[styles.checkTheAir, styles.theTypo]}>
              Check the air conditioner's electrical components to make sure
              they are working properly
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436443.png")}
          />
        </Pressable>
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
          <View style={[styles.navBarSignUpChild, styles.navLayout]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
          <Pressable
            style={styles.navLayout}
            onPress={() => navigation.navigate("Bookings")}
          >
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/calendartick.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navLayout}
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
        <View style={[styles.webViewbottom, styles.groupChildBg]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
        <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <View style={[styles.rectangleParent9, styles.groupItemLayout]}>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={[styles.profmLogo1111, styles.searchPosition]}
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
          <Text style={styles.hvac1}>HVAC</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    width: 343,
    overflow: "hidden",
  },
  searchPosition: {
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  cleanAndReplaceTypo: {
    height: 40,
    color: Color.whait,
    fontWeight: "700",
    lineHeight: 22,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  framePosition: {
    width: 139,
    top: "50%",
    marginTop: -70,
    height: 140,
    position: "absolute",
  },
  theLayout: {
    height: 32,
    lineHeight: 16,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  checkTypo: {
    width: 176,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  removeDirtAndTypo: {
    width: 186,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  theTypo: {
    height: 45,
    lineHeight: 16,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  hvacInnerLayout: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
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
  navLayout: {
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
  groupChildBg: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  groupItemLayout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  oneTimeService: {
    top: 208,
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 129,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  hvacChild: {
    top: 2123,
    height: 74,
    overflow: "hidden",
    left: 16,
    position: "absolute",
  },
  fiRrZoomOutIcon: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  sea: {
    width: 242,
    marginLeft: 8,
    height: 24,
    color: Color.gray,
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  search: {
    top: 148,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    marginLeft: -171.5,
    left: "50%",
    overflow: "hidden",
    width: 343,
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
    left: 0,
    position: "absolute",
  },
  airConditionerMaintenance: {
    width: 175,
  },
  maintainingTheAir: {
    lineHeight: 15,
    width: 172,
    marginTop: 8,
    height: 48,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  airConditionerMaintenanceParent: {
    top: 22,
  },
  frameItem: {
    right: 0,
  },
  rectangleParent: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    height: 140,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  cleanAndReplace: {
    width: 185,
  },
  removeDirtDust: {
    width: 185,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 32,
  },
  rectangleParentShadowBox: {
    marginTop: 16,
    height: 140,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    width: 343,
  },
  cleaningCondenserCoils: {
    width: 183,
  },
  toMaintainThe: {
    width: 191,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 32,
  },
  changingDamagedBelts: {
    width: 147,
  },
  checkTheBelts: {
    width: 180,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 32,
  },
  frameChild5: {
    right: -139,
  },
  addingOilTo: {
    width: 167,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 32,
  },
  checkTheFan: {
    color: Color.whait,
    lineHeight: 22,
    fontWeight: "700",
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  checkTheFan1: {
    lineHeight: 16,
    width: 176,
    marginTop: 8,
    height: 48,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  checkingTheThermostat: {
    width: 163,
  },
  hvacVerificationVia: {
    width: 182,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 32,
  },
  cleaningAirDiffusers: {
    color: Color.whait,
    lineHeight: 22,
    fontWeight: "700",
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  removeDirtAnd: {
    height: 32,
    lineHeight: 16,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  ensuringTheSafety1: {
    width: 185,
  },
  checkTheAir: {
    width: 183,
  },
  frameParent: {
    top: 240,
    height: 572,
    marginLeft: -171.5,
    left: "50%",
  },
  home: {
    fontWeight: "300",
    marginTop: 4,
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
    bottom: 34,
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
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
    bottom: 0,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
  },
  groupChild: {
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
    backgroundColor: Color.whait,
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    top: 0,
    width: 160,
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
  },
  rectangleParent9: {
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
    color: Color.praimary1,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
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

export default HVAC3;
