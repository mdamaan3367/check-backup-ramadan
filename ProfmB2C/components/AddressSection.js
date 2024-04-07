import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionAboutApp from "./SectionAboutApp";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddressSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountInfoParent}>
      <Text style={styles.accountInfo}>Account Info</Text>
      <View style={styles.groupParent}>
        <SectionAboutApp
          iconImageUrl={require("../assets/group-238781.png")}
          pageDescription="Profile"
          groupIconMarginTop="unset"
          width="255%"
          onGroupPressablePress={() => navigation.navigate("Profile1")}
        />
        <SectionAboutApp
          iconImageUrl={require("../assets/group-238793.png")}
          pageDescription="Change password"
          groupIconMarginTop={8}
          width="255%"
          onGroupPressablePress={() => navigation.navigate("ChangePassword")}
        />
        <SectionAboutApp
          iconImageUrl={require("../assets/group-238788.png")}
          pageDescription="My addresses"
          groupIconMarginTop={8}
          width="255%"
          onGroupPressablePress={() => navigation.navigate("MyAddresses")}
        />
      </View>
      <Text style={styles.accountInfo}>Account Info</Text>
      <View style={styles.groupParent2}>
        <SectionAboutApp
          iconImageUrl={require("../assets/group-238795.png")}
          pageDescription="Invoices"
          groupIconMarginTop="unset"
          width="255%"
          onGroupPressablePress={() => navigation.navigate("Invoices")}
        />
        <SectionAboutApp
          iconImageUrl={require("../assets/group-238796.png")}
          pageDescription="Orders"
          groupIconMarginTop={8}
          width="255%"
          onGroupPressablePress={() => navigation.navigate("Orders")}
        />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountInfo: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 131,
    height: 16,
    marginTop:5
  },
  groupParent: {
    marginTop: 15,
  },
  groupParent2: {
    marginTop: 20,
  },
  accountInfoParent: {
    position: "absolute",
    top: "16%",
    left: "4%",
  },
});

export default AddressSection;
