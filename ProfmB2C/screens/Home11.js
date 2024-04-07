import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "./RegularCleaning";
import YearlyServiceSection from "../components/YearlyServiceSection";
import BestOffersSection from "../components/BestOffersSection";
import ViewDetails21 from "../components/ViewDetails21";
import ViewDetails12 from "../components/ViewDetails12";
import ViewDetails11 from "../components/ViewDetails11";
import Property1Default3 from "./Property1Default3";
import FormContainer from "../components/FormContainer";
import SectionMenu from "../components/SectionMenu";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Home11 = () => {
  const [frameContainer5Visible, setFrameContainer5Visible] = useState(false);
  const [frameContainer13Visible, setFrameContainer13Visible] = useState(false);
  const [frameContainer21Visible, setFrameContainer21Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer5 = useCallback(() => {
    setFrameContainer5Visible(true);
  }, []);

  const closeFrameContainer5 = useCallback(() => {
    setFrameContainer5Visible(false);
  }, []);

  const openFrameContainer13 = useCallback(() => {
    setFrameContainer13Visible(true);
  }, []);

  const closeFrameContainer13 = useCallback(() => {
    setFrameContainer13Visible(false);
  }, []);

  const openFrameContainer21 = useCallback(() => {
    setFrameContainer21Visible(true);
  }, []);

  const closeFrameContainer21 = useCallback(() => {
    setFrameContainer21Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Text style={[styles.services, styles.bookNowLayout]}>Services</Text>
        <View style={styles.homeChild} />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <YearlyServiceSection />
          <BestOffersSection />
          <View style={styles.groupParent}>
            <View style={styles.groupLayout1}>
              <View style={styles.frameParentShadowBox}>
                <View style={styles.groupContainer}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChildShadowBox} />
                    <Image
                      style={styles.youngHousekeeperFemaleWithIcon}
                      resizeMode="cover"
                      source={require("../assets/younghousekeeperfemalewithcleaningsupply-1.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View>
                      <Text style={[styles.regularCleaning, styles.signIn1Clr]}>
                        Regular cleaning
                      </Text>
                      <Text style={[styles.hours, styles.hoursClr]}>
                        <Text style={styles.text}>{`(2 `}</Text>
                        <Text style={styles.hours1}>hours)</Text>
                      </Text>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector.png")}
                        />
                        <Text style={[styles.text1, styles.sar2Clr]}>4.3</Text>
                      </View>
                    </View>
                    <View style={styles.sarParent}>
                      <Text style={[styles.sar, styles.sarTypo]}>
                        <Text style={styles.text}>{`79 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                      <Text style={[styles.sar2, styles.sar2Clr]}>
                        <Text style={styles.text}>{`100 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={styles.groupWrapper}
                  onPress={openFrameContainer5}
                >
                  <View style={styles.groupLayout}>
                    <View style={[styles.groupItem, styles.iconPosition]} />
                    <Text style={[styles.bookNow, styles.groupFlexBox]}>
                      Book Now
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.off30Wrapper, styles.wrapperBorder]}>
                <Text style={[styles.off30, styles.sarTypo]}>off 30 %</Text>
              </View>
            </View>
            <View style={[styles.groupView, styles.groupLayout1]}>
              <View style={styles.frameParentShadowBox}>
                <View style={styles.groupContainer}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChildShadowBox} />
                    <Image
                      style={styles.youngHousekeeperFemaleWithIcon}
                      resizeMode="cover"
                      source={require("../assets/younghousekeeperfemalewithcleaningsupply-11.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View>
                      <Text style={[styles.regularCleaning, styles.signIn1Clr]}>
                        deep cleaning
                      </Text>
                      <Text style={[styles.hours, styles.hoursClr]}>
                        <Text style={styles.text}>{`(4 `}</Text>
                        <Text style={styles.hours1}>hours)</Text>
                      </Text>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector.png")}
                        />
                        <Text style={[styles.text1, styles.sar2Clr]}>4.6</Text>
                      </View>
                    </View>
                    <View style={styles.sarParent}>
                      <Text style={[styles.sar, styles.sarTypo]}>
                        <Text style={styles.text}>{`240 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                      <Text style={[styles.sar2, styles.sar2Clr]}>
                        <Text style={styles.text}>{`300 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={styles.groupWrapper}
                  onPress={openFrameContainer13}
                >
                  <View style={styles.groupLayout}>
                    <View style={[styles.groupItem, styles.iconPosition]} />
                    <Text style={[styles.bookNow, styles.groupFlexBox]}>
                      Book Now
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.off30Wrapper, styles.wrapperBorder]}>
                <Text style={[styles.off30, styles.sarTypo]}>off 20 %</Text>
              </View>
            </View>
            <View style={[styles.groupView, styles.groupLayout1]}>
              <View style={styles.frameParentShadowBox}>
                <View style={styles.groupContainer}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChildShadowBox} />
                    <Image
                      style={styles.youngHousekeeperFemaleWithIcon}
                      resizeMode="cover"
                      source={require("../assets/younghousekeeperfemalewithcleaningsupply-12.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View>
                      <Text style={[styles.regularCleaning, styles.signIn1Clr]}>
                        Facade cleaning
                      </Text>
                      <Text style={[styles.hours, styles.hoursClr]}>
                        <Text style={styles.text}>{`(4 `}</Text>
                        <Text style={styles.hours1}>hours)</Text>
                      </Text>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector.png")}
                        />
                        <Text style={[styles.text1, styles.sar2Clr]}>4.8</Text>
                      </View>
                    </View>
                    <View style={styles.sarParent}>
                      <Text style={[styles.sar, styles.sarTypo]}>
                        <Text style={styles.text}>{`700 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                      <Text style={[styles.sar2, styles.sar2Clr]}>
                        <Text style={styles.text}>{`900 SAR `}</Text>
                        <Text style={styles.hours1}>{` `}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={styles.groupWrapper}
                  onPress={openFrameContainer21}
                >
                  <View style={styles.groupLayout}>
                    <View style={[styles.groupItem, styles.iconPosition]} />
                    <Text style={[styles.bookNow, styles.groupFlexBox]}>
                      Book Now
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.off15Wrapper, styles.wrapperBorder]}>
                <Text style={[styles.off30, styles.sarTypo]}>off 15 %</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent6, styles.frameParentPosition]}>
          <View style={styles.guestUserParent}>
            <Text style={[styles.guestUser, styles.guestUserTypo]}>
              <Text style={styles.text}>{`Guest `}</Text>
              <Text style={styles.hours1}>user</Text>
            </Text>
            <View style={[styles.groupGroup, styles.groupFlexBox]}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
              <Text style={[styles.alRawdahDistrict, styles.bookNowTypo]}>
                Al Rawdah district , Jeddah
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.signIn}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={[styles.signIn1, styles.sarTypo1]}>Sign in</Text>
          </Pressable>
        </View>
        <Property1Default3
          fiRrZoomOut={require("../assets/firrzoomout.png")}
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={-171.5}
          property1DefaultTop={141}
          property1DefaultLeft="50%"
        />
        <FormContainer />
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
        <SectionMenu
          iconCode={require("../assets/calendartick4.png")}
          iconTextCode={require("../assets/vuesaxlinearuser.png")}
          propTop="unset"
          propBottom={0}
          propTop1="unset"
          propBottom1={34}
          onFramePressablePress={() => navigation.navigate("Bookings2")}
          onFramePressablePress1={openFrameContainer5}
          onFramePressablePress2={() => navigation.navigate("Menu2")}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer5Visible}>
        <View style={styles.frameContainer5Overlay1}>
          <Pressable
            style={styles.frameContainer5Bg1}
            onPress={closeFrameContainer5}
          />
          <RegularCleaning9 onClose={closeFrameContainer5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer5Visible}>
        <View style={styles.frameContainer5Overlay}>
          <Pressable
            style={styles.frameContainer5Bg}
            onPress={closeFrameContainer5}
          />
          <ViewDetails21 onClose={closeFrameContainer5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer13Visible}>
        <View style={styles.frameContainer13Overlay}>
          <Pressable
            style={styles.frameContainer13Bg}
            onPress={closeFrameContainer13}
          />
          <ViewDetails12 onClose={closeFrameContainer13} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer21Visible}>
        <View style={styles.frameContainer21Overlay}>
          <Pressable
            style={styles.frameContainer21Bg}
            onPress={closeFrameContainer21}
          />
          <ViewDetails11 onClose={closeFrameContainer21} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bookNowLayout: {
    height: 16,
    display: "flex",
    position: "absolute",
  },
  frameParentPosition: {
    left: 16,
    position: "absolute",
  },
  signIn1Clr: {
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  hoursClr: {
    color: Color.grayBlack,
    fontWeight: "300",
  },
  sar2Clr: {
    color: Color.gray,
    textAlign: "left",
  },
  sarTypo: {
    color: Color.red,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  iconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBorder: {
    padding: Padding.p_9xs,
    borderColor: Color.red,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 0,
    flexDirection: "row",
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  groupLayout1: {
    height: 115,
    width: 343,
  },
  guestUserTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  bookNowTypo: {
    textAlign: "center",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  sarTypo1: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameContainer5Overlay1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer5Bg1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  services: {
    top: 392,
    width: 68,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    height: 16,
    left: 16,
  },
  homeChild: {
    marginLeft: -174.5,
    top: 1215,
    width: 349,
    height: 97,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChildShadowBox: {
    width: 88,
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_sm,
    left: 1,
    top: 0,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    position: "absolute",
  },
  youngHousekeeperFemaleWithIcon: {
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    height: 88,
    width: 89,
    position: "absolute",
  },
  rectangleParent: {
    height: 88,
    width: 89,
  },
  regularCleaning: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  text: {
    textTransform: "capitalize",
  },
  hours1: {
    textTransform: "lowercase",
  },
  hours: {
    marginTop: 6,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 17,
    height: 7,
    marginLeft: 4,
    alignItems: "center",
    display: "flex",
  },
  vectorParent: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  sar: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  sar2: {
    textDecoration: "line-through",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  sarParent: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    marginLeft: 8,
  },
  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    marginTop: -14,
    marginLeft: -37,
    backgroundColor: Color.praimary1,
    height: 28,
    width: 74,
    borderRadius: Border.br_8xs,
  },
  bookNow: {
    top: 6,
    left: 10,
    color: Color.colorWhitesmoke_100,
    width: 55,
    textAlign: "center",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    display: "flex",
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    width: 74,
  },
  groupWrapper: {
    alignItems: "flex-end",
  },
  frameParentShadowBox: {
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.lightBGPrimary,
    borderRadius: Border.br_3xs,
    top: 11,
    marginLeft: -171.5,
    alignItems: "flex-end",
    flexDirection: "row",
    width: 343,
    left: "50%",
    position: "absolute",
  },
  off30: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  off30Wrapper: {
    left: 291,
  },
  frameContainer13Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer13Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupView: {
    marginTop: 16,
  },
  frameContainer21Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer21Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  off15Wrapper: {
    left: 295,
  },
  groupParent: {
    marginTop: 24,
  },
  frameParent: {
    top: 424,
  },
  guestUser: {
    width: 91,
    fontWeight: "300",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  groupIcon: {
    width: 10,
    height: 14,
  },
  alRawdahDistrict: {
    marginLeft: 4,
    color: Color.grayBlack,
    fontWeight: "300",
  },
  groupGroup: {
    marginTop: 4,
    height: 14,
    flexDirection: "row",
  },
  guestUserParent: {
    height: 37,
  },
  signIn1: {
    lineHeight: 30,
    textAlign: "right",
    width: 50,
    height: 24,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    display: "flex",
  },
  signIn: {
    marginLeft: 135,
  },
  frameParent6: {
    top: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginTop: -362,
    marginLeft: -34.5,
    width: 70,
    height: 27,
  },
  home: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Home11;
