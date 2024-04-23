import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import TotalSection from "../components/TotalSection";
import Property1Default from "../components/Property1Default";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

import {useSelector} from 'react-redux';

const YourAddressLocation12 = ({ route}) => {
  const { childItemId, childItemDeptCode, itemId } =useSelector(state => state.serviceType.selectedServiceType);

  const { responseData, parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap, selectedTime,category } = route.params;
  const day = selectedDate.getDate(); // Get the day (1-31)
const month = selectedDate.getMonth() + 1; // Get the month (0-11) and add 1 to make it 1-12
const year = selectedDate.getFullYear();
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
    <View style={[styles.yourAddressLocation, styles.iconLayout,{height:windowHeight,width:windowWidth}]}>
      
      <View style={styles.yourAddressLocationChild} />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View style={[styles.eReceiptParent, styles.parentFlexBox]}>
        <Text style={[styles.eReceipt, styles.eReceiptTypo]}>E-Receipt</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-238769.png")}
        />
      </View>
      <View style={styles.bookingDetailsParent}>
        <Text style={styles.bookingDetails}>Booking Details</Text>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View>
              <Text style={styles.servicesTypo}>Services</Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Length of service
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Number of Workers
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Working Hours
              </Text>
              <Text style={[styles.lengthOfService, styles.servicesTypo]}>
                Start date and time
              </Text>
            </View>
            <View style={styles.regularCleaningParent}>
              <Text style={styles.oneTimeServiceTypo}>{parentItem.deptCode}</Text>
              <Text style={[styles.oneTimeService, styles.oneTimeServiceTypo]}>
              {itemId.title}
              </Text>
              <Text style={[styles.text, styles.textTypo]}>{childItem.minReqResource}</Text>
              <Text
                style={[styles.cleaningFor2, styles.textTypo]}
              >{childItem.serviceShortDescAr}</Text>
              <Text style={[styles.jan282023, styles.textTypo]}>
              {`${day}-${month}-${year}`} | {selectedTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TotalSection 
  propTop={"65.5%"}
  propMarginTop={"4%"}
  propLeft={"145%"}
  propTextAlign="right"
  propWidth={"150%"}
   childItem={childItem}
   category={category}
    />
      <Property1Default
        logIn="Back to home"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={0}
        property1DefaultTop="unset"
        property1DefaultLeft="2%"
        property1DefaultWidth={"95%"}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom={"0.7%"}
        logInLetterSpacing={0.6}
        logInLineHeight={26}
        logInTextTransform="unset"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("Bottom")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group71.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  eReceiptTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  servicesTypo: {
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  oneTimeServiceTypo: {
    width: 126,
    fontSize: FontSize.med_size,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.med_size,
    marginTop: "11%",
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  yourAddressLocationChild: {
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width:"100%",
    height: 86,
    backgroundColor: Color.whait,
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
    top: "5%",
    left: "4%",
    position: "absolute",
  },
  profmLogo1111: {
    width: 70,
    height: 29,
    top: "4.5%",
    left: "42%",
    position: "absolute",
  },
  eReceipt: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    height: 24,
  },
  frameChild: {
    width: 20,
    height: 20,
    marginLeft:"39%",
  },
  eReceiptParent: {
    top: "13.5%",
    left:"38%",
    position: "absolute",
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    width: 125,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    alignItems: "center",
  },
  lengthOfService: {
    marginTop:"16%",
  },
  oneTimeService: {
    marginTop:"13.5%",
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
  },
  cleaningFor2: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  jan282023: {
    width: 136,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  regularCleaningParent: {
    marginLeft: "25%",
  },
  frameParent: {
    width:"100%",
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xl,
    marginTop: "4%",
    backgroundColor: Color.whait,
    overflow: "hidden",
    width:"94.5%",
    height:"81%"
  },
  bookingDetailsParent: {
    top:"33%",
    left: "4%",
    position: "absolute",
    width:"97%"
  },
  groupIcon: {
    height: "12.98%",
    width: "25%",
    top: "18.49%",
    right: "38.13%",
    bottom: "71.43%",
    left: "37.87%",
    position: "absolute",
    overflow: "hidden",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
  },
});

export default YourAddressLocation12;
