// NotificationScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotifications } from './notificationSlice';
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
    const navigation = useNavigation();
  const notifications = useSelector(state => state.notification.notifications);
  const dispatch = useDispatch();

  const handleClearNotifications = () => {
    dispatch(clearNotifications());
  };

  return (
    <View>
      <Text>Notifications:</Text>
      <Text>{notifications.length}</Text>
      {notifications.map((notification, index) => (
        <Text key={index}>{notification}</Text>
      ))}
      <Button title="Clear Notifications" onPress={handleClearNotifications} />
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default NotificationScreen;
