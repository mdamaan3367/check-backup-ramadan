import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails51 from "../components/ViewDetails5";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DeepCleaning1 = () => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [viewDetailsText1Visible, setViewDetailsText1Visible] = useState(false);
  const navigation = useNavigation();

  const openViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(true);
  }, []);

  const closeViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(false);
  }, []);

  const openViewDetailsText1 = useCallback(() => {
    setViewDetailsText1Visible(true);
  }, []);

  const closeViewDetailsText1 = useCallback(() => {
    setViewDetailsText1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.deepCleaning}>
        <Image
          style={[styles.deepCleaningChild, styles.deepPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-432721.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-2387371.png")}
          />
        </Pressable>
        <Image
          style={[styles.deepCleaningItem, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/group-238738.png")}
        />
        <View
          style={[styles.beyondYourRoutineWeDeepCParent, styles.deepPosition]}
        >
          <Text style={styles.beyondYourRoutineContainer}>
            <Text
              style={styles.beyondYourRoutine}
            >{`Beyond your routine, we deep clean: furnishings, overlooked corners, the whole works.

`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={[styles.deepCleaning1, styles.cleaningFlexBox]}>
            deep cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.groupChildPosition]}
            onPress={() => navigation.navigate("ServiceDetails38")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.domesticTypo]}>
                Service details
              </Text>
            </View>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.frameContainer, styles.framePosition]}>
          <View
            style={[styles.cleaningFor4HoursParent, styles.cleaningPosition]}
          >
            <Text style={[styles.cleaningFor4, styles.cleaningFlexBox]}>
              Cleaning for 4 hours
            </Text>
            <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.review, styles.reviewTypo]}>
                3.9 (150 Review)
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/user3.png")}
                />
                <Text style={[styles.domesticWorkers, styles.domesticTypo]}>
                  2 domestic workers
                </Text>
              </View>
              <View style={styles.home2Parent}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/home21.png")}
                />
                <Text
                  style={[styles.mediumHomeCleaning, styles.domesticTypo]}
                >{`Medium home cleaning

`}</Text>
              </View>
            </View>
            <Pressable style={styles.viewDetails} onPress={openViewDetailsText}>
              <Text style={[styles.viewDetails1, styles.bookNowTypo]}>
                View details
              </Text>
            </Pressable>
          </View>
          <View style={styles.frameParent2}>
            <View style={styles.frameGroup}>
              <Text style={styles.sar}>
                <Text style={styles.sar1}>{`240 SAR `}</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
              <Text style={styles.sar2}>
                <Text style={styles.sar1}>{`300 SAR `}</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </View>
            <Pressable
              style={styles.groupChildLayout}
              onPress={() => navigation.navigate("PinYourLocation19")}
            >
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Text style={[styles.bookNow, styles.vectorParentFlexBox]}>
                Book Now
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.framePosition]}>
          <View
            style={[styles.cleaningFor4HoursParent, styles.cleaningPosition]}
          >
            <Text style={[styles.cleaningFor4, styles.cleaningFlexBox]}>
              Cleaning for 6 hours
            </Text>
            <View style={[styles.vectorGroup, styles.vectorParentFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.review1, styles.reviewTypo]}>
                3.8 (90 Review)
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/user3.png")}
                />
                <Text style={[styles.domesticWorker, styles.domesticTypo]}>
                  3 domestic worker
                </Text>
              </View>
              <View style={styles.home2Parent}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/home21.png")}
                />
                <Text
                  style={[styles.mediumHomeCleaning, styles.domesticTypo]}
                >{`Large home cleaning

`}</Text>
              </View>
            </View>
            <Pressable
              style={styles.viewDetails}
              onPress={openViewDetailsText1}
            >
              <Text style={[styles.viewDetails1, styles.bookNowTypo]}>
                View details
              </Text>
            </Pressable>
          </View>
          <View style={styles.frameParent2}>
            <View style={styles.frameGroup}>
              <Text style={styles.sar}>
                <Text style={styles.sar1}>{`447 SAR `}</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
              <Text style={styles.sar2}>
                <Text style={styles.sar1}>{`280 SAR `}</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </View>
            <Pressable
              style={styles.groupChildLayout}
              onPress={() => navigation.navigate("PinYourLocation19")}
            >
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Text style={[styles.bookNow, styles.vectorParentFlexBox]}>
                Book Now
              </Text>
            </Pressable>
          </View>
        </View>
        <Image
          style={[styles.profmLogo1111, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-16.png")}
        />
        <View style={styles.deepCleaningInner} />
        <View style={[styles.navBarSignUpParent, styles.navPosition]}>
          <View style={[styles.navBarSignUp, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarSignUpInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.home2ContainerSpaceBlock}>
                <Image
                  style={styles.home2Icon2}
                  resizeMode="cover"
                  source={require("../assets/home221.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View
              style={[styles.navBarSignUpChild, styles.framePressableLayout]}
            >
              <View style={styles.vectorParentFlexBox}>
                <Image
                  style={styles.home2Icon2}
                  resizeMode="cover"
                  source={require("../assets/clock.png")}
                />
                <Text style={[styles.history, styles.homeTypo]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.framePressableLayout}
              onPress={() => navigation.navigate("Bookings")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.home2Icon2}
                  resizeMode="cover"
                  source={require("../assets/calendartick21.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.framePressableLayout}
              onPress={() => navigation.navigate("Profile")}
            >
              <View style={styles.vectorParentFlexBox}>
                <Image
                  style={styles.home2Icon2}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.framePressableLayout}
              onPress={() => navigation.navigate("Menu")}
            >
              <View
                style={[
                  styles.textalignLeftParent,
                  styles.home2ContainerSpaceBlock,
                ]}
              >
                <Image
                  style={styles.home2Icon2}
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
      </View>

      <Modal animationType="fade" transparent visible={viewDetailsTextVisible}>
        <View style={styles.viewDetailsTextOverlay}>
          <Pressable
            style={styles.viewDetailsTextBg}
            onPress={closeViewDetailsText}
          />
          <ViewDetails51 onClose={closeViewDetailsText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText1Visible}>
        <View style={styles.viewDetailsText1Overlay}>
          <Pressable
            style={styles.viewDetailsText1Bg}
            onPress={closeViewDetailsText1}
          />
          <ViewDetails51 onClose={closeViewDetailsText1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  deepPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 26,
    width: 26,
    top: 43,
    position: "absolute",
  },
  cleaningFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
  },
  domesticTypo: {
    marginLeft: 8,
    height: 16,
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  framePosition: {
    height: 192,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  cleaningPosition: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  vectorParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  reviewTypo: {
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  bookNowTypo: {
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  framePressableLayout: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  home2ContainerSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  deepCleaningChild: {
    top: 0,
    height: 208,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 16,
  },
  deepCleaningItem: {
    left: 333,
  },
  beyondYourRoutine: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  beyondYourRoutineContainer: {
    height: 32,
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    width: 344,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    top: 56,
    left: 16,
    position: "absolute",
  },
  deepCleaning1: {
    width: 128,
    height: 24,
    alignItems: "center",
    color: Color.black,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 24,
    left: 16,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
  },
  serviceDetails: {
    width: 120,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 7,
    height: 12,
    marginLeft: 170,
  },
  frameParent: {
    marginLeft: -171.5,
    top: 112,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkgray_400,
    padding: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
  },
  beyondYourRoutineWeDeepCParent: {
    top: 208,
    height: 176,
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
  cleaningFor4: {
    fontSize: FontSize.size_sm,
    width: 154,
    height: 24,
    alignItems: "center",
    color: Color.black,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  review: {
    width: 75,
  },
  vectorParent: {
    marginLeft: 96,
    flexDirection: "row",
  },
  cleaningFor4HoursParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  domesticWorkers: {
    width: 246,
    lineHeight: 16,
  },
  mediumHomeCleaning: {
    width: 264,
    lineHeight: 16,
  },
  home2Parent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  viewDetailsTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  viewDetails1: {
    color: Color.praimary1,
    width: 72,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
  },
  viewDetails: {
    marginTop: 8,
  },
  frameView: {
    top: 56,
    left: 16,
    position: "absolute",
  },
  sar1: {
    textTransform: "capitalize",
  },
  text: {
    textTransform: "lowercase",
  },
  sar: {
    fontWeight: "700",
    color: Color.red,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2: {
    textDecoration: "line-through",
    color: Color.gray,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  groupChild: {
    marginTop: -16,
    marginLeft: -44,
    top: "50%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary1,
    left: "50%",
    position: "absolute",
  },
  bookNow: {
    top: 8,
    left: 17,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    width: 55,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
    position: "absolute",
  },
  frameParent2: {
    top: 136,
    width: 343,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  frameContainer: {
    top: 392,
  },
  review1: {
    width: 71,
  },
  vectorGroup: {
    marginLeft: 100,
    flexDirection: "row",
  },
  domesticWorker: {
    width: 218,
    lineHeight: 16,
  },
  viewDetailsText1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent3: {
    top: 592,
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  deepCleaningInner: {
    top: 818,
    height: 59,
    width: 344,
    overflow: "hidden",
    left: 16,
    position: "absolute",
  },
  home2Icon2: {
    width: 24,
    height: 24,
  },
  home: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  navBarSignUpInner: {
    width: 93,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    bottom: 34,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: Color.whait,
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
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
  },
  deepCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default DeepCleaning1;
