import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Pressable, Text, ScrollView, Dimensions, Platform, PermissionsAndroid, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';
import WebViewBottom from '../components/WebViewBottom';
import TotalSection from '../components/TotalSection';
import Property1Default from '../components/Property1Default';
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


const YourAddressLocation12 = ({ route }) => {
  const { childItemId, childItemDeptCode, itemId } = useSelector((state) => state.serviceType.selectedServiceType);
  const { selectedDateTimeArray, priceValue, day2, month2, year2 } = useSelector(state => state.contract);
  const { responseData, parentItem, childItem, selectedDate, currentLocation, currentAddress, showMap, selectedTime, category } = route.params;
  const day = selectedDate.getDate(); // Get the day (1-31)
  const month = selectedDate.getMonth() + 1; // Get the month (0-11) and add 1 to make it 1-12
  const year = selectedDate.getFullYear();
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [printing, setPrinting] = useState(false);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const sdkVersion = parseInt(Platform.Version, 10);
  
        if (sdkVersion >= 33) { // Android 13 and later
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
          ]);
  
          const grantedPermissions = Object.values(granted).every(
            (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
          );
  
          if (grantedPermissions) {
            console.log('Storage permissions granted');
            return true;
          } else {
            console.log('Storage permissions denied');
            return false;
          }
        } else if (sdkVersion >= 30) { // Android 11 and 12
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ]);
  
          const grantedPermissions = Object.values(granted).every(
            (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
          );
  
          if (grantedPermissions) {
            console.log('Storage permissions granted');
            return true;
          } else {
            console.log('Storage permissions denied');
            return false;
          }
        } else { // Android 10 and below
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to save PDFs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
  
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage permission granted');
            return true;
          } else {
            console.log('Storage permission denied');
            return false;
          }
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };
  

  const savePDF = async () => {
    try {
      if (!(await requestStoragePermission())) {
        console.log('Storage permission denied');
        return;
      }

      setPrinting(true);
      const timeString = new Date().toISOString().replace(/:|\./g, '-');
      const page = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
          }
          .container {
              width: 80%;
              margin: auto;
              border: 1px solid #ccc;
              padding: 20px;
          }
          .header {
              text-align: center;
              margin-bottom: 20px;
          }
          .company-name {
              color: #006daa;
              font-size: 24px;
              margin-bottom: 10px;
          }
          .invoice-title {
              font-size: 24px;
              margin-bottom: 20px;
          }
          .invoice-details {
              margin-bottom: 20px;
          }
          table {
              width: 100%;
              border-collapse: collapse;
          }
          th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
          }
          th {
              background-color: #006daa;
              color: #fff;
          }
          .total {
              text-align: right;
          }
          @media screen and (max-width: 600px) {
              .container {
                  width: 100%;
              }
          }
      </style>
      </head>
      <body style="background-color: #f2f2f2;">
      
      <div class="container">
          <div class="header">
              <h2 class="company-name">PRO FM</h2>
              <h2 class="invoice-title">Invoice</h2>
          </div>
          <div class="invoice-details">
              <h3>Booking Details</h3>
              <p>
                  <strong>Services:</strong> ${parentItem.deptCode}<br>
                  <strong>Length of Service:</strong> ${itemId.title}<br>
                  <strong>Number of Workers:</strong>  ${childItem.minReqResource}<br>
                  <strong>Working Hours:</strong>  ${childItem.serviceShortDescAr}<br>
                  <strong>Start Date and Time:</strong>  ${`${day}-${month}-${year}`} | ${selectedTime}
              </p>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Description</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Service Cost</td>
                      <td> ${category === 'D' ? `${childItem.offerPrice} SAR` : `${priceValue} SAR`} </td>

                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td>VAT (15%)</td>
                      <td> ${category === 'D' ? `${childItem.offerPrice * 0.15} SAR` : `${priceValue * 0.15} SAR`} </td>

                  </tr>
                  <tr>
                      <td><strong>Total</strong></td>
                      <td><strong> ${category === 'D' ? `${childItem.offerPrice + childItem.offerPrice * 0.15} SAR` : `${priceValue + priceValue * 0.15} SAR`} </strong></td>

                  </tr>
              </tfoot>
          </table>
      </div>
      
      </body>
      </html>
      `;

      const options = {
        html: page,
        fileName: `profminvoice_${timeString}`,
        directory: RNFS.ExternalStorageDirectoryPath,
      };

      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF file:', file.filePath);

      const shareOptions = {
        title: 'Booking Details',
        url: `file://${file.filePath}`,
        failOnCancel: false,
      };
      await Share.open(shareOptions);
      setPrinting(false);
    } catch (error) {
      console.error('Error saving PDF: ', error);
      setPrinting(false);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.yourAddressLocation, styles.iconLayout, { height: windowHeight, width: windowWidth }]}>
        <View style={styles.yourAddressLocationChild} />
        <Pressable style={styles.arrow21} onPress={() => navigation.goBack()}>
          <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../assets/arrow-2-11.png')} />
        </Pressable>
        <Image style={styles.profmLogo1111} resizeMode="cover" source={require('../assets/3-1-1.png')} />
        <View style={[styles.eReceiptParent, styles.parentFlexBox]}>
          <Text style={[styles.eReceipt, styles.eReceiptTypo]}>E-Receipt</Text>
          <Pressable style={styles.frameChild}  onPress={savePDF} disabled={printing}>
          <Image resizeMode="cover" source={require('../assets/shareIcon.png')} />
          </Pressable>
        
        </View>
        <View style={styles.bookingDetailsParent}>
          <Text style={styles.bookingDetails}>Booking Details</Text>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View>
                <Text style={styles.servicesTypo}>Services</Text>
                <Text style={[styles.lengthOfService, styles.servicesTypo]}>Length of service</Text>
                <Text style={[styles.lengthOfService, styles.servicesTypo]}>Number of Workers</Text>
                <Text style={[styles.lengthOfService, styles.servicesTypo]}>Working Hours</Text>
                <Text style={[styles.lengthOfService, styles.servicesTypo]}>Start date and time</Text>
              </View>
              <View style={styles.regularCleaningParent}>
                <Text style={styles.oneTimeServiceTypo}>{parentItem.deptCode}</Text>
                <Text style={[styles.oneTimeService, styles.oneTimeServiceTypo]}>{itemId.title}</Text>
                <Text style={[styles.text, styles.textTypo]}>{childItem.minReqResource}</Text>
                <Text style={[styles.cleaningFor2, styles.textTypo]}>{childItem.serviceShortDescAr}</Text>
                <Text style={[styles.jan282023, styles.textTypo]}>{`${day}-${month}-${year}`} | {selectedTime}</Text>
              </View>
            </View>
          </View>
        </View>
        <TotalSection
          propTop={'65.5%'}
          propMarginTop={'4%'}
          propLeft={'145%'}
          propTextAlign="right"
          propWidth={'150%'}
          childItem={childItem}
          category={category}
        />
        <Property1Default
          logIn="Back to home"
          property1DefaultPosition="absolute"
          property1DefaultMarginLeft={0}
          property1DefaultTop="unset"
          property1DefaultLeft="2%"
          property1DefaultWidth={'95%'}
          property1DefaultHeight={48}
          property1DefaultRight="unset"
          property1DefaultBottom={'0.7%'}
          logInLetterSpacing={0.6}
          logInLineHeight={26}
          logInTextTransform="unset"
          logInWidth="58.31%"
          logInLeft="20.7%"
          onButtonBigPress={() => navigation.navigate('Bottom')}
        />
        <Image style={styles.groupIcon} resizeMode="cover" source={require('../assets/group71.png')} />
        {/* <Pressable style={styles.savePDFButton} onPress={savePDF} disabled={printing}>
          <Text style={styles.savePDFButtonText}>Save as PDF</Text>
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: '100%',
    overflow: 'hidden',
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  eReceiptTypo: {
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    alignItems: 'center',
  },
  servicesTypo: {
    color: Color.grayBlack,
    fontWeight: '300',
    fontSize: FontSize.med_size,
    textAlign: 'left',
    fontFamily: FontFamily.dGBaysan,
  },
  oneTimeServiceTypo: {
    width: 126,
    fontSize: FontSize.med_size,
    textAlign: 'left',
    color: Color.colorBlack,
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    alignItems: 'center',
  },
  textTypo: {
    fontSize: FontSize.med_size,
    marginTop: '11%',
    textAlign: 'left',
    color: Color.colorBlack,
    fontWeight: '600',
  },
  yourAddressLocationChild: {
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: '100%',
    height: 86,
    backgroundColor: Color.whait,
    left: '0%',
    position: 'absolute',
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
  },
  arrow21: {
    width: 24,
    height: 24,
    top: '5%',
    left: '4%',
    position: 'absolute',
  },
  profmLogo1111: {
    width: 70,
    height: 29,
    top: '4.5%',
    left: '42%',
    position: 'absolute',
  },
  eReceipt: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: 80,
    fontWeight: '600',
    textTransform: 'capitalize',
    display: 'flex',
    height: 24,
  },
  frameChild: {
    width: 24,
    height: 24,
    marginLeft: '39%',
  },
  eReceiptParent: {
    top: '13.5%',
    left: '38%',
    position: 'absolute',
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    width: 125,
    height: 16,
    textAlign: 'left',
    color: Color.colorBlack,
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    fontWeight: '600',
    textTransform: 'capitalize',
    alignItems: 'center',
  },
  lengthOfService: {
    marginTop: '16%',
  },
  oneTimeService: {
    marginTop: '13.5%',
  },
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
  },
  cleaningFor2: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  jan282023: {
    width: 136,
    display: 'flex',
    fontFamily: FontFamily.dGBaysan,
    alignItems: 'center',
  },
  regularCleaningParent: {
    marginLeft: '25%',
  },
  frameParent: {
    width: '100%',
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    borderStyle: 'solid',
    borderColor: Color.gray,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xl,
    marginTop: '4%',
    backgroundColor: Color.whait,
    overflow: 'hidden',
    width: '94.5%',
    height: '81%',
  },
  bookingDetailsParent: {
    top: '33%',
    left: '4%',
    position: 'absolute',
    width: '97%',
  },
  groupIcon: {
    height: '12.98%',
    width: '25%',
    top: '18.49%',
    right: '38.13%',
    bottom: '71.43%',
    left: '37.87%',
    position: 'absolute',
    overflow: 'hidden',
  },
  yourAddressLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: 'hidden',
  },
  savePDFButton: {
    position: 'absolute',
    bottom: '7%',
    left: '2%',
    width: '95%',
    height: 48,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_sm,
  },
  savePDFButtonText: {
    color: Color.white,
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.poppinsSemiBold,
  },
});

export default YourAddressLocation12;
