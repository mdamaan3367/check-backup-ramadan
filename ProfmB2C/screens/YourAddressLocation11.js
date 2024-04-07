import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LocationForm from "../components/LocationForm";
import ContinueSection from "../components/ContinueSection";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const YourAddressLocation111 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View
        style={[
          styles.yourAddressLocationChild,
          styles.basemapImageIconPosition,
        ]}
      />
      <Text style={[styles.yourAddress, styles.yourAddressFlexBox]}>
        Your Address / Location
      </Text>
      <LocationForm />
      <Image
        style={[styles.basemapImageIcon, styles.basemapImageIconPosition]}
        resizeMode="cover"
        source={require("../assets/basemap-image.png")}
      />
      <ContinueSection />
      <Image
        style={styles.yourAddressLocationItem}
        resizeMode="cover"
        source={require("../assets/group-2387241.png")}
      />
      <View style={[styles.arrow21Parent, styles.yourAddressFlexBox]}>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-13.png")}
          />
        </Pressable>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  basemapImageIconPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  yourAddressFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  yourAddressLocationChild: {
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.lightBGPrimary,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 86,
  },
  yourAddress: {
    marginLeft: -87.5,
    top: 102,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 175,
    height: 24,
    left: "50%",
    alignItems: "center",
  },
  basemapImageIcon: {
    top: 214,
    height: 362,
  },
  yourAddressLocationItem: {
    top: 360,
    left: 150,
    width: 25,
    height: 35,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow21: {
    width: 24,
    height: 24,
  },
  icon1: {
    width: 70,
    height: 27,
    marginLeft: 113,
  },
  arrow21Parent: {
    top: 43,
    left: 16,
    flexDirection: "row",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default YourAddressLocation111;
