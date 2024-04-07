import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  paymentCardExpirationDate,
  cardExpirationDate,
  cardImageDimensions,
  propWidth,
  propMarginLeft,
  propWidth1,
  propOverflow,
  propMarginLeft1,
}) => {
  const frameView7Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propWidth, propMarginLeft]);

  const frameView8Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propOverflow, propMarginLeft1]);

  return (
    <View>
      <Text style={[styles.expiryDate, styles.textTypo]}>
        {paymentCardExpirationDate}
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.parent, frameView8Style]}>
          <Text style={[styles.text, styles.textTypo]}>
            {cardExpirationDate}
          </Text>
          <Image
            style={[styles.groupIcon, groupIconStyle]}
            resizeMode="cover"
            source={cardImageDimensions}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    lineHeight: 30,
    fontSize: FontSize.med_size,
    alignItems: "center",
  },
  groupChildLayout: {
    height: 48,
    width: 159,
  },
  expiryDate: {
    color: Color.grayBlack,
    width: 83,
    height: 24,
    alignItems: "center",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    position: "absolute",
  },
  text: {
    color: Color.black,
    width: 42,
    height: 16,
    alignItems: "center",
  },
  groupIcon: {
    width: 14,
    height: 14,
  },
  parent: {
    top: 16,
    left: 12,
    width: 135,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 4,
  },
});

export default FormContainer1;
