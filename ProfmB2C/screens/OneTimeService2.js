import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const OneTimeService2 = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={[styles.oneTimeService,{height:windowHeight, width:windowWidth}]}>
      <View style={styles.search}>
        <View style={styles.fiRrZoomOutParent}>
          <Image
            style={[styles.fiRrZoomOutIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/firrzoomout.png")}
          />
          <Text style={[styles.sea, styles.seaFlexBox]}>Sea</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={styles.refresh2Parent}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/refresh2.png")}
            />
            <Text style={[styles.contractExpiresIn, styles.contractTypo]}>
              Contract expires in 15 days
            </Text>
          </View>
          <Pressable
            style={styles.buttonSmall}
            onPress={() => navigation.navigate("YourAddressLocation")}
          >
            <Text style={[styles.contractRenewal, styles.contractRenewalClr]}>
              contract renewal
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.oneTimeServiceChild} />
      <View style={[styles.yearlyServiceParent, styles.parentPosition]}>
        <Text style={styles.yearlyService}>yearly service</Text>
        <View style={styles.frameGroup}>
          <Pressable
            style={[styles.rectangleGroup, styles.groupShadowBox]}
            onPress={() => navigation.navigate("RegularCleaning1")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.groupItemPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.cleaningTypo]}>
                Regular cleaning
              </Text>
              <Text
                style={[styles.ourExpertCleaningContainer, styles.homeTypo]}
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
            style={[styles.rectangleContainer, styles.groupShadowBox]}
            onPress={() => navigation.navigate("DeepCleaning2")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.groupItemPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.cleaningTypo]}>
                deep cleaning
              </Text>
              <Text style={[styles.beyondYourRegular, styles.homeTypo]}>
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
            style={[styles.framePressable, styles.groupShadowBox]}
            onPress={() => navigation.navigate("FacadeCleaning2")}
          >
            <LinearGradient
              style={[styles.frameChild, styles.groupItemPosition]}
              locations={[0, 1]}
              colors={["#004c77", "#0386cf"]}
              useAngle={true}
              angle={90}
            />
            <View
              style={[styles.regularCleaningParent, styles.arrow21Position]}
            >
              <Text style={[styles.regularCleaning, styles.cleaningTypo]}>
                Facade cleaning
              </Text>
              <Text style={[styles.forProfessionalGlass, styles.homeTypo]}>
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
      </View>
      <View
        style={[styles.navBarSignUpParent, styles.navBarSignUpParentLayout]}
      >
        <View style={[styles.navBarSignUp, styles.navFlexBox]}>
          <Pressable
            style={[styles.navBarSignUpInner, styles.navFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/home221.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarSignUpChild, styles.navLayout]}>
            <View style={styles.clockParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
          <Pressable
            style={styles.navLayout}
            onPress={() => navigation.navigate("Bookings")}
          >
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/calendartick6.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.clockParent}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navLayout}
            onPress={() => navigation.navigate("Menu")}
          >
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.arrow21Layout}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.webViewbottom, styles.groupItemBg]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View
        style={[styles.oneTimeServiceInner, styles.navBarSignUpParentLayout]}
      >
        <View
          style={[styles.oneTimeServiceInner, styles.navBarSignUpParentLayout]}
        >
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.rectangleParent1, styles.groupInnerLayout]}>
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
            <Image
              style={[styles.profmLogo1111, styles.parentPosition]}
              resizeMode="cover"
              source={require("../assets/profm-logo1-1-1-111.png")}
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
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 16,
    width: 16,
  },
  seaFlexBox: {
    marginLeft: 8,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.med_size,
    alignItems: "center",
  },
  groupChildPosition: {
    height: 60,
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  contractTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  contractRenewalClr: {
    color: Color.whait,
    height: 24,
    display: "flex",
    alignItems: "center",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  cleaningTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  navBarSignUpParentLayout: {
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
  groupItemBg: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    height: 24,
  },
  fiRrZoomOutIcon: {
    overflow: "hidden",
  },
  sea: {
    width: 242,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    marginLeft: 8,
    display: "flex",
    color: Color.gray,
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  search: {
    top: 140,
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
    width: 343,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorMintcream,
    borderColor: Color.praimary1,
    borderWidth: 0.3,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 60,
  },
  contractExpiresIn: {
    width: 151,
    color: Color.praimary1,
    textTransform: "capitalize",
    fontWeight: "300",
    marginLeft: 8,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.med_size,
    alignItems: "center",
    height: 16,
  },
  refresh2Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  contractRenewal: {
    width: 101,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    color: Color.whait,
    fontSize: FontSize.med_size,
  },
  buttonSmall: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPeru,
    width: 113,
    height: 28,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_sm,
    marginLeft: 31,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: -159.5,
    top: 16,
    width: 319,
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleParent: {
    top: 200,
  },
  oneTimeServiceChild: {
    top: 827,
    left: 33,
    width: 299,
    height: 51,
    overflow: "hidden",
    position: "absolute",
  },
  yearlyService: {
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 122,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 343,
    position: "absolute",
  },
  regularCleaning: {
    width: 128,
    color: Color.whait,
    height: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontWeight: "700",
  },
  ourExpertCleaning: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  ourExpertCleaningContainer: {
    width: 172,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningParent: {
    top: 24,
  },
  frameItem: {
    marginTop: -70,
    top: "50%",
    right: 0,
    width: 139,
    height: 140,
    position: "absolute",
  },
  rectangleGroup: {
    height: 140,
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
    overflow: "hidden",
    width: 343,
  },
  beyondYourRegular: {
    width: 185,
    lineHeight: 16,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleContainer: {
    height: 140,
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
    overflow: "hidden",
    width: 343,
    marginTop: 16,
  },
  forProfessionalGlass: {
    width: 174,
    lineHeight: 16,
    height: 65,
    color: Color.colorGainsboro_400,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  framePressable: {
    height: 140,
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
    overflow: "hidden",
    width: 343,
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 16,
  },
  yearlyServiceParent: {
    top: 284,
    marginLeft: -171.5,
    left: "50%",
  },
  home: {
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 4,
    color: Color.gray,
  },
  navBarSignUpInner: {
    width: 93,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    lineHeight: 16,
    marginTop: 4,
    color: Color.gray,
  },
  clockParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    marginTop: 4,
    color: Color.gray,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    flexDirection: "row",
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
  navBarSignUpParent: {
    top: 722,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
  },
  groupItem: {
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
  },
  groupInner: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    top: 0,
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
    textAlign: "center",
    color: Color.praimary1,
    left: "50%",
    position: "absolute",
  },
  oneTimeServiceInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  oneTimeService: {
    backgroundColor: Color.colorGray_100,
    flex: 1
  },
});

export default OneTimeService2;
