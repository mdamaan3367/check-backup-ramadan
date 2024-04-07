import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails45 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.serviceDetailsChild, styles.servicePosition]} />
      <Text style={[styles.regularCleaning, styles.regularCleaningTypo]}>
        Regular cleaning
      </Text>
      <Text
        style={[styles.profmTeamConsists, styles.homeTypo1]}
      >{`PROFM team consists of skilled and proficient cleaners who excel at their craft They are equipped with the knowledge and experience to meet your specific cleaning requirements effectively
`}</Text>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.tidyingAndOrganizedRoomsCoParent}>
          <Text style={styles.tidyingAndOrganized}>
            Tidying and organized rooms convey order and comfort
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Wiping windows, mirrors, and glass
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Mobbing the floors
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Wiping surfaces in kitchens and bathrooms
          </Text>
          <Text
            style={[styles.wipingWindowsMirrors, styles.waterTypo]}
          >{`Empty Waste Basket & Clean Ashtrays`}</Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            General dusting, furniture, and fixtures.
          </Text>
          <Text style={[styles.generalCleaningEquipment, styles.waterTypo]}>
            General cleaning equipment and materials that are used for house
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.tidyingAndOrganizedRoomsCoParent}>
          <Text style={styles.tidyingAndOrganized}>Broom and dustpan</Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Vacuum cleaner
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Rubber Gloves
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Mop
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            Floor Cleaning Cloths
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            All-purpose cleaner
          </Text>
          <Text style={[styles.water, styles.waterTypo]}>Water</Text>
        </View>
        <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
          Equipment used
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.servicePosition]}>
        <View style={styles.tidyingAndOrganizedRoomsCoParent}>
          <Text style={styles.tidyingAndOrganized}>Deep Cleaning</Text>
          <Text
            style={[styles.movingFurnitureOr, styles.movingFurnitureOrTypo]}
          >
            Moving furniture or other heavy objects over twenty-five kgs
          </Text>
          <Text
            style={[styles.cleaningOfKnickKnacks, styles.movingFurnitureOrTypo]}
          >
            Cleaning of knick-knacks picture frames, vases, lamps, clocks, fruit
            bowls, linen and any item that may be decorative
          </Text>
          <Text style={[styles.wipingWindowsMirrors, styles.waterTypo]}>
            All types of electricity, water, gas, etc
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
          Services Include
        </Text>
      </View>
      <View style={[styles.serviceDetailsItem, styles.servicePosition]} />
      <View style={[styles.webViewbottomParent, styles.frameContainerPosition]}>
        <View style={styles.webViewbottom}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
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
          <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
            <View style={styles.navFlexBox}>
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
            <View style={styles.navFlexBox}>
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
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.navBarSignUpPosition]}>
        <Image
          style={[styles.rectangleParent, styles.navBarSignUpPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4327111.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-2387371.png")}
          />
        </Pressable>
        <View style={styles.profmLogo1111Parent}>
          <Image
            style={styles.profmLogo1111}
            resizeMode="cover"
            source={require("../assets/profm-logo1-1-1-11.png")}
          />
          <Text
            style={styles.cleaningWithSpecialized}
          >{`cleaning with specialized hands

`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  regularCleaningTypo: {
    display: "flex",
    textAlign: "left",
    height: 24,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  homeTypo1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  framePosition: {
    height: 256,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  waterTypo: {
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  movingFurnitureOrTypo: {
    width: 341,
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameContainerPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
    justifyContent: "center",
    paddingHorizontal: 0,
    alignItems: "center",
  },
  navBarSignUpPosition: {
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  serviceDetailsChild: {
    top: 208,
    height: 148,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  regularCleaning: {
    top: 232,
    color: Color.black,
    width: 128,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "left",
  },
  profmTeamConsists: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    width: 343,
    height: 68,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  tidyingAndOrganized: {
    height: 16,
    width: 329,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  wipingWindowsMirrors: {
    width: 252,
    height: 16,
  },
  generalCleaningEquipment: {
    height: 32,
    width: 329,
  },
  tidyingAndOrganizedRoomsCoParent: {
    top: 56,
    left: 16,
    position: "absolute",
  },
  servicesProvided: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    width: 149,
    height: 24,
    alignItems: "center",
  },
  frameParent: {
    top: 364,
  },
  water: {
    height: 16,
    width: 329,
  },
  frameGroup: {
    top: 628,
  },
  movingFurnitureOr: {
    height: 16,
    lineHeight: 16,
  },
  cleaningOfKnickKnacks: {
    lineHeight: 18,
    height: 32,
  },
  frameContainer: {
    top: 892,
    height: 184,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
  },
  serviceDetailsItem: {
    top: 1084,
    left: 24,
    width: 333,
    height: 40,
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
    paddingHorizontal: 0,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 56,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  home2Icon: {
    width: 24,
    height: 24,
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
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  webViewbottomParent: {
    top: 722,
    height: 90,
    position: "absolute",
  },
  rectangleParent: {
    height: 208,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: 16,
    position: "absolute",
  },
  profmLogo1111: {
    width: 200,
    height: 73,
  },
  cleaningWithSpecialized: {
    color: Color.whait,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  profmLogo1111Parent: {
    top: 65,
    left: 48,
    alignItems: "center",
    position: "absolute",
  },
  serviceDetails: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default ServiceDetails45;
