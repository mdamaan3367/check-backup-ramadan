import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const YourAddressLocation11 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.groupIconLayout]}>
      <View style={styles.yourAddressLocationChild} />
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.paymentMethods, styles.logInFlexBox]}>
        Payment Methods
      </Text>
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.groupInner} />
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.frameChild, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group81.png")}
            />
          </View>
          <Text style={[styles.location, styles.bookingTypo]}>Location</Text>
        </Pressable>
        <View style={styles.groupParent}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Text style={[styles.text, styles.textPosition]}>3</Text>
          </View>
          <Text style={[styles.location, styles.bookingTypo]}>Payment</Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-186.png")}
            />
            <Text style={[styles.text1, styles.text1Clr]}>4</Text>
          </View>
          <Text style={styles.summary}>Summary</Text>
        </View>
        <Pressable
          style={styles.frameGroup}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.frameChild, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group81.png")}
            />
          </View>
          <Text style={[styles.booking, styles.bookingTypo]}>{`Booking `}</Text>
        </Pressable>
      </View>
      <View style={styles.selectThePaymentMethodYouParent}>
        <Text style={[styles.selectThePayment, styles.applePayTypo]}>
          Select the payment method you want to use
        </Text>
        <View style={styles.groupParent1}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameContainer}>
              <View style={styles.frameParent1}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame61.png")}
                />
                <Text style={styles.text2}>**** **** **** 9235</Text>
              </View>
              <Image
                style={[styles.frameInner, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-238575.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameContainer}>
              <View style={styles.frameParent1}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame210.png")}
                />
                <Text style={[styles.applePay, styles.applePayTypo]}>
                  Apple Pay
                </Text>
              </View>
              <Image
                style={[styles.frameChild1, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-180.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameContainer}>
              <View style={styles.frameParent1}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame71.png")}
                />
                <Text style={[styles.applePay, styles.applePayTypo]}>
                  PayPal
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupChildShadowBox} />
            <View style={styles.frameContainer}>
              <Image
                style={[styles.frameIcon, styles.arrow21Layout]}
                resizeMode="cover"
                source={require("../assets/frame81.png")}
              />
              <Text style={[styles.applePay, styles.applePayTypo]}>
                Cash Payment
              </Text>
            </View>
            <Image
              style={[styles.groupChild5, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-180.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.webViewbottomSpaceBlock]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.frameParent7}>
        <View style={styles.frameParent8}>
          <Image
            style={[styles.frameIcon4, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame12.png")}
          />
          <Text style={[styles.agreeToTerms, styles.agreeToTermsTypo]}>
            agree to terms and conditions
          </Text>
        </View>
        <View style={[styles.buttonBig, styles.buttonPosition]}>
          <View style={[styles.buttonBigChild, styles.childLayout]} />
          <Text style={[styles.logIn, styles.logInFlexBox]}>Continue</Text>
        </View>
      </View>
      <Image
        style={[styles.icon1, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View
        style={[styles.yourAddressLocationItem, styles.frameParent9Position]}
      />
      <View style={[styles.frameParent9, styles.frameParent9Position]}>
        <View style={[styles.frameParent10, styles.frameParentPosition]}>
          <View style={styles.frameParent11}>
            <View>
              <Text style={[styles.introduction, styles.introductionLayout]}>
                introduction
              </Text>
              <Text
                style={[styles.theTermsAndContainer, styles.theContainerTypo]}
              >
                <Text style={styles.theTermsAndContainer1}>
                  {`The terms and conditions of the cleaning and maintenance application are an integral part of the contract concluded between the customer and `}
                  <Text style={styles.profm}>Profm</Text>. The customer must
                  agree to these terms and conditions before starting the
                  cleaning and maintenance process.
                </Text>
              </Text>
            </View>
            <View style={styles.frameParent12}>
              <View>
                <Text style={[styles.introduction, styles.introductionLayout]}>
                  Commitments
                </Text>
                <Text style={[styles.underTheseTerms, styles.theContainerTypo]}>
                  Under these terms and conditions, the customer is obligated
                  to:
                </Text>
                <Text style={[styles.payTheFees, styles.theContainerTypo]}>
                  Pay the fees agreed upon in the contract.
                </Text>
                <Text
                  style={[
                    styles.providingAccessToContainer,
                    styles.providingContainerTypo,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    {`Providing access to the pool for `}
                    <Text style={styles.profm}>Profm</Text> employees on
                    scheduled times.
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.providingAllNecessary,
                    styles.providingContainerTypo,
                  ]}
                >
                  Providing all necessary equipment and materials for cleaning
                  and maintenance.
                </Text>
                <Text
                  style={[
                    styles.cooperatingWithProfmContainer,
                    styles.providingContainerTypo,
                  ]}
                >
                  <Text style={styles.theTermsAndContainer1}>
                    {`Cooperating with `}
                    <Text style={styles.profm}>Profm</Text> employees to ensure
                    the quality of services provided.
                  </Text>
                </Text>
              </View>
              <View style={styles.groupParent1}>
                <Text style={styles.profmIsBoundContainer}>
                  <Text style={styles.theTermsAndContainer1}>
                    <Text style={styles.profm}>Profm</Text> is bound by these
                    terms and conditions to:
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.providingCleaningAnd,
                    styles.providingContainerTypo,
                  ]}
                >
                  Providing cleaning and maintenance services in accordance with
                  standards agreed upon in the contract.
                </Text>
                <Text
                  style={[
                    styles.cooperatingWithProfmContainer,
                    styles.providingContainerTypo,
                  ]}
                >
                  Use appropriate chemicals and tools for cleaning and
                  maintenance
                </Text>
                <Text
                  style={[
                    styles.cooperatingWithProfmContainer,
                    styles.providingContainerTypo,
                  ]}
                >
                  Providing a detailed report on the cleaning and maintenance
                  process after it is completed.
                </Text>
              </View>
            </View>
            <View style={styles.frameParent12}>
              <Text style={[styles.introduction, styles.introductionLayout]}>
                Guarantees
              </Text>
              <Text
                style={[
                  styles.profmGuaranteesThatContainer,
                  styles.theContainerTypo,
                ]}
              >
                <Text style={styles.theTermsAndContainer1}>
                  <Text style={styles.profm}>Profm</Text> guarantees that the
                  cleaning and maintenance services provided to the customer are
                  in accordance with the standards agreed upon in the contract.
                  In the event of dissatisfaction with the services provided,
                  the customer has the right to request compensation for the
                  damages incurred.
                </Text>
              </Text>
            </View>
            <View style={styles.frameParent12}>
              <Text style={[styles.introduction, styles.introductionLayout]}>
                responsibility
              </Text>
              <Text
                style={[styles.profmDoesNotContainer, styles.theContainerTypo]}
              >
                <Text style={styles.theTermsAndContainer1}>
                  <Text style={styles.profm}>{`Profm `}</Text>
                  <Text style={styles.doesNotBear}>
                    does not bear any responsibility for any damages caused to
                    Clients or other persons due to errors or negligence on the
                    part of the Client or its employees.
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameParent12}>
              <Text style={[styles.introduction, styles.introductionLayout]}>
                Conflict Resolution
              </Text>
              <Text
                style={[styles.ifAnyDisputeContainer, styles.theContainerTypo]}
              >
                <Text style={styles.theTermsAndContainer1}>
                  <Text
                    style={styles.doesNotBear}
                  >{`If any dispute arises between the Client and `}</Text>
                  <Text style={styles.profm}>Profm</Text>
                  <Text style={styles.doesNotBear}>
                    , it will be resolved through friendly negotiation. In the
                    event that a solution is not reached, recourse will be made
                    to the competent judiciary.
                  </Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleParent1, styles.groupChild6Layout]}>
            <View style={[styles.groupChild6, styles.groupChild6Layout]} />
            <View style={[styles.groupChild7, styles.childLayout]} />
          </View>
        </View>
        <View style={[styles.frameParent13, styles.frameParentPosition]}>
          <View style={styles.frameParent1}>
            <View>
              <Text
                style={[
                  styles.termsAndConditionsContainer,
                  styles.introductionLayout,
                ]}
              >
                <Text style={styles.theTermsAndContainer1}>
                  <Text style={styles.terms}>{`terms `}</Text>and
                  <Text style={styles.terms}>{` `}</Text>c
                  <Text style={styles.terms}>onditions</Text>
                </Text>
              </Text>
              <Text style={styles.lastUpdateJanuaryContainer}>
                <Text style={styles.theTermsAndContainer1}>
                  <Text style={styles.terms}>last</Text> update January 2024
                </Text>
              </Text>
            </View>
            <Pressable
              style={[styles.frame, styles.frameLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/frame91.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.lineView, styles.lineViewLayout]} />
        </View>
        <View style={[styles.lineGroup, styles.logInFlexBox]}>
          <View style={styles.lineViewLayout} />
          <Pressable
            style={[styles.buttonSmall, styles.buttonSpaceBlock]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.decline, styles.acceptTypo]}>Decline</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonSmall1, styles.buttonSpaceBlock]}
            onPress={() => navigation.navigate("YourAddressLocation12")}
          >
            <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  logInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupLayout: {
    height: 1,
    width: 37,
    borderTopWidth: 1,
    top: 21,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  bookingTypo: {
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  textPosition: {
    width: 8,
    top: 12,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  text1Clr: {
    color: Color.color,
    fontSize: FontSize.size_base,
  },
  applePayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 18,
    width: 18,
  },
  webViewbottomSpaceBlock: {
    marginLeft: -187.5,
    width: 375,
  },
  frameLayout: {
    height: 20,
    width: 20,
  },
  agreeToTermsTypo: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
  },
  buttonPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  icon1Position: {
    top: 43,
    position: "absolute",
  },
  frameParent9Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameParentPosition: {
    backgroundColor: Color.lightBGPrimary,
    left: 0,
    position: "absolute",
  },
  introductionLayout: {
    width: 164,
    color: Color.praimary1,
    textAlign: "left",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 30,
  },
  theContainerTypo: {
    marginTop: 8,
    width: 303,
    color: Color.gray,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  providingContainerTypo: {
    width: 286,
    marginTop: 8,
    color: Color.gray,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild6Layout: {
    height: 403,
    position: "absolute",
  },
  lineViewLayout: {
    width: 344,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    height: 1,
    borderStyle: "solid",
  },
  buttonSpaceBlock: {
    marginLeft: 23,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    width: 144,
    borderRadius: Border.br_3xs,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  acceptTypo: {
    width: 122,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    height: 24,
  },
  yourAddressLocationChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 86,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.lightBGPrimary,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
    position: "absolute",
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  arrow21: {
    top: 43,
    position: "absolute",
    left: 16,
  },
  paymentMethods: {
    marginLeft: -87.5,
    top: 102,
    width: 175,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
    lineHeight: 30,
    height: 24,
    left: "50%",
  },
  groupChild: {
    left: 38,
  },
  groupItem: {
    left: 107,
  },
  groupInner: {
    left: 177,
    opacity: 0.5,
    borderColor: Color.gray,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon: {
    height: "29%",
    width: "37.5%",
    top: "37.5%",
    right: "30%",
    bottom: "33.5%",
    left: "32.5%",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  location: {
    color: Color.black,
  },
  frameParent: {
    left: 70,
    alignItems: "flex-end",
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -4,
    height: 16,
    color: Color.lightBGPrimary,
    fontSize: FontSize.size_base,
  },
  groupParent: {
    left: 140,
    top: 0,
    position: "absolute",
  },
  text1: {
    marginLeft: -4.5,
    height: 16,
    width: 8,
    top: 12,
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  summary: {
    fontWeight: "300",
    color: Color.color,
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupContainer: {
    left: 210,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  booking: {
    width: 39,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  frameGroup: {
    left: 0,
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
  selectThePayment: {
    opacity: 0.6,
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    width: 343,
    left: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    height: 56,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
  },
  text2: {
    width: 163,
    marginLeft: 8,
    color: Color.colorBlack,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  frameParent1: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameInner: {
    marginLeft: 97,
  },
  frameContainer: {
    top: 16,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    width: 343,
    height: 56,
  },
  applePay: {
    marginLeft: 8,
    color: Color.color,
    fontSize: FontSize.size_base,
  },
  frameChild1: {
    marginLeft: 186,
  },
  rectangleGroup: {
    marginTop: 24,
    width: 343,
    height: 56,
  },
  vectorIcon: {
    marginLeft: 210,
  },
  groupChild5: {
    top: 19,
    left: 308,
    position: "absolute",
  },
  groupParent1: {
    marginTop: 16,
  },
  selectThePaymentMethodYouParent: {
    top: 246,
    marginLeft: -171.5,
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
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
    marginLeft: -187.5,
  },
  frameIcon4: {
    overflow: "hidden",
  },
  agreeToTerms: {
    textDecoration: "underline",
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
  },
  frameParent8: {
    marginTop: -90,
    width: "61.52%",
    right: "38.48%",
    left: "0%",
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  buttonBigChild: {
    top: "0%",
    backgroundColor: Color.praimary1,
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    color: Color.lightBGPrimary,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  buttonBig: {
    height: "26.67%",
    top: "73.33%",
    position: "absolute",
  },
  frameParent7: {
    top: 596,
    height: 180,
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    marginLeft: -34.5,
    width: 70,
    height: 27,
    left: "50%",
  },
  yourAddressLocationItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  introduction: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  profm: {
    textTransform: "uppercase",
  },
  theTermsAndContainer1: {
    width: "100%",
  },
  theTermsAndContainer: {
    height: 84,
    lineHeight: 18,
    marginTop: 8,
  },
  underTheseTerms: {
    height: 32,
    lineHeight: 18,
    marginTop: 8,
  },
  payTheFees: {
    height: 16,
  },
  providingAccessToContainer: {
    lineHeight: 16,
    width: 286,
    height: 32,
  },
  providingAllNecessary: {
    lineHeight: 16,
    width: 286,
    height: 32,
    textTransform: "capitalize",
  },
  cooperatingWithProfmContainer: {
    height: 32,
  },
  profmIsBoundContainer: {
    width: 303,
    color: Color.gray,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  providingCleaningAnd: {
    height: 48,
    lineHeight: 16,
    width: 286,
  },
  frameParent12: {
    marginTop: 24,
  },
  profmGuaranteesThatContainer: {
    height: 104,
    lineHeight: 18,
    marginTop: 8,
  },
  doesNotBear: {
    textTransform: "lowercase",
  },
  profmDoesNotContainer: {
    height: 54,
    lineHeight: 18,
    marginTop: 8,
  },
  ifAnyDisputeContainer: {
    height: 66,
    lineHeight: 18,
    marginTop: 8,
  },
  frameParent11: {
    height: 866,
    top: 24,
    left: 16,
    position: "absolute",
  },
  groupChild6: {
    left: 2,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.gray,
    width: 2,
    top: 0,
  },
  groupChild7: {
    height: 74,
    width: 6,
    backgroundColor: Color.praimary1,
    left: 0,
    top: 0,
  },
  rectangleParent1: {
    left: 325,
    width: 6,
    top: 24,
  },
  frameParent10: {
    top: 68,
    height: 437,
    width: 343,
    left: 0,
  },
  terms: {
    textTransform: "capitalize",
  },
  termsAndConditionsContainer: {
    fontSize: FontSize.size_base,
  },
  lastUpdateJanuaryContainer: {
    width: 195,
    color: Color.gray,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontWeight: "300",
    height: 16,
    marginTop: 4,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  frame: {
    marginLeft: 96,
  },
  lineView: {
    marginTop: 16,
  },
  frameParent13: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingTop: Padding.p_base,
    left: 0,
    alignItems: "center",
    top: 0,
  },
  decline: {
    color: Color.praimary1,
    fontWeight: "700",
  },
  buttonSmall: {
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    marginLeft: 23,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    width: 144,
  },
  accept: {
    color: Color.lightBGPrimary,
  },
  buttonSmall1: {
    backgroundColor: Color.praimary1,
  },
  lineGroup: {
    top: 505,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    flexWrap: "wrap",
    paddingBottom: Padding.p_base,
    width: 343,
    left: 0,
    flexDirection: "row",
    backgroundColor: Color.lightBGPrimary,
    position: "absolute",
  },
  frameParent9: {
    marginTop: -288,
    height: 577,
    width: 343,
    marginLeft: -171.5,
  },
  yourAddressLocation: {
    height: 812,
    width: 375,
    maxWidth: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default YourAddressLocation11;
