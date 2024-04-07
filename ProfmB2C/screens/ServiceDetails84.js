import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails84 = () => {
  const [frameContainer9Visible, setFrameContainer9Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(true);
  }, []);

  const closeFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(false);
  }, []);

  return (
    <>
      <View style={styles.serviceDetails}>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[styles.termiteControlLupineParent, styles.controlPosition]}
          >
            <Text style={styles.controlTypo}>Termite control (lupine)</Text>
            <Text style={[styles.fumigationAndControl, styles.controlTypo]}>
              Fumigation and control of wood beetles
            </Text>
            <Text style={styles.controlStoredMaterial}>
              Control stored material pests, bugs and flying insects using
              thermal mist
            </Text>
            <Text style={[styles.fumigationAndControl, styles.controlTypo]}>
              Providing utilities (electricity, water, gas)
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services Exclude</Text>
        </View>
        <View
          style={[styles.serviceDetailsChild, styles.frameParentPosition]}
        />
        <Text style={[styles.regularPestControl, styles.useOfSafeClr]}>
          Regular pest control
        </Text>
        <Text style={[styles.serviceAimedAtContainer, styles.servicePosition]}>
          <Text style={styles.service}>service</Text> aimed at eliminating
          various insects and pests that may be present in homes, commercial
          buildings, and other establishments.
        </Text>
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
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer9}
            >
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.home2Icon}
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
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.frameParentPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.serviceDetailsItem, styles.servicePosition]} />
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[styles.termiteControlLupineParent, styles.controlPosition]}
          >
            <Text style={styles.containerLayout}>
              <Text style={styles.useOfSafeClr}>Use of safe materials :</Text>
              <Text style={styles.theCompanyIs}>
                {" "}
                The company is committed to using materials that have the
                necessary approvals and take into account the requirements of
                environmental safety and public health protection.
              </Text>
            </Text>
            <Text
              style={[
                styles.comprehensiveProtectionContainer,
                styles.containerLayout,
              ]}
            >
              <Text style={styles.useOfSafeClr}>
                Comprehensive protection :
              </Text>
              <Text style={styles.theCompanyIs}>
                {" "}
                In addition to the use of pesticides, the service includes the
                use of additional preventive methods to protect family members
                and pets from exposure to pesticides and their effects.
              </Text>
            </Text>
            <Text
              style={[
                styles.comprehensiveProtectionContainer,
                styles.containerLayout,
              ]}
            >
              <Text
                style={styles.useOfSafeClr}
              >{`Joint cooperation for better results : `}</Text>
              <Text style={styles.theCompanyIs}>
                The effectiveness of the service depends greatly on the
                customer’s cooperation in applying the program in the correct
                way and following the company’s instructions regarding site
                conditions.
              </Text>
            </Text>
            <Text
              style={[
                styles.comprehensiveProtectionContainer,
                styles.containerLayout,
              ]}
            >
              <Text style={styles.useOfSafeClr}>Re-treatment guarantee :</Text>
              <Text style={styles.theCompanyIs}>
                {" "}
                In the event that insects return due to circumstances beyond the
                company’s control, they will inform the customer and repeat the
                treatment to ensure that they obtain the desired result.
              </Text>
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services provided</Text>
        </View>
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432755.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.controlPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-2387371.png")}
            />
          </Pressable>
          <View style={styles.profmLogo1111Parent}>
            <Image
              style={styles.profmLogo1111}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-18.png")}
            />
            <Text style={[styles.theBestSpecialized, styles.navFlexBox]}>
              The best specialized technicians
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer9Visible}>
        <View style={styles.frameContainer9Overlay}>
          <Pressable
            style={styles.frameContainer9Bg}
            onPress={closeFrameContainer9}
          />
          <RegularCleaning9 onClose={closeFrameContainer9} />
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
    position: "absolute",
  },
  controlPosition: {
    left: 16,
    position: "absolute",
  },
  controlTypo: {
    height: 16,
    width: 329,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  useOfSafeClr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  servicePosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    lineHeight: 16,
    textAlign: "left",
    color: Color.gray,
    fontSize: FontSize.med_size,
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
  containerLayout: {
    height: 64,
    lineHeight: 16,
    width: 343,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  fumigationAndControl: {
    marginTop: 8,
  },
  controlStoredMaterial: {
    height: 40,
    marginTop: 8,
    width: 329,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  termiteControlLupineParent: {
    top: 56,
  },
  servicesExclude: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 718,
    height: 192,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  serviceDetailsChild: {
    top: 208,
    height: 134,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  regularPestControl: {
    top: 232,
    lineHeight: 22,
    width: 251,
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  service: {
    textTransform: "capitalize",
  },
  serviceAimedAtContainer: {
    top: 264,
    color: Color.grayBlack,
    height: 54,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    width: 343,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
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
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer9Bg: {
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
    top: 56,
    backgroundColor: Color.whait,
  },
  navBarParent: {
    top: 722,
    height: 90,
  },
  serviceDetailsItem: {
    top: 939,
    height: 68,
    overflow: "hidden",
  },
  theCompanyIs: {
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  comprehensiveProtectionContainer: {
    marginTop: 8,
  },
  frameGroup: {
    top: 350,
    height: 360,
    backgroundColor: Color.whait,
    overflow: "hidden",
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
  },
  profmLogo1111: {
    width: 200,
    height: 73,
  },
  theBestSpecialized: {
    color: Color.whait,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
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

export default ServiceDetails84;
