import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, Platform, Linking, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Permissions from 'react-native-permissions';

const EnableLocationAndData = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);

  useEffect(() => {
    checkLocationStatus();

    const watchId = Geolocation.watchPosition(
      () => {
        // Location services are enabled
      },
      (error) => {
        if (error.code === 2) {
          setLocationEnabled(false);
          showAlert();
        }
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  const checkLocationStatus = async () => {
    const locationPermission = await Permissions.check('location');
    setLocationEnabled(locationPermission === 'granted');
  };

  const requestLocationPermission = async () => {
    const locationPermission = await Permissions.request('location');
    setLocationEnabled(locationPermission === 'granted');
  };

  const openLocationSettings = () => {
    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
    } else {
      Linking.openURL('app-settings:');
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Location Services',
      'Location services are disabled. Please enable location services to proceed.',
      [
        {
          text: 'Enable Location',
          onPress: openLocationSettings,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLocationEnabled ? (
        <Text>Location is enabled.</Text>
      ) : (
        requestLocationPermission(),
        <Text>Enable Location Services to proceed.</Text>
      )}
    </View>
  );
};

export default EnableLocationAndData;
