import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ViewDetails21 from "../components/ViewDetails2";
import ViewDetails12 from "../components/ViewDetails1";
import ViewDetails11 from "../components/ViewDetails";
import RegularCleaning9 from "../components/RegularCleaning";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const OneTimeService5 = () => {
  const [frameContainer14Visible, setFrameContainer14Visible] = useState(false);
  const [frameContainer22Visible, setFrameContainer22Visible] = useState(false);
  const [frameContainer30Visible, setFrameContainer30Visible] = useState(false);
  const [frameContainer41Visible, setFrameContainer41Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(true);
  }, []);

  const closeFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(false);
  }, []);

  const openFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(true);
  }, []);

  const closeFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(false);
  }, []);

  const openFrameContainer30 = useCallback(() => {
    setFrameContainer30Visible(true);
  }, []);

  const closeFrameContainer30 = useCallback(() => {
    setFrameContainer30Visible(false);
  }, []);

  const openFrameContainer41 = useCallback(() => {
    setFrameContainer41Visible(true);
  }, []);

  const closeFrameContainer41 = useCallback(() => {
    setFrameContainer41Visible(false);
  }, []);

  return (
    <>
      <View style={styles.oneTimeService}>
        <Text style={[styles.oneTimeService1, styles.oneTimeService1Text]}>
          One time service
        </Text>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <Pressable
            style={[styles.rectangleParent, styles.rectangleLayout]}
            onPress={() => navigation.navigate("RegularCleaning8")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.seaLayout]}>
                Regular cleaning
              </Text>
              <Text
                style={[
                  styles.ourExpertCleaningContainer,
                  styles.homeSpaceBlock,
                ]}
              >
                <Text
                  style={styles.ourExpertCleaning}
                >{`Our expert cleaning team brings skill proficiency and extensive experience to exceed your specific cleaning needs
`}</Text>
                <Text style={styles.blankLine}> </Text>
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436427.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectangleGroup, styles.rectangleLayout]}
            onPress={() => navigation.navigate("DeepCleaning")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.seaLayout]}>
                deep cleaning
              </Text>
              <Text style={[styles.beyondYourRegular, styles.homeSpaceBlock]}>
                Beyond your regular cleaning routines, our trained professionals
                go the extra mile to tackle forgotten areas and hidden spots
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-4365.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectangleContainer, styles.rectangleLayout]}
            onPress={() => navigation.navigate("FacadeCleaning5")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.frameChildPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.seaLayout]}>
                Facade cleaning
              </Text>
              <Text
                style={[styles.forProfessionalGlass, styles.homeSpaceBlock]}
              >
                For professional glass and stone facade cleaning services for a
                striking appearance choose clean service
              </Text>
            </View>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436428.png")}
            />
          </Pressable>
        </View>
        <View style={styles.oneTimeServiceChild} />
        <View
          style={[
            styles.yourPreviouslyAvailedServicParent,
            styles.parentPosition,
          ]}
        >
          <Text
            style={[styles.yourPreviouslyAvailed, styles.oneTimeService1Text]}
          >
            Your previously availed services
          </Text>
          <View style={styles.frameGroup}>
            <Pressable
              style={styles.frameBorder}
              onPress={openFrameContainer14}
            >
              <View style={styles.groupParent}>
                <View style={styles.groupViewLayout}>
                  <View style={styles.groupChildShadowBox} />
                  <Image
                    style={[
                      styles.youngHousekeeperFemaleWithIcon,
                      styles.groupItemLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/younghousekeeperfemalewithcleaningsupply-1.png")}
                  />
                </View>
                <View style={styles.frameView}>
                  <View>
                    <View style={styles.regularCleaningGroup}>
                      <Text
                        style={[styles.regularCleaning1, styles.cleaningClr]}
                      >
                        Regular cleaning
                      </Text>
                      <Text style={styles.weeksTypo}>
                        <Text style={styles.textTypo}>1</Text>
                        <Text style={styles.weeksTypo1}> weeks ago</Text>
                      </Text>
                    </View>
                    <Text style={styles.hours}>
                      <Text style={styles.text1}>{`(2 `}</Text>
                      <Text style={styles.hours1}>hours)</Text>
                    </Text>
                    <View style={styles.vectorParent}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Text style={[styles.text2, styles.seaClr]}>4.3</Text>
                    </View>
                  </View>
                  <View style={styles.sarWrapper}>
                    <Text style={[styles.sar, styles.cleaningTypo]}>
                      <Text style={styles.text1}>{`100 SAR `}</Text>
                      <Text style={styles.hours1}>{` `}</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupWrapper}>
                <View style={styles.groupItemLayout}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.framePressable, styles.frameBorder]}
              onPress={openFrameContainer22}
            >
              <View style={styles.groupParent}>
                <View style={styles.groupViewLayout}>
                  <View style={styles.groupChildShadowBox} />
                  <Image
                    style={[
                      styles.youngHousekeeperFemaleWithIcon,
                      styles.groupItemLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/younghousekeeperfemalewithcleaningsupply-1.png")}
                  />
                  <Image
                    style={[
                      styles.youngHousekeeperFemaleWithIcon,
                      styles.groupItemLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/younghousekeeperfemalewithcleaningsupply-11.png")}
                  />
                </View>
                <View style={styles.frameView}>
                  <View>
                    <View style={styles.regularCleaningGroup}>
                      <Text
                        style={[styles.regularCleaning1, styles.cleaningClr]}
                      >
                        deep cleaning
                      </Text>
                      <Text style={[styles.weeksAgo2, styles.weeksTypo]}>
                        2 weeks ago
                      </Text>
                    </View>
                    <Text style={styles.hours}>
                      <Text style={styles.text1}>{`(3 `}</Text>
                      <Text style={styles.hours1}>hours)</Text>
                    </Text>
                    <View style={styles.vectorParent}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Text style={[styles.text2, styles.seaClr]}>4.6</Text>
                    </View>
                  </View>
                  <View style={styles.sarWrapper}>
                    <Text style={[styles.sar, styles.cleaningTypo]}>
                      <Text style={styles.text1}>{`300 SAR `}</Text>
                      <Text style={styles.hours1}>{` `}</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupWrapper}>
                <View style={styles.groupItemLayout}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.frameParent4, styles.frameBorder]}
              onPress={openFrameContainer30}
            >
              <View style={styles.groupParent}>
                <View style={styles.groupViewLayout}>
                  <View style={styles.groupChildShadowBox} />
                  <Image
                    style={[
                      styles.youngHousekeeperFemaleWithIcon,
                      styles.groupItemLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/younghousekeeperfemalewithcleaningsupply-1.png")}
                  />
                  <Image
                    style={[
                      styles.youngHousekeeperFemaleWithIcon,
                      styles.groupItemLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/younghousekeeperfemalewithcleaningsupply-12.png")}
                  />
                </View>
                <View style={styles.frameView}>
                  <View>
                    <View style={styles.regularCleaningGroup}>
                      <Text
                        style={[styles.regularCleaning1, styles.cleaningClr]}
                      >
                        Facade cleaning
                      </Text>
                      <Text style={[styles.weeksAgo2, styles.weeksTypo]}>
                        3 weeks ago
                      </Text>
                    </View>
                    <Text style={styles.hours}>
                      <Text style={styles.text1}>{`(4 `}</Text>
                      <Text style={styles.hours1}>hours)</Text>
                    </Text>
                    <View style={styles.vectorParent}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Text style={[styles.text2, styles.seaClr]}>3.8</Text>
                    </View>
                  </View>
                  <View style={styles.sarWrapper}>
                    <Text style={[styles.sar, styles.cleaningTypo]}>
                      <Text style={styles.text1}>{`900 SAR `}</Text>
                      <Text style={styles.hours1}>{` `}</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupWrapper}>
                <View style={styles.groupItemLayout}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.search}>
          <View style={styles.fiRrZoomOutParent}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout.png")}
            />
            <Text style={[styles.sea, styles.seaClr]}>Sea</Text>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navLayout1]}>
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
                <Text style={[styles.home, styles.seaClr]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navLayout]}>
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.seaClr]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.navLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.seaClr]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable style={styles.navLayout} onPress={openFrameContainer41}>
              <View style={styles.bookNowFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.seaClr]}>account</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navLayout}
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
                <Text style={[styles.home, styles.seaClr]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.navLayout1]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.oneTimeServiceInner, styles.navLayout1]}>
          <View style={[styles.oneTimeServiceInner, styles.navLayout1]}>
            <View style={[styles.groupChild3, styles.navLayout1]} />
            <View style={[styles.rectangleParent7, styles.groupChild4Layout]}>
              <View style={[styles.groupChild4, styles.groupChild4Layout]} />
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
            <Text style={[styles.cleaning, styles.bookNowTypo]}>Cleaning</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer14Visible}>
        <View style={styles.frameContainer14Overlay}>
          <Pressable
            style={styles.frameContainer14Bg}
            onPress={closeFrameContainer14}
          />
          <ViewDetails21 onClose={closeFrameContainer14} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer22Visible}>
        <View style={styles.frameContainer22Overlay}>
          <Pressable
            style={styles.frameContainer22Bg}
            onPress={closeFrameContainer22}
          />
          <ViewDetails12 onClose={closeFrameContainer22} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer30Visible}>
        <View style={styles.frameContainer30Overlay}>
          <Pressable
            style={styles.frameContainer30Bg}
            onPress={closeFrameContainer30}
          />
          <ViewDetails11 onClose={closeFrameContainer30} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer41Visible}>
        <View style={styles.frameContainer41Overlay}>
          <Pressable
            style={styles.frameContainer41Bg}
            onPress={closeFrameContainer41}
          />
          <RegularCleaning9 onClose={closeFrameContainer41} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  oneTimeService1Text: {
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
  },
  parentPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    width: 343,
    borderRadius: Border.br_3xs,
    height: 140,
  },
  frameChildPosition: {
    left: 0,
    top: 0,
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  seaLayout: {
    height: 24,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  homeSpaceBlock: {
    marginTop: 4,
    fontSize: FontSize.med_size,
  },
  groupItemLayout1: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  cleaningClr: {
    color: Color.praimary1,
    textTransform: "capitalize",
  },
  seaClr: {
    color: Color.gray,
    textAlign: "left",
  },
  cleaningTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  groupItemLayout: {
    height: 28,
    width: 74,
  },
  bookNowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameBorder: {
    padding: Padding.p_5xs,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  weeksTypo: {
    textAlign: "right",
    color: Color.grayBlack,
    fontSize: FontSize.size_3xs,
    textTransform: "capitalize",
  },
  navLayout1: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  navLayout: {
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
  groupChild4Layout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  bookNowTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  oneTimeService1: {
    top: 208,
    width: 131,
    height: 16,
    alignItems: "flex-end",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    display: "flex",
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    width: 343,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  regularCleaning: {
    color: Color.whait,
    width: 128,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
  },
  ourExpertCleaning: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  ourExpertCleaningContainer: {
    width: 170,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningParent: {
    top: 24,
  },
  frameItem: {
    marginTop: -70,
    right: 0,
    width: 139,
    top: "50%",
    height: 140,
    position: "absolute",
  },
  rectangleParent: {
    overflow: "hidden",
    height: 140,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    width: 343,
    borderRadius: Border.br_3xs,
  },
  beyondYourRegular: {
    width: 185,
    lineHeight: 16,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleGroup: {
    marginTop: 16,
    overflow: "hidden",
    height: 140,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    width: 343,
    borderRadius: Border.br_3xs,
  },
  forProfessionalGlass: {
    width: 169,
    lineHeight: 16,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleContainer: {
    marginTop: 16,
    overflow: "hidden",
    height: 140,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    width: 343,
    borderRadius: Border.br_3xs,
  },
  frameParent: {
    top: 240,
    left: "50%",
  },
  oneTimeServiceChild: {
    marginLeft: -164.5,
    top: 1163,
    width: 329,
    height: 34,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  yourPreviouslyAvailed: {
    width: 320,
    height: 16,
    alignItems: "flex-end",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    display: "flex",
    fontWeight: "600",
  },
  frameContainer14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChildShadowBox: {
    width: 88,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_sm,
    left: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 88,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    position: "absolute",
  },
  youngHousekeeperFemaleWithIcon: {
    height: 88,
    width: 89,
    left: 0,
    top: 0,
  },
  groupViewLayout: {
    height: 88,
    width: 89,
  },
  regularCleaning1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    color: Color.praimary1,
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  weeksTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningGroup: {
    width: 230,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    textTransform: "capitalize",
  },
  hours1: {
    textTransform: "lowercase",
  },
  hours: {
    marginTop: 6,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  text2: {
    fontFamily: FontFamily.poppinsRegular,
    width: 17,
    height: 7,
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    color: Color.gray,
    alignItems: "center",
    display: "flex",
  },
  vectorParent: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  sar: {
    color: Color.red,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sarWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    marginLeft: 8,
  },
  groupParent: {
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  groupItem: {
    marginTop: -14,
    marginLeft: -37,
    backgroundColor: Color.praimary1,
    borderRadius: Border.br_8xs,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  bookNow: {
    top: 6,
    left: 10,
    color: Color.colorWhitesmoke_100,
    width: 55,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    fontSize: FontSize.med_size,
    display: "flex",
    height: 16,
  },
  groupWrapper: {
    top: 68,
    left: 261,
    zIndex: 1,
    alignItems: "flex-end",
    position: "absolute",
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
  weeksAgo2: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  framePressable: {
    height: 104,
    justifyContent: "space-between",
    marginTop: 16,
  },
  frameContainer30Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer30Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent4: {
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 16,
  },
  yourPreviouslyAvailedServicParent: {
    top: 716,
    left: "50%",
  },
  fiRrZoomOutIcon: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  sea: {
    width: 242,
    marginLeft: 8,
    fontSize: FontSize.med_size,
    display: "flex",
    height: 24,
    alignItems: "center",
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
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    overflow: "hidden",
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  home: {
    lineHeight: 16,
    marginTop: 4,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
  },
  history: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
    lineHeight: 16,
    marginTop: 4,
    fontSize: FontSize.med_size,
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    lineHeight: 16,
    marginTop: 4,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer41Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer41Bg: {
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
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
    flexDirection: "row",
    backgroundColor: Color.whait,
    top: 0,
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
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    marginLeft: -187.5,
    width: 375,
    left: "50%",
    backgroundColor: Color.whait,
    height: 34,
  },
  navBarParent: {
    top: 722,
    height: 90,
    marginLeft: -187.5,
    width: 375,
    left: "50%",
  },
  groupChild3: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 99,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 375,
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  groupChild4: {
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
    width: 160,
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  rectangleParent7: {
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
  cleaning: {
    marginLeft: -33.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  oneTimeServiceInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  oneTimeService: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default OneTimeService5;
