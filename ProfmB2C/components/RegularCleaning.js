import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RegularCleaning9 from '../components/RegularCleaning';
import {Color, FontSize, FontFamily, Padding, Border} from '../GlobalStyles';
import {makeApiRequest} from '../Utils/WebServer';
import FooterBottom from '../screens/FooterBottom';

const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

const RegularCleaning = ({ route }) => {
  const [frameContainer12Visible, setFrameContainer12Visible] = useState(false);
  const navigation = useNavigation();
  const { activities, deptCode,headToken,cat } = route.params;
  const openFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(true);
  }, []);

  const closeFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(false);
  }, []);

  useEffect(() => {
    // Fetch activities based on deptCode
    // For demonstration, just log activities and deptCode
    console.log("Activities:", headToken);
    console.log("Department Code:", deptCode);

    // Assume fetching is completed
   
}, []);
const [openAccordionId, setOpenAccordionId] = useState(null);
const [accordionData, setAccordionData] = useState([]);
const [imageSource, setImageSource] = useState(require('../assets/group1.png'));
const [activityData, setActivityData] = useState(activities);

let additionalButtonsHeight = 150;

const [totalHeight, setTotalHeight] = useState(windowHeight + additionalButtonsHeight);


// const totalHeight =
// windowHeight+additionalButtonsHeight ;


