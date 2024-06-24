import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BookingFormContainer from '../components/BookingFormContainer';
import SectionForm from '../components/SectionForm';
import SectionCard1 from '../components/SectionCard1';
import WebViewBottom from '../components/WebViewBottom';
import {Color, FontFamily, Border, FontSize, Padding} from '../GlobalStyles';
import Property1Default from '../components/Property1Default';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Modal} from 'react-native-paper';
import { makeApiRequest } from '../Utils/WebServer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { updateSelectedDateTimeArray, updatePriceValue, updateDay2, updateMonth2, updateYear2 } from '../redux/contractSlice';
import { Picker } from '@react-native-community/picker';
import moment from 'moment';



const OutlinedButton = ({title, isSelected, onPress}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}
      >
      <Text
        style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const OutlinedButton2 = ({ title, isSelected2, onPress }) => {
  console.log(isSelected2,"selected")
  return (
    <TouchableOpacity
      style={[styles.buttonM, isSelected2 && styles.selectedButton2]}
      onPress={onPress}
    >
      <Text style={[styles.buttonTextM, isSelected2 && styles.selectedButtonText2]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const PinYourLocation19N = ({route}) => {
  const userData1 = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(userData1.token)
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const {parentItem, childItem, category} = route.params;
  console.log('parent', category);
  console.log('child', childItem.minReqResource);

  const [selectedDate, setSelectedDate] =useState(new Date());
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState('a');
  const [price, setPrice] = useState(1);
  const [priceValue, setPriceValue] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime2, setSelectedTime2] = useState('04:00 AM To 11:00 PM');
  const [selectedDateTimeArray, setSelectedDateTimeArray] = useState([]);
  const [isAnyButtonSelected, setIsAnyButtonSelected] = useState(false);
  const [dayCounts, setDayCounts] = useState({});
  const [cumulativeSum, setCumulativeSum] = useState(0);

  // const handleButtonPress2 = (time) => {
  //   console.log('Selected Day:', selectedDays[selectedDays.length - 1]);
  // console.log('Selected Time:', time);

  //   setSelectedTime2(time);
    
  // };

  const handleButtonPress2 = (time) => {
    setIsAnyButtonSelected(true);
    setSelectedTime2(time);
    const selectedDay = selectedDays[selectedDays.length - 1];
    console.log('Selected Day:', selectedDay);
    console.log('Selected Time:', time);
  
    // Create a new object representing the selected day and time
    const selectedDateTime = { day: selectedDay, time: time };
  
    // Check if the selected day already exists in the array
    const existingIndex = selectedDateTimeArray.findIndex(
      (dateTime) => dateTime.day === selectedDay
    );
  
    if (existingIndex !== -1) {
      // If the day already exists, remove it from the array
      const updatedArray = selectedDateTimeArray.filter(
        (dateTime) => dateTime.day !== selectedDay
      );
      setSelectedDateTimeArray([...updatedArray, selectedDateTime]);
    } else {
      // If the array length exceeds 3, remove the first item
      if (selectedDateTimeArray.length === 3) {
        const newArray = selectedDateTimeArray.slice(1);
        setSelectedDateTimeArray([...newArray, selectedDateTime]);
      } else {
        // If the array length is less than 3, simply add the new item
        setSelectedDateTimeArray([...selectedDateTimeArray, selectedDateTime]);
      }
    }
  };
  
  
  console.log(selectedDays);
  console.log(selectedDateTimeArray,"timings")
  useEffect(() => {
    // Update the status of button 1 based on the selectedButtons array
    const isButton1Selected = selectedButtons.includes(1);
    console.log(
      'Button 1 status:',
      isButton1Selected ? 'Selected' : 'Not Selected',
    );
  }, [selectedButtons]);
  const toggleButton = buttonIndex => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(
        selectedButtons.filter(index => index !== buttonIndex),
      );
    } else {
      if (selectedButtons.length === 3) {
        // Deselect the first button if already three buttons are selected
        setSelectedButtons(selectedButtons.slice(1).concat(buttonIndex));
      } else {
        setSelectedButtons([...selectedButtons, buttonIndex]);
      }
    }
  };

  const handleDateSelected = date => {
    setSelectedDate(date);
  };
  console.log(selectedDate, 'from pin1 calender');
  const day = selectedDate.getDate(); // Get the day (1-31)
  const month = selectedDate.getMonth() + 1; // Get the month (0-11) and add 1 to make it 1-12
  const year = selectedDate.getFullYear();

  let day2, month2, year2;

  if (category === 'M') {
    // Increment month by 1
    month2 = month === 12 ? 1 : month + 1; // If current month is December, set next month to January of the next year, otherwise increment month by 1
    year2 = month === 12 ? year + 1 : year; // If current month is December, increment year by 1, otherwise keep the year the same
    day2 = day; // Keep the day the same
  } else if (category === 'Y') {
    // Increment year by 1
    year2 = year + 1;
    month2 = month; // Keep the month the same
    day2 = day; // Keep the day the same
  } else {
    year2 = year;
    month2 = month; // Keep the month the same
    day2 = day; 
    // Handle other cases as needed
  }

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChange = (event, selected) => {
    const currentDate = selected || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  // State for toggling between selecting hours and minutes
  const [isSelectingHours, setIsSelectingHours] = useState(true);

  // Function to increment hours or minutes based on the current mode
  const incrementTime = () => {
    if (isSelectingHours) {
      setSelectedHour((prevHour) => {
        const newHour = (prevHour + 1) % 24; // Increment hour and loop back to 0 after 23
        return newHour === 0 ? 12 : newHour; // Convert 0 to 12 for 12-hour format
      });
    } else {
      setSelectedMinute((prevMinute) => (prevMinute + 1) % 60); // Increment minute and loop back to 0 after 59
    }
  };
  
  const decrementTime = () => {
    if (isSelectingHours) {
      setSelectedHour((prevHour) => {
        const newHour = (prevHour - 1 + 24) % 24; // Decrement hour and loop back to 23 after 0
        return newHour === 0 ? 12 : newHour; // Convert 0 to 12 for 12-hour format
      });
    } else {
      setSelectedMinute((prevMinute) => (prevMinute - 1 + 60) % 60); // Decrement minute and loop back to 59 after 0
    }
  };
  // Format hour in 12-hour format
  const format12Hour = (hour) => {
    const adjustedHour = hour % 12 || 12;
    return adjustedHour.toString().padStart(2, '0');
  };

  useEffect(() => {
    const currentDate = new Date();
    setSelectedHour(currentDate.getHours());
    setSelectedMinute(currentDate.getMinutes());
  }, []);

  useEffect(() => {
    const formattedTime = formatSelectedTime();
    console.log(formattedTime,"timnig check");
    setSelectedTime(formattedTime);
  }, [selectedHour, selectedMinute]);
  
  const formatSelectedTime = () => {
    const formattedHour = selectedHour % 12 || 12;
    const formattedMinute = selectedMinute.toString().padStart(2, '0');
    const period = selectedHour >= 12 ? 'PM' : 'AM';
    return `${formattedHour}:${formattedMinute} ${period}`;
  };
  


  const frameParentStyle = category === 'D' ? {top: '26%'} : {top: '40%'};

  console.log(selectedButtons.length);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    // You can update the state or perform any other actions here
    console.log("Selected Button:", button);
  };
console.log(category)
  const fetchPrice = async (categoryPass) => {
    console.log(categoryPass,"testing")
    try {
      const url = `https://hvserp.com/FomMobB2C/api/FomCustomerContract/getDefaultPaymentPrices?type=Day`;

      const PriceRcvd = await makeApiRequest(url, userData1.token, 'GET');
      console.log(PriceRcvd);
      setPrice(PriceRcvd);
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    const categoryPass = category === 'M' ? 'Month': 'Year';
   // console.log(categoryPass)
    // Call fetchPrice when the component mounts
    fetchPrice(categoryPass);
  }, []); 


  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      // If the day is already selected, remove it directly without opening the modal
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      // If the day is not selected, add it to selected days and open the modal
      setSelectedDays([...selectedDays, day]);
      openModal();
    }
  };
  
  useEffect(() => {
    if (price && price.length > 0 && price[0].value !== null && price[0].value !== undefined) {
      const totalPrice = cumulativeSum * parseFloat(price[0].value);
      setPriceValue(totalPrice);
    }
  }, [price, cumulativeSum]);
