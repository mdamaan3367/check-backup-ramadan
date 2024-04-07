import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import FormContainer1 from "./FormContainer1";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SectionCard2 = () => {
  return (
    <View style={styles.frameParent}>
      <View>
        <Text style={[styles.cardholderName, styles.cardholderNameTypo]}>
          Cardholder Name
        </Text>
        <View style={styles.frameShadowBox}>
          <View style={styles.khaledAlQahtaniParent}>
            <Text style={[styles.khaledAlQahtani, styles.cardholderNameTypo]}>
              Khaled Al Qahtani
            </Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame10.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardNumberParent}>
        <Text style={[styles.cardholderName, styles.cardholderNameTypo]}>
          Card Number
        </Text>
        <View style={styles.frameShadowBox}>
          <View style={styles.parent}>
            <Text style={[styles.khaledAlQahtani, styles.cardholderNameTypo]}>
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
        <FormContainer1
          paymentCardExpirationDate="Expiry Date"
          cardExpirationDate="02 / 25"
          cardImageDimensions={require("../assets/group11.png")}
        />
        <FormContainer1
          paymentCardExpirationDate="CVV"
          cardExpirationDate="259"
          cardImageDimensions={require("../assets/frame11.png")}
          propWidth={159}
          propMarginLeft={25}
          propWidth1="unset"
          propOverflow="hidden"
          propMarginLeft1={79}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardholderNameTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  cardholderName: {
    lineHeight: 30,
    fontWeight: "600",
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    width: 104,
    height: 24,
    alignItems: "center",
  },
  khaledAlQahtani: {
    color: Color.black,
    textAlign: "center",
  },
  frameIcon: {
    width: 14,
    height: 14,
    marginLeft: 208,
    overflow: "hidden",
  },
  khaledAlQahtaniParent: {
    flexDirection: "row",
  },
  frameShadowBox: {
    marginTop: 4,
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 0.3,
    borderColor: Color.a6A6A6,
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
    borderRadius: Border.br_5xs,
    overflow: "hidden",
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
  cardNumberParent: {
    marginTop: 24,
  },
  frameGroup: {
    marginTop: 24,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 198,
    left: 16,
  },
});

export default SectionCard2;
