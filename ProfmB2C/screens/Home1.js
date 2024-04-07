import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import ViewDetails21 from "./ViewDetails2";
import ViewDetails12 from "./ViewDetails1";
import ViewDetails11 from "./ViewDetails";
import YearlyServiceSection from "../components/YearlyServiceSection";
import BestOffersSection from "../components/BestOffersSection";
import FormSection1 from "../components/FormSection1";
import { useNavigation } from "@react-navigation/native";
import Property1Default3 from "../components/Property1Default3";
import FormContainer from "../components/FormContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Home1 = () => {
  const [frameContainer6Visible, setFrameContainer6Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(true);
  }, []);

  const closeFrameContainer6 = useCallback(() => {
    setFrameContainer6Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Text style={[styles.services, styles.signIn1Typo]}>Services</Text>
        <View style={[styles.homeChild, styles.homeChildPosition]} />
        <View style={[styles.frameParent, styles.framePosition]}>
          <YearlyServiceSection />
          <BestOffersSection />
          <View style={styles.groupParent}>
            <FormSection1
              serviceImageId={require("../assets/younghousekeeperfemalewithcleaningsupply-1.png")}
              cleaningType="Regular cleaning"
              carImageId="(2 "
              rating="4.3"
              priceLabel="79 SAR "
              priceText="100 SAR "
              discountPercentage="off 30 %"
              onFramePressablePress={openFrameContainer6}
            />
            <FormSection1
              serviceImageId={require("../assets/younghousekeeperfemalewithcleaningsupply-11.png")}
              cleaningType="deep cleaning"
              carImageId="(3 "
              rating="4.6"
              priceLabel="477 SAR "
              priceText="280 SAR "
              discountPercentage="off 20 %"
              propMarginTop={16}
              propLeft={291}
              onFramePressablePress={openFrameContainer6}
            />
            <FormSection1
              serviceImageId={require("../assets/younghousekeeperfemalewithcleaningsupply-12.png")}
              cleaningType="Facade cleaning"
              carImageId="(4 "
              rating="4.8"
              priceLabel="700 SAR "
              priceText="900 SAR "
              discountPercentage="off 15 %"
              propMarginTop={16}
              propLeft={295}
              onFramePressablePress={openFrameContainer6}
            />
          </View>
        </View>
        <View style={[styles.frameGroup, styles.groupFlexBox]}>
          <View style={styles.guestUserParent}>
            <Text style={[styles.guestUser, styles.guestUserTypo]}>
              <Text style={styles.guest}>{`Guest `}</Text>
              <Text style={styles.user}>user</Text>
            </Text>
            <View style={[styles.groupGroup, styles.groupFlexBox]}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
              <Text style={[styles.alRawdahDistrict, styles.guestUserTypo]}>
                Al Rawdah district , Jeddah
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.signIn}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign in</Text>
          </Pressable>
        </View>
        <Image
          style={[styles.profmLogo1111, styles.homeChildPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-2.png")}
        />
        <Property1Default3
          fiRrZoomOut={require("../assets/firrzoomout.png")}
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={-172}
          property1DefaultTop={141}
          property1DefaultLeft="50%"
        />
        <FormContainer />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay}>
          <Pressable
            style={styles.frameContainer6Bg}
            onPress={closeFrameContainer6}
          />
          <ViewDetails21 onClose={closeFrameContainer6} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay1}>
          <Pressable
            style={styles.frameContainer6Bg1}
            onPress={closeFrameContainer6}
          />
          <ViewDetails12 onClose={closeFrameContainer6} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer6Visible}>
        <View style={styles.frameContainer6Overlay2}>
          <Pressable
            style={styles.frameContainer6Bg2}
            onPress={closeFrameContainer6}
          />
          <ViewDetails11 onClose={closeFrameContainer6} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  signIn1Typo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
  },
  homeChildPosition: {
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    left: 16,
    position: "absolute",
  },
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  guestUserTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  frameContainer6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer6Overlay1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer6Bg1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer6Overlay2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer6Bg2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  services: {
    top: 392,
    fontWeight: "600",
    width: 68,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    textTransform: "capitalize",
    left: 16,
    position: "absolute",
  },
  homeChild: {
    marginLeft: -175,
    top: 1215,
    width: 349,
    height: 97,
    overflow: "hidden",
  },
  groupParent: {
    marginTop: 24,
  },
  frameParent: {
    top: 424,
  },
  guest: {
    textTransform: "capitalize",
  },
  user: {
    textTransform: "lowercase",
  },
  guestUser: {
    fontSize: FontSize.size_sm,
    width: 91,
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupIcon: {
    width: 10,
    height: 14,
  },
  alRawdahDistrict: {
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
    textAlign: "center",
    marginLeft: 4,
  },
  groupGroup: {
    justifyContent: "center",
    marginTop: 4,
    height: 14,
  },
  guestUserParent: {
    height: 37,
  },
  signIn1: {
    lineHeight: 30,
    fontWeight: "700",
    color: Color.praimary1,
    textAlign: "right",
    width: 50,
    height: 24,
  },
  signIn: {
    marginLeft: 135,
  },
  frameGroup: {
    top: 80,
    left: 16,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -35,
    top: 44,
    width: 70,
    height: 25,
  },
  home: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 1344,
  },
});

export default Home1;
