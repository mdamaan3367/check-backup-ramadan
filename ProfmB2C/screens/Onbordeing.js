import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const OnBordeing = ({ onNext }) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView scrollEnabled={false}>
    <View style={[styles.onBordeing,{height: windowHeight+100,width:windowWidth}]}>
      <Image
        style={[styles.onBordeingChild, styles.bordeingLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.onBordeingItem, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.welcomeParent}>
        <Text style={styles.welcome}>{`Welcome 
`}</Text>
        <Text style={styles.whichIncludesFacilities}>
          Which includes facilities management improving and organizing
          cleaning, maintenance and facility operations smoothly.
        </Text>
      </View>
      <View style={styles.ellipseParent}>
     
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-69.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-70.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-70.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-70.png")}
        />
      </View>
      <View style={[styles.skipIntroParent, styles.nextWrapperFlexBox]}>
        <Pressable onPress={() => navigation.navigate("LogIn")}>
          <Text style={styles.skipIntro1}>Skip Intro</Text>
        </Pressable>
        <Pressable
          style={[styles.nextWrapper, styles.nextWrapperFlexBox]}
          onPress={onNext}
        >
          <Text style={styles.nextTypo}>Next</Text>
        </Pressable>
      </View>
      <Text style={[styles.text, styles.nextTypo]}>العربية</Text>
      <Image
        style={[styles.profmLogo1111, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-16.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bordeingLayout: {
    height: "66%",
    width: "160%",
    top: "-11.5%",
  },
  profmLogo1111Position: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 10,
    width: 10,
  },
  nextWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nextTypo: {
    textAlign: "center",
    color: Color.whait,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  onBordeingChild: {
    left: "-30%",
    position: "absolute",
  },
  onBordeingItem: {
    marginLeft: "-75%",
    height: "66%",
    width: "160%",
    top: "-11.5%",
  },
  welcome: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: "100%",
    height: 32,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  whichIncludesFacilities: {
    letterSpacing: 0.3,
    lineHeight: 20,
    color: Color.a6A6A6,
    width: "45%",
    marginTop: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  welcomeParent: {
    top: "58%",
    left: "5%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 8,
  },
  ellipseParent: {
    marginLeft: "-10%",
    top: "85%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  skipIntro1: {
    width: 63,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  nextWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.praimary,
    width: 75,
    height: 36,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: "58%",
  },
  skipIntroParent: {
    top: "82%",
    left: "2.5%",
    position: "absolute",
  },
  text: {
    top: "7%",
    left: "6%",
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: "-47%",
    top: "20%",
    width: "110%",
    height: 119,
  },
  onBordeing: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
  },
});

export default OnBordeing;
