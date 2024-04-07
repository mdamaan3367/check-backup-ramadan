import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const ElectricalWorks1 = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const [frameContainer25Visible, setFrameContainer25Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  const openFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(true);
  }, []);

  const closeFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(false);
  }, []);

  return (
    <>
      <View style={styles.electricalWorks}>
        <Text style={styles.oneTimeService}>One time service</Text>
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
                  source={require("../assets/home24.png")}
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
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.rectangleParent, styles.frameChildLayout]}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP54")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-43649.png")}
            />
            <View
              style={[
                styles.checkNetworkConnectionsParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.checkNetworkConnections, styles.electricalTypo1]}
              >
                Check network connections
              </Text>
              <Text
                style={[
                  styles.checkNetworkConnectionsContainer,
                  styles.distributingElectricalLoadsTypo,
                ]}
              >
                <Text
                  style={styles.checkNetworkConnections1}
                >{`Check network connections and identify any problems or errors
`}</Text>
                <Text style={styles.blankLine}> </Text>
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP53")}
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
                styles.checkNetworkConnectionsParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.distributionOfElectrical, styles.electricalTypo]}
              >
                Distribution of electrical loads
              </Text>
              <Text
                style={[
                  styles.distributingElectricalLoads,
                  styles.electricalTypo,
                ]}
              >
                Distributing electrical loads evenly on the electrical network
              </Text>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-436410.png")}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("CleaningAndSterilizingTheP52")}
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
                styles.checkNetworkConnectionsParent,
                styles.arrow21Position,
              ]}
            >
              <Text
                style={[styles.electricalBoxInspection, styles.electricalTypo1]}
              >{`Electrical box inspection & maintenance`}</Text>
              <Text style={styles.regularInspectionAnd}>
                Regular inspection and maintenance of electrical boxes and
                distributors
              </Text>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-436411.png")}
            />
          </Pressable>
        </View>
        <View style={styles.search}>
          <View style={[styles.fiRrZoomOutParent, styles.homeIndicatorFlexBox]}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout.png")}
            />
            <Text style={styles.sea}>Sea</Text>
          </View>
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
                  source={require("../assets/home24.png")}
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
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer25}
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
        <View style={[styles.electricalWorksInner, styles.childPosition]}>
          <View style={[styles.electricalWorksInner, styles.childPosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <View style={[styles.rectangleParent1, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.profmLogo1111, styles.navBarPosition]}
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
            <Text style={styles.electricalWorks1}>Electrical Works</Text>
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

      <Modal animationType="fade" transparent visible={frameContainer25Visible}>
        <View style={styles.frameContainer25Overlay}>
          <Pressable
            style={styles.frameContainer25Bg}
            onPress={closeFrameContainer25}
          />
          <RegularCleaning9 onClose={closeFrameContainer25} />
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
    left: "50%",
    marginLeft: -187.5,
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
    height: 34,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameChildLayout: {
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  childPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItemLayout: {
    width: 139,
    right: 0,
    height: 140,
    position: "absolute",
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  electricalTypo1: {
    height: 40,
    color: Color.whait,
    lineHeight: 22,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  distributingElectricalLoadsTypo: {
    marginTop: 8,
    height: 45,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  electricalTypo: {
    width: 170,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupItemLayout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  navBarPosition: {
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
    width: 128,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    left: 16,
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
    left: "50%",
    position: "absolute",
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
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
  },
  webViewbottom: {
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  navBarParent: {
    display: "none",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    borderRadius: Border.br_3xs,
    width: 343,
    left: 0,
  },
  frameItem: {
    bottom: 0,
  },
  checkNetworkConnections: {
    width: 155,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  checkNetworkConnections1: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  checkNetworkConnectionsContainer: {
    width: 173,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  checkNetworkConnectionsParent: {
    top: 22,
  },
  rectangleParent: {
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    height: 140,
    borderRadius: Border.br_3xs,
  },
  distributionOfElectrical: {
    height: 40,
    color: Color.whait,
    lineHeight: 22,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  distributingElectricalLoads: {
    marginTop: 8,
    height: 45,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    lineHeight: 16,
  },
  rectangleIcon: {
    marginTop: -70,
    top: "50%",
  },
  rectangleShadowBox: {
    marginTop: 16,
    overflow: "hidden",
    height: 140,
    width: 343,
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
  },
  electricalBoxInspection: {
    width: 185,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  regularInspectionAnd: {
    width: 140,
    height: 48,
    marginTop: 8,
    color: Color.colorGainsboro_400,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent: {
    top: 240,
    height: 452,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
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
    overflow: "hidden",
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  frameContainer25Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer25Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  webViewbottom1: {
    height: 34,
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
  },
  rectangleParent1: {
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
  electricalWorks1: {
    marginLeft: -59.5,
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
  electricalWorksInner: {
    height: 124,
    width: 375,
  },
  electricalWorks: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ElectricalWorks1;
