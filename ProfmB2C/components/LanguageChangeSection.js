import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TermsAndConditions1 from "./TermsAndConditions1";
import PrivacyPolicy from "./PrivacyPolicy";
import Menu3 from "./Menu3";
import SectionAboutApp from "./SectionAboutApp";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import SectionLanguageChange from "./SectionLanguageChange";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LanguageChangeSection = () => {
  const navigation = useNavigation();
  const [groupContainer2Visible, setGroupContainer2Visible] = useState(false);
  const [groupContainer3Visible, setGroupContainer3Visible] = useState(false);
  const [groupContainer4Visible, setGroupContainer4Visible] = useState(false);

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

  const openGroupContainer4 = useCallback(() => {
    setGroupContainer4Visible(true);
  }, []);

  const closeGroupContainer4 = useCallback(() => {
    setGroupContainer4Visible(false);
  }, []);

  return (
    <>
      <View style={styles.aboutAppParent}>
        <Text style={styles.aboutApp}>About app</Text>
        <View style={styles.groupParent}>
          <SectionAboutApp
            iconImageUrl={require("../assets/group-2387891.png")}
            pageDescription="about app"
            groupIconMarginTop="unset"
            onGroupPressablePress={() => navigation.navigate("AboutApp")}
          />
          <TermsAndConditionsSection
            propWidth={147}
            onGroupPressablePress={openGroupContainer2}
          />
          <SectionAboutApp
            iconImageUrl={require("../assets/group-2387911.png")}
            pageDescription="privacy policy"
            groupIconMarginTop={8}
            onGroupPressablePress={openGroupContainer3}
          />
          <SectionLanguageChange
            iconId={require("../assets/group-2387921.png")}
            onGroupPressablePress={openGroupContainer4}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer2Visible}>
        <View style={styles.groupContainer2Overlay}>
          <Pressable
            style={styles.groupContainer2Bg}
            onPress={closeGroupContainer2}
          />
          <TermsAndConditions1 onClose={closeGroupContainer2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer3Visible}>
        <View style={styles.groupContainer3Overlay}>
          <Pressable
            style={styles.groupContainer3Bg}
            onPress={closeGroupContainer3}
          />
          <PrivacyPolicy onClose={closeGroupContainer3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer4Visible}>
        <View style={styles.groupContainer4Overlay}>
          <Pressable
            style={styles.groupContainer4Bg}
            onPress={closeGroupContainer4}
          />
          <Menu3 onClose={closeGroupContainer4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  groupContainer4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  aboutApp: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 178,
    height: 16,
  },
  groupParent: {
    marginTop: 16,
  },
  aboutAppParent: {
    position: "absolute",
    top: 268,
    left: 16,
  },
});

export default LanguageChangeSection;
