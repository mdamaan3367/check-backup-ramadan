import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails88 = () => {
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
          style={[styles.equipmentMaintenance, styles.servicesProvidedTypo]}
        >
          Equipment maintenance
        </Text>
        <Text
          style={[
            styles.profmOffersAContainer,
            styles.serviceDetailsItemPosition,
          ]}
        >
          <Text style={styles.profm}>Profm</Text>
          {` offers a pool equipment maintenance service, which is a comprehensive service for maintaining all equipment used in pool operation
`}
        </Text>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[styles.pumpMaintenanceParent, styles.webViewbottomPosition]}
          >
            <Text style={styles.pumpMaintenance}>Pump maintenance</Text>
            <Text
              style={[
                styles.maintainingAndChanging,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Maintaining and changing sterilization devices
            </Text>
            <Text
              style={[
                styles.maintainingAndChanging,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Maintaining and changing lighting devices
            </Text>
            <Text
              style={[
                styles.maintainingAndChanging,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Maintenance and change of safety equipment
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services provided
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[styles.pumpMaintenanceParent, styles.webViewbottomPosition]}
          >
            <Text style={styles.pumpMaintenance}>
              Inspection or repair of leaks in the swimming pool.
            </Text>
            <Text
              style={[
                styles.removingLimescaleDimming,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Removing limescale (dimming) works
            </Text>
            <Text
              style={[
                styles.removingLimescaleDimming,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Changing the filter or sand in the filter
            </Text>
            <Text
              style={[
                styles.removingLimescaleDimming,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Emptying or supplying the pool with water
            </Text>
            <Text
              style={[
                styles.removingLimescaleDimming,
                styles.maintainingAndChangingTypo,
              ]}
            >
              Process of winding the motor
            </Text>
            <Text
              style={[
                styles.removingLimescaleDimming,
                styles.maintainingAndChangingTypo,
              ]}
            >
              All types of utilities, such as electricity, water, gas, etc.
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.servicesProvidedTypo]}>
            Services Exclude
          </Text>
        </View>
        <View
          style={[styles.serviceDetailsItem, styles.serviceDetailsItemPosition]}
        />
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
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432763.png")}
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
            <Text style={[styles.theBestSpecialists, styles.navFlexBox]}>
              The best specialists in maintenance
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
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    height: 24,
    textTransform: "capitalize",
  },
  serviceDetailsItemPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  maintainingAndChangingTypo: {
    marginTop: 8,
    height: 16,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
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
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 134,
    overflow: "hidden",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  equipmentMaintenance: {
    top: 232,
    color: Color.black,
    width: 251,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  profm: {
    textTransform: "uppercase",
  },
  profmOffersAContainer: {
    top: 264,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: Color.grayBlack,
    height: 54,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
    width: 343,
    textAlign: "left",
  },
  pumpMaintenance: {
    width: 329,
    height: 16,
    color: Color.gray,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  maintainingAndChanging: {
    width: 330,
  },
  pumpMaintenanceParent: {
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
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 350,
    height: 168,
    overflow: "hidden",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  removingLimescaleDimming: {
    width: 326,
  },
  frameGroup: {
    top: 526,
    height: 216,
    overflow: "hidden",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  serviceDetailsItem: {
    top: 832,
    height: 63,
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
    marginTop: 4,
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
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    justifyContent: "center",
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

export default ServiceDetails88;
