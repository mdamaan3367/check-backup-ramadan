import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const YourAddressLocation41 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.yourAddressLocation, styles.iconLayout]}>
      <View style={styles.yourAddressLocationChild} />
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
      <Text style={styles.paymentMethods}>Payment Methods</Text>
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
        <Text style={[styles.selectThePayment, styles.applePayTypo]}>
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
                  source={require("../assets/frame112.png")}
                />
                <Text style={[styles.text, styles.textFlexBox]}>
                  **** **** **** 9235
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
                <Text style={[styles.applePay, styles.applePayTypo]}>
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
                  source={require("../assets/frame38.png")}
                />
                <Text style={[styles.applePay, styles.applePayTypo]}>
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
                source={require("../assets/frame41.png")}
              />
              <Text style={[styles.applePay, styles.applePayTypo]}>
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
      <View style={styles.frameParent4}>
        <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
          <Image
            style={styles.frameIcon4}
            resizeMode="cover"
            source={require("../assets/frame12.png")}
          />
          <Text style={[styles.agreeToTerms, styles.agreeToTermsTypo]}>
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
          logInLetterSpacing={0.6}
          logInLineHeight={44}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
          onButtonBigPress={() => navigation.navigate("YourAddressLocation51")}
        />
      </View>
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="#fafdff"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop="unset"
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={5}
        webViewBottomBorderBottomLeftRadius={5}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom={0}
        homeIndicatorBackgroundColor="#1d2939"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  arrow21Layout: {
    height: 24,
    width: 24,
  },
  arrow21Position: {
    top: 43,
    position: "absolute",
  },
  applePayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    marginLeft: 8,
  },
  frameIconLayout: {
    height: 18,
    width: 18,
  },
  rectangleLayout: {
    height: 56,
    width: 343,
  },
  agreeToTermsTypo: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  yourAddressLocationChild: {
    marginLeft: -187.5,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 375,
    height: 86,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
    left: "50%",
    position: "absolute",
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
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    width: 175,
    alignItems: "center",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    height: 24,
    left: "50%",
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
    color: Color.colorBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
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
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    width: 163,
    height: 16,
    marginLeft: 8,
    color: Color.colorBlack,
    textAlign: "center",
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
    marginLeft: 8,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
    top: 246,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
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
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  frameParent5: {
    marginTop: -90,
    width: "61.52%",
    top: "50%",
    right: "38.48%",
    left: "0%",
    position: "absolute",
  },
  frameParent4: {
    top: 596,
    height: 180,
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default YourAddressLocation41;
