import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails55 = () => {
  const [frameContainer11Visible, setFrameContainer11Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(true);
  }, []);

  const closeFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(false);
  }, []);

  return (
    <>
      <View style={styles.serviceDetails}>
        <View
          style={[styles.serviceDetailsChild, styles.frameParentPosition]}
        />
        <Text
          style={[
            styles.swimmingPoolSterilization,
            styles.servicesProvidedTypo,
          ]}
        >
          Swimming pool sterilization
        </Text>
        <Text style={[styles.maintainingTheSafety, styles.homeTypo1]}>
          Maintaining the safety of the pool and preventing the spread of
          bacteria and viruses. Special chemicals are used to kill bacteria and
          viruses in pool water.
        </Text>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[
              styles.inspectThePoolForAnyDamagParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={[styles.inspectThePool, styles.inspectThePoolLayout]}>
              Inspect the pool for any damage or defect
            </Text>
            <Text
              style={[
                styles.sterilizationChemicalsAre,
                styles.testTheWaterTypo,
              ]}
            >
              Sterilization chemicals are added to the pool water.
            </Text>
            <Text style={[styles.testTheWater, styles.theLayout]}>
              Test the water quality after completing the sterilization process
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services provided
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[
              styles.inspectThePoolForAnyDamagParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text
              style={[styles.inspectionOrRepair, styles.inspectThePoolLayout]}
            >
              Inspection or repair of leaks in the swimming pool.
            </Text>
            <Text
              style={[styles.removingLimescaleDimming, styles.testTheWaterTypo]}
            >
              Removing limescale (dimming) works
            </Text>
            <Text
              style={[styles.removingLimescaleDimming, styles.testTheWaterTypo]}
            >
              Changing the filter or sand in the filter
            </Text>
            <Text
              style={[styles.removingLimescaleDimming, styles.testTheWaterTypo]}
            >
              Emptying or supplying the pool with water
            </Text>
            <Text
              style={[styles.removingLimescaleDimming, styles.testTheWaterTypo]}
            >
              Process of winding the motor
            </Text>
            <Text
              style={[styles.removingLimescaleDimming, styles.testTheWaterTypo]}
            >
              All types of utilities, such as electricity, water, gas, etc.
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services Exclude
          </Text>
        </View>
        <View style={[styles.navBarParent, styles.frameParentPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/home24.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.home2Icon}
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
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/calendartick22.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer11}
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
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Menu2")}
            >
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
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
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432765.png")}
          />
          <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-238737.png")}
            />
          </Pressable>
          <View style={styles.profmLogo1111Parent}>
            <Image
              style={styles.profmLogo1111}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-18.png")}
            />
            <Text style={[styles.theBestSpecialists, styles.navFlexBox]}>
              The best specialists in hygiene and sterilization
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer11Visible}>
        <View style={styles.frameContainer11Overlay}>
          <Pressable
            style={styles.frameContainer11Bg}
            onPress={closeFrameContainer11}
          />
          <RegularCleaning9 onClose={closeFrameContainer11} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  servicesProvidedTypo: {
    display: "flex",
    fontWeight: "600",
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
  inspectThePoolLayout: {
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  testTheWaterTypo: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  theLayout: {
    height: 32,
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
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 134,
    backgroundColor: Color.whait,
    position: "absolute",
    overflow: "hidden",
  },
  swimmingPoolSterilization: {
    top: 232,
    color: Color.black,
    width: 251,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontWeight: "600",
    left: 16,
    position: "absolute",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  maintainingTheSafety: {
    top: 264,
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
  inspectThePool: {
    width: 330,
    color: Color.gray,
    lineHeight: 16,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  sterilizationChemicalsAre: {
    height: 16,
    fontFamily: FontFamily.dGBaysan,
    width: 330,
  },
  testTheWater: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    width: 330,
  },
  inspectThePoolForAnyDamagParent: {
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
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 350,
    height: 160,
    backgroundColor: Color.whait,
    position: "absolute",
    overflow: "hidden",
  },
  inspectionOrRepair: {
    width: 329,
    color: Color.gray,
    lineHeight: 16,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    textTransform: "capitalize",
  },
  removingLimescaleDimming: {
    width: 326,
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  frameGroup: {
    top: 518,
    height: 216,
    backgroundColor: Color.whait,
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
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer11Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer11Bg: {
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
    top: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.whait,
    left: "50%",
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
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  navBarParent: {
    top: 722,
    height: 90,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    height: 208,
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
    height: 32,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontWeight: "600",
    textTransform: "capitalize",
    justifyContent: "center",
    lineHeight: 21,
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

export default ServiceDetails55;
