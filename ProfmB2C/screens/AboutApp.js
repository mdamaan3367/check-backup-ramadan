import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import WebViewBottom from "../components/WebViewBottom";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const AboutApp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aboutApp, styles.iconLayout]}>
      <View style={styles.webViewbottomWrapper}>
        <WebViewBottom
          webViewBottomPosition="absolute"
          webViewBottomBackgroundColor="#fff"
          webViewBottomMarginLeft={-187.5}
          webViewBottomTop={0}
          webViewBottomLeft="50%"
          webViewBottomBorderBottomRightRadius={5}
          webViewBottomBorderBottomLeftRadius={5}
          webViewBottomWidth={375}
          webViewBottomHeight={34}
          webViewBottomBottom="unset"
          homeIndicatorBackgroundColor="#1d2939"
        />
      </View>
      <View style={[styles.aboutAppInner, styles.groupChildPosition]}>
        <View style={[styles.aboutAppInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.profmLogo1111}
              resizeMode="cover"
              source={require("../assets/3-1-1.png")}
            />
          </View>
          <Pressable
            style={[styles.arrow21, styles.arrow21Position]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-11.png")}
            />
          </Pressable>
          <Text style={[styles.aboutApp1, styles.aboutApp1Position]}>
            about app
          </Text>
        </View>
      </View>
      <Text style={[styles.profmIsAContainer, styles.poweredByTypo]}>
        <Text>
          <Text style={styles.profm}>ProFM</Text> is a limited liability company
          that provides logistics services and integrated solutions. It also
          provides efficient supply solutions in the Kingdom of Saudi Arabia and
          the Gulf Cooperation Council countries to support the growth of the
          local and international trade market.
        </Text>
        <Text> </Text>
        <Text>
          Our logistics services are of the highest quality to our customers and
          meet the expectations of our partners. We achieve this by employing
          effective and experienced human resources, providing the latest
          facilities, and harnessing the latest technological outputs to achieve
          added value for projects that benefit shareholders.
        </Text>
      </Text>
      <View style={[styles.poweredByParent, styles.aboutApp1Position]}>
        <Text style={[styles.poweredBy, styles.poweredByTypo]}>Powered by</Text>
        <Image
          style={styles.logo1Icon}
          resizeMode="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildPosition: {
    left: 0,
    width: 375,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  groupLayout: {
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  arrow21Position: {
    left: 16,
    position: "absolute",
  },
  aboutApp1Position: {
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  poweredByTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  webViewbottomWrapper: {
    marginLeft: -187.5,
    top: 778,
    height: 34,
    width: 375,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 99,
    left: 0,
    width: 375,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -80,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  profmLogo1111: {
    top: 7,
    width: 100,
    height: 36,
    left: "20%",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: -79.5,
    top: 76,
  },
  icon: {
    height: "100%",
  },
  arrow21: {
    top: 43,
    width: 24,
    height: 24,
  },
  aboutApp1: {
    marginLeft: -41.5,
    top: 40,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "600",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 83,
    height: 30,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  aboutAppInner: {
    height: 124,
    top: 0,
    left: 0,
  },
  profm: {
    textTransform: "uppercase",
  },
  profmIsAContainer: {
    top: 156,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    color: Color.grayBlack,
    width: 343,
    height: 330,
    left: 16,
    position: "absolute",
  },
  poweredBy: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.praimary1,
  },
  logo1Icon: {
    width: 75,
    height: 32,
    marginTop: 8,
  },
  poweredByParent: {
    marginLeft: -37.5,
    top: 684,
  },
  aboutApp: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
  },
});

export default AboutApp;
