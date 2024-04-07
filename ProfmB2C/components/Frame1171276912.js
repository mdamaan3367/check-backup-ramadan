import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import RegularCleaning9 from "../components/RegularCleaning";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame = () => {
  const [frameContainer11Visible, setFrameContainer11Visible] = useState(false);
  const [frameContainer25Visible, setFrameContainer25Visible] = useState(false);
  const [frameContainer34Visible, setFrameContainer34Visible] = useState(false);
  const [frameContainer44Visible, setFrameContainer44Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(true);
  }, []);

  const closeFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(false);
  }, []);

  const openFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(true);
  }, []);

  const closeFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(false);
  }, []);

  const openFrameContainer34 = useCallback(() => {
    setFrameContainer34Visible(true);
  }, []);

  const closeFrameContainer34 = useCallback(() => {
    setFrameContainer34Visible(false);
  }, []);

  const openFrameContainer44 = useCallback(() => {
    setFrameContainer44Visible(true);
  }, []);

  const closeFrameContainer44 = useCallback(() => {
    setFrameContainer44Visible(false);
  }, []);

  return (
    <>
      <View style={styles.designSystemParent}>
        <View style={[styles.designSystem, styles.groupChildPosition2]}>
          <View style={[styles.frameParent, styles.parentFlexBox1]}>
            <View style={styles.parentFlexBox1}>
              <View style={[styles.frameChild, styles.frameChildLayout1]} />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-21.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-34.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-4.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-5.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.parentFlexBox1]}>
              <View style={[styles.rectangleView, styles.frameChildLayout1]} />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-22.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-35.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-41.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-51.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.parentFlexBox1]}>
              <View style={[styles.frameChild8, styles.frameChildLayout1]} />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-23.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-36.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-42.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-52.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.parentFlexBox1]}>
              <View style={[styles.frameChild14, styles.frameChildLayout1]} />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-24.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-37.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-43.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-53.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/3-1-1.png")}
          />
          <View style={[styles.rectangleParent1, styles.groupContainerFlexBox]}>
            <View style={styles.frameChild20} />
            <View style={[styles.frameChild21, styles.frameChildLayout]} />
            <View style={[styles.frameChild22, styles.frameChildLayout]} />
            <View style={[styles.frameChild23, styles.frameChildLayout]} />
            <View style={[styles.frameChild24, styles.frameChildLayout]} />
            <View style={[styles.frameChild25, styles.frameChildLayout]} />
          </View>
          <Image
            style={styles.component1Icon}
            resizeMode="cover"
            source={require("../assets/component-1.png")}
          />
          <View style={[styles.buttonMidime, styles.buttonChildLayout]}>
            <View
              style={[
                styles.property1default,
                styles.property1defaultSpaceBlock,
                property1DefaultStyle,
              ]}
              onPress={onButtonMidimePress}
            >
              <Text style={[styles.logIn, styles.logTypo1, logInStyle]}>
                {logIn}
              </Text>
            </View>
            <View
              style={[styles.property1variant2, styles.property1variantBorder1]}
            >
              <Text style={[styles.logIn1, styles.logTypo1]}>Log in</Text>
            </View>
          </View>
          <View style={[styles.buttonBig, styles.searchBorder]}>
            <View
              style={[
                styles.property1default1,
                styles.property1default1Position,
                property1Default1Style,
              ]}
              onPress={onButtonBigPress}
            >
              <View
                style={[
                  styles.property1defaultChild,
                  styles.property1defaultChildPosition,
                ]}
              />
              <Text style={[styles.logIn2, styles.logTypo, logIn1Style]}>
                {logIn}
              </Text>
            </View>
            <View
              style={[
                styles.property1variant21,
                styles.property1default1Position,
              ]}
            >
              <View
                style={[
                  styles.property1variant2Child,
                  styles.property1defaultChildPosition,
                ]}
              />
              <Text style={[styles.logIn3, styles.logTypo]}>Log in</Text>
            </View>
          </View>
          <View style={[styles.navBar, styles.navLayout]}>
            <View
              style={[styles.property1home, styles.property1homeChildFlexBox]}
            >
              <View
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home26.png")}
                  />
                  <Text style={[styles.home, styles.homeLayout]}>Home</Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings2")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={openFrameContainer11}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu2")}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1insights,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home1")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings2")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user1.png")}
                  />
                  <Text style={[styles.account1, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu2")}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1savings,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home1")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick31.png")}
                  />
                  <Text style={[styles.account1, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={openFrameContainer25}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu2")}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1account,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home1")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1accountChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/clock.png")}
                  />
                  <Text style={[styles.history, styles.text4Typo]}>
                    History
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings2")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={openFrameContainer34}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/textalignleft1.png")}
                  />
                  <Text style={[styles.home, styles.homeLayout]}>Menu</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.property1variant5,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home1")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1accountChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/clock.png")}
                  />
                  <Text style={[styles.history, styles.text4Typo]}>
                    History
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings2")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={openFrameContainer44}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu2")}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/textalignleft.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={[styles.navBarSignUp, styles.navLayout]}>
            <View
              style={[
                styles.property1home,
                styles.property1homeChildFlexBox,
                property1HomeStyle,
              ]}
            >
              <View
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.home2Parent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={home2}
                  />
                  <Text style={[styles.home, styles.homeLayout]}>Home</Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={onFramePressablePress}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={calendarTick}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={onFramePressablePress1}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={onFramePressablePress2}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1insights,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user1.png")}
                  />
                  <Text style={[styles.account1, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu")}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1savings,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick31.png")}
                  />
                  <Text style={[styles.account1, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Profile")}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu")}
              >
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <View style={styles.menuWrapper}>
                  <Text style={[styles.menu, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.property1account,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1accountChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/clock.png")}
                  />
                  <Text style={[styles.history, styles.text4Typo]}>
                    History
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Profile")}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/textalignleft1.png")}
                  />
                  <Text style={[styles.home, styles.homeLayout]}>Menu</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.property1variant5,
                styles.property1homeChildFlexBox,
              ]}
            >
              <Pressable
                style={[
                  styles.property1homeInner,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <View style={styles.groupSpaceBlock1}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/home25.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.property1accountChild,
                  styles.property1homeChildFlexBox,
                ]}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/clock.png")}
                  />
                  <Text style={[styles.history, styles.text4Typo]}>
                    History
                  </Text>
                </View>
              </View>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Bookings")}
              >
                <View style={styles.calendarTickParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/calendartick11.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    bookings
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Profile")}
              >
                <View style={styles.userParent}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/user.png")}
                  />
                  <Text style={[styles.bookings, styles.homeLayout]}>
                    account
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.property1homeChild,
                  styles.property1homeChildFlexBox,
                ]}
                onPress={() => navigation.navigate("Menu")}
              >
                <View style={[styles.userGroup, styles.groupSpaceBlock1]}>
                  <Image
                    style={styles.frameItemLayout}
                    resizeMode="cover"
                    source={require("../assets/textalignleft.png")}
                  />
                  <Text style={[styles.home1, styles.homeLayout]}>Menu</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={[styles.tapButton, styles.timeBorder]}>
            <View
              style={[styles.property1default2, styles.property1default2Layout]}
            >
              <View style={styles.property1defaultItem} />
              <View style={styles.cleaningWrapper}>
                <Text style={[styles.cleaning, styles.cleaningTypo]}>
                  cleaning
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant22,
                styles.property1default2Layout,
                property1Variant2Style,
              ]}
            >
              <View
                style={[
                  styles.property1variant2Item,
                  styles.property1variant2ShadowBox,
                  rectangleViewStyle,
                ]}
              />
              <View style={styles.cleaningWrapper}>
                <Text
                  style={[styles.cleaning1, styles.cleaningTypo, cleaningStyle]}
                >
                  {cleaning}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.time, styles.timeBorder]}>
            <View
              style={[
                styles.property1default3,
                styles.property1default3Position,
              ]}
            >
              <View
                style={[
                  styles.property1defaultInner,
                  styles.property1defaultChildPosition,
                ]}
              />
              <Text style={[styles.to0100Pm, styles.to0100Position]}>
                11:00 to 01:00 PM
              </Text>
            </View>
            <View
              style={[
                styles.property1variant23,
                styles.property1default3Position,
              ]}
            >
              <View
                style={[
                  styles.property1variant2Inner,
                  styles.property1variant2ShadowBox,
                ]}
              />
              <Text style={styles.to0100Position}>
                <Text style={styles.to0100PmContainer1}>
                  <Text style={styles.text}>{`11:00  `}</Text>
                  <Text style={styles.to}>
                    <Text style={styles.to1}>to</Text>
                  </Text>
                  <Text style={styles.pm}>
                    <Text style={styles.to}>{` `}</Text>
                    <Text style={styles.text2}>{` 01:00  `}</Text>
                    <Text style={styles.to}>PM</Text>
                  </Text>
                </Text>
              </Text>
            </View>
          </View>
          <Image
            style={[styles.profmLogo1111, styles.frameParentPosition2]}
            resizeMode="cover"
            source={require("../assets/profm-logo1-1-1-12.png")}
          />
          <View style={styles.services}>
            <View
              style={[
                styles.rectangleParent2,
                styles.property1defaultChildPosition,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameGroup, styles.childBg]}>
                <View>
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    Monthly service
                  </Text>
                  <Text
                    style={[styles.itIsA, styles.itIsAClr]}
                  >{`It is a service that is provided several times a month, on a periodic basis

`}</Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group7.png")}
                />
              </View>
              <View style={styles.groupItem} />
              <View style={[styles.groupInner, styles.groupChildPosition1]} />
              <View style={[styles.lineView, styles.groupChildPosition1]} />
              <View style={[styles.groupChild1, styles.groupChildPosition1]} />
              <View style={[styles.groupChild2, styles.groupChildPosition1]} />
              <View style={[styles.groupChild3, styles.groupChildPosition1]} />
              <View style={[styles.groupChild4, styles.groupChildPosition1]} />
              <View style={[styles.groupChild5, styles.groupChildPosition1]} />
              <View style={[styles.groupChild6, styles.groupChildPosition1]} />
              <View style={[styles.frameContainer, styles.containerPosition]}>
                <View style={[styles.frameParent1, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame.png")}
                    />
                    <Text style={[styles.cleaning2, styles.seaTypo]}>
                      cleaning
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame2.png")}
                    />
                    <Text style={[styles.cleaning2, styles.seaTypo]}>
                      Hospitality
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame3.png")}
                    />
                    <Text style={[styles.cleaning2, styles.seaTypo]}>
                      pool Maintenance
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame4.png")}
                    />
                    <Text style={[styles.electricalWorks, styles.seaTypo]}>
                      Electrical Works
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame5.png")}
                    />
                    <Text
                      style={[styles.electricalWorks, styles.seaTypo]}
                    >{`Sanitary & plumbing `}</Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame6.png")}
                    />
                    <Text style={[styles.cleaning2, styles.seaTypo]}>HVAC</Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame7.png")}
                    />
                    <Text style={[styles.electricalWorks, styles.seaTypo]}>
                      pest control
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame8.png")}
                    />
                    <Text style={[styles.electricalWorks, styles.seaTypo]}>
                      landscaping
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group8.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent2, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon}
                      resizeMode="cover"
                      source={require("../assets/frame9.png")}
                    />
                    <Text style={[styles.electricalWorks, styles.seaTypo]}>
                      Carpentry
                    </Text>
                  </View>
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group9.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.designSystemChild, styles.childBg]} />
          <View style={[styles.component2, styles.buttonChildLayout]}>
            <View
              style={[styles.property1frame1171276794, styles.iconPosition]}
            >
              <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                Pump maintenance
              </Text>
              <View style={[styles.label, styles.labelLayout]} />
            </View>
            <View
              style={[styles.property1frame1171276793, styles.iconPosition]}
            >
              <Text style={[styles.pumpMaintenance1, styles.pumpLayout]}>
                Pump maintenance
              </Text>
              <Image
                style={styles.labelLayout}
                resizeMode="cover"
                source={require("../assets/label.png")}
              />
            </View>
          </View>
          <View style={[styles.serviceType, styles.serviceTypeLayout]}>
            <View
              style={[
                styles.property1group238775,
                styles.property1variantLayout1,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent19, styles.componentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the service you want
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[styles.property1variant3, styles.property1variantLayout1]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.pumpMaintenance2, styles.homeLayout]}>
                    Pump maintenance
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.property1variant52,
                styles.property1variantLayout1,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.pumpMaintenance2, styles.homeLayout]}>
                    Maintaining lighting devices
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[styles.property1variant7, styles.property1variantLayout1]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.pumpMaintenance2, styles.homeLayout]}>
                    Maintenance safety equipment
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.property1group238776,
                styles.property1variantLayout,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the service you want
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Pump maintenance
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component3, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintaining lighting devices
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component4, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintenance safety equipment
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
            <View
              style={[styles.property1variant4, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the service you want
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance1, styles.pumpLayout]}>
                  Pump maintenance
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
              <View style={[styles.component31, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintaining lighting devices
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintenance safety equipment
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
            <View
              style={[styles.property1variant6, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the service you want
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Pump maintenance
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component31, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance1, styles.pumpLayout]}>
                  Maintaining lighting devices
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintenance safety equipment
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
            <View
              style={[styles.property1variant8, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Service type
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the service you want
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Pump maintenance
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component31, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance, styles.pumpLayout]}>
                  Maintaining lighting devices
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={[styles.pumpMaintenance1, styles.pumpLayout]}>
                  Maintenance safety equipment
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.swimmingPoolSize, styles.serviceTypeLayout]}>
            <View
              style={[
                styles.property1group238775,
                styles.property1variantLayout1,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the approximate size of the pool
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[styles.property1variant3, styles.property1variantLayout1]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.small2Container, styles.homeLayout]}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`small `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>2</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.property1variant52,
                styles.property1variantLayout1,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.small2Container, styles.homeLayout]}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`medium `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> )</Text>
                    </Text>
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[styles.property1variant7, styles.property1variantLayout1]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent20, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.small2Container, styles.homeLayout]}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`big `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> m to</Text>
                      <Text style={styles.text4Typo}>{` 50 `}</Text>
                      <Text style={styles.to}>m )</Text>
                    </Text>
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.property1group238776,
                styles.property1variantLayout,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the approximate size of the pool
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`small `}</Text>
                    </Text>
                    <Text style={styles.to10Typo}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>2</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component3, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`medium `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component4, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`big `}</Text>
                    </Text>
                    <Text style={styles.to10Typo}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>50</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
            <View
              style={[styles.property1variant6, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the approximate size of the pool
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`small `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>2</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component3, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`medium `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> )</Text>
                    </Text>
                  </Text>
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`big `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>{`50 `}</Text>
                      <Text style={styles.to}>m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
            <View
              style={[styles.property1variant8, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the approximate size of the pool
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>small</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{` ( `}</Text>
                      <Text style={styles.text4Typo}>{`2 `}</Text>
                      <Text style={styles.to}>{`m to `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component31, styles.componentPosition1]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`medium `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`big `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> m to</Text>
                      <Text style={styles.text4Typo}>{` 50 `}</Text>
                      <Text style={styles.to}>m )</Text>
                    </Text>
                  </Text>
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
            </View>
            <View
              style={[styles.property1variant4, styles.property1variantLayout]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.frameParent23, styles.frameParentPosition1]}>
                <View>
                  <Text style={[styles.serviceType1, styles.serviceTypo2]}>
                    Swimming pool size
                  </Text>
                  <Text style={[styles.chooseTheService, styles.serviceTypo1]}>
                    Choose the approximate size of the pool
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group.png")}
                />
              </View>
              <View
                style={[
                  styles.property1group238776Item,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Inner,
                  styles.property1group238776Position,
                ]}
              />
              <View
                style={[
                  styles.property1group238776Child1,
                  styles.property1group238776Position,
                ]}
              />
              <View style={[styles.component21, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small1}>{`small `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>2</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <Image
                  style={styles.labelLayout}
                  resizeMode="cover"
                  source={require("../assets/label.png")}
                />
              </View>
              <View style={[styles.component3, styles.componentPosition]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`medium `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>10</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}> )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
              <View style={[styles.component41, styles.componentPosition1]}>
                <Text style={styles.pumpLayout}>
                  <Text style={styles.to0100PmContainer1}>
                    <Text style={styles.to}>
                      <Text style={styles.small3}>{`big `}</Text>
                    </Text>
                    <Text style={[styles.mTo10M, styles.to10Typo]}>
                      <Text style={styles.to}>{`( `}</Text>
                      <Text style={styles.text4Typo}>25</Text>
                      <Text style={styles.to}>{` m to `}</Text>
                      <Text style={styles.text4Typo}>50</Text>
                      <Text style={styles.to}> m )</Text>
                    </Text>
                  </Text>
                </Text>
                <View style={[styles.label, styles.labelLayout]} />
              </View>
            </View>
          </View>
          <Image
            style={[styles.designSystemItem, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-194.png")}
          />
          <View style={[styles.property1defaultParent, styles.searchBorder]}>
            <View
              style={[styles.property1default4, styles.property1default4Layout]}
            >
              <View style={[styles.frameParent35, styles.frameParentPosition]}>
                <Image
                  style={styles.frameIcon9}
                  resizeMode="cover"
                  source={require("../assets/frame51.png")}
                />
                <Text style={[styles.agreeToTerms, styles.agreeTypo]}>
                  agree to terms and conditions
                </Text>
              </View>
              <View style={[styles.buttonBig1, styles.buttonPosition]}>
                <View
                  style={[
                    styles.property1defaultChild,
                    styles.property1defaultChildPosition,
                  ]}
                />
                <Text style={[styles.logIn2, styles.logTypo]}>Continue</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant24,
                styles.property1default4Layout,
              ]}
            >
              <View style={[styles.frameParent36, styles.frameParentPosition]}>
                <Image
                  style={styles.frameIcon9}
                  resizeMode="cover"
                  source={require("../assets/frame12.png")}
                />
                <Text style={[styles.agreeToTerms1, styles.agreeTypo]}>
                  agree to terms and conditions
                </Text>
              </View>
              <Pressable
                style={styles.buttonPosition}
                onPress={() => navigation.navigate("YourAddressLocation51")}
              >
                <View
                  style={[
                    styles.property1defaultChild,
                    styles.property1defaultChildPosition,
                  ]}
                />
                <Text style={[styles.logIn2, styles.logTypo]}>Continue</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.buttonSmall, styles.buttonSmallLayout]}>
            <View
              style={[styles.property1default5, styles.property1default5Layout]}
            >
              <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
            </View>
            <View
              style={[
                styles.property1variant25,
                styles.property1default5Layout,
              ]}
            >
              <Text style={[styles.decline, styles.acceptTypo]}>Decline</Text>
            </View>
          </View>
          <View
            style={[styles.property1defaultGroup, styles.buttonChildLayout]}
          >
            <View
              style={[styles.property1default6, styles.property1default6Layout]}
            >
              <View
                style={[styles.property1defaultChild1, styles.childBorder]}
              />
              <View style={styles.parent}>
                <Text style={[styles.text53, styles.text53Typo]}>العربية</Text>
                <Text style={[styles.arabic, styles.text53Typo]}>Arabic</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant26,
                styles.property1default6Layout,
              ]}
            >
              <View
                style={[styles.property1variant2Child1, styles.childBorder]}
              />
              <View style={styles.parent}>
                <Text style={[styles.text53, styles.text53Typo]}>English</Text>
                <Text style={[styles.arabic, styles.text53Typo]}>
                  الإنجليزية
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.property1defaultContainer,
              styles.property1defaultParentLayout,
            ]}
          >
            <Image
              style={[styles.property1defaultIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/group-238936.png")}
            />
            <Image
              style={[styles.property1variant2Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/property-1variant2.png")}
            />
          </View>
          <View
            style={[
              styles.property1defaultParent1,
              styles.property1defaultParentLayout,
            ]}
          >
            <Image
              style={[styles.property1defaultIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/property-1default.png")}
            />
            <Image
              style={[styles.property1variant2Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/property-1variant21.png")}
            />
          </View>
          <View
            style={[
              styles.property1defaultParent2,
              styles.property1defaultParentLayout,
            ]}
          >
            <Image
              style={[styles.property1defaultIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/property-1default1.png")}
            />
            <Image
              style={[styles.property1variant2Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/property-1variant22.png")}
            />
          </View>
          <View style={[styles.search, styles.searchBorder]}>
            <View
              style={[
                styles.property1default7,
                styles.property1variantBorder,
                property1Default2Style,
              ]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={fiRrZoomOut}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Sea</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant27, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>{`Search `}</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant11, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>{`Search `}</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant231,
                styles.property1variantBorder,
              ]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>{`Search `}</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant32, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Search fo</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant12, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Search fo</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant221,
                styles.property1variantBorder,
              ]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Search fo</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant42, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text
                  style={[styles.sea, styles.seaTypo]}
                >{`Search for , `}</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant13, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text
                  style={[styles.sea, styles.seaTypo]}
                >{`Search for , `}</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant211,
                styles.property1variantBorder,
              ]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text
                  style={[styles.sea, styles.seaTypo]}
                >{`Search for , `}</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant54, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , ser
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant14, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , ser
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant20, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , ser
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant62, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant15, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant19, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant16, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service ty
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant18, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service ty
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant17, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , service type
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant72, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>
                  Search for , ser
                </Text>
              </View>
            </View>
            <View
              style={[styles.property1variant82, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Search for ,</Text>
              </View>
            </View>
            <View
              style={[styles.property1variant9, styles.property1variantBorder]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>{`Search `}</Text>
              </View>
            </View>
            <View
              style={[
                styles.property1variant131,
                styles.property1variantBorder,
              ]}
            >
              <View style={[styles.fiRrZoomOutParent, styles.parentFlexBox1]}>
                <Image
                  style={styles.fiRrZoomOutIcon}
                  resizeMode="cover"
                  source={require("../assets/firrzoomout11.png")}
                />
                <Text style={[styles.sea, styles.seaTypo]}>Sea</Text>
              </View>
            </View>
          </View>
          <View style={[styles.numberOfMonths, styles.timeBorder]}>
            <View
              style={[styles.property1default8, styles.property1default8Layout]}
            >
              <View
                style={[
                  styles.property1defaultInner,
                  styles.property1defaultChildPosition,
                ]}
              />
              <Text style={[styles.text55, styles.textPosition1]}>1</Text>
            </View>
            <View
              style={[
                styles.property1variant28,
                styles.property1default8Layout,
              ]}
            >
              <View
                style={[
                  styles.property1variant2Child2,
                  styles.property1defaultChildPosition,
                ]}
              />
              <Text style={[styles.text56, styles.textPosition1]}>1</Text>
            </View>
          </View>
          <View style={styles.frameParent37}>
            <Image
              style={[styles.frameChild26, styles.buttonSmallLayout]}
              resizeMode="cover"
              source={require("../assets/frame-1171276082.png")}
            />
            <Image
              style={[styles.frameChild27, styles.childLayout1]}
              resizeMode="cover"
              source={require("../assets/frame-1171276084.png")}
            />
          </View>
          <View style={[styles.heroSeciton1, styles.heroLayout]}>
            <View
              style={[styles.property1default9, styles.property1defaultLayout]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.group, styles.containerPosition]}>
                  <Text style={styles.text57}>30%</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild7Layout]}
                  >
                    <View
                      style={[styles.groupChild7, styles.groupChildPosition]}
                    />
                    <Text
                      style={[
                        styles.todaysSpecial,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Today’s Special
                    </Text>
                  </View>
                  <Text style={[styles.getADiscount, styles.getTypo]}>
                    Get a discount for each cleaning order valid for today only
                  </Text>
                </View>
                <Image
                  style={[styles.rectangleIcon, styles.frameChild31Layout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436431.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-11712760841.png")}
              />
            </View>
            <View
              style={[styles.property1variant33, styles.property1defaultLayout]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.container, styles.containerPosition]}>
                  <Text style={styles.text57}>20%</Text>
                  <View
                    style={[styles.rectangleParent6, styles.groupChild8Layout]}
                  >
                    <View
                      style={[styles.groupChild8, styles.groupChild8Layout]}
                    />
                    <Text
                      style={[
                        styles.ramadanKareem,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Ramadan Kareem
                    </Text>
                  </View>
                  <Text
                    style={[styles.whenContractingFor, styles.getTypo]}
                  >{`When contracting for the month of Ramadan, you get a discount `}</Text>
                </View>
                <Image
                  style={[styles.frameChild29, styles.childLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436432.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-11712760842.png")}
              />
            </View>
            <View
              style={[
                styles.property1default10,
                styles.property1defaultLayout,
                property1Default3Style,
              ]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.group, styles.containerPosition]}>
                  <Text style={styles.text57}>50%</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild7Layout]}
                  >
                    <View
                      style={[styles.groupChild7, styles.groupChildPosition]}
                    />
                    <Text
                      style={[
                        styles.todaysSpecial,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Today’s Special
                    </Text>
                  </View>
                  <Text style={[styles.getADiscount1, styles.getTypo]}>
                    Get a discount on every furniture cleaning and repair order
                    valid for today only
                  </Text>
                </View>
                <Image
                  style={styles.serviceMaintenanceWorkerRepIcon}
                  resizeMode="cover"
                  source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
                />
                <Image
                  style={[styles.frameChild31, styles.frameChild31Layout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436430.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-1171276084.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.frameIcon11, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/frame10.png")}
          />
          <View style={[styles.services1, styles.servicesLayout]}>
            <View
              style={[styles.property1oneTimeService, styles.servicesShadowBox]}
            >
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  One time service
                </Text>
                <Text
                  style={[styles.oneTimeHourlyReservation, styles.serviceTypo1]}
                >
                  One-time hourly reservation service
                </Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={require("../assets/rectangle-4369.png")}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={styles.property1monthlyShadowBox}>
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  Monthly service
                </Text>
                <Text
                  style={[styles.periodicServiceWith, styles.serviceTypo1]}
                >{`Periodic service with several visits monthly.
`}</Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={require("../assets/rectangle-43691.png")}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={styles.property1yearlyShadowBox}>
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  Yearly service
                </Text>
                <Text
                  style={[styles.oneTimeHourlyReservation, styles.serviceTypo1]}
                >{`Multi-visit yearly service available through contract.
`}</Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={require("../assets/rectangle-43692.png")}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View
              style={[styles.property1frame1171276910, styles.iconPosition]}
            >
              <View style={[styles.services2, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    One time service
                  </Text>
                  <Text
                    style={[
                      styles.oneTimeHourlyReservation,
                      styles.serviceTypo1,
                    ]}
                  >
                    One-time hourly reservation service
                  </Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-4369.png")}
                />
                <Image
                  style={[styles.groupIcon29, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupParent, styles.groupSpaceBlock]}>
                <Pressable
                  style={[styles.groupPressable, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("OneTimeService5")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame11.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent9, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("SanitaryPlumbing1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame13.png")}
                    />
                    <Text
                      style={[styles.sanitaryPlumbing1, styles.seaTypo]}
                    >{`Sanitary & plumbing `}</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent10, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("PoolMaintenance1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame15.png")}
                    />
                    <Text style={[styles.poolMaintenance1, styles.seaTypo]}>
                      <Text style={styles.to0100PmContainer1}>
                        {`Pool `}
                        <Text style={styles.m10}>M</Text>aintenance
                      </Text>
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent11, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("PestControl1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame19.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      pest control
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent12, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("CarpentryWork1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame20.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      Carpentry
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent13,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("ElectricalWorks1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame21.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      <Text style={styles.to0100PmContainer1}>
                        {`Electrical `}
                        <Text style={styles.m10}>W</Text>orks
                      </Text>
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent14,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("LANDSCAPING1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame22.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      landscaping
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent15,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("HospitalityServices2")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame23.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      Hospitality
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent16,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("HVAC5")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <View
              style={[styles.property1frame1171276912, styles.iconPosition]}
            >
              <View style={[styles.services3, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    Monthly service
                  </Text>
                  <Text
                    style={[styles.periodicServiceWith, styles.serviceTypo1]}
                  >{`Periodic service with several visits monthly.
`}</Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-43691.png")}
                />
                <Image
                  style={[styles.groupIcon26, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupSpaceBlock]}>
                <Pressable
                  style={styles.groupParentLayout}
                  onPress={() => navigation.navigate("OneTimeService4")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame11.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent18, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("HVAC4")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <View
              style={[styles.property1frame1171276913, styles.iconPosition]}
            >
              <View style={[styles.services4, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    Yearly service
                  </Text>
                  <Text
                    style={[
                      styles.oneTimeHourlyReservation,
                      styles.serviceTypo1,
                    ]}
                  >{`Multi-visit yearly service available through contract.
`}</Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-43692.png")}
                />
                <Image
                  style={[styles.groupIcon26, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupSpaceBlock]}>
                <Pressable
                  style={styles.groupParentLayout}
                  onPress={() => navigation.navigate("OneTimeService1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame11.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent18, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("HVAC")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.heroSeciton2, styles.heroLayout]}>
            <View
              style={[styles.property1default9, styles.property1defaultLayout]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.group, styles.containerPosition]}>
                  <Text style={styles.text57}>30%</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild7Layout]}
                  >
                    <View
                      style={[styles.groupChild7, styles.groupChildPosition]}
                    />
                    <Text
                      style={[
                        styles.todaysSpecial,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Today’s Special
                    </Text>
                  </View>
                  <Text style={[styles.getADiscount, styles.getTypo]}>
                    Get a discount for each cleaning order valid for today only
                  </Text>
                </View>
                <Image
                  style={[styles.rectangleIcon, styles.frameChild31Layout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436431.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-11712760841.png")}
              />
            </View>
            <View
              style={[styles.property1variant33, styles.property1defaultLayout]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.container, styles.containerPosition]}>
                  <Text style={styles.text57}>20%</Text>
                  <View
                    style={[styles.rectangleParent6, styles.groupChild8Layout]}
                  >
                    <View
                      style={[styles.groupChild8, styles.groupChild8Layout]}
                    />
                    <Text
                      style={[
                        styles.ramadanKareem,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Ramadan Kareem
                    </Text>
                  </View>
                  <Text
                    style={[styles.whenContractingFor, styles.getTypo]}
                  >{`When contracting for the month of Ramadan, you get a discount `}</Text>
                </View>
                <Image
                  style={[styles.frameChild29, styles.childLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436432.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-11712760842.png")}
              />
            </View>
            <View
              style={[styles.property1default10, styles.property1defaultLayout]}
            >
              <View style={styles.rectangleParentShadowBox}>
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.groupChildPosition2,
                  ]}
                  locations={[0, 1]}
                  colors={["#004c77", "#0386cf"]}
                  useAngle={true}
                  angle={90}
                />
                <View style={[styles.group, styles.containerPosition]}>
                  <Text style={styles.text57}>50%</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild7Layout]}
                  >
                    <View
                      style={[styles.groupChild7, styles.groupChildPosition]}
                    />
                    <Text
                      style={[
                        styles.todaysSpecial,
                        styles.todaysSpecialPosition,
                      ]}
                    >
                      Today’s Special
                    </Text>
                  </View>
                  <Text style={[styles.getADiscount1, styles.getTypo]}>
                    Get a discount on every furniture cleaning and repair order
                    valid for today only
                  </Text>
                </View>
                <Image
                  style={styles.serviceMaintenanceWorkerRepIcon}
                  resizeMode="cover"
                  source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
                />
                <Image
                  style={[styles.frameChild31, styles.frameChild31Layout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-436430.png")}
                />
              </View>
              <Image
                style={[styles.property1defaultChild3, styles.childLayout1]}
                resizeMode="cover"
                source={require("../assets/frame-1171276084.png")}
              />
            </View>
          </View>
          <View style={[styles.servicesSignUp, styles.servicesLayout]}>
            <View
              style={[
                styles.property1oneTimeService1,
                styles.servicesShadowBox,
                property1OneTimeServiceStyle,
              ]}
            >
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  {oneTimeService}
                </Text>
                <Text
                  style={[
                    styles.oneTimeHourlyReservation,
                    styles.serviceTypo1,
                    oneTimeHourlyReservationStyle,
                  ]}
                >
                  {oneTimeHourlyReservationS}
                </Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={rectangle4369}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={styles.property1monthlyShadowBox}>
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  Monthly service
                </Text>
                <Text
                  style={[styles.periodicServiceWith, styles.serviceTypo1]}
                >{`Periodic service with several visits monthly.
`}</Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={require("../assets/rectangle-43691.png")}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={styles.property1yearlyShadowBox}>
              <View
                style={[styles.property1oneTimeServiceChild, styles.childBg]}
              />
              <View
                style={[styles.oneTimeServiceParent, styles.containerPosition]}
              >
                <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                  Yearly service
                </Text>
                <Text
                  style={[styles.oneTimeHourlyReservation, styles.serviceTypo1]}
                >{`Multi-visit yearly service available through contract.
`}</Text>
              </View>
              <Image
                style={styles.property1oneTimeServiceItem}
                resizeMode="cover"
                source={require("../assets/rectangle-43692.png")}
              />
              <Image
                style={[styles.groupIcon26, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View
              style={[styles.property1frame1171276910, styles.iconPosition]}
            >
              <View style={[styles.services5, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    One time service
                  </Text>
                  <Text
                    style={[
                      styles.oneTimeHourlyReservation,
                      styles.serviceTypo1,
                    ]}
                  >
                    One-time hourly reservation service
                  </Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-4369.png")}
                />
                <Image
                  style={[styles.groupIcon26, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupParent, styles.groupSpaceBlock]}>
                <Pressable
                  style={[styles.groupPressable, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("OneTimeService")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame25.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent9, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("SanitaryPlumbing")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame26.png")}
                    />
                    <Text
                      style={[styles.sanitaryPlumbing1, styles.seaTypo]}
                    >{`Sanitary & plumbing `}</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent10, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("PoolMaintenance")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame27.png")}
                    />
                    <Text style={[styles.poolMaintenance1, styles.seaTypo]}>
                      <Text style={styles.to0100PmContainer1}>
                        {`Pool `}
                        <Text style={styles.m10}>M</Text>aintenance
                      </Text>
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent11, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("PestControl")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame28.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      pest control
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent12, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("CarpentryWork")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame29.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      Carpentry
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent13,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("ElectricalWorks")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame21.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      <Text style={styles.to0100PmContainer1}>
                        {`Electrical `}
                        <Text style={styles.m10}>W</Text>orks
                      </Text>
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent14,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("LANDSCAPING")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame30.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      landscaping
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent15,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("HospitalityServices")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame23.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      Hospitality
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[
                    styles.rectangleParent16,
                    styles.rectangleParentPosition,
                  ]}
                  onPress={() => navigation.navigate("HVAC3")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <View
              style={[styles.property1frame1171276912, styles.iconPosition]}
            >
              <View style={[styles.services6, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    Monthly service
                  </Text>
                  <Text
                    style={[styles.periodicServiceWith, styles.serviceTypo1]}
                  >{`Periodic service with several visits monthly.
`}</Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-43691.png")}
                />
                <Image
                  style={[styles.groupIcon26, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupSpaceBlock]}>
                <Pressable
                  style={styles.groupParentLayout}
                  onPress={() => navigation.navigate("OneTimeService3")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame25.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent18, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("HVAC2")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <View
              style={[styles.property1frame1171276913, styles.iconPosition]}
            >
              <View style={[styles.services7, styles.servicesShadowBox]}>
                <View
                  style={[styles.property1oneTimeServiceChild, styles.childBg]}
                />
                <View
                  style={[
                    styles.oneTimeServiceParent,
                    styles.containerPosition,
                  ]}
                >
                  <Text style={[styles.monthlyService, styles.serviceTypo2]}>
                    Yearly service
                  </Text>
                  <Text
                    style={[
                      styles.oneTimeHourlyReservation,
                      styles.serviceTypo1,
                    ]}
                  >{`Multi-visit yearly service available through contract.
`}</Text>
                </View>
                <Image
                  style={styles.property1oneTimeServiceItem}
                  resizeMode="cover"
                  source={require("../assets/rectangle-43692.png")}
                />
                <Image
                  style={[styles.groupIcon26, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group10.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupSpaceBlock]}>
                <Pressable
                  style={styles.groupParentLayout}
                  onPress={() => navigation.navigate("OneTimeService2")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame25.png")}
                    />
                    <Text style={styles.pestControl1Typo}>
                      Cleaning service
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.rectangleParent18, styles.groupParentLayout]}
                  onPress={() => navigation.navigate("HVAC1")}
                >
                  <View
                    style={[styles.groupChild10, styles.groupParentLayout]}
                  />
                  <View
                    style={[styles.frameParent38, styles.frameParentFlexBox]}
                  >
                    <Image
                      style={styles.frameIcon12}
                      resizeMode="cover"
                      source={require("../assets/frame24.png")}
                    />
                    <Text
                      style={[styles.pestControl1, styles.pestControl1Typo]}
                    >
                      HVAC
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent40, styles.groupChild39Layout]}>
            <View style={[styles.groupChild39, styles.groupChild39Layout]} />
            <View style={[styles.completedParent, styles.parentLayout]}>
              <Text style={[styles.completed, styles.textLayout]}>
                Completed
              </Text>
              <View style={[styles.parent5, styles.textPosition]}>
                <Text style={[styles.text63, styles.textTypo1]}>100</Text>
                <View style={styles.encapsulatedGroup}>
                  <View
                    style={[
                      styles.rectangleParent41,
                      styles.groupChildPosition2,
                    ]}
                  >
                    <View
                      style={[styles.groupChild40, styles.groupChildPosition2]}
                    />
                    <View style={[styles.groupChild41, styles.childLayout]} />
                  </View>
                </View>
                <Text style={[styles.text64, styles.textTypo]}>75%</Text>
              </View>
            </View>
            <View style={[styles.incompleteParent, styles.parentLayout]}>
              <Text style={[styles.incomplete, styles.textLayout]}>
                Incomplete
              </Text>
              <Text style={[styles.text65, styles.textTypo1]}>15</Text>
              <View style={[styles.encapsulatedGroup1, styles.textPosition]}>
                <View
                  style={[styles.rectangleParent41, styles.groupChildPosition2]}
                >
                  <View
                    style={[styles.groupChild40, styles.groupChildPosition2]}
                  />
                  <View style={styles.groupChild43} />
                </View>
              </View>
              <Text style={[styles.text66, styles.textTypo]}>24%</Text>
            </View>
            <Text
              style={[styles.allServicesProvidedContainer, styles.textLayout]}
            >
              <Text style={styles.to0100PmContainer1}>
                <Text
                  style={styles.allServicesProvided}
                >{`All services provided `}</Text>
                <Text style={styles.textTypo1}>(All Projects )</Text>
              </Text>
            </Text>
            <Image
              style={[styles.groupIcon38, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer11Visible}>
        <View style={styles.frameContainer11Overlay}>
          <Pressable
            style={styles.frameContainer11Bg}
            onPress={closeFrameContainer11}
          />
          <RegularCleaning9 onClose={closeFrameContainer11} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer25Visible}>
        <View style={styles.frameContainer25Overlay}>
          <Pressable
            style={styles.frameContainer25Bg}
            onPress={closeFrameContainer25}
          />
          <RegularCleaning9 onClose={closeFrameContainer25} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer34Visible}>
        <View style={styles.frameContainer34Overlay}>
          <Pressable
            style={styles.frameContainer34Bg}
            onPress={closeFrameContainer34}
          />
          <RegularCleaning9 onClose={closeFrameContainer34} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer44Visible}>
        <View style={styles.frameContainer44Overlay}>
          <Pressable
            style={styles.frameContainer44Bg}
            onPress={closeFrameContainer44}
          />
          <RegularCleaning9 onClose={closeFrameContainer44} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildPosition2: {
    left: 0,
    position: "absolute",
  },
  parentFlexBox1: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameChildLayout1: {
    width: 51,
    borderRadius: Border.br_xl,
    height: 24,
  },
  frameItemLayout: {
    width: 24,
    height: 24,
  },
  iconPosition1: {
    top: 97,
    position: "absolute",
  },
  groupContainerFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  frameChildLayout: {
    marginLeft: 12.15,
    height: 42,
    width: 94,
  },
  buttonChildLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  property1defaultSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    height: 48,
    width: 220,
    marginLeft: -123,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  logTypo1: {
    width: 150,
    fontSize: FontSize.size_base,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
  },
  property1variantBorder1: {
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
  },
  searchBorder: {
    width: 383,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1default1Position: {
    marginLeft: -171.5,
    width: 343,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  property1defaultChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  logTypo: {
    lineHeight: 44,
    letterSpacing: 0.6,
    left: "20.7%",
    width: "58.31%",
    fontWeight: "600",
    textTransform: "capitalize",
    top: "25%",
    height: "50%",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navLayout: {
    height: 381,
    width: 411,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1homeChildFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  homeLayout: {
    lineHeight: 16,
    textAlign: "left",
  },
  groupSpaceBlock1: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text4Typo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  timeBorder: {
    height: 124,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1default2Layout: {
    width: 132,
    height: 32,
    left: 20,
    position: "absolute",
  },
  cleaningTypo: {
    width: 115,
    height: 16,
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
  },
  property1variant2ShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  property1default3Position: {
    width: 117,
    marginLeft: -58.5,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  to0100Position: {
    left: "0.85%",
    top: "18.75%",
    width: "98.29%",
    height: "62.5%",
    fontSize: FontSize.med_size,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameParentPosition2: {
    left: "50%",
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.colorAliceblue_200,
    position: "absolute",
  },
  serviceTypo2: {
    width: 120,
    height: 16,
    textAlign: "left",
    fontWeight: "600",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  itIsAClr: {
    color: Color.grayBlack,
    fontWeight: "300",
  },
  groupChildPosition1: {
    left: "4.61%",
    right: "4.58%",
    width: "90.82%",
    borderTopWidth: 0.5,
    height: "0.09%",
    borderColor: Color.colorDarkgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  containerPosition: {
    left: 16,
    position: "absolute",
  },
  frameParentLayout: {
    width: 311,
    height: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  seaTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.med_size,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  iconPosition: {
    left: 20,
    position: "absolute",
  },
  pumpLayout: {
    width: 168,
    height: 16,
    textAlign: "left",
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
  },
  labelLayout: {
    marginLeft: 127,
    height: 14,
    width: 14,
    borderRadius: Border.br_3xs,
  },
  serviceTypeLayout: {
    height: 1384,
    width: 383,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1variantLayout1: {
    height: 68,
    left: 20,
    width: 343,
    position: "absolute",
  },
  componentPosition1: {
    marginLeft: -155.5,
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  serviceTypo1: {
    lineHeight: 18,
    color: Color.grayBlack,
    fontWeight: "300",
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParentPosition1: {
    left: "4.66%",
    right: "4.66%",
    width: "90.67%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  property1variantLayout: {
    height: 212,
    left: 20,
    width: 343,
    position: "absolute",
  },
  property1group238776Position: {
    height: "0.24%",
    left: "4.61%",
    right: "4.58%",
    width: "90.82%",
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  componentPosition: {
    right: "5.25%",
    width: "90.09%",
    height: "7.55%",
    left: "4.66%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  to10Typo: {
    fontSize: FontSize.size_3xs,
    color: Color.grayBlack,
  },
  property1default4Layout: {
    height: 180,
    left: 20,
    width: 343,
    position: "absolute",
  },
  frameParentPosition: {
    right: "38.48%",
    width: "61.52%",
    left: "0%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  agreeTypo: {
    textDecoration: "underline",
    marginLeft: 8,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  buttonPosition: {
    top: "73.33%",
    height: "26.67%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonSmallLayout: {
    height: 140,
    overflow: "hidden",
  },
  property1default5Layout: {
    paddingHorizontal: Padding.p_81xl,
    height: 40,
    width: 144,
    left: 20,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  acceptTypo: {
    width: 122,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    height: 24,
  },
  property1default6Layout: {
    height: 93,
    width: 160,
    left: 20,
    position: "absolute",
  },
  childBorder: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  text53Typo: {
    width: 72,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    height: 16,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
  },
  property1defaultParentLayout: {
    height: 108,
    width: 64,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1variantBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_5xs,
    borderColor: Color.gray,
    borderWidth: 0.5,
    left: 20,
    width: 343,
    borderStyle: "solid",
    overflow: "hidden",
    position: "absolute",
  },
  property1default8Layout: {
    width: 40,
    height: 32,
    left: 20,
    position: "absolute",
  },
  textPosition1: {
    left: "20%",
    top: "12.5%",
    width: "60%",
    height: "75%",
    fontSize: FontSize.med_size,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  childLayout1: {
    width: 27,
    height: 7,
  },
  heroLayout: {
    height: 605,
    width: 387,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  property1defaultLayout: {
    height: 175,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  groupChild7Layout: {
    width: 123,
    height: 24,
  },
  groupChildPosition: {
    backgroundColor: Color.colorGainsboro_300,
    opacity: 0.5,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  todaysSpecialPosition: {
    left: 5,
    top: 4,
    height: 16,
    fontWeight: "300",
    display: "flex",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    alignItems: "center",
    position: "absolute",
  },
  getTypo: {
    fontSize: FontSize.size_4xs,
    marginTop: 8,
    fontWeight: "300",
    textAlign: "left",
    display: "flex",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    height: 24,
  },
  frameChild31Layout: {
    width: 139,
    height: 160,
    position: "absolute",
  },
  groupChild8Layout: {
    width: 135,
    height: 24,
  },
  childLayout: {
    width: 148,
    position: "absolute",
  },
  servicesLayout: {
    height: 1278,
    width: 383,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  servicesShadowBox: {
    elevation: 15,
    shadowRadius: 15,
    height: 86,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 343,
  },
  groupIconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  groupSpaceBlock: {
    marginTop: 16,
    width: 343,
  },
  groupParentLayout: {
    height: 64,
    width: 168,
  },
  pestControl1Typo: {
    width: 90,
    marginLeft: 8,
    color: Color.black,
    height: 16,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.med_size,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  rectangleParentPosition: {
    left: 175,
    height: 64,
    width: 168,
    position: "absolute",
  },
  groupChild39Layout: {
    height: 133,
    width: 343,
    position: "absolute",
  },
  parentLayout: {
    width: 324,
    right: 9,
    height: 16,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 25,
    fontSize: FontSize.med_size,
    display: "flex",
    alignItems: "center",
  },
  textPosition: {
    top: 4,
    position: "absolute",
  },
  textTypo1: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  textTypo: {
    textAlign: "right",
    lineHeight: 9,
    height: 8,
    color: Color.praimary,
    fontSize: FontSize.med_size,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
  },
  frameChild: {
    height: 24,
    backgroundColor: Color.praimary,
  },
  frameItem: {
    marginLeft: -10,
  },
  rectangleView: {
    backgroundColor: "#57aaa9",
    height: 24,
  },
  rectangleGroup: {
    marginLeft: 30,
  },
  frameChild8: {
    backgroundColor: Color.ternary,
    height: 24,
  },
  frameChild14: {
    backgroundColor: "#d3e2cf",
    height: 24,
  },
  frameParent: {
    marginLeft: -314,
    top: 41,
    left: "50%",
    position: "absolute",
  },
  icon: {
    right: 1968,
    width: 250,
    height: 104,
  },
  frameChild20: {
    backgroundColor: Color.red,
    height: 42,
    width: 94,
  },
  frameChild21: {
    backgroundColor: Color.praimary1,
  },
  frameChild22: {
    backgroundColor: Color.whait,
  },
  frameChild23: {
    backgroundColor: Color.grayBlack,
  },
  frameChild24: {
    backgroundColor: Color.black,
  },
  frameChild25: {
    backgroundColor: Color.gray,
  },
  rectangleParent1: {
    left: 2054,
    width: 200,
    top: 97,
    position: "absolute",
  },
  component1Icon: {
    left: 46,
    borderRadius: 4,
    height: 401,
    width: 111,
    top: 1595,
    overflow: "hidden",
    position: "absolute",
  },
  logIn: {
    color: Color.whait,
  },
  property1default: {
    top: 20,
    backgroundColor: Color.praimary1,
  },
  logIn1: {
    color: Color.praimary1,
  },
  property1variant2: {
    top: 88,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    height: 48,
    width: 220,
    marginLeft: -123,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  buttonMidime: {
    top: 1386,
    width: 286,
    height: 156,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    left: 30,
    overflow: "hidden",
  },
  property1defaultChild: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  logIn2: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: Color.whait,
  },
  property1default1: {
    width: 343,
    top: 20,
  },
  property1variant2Child: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  logIn3: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: Color.praimary1,
  },
  property1variant21: {
    width: 343,
    top: 88,
  },
  buttonBig: {
    top: 1201,
    left: 25,
    height: 156,
  },
  home: {
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  home2Parent: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  property1homeInner: {
    width: 93,
  },
  bookings: {
    color: Color.gray,
    fontWeight: "300",
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  property1homeChild: {
    width: 94,
    height: 56,
  },
  frameContainer11Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer11Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  userParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    color: Color.gray,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
    left: 0,
    position: "absolute",
    top: 0,
  },
  menuWrapper: {
    height: 16,
    width: 30,
    marginTop: 4,
  },
  property1home: {
    width: 375,
    height: 56,
    left: 16,
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
    top: 16,
  },
  home1: {
    color: Color.gray,
    fontWeight: "300",
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  account1: {
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  userGroup: {
    height: 53,
    paddingVertical: Padding.p_8xs,
  },
  property1insights: {
    top: 160,
    width: 375,
    height: 56,
    left: 16,
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
  },
  frameContainer25Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer25Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  property1savings: {
    width: 375,
    height: 56,
    left: 16,
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
    top: 88,
  },
  history: {
    color: Color.gray,
    marginTop: 4,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.med_size,
  },
  property1accountChild: {
    display: "none",
    width: 94,
    height: 56,
  },
  frameContainer34Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer34Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  property1account: {
    top: 232,
    width: 375,
    height: 56,
    left: 16,
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
  },
  frameContainer44Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer44Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  property1variant5: {
    top: 304,
    width: 375,
    height: 56,
    left: 16,
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
  },
  navBar: {
    top: 24,
    left: 26,
  },
  navBarSignUp: {
    top: 993,
    left: 3262,
  },
  property1defaultItem: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderWidth: 0.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderColor: Color.praimary1,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  cleaning: {
    fontWeight: "300",
    color: Color.praimary1,
  },
  cleaningWrapper: {
    width: "87.12%",
    right: "6.44%",
    bottom: "25%",
    left: "6.44%",
    top: "25%",
    height: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  property1default2: {
    height: 32,
    top: 20,
  },
  property1variant2Item: {
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.praimary1,
    position: "absolute",
    width: "100%",
  },
  cleaning1: {
    color: Color.whait,
    fontWeight: "700",
  },
  property1variant22: {
    top: 72,
    height: 32,
  },
  tapButton: {
    width: 190,
    left: 173,
    height: 124,
    top: 1595,
  },
  property1defaultInner: {
    borderColor: Color.gray,
    borderWidth: 0.5,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  to0100Pm: {
    color: Color.gray,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
  },
  property1default3: {
    top: 20,
  },
  property1variant2Inner: {
    shadowRadius: 4,
    elevation: 4,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    borderColor: Color.praimary1,
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.whait,
  },
  text: {
    fontWeight: "600",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  to1: {
    color: Color.black,
  },
  to: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text2: {
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
  },
  pm: {
    color: Color.praimary1,
  },
  to0100PmContainer1: {
    width: "100%",
  },
  property1variant23: {
    top: 72,
  },
  time: {
    top: 1744,
    width: 157,
    left: 173,
    height: 124,
  },
  profmLogo1111: {
    marginLeft: -463,
    top: 122,
    height: 70,
    width: 200,
  },
  groupChild: {
    borderColor: Color.colorDarkgray_300,
    borderRadius: Border.br_5xs,
    borderWidth: 0.5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  monthlyService: {
    fontSize: FontSize.size_sm,
    width: 120,
    color: Color.praimary1,
  },
  itIsA: {
    lineHeight: 20,
    height: 34,
    width: 278,
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  groupIcon: {
    marginLeft: 21,
    height: 7,
    width: 12,
  },
  frameGroup: {
    height: "16.04%",
    bottom: "83.96%",
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.colorAliceblue_200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupItem: {
    width: "100.15%",
    top: "16.01%",
    right: "-0.09%",
    bottom: "83.9%",
    left: "-0.06%",
    borderTopWidth: 0.5,
    height: "0.09%",
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  groupInner: {
    top: "25.34%",
    bottom: "74.57%",
  },
  lineView: {
    top: "34.66%",
    bottom: "65.24%",
  },
  groupChild1: {
    top: "43.99%",
    bottom: "55.91%",
  },
  groupChild2: {
    top: "53.32%",
    bottom: "46.59%",
  },
  groupChild3: {
    top: "62.65%",
    bottom: "37.26%",
  },
  groupChild4: {
    top: "71.98%",
    bottom: "27.93%",
  },
  groupChild5: {
    top: "81.31%",
    bottom: "18.6%",
  },
  groupChild6: {
    top: "90.63%",
    bottom: "9.27%",
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  cleaning2: {
    color: Color.black,
    height: 16,
    textTransform: "capitalize",
    width: 111,
  },
  frameParent2: {
    alignItems: "center",
  },
  groupIcon1: {
    width: 7,
    height: 12,
    marginLeft: 167,
  },
  frameParent1: {
    height: 18,
  },
  frameParent3: {
    marginTop: 32,
    height: 18,
  },
  electricalWorks: {
    color: Color.colorBlack,
    height: 16,
    textTransform: "capitalize",
    width: 111,
  },
  frameContainer: {
    top: 102,
  },
  rectangleParent2: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  services: {
    top: 51,
    left: 2293,
    height: 536,
    width: 343,
    position: "absolute",
  },
  designSystemChild: {
    top: 170,
    left: 853,
    width: 344,
    height: 85,
  },
  pumpMaintenance: {
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  label: {
    borderWidth: 1.3,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  property1frame1171276794: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    flexDirection: "row",
  },
  pumpMaintenance1: {
    fontWeight: "300",
    fontSize: FontSize.med_size,
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  property1frame1171276793: {
    top: 68,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  component2: {
    top: 1963,
    width: 351,
    left: 940,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    height: 104,
    overflow: "hidden",
  },
  serviceType1: {
    color: Color.black,
    fontSize: FontSize.med_size,
  },
  chooseTheService: {
    width: 278,
    height: 16,
  },
  frameParent19: {
    marginTop: -18,
    top: "50%",
  },
  property1group238775: {
    top: 20,
  },
  pumpMaintenance2: {
    width: 278,
    height: 16,
    fontWeight: "300",
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    color: Color.praimary1,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent20: {
    height: "52.94%",
    top: "23.53%",
    bottom: "23.53%",
  },
  property1variant3: {
    top: 364,
  },
  property1variant52: {
    top: 708,
  },
  property1variant7: {
    top: 1052,
  },
  frameParent23: {
    height: "16.98%",
    top: "7.55%",
    bottom: "75.47%",
  },
  property1group238776Item: {
    top: "31.98%",
    bottom: "67.78%",
  },
  property1group238776Inner: {
    top: "54.62%",
    bottom: "45.14%",
    opacity: 0.5,
  },
  property1group238776Child1: {
    top: "77.26%",
    bottom: "22.5%",
    opacity: 0.5,
  },
  component21: {
    top: "39.62%",
    bottom: "52.83%",
  },
  component3: {
    top: "62.26%",
    bottom: "30.19%",
  },
  component4: {
    top: "84.91%",
    bottom: "7.55%",
  },
  property1group238776: {
    top: 120,
  },
  component31: {
    marginTop: 26,
    top: "50%",
    justifyContent: "center",
  },
  component41: {
    marginTop: 74,
    top: "50%",
    justifyContent: "center",
  },
  property1variant4: {
    top: 464,
  },
  property1variant6: {
    top: 808,
  },
  property1variant8: {
    top: 1152,
  },
  serviceType: {
    top: 407,
    left: 940,
  },
  small1: {
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
    color: Color.praimary1,
  },
  mTo10M: {
    textTransform: "lowercase",
  },
  small2Container: {
    width: 278,
    height: 16,
    marginTop: 4,
    textAlign: "left",
  },
  small3: {
    color: Color.black,
    fontSize: FontSize.med_size,
    textTransform: "capitalize",
  },
  swimmingPoolSize: {
    top: 404,
    left: 1444,
  },
  designSystemItem: {
    top: 2026,
    left: 1313,
    position: "absolute",
  },
  frameIcon9: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  agreeToTerms: {
    color: Color.praimary1,
  },
  frameParent35: {
    height: "11.11%",
    bottom: "88.89%",
    top: "0%",
    right: "38.48%",
    width: "61.52%",
  },
  buttonBig1: {
    opacity: 0.5,
  },
  property1default4: {
    top: 20,
  },
  agreeToTerms1: {
    color: Color.black,
  },
  frameParent36: {
    marginTop: -90,
    top: "50%",
  },
  property1variant24: {
    top: 220,
  },
  property1defaultParent: {
    top: 1207,
    left: 1846,
    height: 420,
  },
  accept: {
    color: Color.whait,
  },
  property1default5: {
    top: 20,
    backgroundColor: Color.praimary1,
  },
  decline: {
    color: Color.praimary1,
  },
  property1variant25: {
    top: 80,
    borderWidth: 2,
    borderColor: Color.praimary1,
    borderStyle: "solid",
  },
  buttonSmall: {
    top: 1807,
    left: 1964,
    width: 184,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
  },
  property1defaultChild1: {
    borderColor: Color.gray,
    borderWidth: 0.5,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  text53: {
    fontWeight: "600",
    color: Color.praimary1,
  },
  arabic: {
    marginTop: 8,
    color: Color.grayBlack,
    fontWeight: "300",
  },
  parent: {
    height: "43.01%",
    width: "45%",
    top: "27.96%",
    right: "27.5%",
    bottom: "29.03%",
    left: "27.5%",
    position: "absolute",
  },
  property1default6: {
    top: 20,
  },
  property1variant2Child1: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    borderColor: Color.praimary1,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  property1variant26: {
    top: 133,
  },
  property1defaultGroup: {
    top: 549,
    left: 1995,
    height: 246,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    width: 200,
    overflow: "hidden",
  },
  property1defaultIcon: {
    top: 20,
    width: 24,
    height: 24,
  },
  property1variant2Icon: {
    top: 64,
    width: 24,
    height: 24,
  },
  property1defaultContainer: {
    top: 944,
    left: 2059,
  },
  property1defaultParent1: {
    top: 934,
    left: 2135,
  },
  property1defaultParent2: {
    top: 919,
    left: 2207,
  },
  fiRrZoomOutIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  sea: {
    width: 242,
    color: Color.gray,
    height: 24,
  },
  fiRrZoomOutParent: {
    alignItems: "center",
  },
  property1default7: {
    top: 20,
  },
  property1variant27: {
    top: 76,
  },
  property1variant11: {
    top: 576,
  },
  property1variant231: {
    top: 1206,
  },
  property1variant32: {
    top: 132,
  },
  property1variant12: {
    top: 632,
  },
  property1variant221: {
    top: 1158,
  },
  property1variant42: {
    top: 188,
  },
  property1variant13: {
    top: 688,
  },
  property1variant211: {
    top: 1110,
  },
  property1variant54: {
    top: 244,
  },
  property1variant14: {
    top: 744,
  },
  property1variant20: {
    top: 1054,
  },
  property1variant62: {
    top: 300,
  },
  property1variant15: {
    top: 792,
  },
  property1variant19: {
    top: 998,
  },
  property1variant16: {
    top: 840,
  },
  property1variant18: {
    top: 942,
  },
  property1variant17: {
    top: 888,
  },
  property1variant72: {
    top: 356,
  },
  property1variant82: {
    top: 412,
  },
  property1variant9: {
    top: 468,
  },
  property1variant131: {
    top: 522,
  },
  search: {
    top: 667,
    left: 2290,
    height: 1262,
  },
  text55: {
    color: Color.gray,
    fontWeight: "300",
  },
  property1default8: {
    top: 20,
  },
  property1variant2Child2: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderColor: Color.praimary1,
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.whait,
  },
  text56: {
    fontWeight: "600",
    color: Color.praimary1,
  },
  property1variant28: {
    top: 72,
  },
  numberOfMonths: {
    top: 1603,
    left: 497,
    width: 80,
  },
  frameChild26: {
    width: 343,
    borderRadius: Border.br_3xs,
  },
  frameChild27: {
    marginTop: 8,
  },
  frameParent37: {
    top: 1796,
    left: 2675,
    alignItems: "center",
    position: "absolute",
  },
  rectangleLineargradient: {
    backgroundColor: Color.color,
    height: 160,
    width: 343,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  text57: {
    fontSize: FontSize.size_13xl,
    width: 74,
    height: 32,
    textAlign: "left",
    display: "flex",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
  },
  groupChild7: {
    width: 123,
    height: 24,
  },
  todaysSpecial: {
    width: 113,
    textAlign: "left",
  },
  rectangleParent4: {
    marginTop: 8,
  },
  getADiscount: {
    width: 172,
  },
  group: {
    top: 32,
  },
  rectangleIcon: {
    right: 0,
    marginTop: -80,
    top: "50%",
  },
  rectangleParentShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorSkyblue,
    bottom: "8.57%",
    height: "91.43%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    right: "0%",
    top: "0%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  property1defaultChild3: {
    marginTop: 80.5,
    marginLeft: -13.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  property1default9: {
    top: 210,
    marginLeft: -169.5,
    height: 175,
  },
  groupChild8: {
    backgroundColor: Color.colorGainsboro_300,
    opacity: 0.5,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ramadanKareem: {
    width: 125,
    textAlign: "center",
    justifyContent: "center",
  },
  rectangleParent6: {
    marginTop: 8,
  },
  whenContractingFor: {
    width: 178,
  },
  container: {
    top: 22,
  },
  frameChild29: {
    right: 0,
    marginTop: -80,
    top: "50%",
    height: 160,
  },
  property1variant33: {
    top: 410,
    marginLeft: -169.5,
    height: 175,
  },
  getADiscount1: {
    width: 183,
  },
  serviceMaintenanceWorkerRepIcon: {
    top: -1,
    left: 205,
    width: 154,
    height: 154,
    display: "none",
    position: "absolute",
  },
  frameChild31: {
    left: 204,
    top: 0,
  },
  property1default10: {
    marginLeft: -173.5,
    top: 20,
  },
  heroSeciton1: {
    top: 267,
    left: 3228,
  },
  frameIcon11: {
    top: 81,
    left: 2767,
    overflow: "hidden",
    position: "absolute",
  },
  property1oneTimeServiceChild: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderWidth: 0.5,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    borderColor: Color.praimary1,
  },
  oneTimeHourlyReservation: {
    width: 184,
    height: 34,
  },
  oneTimeServiceParent: {
    top: 16,
  },
  property1oneTimeServiceItem: {
    left: 213,
    borderBottomRightRadius: Border.br_5xs,
    width: 130,
    height: 86,
    borderTopRightRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
  },
  groupIcon26: {
    top: "82.56%",
    bottom: "9.3%",
    marginLeft: -5.5,
    height: "8.14%",
    maxHeight: "100%",
    width: 12,
  },
  property1oneTimeService: {
    height: 86,
    left: 20,
    position: "absolute",
    top: 20,
  },
  periodicServiceWith: {
    width: 192,
    height: 34,
  },
  property1monthlyShadowBox: {
    top: 645,
    height: 86,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 20,
    width: 343,
    position: "absolute",
  },
  property1yearlyShadowBox: {
    top: 982,
    height: 86,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 20,
    width: 343,
    position: "absolute",
  },
  groupIcon29: {
    top: "86.05%",
    bottom: "5.81%",
    marginLeft: -5.5,
    height: "8.14%",
    maxHeight: "100%",
    width: 12,
  },
  services2: {
    height: 86,
  },
  groupChild10: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    backgroundColor: Color.whait,
    left: 0,
    position: "absolute",
    top: 0,
  },
  frameIcon12: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  frameParent38: {
    top: 17,
    left: 8,
    alignItems: "center",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupPressable: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  sanitaryPlumbing1: {
    width: 109,
    color: Color.black,
    height: 16,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  rectangleParent9: {
    top: 144,
    left: 0,
    position: "absolute",
  },
  m10: {
    textTransform: "lowercase",
  },
  poolMaintenance1: {
    width: 97,
    color: Color.black,
    height: 16,
    fontWeight: "300",
  },
  rectangleParent10: {
    top: 72,
    left: 0,
    position: "absolute",
  },
  pestControl1: {
    textTransform: "capitalize",
  },
  rectangleParent11: {
    top: 216,
    left: 0,
    position: "absolute",
  },
  rectangleParent12: {
    top: 288,
    left: 0,
    position: "absolute",
  },
  rectangleParent13: {
    top: 72,
  },
  rectangleParent14: {
    top: 216,
  },
  rectangleParent15: {
    top: 0,
  },
  rectangleParent16: {
    top: 144,
  },
  groupParent: {
    height: 352,
  },
  property1frame1171276910: {
    top: 141,
  },
  services3: {
    height: 86,
  },
  rectangleParent18: {
    marginLeft: 7,
  },
  groupContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  property1frame1171276912: {
    top: 766,
  },
  services4: {
    height: 86,
  },
  property1frame1171276913: {
    top: 1092,
  },
  services1: {
    top: 156,
    left: 462,
  },
  heroSeciton2: {
    top: 502,
    left: 30,
  },
  property1oneTimeService1: {
    height: 86,
    left: 20,
    position: "absolute",
    top: 20,
  },
  services5: {
    height: 86,
  },
  services6: {
    height: 86,
  },
  services7: {
    height: 86,
  },
  servicesSignUp: {
    top: 256,
    left: 2930,
  },
  groupChild39: {
    shadowRadius: 5,
    elevation: 5,
    right: 0,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  completed: {
    right: 264,
    width: 60,
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  text63: {
    height: 8,
    lineHeight: 25,
    fontSize: FontSize.med_size,
    display: "flex",
    alignItems: "center",
    width: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  groupChild40: {
    backgroundColor: Color.colorHoneydew,
    height: 8,
    width: 190,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChild41: {
    left: 42,
    height: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    top: 0,
  },
  rectangleParent41: {
    height: 8,
    width: 190,
    top: 0,
  },
  encapsulatedGroup: {
    marginLeft: 6,
    height: 8,
    width: 190,
    overflow: "hidden",
  },
  text64: {
    width: 32,
    marginLeft: 6,
  },
  parent5: {
    right: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  completedParent: {
    top: 48,
  },
  incomplete: {
    right: 260,
    width: 64,
    lineHeight: 25,
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  text65: {
    right: 234,
    height: 8,
    lineHeight: 25,
    fontSize: FontSize.med_size,
    display: "flex",
    alignItems: "center",
    top: 4,
    position: "absolute",
    width: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  groupChild43: {
    left: 142,
    width: 48,
    height: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    top: 0,
    position: "absolute",
  },
  encapsulatedGroup1: {
    left: 96,
    height: 8,
    width: 190,
    overflow: "hidden",
  },
  text66: {
    width: 26,
    right: 0,
    top: 4,
    position: "absolute",
  },
  incompleteParent: {
    top: 80,
  },
  allServicesProvided: {
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  allServicesProvidedContainer: {
    marginLeft: -163.5,
    width: 326,
    height: 16,
    top: 16,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupIcon38: {
    height: "6.77%",
    marginLeft: -8.5,
    top: "84.21%",
    bottom: "9.02%",
    width: 16,
  },
  rectangleParent40: {
    right: 736,
    top: 88,
  },
  designSystem: {
    backgroundColor: "#4b4b4b",
    width: 3988,
    overflow: "hidden",
    top: 0,
    height: 2133,
  },
  designSystemParent: {
    flex: 1,
    height: 2133,
    width: "100%",
  },
});

export default Frame;
