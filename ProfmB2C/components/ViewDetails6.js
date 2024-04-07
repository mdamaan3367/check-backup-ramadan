import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ViewDetails6 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewDetails}>
      <View style={styles.viewDetailsChild} />
      <View style={[styles.lineParent, styles.parentFramePosition]}>
        <View style={styles.frameChild} />
        <View style={styles.frameWrapper}>
          <View style={[styles.frameParent, styles.parentPosition1]}>
            <View>
              <Text style={[styles.cleaningFor2, styles.textTypo]}>
                Cleaning for 2 hours
              </Text>
              <View style={styles.userParent}>
                <Image
                  style={styles.userIcon}
                  resizeMode="cover"
                  source={require("../assets/user3.png")}
                />
                <Text style={[styles.domesticWorker, styles.reviewClr]}>
                  1 domestic worker
                </Text>
              </View>
              <View style={styles.userParent}>
                <Text style={[styles.sar, styles.sarTypo]}>
                  <Text style={styles.sar1}>{`79 SAR `}</Text>
                  <Text style={styles.text}>{` `}</Text>
                </Text>
                <Text style={[styles.sar2, styles.sar2Typo]}>
                  <Text style={styles.sarTxt}>
                    <Text style={styles.sar1}>{`100 SAR `}</Text>
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
                <Text style={[styles.review, styles.reviewLayout]}>
                  4.9 (80 Review)
                </Text>
              </View>
              <Pressable
                style={[styles.rectangleParent, styles.groupChildLayout]}
                onPress={() => navigation.navigate("PinYourLocation")}
              >
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.bookNow, styles.bookNowPosition]}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.parentFramePosition]}>
          <View style={styles.parentPosition1}>
            <Text style={[styles.equipmentUsed, styles.textTypo]}>
              Equipment used
            </Text>
            <Text
              style={[
                styles.cleaningWithSpecializedContainer,
                styles.reviewClr,
              ]}
            >
              <Text style={styles.sarTxt}>
                <Text style={styles.sar1}>cleaning</Text> with specialized hands
              </Text>
            </Text>
          </View>
          <View style={styles.frameView}>
            <View style={styles.vectorParent}>
              <View style={styles.groupItemLayout}>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-182.png")}
                />
                <Image
                  style={[styles.image1Icon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-11.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View
                  style={[styles.vacuumCleanerParent, styles.bookNowPosition]}
                >
                  <Text style={[styles.vacuumCleaner, styles.commentsClr]}>
                    Vacuum cleaner
                  </Text>
                  <Text
                    style={[styles.itCleansCarpets, styles.usedToRemoveTypo]}
                  >{`It cleans carpets, upholstery, appliances, and furniture

`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupItemLayout}>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-182.png")}
                />
                <Image
                  style={styles.stillLifeVariousCleaningPrIcon}
                  resizeMode="cover"
                  source={require("../assets/stilllifevariouscleaningproducts-1.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View
                  style={[styles.broomAndDustpanParent, styles.parentPosition]}
                >
                  <Text
                    style={[
                      styles.broomAndDustpan,
                      styles.broomAndDustpanLayout,
                    ]}
                  >
                    Broom and dustpan
                  </Text>
                  <Text style={[styles.usedToClean, styles.sar2Typo]}>
                    Used to clean floors and carpets
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupItemLayout}>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-182.png")}
                />
                <Image
                  style={styles.image3Icon}
                  resizeMode="cover"
                  source={require("../assets/image-3.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View
                  style={[styles.broomAndDustpanParent, styles.parentPosition]}
                >
                  <Text style={[styles.vacuumCleaner, styles.commentsClr]}>
                    Mop
                  </Text>
                  <Text style={[styles.usedToRemove, styles.usedToRemoveTypo]}>
                    Used to remove dirt, dust and debris
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupItemLayout}>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-182.png")}
                />
                <Image
                  style={[styles.image4Icon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-4.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View
                  style={[styles.vacuumCleanerParent, styles.bookNowPosition]}
                >
                  <Text
                    style={[
                      styles.floorCleaningCloths,
                      styles.broomAndDustpanLayout,
                    ]}
                  >
                    Floor Cleaning Cloths
                  </Text>
                  <Text
                    style={[styles.itCleansCarpets, styles.usedToRemoveTypo]}
                  >
                    Used to clean hard surfaces such as wood, tile and vinyl
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.parentFramePosition]}>
          <View style={styles.parentPosition1}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.userIcon}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>4.9</Text>
            </View>
            <Text style={[styles.review1, styles.reviewLayout]}>
              (80 Review)
            </Text>
          </View>
          <Text style={[styles.comments, styles.commentsClr]}>Comments</Text>
          <View style={styles.frameView}>
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
                  <View style={[styles.snakebar1, styles.snakebarPosition1]} />
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
                  <View style={[styles.snakebar1, styles.snakebarPosition1]} />
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
                  <View style={[styles.snakebar1, styles.snakebarPosition1]} />
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
                  <View style={[styles.snakebar1, styles.snakebarPosition1]} />
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
                      <Text style={[styles.text4, styles.reviewClr]}>4.9</Text>
                    </View>
                    <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                      2 mins ago
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.iAmVery, styles.reviewClr]}>
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
                      <Text style={[styles.text4, styles.reviewClr]}>4.9</Text>
                    </View>
                    <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                      2 mins ago
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.iAmVery, styles.reviewClr]}>
              I have used this janitorial service app several times and am
              always very happy with the results. Staff are always on time and
              helpful
            </Text>
          </View>
        </View>
        <View style={styles.groupChild5Position}>
          <View style={[styles.groupChild5, styles.groupChild5Position]} />
          <View style={[styles.arrow21Parent, styles.parentPosition]}>
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
            <Text style={[styles.viewDetails1, styles.commentsClr]}>
              View details
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.navBarSignUpParent, styles.parentFramePosition]}>
        <View style={[styles.navBarSignUp, styles.navFlexBox]}>
          <Pressable
            style={[styles.navBarSignUpInner, styles.navFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.arrow21}
                resizeMode="cover"
                source={require("../assets/home22.png")}
              />
              <Text style={[styles.home, styles.sar2Typo]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarSignUpChild, styles.framePressableLayout]}>
            <View style={styles.clockParent}>
              <Image
                style={styles.arrow21}
                resizeMode="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.history, styles.sar2Typo]}>History</Text>
            </View>
          </View>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Bookings")}
          >
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.arrow21}
                resizeMode="cover"
                source={require("../assets/calendartick2.png")}
              />
              <Text style={[styles.bookings, styles.sar2Typo]}>bookings</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.clockParent}>
              <Image
                style={styles.arrow21}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearuser.png")}
              />
              <Text style={[styles.bookings, styles.sar2Typo]}>account</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.framePressableLayout}
            onPress={() => navigation.navigate("Menu")}
          >
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.arrow21}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.sar2Typo]}>Menu</Text>
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
  );
};

