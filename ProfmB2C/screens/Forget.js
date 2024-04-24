import React, { useEffect } from 'react';
import {
  View,
  Button,
  Platform,
  ToastAndroid,
} from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const App = () => {
  const requestReadMediaPermission = async () => {
    try {
      let permission;
      if (Platform.Version >= 30) {
        permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
      } else if (Platform.Version >= 11 && Platform.Version < 30) {
        permission = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
      } else {
        permission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
      }

      let permissionResult = await check(permission);
      if (permissionResult === RESULTS.BLOCKED) {
        ToastAndroid.show(
          'Permission Denied. Please enable the permission in your device settings.',
          ToastAndroid.SHORT
        );
        return;
      }
      if (permissionResult === RESULTS.DENIED) {
        permissionResult = await request(permission);
      }

      if (permissionResult === RESULTS.GRANTED) {
        ToastAndroid.show('Permission Grranted', ToastAndroid.SHORT);
        // You can now access the external storage here
        // For example:
        // Your code to read media images, videos, audio, and PDFs here
      } else {
        ToastAndroid.show(
          'Permission Denied. You can no longer access media images, videos, audio, and PDFs.',
          ToastAndroid.SHORT
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestReadMediaPermission();
  }, []);

  return (
    <View>
      <Button title="Request Media Permission" onPress={requestReadMediaPermission} />
    </View>
  );
};

export default App;
