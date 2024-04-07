import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import RegularCleaning from "./RegularCleaning";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignInForm = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.accountInfoParent, styles.parentPosition]}>
        <Text style={[styles.accountInfo, styles.signInTypo]}>
          Account Info
        </Text>
        <Pressable style={styles.rectangleParent} onPress={openGroupContainer}>
          <View style={styles.groupChild} />
          <Pressable
            style={[styles.frameParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("LogIn")}
          >
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/group-2387811.png")}
              />
              <Text style={[styles.signIn, styles.signInTypo]}>sign in</Text>
            </View>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
          </Pressable>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <RegularCleaning onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  signInTypo: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountInfo: {
    color: Color.grayBlack,
    width: 131,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.3,
    position: "absolute",
  },
  frameChild: {
    width: 24,
    height: 24,
  },
  signIn: {
    fontWeight: "300",
    color: Color.black,
    width: 120,
    marginLeft: 8,
  },
  groupIcon: {
    width: 7,
    height: 12,
    marginLeft: 152,
  },
  frameParent: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    width: 343,
    height: 56,
    marginTop: 16,
  },
  accountInfoParent: {
    top: 156,
  },
});

export default SignInForm;
