import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const OnBordeing1 = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={[styles.onBordeing2,{height:windowHeight,width:windowWidth}]}>
      <Image
        style={[styles.onBordeing2Child, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.onBordeing2Child, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.cleaningServicesParent}>
        <Text style={styles.cleaningServices}>
          <Text style={styles.cleaning}>{`cleaning `}</Text>
          <Text style={styles.s}>s</Text>
          <Text style={styles.cleaning}>ervices</Text>
        </Text>
        <Text
          style={styles.transformYourSpace}
        >{`Transform your space with our cleaning services. Let us bring effortless shine and a sparkling environment to your door say hello to a home you love .

`}</Text>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-701.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-691.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-701.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-701.png")}
        />
      </View>
      <View style={[styles.skipIntroParent, styles.nextWrapperFlexBox]}>
        <Pressable onPress={() => navigation.navigate("PinYourLocation")}>
          <Text style={styles.skipIntro1}>Skip Intro</Text>
        </Pressable>
        <Pressable
          style={[styles.nextWrapper, styles.nextWrapperFlexBox]}
          onPress={() => navigation.navigate("OnBordeing2")}
        >
          <Text style={styles.nextTypo}>Next</Text>
        </Pressable>
      </View>
      <Text style={[styles.text, styles.nextTypo]}>العربية</Text>
      <Image
        style={[styles.profmLogo1111, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/profm-logo1-1-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Color.whait,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  onBordeing2Child: {
    marginLeft: -287.5,
    top: -90,
    width: 576,
    height: 517,
  },
  cleaning: {
    textTransform: "capitalize",
  },
  s: {
    textTransform: "lowercase",
  },
  cleaningServices: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 337,
    height: 32,
    textAlign: "left",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  transformYourSpace: {
    letterSpacing: 0.3,
    lineHeight: 20,
    color: Color.gray,
    width: 343,
    height: 58,
    marginTop: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  cleaningServicesParent: {
    top: 512,
    left: 17,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 8,
  },
  ellipseParent: {
    marginLeft: -31.5,
    top: 743,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  skipIntro1: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  nextWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.praimary1,
    width: 75,
    height: 36,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: 207,
  },
  skipIntroParent: {
    top: 729,
    left: 16,
    position: "absolute",
  },
  text: {
    top: 48,
    left: 16,
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: -149.5,
    top: 174,
    width: 300,
    height: 114,
  },
  onBordeing2: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
   
   
    overflow: "hidden",
  },
});

export default OnBordeing1;
