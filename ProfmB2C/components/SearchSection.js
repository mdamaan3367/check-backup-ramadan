import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SearchSection = () => {
  return (
    <View style={styles.pinYourLocationInner}>
      <View style={styles.frameWrapper}>
        <View style={styles.fiRrZoomOutParent}>
          <Image
            style={styles.fiRrZoomOutIcon}
            resizeMode="cover"
            source={require("../assets/firrzoomout2.png")}
          />
          <Text style={styles.search}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fiRrZoomOutIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    width: 242,
    height: 24,
    marginLeft: 8,
    alignItems: "center",
  },
  fiRrZoomOutParent: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 331,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    overflow: "hidden",
  },
  pinYourLocationInner: {
    position: "absolute",
    top: 94,
    left: 16,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    padding: Padding.p_7xs,
    overflow: "hidden",
  },
});

export default SearchSection;
