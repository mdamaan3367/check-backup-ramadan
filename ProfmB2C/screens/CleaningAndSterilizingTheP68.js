import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const CleaningAndSterilizingTheP68 = () => {
  const [frameContainer12Visible, setFrameContainer12Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(true);
  }, []);

  const closeFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(false);
  }, []);

  return (
    <>
      <View style={styles.cleaningAndSterilizingTheP}>
        <View
          style={[
            styles.electricalWorksAreAGroupOParent,
            styles.electricalWorksAreAGroupOParentPosition,
          ]}
        >
          <Text style={styles.electricalWorksAre}>
            Electrical works are a group of services provided to install,
            maintain and repair electrical systems in buildings and facilities.
          </Text>
          <Text style={[styles.electricalWorks, styles.serviceDetailsTypo]}>
            Electrical Works
          </Text>
          <Pressable
            style={styles.frameParent}
            onPress={() => navigation.navigate("ServiceDetails94")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.serviceDetailsTypo]}>
                Service details
              </Text>
            </View>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameContainer}>
          <View>
            <View style={styles.componentLayout}>
              <View style={styles.component24Child} />
              <Image
                style={[styles.component24Item, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle-43813.png")}
              />
              <Text style={styles.checkNetworkConnectionsTypo}>
                Check network connections
              </Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={[styles.component23, styles.componentLayout]}>
              <View style={styles.component24Child} />
              <Image
                style={[styles.component24Item, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle-43814.png")}
              />
              <Text
                style={[
                  styles.distributionOfElectrical,
                  styles.checkNetworkConnectionsTypo,
                ]}
              >
                Distribution of electrical loads
              </Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={[styles.component23, styles.componentLayout]}>
              <View style={styles.component24Child} />
              <Image
                style={[styles.component24Item, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/rectangle-43815.png")}
              />
              <Text
                style={[
                  styles.distributionOfElectrical,
                  styles.checkNetworkConnectionsTypo,
                ]}
              >
                Inspection and maintenance of electrical boxes
              </Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIcon1Layout]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
          <View style={styles.frameChild} />
        </View>
        <Image
          style={[
            styles.cleaningAndSterilizingThePChild,
            styles.electricalWorksAreAGroupOParentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-239092.png")}
        />
        <View style={[styles.navBarParent, styles.navPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home11")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/home24.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.homeTypo]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer12}
            >
              <View style={styles.navFlexBox}>
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Menu2")}
            >
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.home2Icon}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.navPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer12Visible}>
        <View style={styles.frameContainer12Overlay}>
          <Pressable
            style={styles.frameContainer12Bg}
            onPress={closeFrameContainer12}
          />
          <RegularCleaning9 onClose={closeFrameContainer12} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  electricalWorksAreAGroupOParentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  serviceDetailsTypo: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorIcon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  componentLayout: {
    height: 72,
    width: 375,
  },
  checkNetworkConnectionsTypo: {
    color: Color.praimary1,
    fontSize: FontSize.size_sm,
    left: "4.27%",
    top: "19.44%",
    height: "61.11%",
    width: "49.87%",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.med_size,
  },
  navBarChildLayout: {
    width: 94,
    justifyContent: "center",
    height: 56,
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  electricalWorksAre: {
    lineHeight: 18,
    width: 344,
    height: 36,
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    left: 16,
    top: 56,
    position: "absolute",
  },
  electricalWorks: {
    top: 24,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontWeight: "600",
    color: Color.black,
    width: 248,
    height: 24,
    alignItems: "center",
    display: "flex",
    left: 16,
    position: "absolute",
  },
  frameIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  serviceDetails: {
    width: 120,
    height: 16,
    marginLeft: 8,
    alignItems: "center",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    display: "flex",
    fontWeight: "300",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 7,
    height: 12,
    marginLeft: 170,
  },
  frameParent: {
    marginLeft: -171.5,
    top: 116,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkgray_400,
    padding: Padding.p_xs,
    flexDirection: "row",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  electricalWorksAreAGroupOParent: {
    top: 208,
    height: 180,
    overflow: "hidden",
    backgroundColor: Color.lightBGPrimary,
  },
  component24Child: {
    left: "0%",
    backgroundColor: Color.colorAliceblue_200,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  component24Item: {
    left: "50.13%",
    width: "49.87%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  vectorIcon1: {
    height: "9.72%",
    width: "3.2%",
    top: "79.17%",
    right: "48.27%",
    bottom: "11.11%",
    left: "48.53%",
  },
  distributionOfElectrical: {
    lineHeight: 20,
  },
  component23: {
    marginTop: 16,
  },
  frameChild: {
    width: 338,
    height: 37,
    marginTop: 65,
    overflow: "hidden",
  },
  frameContainer: {
    top: 396,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  cleaningAndSterilizingThePChild: {
    height: 208,
    top: 0,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
  },
  navBarInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    textTransform: "capitalize",
    marginTop: 4,
    color: Color.gray,
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer12Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer12Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    height: 56,
    justifyContent: "center",
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    backgroundColor: Color.lightBGPrimary,
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 56,
    marginLeft: -187.5,
    backgroundColor: Color.lightBGPrimary,
  },
  navBarParent: {
    top: 722,
    height: 90,
  },
  cleaningAndSterilizingTheP: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default CleaningAndSterilizingTheP68;
