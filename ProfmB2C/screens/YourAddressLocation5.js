import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView, Dimensions, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReviewSummaryContainer from "../components/ReviewSummaryContainer";
import LocationSection from "../components/LocationSection";
import TotalSection from "../components/TotalSection";
import CreditCardForm from "../components/CreditCardForm";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

import {makeApiRequest} from '../Utils/WebServer';
import { selectUser } from '../redux/userSlice';
import {useSelector} from 'react-redux';


const YourAddressLocation51 = ({ route}) => {
  const userData1 = useSelector(selectUser);
  const { selectedDateTimeArray, priceValue, day2, month2, year2 } = useSelector(state => state.contract);
console.log(month2,"from reduxd date check")
  const { childItemId, childItemDeptCode, itemId } =useSelector(state => state.serviceType.selectedServiceType);

console.log(itemId)
  const { responseData, parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap, selectedTime,category } = route.params;
  console.log(responseData);
  const day = selectedDate.getDate(); // Get the day (1-31)
const month = selectedDate.getMonth() + 1; // Get the month (0-11) and add 1 to make it 1-12
const year = selectedDate.getFullYear();
console.log(`${day}-${month}-${year}`); 
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  const isPay = () => {
    return true; // Returns true if the number is even, false otherwise
  };

  const navigateHandle = () => {
    // Write your navigation logic here
    if(isPay){
      if (category === 'D') {
        handleButtonPress(); // Call handleButtonPress if category is 'D'
      } else {
        handleContract(); // Call handleContract if category is not 'D'
      }
    }else{
      Alert.alert("payement unSuccessful")
    }
  };


  const token = userData1.token; // Replace 'your_token_here' with the actual token
  const url = 'https://hvserp.com/FomMobB2C/api/FomMobJobTicketHead/createB2CJobTicketPayment';
  const url2='https://hvserp.com/FomMobB2C/api/FomCustomerContract/createScheduleB2CJobTicketPayment';
  const method = 'POST';
  const requestData = {
    "response": "api response",
  "tokenNumber": "Token43434343434",
  "ticketNumber":responseData.message
  };
  const requestData2 = {      
    "response": "api response",
    "tokenNumber": "tokenNumber5454545",  
    "contractId":responseData,
    "serviceType": "nooneday"
  }



  


  const handleButtonPress = async () => {
     
      //........
      try {
        const response = await makeApiRequest(url, token, method, requestData);
        console.log('API Response3:', response);
        navigation.navigate("YourAddressLocation61", {
          responseData: responseData,
          parentItem: parentItem,
          childItem: childItem,
          selectedDate: selectedDate,
          currentLocation: currentLocation,
          currentAddress: currentAddress,
          showMap: showMap,
          selectedTime: selectedTime,
          category:category
        });
      } catch (error) {
        console.error('Error:', error);
        Alert.alert("unable to raise ticket")
      }
      
      //..........
      
    } ;

    const handleContract=async () =>{

      try {
        const response = await makeApiRequest(url2, token, method, requestData2);
        console.log('API Response2:', response);
        navigation.navigate("YourAddressLocation61", {
          responseData: responseData,
          parentItem: parentItem,
          childItem: childItem,
          selectedDate: selectedDate, 
          currentLocation: currentLocation,
          currentAddress: currentAddress,
          showMap: showMap,
          selectedTime: selectedTime,
          category:category
        });
      } catch (error) {
        console.error('Error:', error);
        Alert.alert("unable to raise ticket")
      }

    }
  
  console.log(category)

  return (
    <ScrollView>
    <View style={[styles.yourAddressLocation,{height:windowHeight+260,width:windowWidth}]}>
      <View style={styles.yourAddressLocationChild} />
      <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
      </Pressable>
      <Text style={[styles.reviewSummary, styles.jan282023FlexBox]}>
        Review Summary
      </Text>
      <ReviewSummaryContainer />
      <Image
        style={styles.profmLogo1111}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View style={[styles.bookingDetailsParent, styles.parentFlexBox]}>
        <Text style={styles.bookingDetails}>Booking Details</Text>
        <Image
          style={styles.svgexport1822}
          resizeMode="cover"
          source={require("../assets/svgexport18-2-2.png")}
        />
      </View>
      <View style={[styles.yourAddressLocationInner, styles.yourPosition]}>
        <View style={[styles.frameParent, styles.parentFlexBox,{width:windowWidth-60}]}>
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
      <LocationSection currentAddress={currentAddress} />
      <TotalSection
  propTop={"62%"}
  propMarginTop={"4%"}
  propLeft={"145%"}
  propTextAlign="right"
  propWidth={"150%"}
  childItem={childItem}
  category={category}

/>
      <CreditCardForm />
      <Property1Default
        logIn="Confirm Payment"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={0}
        property1DefaultTop={"94.5%"}
        property1DefaultLeft="2%"
        property1DefaultWidth={"95%"}
        property1DefaultHeight={49}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInTextTransform="capitalize"
        logInLineHeight={24}
        logInWidth="100.31%"
        logInLeft="0.7%"
        onButtonBigPress={navigateHandle}
      />
      <View style={[styles.yourAddressLocationItem, styles.yourPosition]} />
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  jan282023FlexBox: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  yourPosition: {
    left:"4%",
    position: "absolute",
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
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  textTypo: {
    fontSize: FontSize.med_size,
    marginTop: 16,
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
    width: "100%",
  },
  arrow21: {
    width: 24,
    height: 24,
    top:"5%",
    left:"4%",
    position: "absolute",
  },
  reviewSummary: {
    top:"10.5%",
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    width:"100%",
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    height: 24,
    left: "0%",
    position: "absolute",
  },
  profmLogo1111: {
    width: 70,
    height: 30,
    top:"4%",
    left: "40%",
    position: "absolute",
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    width: 125,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  svgexport1822: {
    width: 18,
    height: 18,
    marginLeft: "52%",
    overflow: "hidden",
  },
  bookingDetailsParent: {
    top:"23%",
    left: "4%",
    position: "absolute",
  },
  lengthOfService: {
    marginTop:"16%",
  },
  oneTimeService: {
    marginTop:"14%",
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop:"14%",
  },
  cleaningFor2: {
    marginTop: "14%",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  jan282023: {
    width: 136,
    marginTop: "14%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningParent: {
    marginLeft:"15%",
  },
  frameParent: {
  },
  yourAddressLocationInner: {
    top: "26.5%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    padding: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
  yourAddressLocationItem: {
    top: 937,
    width: 342,
    height: 34,
    overflow: "hidden",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default YourAddressLocation51;
