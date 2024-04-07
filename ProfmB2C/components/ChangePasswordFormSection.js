import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ChangePasswordFormSection = ({
  passwordRequirements,
  passwordRequirementsText,
  propWidth,
}) => {
  const atLeastOneStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.frameParent}>
      <View>
        <Text style={[styles.changePassword, styles.changePasswordLayout]}>
          Change password
        </Text>
        <Text style={[styles.pleaseEnterThe, styles.atLeastOneClr]}>
          Please enter the old password and then enter the new password
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.frameContainer}>
          <View style={styles.passwordParentTransform}>
            <Text style={[styles.oldPassword, styles.passwordFlexBox]}>
              Old password
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.eyeSlashParent, styles.eyePosition]}>
                <Image
                  style={styles.eyeIconLayout}
                  resizeMode="cover"
                  source={require("../assets/eyeslash5.png")}
                />
                <View style={styles.pleaseWrapperFlexBox}>
                  <Text style={[styles.pleaseEnterThe1, styles.pleaseTypo]}>
                    Please enter the old password
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.newPasswordParent, styles.passwordParentTransform]}
          >
            <Text style={[styles.newPassword, styles.passwordFlexBox]}>
              New password
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.eyeSlashParent, styles.eyePosition]}>
                <Image
                  style={styles.eyeIconLayout}
                  resizeMode="cover"
                  source={require("../assets/eyeslash5.png")}
                />
                <View style={styles.pleaseWrapperFlexBox}>
                  <Text style={[styles.pleaseEnterThe2, styles.pleaseTypo]}>
                    Please enter the new password
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.confirmPasswordNewPasswordParent,
              styles.passwordParentTransform,
            ]}
          >
            <Text style={[styles.confirmPasswordNew, styles.passwordFlexBox]}>
              {" "}
              Confirm password New password
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.eyeSlashContainer, styles.eyePosition]}>
                <Image
                  style={styles.eyeIconLayout}
                  resizeMode="cover"
                  source={require("../assets/eyeslash5.png")}
                />
                <View
                  style={[
                    styles.pleaseEnterThePasswordAgaiWrapper,
                    styles.pleaseWrapperFlexBox,
                  ]}
                >
                  <Text style={[styles.pleaseEnterThe3, styles.pleaseTypo]}>
                    Please enter the password again
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.minimum8CharactersParent}>
          <Text style={[styles.minimum8Characters, styles.passwordFlexBox]}>
            {passwordRequirements}
          </Text>
          <Text
            style={[styles.atLeastOne, styles.passwordFlexBox, atLeastOneStyle]}
          >
            {passwordRequirementsText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changePasswordLayout: {
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    textAlign: "left",
  },
  atLeastOneClr: {
    color: Color.thacandry2,
    fontSize: FontSize.med_size,
  },
  passwordFlexBox: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  eyePosition: {
    zIndex: 1,
    flexDirection: "row",
    width: 311,
    top: 18,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  pleaseTypo: {
    color: Color.colorLightsteelblue,
    opacity: 0.5,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  passwordParentTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    alignItems: "flex-end",
  },
  pleaseWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  changePassword: {
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    color: Color.black,
    width: 175,
  },
  pleaseEnterThe: {
    width: 266,
    marginTop: 16,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    textAlign: "left",
  },
  oldPassword: {
    width: 120,
    height: 16,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontWeight: "300",
  },
  frameShadowBox: {
    zIndex: 0,
    height: 56,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  eyeIconLayout: {
    opacity: 0.5,
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterThe1: {
    textAlign: "left",
    color: Color.colorLightsteelblue,
  },
  eyeSlashParent: {
    justifyContent: "space-between",
  },
  rectangleParent: {
    backgroundColor: Color.whait,
    marginTop: 10,
    borderRadius: Border.br_3xs,
    width: 343,
    alignItems: "flex-end",
  },
  newPassword: {
    width: 120,
    height: 16,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterThe2: {
    textAlign: "left",
    color: Color.colorLightsteelblue,
  },
  newPasswordParent: {
    marginTop: 16,
  },
  confirmPasswordNew: {
    width: 218,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    height: 16,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterThe3: {
    textAlign: "right",
  },
  pleaseEnterThePasswordAgaiWrapper: {
    marginLeft: 106,
  },
  eyeSlashContainer: {
    justifyContent: "flex-end",
  },
  confirmPasswordNewPasswordParent: {
    marginTop: 16,
  },
  frameContainer: {
    alignItems: "flex-end",
  },
  minimum8Characters: {
    width: 151,
    fontWeight: "300",
    color: Color.thacandry2,
    fontSize: FontSize.med_size,
  },
  atLeastOne: {
    width: 291,
    marginTop: 4,
    fontWeight: "300",
    color: Color.thacandry2,
    fontSize: FontSize.med_size,
  },
  minimum8CharactersParent: {
    marginTop: 16,
  },
  frameGroup: {
    marginTop: 32,
  },
  frameParent: {
    top: 156,
    left: 16,
    position: "absolute",
  },
});

export default ChangePasswordFormSection;
