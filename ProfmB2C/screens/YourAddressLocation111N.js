import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, Pressable, ScrollView, Dimensions,PanResponder, Animated } from "react-native";
import LocationForm from "../components/LocationForm";
import ContinueSection from "../components/ContinueSection";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const YourAddressLocation111N = ({ route }) => {

  
  const { parentItem, childItem, selectedDate,selectedTime,category } = route.params;
  console.log(category,"cate")
  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [showMap, setShowMap] = useState(false);
   

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        });
        console.log('Current location:', location);
        setCurrentLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        setShowMap(true);

        // Fetch address using geocoding service
        const address = await fetchAddress(location.latitude, location.longitude);
        setCurrentAddress(address);
      } catch (error) {
        console.warn('Error getting current location:', error);
      }
    };

    fetchLocation();
  }, []);

  // Function to fetch address using latitude and longitude
  const fetchAddress = async (latitude, longitude) => {
    try {
      // Use your preferred geocoding service here
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA3hJP57yrcwv-PVsbrG4gHUGrLu-HmsXs`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        return data.results[0].formatted_address;
      } else {
        return "Address not found";
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return "Error fetching address";
    }
  };
  console.log(selectedTime,"mymaptime");



  const INITIAL_CONTAINER_HEIGHT = windowHeight*0.41;
const MAX_CONTAINER_HEIGHT = windowHeight * 0.56;
  const [containerHeight, setContainerHeight] = useState(INITIAL_CONTAINER_HEIGHT);
  const pan = useRef(new Animated.ValueXY()).current;

  const onPanResponderMove = (_, gestureState) => {
    const newHeight = Math.min(
      MAX_CONTAINER_HEIGHT,
      Math.max(INITIAL_CONTAINER_HEIGHT, containerHeight - gestureState.dy)
    );
    setContainerHeight(newHeight);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove,
    onPanResponderRelease: () => {
      // Do nothing, keep the current height
    },
  });


  return (
  <>
  <ScrollView scrollEnabled={false}>
    <View style={[styles.yourAddressLocation, styles.iconLayout,{height:windowHeight+100,width:windowWidth}]}>
      <View
        style={[
          styles.yourAddressLocationChild,
          styles.basemapImageIconPosition,
        ]}
      />
      <Text style={[styles.yourAddress, styles.yourAddressFlexBox]}>
        Your Address / Location
      </Text>
      <LocationForm />
      {/* <Image
        style={[styles.basemapImageIcon, styles.basemapImageIconPosition]}
        resizeMode="cover"
        source={require("../assets/basemap-image.png")}
      /> */}
      <View style={styles.container}>
        {currentLocation && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={currentLocation} title="Your Location" pinColor="#006daa" />
          </MapView>
        )}
      
      </View>
      {/* <ContinueSection
  parentItem={parentItem}
  childItem={childItem}
  selectedDate={selectedDate}
  address={currentAddress}
  showMap={!!currentLocation} // Convert currentLocation to a boolean
  currentLocation={currentLocation}
  currentAddress={currentAddress}
  selectedTime={selectedTime}
  category={category}

/> */}

<Animated.View
        style={[styles.bottomContainer, { height: containerHeight }]}
        {...panResponder.panHandlers}
      >
       <ContinueSection
  parentItem={parentItem}
  childItem={childItem}
  selectedDate={selectedDate}
  address={currentAddress}
  showMap={!!currentLocation} // Convert currentLocation to a boolean
  currentLocation={currentLocation}
  currentAddress={currentAddress}
  selectedTime={selectedTime}
  category={category}

/>
        {/* Container content goes here */}
      </Animated.View>


     
      <View style={[styles.arrow21Parent, styles.yourAddressFlexBox]}>
      
      <View style={[styles.groupChild, styles.groupShadowBox]} />
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
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 0,
    backgroundColor:"white",
    elevation:5,
   
    
  },
  iconLayout: {
    overflow: "hidden",
  },
  container: {
    flex: 1,
    top:"26%" // Adjust the height as needed or use percentage height
  },
  map: {
    width: '100%',
    height: "39%",
  },
  basemapImageIconPosition: {
    width: "100%",
    left: "0%",
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
    width: '200%',
    left: "-12%",
    position: 'absolute',
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: "-150%",
  },
  yourAddressFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  yourAddressLocationChild: {
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
    height: 86,
  },
  yourAddress: {
    top: "12%",
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 24,
    left: "3%",
    alignItems: "center",
  },
 
  yourAddressLocationItem: {
    top: 360,
    left: 150,
    width: 25,
    height: 35,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow21: {
    width: 24,
    height: 24,
  },
  icon1: {
    width: 75,
    height: 32,
    marginLeft: "42%",
  },
  arrow21Parent: {
    top: "5%",
    left:"4%",
    flexDirection: "row",
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default YourAddressLocation111N;
