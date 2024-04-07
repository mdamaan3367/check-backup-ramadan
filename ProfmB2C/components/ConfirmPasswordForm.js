import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ConfirmPasswordForm = () => {
  return (
    <View style={styles.confirmPasswordParent}>
      <Text style={styles.confirmPassword}>
        <Text style={styles.confirmPasswordTxtContainer}>
          <Text style={styles.confirm}>{`confirm `}</Text>p
          <Text style={styles.confirm}>assword</Text>
        </Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.lockParent, styles.lockParentPosition]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/lock1.png")}
          />
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-41.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.eyeSlashIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eyeslash1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lockParentPosition: {
    top: 15,
    position: "absolute",
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  confirm: {
    textTransform: "capitalize",
  },
  confirmPasswordTxtContainer: {
    width: "100%",
  },
  confirmPassword: {
    fontSize: FontSize.med_size,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    width: 130,
    height: 24,
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 0.3,
    width: 343,
    height: 48,
    zIndex: 0,
  },
  frameInner: {
    marginLeft: 2,
  },
  ellipseParent: {
    marginLeft: 10,
    flexDirection: "row",
  },
  lockParent: {
    left: 12,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  eyeSlashIcon: {
    left: 313,
    zIndex: 2,
    top: 15,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 4,
  },
  confirmPasswordParent: {
    marginTop: 16,
  },
});

export default ConfirmPasswordForm;
