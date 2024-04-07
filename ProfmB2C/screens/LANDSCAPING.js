import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const LANDSCAPING = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  return (
    <>
      <View style={styles.landscaping}>
        <Text style={styles.oneTimeService}>One time service</Text>
        <View style={[styles.navBarParent, styles.navParentPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
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
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
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
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
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
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP15")}
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
              <Text style={[styles.mulchTheLawn, styles.mulchTheLawnTypo]}>
                Mulch the lawn regularly
              </Text>
              <Text style={[styles.mowYourGreen, styles.mowYourGreenTypo]}>
                Mow your green grass periodically to keep it looking good and
                healthy.
              </Text>
            </View>
            <Image
              style={[styles.frameItem, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43643.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP14")}
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
              <Text style={[styles.trimmingShrubsAnd, styles.mulchTheLawnTypo]}>
                Trimming shrubs and plant hedges
              </Text>
              <Text style={[styles.trimAndShape, styles.trimAndShapeTypo]}>
                Trim and shape your shrubs and hedges to give them a neat look
                and encourage healthy growth.
              </Text>
            </View>
            <Image
              style={[styles.frameItem, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43644.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP13")}
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
            <Image
              style={[styles.frameItem, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43645.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP12")}
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
                  styles.controllingAgriculturalPests,
                  styles.trimAndShapeTypo,
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
            <Image
              style={[styles.frameItem, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43646.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP11")}
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
              <Text style={[styles.trimmingShrubsAnd, styles.mulchTheLawnTypo]}>
                Irrigation network maintenance
              </Text>
              <Text
                style={[
                  styles.irrigationNetworkIntegrity,
                  styles.treeBranchTrimmingTypo,
                ]}
              >{`Irrigation network integrity & efficiency maintenance
`}</Text>
            </View>
            <Image
              style={[styles.frameItem, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43647.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParentShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP10")}
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
              <Text style={[styles.trimmingShrubsAnd, styles.mulchTheLawnTypo]}>
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
            <Image
              style={[styles.frameChild7, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-43648.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.navBarSignUpParent, styles.navParentPosition]}>
          <View style={[styles.navBarSignUp, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
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
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
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
              style={styles.navBarChildLayout}
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
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Profile")}
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
              onPress={() => navigation.navigate("Menu")}
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
                style={[styles.profmLogo1111, styles.navPosition]}
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
    </>
  );
};

const styles = StyleSheet.create({
  navParentPosition: {
    height: 90,
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
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  mulchTheLawnTypo: {
    height: 40,
    color: Color.whait,
    fontWeight: "700",
    lineHeight: 22,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  mowYourGreenTypo: {
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  framePosition: {
    width: 139,
    top: "50%",
    marginTop: -70,
    height: 140,
    position: "absolute",
  },
  trimAndShapeTypo: {
    width: 177,
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
  navPosition: {
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
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
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
    top: 722,
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
  mulchTheLawn: {
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 40,
  },
  mowYourGreen: {
    width: 183,
    height: 48,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  mulchTheLawnRegularlyParent: {
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
  trimmingShrubsAnd: {
    width: 191,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 40,
  },
  trimAndShape: {
    height: 45,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    width: 177,
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
    width: 177,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  nutrientDeliveryVia: {
    width: 181,
  },
  controllingAgriculturalPests: {
    height: 40,
    color: Color.whait,
    fontWeight: "700",
    lineHeight: 22,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  proactiveSprayingFor: {
    width: 172,
  },
  irrigationNetworkIntegrity: {
    width: 171,
  },
  treeBranchTrimming: {
    width: 191,
  },
  frameChild7: {
    right: -139,
  },
  frameParent: {
    top: 240,
    height: 572,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  navBarSignUp: {
    bottom: 34,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    position: "absolute",
    marginLeft: -187.5,
  },
  webViewbottom1: {
    height: 34,
    backgroundColor: Color.whait,
  },
  navBarSignUpParent: {
    bottom: 0,
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

export default LANDSCAPING;
