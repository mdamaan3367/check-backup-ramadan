import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import RegularCleaning9 from "./RegularCleaning";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const ViewDetails11 = ({ onClose }) => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [frameContainer33Visible, setFrameContainer33Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openFrameContainer33 = useCallback(() => {
    setFrameContainer33Visible(true);
  }, []);

  const closeFrameContainer33 = useCallback(() => {
    setFrameContainer33Visible(false);
  }, []);

  return (
    <>
      <View style={styles.viewDetails}>
        <View style={[styles.viewDetailsChild, styles.rowPosition]} />
        <View style={[styles.lineParent, styles.navParentPosition]}>
          <View style={styles.frameChild} />
          <View style={styles.frameWrapper}>
            <View style={[styles.frameParent, styles.parentPosition]}>
              <View>
                <Text style={[styles.cleaningFor4, styles.textFlexBox]}>
                  Cleaning for 4 hours
                </Text>
                <View style={[styles.userParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="cover"
                    source={require("../assets/user3.png")}
                  />
                  <Text style={[styles.domesticWorker, styles.cleaningTypo]}>
                    4 domestic worker
                  </Text>
                </View>
                <View style={styles.parentFlexBox}>
                  <Text style={[styles.sar, styles.sarTypo]}>
                    <Text style={styles.sar1}>{`700 SAR `}</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={[styles.sar2, styles.textFlexBox]}>
                    <Text style={styles.sarTxt}>
                      <Text style={styles.sar1}>{`900 SAR `}</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <Text style={[styles.review, styles.textFlexBox]}>
                    3.9 (150 Review)
                  </Text>
                </View>
                <Pressable
                  style={[styles.rectangleParent, styles.groupChildLayout]}
                  onPress={openGroupContainer}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowPosition]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.navParentPosition]}>
            <View style={styles.parentPosition}>
              <Text style={[styles.equipmentUsed, styles.textFlexBox]}>
                Equipment used
              </Text>
              <Text
                style={[
                  styles.cleaningWithSpecializedContainer,
                  styles.viewDetails1Layout,
                ]}
              >
                <Text style={styles.sarTxt}>
                  <Text style={styles.sar1}>cleaning</Text> with specialized
                  hands
                </Text>
              </Text>
            </View>
            <View style={[styles.frameView, styles.commentsPosition]}>
              <View style={styles.groupParent}>
                <View style={styles.groupItemLayout}>
                  <Image
                    style={[styles.groupItem, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1821.png")}
                  />
                  <Image
                    style={[
                      styles.frontViewCleaningSolutionsIcon,
                      styles.iconPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/frontviewcleaningsolutionsbucketwithglovebrushremovebgpreview-1.png")}
                  />
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                  <View
                    style={[
                      styles.facadeCleaningMaterialsParent,
                      styles.bookNowPosition,
                    ]}
                  >
                    <Text
                      style={[
                        styles.facadeCleaningMaterials,
                        styles.cleaningTypo,
                      ]}
                    >
                      Facade cleaning materials
                    </Text>
                    <Text style={[styles.usedToClean, styles.iAmVeryTypo]}>
                      Used to clean hard surfaces such as wood, tile and glass
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupFlexBox}>
                <View style={styles.groupItemLayout}>
                  <Image
                    style={[styles.groupItem, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1821.png")}
                  />
                  <Image
                    style={styles.e14041RemovebgPreview1Icon}
                    resizeMode="cover"
                    source={require("../assets/e14041removebgpreview-1.png")}
                  />
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                  <View
                    style={[
                      styles.facadeCleaningMaterialsParent,
                      styles.bookNowPosition,
                    ]}
                  >
                    <Text
                      style={[
                        styles.steamCleaningMachines,
                        styles.cleaningTypo,
                      ]}
                    >
                      Steam cleaning machines
                    </Text>
                    <Text
                      style={[styles.usedToClean, styles.iAmVeryTypo]}
                    >{`Steam cleaning machines are used to remove heavy dirt and stains from sensitive surfaces.

`}</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupParent1, styles.groupFlexBox]}>
                <View style={styles.groupItemLayout}>
                  <Image
                    style={[styles.groupItem, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1821.png")}
                  />
                  <Image
                    style={[
                      styles.transportableWasherRemovebgIcon,
                      styles.iconPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/transportablewasherremovebgpreview-1.png")}
                  />
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                  <View
                    style={[
                      styles.facadeCleaningMaterialsParent,
                      styles.bookNowPosition,
                    ]}
                  >
                    <Text
                      style={[
                        styles.steamCleaningMachines,
                        styles.cleaningTypo,
                      ]}
                    >
                      High pressure machines
                    </Text>
                    <Text
                      style={[styles.usedToClean, styles.iAmVeryTypo]}
                    >{`High-pressure machines are used to remove dense dirt and stains

`}</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupParent1, styles.groupFlexBox]}>
                <View style={styles.groupItemLayout}>
                  <Image
                    style={[styles.groupItem, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1821.png")}
                  />
                  <Image
                    style={styles.image19Icon}
                    resizeMode="cover"
                    source={require("../assets/image-191.png")}
                  />
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                  <View
                    style={[
                      styles.facadeCleaningMaterialsParent,
                      styles.bookNowPosition,
                    ]}
                  >
                    <Text style={[styles.cranes, styles.cleaningTypo]}>
                      Cranes
                    </Text>
                    <Text style={[styles.usedToClean, styles.iAmVeryTypo]}>
                      Cranes will be used to clean very high facades or facades
                      that are difficult to reach.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.navParentPosition]}>
            <View style={styles.parentPosition}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.userIcon}
                  resizeMode="cover"
                  source={require("../assets/vector5.png")}
                />
                <Text style={[styles.text2, styles.textFlexBox]}>4.9</Text>
              </View>
              <Text style={[styles.review1, styles.review1Layout]}>
                (80 Review)
              </Text>
            </View>
            <Text style={[styles.comments, styles.review1Layout]}>
              Comments
            </Text>
            <View style={[styles.frameView, styles.commentsPosition]}>
              <View style={styles.ratingsFlexBox}>
                <View style={styles.vectorParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>5</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={[styles.snakebar, styles.snakebarPosition1]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.vectorParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>4</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar2, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.vectorParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>3</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar4, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.vectorParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>2</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar6, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.vectorParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>1</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar8, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
            </View>
            <View style={[styles.frameItem, styles.framePosition]} />
            <View style={[styles.frameInner, styles.framePosition]} />
            <View style={[styles.row, styles.rowPosition]}>
              <View style={styles.divblock}>
                <View style={styles.div}>
                  <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../assets/logo.png")}
                  />
                  <View style={styles.text3}>
                    <Text style={[styles.courtneyHenry, styles.minsAgoTypo]}>
                      Courtney Henry
                    </Text>
                    <View style={styles.row1}>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.userIcon}
                          resizeMode="cover"
                          source={require("../assets/vector5.png")}
                        />
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          4.9
                        </Text>
                      </View>
                      <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                        2 mins ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.iAmVery, styles.iAmVeryTypo]}>
                I am very happy with this cleaning service app. I used their
                services to clean my house and I was not disappointed. The staff
                was very clean and respectful.
              </Text>
            </View>
            <View style={[styles.row2, styles.rowPosition]}>
              <View style={styles.divblock}>
                <View style={styles.div}>
                  <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../assets/logo1.png")}
                  />
                  <View style={styles.text5}>
                    <Text style={[styles.courtneyHenry, styles.minsAgoTypo]}>
                      Courtney Henry
                    </Text>
                    <View style={styles.row1}>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.userIcon}
                          resizeMode="cover"
                          source={require("../assets/vector5.png")}
                        />
                        <Text style={[styles.text4, styles.textFlexBox]}>
                          4.9
                        </Text>
                      </View>
                      <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                        2 mins ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.iAmVery, styles.iAmVeryTypo]}>
                I have used this janitorial service app several times and am
                always very happy with the results. Staff are always on time and
                helpful
              </Text>
            </View>
          </View>
          <View style={styles.groupChild5Position}>
            <View style={[styles.groupChild5, styles.groupChild5Position]} />
            <View style={[styles.arrow21Parent, styles.commentsPosition]}>
              <Pressable
                style={styles.arrow21}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrow-2-11.png")}
                />
              </Pressable>
              <Text style={[styles.viewDetails1, styles.viewDetails1Layout]}>
                View details
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navParentPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home11")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/home23.png")}
                />
                <Text style={[styles.home, styles.cleaningTypo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.clockParent}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.cleaningTypo]}>
                  History
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/calendartick4.png")}
                />
                <Text style={[styles.bookings, styles.cleaningTypo]}>
                  bookings
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer33}
            >
              <View style={styles.clockParent}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.cleaningTypo]}>
                  account
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Menu2")}
            >
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.cleaningTypo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <WebViewBottom
            webViewBottomPosition="absolute"
            webViewBottomBackgroundColor="#fff"
            webViewBottomMarginLeft={-187.5}
            webViewBottomTop={56}
            webViewBottomLeft="50%"
            webViewBottomBorderBottomRightRadius={5}
            webViewBottomBorderBottomLeftRadius={5}
            webViewBottomWidth={375}
            webViewBottomHeight={34}
            webViewBottomBottom="unset"
            homeIndicatorBackgroundColor="#1d2939"
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <RegularCleaning9 onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer33Visible}>
        <View style={styles.frameContainer33Overlay}>
          <Pressable
            style={styles.frameContainer33Bg}
            onPress={closeFrameContainer33}
          />
          <RegularCleaning9 onClose={closeFrameContainer33} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  rowPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  navParentPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
  },
  parentPosition: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  parentFlexBox: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  cleaningTypo: {
    lineHeight: 16,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  sarTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  bookNowPosition: {
    top: 8,
    position: "absolute",
  },
  viewDetails1Layout: {
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
  },
  commentsPosition: {
    left: 16,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 9,
    position: "absolute",
  },
  groupLayout: {
    width: 267,
    height: 68,
  },
  iAmVeryTypo: {
    lineHeight: 18,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupFlexBox: {
    marginTop: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  review1Layout: {
    width: 71,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  scoreFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  starIconLayout: {
    width: 16,
    height: 16,
  },
  snakebarPosition1: {
    borderRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  ratingsFlexBox: {
    width: 251,
    alignItems: "center",
    flexDirection: "row",
  },
  snakebarPosition: {
    borderBottomLeftRadius: Border.br_11xs,
    borderTopLeftRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  framePosition: {
    marginLeft: -187.7,
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  minsAgoTypo: {
    letterSpacing: -0.1,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild5Position: {
    height: 59,
    top: 0,
    left: 0,
    position: "absolute",
    width: 375,
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarChildLayout: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  viewDetailsChild: {
    top: 47,
    backgroundColor: Color.gray,
    height: 719,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
  },
  frameChild: {
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    top: 59,
    position: "absolute",
  },
  cleaningFor4: {
    width: 154,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  userIcon: {
    width: 14,
    height: 14,
  },
  domesticWorker: {
    width: 100,
    height: 12,
    marginLeft: 8,
    color: Color.color,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  userParent: {
    justifyContent: "flex-end",
  },
  sar1: {
    textTransform: "capitalize",
  },
  text: {
    textTransform: "lowercase",
  },
  sar: {
    color: Color.red,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sarTxt: {
    width: "100%",
  },
  sar2: {
    textDecoration: "line-through",
    width: 51,
    height: 19,
    color: Color.gray,
    marginLeft: 8,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  review: {
    fontSize: FontSize.size_3xs,
    width: 74,
    marginLeft: 4,
    color: Color.color,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorParent: {
    alignItems: "center",
    flexDirection: "row",
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
    marginTop: -16,
    marginLeft: -44,
    top: "50%",
    backgroundColor: Color.praimary1,
    borderRadius: Border.br_8xs,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  bookNow: {
    left: 12,
    color: Color.colorWhitesmoke_100,
    width: 65,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleParent: {
    marginTop: 19,
    height: 32,
  },
  frameGroup: {
    alignItems: "flex-end",
    marginLeft: 97,
  },
  frameParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    height: 115,
    backgroundColor: Color.lightBGPrimary,
    top: 59,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    overflow: "hidden",
    width: 375,
  },
  equipmentUsed: {
    width: 149,
    textTransform: "capitalize",
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  cleaningWithSpecializedContainer: {
    width: 223,
    marginTop: 4,
    color: Color.color,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  groupItem: {
    height: 68,
    width: 68,
    left: 0,
    top: 0,
  },
  frontViewCleaningSolutionsIcon: {
    width: 50,
    height: 36,
    top: 16,
  },
  groupItemLayout: {
    height: 68,
    width: 68,
  },
  groupInner: {
    backgroundColor: Color.colorWhitesmoke_300,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_8xs,
    left: 0,
  },
  facadeCleaningMaterials: {
    width: 152,
    color: Color.praimary1,
    fontWeight: "300",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  usedToClean: {
    width: 258,
    marginTop: 4,
    height: 32,
    color: Color.gray,
  },
  facadeCleaningMaterialsParent: {
    left: 8,
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  groupParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  e14041RemovebgPreview1Icon: {
    top: 4,
    left: 24,
    width: 20,
    height: 60,
    position: "absolute",
  },
  steamCleaningMachines: {
    width: 135,
    color: Color.praimary1,
    fontWeight: "300",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  transportableWasherRemovebgIcon: {
    top: 9,
    width: 49,
    height: 50,
  },
  groupParent1: {
    justifyContent: "center",
  },
  image19Icon: {
    top: 23,
    left: 4,
    width: 60,
    height: 21,
    position: "absolute",
  },
  cranes: {
    width: 109,
    color: Color.praimary1,
    fontWeight: "300",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  frameView: {
    top: 84,
  },
  frameContainer: {
    top: 182,
    height: 452,
    backgroundColor: Color.lightBGPrimary,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  text2: {
    width: 24,
    marginLeft: 4,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  review1: {
    marginTop: 4,
    color: Color.color,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  comments: {
    top: 265,
    color: Color.praimary1,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 16,
    position: "absolute",
  },
  score1: {
    lineHeight: 17,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  starIcon1: {
    marginLeft: 4,
  },
  starGroup: {
    display: "none",
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  snakebar: {
    backgroundColor: Color.praimary1,
  },
  ratingBar: {
    height: 8,
    flex: 1,
    marginLeft: 8,
  },
  score2: {
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.lightTextDisabled,
    display: "none",
    marginLeft: 8,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
  },
  starIcon5: {
    marginLeft: 8,
  },
  snakebar1: {
    backgroundColor: Color.colorGainsboro_100,
  },
  ratingBar2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  snakebar2: {
    width: "80%",
    right: "20%",
  },
  ratings1: {
    marginTop: 12,
  },
  snakebar4: {
    width: "60%",
    right: "40%",
  },
  snakebar6: {
    width: "40%",
    right: "60%",
  },
  snakebar8: {
    width: "20%",
    right: "80%",
  },
  frameItem: {
    top: 241,
  },
  frameInner: {
    top: 427,
  },
  logoIcon: {
    width: 38,
    height: 38,
  },
  courtneyHenry: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  text4: {
    width: 24,
    marginLeft: 4,
    color: Color.color,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  minsAgo: {
    textAlign: "right",
    marginLeft: 4,
    color: Color.color,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  row1: {
    alignSelf: "stretch",
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  text3: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  div: {
    flex: 1,
    flexDirection: "row",
  },
  divblock: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  iAmVery: {
    letterSpacing: 0.4,
    width: 309,
    marginTop: 12,
    color: Color.color,
  },
  row: {
    top: 299,
    justifyContent: "flex-end",
  },
  text5: {
    flex: 1,
    marginLeft: 8,
  },
  row2: {
    top: 451,
    justifyContent: "flex-end",
  },
  frameParent1: {
    top: 642,
    height: 587,
    backgroundColor: Color.lightBGPrimary,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild5: {
    backgroundColor: Color.lightBGPrimary,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  viewDetails1: {
    marginLeft: 102,
    color: Color.praimary1,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  arrow21Parent: {
    top: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  lineParent: {
    bottom: 90,
    backgroundColor: Color.colorGray_100,
    height: 664,
    left: "50%",
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    position: "absolute",
  },
  home: {
    marginTop: 4,
    color: Color.gray,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    marginTop: 4,
    color: Color.gray,
  },
  clockParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    marginTop: 4,
    color: Color.gray,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer33Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer33Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    top: 0,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: Color.lightBGPrimary,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
  },
  navBarParent: {
    top: 722,
    height: 90,
    left: "50%",
    position: "absolute",
  },
  viewDetails: {
    backgroundColor: Color.colorBlack,
    height: 812,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 375,
  },
});

export default ViewDetails11;
