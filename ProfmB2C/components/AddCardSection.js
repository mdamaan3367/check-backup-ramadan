import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "./PaymentSection";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { RadioButton } from 'react-native-paper';


const AddCardSection = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('first');

  return (
    <View
      style={[styles.selectThePaymentMethodYouParent, styles.parentPosition]}
    >
      <Text style={styles.selectThePayment}>
        Select the payment method you want to use
      </Text>
      <View style={styles.groupParent}>
      <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
        {/* <Pressable
          style={styles.rectangleLayout}
          //onPress={() => navigation.navigate("YourAddressLocation3")}
        >
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent1, styles.frameFlexBox]}>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
              <Text style={[styles.addCard, styles.addCardTypo]}>Add Card</Text>
            </View>
            <View style={{left:"220%",alignSelf:"center"}}>
            <RadioButton value="first" color="#006daa" />
            </View>
          </View>
        </Pressable> */}

        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
            <Text style={[styles.cashPayment, styles.addCardTypo]}>
            Add Card
            </Text>
          </View>
          <View style={styles.radioLeft}>
          <RadioButton value="first" color="#006daa" />
          </View>
        </View>
        
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
            <Text style={[styles.cashPayment, styles.addCardTypo]}>
            Apple Pay
            </Text>
          </View>
          <View style={styles.radioLeft}>
          <RadioButton value="second" color="#006daa" />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame3.png")}
            />
            <Text style={[styles.cashPayment, styles.addCardTypo]}>
            PayPal
            </Text>
          </View>
          <View style={styles.radioLeft}>
          <RadioButton value="third" color="#006daa" />
          </View>
        </View>
        {/* <PaymentSection
          iconCode={require("../assets/frame2.png")}
          paymentMethodIconCode="Apple Pay"
          productCode={require("../assets/ellipse-180.png")}
        />
        <PaymentSection
          iconCode={require("../assets/frame3.png")}
          paymentMethodIconCode="PayPal"
          productCode={require("../assets/vector2.png")}
          propMarginLeft={210}
        /> */}
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
            <Text style={[styles.cashPayment, styles.addCardTypo]}>
              Cash Payment
            </Text>
          </View>
         <View style={styles.radioLeft}>
          <RadioButton value="fourth" color="#006daa"/>
          </View>
        </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left:"4%",
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLeft:{
    left:"80%",
    alignSelf:"center",
    top:"15%"
  },
  addCardTypo: {
    marginLeft: 8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 18,
    width: 18,
  },
  rectangleLayout: {
    height: 56,
    width:"100%",
  },
  selectThePayment: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.colorBlack,
    opacity: 0.6,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 56,
    width:"142%",
    position: "absolute",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  addCard: {
    fontWeight: "600",
    color:  Color.grayBlack,
    display: "flex",
    width: "70%",
    height: 18,
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  frameChild: {
    marginLeft: 97,
  },
  frameParent: {
    top: "30%",
    alignItems: "center",
    left: "4%",
    position: "absolute",
  },
  frameParent1: {
    top: "22%",
    alignItems: "center",
    left:"4%",
    position: "absolute",
  },
  cashPayment: {
    color: Color.grayBlack,
  },
  groupInner: {
    top: 19,
    left: 308,
    position: "absolute",
    height: 18,
    width: 18,
  },
  rectangleGroup: {
    marginTop: 24,
  },
  groupParent: {
    marginTop:"0%",
    width:"65.2%"
  },
  selectThePaymentMethodYouParent: {
    top:"33%",
    width:"100%"
  },
});

export default AddCardSection;