//console.log(priceValue);


  // Dispatch actions to update data in the store when component mounts  
  dispatch(updateSelectedDateTimeArray(selectedDateTimeArray));
  dispatch(updatePriceValue(priceValue));
  dispatch(updateDay2(day2));
  dispatch(updateMonth2(month2));
  dispatch(updateYear2(year2));
//console.log(updateDay2,"dat")
  const defaultStartDate = `${year}-${month}-${day}`; // Default start date
  const defaultEndDate =  `${year2}-${month2}-${day2}`; // Default end date
  const daysArray =selectedDays;

  useEffect(() => {
    const start = moment(defaultStartDate, 'YYYY-MM-DD');
    const end = moment(defaultEndDate, 'YYYY-MM-DD');

    const counts = {};
    let currentDate = start.clone();
    let cumulative = 0;

    while (currentDate.isSameOrBefore(end)) {
      const dayOfWeek = currentDate.format('dddd');
      if (daysArray.includes(dayOfWeek)) {
        counts[dayOfWeek] = (counts[dayOfWeek] || 0) + 1;
        cumulative++;
      }
      currentDate.add(1, 'days');
    }

    setDayCounts(counts);
    setCumulativeSum(cumulative);
  }, [selectedDays]);
  

  return (
    <>
      <ScrollView>
        <View
          style={[
            styles.pinYourLocation,
            {height: windowHeight + 290, width: windowWidth},
          ]}>
          <View
            style={[
              styles.pinYourLocationChild,
              styles.buttonBigParentPosition,
            ]}
          />
          <Text style={[styles.bookingTheService, styles.arrow21Layout]}>
            Booking the service
          </Text>
          <BookingFormContainer />
          <View style={styles.pinYourLocationItem} />
          {/**/}
          {category === 'M' || category === 'Y' ? (
            <View style={styles.rectangleLayout}>
              <View
                style={[styles.rectangleView, styles.rectangleViewShadowBox]}
              />
              <View style={[styles.frameGroup, styles.writeHerePosition]}>
                <View style={styles.receiptEditParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require('../assets/receiptedit1.png')}
                  />
                  <Text style={styles.oneYearSubscription}>
      {category === 'M' ? 'One-month subscription' : 'One-year subscription'}
    </Text>
                </View>
                <View style={styles.frameContainer}>
                  <View style={{left: '-20%'}}>
                    <View style={styles.parentFlexBox}>
                      <Image
                        style={styles.calendarIcon}
                        resizeMode="cover"
                        source={require('../assets/calendar2.png')}
                      />
                      <Text style={[styles.visits, styles.hoursTypo]}>
                        <Text style={styles.text4}>
                          <Text style={styles.textTypo2}>{category === 'M' ?12 : 144}</Text>
                        </Text>
                        <Text style={styles.visits1}>
                          <Text style={styles.text4}>{` `}</Text>
                          <Text style={styles.visits2}>visits</Text>
                          <Text style={styles.text4}>{` `}</Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={[styles.clockParent, styles.parentFlexBox]}>
                      <Image
                        style={styles.calendarIcon}
                        resizeMode="cover"
                        source={require('../assets/clock2.png')}
                      />
                      <Text style={[styles.hours, styles.hoursTypo]}>
                        <Text
                          style={[styles.text8, styles.textTypo2]}>{`4 `}</Text>
                        <Text style={styles.hours1}>hours</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={{left: '-170%'}}>
                    <View style={styles.userParent}>
                      <Image
                        style={styles.calendarIcon}
                        resizeMode="cover"
                        source={require('../assets/user4.png')}
                      />
                      <Text style={styles.hoursTypo}>
                        <Text style={styles.textTypo2}>1</Text>
                        <Text style={styles.visits1}> domestic worker</Text>
                      </Text>
                    </View>
                    <View style={styles.home2Parent}>
                      <Image
                        style={styles.calendarIcon}
                        resizeMode="cover"
                        source={require('../assets/home27.png')}
                      />
                      <Text style={[styles.oneVisitA, styles.hoursTypo]}>
                        3 visit a week
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : null}

          {/**/}

          <View style={[styles.frameParent, frameParentStyle]}>
            <SectionForm onDateSelected={handleDateSelected} />
            {/* */}

            {/* <View style={styles.containerN}>
     ess={() => toggleButton(6)}
      />
    </View> */}

            {/* */}
            {category === 'M' || category === 'Y' ? (
              <>
                <View style={styles.receiptEditParentN}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require('../assets/calendartick7.png')}
                  />
                  <View style={{flexWrap: 'wrap'}}>
                    <Text style={styles.oneYearSubscriptionN}>
                      The contract begins on{' '}
                      <Text style={{color: Color.praimary}}>
                      {`${day}-${month}-${year}`}
                      </Text>{' '}
                      and ends on{' '}
                      <Text style={{color: Color.praimary}}>
                      {`${day2}-${month2}-${year2}`}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.receiptEditParentN}>
                  <Text
                    style={{
                      marginLeft: '0%',
                      color: Color.black,
                      fontWeight: '500',
                    }}>
                    Choose visit Days
                    <Text style={{color: Color.praimary}}> (Max 3/week)</Text>
                  </Text>
                </View>

                <View style={styles.containerN}>
                <OutlinedButton
        title="Saturday"
        isSelected={selectedDays.includes('Saturday')}
        onPress={() => toggleDaySelection('Saturday')}
      />

<OutlinedButton
        title="Sunday"
        isSelected={selectedDays.includes('Sunday')}
        onPress={() => toggleDaySelection('Sunday')}
      />
       <OutlinedButton
        title="Monday"
        isSelected={selectedDays.includes('Monday')}
        onPress={() => toggleDaySelection('Monday')}
      />
       <OutlinedButton
        title="Tuesday"
        isSelected={selectedDays.includes('Tuesday')}
        onPress={() => toggleDaySelection('Tuesday')}
      />
       <OutlinedButton
        title="Wednesday"
        isSelected={selectedDays.includes('Wednesday')}
        onPress={() => toggleDaySelection('Wednesday')}
      />
       <OutlinedButton
        title="Thursday"
        isSelected={selectedDays.includes('Thursday')}
        onPress={() => toggleDaySelection('Thursday')}
      />
                 
                </View>
              </>
            ) : (
              <View>
                <SectionCard1 childItem={childItem} />
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                  <View style={[styles.groupChild, styles.groupShadowBox]} />
                  <View style={[styles.startTimeParent, styles.parentFlexBox]}>
                    <Text style={styles.startTime}>start time</Text>
                    <View
                      style={[styles.addCircleParent, styles.parentFlexBox]}>
                      <TouchableOpacity onPress={incrementTime}>
                        <Image
                          style={styles.iconLayout}
                          resizeMode="cover"
                          source={require('../assets/addcircle.png')}
                        />
                      </TouchableOpacity>
                      <View style={[styles.am, styles.amTypo]}> 
                      <TouchableOpacity onPress={() => setIsSelectingHours(true)}>
                      <Text style={{color:"black",fontSize:16}}>
                      {`${format12Hour(selectedHour)}:`}
                      </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setIsSelectingHours(false)}>
                      <Text style={{color:"black",fontSize:16}}>
                      {`${selectedMinute.toString().padStart(2, '0')}`}
                      </Text>
                      </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={decrementTime}>
                        <Image
                          style={[styles.minusCirlceIcon, styles.iconLayout]}
                          resizeMode="cover"
                          source={require('../assets/minuscirlce1.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}

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
                    backgroundColor: 'white',
                    borderBottomWidth: 0,
                    width: '95%',
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
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require('../assets/arrow-2-13.png')}
            />
          </Pressable>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require('../assets/3-1-1.png')}
          />

          
        </View>
       
      </ScrollView>
      {modalVisible && <View style={styles.modalOverlay} />}
      {modalVisible && (
  <View style={[styles.containerM, { zIndex: 12 ,borderTopLeftRadius:15,backgroundColor:"white",borderTopRightRadius:18,width:"100%",  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.95,
    shadowRadius: 3.84,

    elevation: 5,}]}>
    <View style={[styles.modalContainerM, { zIndex: 1, height: "30%" }]}>
      <View style={styles.modalContentM}>
        <View style={{ flexDirection: "row", padding: 13 }}>
          <Text style={{color:Color.praimary}}>Wednesday, {`${day}-${month}-${year}`}</Text>
          <Pressable  onPress={closeModal}>
          <Image
            style={{ height: 18, width: 18 ,left:"880%"}}
            resizeMode="cover"
            source={require("../assets/frame9.png")}
          />
          </Pressable>
        </View>
        <Text style={{ padding:10,paddingTop:-20 }}>Choose your visit time</Text>
        <View style={[styles.buttonContainerM, { flexDirection: "row" }]}>
        <OutlinedButton2
            title="04:00 AM To 11:00 PM"
            isSelected2={selectedTime2 === '04:00 AM To 11:00 PM'}
            onPress={() => handleButtonPress2('04:00 AM To 11:00 PM')}
          />
          <OutlinedButton2
            title="08:00 AM To 04:00 PM"
            isSelected2={selectedTime2 === '08:00 AM To 04:00 PM'}
            onPress={() => handleButtonPress2('08:00 AM To 04:00 PM')}
          />
        </View>
        
        <Property1Default
      logIn="Confirmation"
      property1DefaultPosition="relative"
      property1DefaultMarginLeft="unset"
      property1DefaultTop="11%"
      property1DefaultLeft="8%"
      property1DefaultWidth={"80%"}
      property1DefaultHeight={48}
      property1DefaultRight="unset"
      property1DefaultBottom="unset"
      logInLetterSpacing={0.6}
      logInLineHeight={28}
      logInTextTransform="capitalize"
      logInWidth="58.33%"
      logInLeft="20.72%"
      onButtonBigPress={closeModal}
      disabled={!isAnyButtonSelected}
    />
      </View>
    </View>
  </View>
)}

     
{!modalVisible && (
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
      onButtonBigPress={() =>
        navigation.navigate('YourAddressLocation111N', {
          parentItem,
          childItem,
          category,
          selectedDate,
          selectedTime: selectedTime,
        })
      }
    />
    <View style={styles.sarParent}>
    <Text style={styles.sar}>
  {category === 'D' ? childItem.offerPrice + ' SAR' : priceValue !== null ? priceValue + ' SAR' : ''}
</Text>

      <Text style={[styles.notIncludingVat, styles.writeHereTypo]}>
        not including vat
      </Text>
    </View>
  </View>
)}

      
    
      
      

    </>
  );
};

