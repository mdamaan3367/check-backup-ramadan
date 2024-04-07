import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import Property1Default from "./Property1Default";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const ContinueSection = ({  parentItem, childItem, selectedDate, address, showMap, currentLocation,currentAddress,selectedTime }) => {
  const navigation = useNavigation();
  console.log(currentAddress)

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupShadowBox]} />
     
      <View
        style={[styles.locationDetailsWrapper, styles.homeIndicatorPosition]}
      >
        <Text style={styles.locationDetails}>Location Details</Text>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      <View style={styles.groupItem} />
      <View style={styles.groupParent}>
        <View style={styles.currentAddressWrapper}>
          <Text style={[styles.currentAddress, styles.currentAddressTypo]}>
            Current address
          </Text>
        </View>
        <View style={styles.groupContainer}>
          
          <Pressable
            style={styles.frameParent}
            onPress={() => navigation.navigate("SelectFromMap", {
  parentItem: parentItem,
  childItem: childItem,
  selectedDate: selectedDate,
  currentLocation: currentLocation,
  currentAddress: currentAddress,
  selectedTime:selectedTime
})}
          >
            <View style={styles.groupGroup}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group9.png")}
              />
            <Text
                style={[
                  styles.alRawdahDistrictJeddah,
                  styles.currentAddressTypo,
                ]}
              >
                {address}
              </Text>
            </View>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group10.png")}
            />
          </Pressable>
        </View>
      </View>
      <Property1Default
        logIn="Continue"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={0}
        property1DefaultTop={"10%"}
        property1DefaultLeft="4.5%"
        property1DefaultWidth={"90%"}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={26}
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("SelectPayementType", {
  parentItem: parentItem,
  childItem: childItem,
  selectedDate: selectedDate,
  currentLocation: currentLocation,
  currentAddress: currentAddress,
  selectedTime:selectedTime
})}
      disabled={!showMap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  homeIndicatorPosition: {
    left: "33%",
    position: "absolute",
  },
  currentAddressTypo: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupInnerPosition: {
    left: 0,
    height: 40,
    width: "100%",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    top: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 270,
    left: "0%",
    position: "absolute",
  },
  locationDetails: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
    fontWeight: "600",
    top: 0,
    left: "0%",
    position: "absolute",
  },
  locationDetailsWrapper: {
    marginLeft: "0%",
    top: "1%",
    width: "100%",
    height: 17,
  },
  homeIndicator: {
    top:"-5%",
    marginLeft:"5%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.a6A6A6,
    width: 51,
    height: 5,
  },
  groupItem: {
    top: "32%",
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderTopWidth: 0.3,
    height: 0,
    width: "100%",
    left: 0,
    position: "absolute",
  },
  currentAddress: {
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.med_size,
    top: 0,
    left: "0%",
    position: "absolute",
    
  },
  currentAddressWrapper: {
    width: "100%",
    height: 14,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  groupIcon: {
    width: 10,
    height: 15,
  },
  alRawdahDistrictJeddah: {
    fontWeight: "300",
    color: Color.grayBlack,
    marginLeft: 8,
  },
  groupGroup: {
    width: 271,
    alignItems: "center",
    flexDirection: "row",
  },
  groupIcon1: {
    width: 16,
    height: 16,
    marginLeft:20,
    alignSelf:"center"
  },
  frameParent: {
    padding:10,
    top: "20%",
    left: "4%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius:10,
    alignSelf:"center",
    alignContent:"center"
  },
  groupContainer: {
    marginTop: 10,
    height: 40,
    width:"100%",
    alignSelf:"center"
  },
  groupParent: {
    top: 91,
    left: "4%",
    position: "absolute",
  },
  rectangleParent: {
    top: "67%",
    width: "100%",
    height: 270,
    left: "0%",
    position: "absolute",
  },
});

export default ContinueSection;
