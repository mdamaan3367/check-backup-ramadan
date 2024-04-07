import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import OnBordeing from './Onbordeing';
import OnBordeing2 from './Onbordeing2';
import OnBordeing3 from './Onbordeing3';
import OnBordeing4 from './Onbordeing4';
import OnBordeing5 from './OnBordeing5';
import OnBordeing6 from './OnBordeing6';
import OnBordeing7 from './OnBordeing7';

import OnBordeing8 from './OnBordeing8';

// Example component for each screen

const Pagination = ({activeSlide}) => (
  <View style={styles.pagination}>
    <View
      style={[
        styles.dot,
        {backgroundColor: activeSlide === 0 ? 'black' : 'lightgrey'},
      ]}
    />
    <View
      style={[
        styles.dot,
        {backgroundColor: activeSlide === 1 ? 'black' : 'lightgrey'},
      ]}
    />
    <View
      style={[
        styles.dot,
        {backgroundColor: activeSlide === 2 ? 'black' : 'lightgrey'},
      ]}
    />
  </View>
);
const OnbordingCarousel = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const screens = [
    <OnBordeing7 onNext={() => goToNextSlide()} />,
    <OnBordeing8 onNext={() => goToNextSlide()} />,
    <OnBordeing5 onNext={() => goToNextSlide()} />,
    <OnBordeing6 onNext={() => goToNextSlide()} />,
  ]; // Array of screen components

  const renderItem = ({item}) => item; // Render each item directly

  const goToNextSlide = () => {
    const nextSlide = (activeSlide + 1) % screens.length;
    setActiveSlide(nextSlide);
    carouselRef.current.snapToItem(nextSlide);
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={screens}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        layout={'default'}
        loop={false}
        autoplay={false}
        autoplayInterval={4000}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    borderRadius: 5,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  pagination: {
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default OnbordingCarousel;
