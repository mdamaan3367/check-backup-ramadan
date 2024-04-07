import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const OrderFormContainer = ({ imageDimensions, onButtonMidimePress }) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.calendarRemoveParent}>
        <Image
          style={styles.calendarRemoveIcon}
          resizeMode="cover"
          source={imageDimensions}
        />
        <Text style={[styles.noOrdersHaveContainer, styles.logInTypo]}>
          <Text style={styles.noOrdersHaveContainer1}>
            <Text style={styles.no}>no</Text>
            <Text style={styles.ordersHaveBeen}>
              {" "}
              orders have been created yet
            </Text>
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.buttonMidime, styles.logInFlexBox]}
        onPress={onButtonMidimePress}
      >
        <Text style={[styles.logIn, styles.logInFlexBox]}>order now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  logInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendarRemoveIcon: {
    width: 50,
    height: 50,
  },
  no: {
    textTransform: "capitalize",
  },
  ordersHaveBeen: {
    textTransform: "lowercase",
  },
  noOrdersHaveContainer1: {
    width: "100%",
  },
  noOrdersHaveContainer: {
    fontWeight: "300",
    color: Color.grayBlack,
    width: 224,
    height: 16,
    marginTop: 16,
    alignItems: "center",
  },
  calendarRemoveParent: {
    alignItems: "center",
  },
  logIn: {
    fontWeight: "700",
    color: Color.praimary,
    width: 150,
    height: 24,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  buttonMidime: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 220,
    height: 40,
    flexDirection: "row",
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    marginTop: 24,
  },
  frameParent: {
    position: "absolute",
    marginTop: -73,
    marginLeft: -111.5,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
});

export default OrderFormContainer;
