import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails6 from "../components/ViewDetails6";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FacadeCleaning1 = () => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [frameContainer24Visible, setFrameContainer24Visible] = useState(false);
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

  const openFrameContainer24 = useCallback(() => {
    setFrameContainer24Visible(true);
  }, []);

  const closeFrameContainer24 = useCallback(() => {
    setFrameContainer24Visible(false);
  }, []);

  return (
    <>
      <View style={styles.facadeCleaning}>
        <Image
          style={[
            styles.facadeCleaningChild,
            styles.facadeCleaningChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-432772.png")}
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
          style={[styles.facadeCleaningItem, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/group-2387381.png")}
        />
        <View style={[styles.theProcessOfRemovingDirtParent, styles.navBarBg]}>
          <Text style={styles.theProcessOfContainer}>
            <Text
              style={styles.theProcessOf}
            >{`The process of removing dirt, dust, and stains from the exterior surfaces of buildings.

`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={[styles.facadeCleaning1, styles.detailsTypo]}>
            Facade cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.childPosition]}
            onPress={() => navigation.navigate("ServiceDetails47")}
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
          style={[styles.profmLogo1111, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-16.png")}
        />
        <View style={styles.facadeCleaningInner} />
        <View style={[styles.frameView, styles.navPosition]}>
          <View style={[styles.frameWrapper, styles.navBarBg]}>
            <View style={styles.frameContainerPosition}>
              <View>
                <View style={styles.parentFlexBox}>
                  <Text
                    style={[styles.oneYearSubscription, styles.detailsTypo]}
                  >
                    One-year subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsTypo]}>
                      4.9 (80 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/home22.png")}
                  />
                  <Text
                    style={[styles.largeBuildingCleaning, styles.visitsTypo]}
                  >
                    Large building cleaning
                  </Text>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorker, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>4</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic worker
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        <Text style={styles.text1}>
                          <Text style={styles.textTypo}>48</Text>
                        </Text>
                        <Text style={styles.domesticWorker1}>
                          <Text style={styles.text1}>{` `}</Text>
                          <Text style={styles.visits2}>visits</Text>
                          <Text style={styles.text1}>{` `}</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/clock2.png")}
                  />
                  <Text
                    style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                  >
                    <Text style={[styles.text5, styles.textTypo]}>{`4 `}</Text>
                    <Text style={styles.hoursPerVisit}>hours per visit</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText}
                >
                  <Text style={[styles.viewDetails1, styles.detailsTypo]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.parentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`25850 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`27000 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
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
        </View>
        <View style={[styles.facadeCleaningChild1, styles.childPosition]} />
        <View style={[styles.navBarParent, styles.navPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.home2GroupSpaceBlock}>
                <Image
                  style={styles.home2Icon1}
                  resizeMode="cover"
                  source={require("../assets/home24.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.home2Icon1}
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
                  style={styles.home2Icon1}
                  resizeMode="cover"
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer24}
            >
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.home2Icon1}
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
                style={[
                  styles.textalignLeftParent,
                  styles.home2GroupSpaceBlock,
                ]}
              >
                <Image
                  style={styles.home2Icon1}
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
          <ViewDetails6 onClose={closeViewDetailsText} />
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

      <Modal animationType="fade" transparent visible={frameContainer24Visible}>
        <View style={styles.frameContainer24Overlay}>
          <Pressable
            style={styles.frameContainer24Bg}
            onPress={closeFrameContainer24}
          />
          <RegularCleaning9 onClose={closeFrameContainer24} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  facadeCleaningChildPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 26,
    width: 26,
    top: 43,
    position: "absolute",
  },
  navBarBg: {
    backgroundColor: Color.whait,
    width: 375,
  },
  detailsTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
  },
  visitsTypo: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  bookNowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  home2GroupSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  facadeCleaningChild: {
    top: 0,
    height: 208,
    width: 375,
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
  facadeCleaningItem: {
    left: 333,
  },
  theProcessOf: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  theProcessOfContainer: {
    height: 32,
    width: 344,
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    top: 56,
    left: 16,
    position: "absolute",
  },
  facadeCleaning1: {
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
    height: 16,
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
  theProcessOfRemovingDirtParent: {
    top: 208,
    height: 176,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  facadeCleaningInner: {
    top: 818,
    height: 59,
    width: 344,
    overflow: "hidden",
    left: 16,
    position: "absolute",
  },
  oneYearSubscription: {
    fontSize: FontSize.size_sm,
    width: 161,
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
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.grayBlack,
    display: "flex",
    fontWeight: "300",
  },
  largeBuildingCleaning: {
    width: 264,
    height: 16,
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  home2Parent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  domesticWorker1: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  domesticWorker: {
    lineHeight: 16,
  },
  text1: {
    textTransform: "capitalize",
  },
  visits2: {
    textTransform: "lowercase",
  },
  visits: {
    width: 52,
    height: 16,
    lineHeight: 16,
  },
  frameWrapper1: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent2: {
    marginTop: 8,
  },
  text5: {
    textTransform: "capitalize",
  },
  hoursPerVisit: {
    textTransform: "lowercase",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  hoursPerVisitContainer: {
    width: 97,
    height: 16,
    lineHeight: 16,
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
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    display: "flex",
  },
  viewDetails: {
    marginTop: 8,
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
  frameParent3: {
    marginTop: 16,
  },
  frameContainerPosition: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  frameWrapper: {
    height: 240,
    overflow: "hidden",
  },
  frameView: {
    top: 392,
  },
  facadeCleaningChild1: {
    marginLeft: -163.5,
    top: 1689,
    width: 327,
    height: 36,
    overflow: "hidden",
  },
  home2Icon1: {
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
  frameContainer24Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer24Bg: {
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
    position: "absolute",
    flexDirection: "row",
    backgroundColor: Color.whait,
    width: 375,
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
    width: 375,
  },
  navBarParent: {
    bottom: 0,
    height: 90,
    width: 375,
  },
  facadeCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default FacadeCleaning1;
