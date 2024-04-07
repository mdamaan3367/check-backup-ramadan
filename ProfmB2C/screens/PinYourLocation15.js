import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const PinYourLocation15 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pinYourLocation}>
      <View
        style={[styles.pinYourLocationChild, styles.webViewbottomPosition]}
      />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.bookingTheService, styles.bookingFlexBox]}>
        Booking the service
      </Text>
      <View style={styles.lineParent}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupBorder]} />
        <View style={[styles.groupInner, styles.groupBorder]} />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Text style={[styles.text, styles.textPosition]}>1</Text>
          </View>
          <Text style={[styles.booking, styles.bookingTypo]}>{`Booking `}</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-184.png")}
            />
            <Text style={[styles.text1, styles.textTypo3]}>2</Text>
          </View>
          <Text style={[styles.location, styles.hours1Typo]}>Location</Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-184.png")}
            />
            <Text style={[styles.text1, styles.textTypo3]}>3</Text>
          </View>
          <Text style={[styles.location, styles.hours1Typo]}>Payment</Text>
        </View>
        <View style={styles.frameView}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-186.png")}
            />
            <Text style={[styles.text3, styles.textTypo3]}>4</Text>
          </View>
          <Text style={[styles.location, styles.hours1Typo]}>Summary</Text>
        </View>
      </View>
      <View style={styles.pinYourLocationItem} />
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
      />
      <View style={styles.groupParent1}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.rectangleView, styles.frameWrapperShadowBox]} />
          <View style={[styles.frameGroup, styles.writeHerePosition]}>
            <View style={styles.receiptEditParent}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/receiptedit2.png")}
              />
              <Text
                style={[
                  styles.subscriptionForOneContainer,
                  styles.oneSpaceBlock,
                ]}
              >
                <Text style={styles.subscription}>Subscription</Text>
                <Text style={styles.forOneMonth}> for one month</Text>
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.calendarIcon}
                    resizeMode="cover"
                    source={require("../assets/calendar2.png")}
                  />
                  <Text style={[styles.visits, styles.oneSpaceBlock]}>
                    <Text style={styles.subscription}>
                      <Text style={styles.textTypo2}>4</Text>
                    </Text>
                    <Text style={styles.hours1Typo}>
                      <Text style={styles.subscription}>{` `}</Text>
                      <Text style={styles.forOneMonth}>visits</Text>
                      <Text style={styles.subscription}>{` `}</Text>
                    </Text>
                  </Text>
                </View>
                <View style={[styles.clockParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.calendarIcon}
                    resizeMode="cover"
                    source={require("../assets/clock1.png")}
                  />
                  <Text style={[styles.hours, styles.oneSpaceBlock]}>
                    <Text style={[styles.text8, styles.textTypo2]}>{`4 `}</Text>
                    <Text style={[styles.hours1, styles.hours1Typo]}>
                      hours
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.receiptEditParent}>
                  <Image
                    style={styles.calendarIcon}
                    resizeMode="cover"
                    source={require("../assets/user4.png")}
                  />
                  <Text style={[styles.domesticWorker, styles.oneSpaceBlock]}>
                    <Text style={styles.textTypo2}>1</Text>
                    <Text style={styles.hours1Typo}> domestic worker</Text>
                  </Text>
                </View>
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.calendarIcon}
                    resizeMode="cover"
                    source={require("../assets/home28.png")}
                  />
                  <Text style={[styles.oneVisitA, styles.oneSpaceBlock]}>
                    One visit a week
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dateOfFirstVisitParent}>
          <Text style={[styles.dateOfFirst, styles.dateOfFirstTypo]}>
            Date of first visit
          </Text>
          <View style={[styles.frameWrapper, styles.childBorder]}>
            <View>
              <View style={styles.receiptEditParent}>
                <Text style={[styles.january2024, styles.to0100PmTypo]}>
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
                <View style={[styles.parent, styles.groupLayout]}>
                  <Text style={[styles.text10, styles.textTypo]}>14</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>SUN</Text>
                </View>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text10, styles.textTypo]}>15</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>MON</Text>
                </View>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text10, styles.textTypo]}>16</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>TUE</Text>
                </View>
                <View style={[styles.rectangleGroup, styles.bookingFlexBox]}>
                  <View style={styles.frameItem} />
                  <View style={[styles.parent1, styles.sunSpaceBlock]}>
                    <Text style={[styles.text13, styles.wedTypo]}>17</Text>
                    <Text style={[styles.wed, styles.wedTypo]}>WED</Text>
                  </View>
                </View>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text10, styles.textTypo]}>18</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>THU</Text>
                </View>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text10, styles.textTypo]}>19</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>FRI</Text>
                </View>
                <View style={[styles.group, styles.groupLayout]}>
                  <Text style={[styles.text16, styles.sunSpaceBlock]}>20</Text>
                  <Text style={[styles.sun, styles.sunSpaceBlock]}>SAT</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.chooseTheStartTimeParent, styles.parentLayout]}>
          <Text style={[styles.chooseTheStart, styles.dateOfFirstTypo]}>
            Choose the start time
          </Text>
          <View style={styles.timeParent}>
            <View style={[styles.time, styles.timeLayout]}>
              <View style={[styles.timeChild, styles.timePosition]} />
              <Text style={[styles.to0100Pm, styles.to0100Position]}>
                08:00 to 10:00 AM
              </Text>
            </View>
            <View style={[styles.time1, styles.timeLayout]}>
              <View style={[styles.timeItem, styles.timePosition]} />
              <Text style={styles.to0100Position}>
                <Text style={styles.to0100PmContainer1}>
                  <Text
                    style={[styles.text17, styles.textTypo4]}
                  >{`11:00  `}</Text>
                  <Text style={styles.hours1Typo}>
                    <Text style={styles.to1}>to</Text>
                  </Text>
                  <Text style={styles.pm}>
                    <Text style={styles.hours1Typo}>{` `}</Text>
                    <Text style={styles.textTypo4}>{` 01:00  `}</Text>
                    <Text style={styles.hours1Typo}>PM</Text>
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.time1, styles.timeLayout]}>
              <View style={[styles.timeChild, styles.timePosition]} />
              <Text style={[styles.to0100Pm, styles.to0100Position]}>
                02:00 to 04:00 PM
              </Text>
            </View>
            <View style={[styles.time1, styles.timeLayout]}>
              <View style={[styles.timeChild, styles.timePosition]} />
              <Text style={[styles.to0100Pm, styles.to0100Position]}>
                05:00 to 07:00 PM
              </Text>
            </View>
            <View style={[styles.time1, styles.timeLayout]}>
              <View style={[styles.timeChild, styles.timePosition]} />
              <Text style={[styles.to0100Pm, styles.to0100Position]}>
                08:00 to 10:00 PM
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.calendarGroup, styles.parentLayout]}>
          <Image
            style={styles.calendarIcon1}
            resizeMode="cover"
            source={require("../assets/calendar3.png")}
          />
          <Text style={[styles.nextWeek, styles.nextWeekTypo]}>
            Next week , on the same day and time
          </Text>
        </View>
        <View style={[styles.warning2Parent, styles.parentLayout]}>
          <Image
            style={styles.calendarIcon1}
            resizeMode="cover"
            source={require("../assets/warning2.png")}
          />
          <Text
            style={[styles.theAttendanceOf, styles.nextWeekTypo]}
          >{`The attendance of a woman during the visit is a basic requirement for receiving the service.
`}</Text>
        </View>
        <View style={styles.dateOfFirstVisitParent}>
          <Text style={[styles.writeCommentsOr, styles.dateOfFirstTypo]}>
            Write comments or preferences
          </Text>
          <View style={[styles.rectangleContainer, styles.groupChild3Layout]}>
            <View style={[styles.groupChild3, styles.childLayout]} />
            <Text style={[styles.writeHere, styles.writeHerePosition]}>
              Write here.......
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.buttonBigParent, styles.homeIndicatorSpaceBlock]}>
        <Pressable
          style={styles.buttonBig}
          onPress={() => navigation.navigate("YourAddressLocation11")}
        >
          <View style={[styles.buttonBigChild, styles.childLayout]} />
          <Text style={[styles.logIn, styles.bookingFlexBox]}>Continue</Text>
        </Pressable>
        <View style={styles.sarParent}>
          <Text style={styles.sar}>390 SAR</Text>
          <Text style={[styles.notIncludingVat, styles.to0100PmTypo]}>
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
  );
};

