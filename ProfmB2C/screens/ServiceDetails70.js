import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails70 = () => {
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
        <View style={styles.serviceDetailsChild} />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
          >
            <Text style={[styles.allTypeOf, styles.allTypeOfLayout]}>
              All type of Spare Parts
            </Text>
            <Text
              style={[styles.replacingDamagedPlants, styles.allTypeOfLayout]}
            >
              Replacing damaged plants and planning annuals
            </Text>
            <Text style={[styles.replacingDamagedTrees, styles.theTypo]}>
              Replacing damaged trees and crops of all kinds if the causes of
              the damage are extreme high temperatures
            </Text>
            <Text
              style={[styles.replacingDamagedPlants, styles.allTypeOfLayout]}
            >
              High ground water levels in the soil
            </Text>
            <Text
              style={[styles.replacingDamagedPlants, styles.allTypeOfLayout]}
            >
              The old age of the trees and rotting of their roots
            </Text>
            <Text style={[styles.anyOtherNatural, styles.aServiceThatTypo]}>
              Any other natural conditions that lead to damage to the trees
            </Text>
            <Text
              style={[styles.theIrrigationProcess, styles.aServiceThatTypo]}
            >
              The irrigation process and damage to crops due to a lack of
              irrigation water, and the customer must provide a sufficient
              quantity and source of water
            </Text>
            <Text style={[styles.anyOtherNatural, styles.aServiceThatTypo]}>
              All type of utilities such as electricity, water, gas etc.
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services Exclude</Text>
        </View>
        <View style={[styles.serviceDetailsItem, styles.frameParentPosition]} />
        <Text
          style={[
            styles.irrigationNetworkMaintenance,
            styles.theBestSpecializedTypo,
          ]}
        >
          Irrigation network maintenance
        </Text>
        <Text style={[styles.aServiceThat, styles.aServiceThatTypo]}>
          A service that aims to maintain the irrigation network in good
          condition to ensure that water reaches the plants efficiently and
          prevent leaks.
        </Text>
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
          >
            <Text style={styles.theTypo}>
              Inspect the irrigation network for any signs of damage or leaks.
            </Text>
            <Text style={[styles.anyOtherNatural, styles.aServiceThatTypo]}>
              Repair or replace any damaged or clogged parts.
            </Text>
            <Text style={[styles.cleanTheIrrigation, styles.theTypo]}>
              Clean the irrigation network to remove any dirt or deposits that
              may lead to low pressure or clogged valves.
            </Text>
            <Text style={[styles.cleanTheIrrigation, styles.theTypo]}>
              Adjust the water pressure to ensure it reaches all plants in
              sufficient quantities.
            </Text>
            <Text style={[styles.cleanTheIrrigation, styles.theTypo]}>
              Maintenance of irrigation equipment such as pumps and control
              devices.
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services provided</Text>
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
                  source={require("../assets/home23.png")}
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
                  source={require("../assets/calendartick4.png")}
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
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432728.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.wrapperPosition]}
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
            <Text
              style={[styles.theBestSpecialized, styles.theBestSpecializedTypo]}
            >
              The best specialized technicians
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
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    left: 16,
    position: "absolute",
  },
  allTypeOfLayout: {
    height: 16,
    color: Color.gray,
    lineHeight: 16,
  },
  theTypo: {
    height: 32,
    width: 343,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  aServiceThatTypo: {
    width: 343,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  theBestSpecializedTypo: {
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "left",
    color: Color.gray,
    lineHeight: 16,
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
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  serviceDetailsChild: {
    marginLeft: -160.5,
    top: 959,
    width: 321,
    overflow: "hidden",
    height: 53,
    left: "50%",
    position: "absolute",
  },
  allTypeOf: {
    width: 329,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
  },
  replacingDamagedPlants: {
    width: 326,
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
  },
  replacingDamagedTrees: {
    alignItems: "center",
    display: "flex",
    marginTop: 8,
  },
  anyOtherNatural: {
    marginTop: 8,
    height: 16,
    color: Color.gray,
    lineHeight: 16,
  },
  theIrrigationProcess: {
    height: 48,
    alignItems: "center",
    display: "flex",
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
    width: 343,
  },
  allTypeOfSparePartsParent: {
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
    top: 614,
    height: 312,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  serviceDetailsItem: {
    top: 208,
    height: 134,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  irrigationNetworkMaintenance: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 272,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  aServiceThat: {
    top: 264,
    lineHeight: 18,
    color: Color.grayBlack,
    height: 54,
    left: 16,
    position: "absolute",
  },
  cleanTheIrrigation: {
    marginTop: 8,
  },
  frameGroup: {
    top: 350,
    height: 256,
    backgroundColor: Color.whait,
    overflow: "hidden",
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
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
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
    marginLeft: -187.5,
    left: "50%",
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
    width: "100%",
  },
});

export default ServiceDetails70;
