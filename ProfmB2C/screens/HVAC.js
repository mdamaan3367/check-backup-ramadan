import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const HVAC = () => {
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(true);
  }, []);

  const closeFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(false);
  }, []);

  return (
    <>
      <View style={styles.hvac}>
        <Text style={[styles.yearlyService, styles.yearlyServiceFlexBox]}>
          yearly service
        </Text>
        <View style={[styles.hvacChild, styles.searchLayout]} />
        <View style={[styles.search, styles.searchPosition]}>
          <View style={styles.fiRrZoomOutParent}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout1.png")}
            />
            <Text style={styles.sea}>Sea</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.frameLayout]}>
          <LinearGradient
            style={[styles.frameChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <View style={styles.airConditionerMaintenancePrParent}>
            <Text style={[styles.airConditionerMaintenance, styles.hvac1Typo]}>
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
        <View style={[styles.navBarParent, styles.hvacInnerLayout]}>
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
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
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
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer10}
            >
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
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
          <View style={[styles.webViewbottom, styles.navBarBg]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
          <View style={[styles.hvacInner, styles.hvacInnerLayout]}>
            <View style={[styles.groupChild, styles.navBarBg]} />
            <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={styles.profmLogo1111}
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
            <Text style={[styles.hvac1, styles.hvac1Typo]}>HVAC</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer10Visible}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeFrameContainer10}
          />
          <RegularCleaning9 onClose={closeFrameContainer10} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  yearlyServiceFlexBox: {
    display: "flex",
    textAlign: "left",
  },
  searchLayout: {
    width: 343,
    position: "absolute",
  },
  searchPosition: {
    marginLeft: -171.5,
    left: "50%",
    overflow: "hidden",
  },
  frameLayout: {
    height: 140,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  hvac1Typo: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
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
  navBarChildLayout: {
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
  navBarBg: {
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
  yearlyService: {
    top: 216,
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 133,
    height: 16,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
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
    left: "50%",
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
    color: Color.whait,
    width: 175,
    height: 40,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    top: 248,
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
  home: {
    fontWeight: "300",
    marginTop: 4,
    lineHeight: 16,
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
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    fontWeight: "300",
    marginTop: 4,
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer10Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer10Bg: {
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
    top: 0,
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
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
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
    left: "50%",
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

export default HVAC;
