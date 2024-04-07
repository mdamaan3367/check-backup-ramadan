import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash1 from './screens/Splash1';
import LogIn from './screens/LogIn';
import Home from './components/Home';
import SignUp from './screens/SignUp';
import Forget from './screens/Forget';
import Notifications from './screens/Notifications';
import OnBordeing from './screens/Onbordeing';
import OnBordeing2 from './screens/Onbordeing2';
import OnBordeing3 from './screens/Onbordeing3';
import OnBordeing4 from './screens/Onbordeing4';
import OnbordingCarousel from './screens/OnbordingCarousel';
import Bottom from './screens/Bottom';
import Bookings from './screens/Bookings';
import Profile from './screens/Profile';
import Menu from './screens/Menu';
import DiscountCarousal from './screens/DiscountCarousal';
import OneTimeService from './screens/OneTimeService';
import HospitalityServices from './screens/HospitalityServices';
import PoolMaintenance from './screens/PoolMaintenance';
import ElectricalWorks from './screens/ElectricalWorks';
import SanitaryPlumbing from './screens/SanitaryPlumbing';
import HVAC from './screens/HVAC';
import PestControl from './screens/PestControl';
import LANDSCAPING from './screens/LANDSCAPING';
import CarpentryWork from './screens/CarpentryWork';
import Profile1 from './screens/Profile1';
import ChangePassword from './screens/ChangePassword';
import MyAddresses from './screens/MyAddresses';
import Invoices from './screens/Invoices';
import Orders from './screens/Orders';
import AboutApp from './screens/AboutApp';
import Menu1 from './screens/Menu1';
import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import NotificationScreen from './redux/NotificationScreen';
import {addNotification} from './redux/notificationSlice';
import {PersistGate} from 'redux-persist/integration/react';
import OnBordeing5 from './screens/OnBordeing5';
import OnBordeing6 from './screens/OnBordeing6';
import OnBordeing7 from './screens/OnBordeing7';
import OnBordeing8 from './screens/OnBordeing8';
import RegularCleaning from './components/RegularCleaning';
import ServiceDetails96 from './screens/ServiceDetails96';
import ViewDetails2 from './components/ViewDetails2';
import PinYourLocation19 from './screens/PinYourLocation1';
import PinYourLocation19N from './screens/PinYourLocation19N';
import YourAddressLocation111N from './screens/YourAddressLocation111N';
import SelectFromMap from './screens/SelectFromMap';
import SelectPayementType from './screens/SelectPayementType';
import YourAddressLocation51 from './screens/YourAddressLocation5';
import YourAddressLocation61 from './screens/YourAddressLocation6';
import YourAddressLocation12 from './screens/YourAddressLocation';

const Stack = createNativeStackNavigator();
const App = () => {
  //pushed
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage.notification);
      Alert.alert(
        remoteMessage.notification?.title,
        remoteMessage.notification?.body,
      );
    });

    return unsubscribe;
  }, []);
  //-----------
  useEffect(() => {
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      const {title, body} = remoteMessage.notification;
      const notificationText = `${title}: ${body}`;
      store.dispatch(addNotification(notificationText));
    });

    const unsubscribeBackground = messaging().onNotificationOpenedApp(
      remoteMessage => {
        const {title, body} = remoteMessage.notification;
        const notificationText = `${title}: ${body}`;
        store.dispatch(addNotification(notificationText));
      },
    );

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);
  //pushed

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forget"
              component={Forget}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Onbordeing"
              component={OnBordeing}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Onbordeing2"
              component={OnBordeing2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Onbordeing3"
              component={OnBordeing3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Onbordeing4"
              component={OnBordeing4}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnbordingCarousel"
              component={OnbordingCarousel}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bottom"
              component={Bottom}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bookings"
              component={Bookings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DiscountCarousal"
              component={DiscountCarousal}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OneTimeService"
              component={OneTimeService}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HospitalityServices"
              component={HospitalityServices}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PoolMaintenance"
              component={PoolMaintenance}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ElectricalWorks"
              component={ElectricalWorks}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SanitaryPlumbing"
              component={SanitaryPlumbing}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HVAC"
              component={HVAC}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PestControl"
              component={PestControl}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LANDSCAPING"
              component={LANDSCAPING}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CarpentryWork"
              component={CarpentryWork}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Invoices"
              component={Invoices}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyAddresses"
              component={MyAddresses}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Orders"
              component={Orders}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AboutApp"
              component={AboutApp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Menu1"
              component={Menu1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnBordeing5"
              component={OnBordeing5}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnBordeing6"
              component={OnBordeing6}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnBordeing7"
              component={OnBordeing7}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnBordeing8"
              component={OnBordeing8}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegularCleaning"
              component={RegularCleaning}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="NotificationScreen"
              component={NotificationScreen}
            />
             <Stack.Screen
              name="ServiceDetails96"
              component={ServiceDetails96}
            />
            <Stack.Screen
              name="ViewDetails2"
              component={ViewDetails2}
            />
             <Stack.Screen
              name="PinYourLocation19N"
              component={PinYourLocation19N}
            />
            <Stack.Screen
              name="YourAddressLocation111N"
              component={YourAddressLocation111N}
            />
             <Stack.Screen
              name="SelectFromMap"
              component={SelectFromMap}
            />
             <Stack.Screen
              name="SelectPayementType"
              component={SelectPayementType}
            />
            <Stack.Screen
              name="YourAddressLocation51"
              component={YourAddressLocation51}
            />
             <Stack.Screen
              name="YourAddressLocation61"
              component={YourAddressLocation61}
            />
             <Stack.Screen
              name="YourAddressLocation12"
              component={YourAddressLocation12}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
