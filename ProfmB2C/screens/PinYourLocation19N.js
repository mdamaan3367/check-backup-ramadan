import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, Pressable, ScrollView, Dimensions,TextInput, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingFormContainer from "../components/BookingFormContainer";
import SectionForm from "../components/SectionForm";
import SectionCard1 from "../components/SectionCard1";
import WebViewBottom from "../components/WebViewBottom";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import Property1Default from "../components/Property1Default";
import DateTimePicker from '@react-native-community/datetimepicker';

const PinYourLocation19N = ({ route}) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const { parentItem, childItem } = route.params;
  console.log("parent",parentItem);
  console.log("child",childItem.minReqResource)

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate,"from pin1 calender")

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChange = (event, selected) => {
    const currentDate = selected || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const increaseTime = () => {
    const newTime = new Date(selectedTime.getTime() + 60000); // Adding one minute
    setSelectedTime(newTime);
  };

  const decreaseTime = () => {
    const newTime = new Date(selectedTime.getTime() - 60000); // Subtracting one minute
    setSelectedTime(newTime);
  };

  const format12Hour = (hours) => {
    return hours % 12 || 12;
  };
  return (
    <>
    <ScrollView>
    <View style={[styles.pinYourLocation,{height:windowHeight+110,width:windowWidth}]}>
      <View
        style={[styles.pinYourLocationChild, styles.buttonBigParentPosition]}
      />
      <Text style={[styles.bookingTheService, styles.arrow21Layout]}>
        Booking the service
      </Text>
      <BookingFormContainer />
      <View style={styles.pinYourLocationItem} />
      <View style={styles.frameParent}>
      <SectionForm onDateSelected={handleDateSelected} />
        <SectionCard1 childItem={childItem} />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.startTimeParent, styles.parentFlexBox]}>
            <Text style={styles.startTime}>start time</Text>
            <View style={[styles.addCircleParent, styles.parentFlexBox]}>
            <TouchableOpacity onPress={increaseTime}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/addcircle.png")}
              />
              </TouchableOpacity>
              <Text style={[styles.am, styles.amTypo]}>{`${format12Hour(selectedTime.getHours())}:${selectedTime.getMinutes().toString().padStart(2, '0')} ${selectedTime.getHours() >= 12 ? 'PM' : 'AM'}`}</Text>
              <TouchableOpacity onPress={decreaseTime}>
              <Image
                style={[styles.minusCirlceIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/minuscirlce1.png")}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.writeCommentsOrPreferencesParent}>
          <Text style={[styles.writeCommentsOr, styles.writeFlexBox]}>
            Write comments or preferences
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <TextInput
  placeholder="write here....."
  placeholderTextColor="#D3D3D3"
  multiline
  numberOfLines={4}
  style={{
    color: 'black',
    padding: 10,
    marginTop: '2%',
    backgroundColor: "white",
    borderBottomWidth: 0,
    width: "95%",
    textAlignVertical: 'top', // Start from top
  }}
  underlineColorAndroid="transparent" // Remove underline on Android
/>
          </View>
        </View>
      </View>
      <View style={[styles.groupChild2, styles.groupShadowBox2]} />
      <Pressable
        style={[styles.arrow21, styles.arrow21Layout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
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
    </ScrollView>
    <View style={[styles.buttonBigParent, styles.parentFlexBox]}>
        <Property1Default
          logIn="Continue"
          property1DefaultPosition="relative"
          property1DefaultMarginLeft="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultWidth={251}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom="unset"
          logInLetterSpacing={0.6}
          logInLineHeight={28}
          logInTextTransform="capitalize"
          logInWidth="58.33%"
          logInLeft="20.72%"
          onButtonBigPress={() => navigation.navigate("YourAddressLocation111N", {  parentItem,
    childItem,
    selectedDate,
    selectedTime: `${format12Hour(selectedTime.getHours())}:${selectedTime.getMinutes().toString().padStart(2, '0')} ${selectedTime.getHours() >= 12 ? 'PM' : 'AM'}`
  })}
        />
        <View style={styles.sarParent}>
          <Text style={styles.sar}>{childItem.offerPrice} SAR</Text>
          <Text style={[styles.notIncludingVat, styles.writeHereTypo]}>
            not including vat
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonBigParentPosition: {
    width: "100%",
    backgroundColor: Color.lightBGPrimary,
    left: "0%",
    position: "absolute",
  },
  groupChild2: {
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
  groupShadowBox2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: "-2%",
  },
  arrow21Layout: {
    height: 24,
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    width: "98%",
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  amTypo: {
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  writeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupLayout: {
    height: 100,
    width:"98%",
    borderColor:"#a6a6a6",
    borderWidth:0.5,
    borderRadius:10
  },
  writeHereTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  pinYourLocationChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 86,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    width: 375,
    backgroundColor: Color.lightBGPrimary,
    marginLeft: 187.5,
  },
  bookingTheService: {
    top: "11%",
    lineHeight: 24,
    width: 155,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    height: 24,
    left: "30%",
  },
  pinYourLocationItem: {
    top: "50%",
    width: "100%",
    height: 38,
    overflow: "hidden",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    height: 53,
    width: "100%",
  },
  startTime: {
    color: Color.colorBlack,
    textTransform: "capitalize",
    fontSize: FontSize.med_size,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  am: {
    width: 56,
    marginLeft: 8,
    height: 16,
    fontSize: FontSize.med_size,
    justifyContent: "center",
    textAlign: "center",
    color: Color.black,
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: "42%",
    justifyContent: "center",
  },
  startTimeParent: {
    top: 16,
    position: "absolute",
    left: "4%",
  },
  rectangleParent: {
    marginTop: 24,
  },
  writeCommentsOr: {
    fontSize: FontSize.size_sm,
    width: "100%",
    height: 17,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "left",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: "absolute",
  },
  writeHere: {
    marginLeft: -155.5,
    fontSize: FontSize.size_3xs,
    opacity: 0.4,
    textAlign: "left",
    color: Color.colorBlack,
    top: 16,
    position: "absolute",
    left: "50%",
  },
  rectangleGroup: {
    marginTop: 16,
  },
  writeCommentsOrPreferencesParent: {
    marginTop: 24,
  },
  frameParent: {
    top: "26%",
    height: "100%",
    left: "3%",
    width:"96%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    top: "5%",
    width: 24,
    left: "4%",
  },
  icon1: {
    top: "5%",
    width: 75,
    height: 30,
    left: "42%",
    position: "absolute",
  },
  sar: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.red,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  notIncludingVat: {
    fontSize: FontSize.size_4xs,
    color: "gray",
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  sarParent: {
    alignItems: "center",
  },
  buttonBigParent: {
    bottom:-3,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    width:"100%",
    backgroundColor: "white",
    left: "0%",
    position: "absolute",
    flexDirection: "row",
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default PinYourLocation19N;