const styles = StyleSheet.create({
  webViewbottomPosition: {
    width: 375,
    backgroundColor: Color.whait,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  bookingFlexBox: {
    justifyContent: "center",
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
  frameParentPosition: {
    left: 0,
    top: 0,
  },
  textPosition: {
    zIndex: 1,
    top: 12,
    left: "50%",
    position: "absolute",
  },
  bookingTypo: {
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  textTypo3: {
    width: 8,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  hours1Typo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  frameWrapperShadowBox: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  writeHerePosition: {
    top: 16,
    position: "absolute",
  },
  oneSpaceBlock: {
    marginLeft: 8,
    lineHeight: 16,
  },
  parentFlexBox: {
    width: 67,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo2: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  dateOfFirstTypo: {
    fontSize: FontSize.size_sm,
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  childBorder: {
    borderWidth: 0.5,
    borderColor: Color.gray,
  },
  to0100PmTypo: {
    color: Color.gray,
    fontWeight: "300",
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  groupLayout: {
    width: 32,
    height: 48,
  },
  textTypo: {
    color: Color.colorDarkgray_100,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  sunSpaceBlock: {
    marginLeft: -16,
    width: 32,
  },
  wedTypo: {
    fontWeight: "700",
    color: Color.whait,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    width: 343,
    marginTop: 24,
  },
  timeLayout: {
    width: 117,
    height: 32,
  },
  timePosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderStyle: "solid",
    height: "100%",
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  to0100Position: {
    left: "0.85%",
    top: "18.75%",
    width: "98.29%",
    height: "62.5%",
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  textTypo4: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  nextWeekTypo: {
    lineHeight: 18,
    color: Color.gray,
    textAlign: "left",
    fontSize: FontSize.med_size,
    marginLeft: 8,
    width: 343,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild3Layout: {
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
  pinYourLocationChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 86,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 375,
    backgroundColor: Color.whait,
    top: 0,
    marginLeft: -187.5,
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  arrow21: {
    left: 16,
    height: 24,
    width: 24,
    top: 43,
    position: "absolute",
  },
  bookingTheService: {
    marginLeft: -77.5,
    top: 102,
    lineHeight: 30,
    width: 155,
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    position: "absolute",
    height: 24,
    left: "50%",
  },
  groupChild: {
    height: 1,
    width: 37,
    borderTopWidth: 1,
    top: 21,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    left: 38,
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
    height: 40,
    width: 40,
  },
  text: {
    height: 16,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  frameParent: {
    alignItems: "center",
    position: "absolute",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    color: Color.grayBlack,
    height: 16,
    top: 12,
    width: 8,
    left: "50%",
    position: "absolute",
    marginLeft: -4,
  },
  location: {
    color: Color.grayBlack,
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  groupParent: {
    left: 70,
    alignItems: "flex-end",
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 140,
    top: 0,
    position: "absolute",
  },
  text3: {
    marginLeft: -4.5,
    color: Color.grayBlack,
    height: 16,
    top: 12,
    width: 8,
    left: "50%",
    position: "absolute",
  },
  frameView: {
    left: 210,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    top: 142,
    left: 61,
    width: 253,
    height: 56,
    position: "absolute",
  },
  pinYourLocationItem: {
    marginLeft: -165.5,
    top: 981,
    width: 331,
    height: 38,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    borderWidth: 0.3,
    height: 124,
    width: 343,
    left: 0,
    top: 0,
    borderColor: Color.gray,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  subscription: {
    textTransform: "capitalize",
  },
  forOneMonth: {
    textTransform: "lowercase",
  },
  subscriptionForOneContainer: {
    width: 173,
    fontSize: FontSize.size_sm,
    height: 16,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    color: Color.black,
  },
  receiptEditParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  visits: {
    textAlign: "left",
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
    height: 16,
    width: 40,
    lineHeight: 16,
  },
  text8: {
    textTransform: "capitalize",
  },
  hours1: {
    textTransform: "lowercase",
  },
  hours: {
    width: 41,
    textAlign: "left",
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
    height: 16,
  },
  clockParent: {
    marginTop: 24,
  },
  domesticWorker: {
    textAlign: "left",
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
  },
  oneVisitA: {
    width: 84,
    textAlign: "left",
    fontSize: FontSize.med_size,
    textTransform: "lowercase",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    height: 16,
  },
  home2Parent: {
    width: 110,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent2: {
    marginLeft: 80,
  },
  frameContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameGroup: {
    top: 16,
    left: 38,
    alignItems: "center",
  },
  rectangleLayout: {
    height: 124,
    width: 343,
  },
  dateOfFirst: {
    width: 119,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  january2024: {
    width: 79,
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  arrowCircleRightIcon: {
    marginLeft: 10,
  },
  arrowCircleLeftParent: {
    marginLeft: 181,
    flexDirection: "row",
  },
  text10: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkgray_100,
    top: 24,
    height: 24,
    marginLeft: -12,
    width: 24,
  },
  sun: {
    color: Color.colorDarkgray_100,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.med_size,
    height: 16,
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
    zIndex: 0,
    width: 40,
  },
  text13: {
    fontSize: FontSize.size_5xl,
    top: 24,
    fontWeight: "700",
    marginLeft: -12,
    height: 24,
    width: 24,
  },
  wed: {
    marginLeft: -16,
    width: 32,
    fontSize: FontSize.med_size,
    height: 16,
    top: 0,
  },
  parent1: {
    height: 48,
    zIndex: 1,
    top: 12,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 13,
    flexDirection: "row",
  },
  text16: {
    color: Color.colorDarkgray_100,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_lg,
    top: 24,
    height: 24,
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
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  dateOfFirstVisitParent: {
    marginTop: 24,
  },
  chooseTheStart: {
    width: 152,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  timeChild: {
    borderWidth: 0.5,
    borderColor: Color.gray,
  },
  to0100Pm: {
    color: Color.gray,
    fontWeight: "300",
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  time: {
    height: 32,
  },
  timeItem: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: Color.praimary1,
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text17: {
    color: Color.praimary1,
  },
  to1: {
    color: Color.black,
  },
  pm: {
    color: Color.praimary1,
  },
  to0100PmContainer1: {
    width: "100%",
  },
  time1: {
    marginLeft: 12,
    height: 32,
  },
  timeParent: {
    width: 359,
    marginTop: 16,
    flexDirection: "row",
  },
  chooseTheStartTimeParent: {
    marginTop: 24,
  },
  calendarIcon1: {
    width: 18,
    height: 18,
  },
  nextWeek: {
    height: 16,
  },
  calendarGroup: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  theAttendanceOf: {
    height: 32,
  },
  warning2Parent: {
    marginTop: 24,
    flexDirection: "row",
  },
  writeCommentsOr: {
    width: 207,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  groupChild3: {
    height: 143,
    width: 343,
    borderWidth: 0.5,
    borderColor: Color.gray,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  writeHere: {
    marginLeft: -155.5,
    opacity: 0.4,
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    top: 16,
    left: "50%",
  },
  rectangleContainer: {
    marginTop: 16,
  },
  groupParent1: {
    marginLeft: -171.5,
    top: 222,
    height: 590,
    left: "50%",
    position: "absolute",
  },
  buttonBigChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderRadius: Border.br_3xs,
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
    textTransform: "capitalize",
    color: Color.whait,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
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
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  notIncludingVat: {
    fontSize: FontSize.size_4xs,
    width: 66,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  sarParent: {
    alignItems: "center",
  },
  buttonBigParent: {
    top: 714,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.whait,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
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
    backgroundColor: Color.whait,
    marginLeft: -187.5,
    width: 375,
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default PinYourLocation15;
