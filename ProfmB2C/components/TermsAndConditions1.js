import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import RegularCleaning from "./RegularCleaning";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const TermsAndConditions1 = ({ onClose }) => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [frameContainer19Visible, setFrameContainer19Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(true);
  }, []);

  const closeFrameContainer19 = useCallback(() => {
    setFrameContainer19Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.termsAndConditions, styles.groupIcon4Layout]}>
        <View style={styles.accountInfoParent}>
          <Text style={[styles.accountInfo, styles.text1Clr]}>
            Account Info
          </Text>
          <Pressable
            style={styles.rectangleParent}
            onPress={openGroupContainer}
          >
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameParent}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-2387811.png")}
                />
                <Text style={[styles.signIn, styles.textTypo]}>sign in</Text>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.aboutAppParent}>
          <Text style={[styles.aboutApp, styles.text1Clr]}>About app</Text>
          <View style={styles.groupContainer}>
            <Pressable
              style={styles.rectangleGroup}
              onPress={() => navigation.navigate("AboutApp")}
            >
              <View style={styles.groupChildShadowBox} />
              <View style={styles.frameParent}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-2387891.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    about app
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </Pressable>
            <View style={styles.rectangleContainer}>
              <View style={styles.groupChildShadowBox} />
              <View style={styles.frameParent}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-238790.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    terms of service
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={styles.groupChildShadowBox} />
              <View style={styles.frameParent}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.arrow21Layout}
                    resizeMode="cover"
                    source={require("../assets/group-2387911.png")}
                  />
                  <Text style={[styles.signIn, styles.textTypo]}>
                    privacy policy
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={styles.groupChildShadowBox} />
              <View style={styles.frameParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/group-2387921.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>تغيير اللغة</Text>
              </View>
              <Image
                style={[styles.groupIcon4, styles.groupIcon4Layout]}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
              <Text style={[styles.text1, styles.homeTypo1]}>العربية</Text>
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
              onPress={openFrameContainer19}
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
            <View style={styles.navBarChildLayout}>
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft1.png")}
                />
                <Text style={styles.menu}>Menu</Text>
              </View>
            </View>
          </View>
          <WebViewBottom
            webViewBottomPosition="absolute"
            webViewBottomBackgroundColor="#fff"
            webViewBottomMarginLeft={-187.5}
            webViewBottomTop={56}
            webViewBottomLeft="50%"
            webViewBottomBorderBottomRightRadius={5}
            webViewBottomBorderBottomLeftRadius={5}
            webViewBottomWidth={375}
            webViewBottomHeight={34}
            webViewBottomBottom="unset"
            homeIndicatorBackgroundColor="#1d2939"
          />
        </View>
        <View style={[styles.groupParent4, styles.groupParentPosition]}>
          <View style={[styles.groupParent4, styles.groupParentPosition]}>
            <View style={[styles.groupChild2, styles.groupParentPosition]} />
            <View style={[styles.rectangleParent3, styles.groupChild3Layout]}>
              <View style={[styles.groupChild3, styles.groupChild3Layout]} />
              <Image
                style={[styles.profmLogo1111, styles.navPosition]}
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
            <Text style={styles.menu1}>menu</Text>
          </View>
          <View style={[styles.iphoneXOrNewer, styles.navPosition]}>
            <Image
              style={styles.notchIcon}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi3.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                resizeMode="cover"
                source={require("../assets/mobile-signal.png")}
              />
              <Image
                style={styles.recordingIndicatorIcon}
                resizeMode="cover"
                source={require("../assets/recording-indicator.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require("../assets/left-side3.png")}
            />
          </View>
        </View>
        <View
          style={[styles.termsAndConditionsChild, styles.frameParent2Position]}
        />
        <View style={[styles.frameParent2, styles.frameParent2Position]}>
          <View style={[styles.frameParent3, styles.groupParentPosition]}>
            <View style={[styles.frameParent4, styles.frameChildPosition]}>
              <View>
                <Text style={[styles.introduction, styles.introductionLayout]}>
                  introduction
                </Text>
                <Text
                  style={[styles.theTermsAndContainer, styles.theContainerTypo]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    {`The terms and conditions of the cleaning and maintenance application are an integral part of the contract concluded between the customer and `}
                    <Text style={styles.profm}>Profm</Text>. The customer must
                    agree to these terms and conditions before starting the
                    cleaning and maintenance process.
                  </Text>
                </Text>
              </View>
              <View style={styles.frameParent5}>
                <View>
                  <Text
                    style={[styles.introduction, styles.introductionLayout]}
                  >
                    Commitments
                  </Text>
                  <Text
                    style={[styles.underTheseTerms, styles.theContainerTypo]}
                  >
                    Under these terms and conditions, the customer is obligated
                    to:
                  </Text>
                  <Text style={[styles.payTheFees, styles.theContainerTypo]}>
                    Pay the fees agreed upon in the contract.
                  </Text>
                  <Text
                    style={[
                      styles.providingAccessToContainer,
                      styles.providingContainerTypo,
                    ]}
                  >
                    <Text style={styles.theTermsAndContainer1}>
                      {`Providing access to the pool for `}
                      <Text style={styles.profm}>Profm</Text> employees on
                      scheduled times.
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.providingAllNecessary,
                      styles.providingContainerTypo,
                    ]}
                  >
                    Providing all necessary equipment and materials for cleaning
                    and maintenance.
                  </Text>
                  <Text
                    style={[
                      styles.cooperatingWithProfmContainer,
                      styles.providingContainerTypo,
                    ]}
                  >
                    <Text style={styles.theTermsAndContainer1}>
                      {`Cooperating with `}
                      <Text style={styles.profm}>Profm</Text> employees to
                      ensure the quality of services provided.
                    </Text>
                  </Text>
                </View>
                <View style={styles.groupContainer}>
                  <Text
                    style={[
                      styles.profmIsBoundContainer,
                      styles.theContainerTypo,
                    ]}
                  >
                    <Text style={styles.theTermsAndContainer1}>
                      <Text style={styles.profm}>Profm</Text> is bound by these
                      terms and conditions to:
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.providingCleaningAnd,
                      styles.providingContainerTypo,
                    ]}
                  >
                    Providing cleaning and maintenance services in accordance
                    with standards agreed upon in the contract.
                  </Text>
                  <Text
                    style={[
                      styles.cooperatingWithProfmContainer,
                      styles.providingContainerTypo,
                    ]}
                  >
                    Use appropriate chemicals and tools for cleaning and
                    maintenance
                  </Text>
                  <Text
                    style={[
                      styles.cooperatingWithProfmContainer,
                      styles.providingContainerTypo,
                    ]}
                  >
                    Providing a detailed report on the cleaning and maintenance
                    process after it is completed.
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent5}>
                <Text style={[styles.introduction, styles.introductionLayout]}>
                  Guarantees
                </Text>
                <Text
                  style={[
                    styles.profmGuaranteesThatContainer,
                    styles.theContainerTypo,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    <Text style={styles.profm}>Profm</Text> guarantees that the
                    cleaning and maintenance services provided to the customer
                    are in accordance with the standards agreed upon in the
                    contract. In the event of dissatisfaction with the services
                    provided, the customer has the right to request compensation
                    for the damages incurred.
                  </Text>
                </Text>
              </View>
              <View style={styles.frameParent5}>
                <Text style={[styles.introduction, styles.introductionLayout]}>
                  responsibility
                </Text>
                <Text
                  style={[
                    styles.profmDoesNotContainer,
                    styles.theContainerTypo,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    <Text style={styles.profm}>{`Profm `}</Text>
                    <Text style={styles.doesNotBear}>
                      does not bear any responsibility for any damages caused to
                      Clients or other persons due to errors or negligence on
                      the part of the Client or its employees.
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frameParent5}>
                <Text style={[styles.introduction, styles.introductionLayout]}>
                  Conflict Resolution
                </Text>
                <Text
                  style={[
                    styles.ifAnyDisputeContainer,
                    styles.theContainerTypo,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    <Text
                      style={styles.doesNotBear}
                    >{`If any dispute arises between the Client and `}</Text>
                    <Text style={styles.profm}>Profm</Text>
                    <Text style={styles.doesNotBear}>
                      , it will be resolved through friendly negotiation. In the
                      event that a solution is not reached, recourse will be
                      made to the competent judiciary.
                    </Text>
                  </Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameChild3, styles.frameChildPosition]} />
            <View style={[styles.frameChild4, styles.frameChildPosition]} />
          </View>
          <View style={[styles.frameParent6, styles.groupParentPosition]}>
            <View style={styles.groupParent}>
              <View>
                <Text
                  style={[
                    styles.termsAndConditionsContainer,
                    styles.introductionLayout,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    <Text style={styles.terms}>{`terms `}</Text>and
                    <Text style={styles.terms}>{` `}</Text>c
                    <Text style={styles.terms}>onditions</Text>
                  </Text>
                </Text>
                <Text style={styles.lastUpdateJanuaryContainer}>
                  <Text style={styles.theTermsAndContainer1}>
                    <Text style={styles.terms}>last</Text> update January 2024
                  </Text>
                </Text>
              </View>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/frame9.png")}
                />
              </Pressable>
            </View>
            <View style={styles.lineView} />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <RegularCleaning onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer19Visible}>
        <View style={styles.frameContainer19Overlay}>
          <Pressable
            style={styles.frameContainer19Bg}
            onPress={closeFrameContainer19}
          />
          <RegularCleaning onClose={closeFrameContainer19} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupIcon4Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text1Clr: {
    display: "flex",
    color: Color.grayBlack,
    height: 16,
    alignItems: "center",
    textTransform: "capitalize",
  },
  textTypo: {
    marginLeft: 8,
    color: Color.black,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navPosition: {
    left: "50%",
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    lineHeight: 16,
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
  groupParentPosition: {
    left: 0,
    position: "absolute",
  },
  groupChild3Layout: {
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  frameParent2Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameChildPosition: {
    top: 24,
    position: "absolute",
  },
  introductionLayout: {
    width: 164,
    lineHeight: 30,
    fontWeight: "600",
    color: Color.praimary,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  theContainerTypo: {
    width: 303,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  providingContainerTypo: {
    width: 286,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  accountInfo: {
    width: 131,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.grayBlack,
    fontSize: FontSize.size_sm,
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
  groupChildShadowBox: {
    borderWidth: 0.3,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    backgroundColor: Color.whait,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  signIn: {
    width: 120,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    width: 7,
    height: 12,
    marginLeft: 152,
  },
  frameParent: {
    top: 16,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
    height: 56,
    width: 343,
  },
  accountInfoParent: {
    top: 156,
    left: 16,
    position: "absolute",
  },
  aboutApp: {
    width: 178,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.grayBlack,
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    height: 56,
    width: 343,
  },
  rectangleContainer: {
    marginTop: 8,
    height: 56,
    width: 343,
  },
  text: {
    width: 68,
  },
  groupIcon4: {
    height: "21.43%",
    width: "2.04%",
    top: "39.29%",
    right: "4.66%",
    bottom: "39.29%",
    left: "93.29%",
    position: "absolute",
  },
  text1: {
    top: 20,
    left: 275,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    width: 37,
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.grayBlack,
    textTransform: "capitalize",
    fontWeight: "300",
    position: "absolute",
  },
  groupContainer: {
    marginTop: 16,
  },
  aboutAppParent: {
    top: 268,
    left: 16,
    position: "absolute",
  },
  home: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
    height: 56,
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
  frameContainer19Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer19Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menu: {
    fontWeight: "700",
    color: Color.praimary,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    bottom: 34,
    left: "50%",
    position: "absolute",
    marginLeft: -187.5,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.whait,
    height: 56,
  },
  navBarParent: {
    bottom: 0,
    height: 90,
    marginLeft: -187.5,
    width: 375,
  },
  groupChild2: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    backgroundColor: Color.whait,
    width: 375,
  },
  groupChild3: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    height: 48,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleParent3: {
    marginLeft: -79.5,
    top: 76,
    height: 48,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    top: 43,
    left: 16,
    position: "absolute",
  },
  menu1: {
    marginLeft: -20.5,
    top: 40,
    textAlign: "center",
    width: 41,
    height: 30,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.praimary,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    position: "absolute",
  },
  groupParent4: {
    height: 124,
    top: 0,
    width: 375,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    height: 6,
    width: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 42,
    top: 0,
    overflow: "hidden",
    left: "50%",
  },
  termsAndConditionsChild: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  introduction: {
    textTransform: "capitalize",
    width: 164,
    fontSize: FontSize.size_sm,
  },
  profm: {
    textTransform: "uppercase",
  },
  theTermsAndContainer1: {
    width: "100%",
  },
  theTermsAndContainer: {
    height: 84,
    lineHeight: 18,
    width: 303,
    marginTop: 8,
  },
  underTheseTerms: {
    height: 32,
    lineHeight: 18,
    width: 303,
    marginTop: 8,
  },
  payTheFees: {
    marginTop: 8,
    height: 16,
  },
  providingAccessToContainer: {
    height: 32,
    lineHeight: 16,
    width: 286,
  },
  providingAllNecessary: {
    height: 32,
    lineHeight: 16,
    width: 286,
    textTransform: "capitalize",
  },
  cooperatingWithProfmContainer: {
    height: 32,
  },
  profmIsBoundContainer: {
    lineHeight: 18,
    width: 303,
    height: 16,
  },
  providingCleaningAnd: {
    height: 48,
    lineHeight: 16,
    width: 286,
  },
  frameParent5: {
    marginTop: 24,
  },
  profmGuaranteesThatContainer: {
    height: 104,
    lineHeight: 18,
    width: 303,
    marginTop: 8,
  },
  doesNotBear: {
    textTransform: "lowercase",
  },
  profmDoesNotContainer: {
    height: 54,
    lineHeight: 18,
    width: 303,
    marginTop: 8,
  },
  ifAnyDisputeContainer: {
    height: 66,
    lineHeight: 18,
    width: 303,
    marginTop: 8,
  },
  frameParent4: {
    height: 866,
    left: 16,
  },
  frameChild3: {
    left: 327,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.a6A6A6,
    width: 2,
    height: 461,
  },
  frameChild4: {
    left: 325,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    height: 74,
    width: 6,
  },
  frameParent3: {
    top: 68,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 509,
    backgroundColor: Color.whait,
    width: 343,
  },
  terms: {
    textTransform: "capitalize",
  },
  termsAndConditionsContainer: {
    fontSize: FontSize.size_base,
    width: 164,
  },
  lastUpdateJanuaryContainer: {
    width: 195,
    lineHeight: 30,
    marginTop: 4,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frame: {
    width: 20,
    height: 20,
    marginLeft: 96,
  },
  lineView: {
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    marginTop: 16,
  },
  frameParent6: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingTop: Padding.p_base,
    top: 0,
    backgroundColor: Color.whait,
    alignItems: "center",
  },
  frameParent2: {
    marginTop: -289,
    marginLeft: -171.5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    height: 577,
    shadowOpacity: 1,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    width: 343,
  },
  termsAndConditions: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default TermsAndConditions1;