const styles = StyleSheet.create({
  parentFramePosition: {
    left: "50%",
    position: "absolute",
  },
  parentPosition1: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  reviewClr: {
    color: Color.grayBlack,
    fontWeight: "300",
  },
  sarTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  sar2Typo: {
    color: Color.a6A6A6,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  reviewLayout: {
    width: 71,
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  bookNowPosition: {
    top: 8,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    width: 50,
    left: 9,
    position: "absolute",
  },
  groupLayout: {
    width: 267,
    height: 68,
  },
  commentsClr: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  usedToRemoveTypo: {
    width: 258,
    marginTop: 4,
    color: Color.a6A6A6,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  parentPosition: {
    top: 16,
    position: "absolute",
  },
  broomAndDustpanLayout: {
    width: 127,
    color: Color.praimary,
    fontWeight: "300",
    lineHeight: 16,
    height: 16,
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
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  framePosition: {
    marginLeft: -187.7,
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rowPosition: {
    justifyContent: "flex-end",
    width: 343,
    left: 16,
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
  framePressableLayout: {
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
    backgroundColor: Color.a6A6A6,
    height: 719,
    width: 343,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 16,
    position: "absolute",
  },
  frameChild: {
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    left: 0,
    top: 59,
    position: "absolute",
  },
  cleaningFor2: {
    width: 154,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  userIcon: {
    width: 14,
    height: 14,
  },
  domesticWorker: {
    width: 100,
    marginLeft: 9,
    lineHeight: 16,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  userParent: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
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
    marginLeft: 8,
    fontWeight: "300",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  review: {
    fontSize: FontSize.size_3xs,
    marginLeft: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    marginTop: -16,
    marginLeft: -44,
    top: "50%",
    backgroundColor: Color.praimary,
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
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 19,
    height: 32,
  },
  frameGroup: {
    alignItems: "flex-end",
    marginLeft: 100,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    height: 115,
    backgroundColor: Color.whait,
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
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  cleaningWithSpecializedContainer: {
    width: 223,
    marginTop: 4,
    lineHeight: 30,
    fontSize: FontSize.med_size,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
  },
  groupItem: {
    height: 68,
    width: 68,
  },
  image1Icon: {
    top: 11,
    height: 47,
  },
  groupItemLayout: {
    height: 68,
    width: 68,
  },
  groupInner: {
    backgroundColor: Color.colorWhitesmoke_300,
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  vacuumCleaner: {
    width: 109,
    fontWeight: "300",
    lineHeight: 16,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
  },
  itCleansCarpets: {
    lineHeight: 18,
    height: 32,
  },
  vacuumCleanerParent: {
    left: 8,
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  stillLifeVariousCleaningPrIcon: {
    top: 4,
    left: 23,
    width: 22,
    height: 60,
    position: "absolute",
  },
  broomAndDustpan: {
    fontSize: FontSize.size_sm,
  },
  usedToClean: {
    width: 174,
    marginTop: 4,
    fontWeight: "300",
    lineHeight: 16,
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  broomAndDustpanParent: {
    left: 8,
  },
  groupContainer: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image3Icon: {
    top: 10,
    left: 11,
    width: 45,
    height: 50,
    position: "absolute",
  },
  usedToRemove: {
    lineHeight: 16,
    height: 16,
  },
  image4Icon: {
    top: 21,
    height: 26,
  },
  floorCleaningCloths: {
    fontSize: FontSize.med_size,
  },
  frameView: {
    top: 84,
    left: 16,
    position: "absolute",
  },
  frameContainer: {
    top: 182,
    height: 452,
    backgroundColor: Color.whait,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    overflow: "hidden",
  },
  text2: {
    width: 24,
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  review1: {
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    fontFamily: FontFamily.dGBaysan,
  },
  comments: {
    top: 265,
    width: 71,
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
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
    backgroundColor: Color.praimary,
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
    fontSize: FontSize.med_size,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
  },
  minsAgo: {
    textAlign: "right",
    marginLeft: 4,
    color: Color.grayBlack,
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
    lineHeight: 18,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  row: {
    top: 299,
  },
  text5: {
    flex: 1,
    marginLeft: 8,
  },
  row2: {
    top: 451,
  },
  frameParent1: {
    top: 642,
    height: 587,
    backgroundColor: Color.whait,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    overflow: "hidden",
  },
  groupChild5: {
    backgroundColor: Color.whait,
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
    lineHeight: 30,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  arrow21Parent: {
    alignItems: "center",
    flexDirection: "row",
    left: 16,
  },
  lineParent: {
    bottom: 90,
    backgroundColor: Color.colorGray_100,
    height: 664,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
  },
  home: {
    marginTop: 4,
    fontWeight: "300",
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  navBarSignUpInner: {
    width: 93,
  },
  history: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
    marginTop: 4,
    lineHeight: 16,
  },
  clockParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarSignUpChild: {
    display: "none",
  },
  bookings: {
    marginTop: 4,
    textTransform: "capitalize",
    fontWeight: "300",
    lineHeight: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  calendarTickParent: {
    alignItems: "center",
  },
  textalignLeftParent: {
    height: 53,
  },
  navBarSignUp: {
    bottom: 34,
    flexDirection: "row",
    backgroundColor: Color.whait,
    left: "50%",
    position: "absolute",
    marginLeft: -187.5,
    width: 375,
  },
  navBarSignUpParent: {
    bottom: 0,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
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

export default ViewDetails6;
