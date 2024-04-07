import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const YourAddressLocation10 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View
        style={[styles.yourAddressLocationChild, styles.webViewbottomPosition]}
      />
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
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
          style={[styles.frameParent, styles.parentGroupPosition]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.frameChild, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group81.png")}
            />
          </View>
          <Text style={[styles.location, styles.bookingTypo]}>Location</Text>
        </Pressable>
        <View style={[styles.groupParent, styles.parentGroupPosition]}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.frameGroupPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>3</Text>
          </View>
          <Text style={[styles.location, styles.bookingTypo]}>Payment</Text>
        </View>
        <View style={[styles.groupContainer, styles.parentGroupPosition]}>
          <View style={styles.ellipseLayout}>
            <Image
              style={[styles.ellipseIcon, styles.frameGroupPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-186.png")}
            />
            <Text style={[styles.text1, styles.text1Clr]}>4</Text>
          </View>
          <Text style={styles.summary}>Summary</Text>
        </View>
        <Pressable
          style={[styles.frameGroup, styles.frameGroupPosition]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.frameChild, styles.ellipseLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-183.png")}
            />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group81.png")}
            />
          </View>
          <Text style={[styles.booking, styles.bookingTypo]}>{`Booking `}</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.profmLogo1111, styles.arrow21Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-2.png")}
      />
      <View
        style={[styles.selectThePaymentMethodYouParent, styles.parentPosition]}
      >
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
                <Text style={[styles.text2, styles.textTypo]}>
                  **** **** **** 9235
                </Text>
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
      <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={[styles.frameParent7, styles.parentPosition]}>
        <View style={styles.frameParent8}>
          <Image
            style={styles.frameIcon4}
            resizeMode="cover"
            source={require("../assets/frame12.png")}
          />
          <Text style={[styles.agreeToTerms, styles.agreeToTermsTypo]}>
            agree to terms and conditions
          </Text>
        </View>
        <Pressable
          style={[styles.buttonBig, styles.buttonPosition]}
          onPress={() => navigation.navigate("YourAddressLocation51")}
        >
          <View style={[styles.buttonBigChild, styles.buttonPosition]} />
          <Text style={[styles.logIn, styles.textClr]}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  webViewbottomPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  logInFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  groupLayout: {
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  parentGroupPosition: {
    top: 0,
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
  frameGroupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  text1Clr: {
    color: Color.grayBlack,
    fontSize: FontSize.size_base,
  },
  arrow21Position: {
    top: 43,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  applePayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 18,
    width: 18,
  },
  agreeToTermsTypo: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
  },
  buttonPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textClr: {
    color: Color.whait,
    fontSize: FontSize.size_base,
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
    backgroundColor: Color.whait,
    width: 375,
    top: 0,
    marginLeft: -187.5,
  },
  icon: {
    height: "100%",
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
    lineHeight: 30,
    width: 175,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    position: "absolute",
    fontSize: FontSize.size_base,
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
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
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
  },
  ellipseIcon: {
    height: 40,
    width: 40,
  },
  text: {
    marginLeft: -4,
    width: 8,
    top: 12,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
    color: Color.whait,
    fontSize: FontSize.size_base,
  },
  groupParent: {
    left: 140,
  },
  text1: {
    marginLeft: -4.5,
    height: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    width: 8,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  summary: {
    fontWeight: "300",
    color: Color.grayBlack,
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupContainer: {
    left: 210,
    alignItems: "center",
  },
  booking: {
    width: 39,
    color: Color.colorBlack,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  lineParent: {
    top: 142,
    left: 61,
    width: 253,
    height: 56,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    left: "50%",
    top: 43,
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
    backgroundColor: Color.whait,
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
    color: Color.grayBlack,
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
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.colorGray_100,
  },
  frameIcon4: {
    width: 20,
    height: 20,
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
    top: "50%",
    right: "38.48%",
    left: "0%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  buttonBigChild: {
    top: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    height: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    position: "absolute",
  },
  buttonBig: {
    height: "26.67%",
    top: "73.33%",
  },
  frameParent7: {
    top: 596,
    height: 180,
    width: 343,
  },
  yourAddressLocation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
});

export default YourAddressLocation10;
