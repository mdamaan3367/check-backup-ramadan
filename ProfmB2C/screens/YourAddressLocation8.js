import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const YourAddressLocation8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourAddressLocation}>
      <View
        style={[styles.yourAddressLocationChild, styles.webViewbottomPosition]}
      />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.addCard, styles.addCardLayout]}>Add Card</Text>
      <Text style={[styles.pleaseProvideThe, styles.text1Layout]}>
        Please provide the details :
      </Text>
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-141.png")}
      />
      <Pressable
        style={[styles.buttonBig, styles.buttonBigPosition]}
        onPress={() => navigation.navigate("YourAddressLocation9")}
      >
        <View style={[styles.buttonBigChild, styles.iconLayout]} />
        <Text style={[styles.logIn, styles.logInTypo]}>Payment by card</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.cardholderName, styles.expiryDateTypo]}>
            Cardholder Name
          </Text>
          <View style={[styles.frameWrapper, styles.frameShadowBox]}>
            <View style={styles.khaledAlQahtaniParent}>
              <Text style={[styles.khaledAlQahtani, styles.text1Typo]}>
                Khaled Al Qahtani
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame101.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardNumberParent}>
          <Text style={[styles.cardholderName, styles.expiryDateTypo]}>
            Card Number
          </Text>
          <View style={[styles.frameContainer, styles.frameShadowBox]}>
            <View style={styles.parent}>
              <Text style={[styles.khaledAlQahtani, styles.text1Typo]}>
                0250 1589 2145 9235
              </Text>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-238767.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <Text style={[styles.expiryDate, styles.expiryDateTypo]}>
              Expiry Date
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <View style={[styles.group, styles.groupPosition]}>
                <Text style={[styles.text1, styles.text1Typo]}>02 / 25</Text>
                <Image
                  style={styles.frameIconLayout}
                  resizeMode="cover"
                  source={require("../assets/group111.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cvvParent}>
            <Text style={[styles.expiryDate, styles.expiryDateTypo]}>CVV</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <View style={styles.groupPosition}>
                <Text style={[styles.text1, styles.text1Typo]}>259</Text>
                <Image
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame111.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  webViewbottomPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  addCardLayout: {
    width: 175,
    fontFamily: FontFamily.dGBaysan,
  },
  text1Layout: {
    height: 16,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
  },
  buttonBigPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    justifyContent: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  expiryDateTypo: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 30,
    height: 24,
  },
  frameShadowBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 0.3,
    marginTop: 4,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  text1Typo: {
    fontSize: FontSize.med_size,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconLayout: {
    height: 14,
    width: 14,
  },
  groupPosition: {
    left: 12,
    top: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  yourAddressLocationChild: {
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
    backgroundColor: Color.whait,
    top: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
    top: 43,
    left: 16,
    position: "absolute",
  },
  addCard: {
    marginLeft: -87.5,
    top: 102,
    justifyContent: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    color: Color.black,
    lineHeight: 30,
    width: 175,
    height: 24,
    left: "50%",
  },
  pleaseProvideThe: {
    top: 158,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    color: Color.praimary1,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
    width: 175,
    fontFamily: FontFamily.dGBaysan,
  },
  profmLogo1111: {
    marginLeft: -34.5,
    width: 70,
    height: 25,
    top: 43,
    left: "50%",
    position: "absolute",
  },
  buttonBigChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    position: "absolute",
    height: "100%",
  },
  logIn: {
    height: "50%",
    width: "58.31%",
    top: "25%",
    left: "20.7%",
    letterSpacing: 0.6,
    lineHeight: 44,
    color: Color.whait,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  buttonBig: {
    top: 729,
    width: 343,
    height: 48,
  },
  cardholderName: {
    width: 104,
  },
  khaledAlQahtani: {
    textAlign: "center",
    fontSize: FontSize.med_size,
  },
  frameIcon: {
    marginLeft: 208,
    overflow: "hidden",
  },
  khaledAlQahtaniParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 4,
  },
  frameChild: {
    width: 16,
    height: 10,
  },
  parent: {
    width: 319,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 4,
  },
  cardNumberParent: {
    marginTop: 24,
  },
  expiryDate: {
    width: 83,
  },
  groupChild: {
    left: 0,
    borderWidth: 0.5,
    width: 159,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 48,
    backgroundColor: Color.whait,
    top: 0,
    position: "absolute",
  },
  text1: {
    width: 42,
    height: 16,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.med_size,
    fontWeight: "600",
  },
  group: {
    width: 135,
    justifyContent: "space-between",
  },
  rectangleParent: {
    width: 159,
    marginTop: 4,
    height: 48,
  },
  frameIcon1: {
    marginLeft: 79,
    overflow: "hidden",
  },
  cvvParent: {
    marginLeft: 25,
    width: 159,
  },
  frameGroup: {
    marginTop: 24,
    flexDirection: "row",
  },
  frameParent: {
    top: 198,
    left: 16,
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
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.colorGray_100,
  },
  yourAddressLocation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default YourAddressLocation8;
