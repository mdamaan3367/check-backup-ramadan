import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LANDSCAPING1 = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const [frameContainer31Visible, setFrameContainer31Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  const openFrameContainer31 = useCallback(() => {
    setFrameContainer31Visible(true);
  }, []);

  const closeFrameContainer31 = useCallback(() => {
    setFrameContainer31Visible(false);
  }, []);

  return (
    <>
      <View style={styles.landscaping}>
        <Text style={[styles.oneTimeService, styles.mowYourGreenTypo]}>
          One time service
        </Text>
        <View style={[styles.navBarParent, styles.navPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
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
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer7}
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
          <View style={[styles.webViewbottom, styles.webPosition]}>
            <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <View style={[styles.fiRrZoomOutParent, styles.homeIndicatorFlexBox]}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout.png")}
            />
            <Text style={styles.sea}>Sea</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.rectangleParent, styles.frameChildLayout]}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP51")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43643.png")}
            />
            <View
              style={[
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text style={[styles.mulchTheLawn, styles.trimmingTypo]}>
                Mulch the lawn regularly
              </Text>
              <Text style={[styles.mowYourGreen, styles.mowYourGreenLayout]}>
                Mow your green grass periodically to keep it looking good and
                healthy.
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP50")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43644.png")}
            />
            <View
              style={[
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text style={[styles.trimmingShrubsAnd, styles.trimmingTypo]}>
                Trimming shrubs and plant hedges
              </Text>
              <Text style={[styles.trimAndShape, styles.trimAndShapeTypo]}>
                Trim and shape your shrubs and hedges to give them a neat look
                and encourage healthy growth.
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP49")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43645.png")}
            />
            <View
              style={[
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.fertilizingPlantsWith, styles.trimAndShapeTypo]}
              >
                Fertilizing plants with fertilizers (chemical - organic)
              </Text>
              <Text
                style={[
                  styles.nutrientDeliveryVia,
                  styles.treeBranchTrimmingTypo,
                ]}
              >{`Nutrient delivery via fertilizer for optimal plant growth.
`}</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP48")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43646.png")}
            />
            <View
              style={[
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[
                  styles.controllingAgriculturalPests,
                  styles.trimmingTypo,
                ]}
              >
                Controlling agricultural pests when infested
              </Text>
              <Text
                style={[
                  styles.proactiveSprayingFor,
                  styles.treeBranchTrimmingTypo,
                ]}
              >{`Proactive spraying for ongoing infection prevention.
`}</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP47")}
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
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[
                  styles.irrigationNetworkMaintenance,
                  styles.trimmingTypo,
                ]}
              >
                Irrigation network maintenance
              </Text>
              <Text
                style={[
                  styles.proactiveSprayingFor,
                  styles.treeBranchTrimmingTypo,
                ]}
              >{`Irrigation network integrity & efficiency maintenance
`}</Text>
            </View>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43647.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP46")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameChild7, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43648.png")}
            />
            <View
              style={[
                styles.mulchTheLawnRegularlyParent,
                styles.arrow21Position,
              ]}
            >
              <Text style={[styles.cuttingAndTrimming, styles.trimmingTypo]}>
                Cutting and trimming trees
              </Text>
              <Text
                style={[
                  styles.treeBranchTrimming,
                  styles.treeBranchTrimmingTypo,
                ]}
              >{`Tree branch trimming & aesthetics maintenance.
`}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.navPosition}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
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
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer31}
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
          <View style={[styles.webViewbottom1, styles.webPosition]}>
            <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.landscapingInner, styles.childPosition]}>
          <View style={[styles.landscapingInner, styles.childPosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <View style={[styles.rectangleParent4, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.profmLogo1111, styles.navBarPosition]}
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
            <Text style={styles.landscaping1}>
              <Text style={styles.l}>L</Text>
              <Text style={styles.andscaping}>ANDSCAPING</Text>
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <View style={styles.frameContainer7Overlay}>
          <Pressable
            style={styles.frameContainer7Bg}
            onPress={closeFrameContainer7}
          />
          <RegularCleaning9 onClose={closeFrameContainer7} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer31Visible}>
        <View style={styles.frameContainer31Overlay}>
          <Pressable
            style={styles.frameContainer31Bg}
            onPress={closeFrameContainer31}
          />
          <RegularCleaning9 onClose={closeFrameContainer31} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mowYourGreenTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  navPosition: {
    height: 90,
    top: 722,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
    alignItems: "center",
    height: 56,
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  webPosition: {
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    top: 56,
    height: 34,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameChildLayout: {
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 139,
    bottom: 0,
    height: 140,
    position: "absolute",
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  trimmingTypo: {
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
  mowYourGreenLayout: {
    marginTop: 8,
    height: 48,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  trimAndShapeTypo: {
    width: 171,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  treeBranchTrimmingTypo: {
    height: 32,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupItemLayout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  navBarPosition: {
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  oneTimeService: {
    top: 208,
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 129,
    height: 16,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: 16,
    position: "absolute",
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
    marginTop: 4,
    lineHeight: 16,
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
  frameContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer7Bg: {
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
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    top: 0,
    width: 375,
    left: "50%",
    position: "absolute",
    marginLeft: -187.5,
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
  },
  webViewbottom: {
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  navBarParent: {
    display: "none",
  },
  fiRrZoomOutIcon: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  sea: {
    width: 242,
    marginLeft: 8,
    color: Color.gray,
    fontSize: FontSize.med_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  fiRrZoomOutParent: {
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
    overflow: "hidden",
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
    left: 0,
  },
  frameItem: {
    right: 0,
  },
  mulchTheLawn: {
    width: 135,
  },
  mowYourGreen: {
    width: 180,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  mulchTheLawnRegularlyParent: {
    top: 22,
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
  trimmingShrubsAnd: {
    width: 164,
  },
  trimAndShape: {
    marginTop: 8,
    height: 48,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
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
  fertilizingPlantsWith: {
    height: 64,
    color: Color.whait,
    lineHeight: 22,
    width: 171,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  nutrientDeliveryVia: {
    width: 170,
  },
  controllingAgriculturalPests: {
    width: 176,
  },
  proactiveSprayingFor: {
    width: 168,
  },
  irrigationNetworkMaintenance: {
    width: 151,
  },
  frameChild7: {
    right: -139,
  },
  cuttingAndTrimming: {
    width: 163,
  },
  treeBranchTrimming: {
    width: 183,
  },
  frameParent: {
    top: 240,
    height: 572,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  frameContainer31Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer31Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  webViewbottom1: {
    height: 34,
    backgroundColor: Color.whait,
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    backgroundColor: Color.whait,
    width: 375,
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    top: 0,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleParent4: {
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
  l: {
    textTransform: "uppercase",
  },
  andscaping: {
    textTransform: "lowercase",
  },
  landscaping1: {
    marginLeft: -47.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  landscapingInner: {
    height: 124,
    width: 375,
  },
  landscaping: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default LANDSCAPING1;
