import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ServiceDetails74 = () => {
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
        <View style={[styles.frameParent, styles.framePosition]}>
          <View
            style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
          >
            <Text style={[styles.allTypeOf, styles.allTypeOfTypo]}>
              All type of Spare Parts
            </Text>
            <Text
              style={[
                styles.replacingDamagedPlants,
                styles.replacingSpaceBlock,
              ]}
            >
              Replacing damaged plants and planning annuals
            </Text>
            <Text
              style={[styles.replacingDamagedTrees, styles.aServiceThatTypo]}
            >
              Replacing damaged trees and crops of all kinds if the causes of
              the damage are extreme high temperatures
            </Text>
            <Text
              style={[
                styles.replacingDamagedPlants,
                styles.replacingSpaceBlock,
              ]}
            >
              High ground water levels in the soil
            </Text>
            <Text
              style={[
                styles.replacingDamagedPlants,
                styles.replacingSpaceBlock,
              ]}
            >
              The old age of the trees and rotting of their roots
            </Text>
            <Text style={[styles.anyOtherNatural, styles.anyOtherNaturalTypo]}>
              Any other natural conditions that lead to damage to the trees
            </Text>
            <Text
              style={[styles.theIrrigationProcess, styles.anyOtherNaturalTypo]}
            >
              The irrigation process and damage to crops due to a lack of
              irrigation water, and the customer must provide a sufficient
              quantity and source of water
            </Text>
            <Text style={[styles.anyOtherNatural, styles.anyOtherNaturalTypo]}>
              All type of utilities such as electricity, water, gas etc.
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services Exclude</Text>
        </View>
        <View style={[styles.serviceDetailsChild, styles.framePosition]} />
        <Text style={[styles.mulchTheLawn, styles.theTypo]}>
          Mulch the lawn regularly
        </Text>
        <Text style={[styles.aServiceThat, styles.aServiceThatTypo]}>
          A service that aims to maintain the beautiful and healthy appearance
          of the grass by adding a layer of organic materials.
        </Text>
        <View style={[styles.frameGroup, styles.framePosition]}>
          <View
            style={[styles.allTypeOfSparePartsParent, styles.wrapperPosition]}
          >
            <Text style={[styles.removeAnyWeeds, styles.aServiceThatTypo]}>
              Remove any weeds or decaying organic matter from the soil surface.
            </Text>
            <Text style={[styles.distributeA12, styles.replacingSpaceBlock]}>
              Distribute a 1-2 inch layer of mulch over the soil surface.
            </Text>
            <Text style={[styles.distributeA12, styles.replacingSpaceBlock]}>
              Level the layer of mulch to ensure it is evenly distributed.
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services provided</Text>
        </View>
        <View style={[styles.serviceDetailsItem, styles.framePosition]} />
        <View style={[styles.navBarParent, styles.frameParentLayout]}>
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
          <View style={[styles.webViewbottom, styles.frameParentLayout]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432735.png")}
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
            <Text style={[styles.theBestSpecialized, styles.theTypo]}>
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
  framePosition: {
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    left: 16,
    position: "absolute",
  },
  allTypeOfTypo: {
    width: 329,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  replacingSpaceBlock: {
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
  },
  aServiceThatTypo: {
    height: 32,
    width: 343,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  anyOtherNaturalTypo: {
    width: 343,
    marginTop: 8,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  theTypo: {
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "600",
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  frameParentLayout: {
    width: 375,
    marginLeft: -187.5,
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
  allTypeOf: {
    height: 16,
    color: Color.gray,
    lineHeight: 16,
  },
  replacingDamagedPlants: {
    width: 326,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    marginTop: 8,
  },
  replacingDamagedTrees: {
    alignItems: "center",
    display: "flex",
    marginTop: 8,
    color: Color.gray,
    lineHeight: 16,
  },
  anyOtherNatural: {
    height: 16,
  },
  theIrrigationProcess: {
    height: 48,
    alignItems: "center",
    display: "flex",
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
    top: 496,
    height: 312,
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  serviceDetailsChild: {
    top: 208,
    height: 112,
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  mulchTheLawn: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
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
    left: 16,
    position: "absolute",
  },
  removeAnyWeeds: {
    color: Color.gray,
    lineHeight: 16,
  },
  distributeA12: {
    height: 16,
    width: 329,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  frameGroup: {
    top: 328,
    height: 160,
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  serviceDetailsItem: {
    marginLeft: -160.5,
    top: 841,
    width: 321,
    height: 53,
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
    left: "50%",
    position: "absolute",
  },
  navBarParent: {
    top: 722,
    height: 90,
    left: "50%",
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

export default ServiceDetails74;
