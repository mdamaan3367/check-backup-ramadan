import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({
  orderNumber,
  appointmentDetails,
  taskDescription,
  orderNumberLabel,
  appointmentTime,
  paymentMethod,
  packageDimensions,
  appointmentChangeReason,
  propTop,
  propWidth,
  propWidth1,
  propMarginLeft,
  propWidth2,
  propColor,
  propFontWeight,
  propWidth3,
  onFramePressablePress,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const regularCleaningStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const aMStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth2),
    };
  }, [propWidth2]);

  const cashPaymentStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [propColor, propFontWeight]);

  const changeAppointmentStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth3),
    };
  }, [propWidth3]);

  return (
    <View style={[styles.rectangleParent, groupView2Style]}>
      <View style={[styles.groupChild, styles.groupBorder]} />
      <View style={[styles.frameParent, styles.parentFlexBox, frameView3Style]}>
        <View style={styles.groupParent}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textLayout]}>
                {orderNumber}
              </Text>
              <Text style={styles.feb}>{appointmentDetails}</Text>
            </View>
          </View>
          <View style={styles.regularCleaningParent}>
            <Text
              style={[
                styles.regularCleaning,
                styles.cashPaymentTypo,
                regularCleaningStyle,
              ]}
            >
              {taskDescription}
            </Text>
            <Text style={[styles.oneTimeService, styles.oneTimeServiceClr]}>
              One time service
            </Text>
            <Text style={[styles.orderNumber00025, styles.amTypo1]}>
              {orderNumberLabel}
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, frameView4Style]}>
          <View style={styles.groupParent}>
            <Image
              style={styles.clockIcon}
              resizeMode="cover"
              source={require("../assets/clock1.png")}
            />
            <Text style={[styles.am, styles.amTypo, aMStyle]}>
              {appointmentTime}
            </Text>
          </View>
          <Text style={[styles.cashPayment, styles.amTypo, cashPaymentStyle]}>
            {paymentMethod}
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.calendarEditParent, styles.groupItemBorder]}
        onPress={onFramePressablePress}
      >
        <Image
          style={styles.calendarEditIcon}
          resizeMode="cover"
          source={packageDimensions}
        />
        <Text
          style={[
            styles.changeAppointment,
            styles.oneTimeServiceClr,
            changeAppointmentStyle,
          ]}
        >
          {appointmentChangeReason}
        </Text>
      </Pressable>
      <View style={[styles.groupInner, styles.groupBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupItemBorder: {
    borderColor: Color.praimary,
    borderStyle: "solid",
    position: "absolute",
  },
  textLayout: {
    height: 16,
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  cashPaymentTypo: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  oneTimeServiceClr: {
    color: Color.praimary,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  amTypo1: {
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
    fontWeight: "300",
    height: 16,
  },
  amTypo: {
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    backgroundColor: Color.whait,
    borderWidth: 0.5,
    borderRadius: Border.br_5xs,
    top: 0,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    height: 156,
    width: 343,
  },
  groupItem: {
    borderWidth: 1,
    height: 55,
    width: 53,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
    borderColor: Color.praimary,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    width: 30,
    textTransform: "capitalize",
    lineHeight: 18,
    height: 16,
    textAlign: "center",
    color: Color.black,
    justifyContent: "center",
  },
  feb: {
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    width: 30,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    lineHeight: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    top: 10,
    left: 12,
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 53,
  },
  regularCleaning: {
    width: 128,
    textAlign: "left",
    height: 16,
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    fontSize: FontSize.size_sm,
  },
  oneTimeService: {
    width: 90,
    textAlign: "left",
    marginTop: 4,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    color: Color.praimary,
    height: 16,
  },
  orderNumber00025: {
    width: 120,
    textAlign: "left",
    marginTop: 4,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
  },
  regularCleaningParent: {
    marginLeft: 16,
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  clockIcon: {
    width: 10,
    height: 10,
  },
  am: {
    lineHeight: 16,
    width: 40,
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
    fontWeight: "300",
    height: 16,
  },
  cashPayment: {
    color: Color.colorPeru,
    marginTop: 23,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  frameGroup: {
    alignItems: "flex-end",
    marginLeft: 36,
  },
  frameParent: {
    top: 16,
    left: 10,
    position: "absolute",
  },
  calendarEditIcon: {
    width: 20,
    height: 20,
  },
  changeAppointment: {
    letterSpacing: 0.6,
    width: 148,
    marginLeft: 8,
    height: 20,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.praimary,
    textAlign: "center",
    justifyContent: "center",
  },
  calendarEditParent: {
    marginLeft: -161.5,
    top: 104,
    left: "50%",
    borderRadius: Border.br_3xs,
    borderWidth: 1.5,
    width: 323,
    paddingHorizontal: Padding.p_42xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupInner: {
    top: 88,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
  },
  rectangleParent: {
    top: 220,
    left: 16,
    height: 156,
    width: 343,
    position: "absolute",
  },
});

export default SectionCard;
