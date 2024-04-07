import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const PinYourLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pinYourLocation}>
      <Image
        style={styles.basemapImageIcon}
        resizeMode="cover"
        source={require("../assets/basemap-image1.png")}
      />
      <View style={styles.webViewbottom}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.pinYourLocationChild} />
      <View style={styles.pinYourLocationItem} />
      <View style={[styles.arrow21Parent, styles.arrow21ParentFlexBox]}>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/arrow-2-11.png")}
          />
        </Pressable>
        <Text style={styles.pinYourLocationContainer}>
          <Text style={styles.p}>p</Text>in your location
        </Text>
      </View>
      <Pressable
        style={styles.buttonBig}
        onPress={() => navigation.navigate("Home1")}
      >
        <View style={[styles.buttonBigChild, styles.iconLayout1]} />
        <Text style={styles.logIn}>use current location</Text>
      </Pressable>
      <Image
        style={styles.pinYourLocationInner}
        resizeMode="cover"
        source={require("../assets/group-238724.png")}
      />
      <View style={[styles.frameView, styles.frameViewShadowBox]}>
        <View style={styles.frameWrapper}>
          <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/firrzoomout2.png")}
            />
            <Text style={[styles.search, styles.searchSpaceBlock]}>Search</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.frameParent, styles.moveTheMapLayout]}>
          <Image
            style={[styles.frameIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame14.png")}
          />
          <Text style={[styles.moveTheMap, styles.locationTypo]}>
            Move the map or enter your address to set your pickup location
          </Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupShadowBox]}>
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
        <Text style={[styles.setNewLocationContainer, styles.locationTypo]}>
          <Text style={styles.setNewLocation}>{`Set new location
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={styles.frameIcon2}
          resizeMode="cover"
          source={require("../assets/frame16.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={styles.frameIcon2}
          resizeMode="cover"
          source={require("../assets/frame17.png")}
        />
      </View>
      <Pressable
        style={[styles.skipLocationWrapper, styles.frameGroupShadowBox]}
        onPress={() => navigation.navigate("Home1")}
      >
        <Text style={[styles.skipLocation, styles.locationTypo]}>
          Skip location
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow21ParentFlexBox: {
    justifyContent: "center",
    left: 16,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  frameViewShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchSpaceBlock: {
    marginLeft: 8,
    textAlign: "left",
  },
  groupChildLayout: {
    height: 61,
    width: 343,
    position: "absolute",
  },
  moveTheMapLayout: {
    height: 37,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  locationTypo: {
    fontWeight: "300",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  frameGroupShadowBox: {
    paddingHorizontal: Padding.p_5xs,
    top: 662,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    alignItems: "center",
    position: "absolute",
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
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    top: 778,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
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
    lineHeight: 30,
    fontWeight: "700",
    color: Color.praimary1,
    marginLeft: 86,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
  },
  arrow21Parent: {
    top: 40,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  buttonBigChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    fontWeight: "600",
    color: Color.whait,
    display: "flex",
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonBig: {
    marginLeft: -171.5,
    top: 730,
    height: 48,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  pinYourLocationInner: {
    top: 411,
    left: 115,
    width: 50,
    height: 50,
    position: "absolute",
  },
  search: {
    width: 242,
    color: Color.grayBlack,
    marginLeft: 8,
    fontSize: FontSize.med_size,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 24,
    alignItems: "center",
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
  },
  frameWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 331,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
  },
  frameView: {
    top: 94,
    padding: Padding.p_7xs,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
    height: 61,
    left: 0,
  },
  frameIcon: {
    top: 4,
    left: 0,
    width: 16,
    position: "absolute",
  },
  moveTheMap: {
    left: 24,
    lineHeight: 20,
    width: 294,
    height: 37,
    position: "absolute",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    top: 0,
  },
  frameParent: {
    top: 12,
    left: 12,
    width: 318,
  },
  rectangleParent: {
    top: 150,
    left: 16,
  },
  frameIcon1: {
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
    width: 88,
    height: 13,
    marginLeft: 8,
    textAlign: "left",
  },
  frameGroup: {
    left: 229,
    paddingVertical: Padding.p_4xs,
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
  frameIcon2: {
    top: 6,
    left: 6,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 273,
  },
  rectangleContainer: {
    top: 245,
  },
  skipLocation: {
    fontSize: FontSize.med_size,
    textAlign: "center",
  },
  skipLocationWrapper: {
    height: 36,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    left: 16,
  },
  pinYourLocation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default PinYourLocation;
