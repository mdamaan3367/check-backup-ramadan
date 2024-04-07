import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails7 from "../components/ViewDetails7";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const DeepCleaning4 = () => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [frameContainer22Visible, setFrameContainer22Visible] = useState(false);
  const navigation = useNavigation();

  const openViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(true);
  }, []);

  const closeViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(false);
  }, []);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(true);
  }, []);

  const closeFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(false);
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
          source={require("../assets/group-2387381.png")}
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
          <Text style={[styles.deepCleaning1, styles.deepCleaning1FlexBox]}>
            deep cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.groupChildPosition]}
            onPress={() => navigation.navigate("ServiceDetails48")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.visitsTypo]}>
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
        <Image
          style={[styles.profmLogo1111, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-16.png")}
        />
        <View style={[styles.deepCleaningInner, styles.deepPosition]}>
          <View style={styles.deepCleaning1Position}>
            <View>
              <View
                style={[styles.oneYearSubscriptionParent, styles.parentFlexBox]}
              >
                <Text
                  style={[
                    styles.oneYearSubscription,
                    styles.deepCleaning1FlexBox,
                  ]}
                >
                  One-year subscription
                </Text>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.review, styles.reviewLayout]}>
                    3.8 (90 Review)
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/user2.png")}
                  />
                  <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                    <Text style={styles.textTypo}>1</Text>
                    <Text style={styles.domesticWorkers1}>
                      {" "}
                      domestic workers
                    </Text>
                  </Text>
                </View>
                <View style={styles.frameWrapper}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/calendar.png")}
                    />
                    <Text style={[styles.visits, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>48</Text>
                      <Text style={styles.domesticWorkers1}>{` visits `}</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.clockParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/clock2.png")}
                  />
                  <Text
                    style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                  >
                    <Text style={[styles.text2, styles.textTypo]}>{`4 `}</Text>
                    <Text style={styles.hoursPerVisit}>hours per visit</Text>
                  </Text>
                </View>
              </View>
              <Pressable
                style={styles.viewDetails}
                onPress={openViewDetailsText}
              >
                <Text style={[styles.viewDetails1, styles.reviewLayout]}>
                  View details
                </Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent2, styles.parentFlexBox]}>
              <View style={styles.frameGroup}>
                <Text style={styles.sar}>
                  <Text style={styles.sar1}>{`4080 SAR `}</Text>
                  <Text style={styles.text3}>{` `}</Text>
                </Text>
                <Text style={styles.sar2}>
                  <Text style={styles.sar1}>{`4400SAR `}</Text>
                  <Text style={styles.text3}>{` `}</Text>
                </Text>
              </View>
              <Pressable
                style={styles.groupChildLayout}
                onPress={openGroupContainer}
              >
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navPosition]}>
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
              <View style={styles.bookNowFlexBox}>
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
              onPress={openFrameContainer22}
            >
              <View style={styles.bookNowFlexBox}>
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
      </View>

      <Modal animationType="fade" transparent visible={viewDetailsTextVisible}>
        <View style={styles.viewDetailsTextOverlay}>
          <Pressable
            style={styles.viewDetailsTextBg}
            onPress={closeViewDetailsText}
          />
          <ViewDetails7 onClose={closeViewDetailsText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <RegularCleaning9 onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer22Visible}>
        <View style={styles.frameContainer22Overlay}>
          <Pressable
            style={styles.frameContainer22Bg}
            onPress={closeFrameContainer22}
          />
          <RegularCleaning9 onClose={closeFrameContainer22} />
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
  deepCleaning1FlexBox: {
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
  },
  visitsTypo: {
    marginLeft: 8,
    height: 16,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  reviewLayout: {
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  bookNowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  navBarChildLayout: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
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
    height: 26,
    width: 26,
    top: 43,
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
    width: 344,
    height: 32,
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
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
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontWeight: "300",
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
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  oneYearSubscription: {
    fontSize: FontSize.size_sm,
    width: 147,
    height: 24,
    alignItems: "center",
    color: Color.black,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
  },
  review: {
    fontSize: FontSize.size_3xs,
    width: 71,
    marginLeft: 4,
    alignItems: "center",
    textAlign: "left",
    color: Color.grayBlack,
    height: 16,
    fontWeight: "300",
  },
  oneYearSubscriptionParent: {
    width: 343,
  },
  domesticWorkers1: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  domesticWorkers: {
    width: 246,
    lineHeight: 16,
  },
  visits: {
    width: 48,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  frameWrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  text2: {
    textTransform: "capitalize",
  },
  hoursPerVisit: {
    textTransform: "lowercase",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  hoursPerVisitContainer: {
    width: 97,
    lineHeight: 16,
  },
  clockParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: 8,
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
    fontSize: FontSize.med_size,
    height: 16,
  },
  viewDetails: {
    marginTop: 8,
  },
  sar1: {
    textTransform: "capitalize",
  },
  text3: {
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
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    justifyContent: "center",
  },
  frameParent2: {
    width: 352,
    marginTop: 16,
  },
  deepCleaning1Position: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  deepCleaningInner: {
    top: 392,
    height: 216,
    overflow: "hidden",
    backgroundColor: Color.whait,
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
  },
  history: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  navBarChild: {
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
  frameContainer22Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer22Bg: {
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
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  navBarParent: {
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

export default DeepCleaning4;
