import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails61 from "../components/ViewDetails6";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const RegularCleaning = () => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [viewDetailsText1Visible, setViewDetailsText1Visible] = useState(false);
  const [viewDetailsText2Visible, setViewDetailsText2Visible] = useState(false);
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

  const openViewDetailsText2 = useCallback(() => {
    setViewDetailsText2Visible(true);
  }, []);

  const closeViewDetailsText2 = useCallback(() => {
    setViewDetailsText2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.regularCleaning}>
        <Image
          style={[styles.regularCleaningChild, styles.cleaningPosition]}
          resizeMode="cover"
          source={require("../assets/group6.png")}
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
          style={[styles.regularCleaningItem, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/group-238738.png")}
        />
        <View
          style={[
            styles.ourExpertCleaningTeamBringParent,
            styles.cleaningPosition,
          ]}
        >
          <Text style={styles.ourExpertCleaningContainer}>
            <Text
              style={styles.ourExpertCleaning}
            >{`Our expert cleaning team brings skill proficiency and extensive experience to exceed your specific cleaning needs
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={[styles.regularCleaning1, styles.cleaningTypo]}>
            Regular cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.groupChildPosition]}
            onPress={() => navigation.navigate("ServiceDetails39")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.detailsLayout]}>
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
        <View style={styles.regularCleaningInner} />
        <View style={[styles.frameView, styles.regularInnerPosition]}>
          <View style={styles.frameContainerPosition}>
            <View>
              <View style={styles.frameGroup}>
                <Text
                  style={[styles.cleaningFor2, styles.cleaningTypo]}
                >{`Cleaning for 2 hours  `}</Text>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.review, styles.detailsLayout]}>
                    4.9 (80 Review)
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/user3.png")}
                  />
                  <Text style={[styles.domesticWorker, styles.domesticLayout]}>
                    <Text style={styles.textTypo}>1</Text>
                    <Text style={styles.domesticWorker1}> domestic worker</Text>
                  </Text>
                </View>
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/home21.png")}
                  />
                  <Text
                    style={[
                      styles.smallHomeCleaningContainer,
                      styles.detailsLayout,
                    ]}
                  >
                    <Text style={styles.small}>small</Text>
                    {` home cleaning

`}
                  </Text>
                </View>
              </View>
              <Pressable
                style={styles.viewDetails}
                onPress={openViewDetailsText}
              >
                <Text style={[styles.viewDetails1, styles.detailsLayout]}>
                  View details
                </Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
              <View style={styles.frameGroup}>
                <Text style={styles.sar}>
                  <Text style={styles.small}>{`79 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
                <Text style={styles.sar2}>
                  <Text style={styles.small}>{`100 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </View>
              <Pressable
                style={styles.groupChildLayout}
                onPress={() => navigation.navigate("PinYourLocation19")}
              >
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={[styles.regularCleaningInner1, styles.regularInnerPosition]}
        >
          <View style={styles.frameContainerPosition}>
            <View>
              <View style={styles.frameGroup}>
                <Text style={[styles.cleaningFor2, styles.cleaningTypo]}>
                  Cleaning for 4 hours
                </Text>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.review, styles.detailsLayout]}>
                    4.4 (60 Review)
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/user3.png")}
                  />
                  <Text style={[styles.domesticWorkers, styles.detailsLayout]}>
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
                    style={[
                      styles.smallHomeCleaningContainer,
                      styles.detailsLayout,
                    ]}
                  >{`Medium home cleaning

`}</Text>
                </View>
              </View>
              <Pressable
                style={styles.viewDetails}
                onPress={openViewDetailsText1}
              >
                <Text style={[styles.viewDetails1, styles.detailsLayout]}>
                  View details
                </Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
              <View style={styles.frameGroup}>
                <Text style={styles.sar}>
                  <Text style={styles.small}>{`126 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
                <Text style={styles.sar2}>
                  <Text style={styles.small}>{`159 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </View>
              <Pressable
                style={styles.groupChildLayout}
                onPress={() => navigation.navigate("PinYourLocation19")}
              >
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={[styles.regularCleaningInner2, styles.regularInnerPosition]}
        >
          <View style={styles.frameContainerPosition}>
            <View>
              <View style={styles.frameGroup}>
                <Text style={[styles.cleaningFor2, styles.cleaningTypo]}>
                  Cleaning for 6 hours
                </Text>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.review, styles.detailsLayout]}>
                    3.8 (90 Review)
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/user3.png")}
                  />
                  <Text style={[styles.domesticWorker2, styles.domesticLayout]}>
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
                    style={[
                      styles.smallHomeCleaningContainer,
                      styles.detailsLayout,
                    ]}
                  >{`Large home cleaning

`}</Text>
                </View>
              </View>
              <Pressable
                style={styles.viewDetails}
                onPress={openViewDetailsText2}
              >
                <Text style={[styles.viewDetails1, styles.detailsLayout]}>
                  View details
                </Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent11, styles.frameParentFlexBox]}>
              <View style={styles.frameGroup}>
                <Text style={styles.sar}>
                  <Text style={styles.small}>{`219 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
                <Text style={styles.sar2}>
                  <Text style={styles.small}>{`252 SAR `}</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </View>
              <Pressable
                style={styles.groupChildLayout}
                onPress={() => navigation.navigate("PinYourLocation19")}
              >
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Image
          style={[styles.profmLogo1111, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-16.png")}
        />
        <View style={[styles.navBarSignUpParent, styles.navPosition]}>
          <View style={[styles.navBarSignUp, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarSignUpInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.home2Icon3}
                  resizeMode="cover"
                  source={require("../assets/home221.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View
              style={[styles.navBarSignUpChild, styles.framePressableLayout]}
            >
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.home2Icon3}
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
                  style={styles.home2Icon3}
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
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.home2Icon3}
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
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.home2Icon3}
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
          <ViewDetails61 onClose={closeViewDetailsText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText1Visible}>
        <View style={styles.viewDetailsText1Overlay}>
          <Pressable
            style={styles.viewDetailsText1Bg}
            onPress={closeViewDetailsText1}
          />
          <ViewDetails61 onClose={closeViewDetailsText1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText2Visible}>
        <View style={styles.viewDetailsText2Overlay}>
          <Pressable
            style={styles.viewDetailsText2Bg}
            onPress={closeViewDetailsText2}
          />
          <ViewDetails61 onClose={closeViewDetailsText2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  cleaningPosition: {
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
  cleaningTypo: {
    color: Color.black,
    fontWeight: "600",
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
  detailsLayout: {
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  regularInnerPosition: {
    height: 192,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  domesticLayout: {
    width: 218,
    height: 16,
    lineHeight: 16,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  frameParentFlexBox: {
    marginTop: 16,
    justifyContent: "space-between",
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
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  regularCleaningChild: {
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
  regularCleaningItem: {
    left: 333,
  },
  ourExpertCleaning: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  ourExpertCleaningContainer: {
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
  regularCleaning1: {
    width: 128,
    height: 24,
    alignItems: "center",
    display: "flex",
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
    marginLeft: 8,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.grayBlack,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
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
  ourExpertCleaningTeamBringParent: {
    top: 208,
    height: 176,
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
  regularCleaningInner: {
    top: 999,
    left: 22,
    width: 338,
    height: 37,
    overflow: "hidden",
    position: "absolute",
  },
  cleaningFor2: {
    fontSize: FontSize.size_sm,
    width: 130,
    height: 24,
    alignItems: "center",
    display: "flex",
  },
  review: {
    fontSize: FontSize.size_3xs,
    width: 71,
    marginLeft: 4,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayBlack,
    height: 16,
    fontWeight: "300",
  },
  vectorParent: {
    marginLeft: 124,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  domesticWorker1: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  domesticWorker: {
    marginLeft: 8,
  },
  small: {
    textTransform: "capitalize",
  },
  smallHomeCleaningContainer: {
    width: 264,
    marginLeft: 8,
    lineHeight: 16,
    textAlign: "left",
    color: Color.grayBlack,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  home2Parent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent2: {
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
    display: "flex",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  viewDetails: {
    marginTop: 8,
  },
  text1: {
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
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontSize: FontSize.med_size,
    position: "absolute",
  },
  frameParent3: {
    width: 343,
  },
  frameContainerPosition: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  frameView: {
    top: 392,
  },
  domesticWorkers: {
    width: 246,
    marginLeft: 8,
    lineHeight: 16,
    textAlign: "left",
    color: Color.grayBlack,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
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
  regularCleaningInner1: {
    top: 586,
  },
  domesticWorker2: {
    marginLeft: 6,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  viewDetailsText2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent11: {
    width: 352,
  },
  regularCleaningInner2: {
    top: 792,
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  home2Icon3: {
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
    fontFamily: FontFamily.med,
    fontWeight: "500",
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
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
  },
  regularCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default RegularCleaning;
