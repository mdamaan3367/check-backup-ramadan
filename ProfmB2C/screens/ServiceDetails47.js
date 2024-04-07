import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails47 = () => {
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
        <View style={[styles.serviceDetailsChild, styles.framePosition]} />
        <Text style={[styles.facadeCleaning, styles.facadeCleaningTypo]}>
          Facade cleaning
        </Text>
        <Text
          style={[styles.removingDirtDust, styles.homeTypo1]}
        >{`Removing dirt, dust and stains from the exterior surfaces of buildings. These surfaces can be made of a variety of materials, including concrete, brick, stone, and glass.

`}</Text>
        <View style={[styles.frameParent, styles.framePosition]}>
          <View
            style={[
              styles.removeAnyMaterialsOrFurnitParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={styles.rinseTheInterfaceTypo}>
              Remove any materials or furniture from the area around the facade.
            </Text>
            <Text style={[styles.cleaningUsingWater, styles.dryTheFacadeTypo]}>
              Cleaning using water and appropriate detergent.
            </Text>
            <Text
              style={[styles.rinseTheInterface, styles.rinseTheInterfaceTypo]}
            >
              Rinse the interface with clean water to remove any remaining
              detergent or dirt.
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Dry the facade using water or hot air.
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.facadeCleaningTypo]}>
            Services provided
          </Text>
        </View>
        <View style={[styles.serviceDetailsItem, styles.framePosition]} />
        <View style={[styles.frameGroup, styles.framePosition]}>
          <View
            style={[
              styles.removeAnyMaterialsOrFurnitParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={[styles.carpetCleaning, styles.pestControlTypo]}>
              Carpet Cleaning
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Blinds IE Venetians
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Pool Maintenance
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Garden Maintenance
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Rubbish Removal
            </Text>
            <Text style={[styles.dryTheFacade, styles.dryTheFacadeTypo]}>
              Furnished properties
            </Text>
            <Text style={[styles.pestControl, styles.pestControlTypo]}>
              Pest Control
            </Text>
            <Text style={[styles.pestControl, styles.pestControlTypo]}>
              Upholstery Cleaning
            </Text>
            <Text style={[styles.pestControl, styles.pestControlTypo]}>
              Pressure Cleaning
            </Text>
            <Text style={[styles.pestControl, styles.pestControlTypo]}>
              Moving furniture or other heavy objects over 25 kg
            </Text>
            <Text
              style={[styles.rinseTheInterface, styles.rinseTheInterfaceTypo]}
            >
              Removal of Stained silicone, paint, AC filters, concrete stains,
              etc.
            </Text>
            <Text style={[styles.pestControl, styles.pestControlTypo]}>
              All types of utilities, such as electricity, water, gas, etc
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.facadeCleaningTypo]}>
            Services Exclude
          </Text>
        </View>
        <View style={styles.navBarParent}>
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
          <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.rectangleParent}
            resizeMode="cover"
            source={require("../assets/rectangle-432773.png")}
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
            <Text style={styles.cleaningWithThe}>
              Cleaning with the latest equipment
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
    position: "absolute",
  },
  facadeCleaningTypo: {
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
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  dryTheFacadeTypo: {
    height: 16,
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  rinseTheInterfaceTypo: {
    height: 32,
    color: Color.gray,
    width: 343,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  pestControlTypo: {
    width: 329,
    height: 16,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
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
  serviceDetailsChild: {
    top: 208,
    height: 128,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  facadeCleaning: {
    top: 232,
    color: Color.black,
    width: 128,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "left",
  },
  removingDirtDust: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    height: 48,
    width: 343,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  cleaningUsingWater: {
    marginTop: 8,
    width: 343,
  },
  rinseTheInterface: {
    marginTop: 8,
  },
  dryTheFacade: {
    width: 252,
    marginTop: 8,
  },
  removeAnyMaterialsOrFurnitParent: {
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
    top: 344,
    height: 200,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  serviceDetailsItem: {
    top: 1174,
    left: 24,
    width: 333,
    height: 40,
  },
  carpetCleaning: {
    textTransform: "capitalize",
  },
  pestControl: {
    marginTop: 8,
  },
  frameGroup: {
    top: 552,
    height: 376,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
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
    bottom: 34,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
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
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  navBarParent: {
    bottom: 0,
    height: 90,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    height: 208,
    width: 375,
    position: "absolute",
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
  cleaningWithThe: {
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
    width: "100%",
  },
});

export default ServiceDetails47;
