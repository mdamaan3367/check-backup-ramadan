import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails93 = () => {
  const [frameContainer14Visible, setFrameContainer14Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(true);
  }, []);

  const closeFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(false);
  }, []);

  return (
    <>
      <View style={styles.serviceDetails}>
        <View style={[styles.serviceDetailsChild, styles.servicePosition]} />
        <Text style={[styles.regularCleaning, styles.regularCleaningTypo]}>
          Regular cleaning
        </Text>
        <Text
          style={[styles.profmTeamConsists, styles.homeTypo1]}
        >{`PROFM team consists of skilled and proficient cleaners who excel at their craft They are equipped with the knowledge and experience to meet your specific cleaning requirements effectively
`}</Text>
        <View style={[styles.frameParent, styles.framePosition]}>
          <View
            style={[
              styles.tidyingAndOrganizedRoomsCoParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={styles.tidyingAndOrganized}>
              Tidying and organized rooms convey order and comfort
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Wiping windows, mirrors, and glass
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Mobbing the floors
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Wiping surfaces in kitchens and bathrooms
            </Text>
            <Text
              style={[styles.wipingWindowsMirrors, styles.waterTypo]}
            >{`Empty Waste Basket & Clean Ashtrays`}</Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              General dusting, furniture, and fixtures.
            </Text>
            <Text style={[styles.generalCleaningEquipment, styles.waterTypo]}>
              General cleaning equipment and materials that are used for house
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
            Services provided
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.framePosition]}>
          <View
            style={[
              styles.tidyingAndOrganizedRoomsCoParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={styles.tidyingAndOrganized}>Broom and dustpan</Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Vacuum cleaner
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Rubber Gloves
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Mop
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              Floor Cleaning Cloths
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              All-purpose cleaner
            </Text>
            <Text style={[styles.water, styles.waterTypo]}>Water</Text>
          </View>
          <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
            Equipment used
          </Text>
        </View>
        <View style={[styles.frameContainer, styles.servicePosition]}>
          <View
            style={[
              styles.tidyingAndOrganizedRoomsCoParent,
              styles.webViewbottomPosition,
            ]}
          >
            <Text style={styles.tidyingAndOrganized}>Deep Cleaning</Text>
            <Text
              style={[styles.movingFurnitureOr, styles.movingFurnitureOrTypo]}
            >
              Moving furniture or other heavy objects over twenty-five kgs
            </Text>
            <Text
              style={[
                styles.cleaningOfKnickKnacks,
                styles.movingFurnitureOrTypo,
              ]}
            >
              Cleaning of knick-knacks picture frames, vases, lamps, clocks,
              fruit bowls, linen and any item that may be decorative
            </Text>
            <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
              All types of electricity, water, gas, etc
            </Text>
          </View>
          <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
            Services Include
          </Text>
        </View>
        <View style={[styles.serviceDetailsItem, styles.servicePosition]} />
        <View style={[styles.rectangleParent, styles.navBar1Position]}>
          <Image
            style={[styles.rectangleParent, styles.navBar1Position]}
            resizeMode="cover"
            source={require("../assets/rectangle-4327111.png")}
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
            <Text
              style={styles.cleaningWithSpecialized}
            >{`cleaning with specialized hands

`}</Text>
          </View>
        </View>
        <View style={[styles.navBar, styles.navBarPosition]}>
          <View style={[styles.navBar1, styles.navFlexBox]}>
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
              onPress={openFrameContainer14}
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
      </View>

      <Modal animationType="fade" transparent visible={frameContainer14Visible}>
        <View style={styles.frameContainer14Overlay}>
          <Pressable
            style={styles.frameContainer14Bg}
            onPress={closeFrameContainer14}
          />
          <RegularCleaning9 onClose={closeFrameContainer14} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  servicePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  regularCleaningTypo: {
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
  framePosition: {
    height: 256,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  waterTypo: {
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  movingFurnitureOrTypo: {
    width: 341,
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  navBar1Position: {
    top: 0,
    width: 375,
    position: "absolute",
  },
  navBarPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
    height: 148,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  regularCleaning: {
    top: 232,
    color: Color.black,
    width: 128,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "left",
  },
  profmTeamConsists: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    width: 343,
    height: 68,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  tidyingAndOrganized: {
    height: 16,
    width: 329,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  wipingWindowsMirrors: {
    width: 252,
    height: 16,
  },
  generalCleaningEquipment: {
    height: 32,
    width: 329,
  },
  tidyingAndOrganizedRoomsCoParent: {
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
    top: 364,
  },
  water: {
    height: 16,
    width: 329,
  },
  frameGroup: {
    top: 628,
  },
  movingFurnitureOr: {
    height: 16,
    lineHeight: 16,
  },
  cleaningOfKnickKnacks: {
    lineHeight: 18,
    height: 32,
  },
  frameContainer: {
    top: 892,
    height: 184,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  serviceDetailsItem: {
    top: 1084,
    left: 24,
    width: 333,
    height: 40,
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
  cleaningWithSpecialized: {
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
  frameContainer14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar1: {
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
  navBar: {
    top: 722,
    height: 90,
    position: "absolute",
  },
  serviceDetails: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default ServiceDetails93;
