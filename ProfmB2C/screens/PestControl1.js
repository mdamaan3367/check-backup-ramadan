import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PestControl1 = () => {
  const [frameContainer10Visible, setFrameContainer10Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(true);
  }, []);

  const closeFrameContainer10 = useCallback(() => {
    setFrameContainer10Visible(false);
  }, []);

  return (
    <>
      <View style={styles.pestControl}>
        <Text style={styles.oneTimeService}>One time service</Text>
        <View style={[styles.pestControlChild, styles.searchLayout]} />
        <Pressable
          style={[styles.rectangleParent, styles.frameLayout]}
          onPress={() => navigation.navigate("CleaningAndSterilizingTheP61")}
        >
          <LinearGradient
            style={[styles.frameChild, styles.frameLayout]}
            locations={[0, 1]}
            colors={["#004c77", "#0386cf"]}
            useAngle={true}
            angle={90}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-436418.png")}
          />
          <View style={styles.regularPestControlParent}>
            <Text style={styles.regularPestControlContainer}>
              <Text style={styles.regularPestControlContainer1}>
                <Text style={styles.regularPest}>Regular pest</Text>
                <Text style={styles.textTypo}>{` `}</Text>
                <Text style={styles.regularPest}>control</Text>
              </Text>
            </Text>
            <Text style={[styles.eliminateAWide, styles.homeTypo1]}>
              Eliminate a wide range of common insects such as cockroaches,
              ants, spiders, flies, mosquitoes and rodents
            </Text>
          </View>
        </Pressable>
        <View style={[styles.search, styles.searchPosition]}>
          <View style={styles.fiRrZoomOutParent}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout.png")}
            />
            <Text style={styles.sea}>Sea</Text>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navBarParentLayout]}>
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
              onPress={openFrameContainer10}
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
          <View style={[styles.webViewbottom, styles.navBarParentLayout]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.pestControlInner, styles.navBarParentLayout]}>
          <View style={[styles.pestControlInner, styles.navBarParentLayout]}>
            <View style={[styles.groupChild, styles.navBarPosition]} />
            <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
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
            <Text style={[styles.pestControl1, styles.textTypo]}>
              pest control
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer10Visible}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeFrameContainer10}
          />
          <RegularCleaning9 onClose={closeFrameContainer10} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    width: 343,
    position: "absolute",
  },
  frameLayout: {
    height: 140,
    position: "absolute",
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  searchPosition: {
    marginLeft: -171.5,
    left: "50%",
    overflow: "hidden",
  },
  navBarParentLayout: {
    width: 375,
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
    backgroundColor: Color.whait,
    width: 375,
    top: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  oneTimeService: {
    top: 208,
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 132,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    left: 16,
    position: "absolute",
  },
  pestControlChild: {
    top: 2123,
    height: 74,
    overflow: "hidden",
    left: 16,
  },
  frameChild: {
    backgroundColor: Color.color,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    height: 140,
    width: 343,
  },
  frameItem: {
    right: 0,
    bottom: 0,
    width: 139,
  },
  regularPest: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  regularPestControlContainer1: {
    width: "100%",
  },
  regularPestControlContainer: {
    lineHeight: 22,
    color: Color.whait,
    width: 175,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  eliminateAWide: {
    color: Color.colorGainsboro_400,
    width: 184,
    height: 63,
    marginTop: 8,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
  },
  regularPestControlParent: {
    top: 22,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 240,
    backgroundColor: Color.colorSkyblue,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    height: 140,
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    overflow: "hidden",
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
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    top: 148,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    left: "50%",
    width: 343,
    position: "absolute",
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
  frameContainer10Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer10Bg: {
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
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    width: 375,
    top: 0,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
    flexDirection: "row",
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
    alignItems: "center",
  },
  webViewbottom: {
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
  },
  navBarParent: {
    top: 722,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
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
  pestControl1: {
    marginLeft: -45.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textAlign: "center",
    left: "50%",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
  },
  pestControlInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  pestControl: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default PestControl1;