const styles = StyleSheet.create({
  selectedButton2: {
    backgroundColor:Color.praimary
   // Change border color to blue when selected
  },
  selectedText2: {
    color:  "white", // Change text color to blue when selected
  },
  
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    zIndex: 11, // Make sure it's below the modal content
  },
  buttonM: {
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 8,
    paddingVertical: 10,
    width: '46%',
    margin: 5,
    padding:3
  },

  containerN: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    width: '100%',
    left: '-1%',
  },

  button: {
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 8,
    paddingVertical: 10,
    width: '30%',
    margin: 5,
  },
  selectedButton: {
    backgroundColor: Color.praimary,
    borderColor:  Color.praimary,
  },
  buttonText: {
    fontSize: 16,
    color: '#a6a6a6',
    textAlign: 'center',
  },
  buttonTextM: {
    fontSize: 14,
    color: '#a6a6a6',
    textAlign: 'center',
  },
  selectedButtonText: {
    color:"white",

  },
  selectedButtonText2: {
    color: "white",
  },
  rectangleLayout: {
    height: 124,
    width: '100%',
    top: '25%',
  },
  rectangleView: {
    borderWidth: 0.3,
    height: 124,
    width: '95.5%',
    left: '2%',
    top: 0,
    borderColor: Color.gray,
    borderRadius: Border.br_5xs,
    position: 'absolute',
  },
  rectangleViewShadowBox: {
    borderRadius: Border.br_5xs,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.whait,
  },
  frameGroup: {
    height: 92,
    justifyContent: 'space-between',
    top: '4%',
    left: '13%',
    alignItems: 'center',
  },
  writeHerePosition: {
    top: '14%',
    position: 'absolute',
  },
  receiptEditParent: {
    flexDirection: 'row',
    alignItems: 'center',
    left: '60%',
  },
  receiptEditParentN: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  oneYearSubscription: {
    width: '100%',
    marginLeft: 8,
    textAlign: 'left',
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
    height: 16,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  oneYearSubscriptionN: {
    marginLeft: 8,
    textAlign: 'left',
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.dGBaysan,
    flexWrap: 'wrap',
    maxWidth: '94%',
  },
  frameContainer: {
    width: '94%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  parentFlexBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  visits: {
    width: 47,
    height: 16,
  },
  hoursTypo: {
    lineHeight: 16,
    fontSize: FontSize.med_size,
    marginLeft: 8,
    textAlign: 'left',
    color: Color.grayBlack,
  },
  visits1: {
    fontWeight: '300',
    fontFamily: FontFamily.dGBaysan,
  },
  clockParent: {
    marginTop: 24,
  },
  parentFlexBox: {
    width: 67,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hours: {
    width: 41,
    height: 16,
  },
  userParent: {
    width: 123,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  hoursTypo: {
    lineHeight: 16,
    fontSize: FontSize.med_size,
    marginLeft: 8,
    textAlign: 'left',
    color: Color.grayBlack,
  },
  textTypo2: {
    fontFamily: FontFamily.med,
    fontWeight: '500',
  },
  visits1: {
    fontWeight: '300',
    fontFamily: FontFamily.dGBaysan,
  },
  home2Parent: {
    width: 110,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  oneVisitA: {
    width: 95,
    textTransform: 'lowercase',
    fontWeight: '300',
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  buttonBigParentPosition: {
    width: '100%',
    backgroundColor: Color.lightBGPrimary,
    left: '0%',
    position: 'absolute',
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
    left: '0%',
    position: 'absolute',
  },
  groupShadowBox2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: '-2%',
  },
  arrow21Layout: {
    height: 24,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 53,
    width: '98%',
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: 'solid',
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: 'absolute',
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amTypo: {
    height: 19,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    flexDirection:"row"
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  writeFlexBox: {
    textAlign: 'left',
    color: Color.colorBlack,
  },
  groupLayout: {
    height: 100,
    width: '98%',
    borderColor: '#a6a6a6',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  writeHereTypo: {
    fontWeight: '300',
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
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    top: 0,
    width: 375,
    backgroundColor: Color.lightBGPrimary,
    marginLeft: 187.5,
  },
  bookingTheService: {
    top: '11%',
    lineHeight: 24,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    fontSize: FontSize.size_base,
    height: 24,
    left: '30%',
  },
  pinYourLocationItem: {
    top: '50%',
    width: '100%',
    height: 38,
    overflow: 'hidden',
    left: '0%',
    position: 'absolute',
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    height: 53,
    width: '100%',
  },
  startTime: {
    color: Color.colorBlack,
    textTransform: 'capitalize',
    fontSize: FontSize.med_size,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
  },
  am: {
    width: 56,
    marginLeft: 8,
    height: 16,
    fontSize: FontSize.med_size,
    justifyContent: 'center',
    textAlign: 'center',
    color: Color.black,
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: '42%',
    justifyContent: 'center',
  },
  startTimeParent: {
    top: 16,
    position: 'absolute',
    left: '4%',
  },
  rectangleParent: {
    marginTop: 24,
  },
  writeCommentsOr: {
    fontSize: FontSize.size_sm,
    width: '100%',
    height: 17,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: 'solid',
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: Color.lightBGPrimary,
    top: 0,
    position: 'absolute',
  },
  writeHere: {
    marginLeft: -155.5,
    fontSize: FontSize.size_3xs,
    opacity: 0.4,
    textAlign: 'left',
    color: Color.colorBlack,
    top: 16,
    position: 'absolute',
    left: '50%',
  },
  rectangleGroup: {
    marginTop: 16,
  },
  writeCommentsOrPreferencesParent: {
    marginTop: 24,
  },
  frameParent: {
    height: '80%',
    left: '3%',
    width: '96%',
    position: 'absolute',
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  arrow21: {
    top: '4%',
    width: 24,
    left: '4%',
  },
  icon1: {
    top: '3%',
    width: 75,
    height: 30,
    left: '42%',
    position: 'absolute',
  },
  sar: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.red,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: FontSize.size_base,
  },
  notIncludingVat: {
    fontSize: FontSize.size_4xs,
    color: 'gray',
    width: 66,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  sarParent: {
    alignItems: 'center',
  },
  buttonBigParent: {
    bottom: -3,
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    width: '100%',
    backgroundColor: 'white',
    left: '0%',
    position: 'absolute',
    flexDirection: 'row',
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default PinYourLocation19N;
