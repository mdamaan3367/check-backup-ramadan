import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails60 = () => {
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
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View
            style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
          >
            <Text style={styles.inTheEventTypo}>
              In the event of replacing the compressor, dismantling the air
              conditioning unit, or any non-routine maintenance work, adding
              Freon gas will be at the customer's expense.
            </Text>
            <Text style={[styles.airDuctCleaning, styles.inTheEventTypo]}>
              Air duct cleaning is not included in the offer. A separate offer
              will be provided for this service at the customer's expense.
            </Text>
            <Text style={[styles.theCompanyIs, styles.theLayout]}>
              The company is not responsible for any air conditioner spare parts
              lost from the home due to lack of security.
            </Text>
            <Text style={[styles.inTheEvent1, styles.theTypo2]}>
              In the event of replacing a compressor or condenser, replacing an
              outdoor or indoor unit, or replacing the entire unit, the cost of
              the installation fee will be calculated in a separate quote.
            </Text>
            <Text style={[styles.theCompanyIs, styles.theLayout]}>
              The service does not include the provision or maintenance of basic
              utilities such as electricity, water and gas.
            </Text>
          </View>
          <Text style={styles.servicesExclude}>Services Exclude</Text>
        </View>
        <View
          style={[styles.serviceDetailsChild, styles.frameParentPosition]}
        />
        <Text style={[styles.checkingTheLevel, styles.theTypo1]}>
          Checking the level of refrigerant gas (Freon)
        </Text>
        <Text style={[styles.measureTheAmount, styles.measureTheAmountLayout]}>
          Measure the amount of refrigerant gas present in the air conditioning
          system.
        </Text>
        <View
          style={[styles.serviceDetailsItem, styles.measureTheAmountLayout]}
        />
        <View style={[styles.frameGroup, styles.frameParentPosition]}>
          <View
            style={[styles.inTheEventOfReplacingTheParent, styles.thePosition]}
          >
            <Text style={styles.theTypo}>Check the refrigerant gas level</Text>
            <Text style={[styles.fillingTheAir, styles.theTypo]}>
              Filling the air conditioning unit with gas (if necessary)
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
            source={require("../assets/rectangle-432712.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.thePosition]}
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
    position: "absolute",
  },
  thePosition: {
    left: 16,
    position: "absolute",
  },
  inTheEventTypo: {
    height: 54,
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
  theLayout: {
    height: 40,
    textAlign: "left",
  },
  theTypo2: {
    width: 329,
    display: "flex",
    color: Color.gray,
    marginTop: 8,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  theTypo1: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  measureTheAmountLayout: {
    width: 343,
    position: "absolute",
  },
  theTypo: {
    height: 16,
    lineHeight: 16,
    width: 329,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
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
  navBarPosition: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  airDuctCleaning: {
    marginTop: 8,
  },
  theCompanyIs: {
    marginTop: 8,
    width: 329,
    display: "flex",
    color: Color.gray,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    height: 40,
  },
  inTheEvent1: {
    height: 72,
    marginTop: 8,
    textAlign: "left",
    display: "flex",
    color: Color.gray,
  },
  inTheEventOfReplacingTheParent: {
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
    top: 480,
    height: 372,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  serviceDetailsChild: {
    top: 208,
    height: 136,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  checkingTheLevel: {
    top: 232,
    lineHeight: 22,
    color: Color.black,
    width: 251,
    height: 40,
    textAlign: "left",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  measureTheAmount: {
    top: 280,
    color: Color.grayBlack,
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    width: 343,
    left: 16,
  },
  serviceDetailsItem: {
    marginLeft: -171.5,
    top: 877,
    height: 68,
    left: "50%",
    overflow: "hidden",
  },
  fillingTheAir: {
    marginTop: 8,
  },
  frameGroup: {
    top: 352,
    height: 120,
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
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 24,
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

export default ServiceDetails60;
