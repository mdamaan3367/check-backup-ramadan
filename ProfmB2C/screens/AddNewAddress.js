import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import BookingSection from "../components/BookingSection";
import MyAddresses1 from "../components/MyAddresses1";
import BuildingSection from "../components/BuildingSection";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AddNewAddress = () => {
  const [buttonBigContainerVisible, setButtonBigContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openButtonBigContainer = useCallback(() => {
    setButtonBigContainerVisible(true);
  }, []);

  const closeButtonBigContainer = useCallback(() => {
    setButtonBigContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.addNewAddress}>
        <Image
          style={styles.map3Icon}
          resizeMode="cover"
          source={require("../assets/map-3.png")}
        />
        <View style={[styles.navBar, styles.navBarPosition]}>
          <WebViewBottom
            webViewBottomPosition="absolute"
            webViewBottomBackgroundColor="#fafdff"
            webViewBottomMarginLeft={-187.5}
            webViewBottomTop={0}
            webViewBottomLeft="50%"
            webViewBottomBorderBottomRightRadius={5}
            webViewBottomBorderBottomLeftRadius={5}
            webViewBottomWidth={375}
            webViewBottomHeight={34}
            webViewBottomBottom="unset"
            homeIndicatorBackgroundColor="#1d2939"
          />
        </View>
        <Image
          style={[styles.addNewAddressChild, styles.addNewAddressChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame-1171276338.png")}
        />
        <View style={styles.inputFild}>
          <Text style={styles.password}>Password</Text>
          <Image
            style={styles.inputFildChild}
            resizeMode="cover"
            source={require("../assets/group-4.png")}
          />
          <Image
            style={[styles.eyeSlashIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eyeslash2.png")}
          />
          <View style={[styles.ellipseParent, styles.eyeSlashIconPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-178.png")}
            />
          </View>
        </View>
        <BookingSection
          imageDimensions={require("../assets/profm-logo1-1-1-131.png")}
          bookingIds="add new address"
          onArrow21Press={() => navigation.goBack()}
        />
        <Pressable
          style={[styles.buttonBig, styles.rectangleLayout]}
          onPress={openButtonBigContainer}
        >
          <View style={styles.buttonBigChild} />
          <Text style={[styles.logIn, styles.parentFlexBox]}>
            Save new address
          </Text>
        </Pressable>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={styles.frameParent}>
            <View style={[styles.instanceParent, styles.navBarPosition]}>
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-238936.png")}
              />
              <Image
                style={[styles.frameChild3, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-238937.png")}
              />
              <Image
                style={[styles.frameChild3, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-238938.png")}
              />
            </View>
            <Text style={[styles.chooseAddressIcon, styles.mobileTypo]}>
              Choose address icon
            </Text>
          </View>
          <Pressable
            style={[styles.rectangleParent, styles.rectangleLayout]}
            onPress={() => navigation.navigate("PinYourLocation21")}
          >
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <View
              style={[
                styles.locateTheLocationOnTheMapParent,
                styles.parentPosition,
              ]}
            >
              <Text style={[styles.locateTheLocation, styles.mobileFlexBox]}>
                Locate the location on the map
              </Text>
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group6.png")}
              />
            </View>
          </Pressable>
          <BuildingSection
            locationDetails="building number"
            buildingOrFloorNumber="25"
          />
          <BuildingSection
            locationDetails="Floor number"
            buildingOrFloorNumber="5"
          />
          <View style={styles.mobileParent}>
            <Text style={[styles.mobile, styles.mobileTypo]}>{`Mobile `}</Text>
            <View style={styles.rectangleGroup}>
              <View style={[styles.rectangleView, styles.groupChildBorder]} />
              <View
                style={[styles.vuesaxoutlinecallParent, styles.parentFlexBox]}
              >
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/vuesaxoutlinecall1.png")}
                />
                <Text style={styles.text}>+966 500891756</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={buttonBigContainerVisible}
      >
        <View style={styles.buttonBigContainerOverlay}>
          <Pressable
            style={styles.buttonBigContainerBg}
            onPress={closeButtonBigContainer}
          />
          <MyAddresses1 onClose={closeButtonBigContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  navBarPosition: {
    left: "50%",
    position: "absolute",
  },
  addNewAddressChildLayout: {
    height: 20,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  eyeSlashIconPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 343,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  groupIconLayout: {
    width: 24,
    height: 24,
  },
  mobileTypo: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textAlign: "left",
  },
  groupChildBorder: {
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  mobileFlexBox: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.med_size,
  },
  map3Icon: {
    top: -229,
    right: 90,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  navBar: {
    marginLeft: -187.5,
    top: 778,
    width: 375,
    height: 34,
  },
  addNewAddressChild: {
    top: 47,
    right: 16,
    width: 20,
  },
  password: {
    top: "-1.72%",
    left: "90.38%",
    letterSpacing: 0.5,
    fontFamily: FontFamily.dubai,
    color: Color.primary3,
    textAlign: "left",
    fontSize: FontSize.med_size,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  inputFildChild: {
    height: "82.76%",
    top: "17.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChild: {
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    width: 7,
    height: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    right: 17,
    width: 62,
    justifyContent: "flex-end",
    flexDirection: "row",
    height: 7,
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    display: "none",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  buttonBigContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonBigContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonBigChild: {
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    fontSize: FontSize.size_base,
    letterSpacing: 0.6,
    lineHeight: 44,
    display: "flex",
    fontWeight: "600",
    justifyContent: "center",
    textAlign: "center",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    position: "absolute",
  },
  buttonBig: {
    marginLeft: -171.5,
    top: 722,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    height: 24,
  },
  frameChild3: {
    marginLeft: 48,
    height: 24,
  },
  instanceParent: {
    marginLeft: -40,
    top: 41,
    flexDirection: "row",
  },
  chooseAddressIcon: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.black,
    position: "absolute",
  },
  frameParent: {
    width: 256,
    height: 65,
  },
  groupChild: {
    borderColor: Color.colorDarkgray_300,
    borderWidth: 0.5,
    top: "0%",
    height: "100%",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  locateTheLocation: {
    width: 168,
    height: 16,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
  },
  groupIcon1: {
    height: 12,
    marginLeft: 136,
    width: 7,
  },
  locateTheLocationOnTheMapParent: {
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleParent: {
    marginTop: 24,
  },
  mobile: {
    lineHeight: 30,
    width: 83,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.med_size,
  },
  rectangleView: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderWidth: 0.3,
    zIndex: 0,
    borderColor: Color.praimary1,
    height: 48,
    width: 343,
  },
  text: {
    color: Color.grayBlack,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  vuesaxoutlinecallParent: {
    top: 14,
    left: 12,
    zIndex: 1,
    flexDirection: "row",
    height: 20,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 4,
  },
  mobileParent: {
    marginTop: 24,
  },
  groupParent: {
    top: 156,
  },
  addNewAddress: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddNewAddress;
