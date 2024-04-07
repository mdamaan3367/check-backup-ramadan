import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails4 from "../components/ViewDetails4";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DeepCleaning3 = () => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [viewDetailsText1Visible, setViewDetailsText1Visible] = useState(false);
  const [viewDetailsText2Visible, setViewDetailsText2Visible] = useState(false);
  const [viewDetailsText3Visible, setViewDetailsText3Visible] = useState(false);
  const [viewDetailsText4Visible, setViewDetailsText4Visible] = useState(false);
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

  const openViewDetailsText3 = useCallback(() => {
    setViewDetailsText3Visible(true);
  }, []);

  const closeViewDetailsText3 = useCallback(() => {
    setViewDetailsText3Visible(false);
  }, []);

  const openViewDetailsText4 = useCallback(() => {
    setViewDetailsText4Visible(true);
  }, []);

  const closeViewDetailsText4 = useCallback(() => {
    setViewDetailsText4Visible(false);
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
          style={[styles.beyondYourRoutineWeDeepCParent, styles.navBarSignUpBg]}
        >
          <Text style={styles.beyondYourRoutineContainer}>
            <Text
              style={styles.beyondYourRoutine}
            >{`Beyond your routine, we deep clean: furnishings, overlooked corners, the whole works.

`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={[styles.deepCleaning1, styles.detailsTypo]}>
            deep cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.groupChildPosition]}
            onPress={() => navigation.navigate("ServiceDetails44")}
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
        <View style={[styles.frameContainer, styles.navPosition]}>
          <View style={styles.frameWrapperLayout}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text
                    style={[styles.oneMonthSubscription, styles.monthsTypo]}
                  >
                    One month subscription
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
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorker, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.homeTypo1}> domestic worker</Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar4.png")}
                      />
                      <Text style={styles.visitsLayout}>
                        <Text style={styles.text1}>
                          <Text style={styles.textTypo}>4</Text>
                        </Text>
                        <Text style={styles.homeTypo1}>
                          <Text style={styles.text1}>{` `}</Text>
                          <Text style={styles.visits2}>visits</Text>
                          <Text style={styles.text1}>{` `}</Text>
                        </Text>
                      </Text>
                    </View>
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
                    <Text style={[styles.text5, styles.textTypo]}>{`4 `}</Text>
                    <Text style={[styles.hoursPerVisit, styles.homeTypo1]}>
                      hours per visit
                    </Text>
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
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`490 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`600 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupChildLayout}
                  onPress={() => navigation.navigate("PinYourLocation5")}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text
                    style={[styles.oneMonthSubscription, styles.monthsTypo]}
                  >
                    One month subscription
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
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorker, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>2</Text>
                      <Text style={styles.homeTypo1}> domestic worker</Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar4.png")}
                      />
                      <Text style={[styles.visits3, styles.visitsLayout]}>
                        <Text style={styles.textTypo}>4</Text>
                        <Text style={styles.homeTypo1}>{` visits `}</Text>
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
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={[styles.hoursPerVisit, styles.homeTypo1]}>
                        hours per visit
                      </Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText1}
                >
                  <Text style={[styles.viewDetails1, styles.detailsTypo]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`600 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`760 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupChildLayout}
                  onPress={() => navigation.navigate("PinYourLocation13")}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription, styles.monthsTypo]}>
                    3 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsTypo]}>
                      4.4 (60 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.homeTypo1}> domestic workers</Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar4.png")}
                      />
                      <Text style={[styles.visits5, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>12</Text>
                        <Text style={styles.homeTypo1}>{` visits `}</Text>
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
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={[styles.hoursPerVisit, styles.homeTypo1]}>
                        hours per visit
                      </Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText2}
                >
                  <Text style={[styles.viewDetails1, styles.detailsTypo]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`1180 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`1470 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupChildLayout}
                  onPress={() => navigation.navigate("PinYourLocation12")}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription, styles.monthsTypo]}>
                    6 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsTypo]}>
                      3.8 (90 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.homeTypo1}> domestic workers</Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar4.png")}
                      />
                      <Text style={[styles.visits7, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>24</Text>
                        <Text style={styles.homeTypo1}>{` visits `}</Text>
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
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={[styles.hoursPerVisit, styles.homeTypo1]}>
                        hours per visit
                      </Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText3}
                >
                  <Text style={[styles.viewDetails1, styles.detailsTypo]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent15, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`2200 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`2400 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupChildLayout}
                  onPress={() => navigation.navigate("PinYourLocation11")}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription2, styles.monthsTypo]}>
                    12 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsTypo]}>
                      3.8 (90 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.homeTypo1}> domestic workers</Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar4.png")}
                      />
                      <Text style={[styles.visits9, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>48</Text>
                        <Text style={styles.homeTypo1}>{` visits `}</Text>
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
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={[styles.hoursPerVisit, styles.homeTypo1]}>
                        hours per visit
                      </Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText4}
                >
                  <Text style={[styles.viewDetails1, styles.detailsTypo]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent15, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`4080 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`4400SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupChildLayout}
                  onPress={() => navigation.navigate("PinYourLocation10")}
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
        <View style={[styles.deepCleaningInner, styles.groupChildPosition]} />
        <View style={[styles.navBarSignUpParent, styles.navPosition]}>
          <View style={[styles.navBarSignUp, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarSignUpInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.home2Icon}
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
                  style={styles.home2Icon}
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
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/calendartick1.png")}
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
                  style={styles.home2Icon}
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
          <ViewDetails4 onClose={closeViewDetailsText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText1Visible}>
        <View style={styles.viewDetailsText1Overlay}>
          <Pressable
            style={styles.viewDetailsText1Bg}
            onPress={closeViewDetailsText1}
          />
          <ViewDetails4 onClose={closeViewDetailsText1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText2Visible}>
        <View style={styles.viewDetailsText2Overlay}>
          <Pressable
            style={styles.viewDetailsText2Bg}
            onPress={closeViewDetailsText2}
          />
          <ViewDetails4 onClose={closeViewDetailsText2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText3Visible}>
        <View style={styles.viewDetailsText3Overlay}>
          <Pressable
            style={styles.viewDetailsText3Bg}
            onPress={closeViewDetailsText3}
          />
          <ViewDetails4 onClose={closeViewDetailsText3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText4Visible}>
        <View style={styles.viewDetailsText4Overlay}>
          <Pressable
            style={styles.viewDetailsText4Bg}
            onPress={closeViewDetailsText4}
          />
          <ViewDetails4 onClose={closeViewDetailsText4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  deepPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 26,
    width: 26,
    top: 43,
    position: "absolute",
  },
  navBarSignUpBg: {
    backgroundColor: Color.whait,
    width: 375,
  },
  detailsTypo: {
    display: "flex",
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
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  monthsTypo: {
    fontSize: FontSize.size_sm,
    height: 24,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  homeTypo1: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
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
  frameWrapperLayout: {
    height: 216,
    overflow: "hidden",
    backgroundColor: Color.whait,
    width: 375,
  },
  visitsLayout: {
    width: 40,
    marginLeft: 8,
    height: 16,
    lineHeight: 16,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
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
  deepCleaningChild: {
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
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 24,
    textAlign: "left",
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
    marginLeft: 8,
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
    left: 0,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  oneMonthSubscription: {
    width: 161,
  },
  review: {
    fontSize: FontSize.size_3xs,
    width: 71,
    marginLeft: 4,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontWeight: "300",
    color: Color.grayBlack,
  },
  oneMonthSubscriptionParent: {
    justifyContent: "space-between",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
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
  },
  hoursPerVisitContainer: {
    width: 97,
    height: 16,
    lineHeight: 16,
  },
  clockParent: {
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
    height: 16,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontWeight: "300",
    fontSize: FontSize.med_size,
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
    width: 343,
    marginTop: 16,
  },
  frameView: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  visits3: {
    textTransform: "capitalize",
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
  frameWrapper2: {
    marginTop: 8,
  },
  monthsSubscription: {
    width: 145,
  },
  domesticWorkers: {
    width: 246,
    height: 16,
    lineHeight: 16,
  },
  visits5: {
    width: 43,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
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
  visits7: {
    width: 47,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  viewDetailsText3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent15: {
    width: 352,
  },
  monthsSubscription2: {
    width: 147,
  },
  visits9: {
    width: 48,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  viewDetailsText4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer: {
    top: 392,
    height: 420,
  },
  deepCleaningInner: {
    marginLeft: -163.5,
    top: 1564,
    width: 327,
    height: 36,
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
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    width: 375,
  },
  deepCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default DeepCleaning3;
