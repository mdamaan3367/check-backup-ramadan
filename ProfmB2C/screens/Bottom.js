import {
  DrawerLayoutAndroid,
  TouchableOpacity,
  Picker,
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../components/Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Notifications from './Notifications';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import Bookings from './Bookings';
import Profile from './Profile';
import Menu from './Menu';

const Bottom2 = createBottomTabNavigator();
const Bottom = () => {
  const navigation = useNavigation();

  return (
    <>
      <Bottom2.Navigator initialRouteName="Home">
      <Bottom2.Screen
  name="Home"
  component={props => <Home {...props} />} // Pass openDrawer function to Home component
  options={{
    headerShown: false,
    tabBarIcon: tabInfo => {
      return (
        <Image
          source={require('../assets/home2.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: tabInfo.focused ? Color.praimary : 'grey',
          }}
        />
      );
    },
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: focused ? 14 : 12, color: focused ?  Color.praimary : 'grey' }}>Home</Text> // Adjust font size based on focus
    ),
  }}
/>

        <Bottom2.Screen
          name="Bookings"
          component={Bookings}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/calendartick.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: tabInfo.focused ? Color.praimary : 'grey',
                  }}
                />
              );
            },
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: focused ? 14 : 12, color: focused ?  Color.praimary : 'grey' }}>Bookings</Text> // Adjust font size based on focus
    ),
          }}
        />
        <Bottom2.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/user.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: tabInfo.focused ? Color.praimary : 'grey',
                  }}
                />
              );
            },
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: focused ? 14 : 12, color: focused ?  Color.praimary : 'grey' }}>Profile</Text> // Adjust font size based on focus
    ),
          }}
        />
        <Bottom2.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/textalignleft.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: tabInfo.focused ? Color.praimary : 'grey',
                  }}
                />
              );
            },
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: focused ? 14 : 12, color: focused ?  Color.praimary : 'grey' }}>Menu</Text> // Adjust font size based on focus
    ),
          }}
        />
      </Bottom2.Navigator>
    </>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
