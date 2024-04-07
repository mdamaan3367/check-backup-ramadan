import React, {useState, useCallback, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  BackHandler,
  Modal,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  RefreshControl,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewDetails6 from './ViewDetails6';
import ViewDetails5 from './ViewDetails5';
import ViewDetails4 from './ViewDetails4';
import {useNavigation} from '@react-navigation/native';
import YearlyServiceSection from './YearlyServiceSection';
import BestOffersSection from './BestOffersSection';
import FormSection from './FormSection';
import Property1Default3 from './Property1Default3';
import Property1Default4 from './Property1Default4';
import SectionMenu from './SectionMenu';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import DiscountCarousal from '../screens/DiscountCarousal';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';
import {Badge} from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';
import {post, getWithToken} from '../Utils/WebServer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {selectData} from '../redux/dataSlice';
import {makeApiRequest} from '../Utils/WebServer';
import {useDispatch} from 'react-redux';
import {setData} from '../redux/dataSlice';
import { setItems } from '../redux/itemSlice';
import { selectItems } from '../redux/itemSlice';
import { selectUser } from '../redux/userSlice';
import { setSelectedServiceType } from '../redux/serviceTypeSlice';

{
  /* */
}
const CustomRadioButton = ({options, selectedOption, onSelect}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.radioButton,
        {
          backgroundColor:
            selectedOption === item.key ? Color.praimary : 'transparent',
        },
        item.key === options.length ? styles.lastRadioButton : null,
      ]}
      onPress={() => onSelect(item.key)}>
      <Text
        style={[
          styles.radioText,
          {color: selectedOption === item.key ? 'white' : Color.praimary},
        ]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  const renderSelectedView = () => {
    const [frameContainer22Visible, setFrameContainer22Visible] =
      useState(false);
    const [frameContainer30Visible, setFrameContainer30Visible] =
      useState(false);
    const [frameContainer38Visible, setFrameContainer38Visible] =
      useState(false);
    const openFrameContainer22 = useCallback(() => {
      setFrameContainer22Visible(true);
    }, []);

    const closeFrameContainer22 = useCallback(() => {
      setFrameContainer22Visible(false);
    }, []);

    const openFrameContainer30 = useCallback(() => {
      setFrameContainer30Visible(true);
    }, []);

    const closeFrameContainer30 = useCallback(() => {
      setFrameContainer30Visible(false);
    }, []);

    const openFrameContainer38 = useCallback(() => {
      setFrameContainer38Visible(true);
    }, []);

    const closeFrameContainer38 = useCallback(() => {
      setFrameContainer38Visible(false);
    }, []);
    const selectedItem = options.find(item => item.key === selectedOption);
    if (!selectedItem) return null;

    switch (selectedItem.key) {
      case 1:
        return (
          <View style={styles.groupContainer}>
            <FormSection
              cleaningServiceImageId={require('../assets/younghousekeeperfemalewithcleaningsupply-1.png')}
              cleaningTypeImageUrl="Regular cleaning"
              cleaningOptionImageId="(2 "
              rating="4.3"
              priceText="79 SAR "
              servicePriceText="100 SAR "
              discountPercentage="off 30 %"
              onFramePressablePress={openFrameContainer22}
            />
            {/*toggle btn */}

            {/*toggle btn */}
            <FormSection
              cleaningServiceImageId={require('../assets/younghousekeeperfemalewithcleaningsupply-11.png')}
              cleaningTypeImageUrl="deep cleaning"
              cleaningOptionImageId="(4 "
              rating="4.6"
              priceText="240 SAR "
              servicePriceText="300 SAR "
              discountPercentage="off 20 %"
              propMarginTop={16}
              propLeft={291}
              onFramePressablePress={openFrameContainer30}
            />
            <FormSection
              cleaningServiceImageId={require('../assets/younghousekeeperfemalewithcleaningsupply-12.png')}
              cleaningTypeImageUrl="Facade cleaning"
              cleaningOptionImageId="(4 "
              rating="4.8"
              priceText="700 SAR "
              servicePriceText="900 SAR "
              discountPercentage="off 15 %"
              propMarginTop={16}
              propLeft={295}
              onFramePressablePress={openFrameContainer38}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.view}>
            <Text>Hospitality</Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.view}>
            <Text>Maintenance</Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.view}>
            <Text>Electrical Works</Text>
          </View>
        );
      case 5:
        return (
          <View style={styles.view}>
            <Text>Sanitary &Plumbing</Text>
          </View>
        );
      case 6:
        return (
          <View style={styles.view}>
            <Text>HVAC</Text>
          </View>
        );
      case 7:
        return (
          <View style={styles.view}>
            <Text>Pest Control</Text>
          </View>
        );
      case 8:
        return (
          <View style={styles.view}>
            <Text>Landscape</Text>
          </View>
        );
      case 9:
        return (
          <View style={styles.view}>
            <Text>Carpentry</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.key.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {renderSelectedView()}
    </>
  );
};

