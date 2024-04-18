import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, View, Pressable, Text, ScrollView, Dimensions, KeyboardAvoidingView, Platform, Touchable, TouchableOpacity, InputAccessoryView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "../components/WebViewBottom";
import Property1Default from "../components/Property1Default";
import SearchSection from "../components/SearchSection";
import LocationPickerForm from "../components/LocationPickerForm";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SelectFromMap = ({ route }) => {
  const { parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap,selectedTime,category } = route.params;
  const navigation = useNavigation();
  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [fetchedAddress, setFetchedAddress] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (selectedLocation) {
      fetchAddress(selectedLocation);
    }
  }, [selectedLocation]);

  const handlePlaceSelected = (data, details = null) => {
    console.log("Selected Place Data:", data);
    console.log("Selected Place Details:", details);

    // Check if details is not null
    if (details) {
      // Attempt to access the coordinates from the details object
      const coordinates = details.geometry?.location;
      console.log("Coordinates:", coordinates);

      // If coordinates are available, set the selectedLocation state
      if (coordinates) {
        setSelectedLocation({
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        });

        // Move map to selected location
        mapRef.current.animateToRegion({
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        
        // Log the coordinates
        console.log("Selected Location Coordinates:", coordinates);
      }
    }
  };

  const fetchAddress = async (selectedLocation) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${selectedLocation.latitude},${selectedLocation.longitude}&key=AIzaSyA3hJP57yrcwv-PVsbrG4gHUGrLu-HmsXs`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setFetchedAddress(address); // Set the fetched address state
      } else {
        setFetchedAddress("Address not found");
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setFetchedAddress("Error fetching address");
    }
  };

  return (
    <ScrollView
      horizontal={true}
      nestedScrollEnabled={true}
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <KeyboardAvoidingView
        enabled={false}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.pinYourLocation, styles.iconLayout, { height: windowHeight, width: windowWidth }]}
      >
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(event) => {
              const { latitude, longitude } = event.nativeEvent.coordinate;
              setSelectedLocation({ latitude, longitude });
              console.log("Selected Location Coordinates:", { latitude, longitude });
            }}
          >
            {selectedLocation && (
              <Marker coordinate={selectedLocation} pinColor="#006daa" />
            )}
          </MapView>

          <GooglePlacesAutocomplete
    fetchDetails={true}
    placeholder="Search"
    placeholderTextColor="black"  // Change to hex color code for black
    textInputProps={{
        placeholderTextColor: '#a6a6a6',
        returnKeyType: "search",
        color:"black"
      }}
    onPress={(data, details = null) => handlePlaceSelected(data, details)}
    query={{
        key: 'AIzaSyA3hJP57yrcwv-PVsbrG4gHUGrLu-HmsXs',
        language: 'en',
        fields: 'formatted_address,geometry', // Include 'geometry' to fetch coordinates
    }}
    styles={{
        container: styles.inputContainer,
        textInputContainer: styles.textInputContainer,
        textInput: styles.input,
        listView: {
            ...styles.listView, // If you want to style the autocomplete list
            color: '#000', // Change color of dropdown text
        },
        description : {color : '#a6a6a6'}
        
    }}
    // Add the prop to style the text color of the autocomplete text
    textColor="#000" 
/>


        </View>

        <View style={styles.pinYourLocationChild} />
        <View style={styles.pinYourLocationItem} />
        <View style={styles.arrow21Parent}>
          <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-11.png")}
            />
          </Pressable>
          <Text style={styles.pinYourLocationContainer}>
            <Text style={styles.p}>p</Text>in your location
          </Text>
        </View>
        <Property1Default
          logIn="Continue"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={0}
          property1DefaultTop={"92%"}
          property1DefaultLeft="2%"
          property1DefaultWidth={"95%"}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom="unset"
          logInLetterSpacing={0.6}
          logInLineHeight={30}
          logInTextTransform="capitalize"
          logInWidth="58.31%"
          logInLeft="20.7%"
          onButtonBigPress={() => navigation.navigate("SelectPayementType", {
            parentItem: parentItem,
            childItem: childItem,
            selectedDate: selectedDate,
            currentLocation: selectedLocation,
            currentAddress: fetchedAddress,
            selectedTime:selectedTime
          })}
        />
        <LocationPickerForm />
        <View style={styles.frameParent}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame151.png")}
          />
          <Text style={styles.setNewLocationContainer}>
            <Text style={styles.setNewLocation}>{`Set new location
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
        </View>

        <TouchableOpacity  style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox} />
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame16.png")}
          />
        </TouchableOpacity>

        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox} />
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame17.png")}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listView: {
    position: 'absolute',
    top: 60, // Adjust this value based on your layout
    left: 20,
    right: 20,
    zIndex: 1000, // Adjust this value to ensure the autocomplete list appears above the map
  },
  inputContainer: {
    top: "12%",
    left: "2%",
    width:"95.5%",
    zIndex: 9999,
    color:"black"
  },
  textInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    color:"black"
  },
  input: {
    height: 40,
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    color:"black"
  },
  rectanglePosition: {
    left: 335,
    height: 24,
    width: 24,
    position: "absolute",
  },
  basemapImageIcon: {
    top: 20,
    height: 792,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  pinYourLocationChild: {
    bottom:0,
    height: 64,
    backgroundColor: Color.whait,
    left: 0,
    width:"100%",
    position: "absolute",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  pinYourLocationItem: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 76,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    backgroundColor: Color.whait,
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  p: {
    textTransform: "capitalize",
  },
  pinYourLocationContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.praimary,
    textAlign: "center",
    marginLeft: "30%",
    fontFamily: FontFamily.dGBaysan,
  },
  arrow21Parent: {
    top:"3%",
    left: "4%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  pinYourLocationInner: {
    top: 411,
    left: 115,
    width: 50,
    height: 50,
    position: "absolute",
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  setNewLocation: {
    fontSize: FontSize.med_size,
  },
  blankLine: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  setNewLocationContainer: {
    fontWeight: "300",
    color: Color.grayBlack,
    textAlign: "left",
    width: "100%",
    height: 13,
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent: {
    top: "85%",
    left: "60%",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_4xs,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupShadowBox: {
    borderRadius: Border.br_11xs,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 24,
    width: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    backgroundColor: Color.whait,
    left: 0,
    position: "absolute",
  },
  frameIcon1: {
    top: 6,
    left: 6,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 273,
  },
  rectangleGroup: {
    top: 245,
  },
  pinYourLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
  },
});

export default SelectFromMap;
