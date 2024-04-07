import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const HospitalityServices2 = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const [frameContainer27Visible, setFrameContainer27Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  const openFrameContainer27 = useCallback(() => {
    setFrameContainer27Visible(true);
  }, []);

  const closeFrameContainer27 = useCallback(() => {
    setFrameContainer27Visible(false);
  }, []);

  return (
    <>
      <View style={styles.hospitalityServices}>
        <Text style={styles.oneTimeService}>One time service</Text>
        <View style={styles.hospitalityServicesChild} />
        <View style={[styles.navBarParent, styles.navPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
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
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick4.png")}
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
              source={require("../assets/firrzoomout3.png")}
            />
            <Text style={styles.sea}>Sea</Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.rectangleParent, styles.groupShadowBox]}
            onPress={() => navigation.navigate("HospitalityServices3")}
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
                styles.providingCoffeeTeaAndDrinParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.providingCoffeeTea, styles.preparationOfAllTypo]}
              >
                Providing coffee, tea and drinks
              </Text>
              <Text style={[styles.qualifiedStaffToContainer, styles.helpTypo]}>
                <Text
                  style={styles.qualifiedStaffTo}
                >{`Qualified staff to serve drinks and food to guests in a professional and polite manner
`}</Text>
                <Text style={styles.blankLine}> </Text>
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436446.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("RegularCleaning7")}
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
                styles.providingCoffeeTeaAndDrinParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.preparationOfAll, styles.preparationOfAllTypo]}
              >
                Preparation of all soft drinks
              </Text>
              <Text style={[styles.qualifiedStaffPrepare, styles.helpTypo]}>
                Qualified staff prepare and serve drinks and food to guests in a
                professional and polite manner
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-4364.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("RegularCleaning6")}
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
                styles.providingCoffeeTeaAndDrinParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[
                  styles.cleanlinessOfKitchen,
                  styles.preparationOfAllTypo,
                ]}
              >
                Cleanliness Of Kitchen Utensils
              </Text>
              <Text style={[styles.weHelpYou, styles.helpTypo]}>
                We help you clean kitchen utensils for food safety and an
                enjoyable cooking experience.
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-43641.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("RegularCleaning5")}
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
                styles.providingCoffeeTeaAndDrinParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.receptionistServices, styles.weHelpYou1Typo]}
              >
                Receptionist Services
              </Text>
              <Text style={[styles.weHelpYou1, styles.weHelpYou1Typo]}>
                We help you appear professional and improve efficiency and
                organization of work
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-43642.png")}
            />
          </Pressable>
        </View>
        <View style={styles.navPosition}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
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
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer27}
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
          <View style={[styles.webViewbottom1, styles.webPosition]}>
            <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.hospitalityServicesInner, styles.childPosition]}>
          <View style={[styles.hospitalityServicesInner, styles.childPosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <View style={[styles.rectangleParent2, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={styles.profmLogo1111}
                resizeMode="cover"
                source={require("../assets/profm-logo1-1-1-17.png")}
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
            <Text style={styles.hospitalityServices1}>
              Hospitality services
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

      <Modal animationType="fade" transparent visible={frameContainer27Visible}>
        <View style={styles.frameContainer27Overlay}>
          <Pressable
            style={styles.frameContainer27Bg}
            onPress={closeFrameContainer27}
          />
          <RegularCleaning9 onClose={closeFrameContainer27} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  navPosition: {
    height: 90,
    top: 722,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
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
    width: 375,
    marginLeft: -187.5,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
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
  preparationOfAllTypo: {
    height: 40,
    color: Color.whait,
    fontWeight: "700",
    lineHeight: 22,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  helpTypo: {
    marginTop: 8,
    height: 45,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  weHelpYou1Typo: {
    width: 191,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupItemLayout: {
    height: 48,
    width: 160,
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
  hospitalityServicesChild: {
    marginLeft: -164.5,
    top: 873,
    width: 329,
    overflow: "hidden",
    height: 34,
    left: "50%",
    position: "absolute",
  },
  home: {
    fontWeight: "300",
    marginTop: 4,
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
    marginTop: 4,
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
    marginLeft: -187.5,
    left: "50%",
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    height: 34,
  },
  webViewbottom: {
    backgroundColor: Color.colorGray_100,
  },
  navBarParent: {
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
    width: 343,
    marginLeft: -171.5,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 343,
  },
  providingCoffeeTea: {
    width: 155,
  },
  qualifiedStaffTo: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  qualifiedStaffToContainer: {
    width: 176,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 45,
    color: Color.colorGainsboro_400,
  },
  providingCoffeeTeaAndDrinParent: {
    top: 22,
  },
  frameItem: {
    marginTop: -70,
    top: "50%",
    right: 0,
    width: 139,
    height: 140,
    position: "absolute",
  },
  rectangleParent: {
    height: 140,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    width: 343,
    overflow: "hidden",
  },
  preparationOfAll: {
    width: 161,
  },
  qualifiedStaffPrepare: {
    width: 185,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 45,
    color: Color.colorGainsboro_400,
  },
  rectangleShadowBox: {
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
    width: 343,
    overflow: "hidden",
  },
  cleanlinessOfKitchen: {
    width: 170,
  },
  weHelpYou: {
    width: 180,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 45,
    color: Color.colorGainsboro_400,
  },
  receptionistServices: {
    color: Color.whait,
    lineHeight: 22,
    width: 191,
    fontWeight: "700",
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  weHelpYou1: {
    marginTop: 8,
    height: 45,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    lineHeight: 16,
  },
  frameParent: {
    top: 240,
    height: 572,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  frameContainer27Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer27Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  webViewbottom1: {
    backgroundColor: Color.whait,
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
    left: "50%",
    position: "absolute",
  },
  rectangleParent2: {
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
  hospitalityServices1: {
    marginLeft: -74.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  hospitalityServicesInner: {
    height: 124,
    width: 375,
  },
  hospitalityServices: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default HospitalityServices2;