// Example usage:
const options = [
  {key: 1, text: 'Cleaning'},
  {key: 2, text: 'Hospitality'},
  {key: 3, text: 'Maintenance'},
  {key: 4, text: 'Electrical Works'},
  {key: 5, text: 'Sanitary &Plumbing'},
  {key: 6, text: 'HVAC'},
  {key: 7, text: 'Pest control'},
  {key: 8, text: 'Landscaping'},
  {key: 9, text: 'Carpentry'},
];
{
  /* */
}

const Home = () => {

  const userData1 = useSelector(selectUser);
  console.log(userData1.userName)
  useEffect(() => {
    const backAction = () => {
      // Return true to prevent going back
      return true;
    };

    // Add event listener for the hardware back button
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // Remove the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);
  //back end--
  const [frameContainer22Visible, setFrameContainer22Visible] = useState(false);
  const [frameContainer30Visible, setFrameContainer30Visible] = useState(false);
  const [frameContainer38Visible, setFrameContainer38Visible] = useState(false);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(options[0].key);

  const handleSelect = optionKey => {
    setSelectedOption(optionKey);
  };

  const openFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(true);
  }, []);

  const closeFrameContainer22 = useCallback(() => {
    setFrameContainer22Visible(false);
  }, []);

  const openFrameContainer30 = useCallback(() => {
    setFrameContainer30Visible(true);
  }, []);

  const closeFrameContainer30 = useCallback(() => {
    setFrameContainer30Visible(false);
  }, []);

  const openFrameContainer38 = useCallback(() => {
    setFrameContainer38Visible(true);
  }, []);

  const closeFrameContainer38 = useCallback(() => {
    setFrameContainer38Visible(false);
  }, []);

  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [showAdditionalButtons2, setShowAdditionalButtons2] = useState(false);
  const [showAdditionalButtons3, setShowAdditionalButtons3] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [headToken, setHeadToken] = useState(null);
  const [dailyDepartments, setDailyDepartments] = useState([]);
  const [monthlyDepartments, setMonthlyDepartments] = useState([]);
  const [yearlyDepartments, setYearlyDepartments] = useState([]);
  const [shouldRefetchData, setShouldRefetchData] = useState(false);

  const naviClean = () => {
    navigation.navigate('OneTimeService');
  };
  const naviHosp = () => {
    navigation.navigate('HospitalityServices');
  };
  const naviPool = () => {
    navigation.navigate('PoolMaintenance');
  };
  const naviElec = () => {
    navigation.navigate('ElectricalWorks');
  };
  const naviSanitary = () => {
    navigation.navigate('SanitaryPlumbing');
  };
  const naviHVAC = () => {
    navigation.navigate('HVAC');
  };
  const naviPest = () => {
    navigation.navigate('PestControl');
  };
  const naviLand = () => {
    navigation.navigate('LANDSCAPING');
  };
  const naviCarp = () => {
    navigation.navigate('CarpentryWork');
  };

  // const handlePress = () => {
  //   setExpanded(!expanded);
  // };
  const dataitems2 = useSelector(selectItems);
  const fetchData2 = async () => {
    try {
     // const url = 'https://hvserp.com/FomMobB2C/api/FomMobB2CService/getDepartmentList';
    //  const departments = await makeApiRequest(url, headToken, 'GET');
    const departments=dataitems2
      const daily = [];
      const monthly = [];
      const yearly = [];

      departments.forEach(dept => {
        const timePeriods = dept.serviceTimePeriods.split(',');
        if (timePeriods.includes('Daily')) {
          daily.push(dept);
        }
        if (timePeriods.includes('Monthly')) {
          monthly.push(dept);
        }
        if (timePeriods.includes('Yearly')) {
          yearly.push(dept);
        }
      });

      setDailyDepartments(daily);
      setMonthlyDepartments(monthly);
      setYearlyDepartments(yearly);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (shouldRefetchData) {
      fetchData2();
      setShouldRefetchData(false); // Reset the flag after fetching data
    }
  }, [shouldRefetchData]);


  //console.log(dailyDepartments,"day")
  
   // Trigger the effect when the token changes



   const handlePress = (itemId) => {
    switch (itemId) {
      case 1:
        setExpanded(!expanded);
        console.log("one time");
        setShouldRefetchData(true); // Set the flag to trigger data refetch
        break;
      case 3:
        setExpanded2(!expanded2);
        console.log("month time");
        setShouldRefetchData(true); // Set the flag to trigger data refetch
        break;
      case 4:
        setExpanded3(!expanded3);
        console.log("year time");
        setShouldRefetchData(true); // Set the flag to trigger data refetch
        break;
      default:
        break;
    }
  };
   

  const isExpanded = (itemId) => {
    switch (itemId) {
      case 1:
        return expanded;
      case 3:
        return expanded2;
      case 4:
        return expanded3;
      default:
        return false;
    }
  };
 
  const fetchActivities = async (deptCode) => {
    try {
      const url = 'https://hvserp.com/FomMobB2C/api/FomMobB2CService/getActivitiesByDepartmentList?deptCode='+deptCode;
      const activities = await makeApiRequest(url, headToken, 'GET');
      
      navigation.navigate('RegularCleaning', { activities: activities, deptCode: deptCode,headToken:headToken });
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  
   
     
   
 

  
  const handleNavigation = (childItemId,deptCode, parentDataId) => {
    dispatch(setSelectedServiceType({
      childItemId: childItemId,
      childItemDeptCode:deptCode,
      itemId: parentDataId
    }));
    //console.log(parentDataId,"redux dept")
    // Implement your navigation logic based on the combination of childItemId and parentDataId
    // You can use a switch statement or an object mapping to define the navigation routes
    fetchActivities(deptCode.deptCode);
    // switch (`${parentDataId}-${childItemId}`) {
      
    //   case '1-10':
    //     // Navigate to screen for parent 1 and child 1
        
    //     fetchActivities(deptCode);
    //   //  navigation.navigate('RegularCleaning');
    //     break;
    //   case '1-7':
    //       // Navigate to screen for parent 1 and child 1
    //     navigation.navigate('Profile');
    //     break;  
    //   case '1-5':
    //       // Navigate to screen for parent 1 and child 1
    //     navigation.navigate('Menu');
    //     break;
    //   case '2-10':
    //     // Navigate to screen for parent 1 and child 2
    //     navigation.navigate('Profile');
    //     break;
    //   case '2-7':
    //     // Navigate to screen for parent 2 and child 1
    //     navigation.navigate('Menu');
    //     break;
    //   case '4-7':
    //       // Navigate to screen for parent 2 and child 1
    //     navigation.navigate('Bookings');
    //     break;
    //   // Add more cases for other combinations
    //   default:
    //     // Handle default or invalid combination
    //     console.log('Invalid combination');
    // }
  };
  
  
  
  
  
  const handlePress2 = () => {
    setExpanded2(!expanded2);
  };

  const handlePress3 = () => {
    setExpanded3(!expanded3);
  };

  const toggleButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };
  const toggleButtons2 = () => {
    setShowAdditionalButtons2(!showAdditionalButtons2);
  };
  const toggleButtons3 = () => {
    setShowAdditionalButtons3(!showAdditionalButtons3);
  };

  const handleSelection = option => {
    // Handle selection logic here
   // console.log('Selected:', option);
    // Minimize additional buttons after selection
    setShowAdditionalButtons(false);
  };

  const handleSelection2 = option => {
    // Handle selection logic here
    //console.log('Selected:', option);
    // Minimize additional buttons after selection
    setShowAdditionalButtons2(false);
  };
  const handleSelection3 = option => {
    // Handle selection logic here
  //  console.log('Selected:', option);
    // Minimize additional buttons after selection
    setShowAdditionalButtons3(false);
  };
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  let additionalButtonsHeight = 0;
  let additionalButtonsHeight2 = 0;
  let additionalButtonsHeight3 = 0;
  if (expanded) {
    // Calculate additional buttons height based on number of buttons and their styling
    additionalButtonsHeight = 326; // Change this value based on your actual requirements
  }
  if (expanded2) {
    // Calculate additional buttons height based on number of buttons and their styling
    additionalButtonsHeight2 = 71; // Change this value based on your actual requirements
  }
  if (expanded3) {
    // Calculate additional buttons height based on number of buttons and their styling
    additionalButtonsHeight3 = 71; // Change this value based on your actual requirements
  }
  const totalHeight =
    windowHeight +
    additionalButtonsHeight +
    additionalButtonsHeight2 +
    additionalButtonsHeight3;

  //push noti counter--
  const [notificationCount, setNotificationCount] = useState(0);
  const [tokenHeader, setTokenHeader] = useState(null);
  const check = async () => {
    const fcmToken = await messaging().getToken();
    //console.log(fcmToken);
  };
  check();
  useEffect(() => {
    // Request permission for receiving notifications (optional)
    messaging().requestPermission();

    // Get initial notification count when app is opened
    messaging()
      .getInitialNotification()
      .then(notification => {
        if (notification) {
          setNotificationCount(notificationCount + 1);
        }
      });

    // Register listener for receiving messages while the app is in foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setNotificationCount(notificationCount + 1);
    });

    // Register background message handler for receiving messages while the app is in background or terminated
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      setNotificationCount(notificationCount + 1);
    });

    return unsubscribe;
  }, []);
  //push test 2---
  // useEffect(() => {
  //   // Subscribe to FCM messages
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     // Process the received notification
  //     const notification = {
  //       id: remoteMessage.messageId,
  //       title: remoteMessage.notification.title,
  //       body: remoteMessage.notification.body,
  //       image: require('../assets/profmLogoApp.jpeg'), // Android image URL
  //       // image: remoteMessage.notification.apple.imageUrl, // iOS image URL (if applicable)
  //       timestamp: Date.now(), // Add timestamp when the notification was received
  //     };

  //     // Add the notification to the list
  //     setNotifications((prevNotifications) => [...prevNotifications, notification]);
  //   });

  //   // Cleanup function
  //   return () => unsubscribe();
  // }, []);
  //push noti counter end--

  //call item api 3--
  const [token, setToken] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const {token: userToken} = userInfo;
          setToken(userToken);
        //  console.log('setting');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);
 // console.log(token);

  const [dataList, setDataList] = useState([]);
  const [userName1, setUserName1] = useState('');

  useEffect(() => {
    const fetchservices = async () => {
      try {
        const userInfoServices = await AsyncStorage.getItem('dataServices');
        if (userInfoServices) {
          const userInfo = JSON.parse(userInfoServices);

          setDataList(userInfo);
          //console.log('setting');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    // fetchservices();
  }, []);
  const dispatch = useDispatch();

  const hitNotification = async () => {
    try {
      // Get the token from AsyncStorage
      const userInfoString = await AsyncStorage.getItem('userInfo');
      if (!userInfoString) {
        throw new Error('User information not found');
      }
      const userInfo = JSON.parse(userInfoString);
      const token2 = userInfo.token;
      //console.log(token2, 'head');
      setHeadToken(token2);
      // Set the authorization header with the token value
     // console.log(userInfo.userName);
      setUserName1(userInfo.userName);

      // Make the GET request with axios including the authorization header

      // Handle response data if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };

  useEffect(() => {
    hitNotification();
  }, []);
  //call 3 end
  const fetchData = () => {
    // Simulate fetching data from an API
    setTimeout(() => {
      //setData([1, 2, 3, 4, 5]);
      //3 item start--

      // Example usage:
      const url =
        'https://hvserp.com/FomMobB2C/api/ServicePeriods/getAllActiveFomServicePeriodsForB2C';
      const token = headToken; // Replace with the actual token
      const method = 'GET'; // Specify the HTTP method (GET, POST, etc.)

      // Call the function
      makeApiRequest(url, token, method)
        .then(data => {
          // Dispatch action to store the data in Redux
          dispatch(setData(data));
          // AsyncStorage.setItem('dataServices', JSON.stringify(data));
          // Update state or do other operations with the response data
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });

      //3 item end---

      setRefreshing(false);
    }, 2000);
  };

  const dataServices = useSelector(selectData);
  const dataitems = useSelector(selectItems);
 // console.log(dataServices, 'data from redux');
  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#006daa', '#80ccef']}
            // Android offset for RefreshControl
            progressViewOffset={100}
          />
        }>
        <View
          style={[
            styles.home,
            {height: totalHeight + 510, width: windowWidth},
          ]}>
          <View style={styles.khaledAlQahtaniParent}>
            <Text style={[styles.khaledAlQahtani, styles.servicesTypo]}>
              {userData1.userName}
            </Text>
            <View style={styles.groupParent}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require('../assets/group13.png')}
              />
              <Text style={styles.alRawdahDistrict}>
                Al Rawdah district , Jeddah
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.frame,
              {position: 'absolute', top: 78, right: '4%', zIndex: 10},
            ]}
            onPress={() => {
              //  navigation.navigate('Forget')
              // navigation.navigate("NotificationScreen");
              navigation.navigate('Notifications');
            }}>
            <View style={{top: 6}}>
              <Badge visible={notificationCount > 0} size={15}>
                {notificationCount}
              </Badge>
            </View>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require('../assets/notificationIcon1.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.services, {top: 375}, styles.servicesTypo]}>
            Services
          </Text>
          {/* <View style={[styles.homeChild, styles.homeChildPosition]} /> */}
          <Image
            style={[styles.profmLogo1112, {position: 'absolute', left: '35%'}]}
            resizeMode="cover"
            source={require('../assets/3-1-1.png')}
          />

          <View
            style={[styles.frameParent, styles.homeChildPosition, {top: 400,zIndex:1}]}>
           
           
           <FlatList
  data={dataServices}
  renderItem={({ item }) => (
    <View>
      {/* Content of each item */}
      <TouchableOpacity
        style={[styles.property1oneTimeService]}
        onPress={() => handlePress(item.id)}>
        <View style={styles.property1oneTimeServiceChild} />
        <View style={styles.oneTimeServiceParent}>
          <Text style={[styles.oneTimeService, styles.oneTypo]}>
            {item.title}
          </Text>
          <Text
            style={[styles.oneTimeHourlyReservation, styles.oneTypo]}>
            {item.descriptions}
          </Text>
        </View>

        <Image
          style={styles.property1oneTimeServiceItem}
          resizeMode="cover"
          source={{ uri: item.imagePath }}
        />
        <TouchableOpacity
          style={styles.groupIconN}
          onPress={() => handlePress(item.id)}>
          <Image
            resizeMode="cover"
            source={
              isExpanded(item.id)
                ? require('../assets/group1Flip.png')
                : require('../assets/group1.png')
            }
          />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Additional elements to be shown when expanded is true */}
      {isExpanded(item.id) && (
        <FlatList
          data={item.id === 1 ? dailyDepartments : item.id === 3 ? monthlyDepartments : yearlyDepartments}
          renderItem={({ item: childItem }) => (
            <View style={{ flexDirection: "column", flex: 1 }}>
            
              <TouchableOpacity onPress={() => handleNavigation(childItem.id, childItem, item)}>

                <View style={styles.customView2}>
                  <Image
                    source={childItem.imageSource}
                    style={styles.imageD}
                  />
                  <Text style={styles.textD}>{childItem.nameEng} </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          parentData={item} // Pass the parent data to the child FlatList
        />
      )}
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
/>

            
            {/*   */}
            {/* <YearlyServiceSection /> */}
            {/*3 items start */}

            {/*  <Pressable
      style={[styles.property1oneTimeService, ]}
      onPress={handlePress}
    >
      <View style={styles.property1oneTimeServiceChild} />
      <View style={styles.oneTimeServiceParent}>
        <Text style={[styles.oneTimeService, styles.oneTypo]}>
          One Time Service
        </Text>
        <Text
          style={[
            styles.oneTimeHourlyReservation,
            styles.oneTypo,
            
          ]}
        >
          One time hourly reservation service
        </Text>
      </View>
      
      <Image
        style={styles.property1oneTimeServiceItem}
        resizeMode="cover"
        source={require("../assets/rectangle-4369.png")}
      />
      <TouchableOpacity  style={styles.groupIconN} onPress={handlePress}>
      <Image
       
        resizeMode="cover"
        source={expanded ? require("../assets/group1Flip.png") : require("../assets/group1.png")}
      />
      </TouchableOpacity>
     
    </Pressable>
    <View style={styles.container}>
     
    {expanded && (
      <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
   left:"-4%",
   marginTop:5
  }}>
  <TouchableOpacity onPress={naviClean}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/cleanimage.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Cleaning service</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviHosp}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/hospitality.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Hospitality</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviPool}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/pool.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Pool Maintenance</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviElec}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/electric.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Electrical Works</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviSanitary}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/sanitary.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Sanitary&Plumbing</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviHVAC}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/hvac.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>HVAC</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviPest}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/pest2.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Pest Control</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviLand}>
      <View style={styles.customView}>
        <Image
          source={require('../assets/landscape.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Landscaping</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviCarp}>
      <View style={{backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d7e1e5',
    borderWidth: 1,
    width: 163,
    margin:8,
    height:50,
    left:"-28%"}}>
        <Image
          source={require('../assets/carpentry.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Carpentry</Text>
      </View>
      </TouchableOpacity>
      
    </View>
      )}
   </View>
   
    
     <Pressable 
      style={[styles.property1oneTimeService, ]}
      onPress={handlePress2}
    >
      <View style={styles.property1oneTimeServiceChild} />
      <View style={styles.oneTimeServiceParent}>
        <Text style={[styles.oneTimeService, styles.oneTypo]}>
          Monthly Service
        </Text>
        <Text
          style={[
            styles.oneTimeHourlyReservation,
            styles.oneTypo,
            
          ]}
        >
          Periodic service with several visits monthly.
        </Text>
      </View>
      
      <Image
        style={styles.property1oneTimeServiceItem}
        resizeMode="cover"
        source={require("../assets/monthly.png")}
      />
      <TouchableOpacity  style={styles.groupIconN} onPress={handlePress2}>
      <Image
       
        resizeMode="cover"
        source={expanded2 ? require("../assets/group1Flip.png") : require("../assets/group1.png")}
      />
      </TouchableOpacity>
     
     
    </Pressable>
    
    <View >
     
    {expanded2 && (
      <View style={{flex:1,flexDirection:"row",marginTop:10,left:"-4%"}}>
  <TouchableOpacity onPress={naviClean}>
      <View style={styles.customView2}>
        <Image
          source={require('../assets/cleanimage.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Cleaning service</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviHVAC}>
      <View style={styles.customView2}>
        <Image
          source={require('../assets/hvac.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>HVAC</Text>
      </View>
      </TouchableOpacity>
      
      
     
       
      
     
     
    </View>
      )}
   </View>
    

     
      <Pressable

      
      style={[styles.property1oneTimeService, ]}
      onPress={handlePress3}
    >
      <View style={styles.property1oneTimeServiceChild} />
      <View style={styles.oneTimeServiceParent}>
        <Text style={[styles.oneTimeService, styles.oneTypo]}>
         Yearly Service
        </Text>
        <Text
          style={[
            styles.oneTimeHourlyReservation,
            styles.oneTypo,
            
          ]}
        >
          Multi-visit yearly service available through contract
        </Text>
      </View>
      
      <Image
        style={styles.property1oneTimeServiceItem}
        resizeMode="cover"
        source={require("../assets/yearly.png")}
      />
      

      <TouchableOpacity  style={styles.groupIconN} onPress={handlePress3}>
      <Image
       
        resizeMode="cover"
        source={expanded3 ? require("../assets/group1Flip.png") : require("../assets/group1.png")}
      />
      </TouchableOpacity>
     
    </Pressable>
    <View style={styles.container}>
     
    {expanded3 && (
      <View style={{flex:1,flexDirection:"row",marginTop:10,left:"-4%"}}>
  <TouchableOpacity onPress={naviClean}>
      <View style={styles.customView3}>
        <Image
          source={require('../assets/cleanimage.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>Cleaning service</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={naviHVAC}>
      <View style={styles.customView3}>
        <Image
          source={require('../assets/hvac.png')}
          style={styles.imageD}
        />
        <Text style={styles.textD}>HVAC</Text>
      </View>
      </TouchableOpacity>
      
      
     
       
      
     
     
    </View>
      )}
   </View>
   */}
            {/*3 items start end*/}

            {/* <YearlyServiceSection /> */}
            <View style={{top: '2%', width: 360}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  padding: 5,
                  left: '0%',
                }}>
                Best Offers
              </Text>
              {options.length > 0 && (
                <CustomRadioButton
                  options={options}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                />
              )}
            </View>
            {/* <BestOffersSection /> */}
            <Modal
              animationType="fade"
              transparent
              visible={frameContainer22Visible}>
              <View style={styles.frameContainer22Overlay}>
                <Pressable
                  style={styles.frameContainer22Bg}
                  onPress={closeFrameContainer22}
                />
                <ViewDetails6 onClose={closeFrameContainer22} />
              </View>
            </Modal>

            <Modal
              animationType="fade"
              transparent
              visible={frameContainer30Visible}>
              <View style={styles.frameContainer30Overlay}>
                <Pressable
                  style={styles.frameContainer30Bg}
                  onPress={closeFrameContainer30}
                />
                <ViewDetails5 onClose={closeFrameContainer30} />
              </View>
            </Modal>

            <Modal
              animationType="fade"
              transparent
              visible={frameContainer38Visible}>
              <View style={styles.frameContainer38Overlay}>
                <Pressable
                  style={styles.frameContainer38Bg}
                  onPress={closeFrameContainer38}
                />
                <ViewDetails4 onClose={closeFrameContainer38} />
              </View>
            </Modal>
          </View>
          {/* <Property1Default3
          fiRrZoomOut={require("../assets/firrzoomout.png")}
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={"0%"}
          property1DefaultTop={140}
          property1DefaultLeft="2%"
        /> */}

          <View style={{top: 130}}>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                <View style={styles.lockParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require('../assets/firrzoomout.png')}
                  />
                  <TextInput
                    placeholder="Search"
                    placeholderTextColor="#D3D3D3"
                    maxLength={40}
                    style={{color: '#006daa', padding: 10, marginTop: '2%'}}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* <Property1Default4 /> */}
          <DiscountCarousal />
        </View>

        {/* <Modal animationType="fade" transparent visible={frameContainer22Visible}>
        <View style={styles.frameContainer22Overlay}>
          <Pressable
            style={styles.frameContainer22Bg}
            onPress={closeFrameContainer22}
          />
          <ViewDetails6 onClose={closeFrameContainer22} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer30Visible}>
        <View style={styles.frameContainer30Overlay}>
          <Pressable
            style={styles.frameContainer30Bg}
            onPress={closeFrameContainer30}
          />
          <ViewDetails5 onClose={closeFrameContainer30} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer38Visible}>
        <View style={styles.frameContainer38Overlay}>
          <Pressable
            style={styles.frameContainer38Bg}
            onPress={closeFrameContainer38}
          />
          <ViewDetails4 onClose={closeFrameContainer38} />
        </View>
      </Modal> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  servicesTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    textTransform: 'capitalize',
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  lockParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameGroupPosition: {
    zIndex: 1,
    left: 12,
    flexDirection: 'row',
    position: 'absolute',
  },
  frameShadowBox: {
    zIndex: 0,
    height: 48,
    width: '96%',
    borderWidth: 0.3,
    borderColor: Color.a6A6A6,
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
    borderRadius: Border.br_5xs,
    left: '2%',
  },
  frameGroup: {
    top: 3,
    zIndex: 1,
    left: 12,
  },

  imageD: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  customView2: {
    width: 155, // Two views per row
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d7e1e5',
    borderWidth: 1,
    marginTop:8,
    marginLeft:0,
    height: 50,
    alignSelf:"flex-start"
    
  },
  customView3: {
    width: 163, // Two views per row
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d7e1e5',
    borderWidth: 1,
    margin: 5,
    height: 50,
  },
  textD: {
    fontSize: 12.5,
    color: 'black',
  },
  customView: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d7e1e5',
    borderWidth: 1,
    width: 163,
    margin: 8,
    height: 50, // Two views per row
  },

  radioButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Color.praimary,
    marginHorizontal: 5,
  },
  lastRadioButton: {
    borderRightWidth: 0,
  },
  radioText: {
    fontSize: 16,
  },
  homeChildPosition: {
    width:"96%",
    position: 'absolute',
    alignSelf:"center",
    left:"4%",
    right:"0%"
  },
  oneTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.dGBaysan,
  },
  property1oneTimeServiceChild: {
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue_200,
    borderStyle: 'solid',
    borderColor: Color.praimary,
    borderWidth: 0.5,
    position: 'absolute',
  },
  oneTimeService: {
    fontSize: FontSize.size_sm,
    textTransform: 'capitalize',
    fontWeight: '600',
    color: Color.praimary,
    display: 'flex',
    alignItems: 'center',
    width: 120,
    height: 18,
  },
  oneTimeHourlyReservation: {
    fontSize: FontSize.med_size,
    lineHeight: 18,
    fontWeight: '300',
    color: Color.grayBlack,
    width: 184,
    height: 34,
    marginTop: 4,
  },
  oneTimeServiceParent: {
    top: 16,
    left: 16,
    position: 'absolute',
  },
  property1oneTimeServiceItem: {
    top: 0,
    left: '62.1%',
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    width: 130,
    position: 'absolute',
    height: 86,
  },
  groupIconN: {
    height: '8.14%',
    marginLeft: -5.5,
    top: '82.56%',
    bottom: '9.3%',
    left: '50%',
    maxHeight: '100%',
    width: '10%',
    position: 'absolute',
  },
  property1oneTimeService: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: '94%',
    height: 86,
    marginTop: 10,
    zIndex:1
    
  },
  frameContainer22Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  frameContainer22Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  frameContainer30Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  frameContainer30Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  frameContainer38Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  frameContainer38Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  khaledAlQahtani: {
    fontSize: FontSize.size_sm,
    width: 130,
    fontWeight: '300',
    color: Color.colorBlack,
    textTransform: 'capitalize',
  },
  groupIcon: {
    width: 10,
    height: 14,
  },
  alRawdahDistrict: {
    fontSize: FontSize.med_size,
    color: Color.grayBlack,
    textAlign: 'center',
    marginLeft: '2%',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '300',
  },
  groupParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    alignItems: 'center',
    height: 14,
  },
  khaledAlQahtaniParent: {
    top: 74,
    height: 37,
    left: '4%',
    position: 'absolute',
  },
  icon: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  frame: {
    right: '10%',
    top: 38,
    width: 24,
    height: 24,
    position: 'absolute',
  },
  services: {
    fontSize: FontSize.size_base,
    fontWeight: '600',
    display: 'flex',
    width: 68,
    height: 18,
    alignItems: 'center',
    color: Color.colorBlack,
    textTransform: 'capitalize',
    left: '4%',
    position: 'absolute',
  },
  homeChild: {
    marginLeft: -174.5,
    top: 905,
    width: 349,
    height: 97,
    overflow: 'hidden',
  },
  profmLogo1112: {
    marginLeft: '0%',
    top: 25,
    width: 110,
    height: 45.5,
  },
  groupContainer: {
    marginTop: 24,
  },

  home: {
    backgroundColor: Color.colorGray_100,
  },
});

export default Home;
