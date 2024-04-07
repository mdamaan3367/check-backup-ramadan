import React, { useState, useCallback } from "react";
import { StyleSheet, View, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "./RegularCleaning";
import SignInForm from "../components/SignInForm";
import LanguageChangeSection from "../components/LanguageChangeSection";
import SectionMenu1 from "../components/SectionMenu1";
import SectionCardForm from "../components/SectionCardForm";
import { Color } from "../GlobalStyles";

const Menu2 = () => {
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true);
  }, []);

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false);
  }, []);

  return (
    <>
      <View style={styles.menu}>
        <SignInForm />
        <LanguageChangeSection />
        <SectionMenu1
          iconText={require("../assets/home23.png")}
          iconDescription={require("../assets/clock3.png")}
          iconImageUrl={require("../assets/calendartick4.png")}
          onFramePressablePress={() => navigation.navigate("Home1")}
          onFramePressablePress1={() => navigation.navigate("Bookings2")}
          onFramePressablePress2={openFrameContainer7}
        />
        <SectionCardForm
          imageDimensions={require("../assets/profm-logo1-1-1-17.png")}
          propTop={40}
          propHeight={30}
          onArrow21Press={() => navigation.goBack()}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <View style={styles.frameContainer7Overlay}>
          <Pressable
            style={styles.frameContainer7Bg}
            onPress={closeFrameContainer7}
          />
          <RegularCleaning9 onClose={closeFrameContainer7} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menu: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Menu2;
