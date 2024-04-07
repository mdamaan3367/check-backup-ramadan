import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1OneTimeService = ({
  oneTimeService,
  oneTimeHourlyReservationS,
  rectangle4369,
  property1OneTimeServiceMarginTop,
  oneTimeHourlyReservationWidth,
}) => {
  const property1OneTimeServiceStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", property1OneTimeServiceMarginTop),
    };
  }, [property1OneTimeServiceMarginTop]);

  const oneTimeHourlyReservationStyle = useMemo(() => {
    return {
      ...getStyleValue("width", oneTimeHourlyReservationWidth),
    };
  }, [oneTimeHourlyReservationWidth]);

  return (
    <View
      style={[styles.property1oneTimeService, property1OneTimeServiceStyle]}
    >
      <View style={styles.property1oneTimeServiceChild} />
      <View style={styles.oneTimeServiceParent}>
        <Text style={[styles.oneTimeService, styles.oneTypo]}>
          {oneTimeService}
        </Text>
        <Text
          style={[
            styles.oneTimeHourlyReservation,
            styles.oneTypo,
            oneTimeHourlyReservationStyle,
          ]}
        >
          {oneTimeHourlyReservationS}
        </Text>
      </View>
      
      <Image
        style={styles.property1oneTimeServiceItem}
        resizeMode="cover"
        source={rectangle4369}
      />
      <TouchableOpacity  style={styles.groupIcon}>
      <Image
       
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  oneTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  property1oneTimeServiceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue_200,
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 0.5,
    position: "absolute",
  },
  oneTimeService: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
    width: 120,
    height: 16,
  },
  oneTimeHourlyReservation: {
    fontSize: FontSize.med_size,
    lineHeight: 18,
    fontWeight: "300",
    color: Color.grayBlack,
    width: 184,
    height: 34,
    marginTop: 4,
  },
  oneTimeServiceParent: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  property1oneTimeServiceItem: {
    top: 0,
    left: "62%",
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    width: 130,
    position: "absolute",
    height: 86,
  },
  groupIcon: {
    height: "8.14%",
    marginLeft: -5.5,
    top: "82.56%",
    bottom: "9.3%",
    left: "50%",
    maxHeight: "100%",
    width: "10%",
    position: "absolute",
  },
  property1oneTimeService: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 343,
    height: 86,
  },
});

export default Property1OneTimeService;
