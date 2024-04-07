import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Property1Variant from "./Property1Variant";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BestOffersSection = () => {
  return (
    <View style={styles.bestOffersParent}>
      <Text style={styles.bestOffers}>best offers</Text>
      <View style={styles.tapButtonParent}>
        <Property1Variant
          cleaning="cleaning"
          property1Variant2MarginLeft="unset"
          rectangleViewBackgroundColor="#006daa"
          rectangleViewBorderStyle="unset"
          rectangleViewBorderColor="unset"
          cleaningFontWeight="700"
          cleaningColor="#fff"
        />
        <Property1Variant
          cleaning="Hospitality"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="Maintenance"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="Electrical Works"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning={`Sanitary & plumbing `}
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="HVAC"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="pest control"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="landscaping"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
        <Property1Variant
          cleaning="Carpentry"
          property1Variant2MarginLeft={16}
          rectangleViewBackgroundColor="#fff"
          rectangleViewBorderStyle="solid"
          rectangleViewBorderColor="#006daa"
          rectangleViewBorderWidth={0.5}
          cleaningFontWeight="300"
          cleaningColor="#006daa"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bestOffers: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 90,
    height: 16,
  },
  tapButtonParent: {
    width: 343,
    flexDirection: "row",
    marginTop: 16,
  },
  bestOffersParent: {
    marginTop: 24,
  },
});

export default BestOffersSection;
