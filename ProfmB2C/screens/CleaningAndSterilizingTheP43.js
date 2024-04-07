import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const CleaningAndSterilizingTheP43 = () => {
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
      <View style={styles.cleaningAndSterilizingTheP}>
        <Image
          style={styles.cleaningAndSterilizingThePChild}
          resizeMode="cover"
          source={require("../assets/rectangle-432715.png")}
        />
        <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-238737.png")}
          />
        </Pressable>
        <View style={styles.removingDirtFromAirConditiParent}>
          <Text style={[styles.removingDirtFrom, styles.serviceDetailsTypo]}>
            Removing dirt from air conditioner condenser coils These coils must
            be free of dirt to ensure effective heat transfer.
          </Text>
          <Text
            style={styles.cleaningCondenserCoils}
          >{`Cleaning condenser coils `}</Text>
          <Pressable
            style={[styles.frameParent, styles.parentGroupPosition]}
            onPress={() => navigation.navigate("ServiceDetails62")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.logInTypo]}>
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
          style={[styles.profmLogo1111, styles.parentGroupPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-13.png")}
        />
        <View
          style={[
            styles.cleaningAndSterilizingThePItem,
            styles.parentGroupPosition,
          ]}
        />
        <View style={[styles.groupParent, styles.parentGroupPosition]}>
          <View style={styles.lineParent}>
            <View style={styles.groupChild} />
            <View style={[styles.groupItem, styles.groupBorder]} />
            <View style={[styles.groupInner, styles.groupBorder]} />
            <View style={[styles.frameContainer, styles.groupChildPosition]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={[styles.frameChild, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-183.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>1</Text>
              </View>
              <Text
                style={[styles.booking, styles.bookingTypo]}
              >{`Booking `}</Text>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.ellipseLayout}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-184.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>2</Text>
              </View>
              <Text style={[styles.location, styles.bookingTypo]}>
                Location
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={styles.ellipseLayout}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-184.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>3</Text>
              </View>
              <Text style={[styles.location, styles.bookingTypo]}>Payment</Text>
            </View>
            <View style={styles.groupParent1}>
              <View style={styles.ellipseLayout}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-186.png")}
                />
                <Text style={[styles.text3, styles.textTypo]}>4</Text>
              </View>
              <Text style={[styles.location, styles.bookingTypo]}>Summary</Text>
            </View>
          </View>
          <View style={styles.selectDateParent}>
            <Text style={[styles.selectDate, styles.selectDateTypo]}>
              Select date
            </Text>
            <View style={[styles.frameParent1, styles.groupChildShadowBox]}>
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
              <View style={styles.frameWrapper}>
                <View style={[styles.groupParent2, styles.parentFlexBox]}>
                  <View style={styles.parent}>
                    <Text style={[styles.text4, styles.textLayout]}>01</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>02</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>03</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>04</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>05</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>06</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>07</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>08</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>09</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>10</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>11</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>12</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>TUE</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>13</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SUT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>14</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SUN</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>15</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>MON</Text>
                  </View>
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.rectangleView, styles.rectangleLayout]}
                    />
                    <Text style={[styles.text19, styles.thuTypo]}>16</Text>
                    <Text style={[styles.thu, styles.thuTypo]}>THU</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>17</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>WED</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>18</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>THU</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text4, styles.textLayout]}>19</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>FRI</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>20</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>21</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>22</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>23</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>24</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>25</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>26</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>27</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>28</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>29</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>30</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={[styles.text23, styles.tuePosition]}>31</Text>
                    <Text style={[styles.tue, styles.tuePosition]}>SAT</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild3, styles.groupLayout]} />
            <View style={[styles.startTimeParent, styles.writeHerePosition]}>
              <Text style={[styles.startTime, styles.amTypo]}>start time</Text>
              <View style={[styles.addCircleParent, styles.parentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/addcircle.png")}
                />
                <Text style={[styles.am, styles.parentFlexBox]}>08:00 AM</Text>
                <Image
                  style={[styles.minusCirlceIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/minuscirlce.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.selectDateParent}>
            <View style={styles.warning2Layout}>
              <Image
                style={styles.warning2Icon}
                resizeMode="cover"
                source={require("../assets/warning22.png")}
              />
              <Text style={[styles.theShownPrice, styles.theTypo]}>
                The shown price includes the visit only.
              </Text>
            </View>
            <View style={[styles.warning2Group, styles.warning2Layout]}>
              <Image
                style={styles.warning2Icon}
                resizeMode="cover"
                source={require("../assets/warning22.png")}
              />
              <Text style={[styles.thePriceOf, styles.theTypo]}>
                The price of the service will be determined after the visit and
                your needs will be carefully assessed.
              </Text>
            </View>
          </View>
          <View style={styles.selectDateParent}>
            <Text style={[styles.writeCommentsOr, styles.selectDateTypo]}>
              Write comments or preferences
            </Text>
            <View style={[styles.rectangleContainer, styles.groupChild4Layout]}>
              <View style={[styles.groupChild4, styles.childLayout]} />
              <Text style={[styles.writeHere, styles.writeHerePosition]}>
                Write here.......
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
          <View style={[styles.homeIndicator, styles.homeIndicatorSpaceBlock]}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
        <View style={[styles.buttonBigParent, styles.homeIndicatorSpaceBlock]}>
          <Pressable style={styles.buttonBig} onPress={openButtonBigContainer}>
            <View style={[styles.buttonBigChild, styles.childLayout]} />
            <Text style={[styles.logIn, styles.parentFlexBox]}>Continue</Text>
          </Pressable>
          <View style={styles.sarParent}>
            <Text style={[styles.sar, styles.amTypo]}>500 SAR</Text>
            <Text style={[styles.notIncludingVat, styles.january2024FlexBox]}>
              not including vat
            </Text>
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
  serviceDetailsTypo: {
    textAlign: "left",
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  parentGroupPosition: {
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
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
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  textTypo: {
    width: 8,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    top: 12,
    height: 16,
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bookingTypo: {
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  selectDateTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
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
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    width: 24,
    height: 24,
  },
  tuePosition: {
    marginLeft: -16,
    color: Color.colorDarkgray_100,
    width: 32,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  rectangleLayout: {
    width: 40,
    height: 72,
  },
  thuTypo: {
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    color: Color.whait,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupLayout: {
    height: 53,
    width: 343,
  },
  writeHerePosition: {
    top: 16,
    position: "absolute",
  },
  amTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  theTypo: {
    width: 317,
    color: Color.gray,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 18,
    fontSize: FontSize.med_size,
  },
  warning2Layout: {
    width: 343,
    flexDirection: "row",
  },
  groupChild4Layout: {
    height: 143,
    width: 343,
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  webViewbottomPosition: {
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
  },
  homeIndicatorSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  cleaningAndSterilizingThePChild: {
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
  removingDirtFrom: {
    top: 56,
    width: 344,
    height: 36,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 18,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  cleaningCondenserCoils: {
    lineHeight: 22,
    width: 248,
    height: 24,
    top: 24,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
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
    marginLeft: 8,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayBlack,
    fontWeight: "300",
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
    top: 116,
    backgroundColor: Color.colorDarkgray_400,
    padding: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    marginLeft: -171.5,
    left: "50%",
    alignItems: "center",
  },
  removingDirtFromAirConditiParent: {
    top: 208,
    height: 180,
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
  },
  cleaningAndSterilizingThePItem: {
    marginLeft: -168.5,
    top: 1071,
    width: 338,
    height: 37,
    overflow: "hidden",
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
    zIndex: 0,
  },
  text: {
    zIndex: 1,
    color: Color.whait,
    marginLeft: -4,
    width: 8,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  booking: {
    width: 39,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    marginTop: 4,
  },
  frameContainer: {
    alignItems: "center",
    position: "absolute",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    marginLeft: -4,
    width: 8,
    color: Color.grayBlack,
  },
  location: {
    color: Color.grayBlack,
    marginTop: 4,
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
    color: Color.grayBlack,
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
    marginLeft: -12,
    color: Color.colorDarkgray_100,
    width: 24,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    top: 24,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  tue: {
    height: 16,
    fontSize: FontSize.med_size,
    top: 0,
  },
  parent: {
    height: 48,
    width: 32,
  },
  group: {
    marginLeft: 13,
    height: 48,
    width: 32,
  },
  rectangleView: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.praimary1,
    height: 72,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text19: {
    top: 36,
    left: 8,
    fontSize: FontSize.size_5xl,
    width: 24,
    height: 24,
  },
  thu: {
    left: 4,
    width: 32,
    top: 12,
    fontWeight: "700",
    height: 16,
    fontSize: FontSize.med_size,
  },
  rectangleParent: {
    marginLeft: 13,
    height: 72,
  },
  text23: {
    fontSize: FontSize.size_lg,
    marginLeft: -16,
    height: 24,
    top: 24,
  },
  groupParent2: {
    marginTop: -36,
    marginLeft: -155,
    top: "50%",
    width: 310,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameWrapper: {
    marginTop: 8,
    height: 72,
    width: 310,
    overflow: "hidden",
  },
  frameParent1: {
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: Padding.p_xs,
    marginTop: 16,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  selectDateParent: {
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
  startTime: {
    color: Color.colorBlack,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  am: {
    width: 56,
    textAlign: "center",
    fontWeight: "600",
    marginLeft: 8,
    height: 16,
    display: "flex",
    color: Color.black,
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: 142,
    flexDirection: "row",
  },
  startTimeParent: {
    flexDirection: "row",
    alignItems: "center",
    left: 16,
  },
  rectangleGroup: {
    marginTop: 24,
  },
  warning2Icon: {
    width: 18,
    height: 18,
  },
  theShownPrice: {
    height: 16,
  },
  thePriceOf: {
    height: 32,
  },
  warning2Group: {
    marginTop: 16,
  },
  writeCommentsOr: {
    width: 207,
  },
  groupChild4: {
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
    top: 16,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  rectangleContainer: {
    marginTop: 16,
  },
  groupParent: {
    top: 404,
    height: 408,
    marginLeft: -171.5,
    left: "50%",
    alignItems: "center",
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
    textAlign: "center",
    fontWeight: "600",
    color: Color.whait,
    display: "flex",
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    position: "absolute",
  },
  buttonBig: {
    width: 251,
    height: 48,
  },
  sar: {
    color: Color.red,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
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
    top: 714,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.whait,
    width: 375,
    position: "absolute",
    flexDirection: "row",
  },
  cleaningAndSterilizingTheP: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default CleaningAndSterilizingTheP43;
