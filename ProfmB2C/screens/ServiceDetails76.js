import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails76 = () => {
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
      <View style={styles.serviceDetails}>
        <View
          style={[styles.serviceDetailsChild, styles.frameParentPosition]}
        />
        <Text
          style={[styles.distributionOfElectrical, styles.servicesProvidedTypo]}
        >
          Distribution of electrical loads
        </Text>
        <Text style={[styles.aServiceProvidedContainer, styles.homeTypo1]}>
          {`A service provided by `}
          <Text style={styles.profm}>Profm</Text>
          {` to ensure that electrical loads in an electrical system are distributed evenly. To prevent any problems or malfunctions in the system,
`}
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
              onPress={openFrameContainer7}
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
          <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[
              styles.inspectNetworkCablesAndNetParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={styles.useTestingToolsTypo}>
              Inspect network cables and network devices for any visible damage
              or malfunction
            </Text>
            <Text style={[styles.useTestingTools, styles.useTestingToolsTypo]}>
              Use testing tools to test network performance to ensure it is
              working properly
            </Text>
            <Text style={[styles.useTestingTools, styles.useTestingToolsTypo]}>
              Use analysis tools to analyze data related to network performance
              to look for any potential problems.
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services provided
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[
              styles.inspectNetworkCablesAndNetParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={[styles.allKindsOf, styles.allKindsOfTypo]}>
              All kinds of spare parts
            </Text>
            <Text style={[styles.replaceBurntOut, styles.allKindsOfTypo]}>
              Replace burnt out fuses and bulbs
            </Text>
            <Text style={[styles.replaceBurntOut, styles.allKindsOfTypo]}>
              All kinds of utilities such as electricity, water, gas, etc
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services Exclude
          </Text>
        </View>
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432739.png")}
          />
          <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
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
            <Text style={styles.theBestSpecialized}>
              The best specialized technicians
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
  frameParentPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  servicesProvidedTypo: {
    display: "flex",
    textAlign: "left",
    height: 24,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  homeTypo1: {
    fontWeight: "300",
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
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  useTestingToolsTypo: {
    height: 32,
    width: 329,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  allKindsOfTypo: {
    height: 16,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 136,
    backgroundColor: Color.whait,
    position: "absolute",
    overflow: "hidden",
  },
  distributionOfElectrical: {
    top: 232,
    lineHeight: 21,
    color: Color.black,
    width: 251,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  profm: {
    textTransform: "uppercase",
  },
  aServiceProvidedContainer: {
    top: 264,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: Color.grayBlack,
    width: 343,
    height: 56,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
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
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
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
    top: 0,
    width: 375,
    position: "absolute",
    height: 56,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    justifyContent: "center",
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
  useTestingTools: {
    marginTop: 8,
  },
  inspectNetworkCablesAndNetParent: {
    left: 16,
  },
  servicesProvided: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    alignItems: "center",
  },
  frameParent: {
    top: 352,
    height: 192,
    backgroundColor: Color.whait,
    position: "absolute",
    overflow: "hidden",
  },
  allKindsOf: {
    width: 329,
    height: 16,
    textTransform: "capitalize",
  },
  replaceBurntOut: {
    width: 326,
    marginTop: 8,
  },
  frameGroup: {
    top: 552,
    height: 144,
    backgroundColor: Color.whait,
    position: "absolute",
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
    left: 16,
    position: "absolute",
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
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
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

export default ServiceDetails76;
