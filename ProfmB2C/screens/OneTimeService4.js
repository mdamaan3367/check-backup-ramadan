import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const OneTimeService4 = () => {
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
      <View style={styles.oneTimeService}>
        <Text style={styles.monthlyService}>Monthly service</Text>
        <View style={[styles.frameParent, styles.searchPosition]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupChildShadowBox]}
            onPress={() => navigation.navigate("RegularCleaning4")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436427.png")}
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
                  styles.beyondYourRegularTypo,
                ]}
              >
                <Text
                  style={styles.ourExpertCleaning}
                >{`Our expert cleaning team brings skill proficiency and extensive experience to exceed your specific cleaning needs
`}</Text>
                <Text style={styles.blankLine}> </Text>
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("DeepCleaning5")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-4365.png")}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.seaLayout]}>
                deep cleaning
              </Text>
              <Text
                style={[styles.beyondYourRegular, styles.beyondYourRegularTypo]}
              >
                Beyond your regular cleaning routines, our trained professionals
                go the extra mile to tackle forgotten areas and hidden spots
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.rectangleShadowBox}
            onPress={() => navigation.navigate("FacadeCleaning4")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.childPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-436428.png")}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.seaLayout]}>
                Facade cleaning
              </Text>
              <Text
                style={[
                  styles.forProfessionalGlass,
                  styles.beyondYourRegularTypo,
                ]}
              >
                For professional glass and stone facade cleaning services for a
                striking appearance choose clean service
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.search, styles.searchPosition]}>
          <View style={styles.fiRrZoomOutParent}>
            <Image
              style={styles.fiRrZoomOutIcon}
              resizeMode="cover"
              source={require("../assets/firrzoomout3.png")}
            />
            <Text style={[styles.sea, styles.seaTypo]}>Sea</Text>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navBarParentLayout]}>
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
                <Text style={[styles.home, styles.seaTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.seaTypo]}>History</Text>
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
                <Text style={[styles.bookings, styles.seaTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer15}
            >
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.seaTypo]}>account</Text>
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
                  style={styles.arrow21Layout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.seaTypo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.navBarBg]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.oneTimeServiceInner, styles.navBarParentLayout]}>
          <View style={[styles.oneTimeServiceInner, styles.navBarParentLayout]}>
            <View style={[styles.groupChild, styles.navBarBg]} />
            <View style={[styles.rectangleParent1, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.profmLogo1111, styles.searchPosition]}
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
            <Text style={[styles.cleaning, styles.cleaningTypo]}>Cleaning</Text>
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
  searchPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  childPosition: {
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
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  beyondYourRegularTypo: {
    height: 65,
    color: Color.colorGainsboro_400,
    fontSize: FontSize.med_size,
    marginTop: 4,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  seaTypo: {
    color: Color.gray,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  navBarParentLayout: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  navBarBg: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  groupItemLayout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  cleaningTypo: {
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  monthlyService: {
    top: 208,
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 122,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
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
  frameItem: {
    marginTop: -70,
    top: "50%",
    right: 0,
    width: 139,
    height: 140,
    position: "absolute",
  },
  regularCleaning: {
    color: Color.whait,
    width: 128,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
    height: 24,
  },
  ourExpertCleaning: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  ourExpertCleaningContainer: {
    width: 173,
    marginTop: 4,
  },
  regularCleaningParent: {
    top: 24,
  },
  rectangleParent: {
    overflow: "hidden",
    height: 140,
    width: 343,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_3xs,
  },
  beyondYourRegular: {
    width: 185,
    lineHeight: 16,
    marginTop: 4,
  },
  rectangleShadowBox: {
    marginTop: 16,
    overflow: "hidden",
    height: 140,
    width: 343,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_3xs,
  },
  forProfessionalGlass: {
    width: 170,
    lineHeight: 16,
    marginTop: 4,
  },
  frameParent: {
    top: 240,
    marginLeft: -171.5,
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
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    top: 140,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
    width: 343,
    marginLeft: -171.5,
    left: "50%",
  },
  home: {
    lineHeight: 16,
    marginTop: 4,
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
    lineHeight: 16,
    marginTop: 4,
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    lineHeight: 16,
    marginTop: 4,
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
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
    flexDirection: "row",
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
    height: 34,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    marginLeft: -187.5,
    left: "50%",
  },
  navBarParent: {
    top: 722,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    top: 0,
    width: 160,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  profmLogo1111: {
    marginLeft: -50,
    top: 7,
    width: 100,
    height: 36,
  },
  rectangleParent1: {
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
    textAlign: "center",
    left: "50%",
    position: "absolute",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
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

export default OneTimeService4;
