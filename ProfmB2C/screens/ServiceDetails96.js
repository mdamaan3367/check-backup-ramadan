import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import FooterBottom from "./FooterBottom";

const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
const ServiceDetails96 = () => {
  const [frameContainer15Visible, setFrameContainer15Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(true);
  }, []);

  const closeFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(false);
  }, []);

  return (
    <>
    <ScrollView>
      <View style={[styles.serviceDetails,{height:windowHeight+160,width:windowWidth}]}>
        <View style={[styles.frameParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.navBarPosition]} />  
          
          <Text style={styles.cleaningService}>Cleaning service</Text>
          <Text style={styles.profmProvidesAContainer}>
            <Text style={styles.profm}>Profm</Text> provides a wide range of
            cleaning services for homes, businesses, and public facilities.
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.navPosition]}>
          <View>
            <View style={styles.cleaningLayout}>
              <View style={[styles.cleaningChild, styles.iconLayout]} />
              <View style={[styles.frameContainer, styles.navBarFlexBox]}>
                <View>
                  <Text style={styles.cleaningTypo}>Regular cleaning</Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View style={[styles.component6, styles.cleaningLayout]}>
              <View style={[styles.cleaningChild, styles.iconLayout]} />
              <View style={[styles.frameContainer, styles.navBarFlexBox]}>
                <View>
                  <Text style={[styles.deepCleaning, styles.cleaningTypo]}>
                    deep cleaning
                  </Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View style={[styles.component6, styles.cleaningLayout]}>
              <View style={[styles.cleaningChild, styles.iconLayout]} />
              <View style={[styles.frameContainer, styles.navBarFlexBox]}>
                <View>
                  <Text style={[styles.deepCleaning, styles.cleaningTypo]}>
                    Facade cleaning
                  </Text>
                  <Text style={styles.serviceDetails1}>Service details</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.frameChild} />
        </View>


       
        <View style={[styles.rectangleParent, styles.navBarPosition]}>
          <Image
            style={[styles.rectangleParent, styles.navBarPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-432777.png")}
          />
          <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group-2387371.png")}
            />
          </Pressable>
          <View style={styles.parent}>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/3-1-14.png")}
            />
            <Text style={styles.theHospitalityYou}>
              The hospitality you use at home
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer15Visible}>
        <View style={styles.frameContainer15Overlay}>
          <Pressable
            style={styles.frameContainer15Bg}
            onPress={closeFrameContainer15}
          />
          <RegularCleaning9 onClose={closeFrameContainer15} />
        </View>
      </Modal>
      </ScrollView>
      <FooterBottom/>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 112,
    left: "0%",
    position: "absolute",
  },
  navBarPosition: {
    top: 0,
    width: "100%",
  },
  navPosition: {
    left: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  navBarFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  cleaningLayout: {
    height: 68,
    width: "100%",
  },
  cleaningTypo: {
    height: 20,
    width: "100%",
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    color: Color.gray,
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
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
  groupChild: {
    overflow: "hidden",
    backgroundColor: Color.lightBGPrimary,
    height: 112,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  cleaningService: {
    top: 24,
    color: Color.black,
    width: "100%",
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    left: "4%",
    position: "absolute",
  },
  profm: {
    textTransform: "uppercase",
    color:"gray"
  },
  profmProvidesAContainer: {
    width: "100%",
    height: 32,
    color: "gray",
    fontSize: FontSize.med_size,
    fontWeight: "300",
    lineHeight: 16,
    top: 56,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: "4%",
    position: "absolute",
  },
  frameParent: {
    top: "25%",
    width: "100%",
  },
  cleaningChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_300,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  serviceDetails1: {
    lineHeight: 18,
    width:"100%",
    marginTop: 4,
    height: 18,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupIcon: {
    width: 12,
    height: 7,
    marginLeft: 211,
  },
  frameContainer: {
    top: 16,
    alignItems: "center",
    left: "4%",
  },
  deepCleaning: {
    lineHeight: 16,
    width: 120,
    color: Color.praimary1,
    fontSize: FontSize.size_sm,
  },
  component6: {
    marginTop: 8,
  },
  frameChild: {
    width: 337,
    height: 47,
    marginTop: 65,
    overflow: "hidden",
  },
  frameGroup: {
    top: "39%",
    position: "absolute",
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: "300",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
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
    fontWeight: "300",
    color: Color.gray,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer15Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer15Bg: {
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
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
    backgroundColor: Color.lightBGPrimary,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  navBarParent: {
    top: 722,
    height: 90,
    width: 375,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    height: 208,
    position: "absolute",
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: "4%",
    position: "absolute",
  },
  icon1: {
    width: 200,
    height: 76,
  },
  theHospitalityYou: {
    color: Color.praimary,
    textAlign: "center",
    width: 279,
    marginTop: 16,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
  },
  parent: {
    top: 65,
    left: "12%",
    alignItems: "center",
    position: "absolute",
  },
  serviceDetails: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default ServiceDetails96;
