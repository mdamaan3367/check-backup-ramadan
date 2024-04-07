
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";
import React, { useEffect } from 'react'

import { useNavigation } from "@react-navigation/native";

const Splash1 = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
           navigation.navigate('LogIn');
console.log("navigations")
        },2000)
    },[]);
  return (
    <View style={styles.splash17}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group2.png")}
      />
      <View style={[styles.splash17Child, styles.vectorIconPosition]} />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <Image
        style={[styles.profmLogo1111, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    marginLeft: -289.5,
    top: -84,
    width: 580,
    height: 981,
  },
  groupIcon: {
    height: "12.87%",
    top: "87.07%",
    right: "0%",
    bottom: "0.06%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  splash17Child: {
    marginLeft: 36.5,
    top: 516,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    width: 54,
    height: 12,
  },
  groupIcon1: {
    height: "8.16%",
    width: "8.96%",
    top: "69.02%",
    right: "38.37%",
    bottom: "34.67%",
    left: "53.87%",
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 380,
    width: 200,
    height: 70,
  },
  splash17: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash1;
