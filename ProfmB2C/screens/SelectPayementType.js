import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Dimensions, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import AddCardSection from "../components/AddCardSection";
import Property1Default from "../components/Property1Default";
import WebViewBottom from "../components/WebViewBottom";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {makeApiRequest} from '../Utils/WebServer';
import { selectUser } from '../redux/userSlice';
import {useSelector} from 'react-redux';



const SelectPayementType = ({ route }) => {
  const userData1 = useSelector(selectUser);
  const { selectedDateTimeArray, priceValue, day2, month2, year2 } = useSelector(state => state.contract);
  console.log(month2,day2,year2,"from reduxd date check")
  const { parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap,selectedTime,category } = route.params;
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  console.log(userData1);
  const lat=currentLocation.latitude;
  const long=currentLocation.longitude;

  const formattedTime = selectedTime.toString();
  const timeString = formattedTime; // Example time string
const [time, meridiem] = timeString.split(" ");
const [hours, minutes] = time.split(":");

let hours24 = parseInt(hours, 10);
if (meridiem === "PM" && hours24 !== 12) {
  hours24 += 12;
} else if (meridiem === "AM" && hours24 === 12) {
  hours24 = 0;
}

const time24Format = `${hours24.toString().padStart(2, '0')}:${minutes}`;
console.log(time24Format); // Output: "12:33"


  const token = userData1.token; // Replace 'your_token_here' with the actual token
  const url = 'https://hvserp.com/FomMobB2C/api/FomMobJobTicketHead/createUpdateB2CJobTicket';
  const url2='https://hvserp.com/FomMobB2C/api/FomCustomerContract';
  const method = 'POST';
  const requestData = {
    "id": 0,
  "customerCode": userData1.userName,
  "siteCode": "checking",
  "joDate": selectedDate,
  "joSubject": childItem.serviceCode,
  "joDescription": childItem.serviceDetails,
  "joDeptCode": childItem.deptCode,
  "joBookedBy": "checking",
  "approvedBy": "amaan",
  "jobMaintenanceType": "check",
  "isInScope": true,
  "jobType": "checking",
  "joSupervisor": "amaan",
  "webRoot": "checking",
  "isFromMobile": true,
  "isFromWeb": true,
  "response": "check",
  "tokenNumber": "check",
  "geoLatitude": lat,
  "geoLongitude":long,
  "timeValue":time24Format
  };

  const formattedDate2 = `${year2}-${month2.toString().padStart(2, '0')}-${day2.toString().padStart(2, '0')}`;

  const tableRows = selectedDateTimeArray.map(({ day, time }) => {
    let weekday;
    switch (day) {
      case "Sunday":
        weekday = "Sunday";
        break;
      case "Monday":
        weekday = "Monday";
        break;
      case "Tuesday":
        weekday = "Tuesday";
        break;
      case "Wednesday":
        weekday = "Wednesday";
        break;
      case "Thursday":
        weekday = "Thursday";
        break;
      case "Friday":
        weekday = "Friday";
        break;
      case "Saturday":
        weekday = "Saturday";
        break;
      default:
        weekday = "";
    }

    const [startTime] = time.split(' ');
  
    return {
      "weekDay": weekday,
      "time": startTime,
      "remarks": `${startTime} is the start of work`,
      "isActive": true
    };
  });

console.log(category,"category")
  const requestData2 ={
    "customerContractDto": {    
      "custCode": userData1.userName,    
      "custContNumber":userData1.mobile,
      "contStartDate": selectedDate,
      "contEndDate":formattedDate2,   
       "remarks": "this is adding scheduling for customer and creating jobticket"
        },
    "scheduleSummaryDto": {
      "deptCode": childItem.deptCode,
      "tableRows": tableRows
    },
    "geoLatitude": lat,
    "geoLongitude": long,
    "SchType":category,
  }




  const toggleCheckbox = () => {
    setChecked(!checked);
  };


  const handleOnButtonBigPress = () => {
    if (category === 'D') {
      handleButtonPress();
     
    } else {
      handleContract();
    }
  };

  const handleButtonPress = async () => {
    if (checked) {
     
      //........
      try {
        const response = await makeApiRequest(url, token, method, requestData);
        console.log('API Response:', response);
        navigation.navigate("YourAddressLocation51", {
          responseData: response,
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
      
    } else {
      // Handle case when checkbox is not checked
      // You can show an alert or perform other actions
      Alert.alert("Checkbox is not checked");
    }
  };
  

  const handleContract = async () => {
    if (checked) {
     
      //........
      try {
        const response = await makeApiRequest(url2, token, method, requestData2);
        console.log('API Response:', response);
        navigation.navigate("YourAddressLocation51", {
          responseData: response,
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
      
    } else {
      // Handle case when checkbox is not checked
      // You can show an alert or perform other actions
      Alert.alert("Checkbox is not checked");
    }
  };
  
 

  return (
    <ScrollView>
    <View style={[styles.yourAddressLocation, styles.iconLayout,{height:windowHeight,width:windowWidth}]}>
      <View
        style={[styles.yourAddressLocationChild, styles.frameParentPosition]}
      />
      <Text style={styles.paymentMethods}>Payment Methods</Text>
      <PaymentMethodsContainer
        onFramePressablePress={() => navigation.goBack()}
        onFramePressablePress1={() => navigation.goBack()}
      />
      <AddCardSection />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
        <CheckBox
        value={checked}
        onValueChange={toggleCheckbox}
        tintColors={{ true: '#006daa', false: '#006daa' }}
      />
          <Pressable
            style={styles.agreeToTermsContainer}
            //onPress={() => navigation.navigate("TermsAndConditions")}
          >
            <Text style={styles.agreeToTermsAndConditions}>
              agree to terms and conditions
            </Text>
          </Pressable>
         
        </View>
        <Property1Default
        logIn="Continue"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={0}
        property1DefaultTop={"15%"}
        property1DefaultLeft="2%"
        property1DefaultWidth={"95%"}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={28}
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={handleOnButtonBigPress}
        disabled={!checked}
      />
      </View>
    
      <View style={[styles.arrow21Parent, styles.frameGroupFlexBox]}>
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-13.png")}
          />
        </Pressable>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
         
      </View>
      <View style={[styles.groupChild, styles.groupShadowBox]} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    left: "0%",
    position: "absolute",
  },
  frameGroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 99,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: '100%',
    left: "0%",
    position: 'absolute',
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: "-2%",
  },
  yourAddressLocationChild: {
    marginLeft: -187.5,
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.lightBGPrimary,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 86,
  },
  paymentMethods: {
    marginLeft: -87.5,
    top: 102,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.black,
    display: "flex",
    justifyContent: "center",
    width: 175,
    height: 24,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  agreeToTermsAndConditions: {
    fontSize: FontSize.med_size,
    textDecoration: "underline",
    fontWeight: "300",
    color: Color.praimary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textDecorationLine:"underline",
  },
  agreeToTermsContainer: {
    marginLeft: 8,
  },
  frameGroup: {
    height: "11.11%",
    width: "61.52%",
    top: "-6%",
    right: "38.48%",
    bottom: "0.89%",
    left: "4%",
  },
  frameParent: {
    top:"87%",
    width:"100%",
    height: 180,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
  },
  icon1: {
    width: 70,
    height: 27,
    marginLeft: "45%",
  },
  arrow21Parent: {
    top:"6%",
    left:"4%",
    zIndex:1
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
  },
});

export default SelectPayementType;
