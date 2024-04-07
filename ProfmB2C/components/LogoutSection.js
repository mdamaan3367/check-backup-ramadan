import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TermsAndConditions1 from "./TermsAndConditions1";
import PrivacyPolicy from "./PrivacyPolicy";
import Menu3 from "./Menu3";
import SectionAboutApp from "./SectionAboutApp";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import SectionLanguageChange from "./SectionLanguageChange";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LogoutSection = () => {
  const [groupContainer1Visible, setGroupContainer1Visible] = useState(false);
  const [groupContainer2Visible, setGroupContainer2Visible] = useState(false);
  const [groupContainer3Visible, setGroupContainer3Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(true);
  }, []);

  const closeGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(false);
  }, []);

  const openGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(true);
  }, []);

  const closeGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(false);
  }, []);

  const openGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(true);
  }, []);

  const closeGroupContainer3 = useCallback(() => {
    setGroupContainer3Visible(false);
  }, []);

  return (
    <>
      <View style={styles.aboutAppParent}>
        <Text style={[styles.aboutApp, styles.logoutTypo]}>About app</Text>
        <View style={styles.groupParent}>
          <SectionAboutApp
            iconImageUrl={require("../assets/group-238789.png")}
            pageDescription="about app"
            width="187%"
            onGroupPressablePress={() => navigation.navigate("AboutApp")}
          />
          <TermsAndConditionsSection
            onGroupPressablePress={openGroupContainer1}
          />
          <SectionAboutApp
            iconImageUrl={require("../assets/group-238791.png")}
            pageDescription="privacy policy"
            groupIconMarginTop={8}
            width="187%"
            onGroupPressablePress={openGroupContainer2}
          />
          <SectionLanguageChange
            iconId={require("../assets/group-238792.png")}
            onGroupPressablePress={openGroupContainer3}
          />
          <View style={{marginTop:8}}>
          <SectionAboutApp
            iconImageUrl={require("../assets/group-238797.png")}
            pageDescription="Logout"
            width="187%"
            onGroupPressablePress={() => navigation.navigate("Menu1")}
          />
          </View>
         
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer1Visible}>
        <View style={styles.groupContainer1Overlay}>
          <Pressable
            style={styles.groupContainer1Bg}
            onPress={closeGroupContainer1}
          />
          <TermsAndConditions1 onClose={closeGroupContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer2Visible}>
        <View style={styles.groupContainer2Overlay}>
          <Pressable
            style={styles.groupContainer2Bg}
            onPress={closeGroupContainer2}
          />
          <PrivacyPolicy onClose={closeGroupContainer2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer3Visible}>
        <View style={styles.groupContainer3Overlay}>
          <Pressable
            style={styles.groupContainer3Bg}
            onPress={closeGroupContainer3}
          />
          <Menu3 onClose={closeGroupContainer3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logoutTypo: {
    height: 18,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    alignItems: "center",
  },
  groupContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  aboutApp: {
    color: Color.grayBlack,
    width: 178,
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.3,
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  logout: {
    fontWeight: "300",
    color: Color.black,
    width: 162,
    marginLeft: 8,
  },
  groupContainer: {
    top: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupIcon: {
    height: "21.43%",
    width: "2.04%",
    top: "60.71%",
    right: "4.66%",
    bottom: "17.86%",
    left: "93.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    width: 343,
    height: 56,
    marginTop: 8,
  },
  groupParent: {
    marginTop: 15,
  },
  aboutAppParent: {
    top: "62%",
    left: "4%",
    position: "absolute",
  },
});

export default LogoutSection;
