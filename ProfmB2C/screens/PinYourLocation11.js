import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import Property1Default from "../components/Property1Default";
import SearchSection from "../components/SearchSection";
import LocationPickerForm from "../components/LocationPickerForm";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PinYourLocation111 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pinYourLocation, styles.iconLayout]}>
      <Image
        style={styles.basemapImageIcon}
        resizeMode="cover"
        source={require("../assets/basemap-image1.png")}
      />
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="#fafdff"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop={778}
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={5}
        webViewBottomBorderBottomLeftRadius={5}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom="unset"
        homeIndicatorBackgroundColor="#1d2939"
      />
      <View style={styles.pinYourLocationChild} />
      <View style={styles.pinYourLocationItem} />
      <View style={styles.arrow21Parent}>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-11.png")}
          />
        </Pressable>
        <Text style={styles.pinYourLocationContainer}>
          <Text style={styles.p}>p</Text>in your location
        </Text>
      </View>
      <Property1Default
        logIn="Continue"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={730}
        property1DefaultLeft="50%"
        property1DefaultWidth={343}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={44}
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("YourAddressLocation11")}
      />
      <Image
        style={styles.pinYourLocationInner}
        resizeMode="cover"
        source={require("../assets/group-23872411.png")}
      />
      <SearchSection />
      <LocationPickerForm />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame151.png")}
        />
        <Text style={styles.setNewLocationContainer}>
          <Text style={styles.setNewLocation}>{`Set new location
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require("../assets/frame16.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require("../assets/frame17.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    left: 335,
    height: 24,
    width: 24,
    position: "absolute",
  },
  basemapImageIcon: {
    top: 20,
    height: 792,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  pinYourLocationChild: {
    top: 714,
    height: 64,
    backgroundColor: Color.whait,
    left: 0,
    width: 375,
    position: "absolute",
  },
  pinYourLocationItem: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 86,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  p: {
    textTransform: "capitalize",
  },
  pinYourLocationContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.praimary1,
    textAlign: "center",
    marginLeft: 86,
    fontFamily: FontFamily.dGBaysan,
  },
  arrow21Parent: {
    top: 40,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  pinYourLocationInner: {
    top: 411,
    left: 115,
    width: 50,
    height: 50,
    position: "absolute",
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  setNewLocation: {
    fontSize: FontSize.med_size,
  },
  blankLine: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  setNewLocationContainer: {
    fontWeight: "300",
    color: Color.grayBlack,
    textAlign: "left",
    width: 88,
    height: 13,
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent: {
    top: 662,
    left: 229,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_4xs,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupShadowBox: {
    borderRadius: Border.br_11xs,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 24,
    width: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    backgroundColor: Color.whait,
    left: 0,
    position: "absolute",
  },
  frameIcon1: {
    top: 6,
    left: 6,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 273,
  },
  rectangleGroup: {
    top: 245,
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default PinYourLocation111;
