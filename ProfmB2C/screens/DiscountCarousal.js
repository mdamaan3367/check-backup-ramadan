import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Property1Default4 from '../components/Property1Default4';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
// Example component for each screen
const Screen1 = () => (
 
    <View style={[styles.screen]}>
    <View style={[styles.property1default, styles.property1Default3Style,{width:windowWidth-16}]}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.frameChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>50%</Text>
          <View style={[styles.rectangleGroup, styles.getADiscountSpaceBlock]}>
            <View style={styles.groupChild} />
            <Text style={[styles.todaysSpecial, styles.getADiscountTypo]}>
              Today’s Special
            </Text>
          </View>
          <Text style={[styles.getADiscount, styles.getADiscountTypo]}>
            Get a discount on every furniture cleaning and repair order valid
            for today only
          </Text>
        </View>
        <Image
          style={styles.serviceMaintenanceWorkerRepIcon}
          resizeMode="cover"
          source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4364.png")}
        />
      </View>
     
    </View>
    </View>
);

const Screen2 = () => (
    <View style={[styles.screen]}>
    <View style={[styles.property1default, styles.property1Default3Style,{width:windowWidth-16}]}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.frameChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>30%</Text>
          <View style={[styles.rectangleGroup, styles.getADiscountSpaceBlock]}>
            <View style={styles.groupChild} />
            <Text style={[styles.todaysSpecial, styles.getADiscountTypo]}>
            Today’s Special
            </Text>
          </View>
          <Text style={[styles.getADiscount, styles.getADiscountTypo]}>
            Get a discount on every furniture cleaning and repair order valid
            for today only
          </Text>
        </View>
        <Image
          style={styles.serviceMaintenanceWorkerRepIcon}
          resizeMode="cover"
          source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/floorCleanLady.png")}
        />
      </View>
     
    </View>
    </View>
);

const Screen3 = () => (
    <View style={[styles.screen]}>
    <View style={[styles.property1default, styles.property1Default3Style,{width:windowWidth-16}]}>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.frameChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["#004c77", "#0386cf"]}
          useAngle={true}
          angle={90}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>20%</Text>
          <View style={[styles.rectangleGroup, styles.getADiscountSpaceBlock]}>
            <View style={styles.groupChild} />
            <Text style={[styles.todaysSpecial, styles.getADiscountTypo]}>
              Ramadan Kareem
            </Text>
          </View>
          <Text style={[styles.getADiscount, styles.getADiscountTypo]}>
            Get a discount on every furniture cleaning and repair order valid
            for today only
          </Text>
        </View>
        <Image
          style={styles.serviceMaintenanceWorkerRepIcon}
          resizeMode="cover"
          source={require("../assets/servicemaintenanceworkerrepairing--1-removebgpreview-1.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/glassCleanerC.png")}
        />
      </View>
     
    </View>
    </View>
);

const DiscountCarousal = () => {
  
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
    const [activeSlide, setActiveSlide] = useState(0);
    const screens = [<Screen1 />, <Screen2/>, <Screen3 />]; // Array of screen components

    const renderItem = ({ item }) => item; // Render each item directly

    return (
        <View>
            <Carousel
                data={screens}
                renderItem={renderItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth+22}
                layout={'default'}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                onSnapToItem={(index) => setActiveSlide(index)} // Update active slide
            />
            <Pagination
                dotsLength={screens.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.pagination}
                dotStyle={styles.dot}
                inactiveDotStyle={styles.dot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        borderRadius: 5,
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: "101%",
        padding: "5%",
        left:"0%"
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    pagination: {
        marginTop: "0%",
        top:-140
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#0386cf',
        marginHorizontal: -5,
    },
    framePosition: {
        height: 160,
        top: 0,
        position: "absolute",
      },
      property1Default3Style:{
        position:"absolute",
         marginLeft:"0",
         top:"12.5%",
          left:"2%",
          marginTop:"-70%"
    
      },
      getADiscountSpaceBlock: {
        marginTop: 8,
        height: 24,
      },
      getADiscountTypo: {
        fontWeight: "300",
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: Color.whait,
        fontFamily: FontFamily.dGBaysan,
      },
      frameChild: {
        backgroundColor: Color.color,
        left: 0,
        height: 160,
        top: 0,
        borderRadius: Border.br_3xs,
        width: windowWidth,
      },
      text: {
        fontSize: FontSize.size_13xl,
        fontWeight: "700",
        width: 74,
        height: 39,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        color: Color.whait,
        fontFamily: FontFamily.dGBaysan,
      },
      groupChild: {
        borderRadius: Border.br_8xs,
        backgroundColor: Color.colorGainsboro_300,
        opacity: 0.5,
        height: 24,
        width: 139,
        left: 0,
        top: 0,
        position: "absolute",
      },
      todaysSpecial: {
        top: 2,
        left: 5,
        fontSize: FontSize.size_base,
        width: 133,
        height: 19,
        position: "absolute",
      },
      rectangleGroup: {
        width: 123,
        marginTop: 8,
      },
      getADiscount: {
        fontSize: FontSize.size_4xs,
        width: 183,
        marginTop: 8,
        height: 24,
      },
      parent: {
        top: 32,
        left: "4%",
        position: "absolute",
      },
      serviceMaintenanceWorkerRepIcon: {
        top: -1,
        left: 205,
        width: 154,
        height: 154,
        display: "none",
        position: "absolute",
      },
      frameItem: {
        left: 204,
        width: 140,
        height: 160,
        top: 0,
      },
      rectangleParent: {
        height: "91.43%",
        width: "100%",
        top: 0,
        right: "0%",
        bottom: 0,
        left: "0%",
        backgroundColor: Color.colorSkyblue,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
        overflow: "hidden",
        borderRadius: Border.br_3xs,
        position: "absolute",
      },
      property1defaultChild: {
        top: "50%",
        left: "50%",
        width: 27,
        height: 7,
        position: "absolute",
      },
      property1default: {
        height: 175,
      },
});

export default DiscountCarousal;
