import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash2 = () => {
  return (
    <View style={styles.splash20}>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-2.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.profmLogo1111, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginLeft: -289.5,
    top: -84,
    width: 580,
    height: 981,
  },
  icon: {
    marginTop: -38,
    marginLeft: 52.5,
    top: "50%",
    width: 1,
    height: 77,
  },
  groupIcon: {
    height: "12.87%",
    top: "87.07%",
    right: "0%",
    bottom: "0.06%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 380,
    width: 200,
    height: 70,
  },
  splash20: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash2;
