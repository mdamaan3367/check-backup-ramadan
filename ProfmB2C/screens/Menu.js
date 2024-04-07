import * as React from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LogoutSection from '../components/LogoutSection';
import AddressSection from '../components/AddressSection';
import InvoiceSection from '../components/InvoiceSection';
import SectionCardForm from '../components/SectionCardForm';
import SectionMenu1 from '../components/SectionMenu1';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const Menu = () => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View
        style={[styles.menu, {width: windowWidth, height: windowHeight + 230}]}>
        <LogoutSection />
        <AddressSection />
        {/* <InvoiceSection
          iconImageUrl={require('../assets/group-238795.png')}
          itemCode="invoices"
          onGroupPressablePress={() => navigation.navigate('Invoices')}
        />
        <InvoiceSection
          iconImageUrl={require('../assets/group-238796.png')}
          itemCode="Orders"
          propTop="52.59%"
          onGroupPressablePress={() => navigation.navigate('Orders')}
        /> */}
        {/* <Text style={styles.myAccount}>My account</Text> */}
        <SectionCardForm
          imageDimensions={require('../assets/3-1-1.png')}
          onArrow21Press={() => navigation.goBack()}
        />
        <View style={styles.menuChild} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myAccount: {
    top: '41.5%',
    left: '4%',
    fontSize: FontSize.size_sm,
    textTransform: 'capitalize',
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: 178,
    height: 18,
    position: 'absolute',
  },
  menuChild: {
    top: 960,
    left: 82,
    width: 263,
    height: 69,
    overflow: 'hidden',
    position: 'absolute',
  },
  menu: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default Menu;
