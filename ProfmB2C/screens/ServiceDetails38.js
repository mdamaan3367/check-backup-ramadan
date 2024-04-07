import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ServiceDetails38 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serviceDetails}>
      <View style={[styles.serviceDetailsChild, styles.framePosition]} />
      <Text style={[styles.regularCleaning, styles.regularCleaningTypo]}>
        Regular cleaning
      </Text>
      <Text
        style={[styles.beyondYourRegular, styles.homeTypo1]}
      >{`Beyond your regular cleaning, our trained staff tackles hidden gems often missed in daily routines. They meticulously detail your furnishings and conquer even the trickiest corners

`}</Text>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View
          style={[
            styles.removingDustFromCeilingFanParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text
            style={[styles.removingDustFrom, styles.removingDustFromLayout]}
          >
            Removing dust from ceiling fans and air vents
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Wall washing
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Steam carpet cleaning
          </Text>
          <Text
            style={[styles.wallWashing, styles.wallWashingTypo]}
          >{`Wash windows inside and out `}</Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Cleaning microwaves, oven and fridge inside and out
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Mould Removal
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Wiping down of cabinets
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Vacuuming door tracks
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Scrubbing/Waxing-Light Shampooing
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Removing dust from baseboards
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Removal of stains and grime from tile grouts
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Thorough cleaning of bathroom surfaces
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Deep cleaning upholstered furniture
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Scrubbing floor stains
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.serviceDetailsItem, styles.framePosition]} />
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View
          style={[
            styles.removingDustFromCeilingFanParent,
            styles.webViewbottomPosition,
          ]}
        >
          <Text
            style={[styles.removingDustFrom, styles.removingDustFromLayout]}
          >
            Carpet Cleaning
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Blinds IE Venetians
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Pool Maintenance
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Garden Maintenance
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Rubbish Removal
          </Text>
          <Text style={[styles.wallWashing, styles.wallWashingTypo]}>
            Furnished properties
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Pest Control
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Upholstery Cleaning
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Pressure Cleaning
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            Moving furniture or other heavy objects over 25 kg
          </Text>
          <Text style={[styles.removalOfStained, styles.wallWashingTypo]}>
            Removal of Stained silicone, paint, AC filters, concrete stains,
            etc.
          </Text>
          <Text style={[styles.cleaningMicrowavesOven, styles.wallWashingTypo]}>
            All types of utilities, such as electricity, water, gas, etc
          </Text>
        </View>
        <Text style={[styles.servicesProvided, styles.regularCleaningTypo]}>
          Services Exclude
        </Text>
      </View>
      <View style={styles.navBarSignUpParent}>
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
        <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleParent}
          resizeMode="cover"
          source={require("../assets/rectangle-432722.png")}
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
            source={require("../assets/profm-logo1-1-1-14.png")}
          />
          <Text style={styles.cleaningWithThe}>
            Cleaning with the latest equipment
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
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
  webViewbottomPosition: {
    top: 56,
    position: "absolute",
  },
  removingDustFromLayout: {
    width: 329,
    height: 16,
  },
  wallWashingTypo: {
    marginTop: 8,
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
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
  serviceDetailsChild: {
    top: 208,
    height: 128,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
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
  beyondYourRegular: {
    top: 264,
    letterSpacing: 0.1,
    color: Color.grayBlack,
    height: 48,
    width: 343,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  removingDustFrom: {
    height: 16,
    color: Color.gray,
    width: 329,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  wallWashing: {
    width: 252,
    height: 16,
  },
  cleaningMicrowavesOven: {
    height: 16,
    width: 329,
  },
  removingDustFromCeilingFanParent: {
    left: 16,
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
    top: 344,
    height: 408,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  serviceDetailsItem: {
    top: 1174,
    left: 24,
    width: 333,
    height: 40,
  },
  removalOfStained: {
    height: 32,
    width: 343,
  },
  frameGroup: {
    top: 760,
    height: 376,
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
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
    bottom: 34,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
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
    width: 375,
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    height: 208,
    width: 375,
    position: "absolute",
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
  cleaningWithThe: {
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

export default ServiceDetails38;
