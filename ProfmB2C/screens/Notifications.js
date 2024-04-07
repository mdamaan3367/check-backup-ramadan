import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);
  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Subscribe to FCM messages
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Process the received notification
      const notification = {
        id: remoteMessage.messageId,
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        image: require('../assets/profmLogoApp.jpeg'), // Android image URL
        // image: remoteMessage.notification.apple.imageUrl, // iOS image URL (if applicable)
        timestamp: Date.now(), // Add timestamp when the notification was received
      };

      // Add the notification to the list
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    
    <View style={[styles.container,{height:windowHeight,width:windowWidth}]}>
       <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={[styles.arrow21, styles.arrow21Layout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-11.png")}
          />
        </Pressable>
        <Text style={[styles.notifications2, styles.pastNoticesTypo]}>
          Notifications
        </Text>
      </View>
      
      <View style={{top:"19%",flexDirection:"row"}}>
      <Text style={{color:"gray"}}>You have</Text>
      <Text style={{color:"#006daa"}}>( {notifications.length})</Text>
      <Text style={{color:"gray"}}> notification Today</Text>
      </View>
     
      <View style={{top:"10%"}}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            {item.image && 
              <Image source={item.image} style={styles.notificationImage} />
            }
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationBody}>{item.body}</Text>
              <Text style={styles.notificationTimestamp}>{formatTimestamp(item.timestamp)}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      </View>
      <TouchableOpacity onPress={handleClearNotifications} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Notifications</Text>
      </TouchableOpacity>
    </View>
   
  );
};

const formatTimestamp = (timestamp) => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return `Just now`;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  arrow21: {
    right: 335,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  notifications2: {
    marginLeft: -74.5,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 24,
    top: 47,
    color: Color.praimary,
    left: "50%",
    fontWeight: "700",
  },
  pastNoticesTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow21Layout: {
    height: 24,
    top: 47,
  },
  tap: {
    top: 1,
  },
  tapPosition: {
    height: 88,
    width: 375,
    left: "0%",
    position: "absolute",
  },
  tapChild: {
    top: 0,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom: 10,
    marginBottom: 10,
  },
  notificationImage: {
    width: 55,
    height: 55,
    marginRight: 10,
    borderRadius: 29,
    resizeMode: 'cover',
    borderWidth:0.5,
    borderColor:"#006daa"  // Assuming the image is circular
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  notificationBody: {
    fontSize: 16,
    color: '#666666',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
    right:"2%",
    left:"65%",
    top:"0%"
  },
  clearButton: {
    backgroundColor: '#006daa',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
    bottom:10,
    position:"absolute",
    left:"30%",
    width:"60%",
    flex:1
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Notifications;
