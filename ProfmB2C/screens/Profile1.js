import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Menu4 from "../components/Menu4";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "../components/Property1Default";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile1 = () => {
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
      <View style={styles.profile}>
        <View style={styles.cleaningWindowByUsingSpeciParent}>
          <Image
            style={[
              styles.cleaningWindowByUsingSpeciIcon,
              styles.profileChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/cleaningwindowbyusingspecialliquidrepairmanisworkingindoorsmodernroom-2.png")}
          />
          <LinearGradient
            style={styles.groupChild}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
            useAngle={true}
            angle={180}
          />
          <Image
            style={styles.profmLogo1112}
            resizeMode="cover"
            source={require("../assets/profm-logo1-1-1-22.png")}
          />
          <Text style={[styles.profile1, styles.arrow21Layout]}>Profile</Text>
        </View>
        <View style={[styles.profileChild, styles.profileChildPosition]} />
        <CardContainer groupIconTop={119} />
        <View style={[styles.profileItem, styles.profileItemBorder]} />
        <View style={styles.iphoneIndicator}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <View style={[styles.frameParent, styles.arrow21Position]}>
          <View>
            <Text style={[styles.fullName, styles.fullNameFlexBox]}>
              Full Name
            </Text>
            <View style={[styles.rectangleParent, styles.buttonBigLayout]}>
              <View style={styles.groupItem} />
              <View style={[styles.profileParent, styles.parentFlexBox]}>
                <Image
                  style={styles.profileIcon}
                  resizeMode="cover"
                  source={require("../assets/profile1.png")}
                />
                <Text style={[styles.khalidAlQahtani, styles.khalidTypo]}>
                  Khalid Al Qahtani
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text style={[styles.fullName, styles.fullNameFlexBox]}>Email</Text>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.smsParent, styles.parentFlexBox]}>
                <Image
                  style={styles.profileIcon}
                  resizeMode="cover"
                  source={require("../assets/sms1.png")}
                />
                <Text
                  style={[styles.khalidAlQahtanigmailcom, styles.khalidTypo]}
                >
                  Khalid Al Qahtani@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text
              style={[styles.fullName, styles.fullNameFlexBox]}
            >{`Mobile `}</Text>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.smsParent, styles.parentFlexBox]}>
                <Image
                  style={styles.profileIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxoutlinecall1.png")}
                />
                <Text style={[styles.text, styles.khalidTypo]}>
                  +966 500891756
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Property1Default
          logIn="Confirm"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft="unset"
          property1DefaultTop={614}
          property1DefaultLeft={16}
          property1DefaultWidth={343}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom="unset"
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
          onButtonBigPress={openButtonBigContainer}
        />
        <View style={[styles.buttonBig, styles.buttonBigLayout]}>
          <View style={[styles.buttonBigChild, styles.iconLayout]} />
          <Text style={[styles.logIn, styles.logInFlexBox]}>
            delete my account
          </Text>
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
          <Menu4 onClose={closeButtonBigContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  profileChildPosition: {
    width: 375,
    position: "absolute",
    right: 0,
  },
  arrow21Layout: {
    height: 24,
    top: 43,
  },
  profileItemBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  linePosition: {
    width: 135,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  fullNameFlexBox: {
    textAlign: "left",
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
  },
  buttonBigLayout: {
    height: 48,
    width: 343,
  },
  parentFlexBox: {
    flexDirection: "row",
    left: 8,
    alignItems: "center",
    position: "absolute",
  },
  khalidTypo: {
    marginLeft: 4,
    color: Color.black,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  logInFlexBox: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
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
  cleaningWindowByUsingSpeciIcon: {
    height: 391,
    top: 0,
    width: 375,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -187.5,
    backgroundColor: Color.color,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    height: 404,
    width: 375,
    top: 0,
    position: "absolute",
  },
  profmLogo1112: {
    marginLeft: -99.5,
    top: 87,
    width: 200,
    height: 73,
    left: "50%",
    position: "absolute",
  },
  profile1: {
    fontWeight: "700",
    color: Color.whait,
    width: 135,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 30,
    height: 24,
    top: 43,
  },
  cleaningWindowByUsingSpeciParent: {
    height: 404,
    width: 375,
    right: 0,
    top: 0,
    position: "absolute",
  },
  profileChild: {
    top: 180,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 632,
    width: 375,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  profileItem: {
    top: 298,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    right: 0,
    borderStyle: "solid",
  },
  line: {
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    height: 5,
    width: 135,
    marginLeft: -67.5,
  },
  iphoneIndicator: {
    bottom: 0,
    height: 30,
    backgroundColor: Color.whait,
    width: 375,
    right: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
    top: 43,
    left: 16,
  },
  fullName: {
    color: Color.grayBlack,
    width: 83,
    fontSize: FontSize.med_size,
    textAlign: "left",
    height: 24,
    fontFamily: FontFamily.dGBaysan,
  },
  groupItem: {
    left: 0,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 343,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  profileIcon: {
    width: 18,
    height: 18,
  },
  khalidAlQahtani: {
    width: 125,
    height: 16,
    textAlign: "left",
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
  },
  profileParent: {
    top: 15,
    width: 147,
  },
  rectangleParent: {
    marginTop: 4,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.3,
    borderColor: Color.gray,
    borderRadius: Border.br_5xs,
    height: 48,
    width: 343,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  khalidAlQahtanigmailcom: {
    fontWeight: "300",
    color: Color.black,
    textAlign: "center",
  },
  smsParent: {
    top: 14,
    height: 20,
    zIndex: 1,
    justifyContent: "center",
  },
  rectangleGroup: {
    marginTop: 4,
  },
  emailParent: {
    marginTop: 16,
  },
  text: {
    textAlign: "center",
    color: Color.black,
  },
  frameParent: {
    top: 322,
  },
  buttonBigChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    borderColor: Color.red,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.red,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  buttonBig: {
    top: 726,
    left: 16,
    position: "absolute",
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile1;
