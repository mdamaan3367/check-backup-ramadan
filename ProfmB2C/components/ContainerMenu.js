import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ContainerMenu = ({
  onFramePressablePress,
  onFramePressablePress1,
  onFramePressablePress2,
}) => {
  return (
    <View style={[styles.navBar, styles.navFlexBox]}>
      <Pressable
        style={[styles.navBarInner, styles.navFlexBox]}
        onPress={onFramePressablePress}
      >
        <View style={styles.parentSpaceBlock}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/home24.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
      </Pressable>
      <View style={[styles.navBarChild, styles.navFlexBox]}>
        <View style={[styles.calendarTickParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/calendartick3.png")}
          />
          <Text style={[styles.bookings, styles.accountTypo]}>bookings</Text>
        </View>
      </View>
      <Pressable
        style={[styles.navBarChild, styles.navFlexBox]}
        onPress={onFramePressablePress1}
      >
        <View style={styles.navFlexBox}>
          <Image
            style={styles.home2Icon}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearuser.png")}
          />
          <Text style={[styles.account, styles.accountTypo]}>account</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.navBarChild, styles.navFlexBox]}
        onPress={onFramePressablePress2}
      >
        <Image
          style={styles.home2Icon}
          resizeMode="cover"
          source={require("../assets/textalignleft.png")}
        />
        <View style={styles.menuWrapper}>
          <Text style={[styles.menu, styles.homeTypo]}>Menu</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    color: Color.a6A6A6,
    fontWeight: "300",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  accountTypo: {
    textTransform: "capitalize",
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  home: {
    marginTop: 4,
  },
  navBarInner: {
    width: 93,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  bookings: {
    fontWeight: "700",
    color: Color.praimary,
  },
  calendarTickParent: {
    height: 53,
  },
  navBarChild: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    color: Color.a6A6A6,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  menu: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  menuWrapper: {
    width: 30,
    height: 16,
    marginTop: 4,
  },
  navBar: {
    marginLeft: -187.5,
    top: 722,
    left: "50%",
    backgroundColor: Color.whait,
    width: 375,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default ContainerMenu;
