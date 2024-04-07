import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PoolMaintenance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.poolMaintenance}>
      <Text style={styles.oneTimeService}>One time service</Text>
      <View style={[styles.poolMaintenanceChild, styles.searchLayout]} />
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
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP28")}
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
              styles.swimmingPoolSterilizationParent,
              styles.poolParentPosition,
            ]}
          >
            <Text
              style={[
                styles.swimmingPoolSterilization,
                styles.swimmingPoolSterilizationTypo,
              ]}
            >
              Swimming pool sterilization
            </Text>
            <Text
              style={[styles.sterilizationAlgae, styles.homeSpaceBlock]}
            >{`Sterilization & algae control for swimming pool (chlorine & algaecide)
`}</Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436419.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleShadowBox}
          onPress={() => navigation.navigate("EquipmentMaintenance")}
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
              styles.equipmentMaintenanceParent,
              styles.poolParentPosition,
            ]}
          >
            <Text style={[styles.equipmentMaintenance, styles.maintenanceTypo]}>
              Equipment maintenance
            </Text>
            <Text
              style={[styles.maintenanceOfSwimming, styles.maintenanceTypo]}
            >{`Maintenance of swimming pool electrical and mechanical equipment
`}</Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436420.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleShadowBox}
          onPress={() => navigation.navigate("FiltrationSystemMaintenance")}
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
              styles.equipmentMaintenanceParent,
              styles.poolParentPosition,
            ]}
          >
            <Text
              style={[
                styles.filtrationSystemMaintenance,
                styles.swimmingPoolSterilizationTypo,
              ]}
            >
              Filtration system maintenance
            </Text>
            <Text style={[styles.weHelpYou, styles.maintenanceTypo]}>
              We help you keep your filtration system in good condition and
              running properly
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436421.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP27")}
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
              styles.equipmentMaintenanceParent,
              styles.poolParentPosition,
            ]}
          >
            <Text
              style={[styles.vacuumingThePool, styles.vacuumingThePoolTypo]}
            >
              Vacuuming the pool
            </Text>
            <Text style={[styles.cleaningThePool, styles.theLayout]}>
              Cleaning the pool with vacuum cleaners from plankton and dust
            </Text>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436422.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleShadowBox}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP26")}
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
              styles.swimmingPoolSterilizationParent,
              styles.poolParentPosition,
            ]}
          >
            <Text
              style={[styles.maintainingSalinityph, styles.maintainingTypo]}
            >{`Maintaining salinity(PH) `}</Text>
            <Text style={[styles.maintainingTheDegree, styles.maintainingTypo]}>
              Maintaining the degree of salinity (PH) within permissible limits
            </Text>
          </View>
          <Image
            style={[styles.frameChild5, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-436423.png")}
          />
        </Pressable>
      </View>
      <View
        style={[styles.navBarSignUpParent, styles.navBarSignUpParentLayout]}
      >
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
              <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarSignUpChild, styles.navLayout]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.homeSpaceBlock]}>
                History
              </Text>
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
                source={require("../assets/calendartick2.png")}
              />
              <Text style={[styles.bookings, styles.homeSpaceBlock]}>
                bookings
              </Text>
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
              <Text style={[styles.bookings, styles.homeSpaceBlock]}>
                account
              </Text>
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
              <Text style={[styles.home, styles.homeSpaceBlock]}>Menu</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.webViewbottom, styles.groupChildBg]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View
        style={[styles.poolMaintenanceInner, styles.navBarSignUpParentLayout]}
      >
        <View
          style={[styles.poolMaintenanceInner, styles.navBarSignUpParentLayout]}
        >
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <View style={[styles.rectangleParent2, styles.groupItemLayout]}>
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
          <Text style={[styles.poolMaintenance1, styles.searchPosition]}>
            pool maintenance
          </Text>
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
  poolParentPosition: {
    left: 16,
    position: "absolute",
  },
  swimmingPoolSterilizationTypo: {
    height: 40,
    color: Color.whait,
    lineHeight: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  homeSpaceBlock: {
    marginTop: 4,
    fontSize: FontSize.med_size,
  },
  framePosition: {
    width: 139,
    top: "50%",
    marginTop: -70,
    height: 140,
    position: "absolute",
  },
  maintenanceTypo: {
    width: 185,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vacuumingThePoolTypo: {
    color: Color.whait,
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  theLayout: {
    height: 32,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  maintainingTypo: {
    width: 183,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarSignUpParentLayout: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 131,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    left: 16,
    position: "absolute",
  },
  poolMaintenanceChild: {
    top: 1014,
    height: 77,
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
  swimmingPoolSterilization: {
    width: 148,
    fontWeight: "700",
  },
  sterilizationAlgae: {
    width: 168,
    height: 48,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  swimmingPoolSterilizationParent: {
    top: 24,
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
  equipmentMaintenance: {
    color: Color.whait,
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  maintenanceOfSwimming: {
    marginTop: 4,
    fontSize: FontSize.med_size,
    height: 48,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
  },
  equipmentMaintenanceParent: {
    top: 22,
  },
  rectangleShadowBox: {
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
  filtrationSystemMaintenance: {
    width: 141,
    fontWeight: "600",
  },
  weHelpYou: {
    lineHeight: 15,
    height: 45,
    marginTop: 4,
    fontSize: FontSize.med_size,
    color: Color.colorGainsboro_400,
    width: 185,
    fontWeight: "300",
  },
  vacuumingThePool: {
    width: 161,
    fontWeight: "700",
    lineHeight: 21,
    color: Color.whait,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  cleaningThePool: {
    width: 185,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  maintainingSalinityph: {
    color: Color.whait,
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    lineHeight: 21,
  },
  maintainingTheDegree: {
    height: 32,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  frameChild5: {
    right: -139,
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
    lineHeight: 16,
    color: Color.gray,
    textAlign: "left",
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
    marginTop: 4,
    lineHeight: 16,
    color: Color.gray,
    textAlign: "left",
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    fontWeight: "300",
    marginTop: 4,
    lineHeight: 16,
    color: Color.gray,
    textAlign: "left",
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
  rectangleParent2: {
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
  poolMaintenance1: {
    marginLeft: -66.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    left: "50%",
    textTransform: "capitalize",
  },
  poolMaintenanceInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  poolMaintenance: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default PoolMaintenance;
