import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
import RegularCleaning from "./RegularCleaning";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PrivacyPolicy = ({ onClose }) => {
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
      <View style={[styles.privacyPolicy, styles.groupIcon4Layout]}>
        <View style={[styles.accountInfoParent, styles.frameParentPosition]}>
          <Text style={[styles.accountInfo, styles.text1Typo]}>
            Account Info
          </Text>
          <Pressable
            style={styles.rectangleParent}
            onPress={openGroupContainer}
          >
            <View style={styles.groupChildShadowBox} />
            <View style={[styles.frameParent, styles.frameParentPosition]}>
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
        <View style={[styles.aboutAppParent, styles.frameParentPosition]}>
          <Text style={[styles.aboutApp, styles.text1Typo]}>About app</Text>
          <View style={styles.groupContainer}>
            <Pressable
              style={styles.rectangleGroup}
              onPress={() => navigation.navigate("AboutApp")}
            >
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.frameParent, styles.frameParentPosition]}>
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
              <View style={[styles.frameParent, styles.frameParentPosition]}>
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
              <View style={[styles.frameParent, styles.frameParentPosition]}>
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
              <View style={[styles.frameParent, styles.frameParentPosition]}>
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
              <Text style={[styles.text1, styles.text1Typo]}>العربية</Text>
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
                <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.homeSpaceBlock]}>
                  History
                </Text>
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
                <Text style={[styles.bookings, styles.homeSpaceBlock]}>
                  bookings
                </Text>
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
                <Text style={[styles.bookings, styles.homeSpaceBlock]}>
                  account
                </Text>
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
        <View style={[styles.groupParent4, styles.groupChildPosition]}>
          <View style={[styles.groupParent4, styles.groupChildPosition]}>
            <View style={[styles.groupChild2, styles.groupChildPosition]} />
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
            <Text style={[styles.menu1, styles.menu1Typo]}>menu</Text>
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
          style={[styles.privacyPolicyChild, styles.frameParent2Position]}
        />
        <View style={[styles.frameParent2, styles.frameParent2Position]}>
          <View style={[styles.frameParent3, styles.groupChildPosition]}>
            <View style={[styles.frameParent4, styles.frameParentPosition]}>
              <View>
                <Text style={[styles.introduction, styles.introductionTypo]}>
                  introduction
                </Text>
                <Text style={[styles.profmIsCommitted, styles.containerLayout]}>
                  PROFM is committed to protecting the privacy of its customers
                  and users of its application. We only collect the information
                  we need to efficiently deliver and improve our Services. We
                  use this information responsibly and only share it with
                  parties who need to know.
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View>
                  <Text
                    style={[styles.informationWeCollect, styles.howWeUseLayout]}
                  >
                    Information we collect
                  </Text>
                  <Text
                    style={[
                      styles.personalInformationSuch,
                      styles.informationTypo,
                    ]}
                  >
                    Personal information: such as your name, address, email, and
                    phone number.
                  </Text>
                  <Text
                    style={[styles.usageInformationSuch, styles.containerTypo]}
                  >
                    Usage information: such as the type of device you use, your
                    location, and the date and time you use the application.
                  </Text>
                  <Text
                    style={[
                      styles.interactionInformationSuch,
                      styles.informationTypo,
                    ]}
                  >
                    Interaction information: such as your responses to surveys
                    and reviews of our services.
                  </Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <Text style={[styles.howWeUse, styles.howWeUseLayout]}>
                  How we use information
                </Text>
                <Text
                  style={[styles.usageInformationSuch, styles.containerTypo]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>To</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      provide services: We use your personal information to
                      create an account for you, manage your account, and
                      provide you with the services you have requested.
                    </Text>
                  </Text>
                </Text>
                <Text
                  style={[styles.usageInformationSuch, styles.containerTypo]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>Improving</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      our Services: We use your Usage and Interaction
                      Information to improve our Services and make them more
                      useful to you.
                    </Text>
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.contactingYouWeContainer,
                    styles.containerTypo,
                  ]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>Contacting</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      You: We may use your personal information to contact you
                      about our services, promotions, or for other purposes
                      related to our business.
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <Text style={[styles.introduction, styles.introductionTypo]}>
                  Share information
                </Text>
                <Text style={[styles.weDoNotContainer, styles.informationTypo]}>
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.w}>W</Text>
                    <Text style={styles.provideServicesWe}>
                      e do not share your personal information with third
                      parties except in the following cases:
                    </Text>
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.withOurAffiliatesContainer,
                    styles.containerLayout,
                  ]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>With</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      Our Affiliates: We may share your personal information
                      with our affiliates that provide similar services.
                    </Text>
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.withServiceProvidersContainer,
                    styles.containerLayout,
                  ]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>With</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      service providers: We may share your personal information
                      with service providers who help us provide our services,
                      such as payment companies and marketing companies.
                    </Text>
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.withOurAffiliatesContainer,
                    styles.containerLayout,
                  ]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>With</Text>
                    <Text style={styles.provideServicesWe}>
                      {" "}
                      government agencies: We may share your personal
                      information with government agencies if we are required to
                      do so by law.
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <Text style={[styles.introduction, styles.introductionTypo]}>
                  Safety
                </Text>
                <Text style={[styles.weTakeSteps, styles.containerTypo]}>
                  We take steps to protect your personal information from
                  unauthorized access, use, disclosure, alteration or
                  destruction.
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <Text style={[styles.introduction, styles.introductionTypo]}>
                  Your rights
                </Text>
                <Text style={[styles.weTakeSteps, styles.containerTypo]}>
                  You have the right to access, modify or delete your personal
                  information. You may also request that we stop using your
                  personal information for marketing purposes.
                </Text>
              </View>
            </View>
            <View style={[styles.rectangleParent4, styles.groupChild4Layout]}>
              <View style={[styles.groupChild4, styles.groupChild4Layout]} />
              <View style={[styles.groupChild5, styles.groupChildPosition]} />
            </View>
          </View>
          <View style={[styles.frameParent5, styles.groupChildPosition]}>
            <View style={styles.groupParent}>
              <View>
                <Text style={[styles.privacyPolicy2, styles.introductionTypo]}>
                  privacy policy
                </Text>
                <Text
                  style={[
                    styles.lastUpdateJanuaryContainer,
                    styles.howWeUseLayout,
                  ]}
                >
                  <Text style={styles.toProvideServicesContainer1}>
                    <Text style={styles.to}>last</Text> update January 2024
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
  frameParentPosition: {
    left: 16,
    position: "absolute",
  },
  text1Typo: {
    height: 16,
    color: Color.grayBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
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
  navPosition: {
    left: "50%",
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeSpaceBlock: {
    marginTop: 4,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
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
  groupChildPosition: {
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
  menu1Typo: {
    fontWeight: "600",
    color: Color.praimary,
    textTransform: "capitalize",
  },
  frameParent2Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  introductionTypo: {
    width: 164,
    lineHeight: 30,
    fontWeight: "600",
    color: Color.praimary,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  containerLayout: {
    lineHeight: 18,
    width: 303,
  },
  howWeUseLayout: {
    lineHeight: 30,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  informationTypo: {
    height: 32,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  containerTypo: {
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild4Layout: {
    height: 461,
    position: "absolute",
  },
  accountInfo: {
    width: 131,
    textAlign: "left",
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
  },
  rectangleParent: {
    marginTop: 16,
    height: 56,
    width: 343,
  },
  accountInfoParent: {
    top: 156,
  },
  aboutApp: {
    width: 178,
    textAlign: "left",
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
    fontWeight: "300",
    position: "absolute",
  },
  groupContainer: {
    marginTop: 16,
  },
  aboutAppParent: {
    top: 268,
  },
  home: {
    lineHeight: 16,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 4,
  },
  navBarInner: {
    width: 93,
    height: 56,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    lineHeight: 16,
    textAlign: "left",
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    lineHeight: 16,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 4,
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
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    display: "flex",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
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
  privacyPolicyChild: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  introduction: {
    fontSize: FontSize.size_sm,
  },
  profmIsCommitted: {
    height: 84,
    width: 303,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  informationWeCollect: {
    width: 199,
    fontWeight: "600",
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  personalInformationSuch: {
    width: 303,
    lineHeight: 16,
  },
  usageInformationSuch: {
    width: 303,
    height: 48,
    lineHeight: 16,
  },
  interactionInformationSuch: {
    width: 286,
    lineHeight: 16,
  },
  frameWrapper: {
    marginTop: 24,
  },
  howWeUse: {
    width: 187,
    fontWeight: "600",
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  to: {
    textTransform: "capitalize",
  },
  provideServicesWe: {
    textTransform: "lowercase",
  },
  toProvideServicesContainer1: {
    width: "100%",
  },
  contactingYouWeContainer: {
    width: 306,
    height: 48,
    lineHeight: 16,
  },
  w: {
    textTransform: "uppercase",
  },
  weDoNotContainer: {
    width: 303,
    lineHeight: 18,
  },
  withOurAffiliatesContainer: {
    width: 303,
    height: 48,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  withServiceProvidersContainer: {
    height: 72,
    width: 303,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    marginTop: 8,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  weTakeSteps: {
    textTransform: "lowercase",
    width: 303,
    height: 48,
    lineHeight: 16,
  },
  frameParent4: {
    height: 963,
    top: 24,
  },
  groupChild4: {
    left: 2,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.a6A6A6,
    width: 2,
    top: 0,
  },
  groupChild5: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    height: 74,
    width: 6,
    top: 0,
  },
  rectangleParent4: {
    left: 325,
    top: 24,
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
  privacyPolicy2: {
    fontSize: FontSize.size_base,
  },
  lastUpdateJanuaryContainer: {
    width: 195,
    marginTop: 4,
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    fontWeight: "300",
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
  frameParent5: {
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
  privacyPolicy: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default PrivacyPolicy;
