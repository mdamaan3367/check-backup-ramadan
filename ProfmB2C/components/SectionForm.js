import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, Image, View, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

import moment from 'moment';
import Swiper from 'react-native-swiper';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SectionForm = ({ onDateSelected }) => {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());


  useEffect(() => {
    console.log("Selected Date:", selectedDate);
    onDateSelected(selectedDate); // Send current date to parent component
  }, [selectedDate]);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const currentMonthYear = moment(value).format('MMMM YYYY');

  const handleBackward = () => {
    swiper.current.scrollBy(-1);
  };

  const handleForward = () => {
    swiper.current.scrollBy(1);
  };

  const handleDateSelection = (date) => {
    console.log(date,"daete")
    // Check if the provided date is null or undefined
    if (date === null || date === undefined) {
      // If so, set the current date
      date = new Date();
    }
  
    // Adjust the date by the timezone offset
    const timezoneOffsetInMinutes = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - (timezoneOffsetInMinutes * 60000));
  
    // Update the state with the adjusted date
    setSelectedDate(adjustedDate);
  
    // Update the value state
    setValue(date);
  };
  
  

  return (
    <View>
      <Text style={styles.selectDate}>Select date</Text>
      <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
        <View style={[styles.january2024Parent, styles.parentFlexBox]}>
          <Text style={styles.january2024}>{currentMonthYear}</Text>
          <View style={styles.arrowCircleLeftParent}>
            <TouchableOpacity onPress={handleBackward}>
              <Image
                style={styles.arrowIconLayout}
                resizeMode="cover"
                source={require("../assets/arrowcircleleft.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForward}>
              <Image
                style={[styles.arrowCircleRightIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowcircleright.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={styles.picker}>
            <Swiper
              index={1}
              ref={swiper}
              loop={false}
              showsPagination={false}
              onIndexChanged={(ind) => {
                if (ind === 1) {
                  return;
                }
                setTimeout(() => {
                  const newIndex = ind - 1;
                  const newWeek = week + newIndex;
                  setWeek(newWeek);
                  setValue(moment(value).add(newIndex, 'week').toDate());
                  swiper.current.scrollTo(1, false);
                }, 100);
              }}>
              {weeks.map((dates, index) => (
                <View
                  style={[styles.itemRow, { paddingHorizontal: 16 }]}
                  key={index}>
                  {dates.map((item, dateIndex) => {
                    const isActive = value.toDateString() === item.date.toDateString();
                    return (
                      <TouchableWithoutFeedback
                        key={dateIndex}
                        onPress={() => handleDateSelection(item.date)}>
                        <View
                          style={[
                            styles.item,
                            isActive && {
                              backgroundColor: Color.praimary,
                              borderColor: Color.praimary,
                            },
                          ]}>
                          <Text
                            style={[
                              styles.itemWeekday,
                              isActive && { color: '#fff' },
                            ]}>
                            {item.weekday}
                          </Text>
                          <Text
                            style={[
                              styles.itemDate,
                              isActive && { color: '#fff' },
                            ]}>
                            {item.date.getDate()}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </View>
              ))}
            </Swiper>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    justifyContent: "center",
  },
  selectDate: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    width: 100,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  january2024: {
    color: Color.a6A6A6,
    width: 79,
    textAlign: "center",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    justifyContent: "center",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  arrowCircleRightIcon: {
    marginLeft: 10,
  },
  arrowCircleLeftParent: {
    marginLeft: 181,
    flexDirection: "row",
  },
  january2024Parent: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 60,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30
  },
  itemRow: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
    left: "-17%",
    height: "100%"
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  picker: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 85
  },
  groupParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameWrapper: {
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
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    overflow: "hidden",
    paddingVertical: Padding.p_xs,
    marginTop: 16,
    width: "98%"
  },
});

export default SectionForm;
