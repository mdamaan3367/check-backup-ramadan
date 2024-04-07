import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const RegularCleaning6 = () => {
  const navigation = useNavigation();
  const [buttonBigContainerVisible, setButtonBigContainerVisible] =
    useState(false);

  const openButtonBigContainer = useCallback(() => {
    setButtonBigContainerVisible(true);
  }, []);

  const closeButtonBigContainer = useCallback(() => {
    setButtonBigContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.regularCleaning}>
        <Image
          style={styles.regularCleaningChild}
          resizeMode="cover"
          source={require("../assets/rectangle-432779.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-2387371.png")}
          />
        </Pressable>
        <View style={styles.noJobIsTooToughForOurHiParent}>
          <Text style={[styles.noJobIs, styles.serviceTypo]}>
            No job is too tough for our high-performance cleaning team. We leave
            your kitchen tools and supplies gleaming.
          </Text>
          <Text style={[styles.cleanlinessOfKitchen, styles.text10Layout]}>
            Cleanliness Of Kitchen Utensils
          </Text>
          <Pressable
            style={[styles.frameParent, styles.parentPosition1]}
            onPress={() => navigation.navigate("ServiceDetails66")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.amFlexBox]}>
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
        <Image
          style={styles.profmLogo1111}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-13.png")}
        />
        <View style={styles.regularCleaningItem} />
        <View style={[styles.groupParent, styles.parentPosition1]}>
          <View style={styles.lineParent}>
            <View style={styles.groupChild} />
            <View style={[styles.groupItem, styles.groupBorder]} />
            <View style={[styles.groupInner, styles.groupBorder]} />
            <View style={[styles.frameContainer, styles.groupChildPosition]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={[styles.frameChild, styles.framePosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-183.png")}
                />
                <Text style={[styles.text, styles.textPosition]}>1</Text>
              </View>
              <Text
                style={[styles.booking, styles.hoursTypo]}
              >{`Booking `}</Text>
            </View>
            <View style={styles.groupContainer}>
              <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-184.png")}
                />
                <Text style={[styles.text1, styles.textTypo1]}>2</Text>
              </View>
              <Text style={[styles.location, styles.hoursTypo]}>Location</Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-184.png")}
                />
                <Text style={[styles.text1, styles.textTypo1]}>3</Text>
              </View>
              <Text style={[styles.location, styles.hoursTypo]}>Payment</Text>
            </View>
            <View style={styles.groupParent1}>
              <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-186.png")}
                />
                <Text style={[styles.text3, styles.textTypo1]}>4</Text>
              </View>
              <Text style={[styles.location, styles.hoursTypo]}>Summary</Text>
            </View>
          </View>
          <View style={styles.selectDateParent}>
            <Text style={[styles.selectDate, styles.selectDateTypo]}>
              Select date
            </Text>
            <View style={[styles.frameWrapper, styles.groupChildShadowBox]}>
              <View>
                <View style={styles.frameGroup}>
                  <Text style={[styles.january2024, styles.january2024FlexBox]}>
                    January 2024
                  </Text>
                  <View style={styles.arrowCircleLeftParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/arrowcircleleft.png")}
                    />
                    <Image
                      style={[styles.arrowCircleRightIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/arrowcircleright.png")}
                    />
                  </View>
                </View>
                <View style={styles.groupParent2}>
                  <View style={[styles.parent, styles.groupLayout1]}>
                    <Text style={[styles.text4, styles.textLayout]}>14</Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>SUN</Text>
                  </View>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text4, styles.textLayout]}>15</Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>MON</Text>
                  </View>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text4, styles.textLayout]}>16</Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>TUE</Text>
                  </View>
                  <View style={styles.rectangleParent}>
                    <View style={[styles.frameItem, styles.framePosition]} />
                    <View style={[styles.parent1, styles.sunSpaceBlock]}>
                      <Text style={[styles.text7, styles.wedTypo]}>17</Text>
                      <Text style={[styles.wed, styles.wedTypo]}>WED</Text>
                    </View>
                  </View>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text4, styles.textLayout]}>18</Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>THU</Text>
                  </View>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text4, styles.textLayout]}>19</Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>FRI</Text>
                  </View>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text10, styles.sunSpaceBlock]}>
                      20
                    </Text>
                    <Text style={[styles.sun, styles.sunSpaceBlock]}>SAT</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.rectangleView, styles.groupLayout]} />
              <View style={[styles.frameParent2, styles.parentPosition]}>
                <View style={styles.periodOfServiceParent}>
                  <Text style={[styles.periodOfService, styles.serviceTypo]}>
                    period of service
                  </Text>
                  <Text style={[styles.hours, styles.hoursTypo]}>4 hours</Text>
                </View>
                <View style={styles.addCircleParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/addcircle.png")}
                  />
                  <Text style={[styles.text11, styles.amFlexBox]}>4</Text>
                  <Image
                    style={[styles.minusCirlceIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/minuscirlce1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
            <View style={[styles.groupChild3, styles.groupChildLayout]} />
            <View style={[styles.numberOfWorkersParent, styles.parentPosition]}>
              <Text style={styles.numberOfWorkers}>Number of Workers</Text>
              <View style={styles.addCircleGroup}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/addcircle.png")}
                />
                <Text style={[styles.text11, styles.amFlexBox]}>2</Text>
                <Image
                  style={[styles.minusCirlceIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/minuscirlce1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
            <View style={[styles.groupChild4, styles.groupChildLayout]} />
            <View style={[styles.numberOfWorkersParent, styles.parentPosition]}>
              <Text style={[styles.periodOfService, styles.serviceTypo]}>
                start time
              </Text>
              <View style={styles.addCircleContainer}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/addcircle.png")}
                />
                <Text style={[styles.am, styles.amFlexBox]}>08:00 AM</Text>
                <Image
                  style={[styles.minusCirlceIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/minuscirlce1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.selectDateParent}>
            <Text style={[styles.writeCommentsOr, styles.selectDateTypo]}>
              Write comments or preferences
            </Text>
            <View style={[styles.rectangleParent2, styles.groupChild5Layout]}>
              <View style={[styles.groupChild5, styles.childLayout]} />
              <Text style={[styles.writeHere, styles.parentPosition]}>
                Write here.......
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttonBigParent, styles.homeIndicatorSpaceBlock]}>
          <Pressable style={styles.buttonBig} onPress={openButtonBigContainer}>
            <View style={[styles.buttonBigChild, styles.childLayout]} />
            <Text style={[styles.logIn, styles.amFlexBox]}>Continue</Text>
          </Pressable>
          <View style={styles.sarParent}>
            <Text style={styles.sar}>576 SAR</Text>
            <Text style={[styles.notIncludingVat, styles.january2024FlexBox]}>
              not including vat
            </Text>
          </View>
        </View>
        <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
          <View style={[styles.homeIndicator, styles.homeIndicatorSpaceBlock]}>
            <View style={styles.homeIndicator1} />
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
          <RegularCleaning9 onClose={closeButtonBigContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  serviceTypo: {
    textTransform: "capitalize",
    fontSize: FontSize.med_size,
  },
  text10Layout: {
    height: 24,
    top: 24,
  },
  parentPosition1: {
    marginLeft: -171.5,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  amFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupBorder: {
    opacity: 0.5,
    borderColor: Color.gray,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  framePosition: {
    zIndex: 0,
    width: 40,
  },
  textPosition: {
    zIndex: 1,
    top: 12,
    left: "50%",
    position: "absolute",
  },
  hoursTypo: {
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  ellipseLayout: {
    width: 40,
    height: 40,
  },
  textTypo1: {
    width: 8,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  selectDateTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
  },
  january2024FlexBox: {
    color: Color.gray,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  groupLayout1: {
    width: 32,
    height: 48,
  },
  textLayout: {
    width: 24,
    marginLeft: -12,
    height: 24,
    top: 24,
  },
  sunSpaceBlock: {
    marginLeft: -16,
    width: 32,
  },
  wedTypo: {
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    color: Color.whait,
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupLayout: {
    height: 64,
    width: 343,
  },
  parentPosition: {
    top: 16,
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    width: 343,
  },
  groupChild5Layout: {
    height: 143,
    width: 343,
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeIndicatorSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  webViewbottomPosition: {
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  regularCleaningChild: {
    height: 208,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 43,
    width: 26,
    height: 26,
    left: 16,
    position: "absolute",
  },
  noJobIs: {
    top: 56,
    lineHeight: 18,
    width: 344,
    height: 32,
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    left: 16,
    position: "absolute",
  },
  cleanlinessOfKitchen: {
    width: 248,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    position: "absolute",
    textAlign: "left",
    left: 16,
  },
  frameIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  serviceDetails: {
    width: 120,
    marginLeft: 8,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.grayBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.med_size,
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
    top: 112,
    backgroundColor: Color.colorDarkgray_400,
    padding: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    left: "50%",
  },
  noJobIsTooToughForOurHiParent: {
    top: 208,
    height: 176,
    overflow: "hidden",
    backgroundColor: Color.whait,
    width: 375,
    left: 0,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
    left: "50%",
    position: "absolute",
  },
  regularCleaningItem: {
    marginLeft: -168.5,
    top: 1142,
    width: 338,
    height: 37,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    left: 38,
    borderColor: Color.praimary1,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  groupItem: {
    left: 107,
  },
  groupInner: {
    left: 177,
  },
  frameChild: {
    height: 40,
  },
  text: {
    width: 8,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.whait,
    marginLeft: -4,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  booking: {
    width: 39,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
  },
  frameContainer: {
    alignItems: "center",
    position: "absolute",
  },
  ellipseIcon: {
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 12,
    width: 8,
    left: "50%",
    color: Color.grayBlack,
    position: "absolute",
    marginLeft: -4,
  },
  ellipseGroup: {
    height: 40,
  },
  location: {
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
    fontWeight: "300",
  },
  groupContainer: {
    left: 70,
    alignItems: "flex-end",
    top: 0,
    position: "absolute",
  },
  frameView: {
    left: 140,
    top: 0,
    position: "absolute",
  },
  text3: {
    marginLeft: -4.5,
    top: 12,
    width: 8,
    left: "50%",
    color: Color.grayBlack,
    position: "absolute",
  },
  groupParent1: {
    left: 210,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    width: 253,
    height: 56,
  },
  selectDate: {
    width: 96,
  },
  january2024: {
    width: 79,
    height: 16,
    fontSize: FontSize.med_size,
  },
  arrowCircleRightIcon: {
    marginLeft: 10,
  },
  arrowCircleLeftParent: {
    marginLeft: 181,
    flexDirection: "row",
  },
  text4: {
    color: Color.colorDarkgray_100,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
    fontSize: FontSize.size_lg,
  },
  sun: {
    color: Color.colorDarkgray_100,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
    height: 16,
    fontSize: FontSize.med_size,
    top: 0,
  },
  parent: {
    height: 48,
  },
  group: {
    marginLeft: 13,
    height: 48,
  },
  frameItem: {
    borderRadius: Border.br_6xl,
    height: 72,
    backgroundColor: Color.praimary1,
  },
  text7: {
    fontSize: FontSize.size_5xl,
    width: 24,
    marginLeft: -12,
    height: 24,
    top: 24,
  },
  wed: {
    marginLeft: -16,
    width: 32,
    height: 16,
    fontSize: FontSize.med_size,
    top: 0,
  },
  parent1: {
    height: 48,
    zIndex: 1,
    top: 12,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: 13,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text10: {
    color: Color.colorDarkgray_100,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
    fontSize: FontSize.size_lg,
    height: 24,
    top: 24,
  },
  groupParent2: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: Padding.p_xs,
    marginTop: 16,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    overflow: "hidden",
  },
  selectDateParent: {
    marginTop: 24,
  },
  rectangleView: {
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  periodOfService: {
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
  },
  hours: {
    color: Color.grayBlack,
    textTransform: "capitalize",
    fontSize: FontSize.med_size,
  },
  periodOfServiceParent: {
    justifyContent: "center",
  },
  text11: {
    fontSize: FontSize.size_xl,
    width: 16,
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 8,
    height: 16,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: 144,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent2: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    left: 16,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: 24,
  },
  groupChild3: {
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  numberOfWorkers: {
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  addCircleGroup: {
    marginLeft: 134,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  numberOfWorkersParent: {
    flexDirection: "row",
    alignItems: "center",
    left: 16,
  },
  rectangleContainer: {
    marginTop: 24,
  },
  groupChild4: {
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  am: {
    width: 56,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 8,
    height: 16,
    alignItems: "center",
    color: Color.black,
    display: "flex",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  addCircleContainer: {
    marginLeft: 142,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  writeCommentsOr: {
    width: 207,
  },
  groupChild5: {
    height: 143,
    width: 343,
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
  },
  writeHere: {
    marginLeft: -155.5,
    opacity: 0.4,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  rectangleParent2: {
    marginTop: 16,
  },
  groupParent: {
    top: 400,
    height: 412,
    left: "50%",
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
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.praimary1,
    height: "100%",
    width: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.33%",
    top: "25%",
    left: "20.72%",
    letterSpacing: 0.6,
    lineHeight: 44,
    justifyContent: "center",
    textAlign: "center",
    color: Color.whait,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    position: "absolute",
    fontFamily: FontFamily.dGBaysan,
  },
  buttonBig: {
    width: 251,
    height: 48,
  },
  sar: {
    color: Color.red,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  notIncludingVat: {
    fontSize: FontSize.size_4xs,
    width: 66,
  },
  sarParent: {
    alignItems: "center",
  },
  buttonBigParent: {
    bottom: 34,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    flexDirection: "row",
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
    paddingHorizontal: 0,
    height: 34,
  },
  webViewbottom: {
    top: 778,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
  },
  regularCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default RegularCleaning6;
