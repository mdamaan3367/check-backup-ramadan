import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LocationForm from "../components/LocationForm";
import ContinueSection from "../components/ContinueSection";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const YourAddressLocation11 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View
        style={[
          styles.yourAddressLocationChild,
          styles.basemapImageIconPosition,
        ]}
      />
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.yourAddress, styles.arrow21Layout]}>
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
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
      />
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
  arrow21Layout: {
    height: 24,
    position: "absolute",
  },
  yourAddressLocationChild: {
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whait,
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
  icon: {
    height: "100%",
  },
  arrow21: {
    left: 16,
    width: 24,
    top: 43,
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
    alignItems: "center",
    justifyContent: "center",
    width: 175,
    left: "50%",
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
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default YourAddressLocation11;
