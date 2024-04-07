import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails94 = () => {
  const [frameContainer15Visible, setFrameContainer15Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(true);
  }, []);

  const closeFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(false);
  }, []);

  return (
    <>
      <View style={styles.serviceDetails}>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.electricalLayout}>
              <View style={[styles.electricalWorksChild, styles.iconLayout]} />
              <View style={styles.frameGroup}>
                <View>
                  <Text
                    style={[
                      styles.checkNetworkConnections,
                      styles.checkNetworkConnectionsTypo,
                    ]}
                  >
                    Check network connections
                  </Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View style={[styles.electricalWorks1, styles.electricalLayout]}>
              <View style={[styles.electricalWorksChild, styles.iconLayout]} />
              <View style={styles.frameGroup}>
                <View>
                  <Text
                    style={[
                      styles.distributionOfElectrical,
                      styles.checkNetworkConnectionsTypo,
                    ]}
                  >
                    Distribution of electrical loads
                  </Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View style={[styles.electricalWorks1, styles.electricalLayout]}>
              <View style={[styles.electricalWorksChild, styles.iconLayout]} />
              <View style={styles.frameGroup}>
                <View>
                  <Text
                    style={[
                      styles.inspectionAndMaintenance,
                      styles.checkNetworkConnectionsTypo,
                    ]}
                  >
                    Inspection and maintenance of electrical boxes
                  </Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.serviceDetailsChild, styles.navPosition]} />
        <Text style={[styles.electricalWorks3, styles.electricalWorks3Typo]}>
          Electrical Works
        </Text>
        <Text style={styles.electricalWorksAre}>
          Electrical works are a group of services provided to install, maintain
          and repair electrical systems in buildings and facilities.
        </Text>
        <View style={[styles.navBarParent, styles.navPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home11")}
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
              onPress={openFrameContainer15}
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
          <View style={[styles.webViewbottom, styles.navPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432783.png")}
          />
          <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group-2387371.png")}
            />
          </Pressable>
          <View style={styles.parent}>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/3-1-14.png")}
            />
            <Text
              style={[styles.theBestSpecialized, styles.electricalWorks3Typo]}
            >
              The best specialized technicians
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer15Visible}>
        <View style={styles.frameContainer15Overlay}>
          <Pressable
            style={styles.frameContainer15Bg}
            onPress={closeFrameContainer15}
          />
          <RegularCleaning9 onClose={closeFrameContainer15} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  checkNetworkConnectionsTypo: {
    height: 16,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    alignItems: "center",
  },
  electricalLayout: {
    height: 68,
    width: 375,
  },
  navPosition: {
    left: "50%",
    marginLeft: -187.5,
  },
  electricalWorks3Typo: {
    fontSize: FontSize.size_base,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    color: Color.gray,
    marginTop: 4,
    fontSize: FontSize.med_size,
    textAlign: "left",
    lineHeight: 16,
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
  electricalWorksChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  checkNetworkConnections: {
    width: 211,
  },
  serviceDetails1: {
    width: 81,
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupIcon: {
    width: 12,
    height: 7,
  },
  frameGroup: {
    top: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 343,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  distributionOfElectrical: {
    width: 204,
  },
  electricalWorks1: {
    marginTop: 8,
  },
  inspectionAndMaintenance: {
    width: 309,
  },
  frameChild: {
    width: 306,
    height: 51,
    marginTop: 40,
    overflow: "hidden",
  },
  frameParent: {
    top: 328,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 112,
    overflow: "hidden",
    backgroundColor: Color.lightBGPrimary,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  electricalWorks3: {
    top: 232,
    lineHeight: 21,
    color: Color.black,
    width: 251,
    height: 24,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  electricalWorksAre: {
    top: 264,
    height: 32,
    color: Color.grayBlack,
    lineHeight: 18,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    width: 343,
    left: 16,
    position: "absolute",
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "300",
    color: Color.gray,
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
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer15Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer15Bg: {
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
    top: 0,
    width: 375,
    position: "absolute",
    left: "50%",
    marginLeft: -187.5,
    flexDirection: "row",
    backgroundColor: Color.lightBGPrimary,
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
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    backgroundColor: Color.lightBGPrimary,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  navBarParent: {
    top: 722,
    height: 90,
    width: 375,
    marginLeft: -187.5,
    position: "absolute",
  },
  rectangleParent: {
    height: 208,
    left: 0,
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: 16,
    position: "absolute",
  },
  icon1: {
    width: 200,
    height: 76,
  },
  theBestSpecialized: {
    color: Color.lightBGPrimary,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    height: 24,
  },
  parent: {
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

export default ServiceDetails94;