const handleActivityPress = (activityId) => {
  setOpenAccordionId(openAccordionId === activityId ? null : activityId);

  // Update image source based on the openAccordionId
  setImageSource(prevSource =>
    openAccordionId === activityId
      ? require('../assets/group2.png') // Set the image source to group2.png when the accordion is open
      : require('../assets/group1.png') // Otherwise, set it to group1.png
  );
  if (openAccordionId === activityId) {
    setTotalHeight(windowHeight + additionalButtonsHeight);
  } else {
    
    setTotalHeight(windowHeight + additionalButtonsHeight + 200);
  }
};

  const fetchAccordian = async (actCode) => {
    try {
      const url = `https://hvserp.com/FomMobB2C/api/FomMobB2CService/getServiceItemsByActDeptList?actCode=${actCode}&deptCode=${deptCode}`;

      const activities = await makeApiRequest(url, headToken, 'GET');
      console.log(activities);
      setAccordionData(activities);
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const handleImagePress = () => {
   
  };

  const fetchDetails = async (childItem) => {
    try {
      const url = `https://hvserp.com/FomMobB2C/api/FomMobB2CService/getServiceDetailsByServiceCodeList?serviceCode=`+childItem.serviceCode;

      const detailsView = await makeApiRequest(url, headToken, 'GET');
      console.log(detailsView);
      //setAccordionData(activities);
      navigation.navigate('ViewDetails2', { 
        childItem, 
        detailsView
    });
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



 

  return (
    <>
      <ScrollView>
        <View style={[styles.regularCleaning,{height:totalHeight,width:windowWidth}]}>
        <View style={styles.frameParent}>
  <FlatList
    data={activities}
    renderItem={({ item }) => (
      <View key={item.id}>
        <TouchableOpacity
          onPress={() => {
            handleActivityPress(item.id);
            fetchAccordian(item.actCode);
            handleImagePress();
          }}
          style={styles.componentLayout}
        >
          <View style={styles.component10Child} />
          <Text style={[styles.regularCleaning1, styles.serviceTransform]}>
            {item.actName}
          </Text>
          <Image
            style={styles.component10Item}
            resizeMode="cover"
            source={require('../assets/rectangle-4381.png')}
          />
           <Image
                style={[styles.groupIcon, styles.iconPosition]}
                resizeMode="cover"
                source={openAccordionId === item.id ? require('../assets/group1Flip.png') : require('../assets/group1.png')}
              />
         
        </TouchableOpacity>
        {openAccordionId === item.id && (
  <View style={{ alignItems: "center", }}>
    {/* Render the accordion content for the opened activity */}
    <FlatList
      data={accordionData}
      renderItem={({ item: childItem }) => (
        <View>
              <View style={{marginTop:15,margin:5,flexDirection:"row"}}>
              {cat === 'D' && (
  <Text style={{color:"black",fontSize:15}}>
    {childItem.serviceShortDescAr}
  </Text>
)}
{cat === 'M' && (
  <Text style={{color:"black",fontSize:15}}>
    Monthly Subscription </Text>
)}
{cat === 'Y' && (
  <Text style={{color:"black",fontSize:15}}>
    One Year Subscription </Text>
)}
                <Text style={{color:"gray",fontSize:13,alignSelf:"center"}}>({item.actName})</Text>
                <Text style={{color:"gray",fontSize:12,alignSelf:"center",marginLeft:"1.5%"}}>⭐ 4.9 (80 reviews)</Text>
              </View>
              <View style={{flexDirection:"row",margin:5}}>
              <Image
            style={{height:12,weight:12,alignSelf:"center"}}
            resizeMode="cover"
            source={require('../assets/user3.png')}
          />
                <Text style={{color:"gray",marginLeft:"2%",fontSize:14,alignSelf:"center"}}>{childItem.serviceDetailsAr}</Text>
                
              </View>
              <View style={{flexDirection:"row",margin:5}}>
              <Image
           style={{height:13.5,weight:12,alignSelf:"center"}}
            resizeMode="cover"
            source={require('../assets/clock2.png')}
          />
                <Text  style={{color:"gray",marginLeft:"2%",fontSize:14,alignSelf:"center"}}>{childItem.serviceShortDesc}</Text>
                
              </View>
              <TouchableOpacity style={{ flexDirection: "row", margin: 3 }} onPress={() => fetchDetails(childItem)} >
                <Text style={{color:"#006daa"}}>View Details</Text>
              </TouchableOpacity>
              <View style={{flex:1,flexDirection:"row",margin:5}}>
                <Text style={{color:"red",fontSize:18,fontWeight:"bold"}}>  {cat === 'D' && childItem.offerPrice + " SAR"} </Text>   
                <Text style={{color:"gray",alignSelf:"center",textDecorationLine: 'line-through',marginLeft:"1%"}}> {cat === 'D' && childItem.offerPrice * 1.1 + " SAR"}</Text>
                <Pressable
  style={[styles.nextWrapper, styles.wrapperFlexBox]}
  onPress={() => navigation.navigate('PinYourLocation19N', { parentItem: item, childItem: childItem ,category:cat})}
>
          <Text style={[styles.next, styles.nextTypo]}>Book Now</Text>
        </Pressable>
              </View>
            </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      parentData={item}
    />
    {/* You can render any additional data or components here */}
  </View>
)}

      </View>
    )}
    keyExtractor={item => item.id.toString()}
  />
  <View style={styles.frameChild} />
</View>

          <View
            style={[
              styles.profmProvidesAWideRangeOfParent,
              styles.regularCleaningChildPosition,
            ]}>
            <Text
              style={[
                styles.profmProvidesAContainer,
                styles.serviceDetailsTypo,
              ]}>
              <Text style={styles.profmProvidesAWideRangeOf}>
                <Text style={styles.profm}>Profm</Text>
                {` provides a wide range of cleaning services for homes, businesses, and public facilities.

`}
              </Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text
              style={[styles.cleaningService, styles.cleaningServicePosition]}>
              {deptCode}
            </Text>
            <Pressable
              style={[styles.frameGroup, styles.vectorIconPosition2]}
              onPress={() => navigation.navigate('ServiceDetails96')}>
              <View style={styles.frameContainer}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require('../assets/frame18.png')}
                />
                <Text
                  style={[styles.serviceDetails, styles.serviceDetailsTypo]}>
                  Service details
                </Text>
              </View>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require('../assets/group6.png')}
              />
            </Pressable>
          </View>



          <Image
            style={[
              styles.regularCleaningChild,
              styles.regularCleaningChildPosition,
            ]}
            resizeMode="cover"
            source={require('../assets/group-239088@3x_cleanup.png')}
          />
          <View style={{flexDirection:"row",top:25}}>
          <TouchableOpacity style={[styles.frameIcon2,{left:"40%"}]} onPress={() => navigation.goBack()} >
           <Image
                  
                  resizeMode="cover"
                  source={require('../assets/group-2387371.png')}
                />
                </TouchableOpacity>

<TouchableOpacity style={[styles.frameIcon2,{right:"-892%"}]}>
<Image
                  
                  resizeMode="cover"
                  source={require('../assets/group-2387381.png')}
                /></TouchableOpacity>
                </View>




          {/* <View style={[styles.navBar, styles.navPosition]}>
            <View style={[styles.navBar1, styles.navFlexBox]}>
              <Pressable
                style={[styles.navBarInner, styles.navFlexBox]}
                onPress={() => navigation.navigate('Bottom', {screen: 'Home'})}>
                <View style={styles.parentSpaceBlock}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/home23.png')}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </Pressable>
              <View style={[styles.navBarChild, styles.navBarChildLayout]}>
                <View style={styles.navFlexBox}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/clock3.png')}
                  />
                  <Text style={[styles.history, styles.homeTypo]}>History</Text>
                </View>
              </View>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Bookings'})}>
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/calendartick4.png')}
                  />
                  <Text style={[styles.bookings, styles.homeTypo]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Profile'})}>
                <View style={styles.navFlexBox}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/vuesaxlinearuser.png')}
                  />
                  <Text style={[styles.bookings, styles.homeTypo]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.navBarChildLayout}
                onPress={() => navigation.navigate('Bottom', {screen: 'Menu'})}>
                <View
                  style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
                  <Image
                    style={styles.home2Icon}
                    resizeMode="cover"
                    source={require('../assets/textalignleft.png')}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            
          </View> */}
        </View>

        <Modal
          animationType="fade"
          transparent
          visible={frameContainer12Visible}>
          <View style={styles.frameContainer12Overlay}>
            <Pressable
              style={styles.frameContainer12Bg}
              onPress={closeFrameContainer12}
            />
            <RegularCleaning9 onClose={closeFrameContainer12} />
          </View>
        </Modal>
      </ScrollView>
      <FooterBottom />
    </>
  );
};

const styles = StyleSheet.create({
  serviceTransform: {
    display: 'flex',
    textTransform: 'capitalize',
    alignItems: 'center',
  },
  nextWrapper: {
    top: '-30%',
    left: '72%',
    width: 85,
    height: 33,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.praimary,
    position: 'absolute',
  },
  next: {
    color: 'white',
    fontWeight: '600',
  },
  nextTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.dGBaysan,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconPosition: {
    bottom: '11.11%',
    top: '79.17%',
    height: '9.72%',
    maxHeight: '100%',
  },
  componentLayout: {
    height: 72,
    width: "100%",
    marginTop:5
  },
  vectorIconPosition: {
    left: '50%',
    position: 'absolute',
  },
  vectorIconPosition2: {
    left: '2%',
    position: 'absolute',
  },
  regularCleaningChildPosition: {
    width: "100%",
    left: 0,
    position: 'absolute',
  },
  serviceDetailsTypo: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    fontWeight: '300',
    textAlign: 'left',
    fontFamily: FontFamily.dGBaysan,
  },
  cleaningServicePosition: {
    left: "4%",
    position: 'absolute',
  },
  navPosition: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 120, // Adjust the z-index as needed
  },
  navFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTypo: {
    marginTop: 4,
    color: "gray",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: 'left',
  },
  navBarChildLayout: {
    width: 94,
    justifyContent: 'center',
    height: 56,
    alignItems: 'center',
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  component10Child: {
    left: '0%',
    backgroundColor: Color.colorAliceblue_200,
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  regularCleaning1: {
    height: '60%',
    width: '100.87%',
    top: '20%',
    left: '4.27%',
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    textAlign: 'left',
    fontFamily: FontFamily.dGBaysan,
    display: 'flex',
    position: 'absolute',
  },
  component10Item: {
    width: '49.87%',
    left: '50.13%',
    maxHeight: '100%',
    overflow: 'hidden',
    maxWidth: '100%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  groupIcon: {
    width: '3.2%',
    right: '48.27%',
    left: '48.53%',
    overflow: 'hidden',
    maxWidth: '100%',
    bottom: '11.11%',
    top: '79.17%',
    height: '9.72%',
    position: 'absolute',
  },
  component11: {
    marginTop: 14,
  },
  vectorIcon: {
    marginLeft: -5.5,
    width: 12,
    bottom: '11.11%',
    top: '79.17%',
    height: '9.72%',
    maxHeight: '100%',
  },
  frameChild: {
    width: windowWidth,
    height: 49,
    marginTop: 65,
    overflow: 'hidden',
  },
  frameParent: {
    top: 370,
    position: 'absolute',
    left:"0%"
  },
  profm: {
    textTransform: 'uppercase',
  },
  profmProvidesAWideRangeOf: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  profmProvidesAContainer: {
    width: "95%",
    height: 32,
    left: "4%",
    position: 'absolute',
    top: "30%",
  },
  cleaningService: {
    top: "12%",
    fontSize: FontSize.size_base,
    fontWeight: '600',
    color: Color.black,
    width: "100%",
    height: 24,
    display: 'flex',
    textTransform: 'capitalize',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon: {
    width: 14,
    height: 14,
    overflow: 'hidden',
  },
  frameIcon2: {
    width: 29,
    height: 29,
    overflow: 'hidden',
  },
  serviceDetails: {
    width: 120,
    height: 16,
    marginLeft: 8,
    display: 'flex',
    textTransform: 'capitalize',
    alignItems: 'center',
  },
  frameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vectorIcon1: {
    width: 7,
    height: 12,
    marginLeft: "50%",
  },
  frameGroup: {
    top: "55%",
    borderRadius: Border.br_5xs,
    backgroundColor:"#d3d3d3",
    padding: Padding.p_xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profmProvidesAWideRangeOfParent: {
    top:210,
    height: 176,
    backgroundColor: Color.lightBGPrimary,
    overflow: 'hidden',
  },
  regularCleaningChild: {
    height: 208,
    top: 0,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    fontWeight: '300',
    marginTop: 4,
    color: "gray",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
    height: 56,
    justifyContent: 'center',
  },
  history: {
    fontWeight: '500',
    fontFamily: FontFamily.med,
  },
  navBarChild: {
    display: 'none',
  },
  bookings: {
    fontWeight: '300',
    marginTop: 4,
    color:"gray",
    fontFamily: FontFamily.dGBaysan,
    textTransform: 'capitalize',
  },
  calendarTickParent: {
    alignItems: 'center',
  },
  frameContainer12Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  frameContainer12Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar1: {
    height: 56,
    justifyContent: 'center',
    marginLeft: -187.5,
    left: '50%',
    width: 375,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    backgroundColor: Color.lightBGPrimary,
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 56,
    backgroundColor: Color.lightBGPrimary,
  },
  navBar: {
    bottom: "-4.5%",
    height: 80,
    zIndex: 1,
    elevation: 1, // Minimum value for visible elevation on Android
    shadowColor: "#808080", // Use hexadecimal or RGB color code for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  regularCleaning: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default RegularCleaning;