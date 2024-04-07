import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,Dimensions, ScrollView  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const OnBordeing4 = ({ onNext }) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
    <View style={[styles.onBordeing2,{height: windowHeight,width:windowWidth}]}>
      <Image
        style={[styles.onBordeing2Child, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Image
        style={[styles.onBordeing2Child, styles.profmLogo1111Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.cleaningServicesParent}>
        <Text style={styles.cleaningServices}>
          <Text style={styles.cleaning}>{`Facilities management and maintenance `}</Text>
          
          
        </Text>
        <Text
          style={styles.transformYourSpace}
        >{`join a community of satisfied users who have transformed their approach to facility maintenance and management let's optimize your workflow together`}

</Text>
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
          source={require("../assets/ellipse-701.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-701.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-691.png")}
        />
      </View>
      <View style={[styles.skipIntroParent, styles.nextWrapperFlexBox]}>
       
        <Pressable
          style={[styles.nextWrapper, styles.nextWrapperFlexBox]}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.nextTypo}>Get Started</Text>
        </Pressable>
      </View>
      
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
  profmLogo1111Position: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 11,
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
    marginLeft: "-70%",
    top: "-20%",
    width: "150%",
    height: "80%",
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
    width: "40%",
    height: "19%",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  transformYourSpace: {
    letterSpacing: 0.3,
    lineHeight: 20,
    color: Color.a6A6A6,
    width: "34%",
    height: "40%",
    marginTop: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  cleaningServicesParent: {
    top: "68%",
    left: "3%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 8,
  },
  ellipseParent: {
    marginLeft: -31.5,
    top: "96%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  skipIntro1: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  nextWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.praimary,
    width: 100,
    height: 36,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    marginLeft: "68.5%",
  },
  skipIntroParent: {
    top: "94%",
    left: "3%",
    position: "absolute",
  },
  text: {
    top: "7%",
    left: "5%",
    position: "absolute",
  },
  profmLogo1111: {
    marginLeft: "-44%",
    top: "23%",
    width: "105%",
    height: 114,
  },
  onBordeing2: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
  },
});

export default OnBordeing4;
