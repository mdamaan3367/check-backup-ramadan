import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {useSelector} from 'react-redux';

const YourAddressLocation61 = ({ route}) => {
  const { selectedDateTimeArray, priceValue, day2, month2, year2 } = useSelector(state => state.contract);
  const navigation = useNavigation();
  const { responseData, parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap, selectedTime,category } = route.params;
  console.log(category,"from lottie")
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
    <View style={[styles.yourAddressLocation, styles.iconLayout,{height:windowHeight,width:windowWidth}]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.httpslottiefilescomanimatParent}>
        <Image
          style={styles.httpslottiefilescomanimatIcon}
          resizeMode="cover"
          source={require("../assets/payementSuccess-ezgif.com-gif-maker.gif")}
        />
        <View style={styles.paymentSuccessfulParent}>
          <Text
            style={[styles.paymentSuccessful, styles.paymentSuccessfulLayout]}
          >
            Payment Successful!
          </Text>
          <Text
            style={[styles.youvePaid91Container, styles.messageToWorkersTypo]}
          >
            <Text style={styles.youvePaid91Container1}>
              <Text style={styles.youvePaidTypo}>You’ve Paid</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.text1}>{category === 'D' ? childItem.offerPrice + childItem.offerPrice * 0.15 : priceValue + priceValue * 0.15}</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.youvePaidTypo}>SAR</Text>
            </Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.receiptHasBeen, styles.youvePaidTypo]}>
        Receipt has been sent to your email address
      </Text>
      <View style={styles.messageToWorkersParent}>
        <Text style={[styles.messageToWorkers, styles.messageToWorkersTypo]}>
          Message to workers
        </Text>
        <Pressable style={styles.arrow21}
         //onPress={() => navigation.goBack()}
         >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-12.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.arrow211, styles.arrow211Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.profmLogo1111, styles.arrow211Position]}
        resizeMode="cover"
        source={require("../assets/3-1-13.png")}
      />
      <Property1Default
        logIn="View E-Receipt"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={0}
        property1DefaultTop={"90%"}
        property1DefaultLeft="2%"
        property1DefaultWidth={"95%"}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={24}
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("YourAddressLocation12", {
  responseData: responseData,
  parentItem: parentItem,
  childItem: childItem,
  selectedDate: selectedDate,
  currentLocation: currentLocation,
  currentAddress: currentAddress,
  showMap: showMap,
  selectedTime: selectedTime,
  category:category
})}
        
      />
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  paymentSuccessfulLayout: {
    width: "100%",
    color: Color.whait,
    textTransform: "capitalize",
    lineHeight: 30,
  },
  messageToWorkersTypo: {
    fontSize: FontSize.size_sm,
    height: 24,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  youvePaidTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  arrow211Position: {
    top:"7%",
    position: "absolute",
  },
  vectorIcon: {
    top:"3%",
    left:"4%",
    width:"93%",
    height: "45%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    width: 288,
    height: 150,
  },
  paymentSuccessful: {
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  youvePaid91Container1: {
    width: "100%",
  },
  youvePaid91Container: {
    marginTop: 12,
    width:"100%",
    color: Color.whait,
    lineHeight: 30,
    marginLeft:"4%"
  },
  paymentSuccessfulParent: {
    marginTop: 32,
  },
  httpslottiefilescomanimatParent: {
    top: "10%",
    alignItems: "center",
    left: "12%",
    position: "absolute",
  },
  receiptHasBeen: {
    top: "55%",
    color: "black",
    width:"100%",
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    left: "0%",
    position: "absolute",
  },
  messageToWorkers: {
    top: 0,
    letterSpacing: 0.6,
    lineHeight:20,
    color: Color.praimary,
    width:"100%",
    justifyContent: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow21: {
    left: "73%",
    top:"25%",
    width: 14,
    height: 14,
    position: "absolute",
  },
  messageToWorkersParent: {
    top: "61%",
    width:"100%",
    height: 18,
    left: "0%",
    position: "absolute",
    flex:1
  },
  arrow211: {
    left: "8%",
    width: 24,
    height: 24,
  },
  profmLogo1111: {
    width: 70,
    height: 25,
    left: "42%",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default YourAddressLocation61;
