import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PestControl = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pestControl}>
      <Text style={styles.oneTimeService}>One time service</Text>
      <Pressable
        style={[styles.rectangleParent, styles.frameLayout]}
        onPress={() => navigation.navigate("CleaningAndSterilizingTheP25")}
      >
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={[styles.regularPestControlParent, styles.arrow21Position]}>
          <Text style={styles.regularPestControl}>Regular pest control</Text>
          <Text style={[styles.eliminateAWide, styles.homeTypo1]}>
            Eliminate a wide range of common insects such as cockroaches, ants,
            spiders, flies, mosquitoes and rodents
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-436418.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={styles.fiRrZoomOutParent}>
          <Image
            style={styles.fiRrZoomOutIcon}
            resizeMode="cover"
            source={require("../assets/firrzoomout3.png")}
          />
          <Text style={styles.sea}>Sea</Text>
        </View>
      </View>
      <View style={[styles.navBarSignUpParent, styles.pestControlInnerLayout]}>
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
          <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
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
                style={styles.arrow21Layout}
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
            <View style={styles.navFlexBox}>
              <Image
                style={styles.arrow21Layout}
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
        <View style={[styles.webViewbottom, styles.groupChildBg]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.pestControlInner, styles.pestControlInnerLayout]}>
        <View style={[styles.pestControlInner, styles.pestControlInnerLayout]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Image
              style={styles.profmLogo1111}
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
          <Text style={styles.pestControl1}>pest control</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 140,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  searchPosition: {
    marginLeft: -171.5,
    overflow: "hidden",
    left: "50%",
  },
  pestControlInnerLayout: {
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  framePressableLayout: {
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
  groupChildBg: {
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
  oneTimeService: {
    top: 208,
    fontWeight: "600",
    color: Color.colorBlack,
    alignItems: "flex-end",
    width: 133,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.color,
    height: 140,
    position: "absolute",
    width: 343,
    borderRadius: Border.br_3xs,
  },
  regularPestControl: {
    lineHeight: 22,
    color: Color.whait,
    width: 175,
    height: 24,
    alignItems: "center",
    fontWeight: "700",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  eliminateAWide: {
    color: Color.colorGainsboro_400,
    width: 184,
    height: 63,
    marginTop: 8,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
  },
  regularPestControlParent: {
    top: 22,
  },
  frameItem: {
    marginTop: -70,
    top: "50%",
    right: 0,
    width: 139,
  },
  rectangleParent: {
    top: 240,
    backgroundColor: Color.colorSkyblue,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    height: 140,
    left: "50%",
    marginLeft: -171.5,
  },
  fiRrZoomOutIcon: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  sea: {
    width: 242,
    marginLeft: 8,
    color: Color.gray,
    fontSize: FontSize.med_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
    width: 343,
    left: "50%",
    position: "absolute",
  },
  home: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarSignUpInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    marginTop: 4,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    bottom: 34,
    height: 56,
    justifyContent: "center",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
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
    bottom: 0,
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
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
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
  pestControl1: {
    marginLeft: -45.5,
    top: 40,
    lineHeight: 30,
    color: Color.praimary1,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  pestControlInner: {
    height: 124,
    left: 0,
    top: 0,
  },
  pestControl: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default PestControl;
