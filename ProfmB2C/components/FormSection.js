import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormSection = ({
  cleaningServiceImageId,
  cleaningTypeImageUrl,
  cleaningOptionImageId,
  rating,
  priceText,
  servicePriceText,
  discountPercentage,
  propMarginTop,
  propLeft,
  onFramePressablePress,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.frameParent, groupViewStyle]}>
      <View style={[styles.frameGroup, styles.frameGroupBorder]}>
        <View style={styles.parentFlexBox}>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild, styles.groupShadowBox]} />
            <Image
              style={[
                styles.youngHousekeeperFemaleWithIcon,
                styles.groupItemLayout,
              ]}
              resizeMode="cover"
              source={cleaningServiceImageId}
            />
          </View>
          <View style={styles.frameContainer}>
            <View>
              <Text style={[styles.regularCleaning, styles.hoursTypo]}>
                {cleaningTypeImageUrl}
              </Text>
              <Text style={[styles.hours, styles.sar2Typo]}>
                <Text style={styles.text}>{cleaningOptionImageId}</Text>
                <Text style={styles.hours1}>hours)</Text>
              </Text>
              <View style={[styles.vectorParent, styles.parentFlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
                <Text style={[styles.text1, styles.text1FlexBox]}>
                  {rating}
                </Text>
              </View>
            </View>
            <View style={[styles.sarParent, styles.parentFlexBox]}>
              <Text style={[styles.sar, styles.sarTypo]}>
                <Text style={styles.text}>{priceText}</Text>
                <Text style={styles.hours1}>{` `}</Text>
              </Text>
              <Text style={[styles.sar2, styles.sar2Clr]}>
                <Text style={styles.text}>{servicePriceText}</Text>
                <Text style={styles.hours1}>{` `}</Text>
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.groupWrapper} onPress={onFramePressablePress}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.bookNow, styles.text1FlexBox]}>Book Now</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={[styles.off30Wrapper, styles.frameGroupBorder, frameViewStyle]}
      >
        <Text style={[styles.off30, styles.sarTypo]}>{discountPercentage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupBorder: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 89,
    height: 88,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  groupItemLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  hoursTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2Typo: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  sarTypo: {
    color: Color.red,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2Clr: {
    color: Color.a6A6A6,
    textAlign: "left",
  },
  groupLayout: {
    height: 28,
    width: 74,
  },
  groupChild: {
    left: 1,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGainsboro_300,
    shadowRadius: 20,
    elevation: 20,
    width: 88,
    top: 0,
    height: 88,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  youngHousekeeperFemaleWithIcon: {
    left: 0,
    top: 0,
    height: 88,
    width: 89,
  },
  rectangleParent: {
    height: 88,
  },
  regularCleaning: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.praimary,
    textTransform: "capitalize",
  },
  text: {
    textTransform: "capitalize",
  },
  hours1: {
    textTransform: "lowercase",
  },
  hours: {
    color: Color.grayBlack,
    marginTop: 6,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 17,
    height: 7,
    marginLeft: 4,
    color: Color.a6A6A6,
    textAlign: "left",
  },
  vectorParent: {
    marginTop: 6,
  },
  sar: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  sar2: {
    textDecoration: "line-through",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    color: Color.a6A6A6,
    marginLeft: 8,
  },
  sarParent: {
    marginTop: 10,
  },
  frameContainer: {
    marginLeft: 8,
  },
  groupItem: {
    marginTop: -14,
    marginLeft: -37,
    top: "50%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_8xs,
    position: "absolute",
    left: "50%",
  },
  bookNow: {
    top: 6,
    left: 10,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    justifyContent: "center",
    width: 55,
    height: 16,
    fontSize: FontSize.med_size,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupWrapper: {
    alignItems: "flex-end",
  },
  frameGroup: {
    marginLeft: -171.5,
    top: 11,
    borderRadius: Border.br_3xs,
    shadowRadius: 5,
    elevation: 5,
    borderColor: Color.a6A6A6,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    width: 343,
  },
  off30: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  off30Wrapper: {
    left: 291,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    borderColor: Color.red,
    padding: Padding.p_9xs,
    top: 0,
  },
  frameParent: {
    height: 115,
    width: 343,
  },
});

export default FormSection;
