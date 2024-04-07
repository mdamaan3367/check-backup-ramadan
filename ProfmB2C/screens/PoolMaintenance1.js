import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PoolMaintenance1 = () => {
  const [frameContainer19Visible, setFrameContainer19Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(true);
  }, []);

  const closeFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(false);
  }, []);

  return (
    <>
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
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP64")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
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
                style={[styles.sterilizationAlgae, styles.homeTypo]}
              >{`Sterilization & algae control for swimming pool (chlorine & algaecide)
`}</Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436419.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("EquipmentMaintenance1")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
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
                  styles.equipmentMaintenance,
                  styles.vacuumingThePoolTypo,
                ]}
              >
                Equipment maintenance
              </Text>
              <Text
                style={[styles.maintenanceOfSwimming, styles.homeTypo]}
              >{`Maintenance of swimming pool electrical and mechanical equipment
`}</Text>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.frameChild5Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-436420.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("FiltrationSystemMaintenance1")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
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
              <Text style={[styles.weHelpYou, styles.homeTypo]}>
                We help you keep your filtration system in good condition and
                running properly
              </Text>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.frameChild5Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-436421.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP63")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
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
              <Text style={[styles.cleaningThePool, styles.theTypo]}>
                Cleaning the pool with vacuum cleaners from plankton and dust
              </Text>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.frameChild5Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-436422.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP62")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
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
                style={[styles.vacuumingThePool, styles.vacuumingThePoolTypo]}
              >{`Maintaining salinity(PH) `}</Text>
              <Text style={[styles.maintainingTheDegree, styles.theTypo]}>
                Maintaining the degree of salinity (PH) within permissible
                limits
              </Text>
            </View>
            <Image
              style={[styles.frameChild5, styles.frameChild5Position]}
              resizeMode="cover"
              source={require("../assets/rectangle-436423.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.navBarParent, styles.navBarParentLayout]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home24.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.homeTypo]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.navLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick22.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable style={styles.navLayout} onPress={openFrameContainer19}>
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
              onPress={() => navigation.navigate("Menu2")}
            >
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.navBarParentLayout]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.poolMaintenanceInner, styles.navBarParentLayout]}>
          <View
            style={[styles.poolMaintenanceInner, styles.navBarParentLayout]}
          >
            <View style={[styles.groupChild, styles.navBarPosition]} />
            <View style={[styles.rectangleParent2, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.profmLogo1111, styles.searchPosition]}
                resizeMode="cover"
                source={require("../assets/profm-logo1-1-1-17.png")}
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
            <Text style={styles.poolMaintenance1}>pool maintenance</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer19Visible}>
        <View style={styles.frameContainer19Overlay}>
          <Pressable
            style={styles.frameContainer19Bg}
            onPress={closeFrameContainer19}
          />
          <RegularCleaning9 onClose={closeFrameContainer19} />
        </View>
      </Modal>
    </>
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
  poolParentPosition: {
    left: 16,
    position: "absolute",
  },
  swimmingPoolSterilizationTypo: {
    height: 40,
    color: Color.whait,
    fontWeight: "700",
    lineHeight: 21,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  homeTypo: {
    marginTop: 4,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  vacuumingThePoolTypo: {
    color: Color.whait,
    width: 185,
    fontWeight: "700",
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  frameChild5Position: {
    top: "50%",
    marginTop: -70,
    width: 139,
    height: 140,
    position: "absolute",
  },
  theTypo: {
    height: 32,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarParentLayout: {
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
  navBarPosition: {
    backgroundColor: Color.whait,
    width: 375,
    top: 0,
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
    width: 137,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
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
    left: 0,
    top: 0,
    height: 140,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  swimmingPoolSterilization: {
    width: 175,
  },
  sterilizationAlgae: {
    width: 170,
    height: 48,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  swimmingPoolSterilizationParent: {
    top: 24,
  },
  frameItem: {
    bottom: 0,
    width: 139,
    right: 0,
    height: 140,
    position: "absolute",
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
    width: 185,
  },
  maintenanceOfSwimming: {
    width: 185,
    height: 48,
    marginTop: 4,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  equipmentMaintenanceParent: {
    top: 22,
  },
  rectangleIcon: {
    right: 0,
    marginTop: -70,
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
    width: 156,
  },
  weHelpYou: {
    lineHeight: 15,
    height: 45,
    width: 185,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  vacuumingThePool: {
    width: 185,
    lineHeight: 21,
    color: Color.whait,
  },
  cleaningThePool: {
    width: 185,
  },
  maintainingTheDegree: {
    width: 176,
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
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
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
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    fontWeight: "300",
    marginTop: 4,
    lineHeight: 16,
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer19Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer19Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    width: 375,
    top: 0,
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
    backgroundColor: Color.colorGray_100,
  },
  navBarParent: {
    top: 722,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  groupItem: {
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
    left: "50%",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  poolMaintenanceInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  poolMaintenance: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default PoolMaintenance1;
