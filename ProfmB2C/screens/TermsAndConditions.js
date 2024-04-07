import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import Property1Default from "../components/Property1Default";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const TermsAndConditions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsAndConditions}>
      <View style={[styles.termsAndConditionsChild, styles.termsLayout]} />
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
      <Text style={[styles.paymentMethods, styles.addCardTypo]}>
        Payment Methods
      </Text>
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      <PaymentMethodsContainer
        onFramePressablePress={() => navigation.goBack()}
        onFramePressablePress1={() => navigation.goBack()}
      />
      <Image
        style={[styles.profmLogo1111, styles.arrow21Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
      />
      <View style={styles.selectThePaymentMethodYouParent}>
        <Text style={[styles.selectThePayment, styles.agreeToTermsTypo]}>
          Select the payment method you want to use
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.rectangleLayout}>
            <View style={styles.groupShadowBox} />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame61.png")}
                />
                <Text style={[styles.addCard, styles.addCardSpaceBlock]}>
                  Add Card
                </Text>
              </View>
              <Image
                style={[styles.frameChild, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-238575.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupShadowBox} />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame210.png")}
                />
                <Text style={[styles.applePay, styles.addCardSpaceBlock]}>
                  Apple Pay
                </Text>
              </View>
              <Image
                style={[styles.frameItem, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-180.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupShadowBox} />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={[styles.frameIcon, styles.arrow21Layout]}
                  resizeMode="cover"
                  source={require("../assets/frame71.png")}
                />
                <Text style={[styles.applePay, styles.addCardSpaceBlock]}>
                  PayPal
                </Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupShadowBox} />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <Image
                style={[styles.frameIcon, styles.arrow21Layout]}
                resizeMode="cover"
                source={require("../assets/frame81.png")}
              />
              <Text style={[styles.applePay, styles.addCardSpaceBlock]}>
                Cash Payment
              </Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-180.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent4, styles.frameParentSpaceBlock]}>
        <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon4, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame51.png")}
          />
          <Text style={[styles.agreeToTerms, styles.addCardSpaceBlock]}>
            agree to terms and conditions
          </Text>
        </View>
        <Property1Default
          logIn="Continue"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft="unset"
          property1DefaultTop="73.33%"
          property1DefaultLeft="0%"
          property1DefaultWidth="100%"
          property1DefaultHeight="26.67%"
          property1DefaultRight="0%"
          property1DefaultBottom="0%"
          property1DefaultOpacity={0.5}
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
        />
      </View>
      <View
        style={[styles.termsAndConditionsItem, styles.frameParent6Position]}
      />
      <View style={[styles.frameParent6, styles.frameParent6Position]}>
        <View style={[styles.frameParent7, styles.parentFramePosition]}>
          <View style={styles.frameParent8}>
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
            <View style={styles.frameParent9}>
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
              <View style={styles.groupParent}>
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
            <View style={styles.frameParent9}>
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
            <View style={styles.frameParent9}>
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
            <View style={styles.frameParent9}>
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
          <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
            <View style={[styles.groupChild1, styles.groupChild1Layout]} />
            <View style={styles.groupChild2} />
          </View>
        </View>
        <View style={[styles.frameParent10, styles.parentFramePosition]}>
          <View style={styles.frameParentFlexBox}>
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
          <View style={[styles.frameInner, styles.lineViewLayout]} />
        </View>
        <View style={[styles.lineParent, styles.frameParentFlexBox]}>
          <View style={styles.lineViewLayout} />
          <Pressable
            style={[styles.buttonSmall, styles.buttonSpaceBlock]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.decline, styles.acceptTypo]}>Decline</Text>
          </Pressable>
          <View style={[styles.buttonSmall1, styles.buttonSpaceBlock]}>
            <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  termsLayout: {
    width: 375,
    marginLeft: -187.5,
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  addCardTypo: {
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    fontSize: FontSize.size_base,
  },
  arrow21Position: {
    top: 43,
    position: "absolute",
  },
  agreeToTermsTypo: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  addCardSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconLayout: {
    height: 18,
    width: 18,
  },
  rectangleLayout: {
    height: 56,
    width: 343,
  },
  frameParentSpaceBlock: {
    marginLeft: -171.5,
    width: 343,
  },
  frameLayout: {
    height: 20,
    width: 20,
  },
  frameParent6Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentFramePosition: {
    left: 0,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  introductionLayout: {
    width: 164,
    height: 16,
    color: Color.praimary1,
    textAlign: "left",
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
    fontWeight: "300",
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  providingContainerTypo: {
    width: 286,
    marginTop: 8,
    color: Color.gray,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild1Layout: {
    height: 403,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  buttonSpaceBlock: {
    marginLeft: 23,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    height: 40,
    width: 144,
    borderRadius: Border.br_3xs,
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
  termsAndConditionsChild: {
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
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    top: 43,
    position: "absolute",
    left: 16,
  },
  paymentMethods: {
    marginLeft: -87.5,
    top: 102,
    color: Color.black,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    lineHeight: 30,
    fontWeight: "600",
    height: 24,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    width: 24,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    height: 6,
    display: "none",
    width: 6,
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 42,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    left: "50%",
  },
  selectThePayment: {
    color: Color.colorBlack,
    opacity: 0.6,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    left: 0,
    height: 56,
    width: 343,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
  },
  addCard: {
    width: 163,
    height: 16,
    color: Color.praimary1,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    marginLeft: 97,
  },
  frameParent: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  applePay: {
    color: Color.grayBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  frameItem: {
    marginLeft: 186,
  },
  rectangleGroup: {
    marginTop: 24,
  },
  vectorIcon: {
    marginLeft: 210,
  },
  ellipseIcon: {
    top: 19,
    left: 308,
    position: "absolute",
  },
  groupParent: {
    marginTop: 16,
  },
  selectThePaymentMethodYouParent: {
    top: 247,
    left: 16,
    position: "absolute",
  },
  frameIcon4: {
    overflow: "hidden",
  },
  agreeToTerms: {
    textDecoration: "underline",
    color: Color.praimary1,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "center",
  },
  frameParent5: {
    height: "11.11%",
    width: "61.52%",
    top: "0%",
    right: "38.48%",
    bottom: "88.89%",
    left: "0%",
    position: "absolute",
  },
  frameParent4: {
    top: 597,
    height: 180,
    left: "50%",
    position: "absolute",
  },
  termsAndConditionsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    width: 375,
    marginLeft: -187.5,
    top: "50%",
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
    height: 16,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  providingCleaningAnd: {
    height: 48,
    lineHeight: 16,
    width: 286,
  },
  frameParent9: {
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
  frameParent8: {
    height: 866,
    top: 24,
    left: 16,
    position: "absolute",
  },
  groupChild1: {
    left: 2,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.gray,
    width: 2,
    top: 0,
  },
  groupChild2: {
    height: 74,
    backgroundColor: Color.praimary1,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 6,
    top: 0,
    position: "absolute",
  },
  rectangleParent1: {
    left: 325,
    top: 24,
    width: 6,
  },
  frameParent7: {
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
    marginTop: 4,
    color: Color.gray,
    height: 16,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  frame: {
    marginLeft: 96,
  },
  frameInner: {
    marginTop: 16,
  },
  frameParent10: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingTop: Padding.p_base,
    alignItems: "center",
    top: 0,
  },
  decline: {
    color: Color.praimary1,
  },
  buttonSmall: {
    borderColor: Color.praimary1,
    borderWidth: 2,
    borderStyle: "solid",
    marginLeft: 23,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    height: 40,
    width: 144,
  },
  accept: {
    color: Color.whait,
  },
  buttonSmall1: {
    opacity: 0.5,
    backgroundColor: Color.praimary1,
  },
  lineParent: {
    top: 505,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    flexWrap: "wrap",
    paddingBottom: Padding.p_base,
    left: 0,
    backgroundColor: Color.whait,
    position: "absolute",
    width: 343,
    justifyContent: "center",
  },
  frameParent6: {
    marginTop: -288,
    height: 577,
    marginLeft: -171.5,
    width: 343,
  },
  termsAndConditions: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default TermsAndConditions;
