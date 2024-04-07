import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const YourAddressLocation9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourAddressLocation}>
      <View
        style={[styles.yourAddressLocationChild, styles.webViewbottomLayout]}
      />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.enterYourPin, styles.textFlexBox]}>
        Enter Your PIN
      </Text>
      <Image
        style={[styles.profmLogo1111, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-141.png")}
      />
      <View
        style={[
          styles.enterYourPinToConfirmPaymParent,
          styles.buttonBigPosition,
        ]}
      >
        <Text style={[styles.enterYourPin1, styles.textClr]}>
          Enter your PIN to confirm payment
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-38.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-38.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-38.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild2, styles.groupChildBorder]} />
            <Text style={[styles.text, styles.textClr]}>3</Text>
          </View>
        </View>
      </View>
      <View style={[styles.ioskeyboard, styles.ioskeyboardPosition]}>
        <View style={[styles.sec, styles.secFlexBox1]}>
          <View style={[styles.ioskeydigit, styles.ioskeydigitShadowBox]}>
            <Text style={styles.text1}>1</Text>
            <Text style={styles.abcTypo}>{` `}</Text>
          </View>
          <View style={[styles.ioskeydigit1, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>2</Text>
            <Text style={styles.abcTypo}>ABC</Text>
          </View>
          <View style={[styles.ioskeydigit2, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>3</Text>
            <Text style={styles.abcTypo}>DEF</Text>
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={[styles.ioskeydigit3, styles.ioskeydigitShadowBox]}>
            <Text style={styles.text1}>4</Text>
            <Text style={styles.abcTypo}>GHI</Text>
          </View>
          <View style={[styles.ioskeydigit4, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>5</Text>
            <Text style={styles.abcTypo}>JKL</Text>
          </View>
          <View style={[styles.ioskeydigit5, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>6</Text>
            <Text style={styles.abcTypo}>MNO</Text>
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={[styles.ioskeydigit6, styles.ioskeydigitShadowBox]}>
            <Text style={styles.text1}>7</Text>
            <Text style={styles.abcTypo}>PQRS</Text>
          </View>
          <View style={[styles.ioskeydigit7, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>8</Text>
            <Text style={styles.abcTypo}>TUV</Text>
          </View>
          <View style={[styles.ioskeydigit8, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>9</Text>
            <Text style={styles.abcTypo}>WXYZ</Text>
          </View>
        </View>
        <View style={[styles.sec1, styles.secFlexBox]}>
          <View style={[styles.sec4, styles.secFlexBox1]} />
          <View style={[styles.ioskeydigit9, styles.ioskeydigitFlexBox]}>
            <Text style={styles.text1}>0</Text>
            <Text style={[styles.abc9, styles.abcTypo]}>{` `}</Text>
          </View>
          <View style={styles.ioskeydigitFlexBox}>
            <Image
              style={styles.vecIcon}
              resizeMode="cover"
              source={require("../assets/vec.png")}
            />
          </View>
        </View>
        <View style={styles.secFlexBox} />
      </View>
      <View style={[styles.webViewbottom, styles.ioskeyboardPosition]}>
        <View style={[styles.homeIndicator, styles.secFlexBox1]}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <Pressable
        style={[styles.buttonBig, styles.buttonBigPosition]}
        onPress={() => navigation.navigate("YourAddressLocation10")}
      >
        <View style={styles.buttonBigChild} />
        <Text style={[styles.logIn, styles.textFlexBox]}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  webViewbottomLayout: {
    width: 375,
    marginLeft: -187.5,
  },
  textFlexBox: {
    display: "flex",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 25,
    position: "absolute",
  },
  buttonBigPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  groupChildBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 70,
  },
  ioskeyboardPosition: {
    backgroundColor: Color.lightBGDefault,
    left: "50%",
    position: "absolute",
  },
  secFlexBox1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  ioskeydigitShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  ioskeydigitFlexBox: {
    marginLeft: 4.5,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  secFlexBox: {
    marginTop: 4.5,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  abcTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_5xs_5,
    color: Color.colorGray_500,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  yourAddressLocationChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 86,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
    width: 375,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    left: 16,
    width: 24,
    height: 24,
    top: 43,
    position: "absolute",
  },
  enterYourPin: {
    marginLeft: -87.5,
    top: 102,
    lineHeight: 30,
    color: Color.black,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    height: 24,
    left: "50%",
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
  },
  enterYourPin1: {
    fontSize: FontSize.med_size,
    opacity: 0.5,
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
  },
  groupChild: {
    left: 0,
    borderColor: Color.gray,
    borderWidth: 0.3,
    height: 60,
    width: 70,
    top: 0,
    borderStyle: "solid",
  },
  groupItem: {
    top: 17,
    left: 22,
    width: 25,
  },
  rectangleGroup: {
    marginLeft: 21,
  },
  groupChild2: {
    top: -1,
    left: -1,
    borderColor: "#0299df",
    borderWidth: 1,
    width: 72,
    height: 62,
  },
  text: {
    marginLeft: -10,
    top: 14,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 20,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    position: "absolute",
    color: Color.colorBlack,
    left: "50%",
  },
  groupParent: {
    marginTop: 24,
    flexDirection: "row",
  },
  enterYourPinToConfirmPaymParent: {
    top: 219,
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_500,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  ioskeydigit: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ioskeydigit1: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  ioskeydigit2: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  sec: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  ioskeydigit3: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ioskeydigit4: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  ioskeydigit5: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  sec1: {
    flexDirection: "row",
  },
  ioskeydigit6: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ioskeydigit7: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  ioskeydigit8: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  sec4: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  abc9: {
    display: "none",
  },
  ioskeydigit9: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  vecIcon: {
    width: 16,
    height: 13,
  },
  ioskeyboard: {
    marginLeft: -186.5,
    bottom: 0,
    width: 374,
    height: 290,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    top: 777,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.lightBGDefault,
  },
  buttonBigChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.praimary1,
    borderRadius: Border.br_3xs,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    color: Color.whait,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  buttonBig: {
    top: 432,
    width: 343,
    height: 48,
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default YourAddressLocation9;
