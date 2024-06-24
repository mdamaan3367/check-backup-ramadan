import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

const YourComponent = () => {
  const defaultStartDate = '2024-04-30'; // Default start date
  const defaultEndDate = '2024-06-25'; // Default end date
  const daysArray = ["Saturday", "Thursday", "Tuesday"];
  const [dayCounts, setDayCounts] = useState({});
  const [cumulativeSum, setCumulativeSum] = useState(0);

  useEffect(() => {
    const start = moment(defaultStartDate, 'YYYY-MM-DD');
    const end = moment(defaultEndDate, 'YYYY-MM-DD');

    const counts = {};
    let currentDate = start.clone();
    let cumulative = 0;

    while (currentDate.isSameOrBefore(end)) {
      const dayOfWeek = currentDate.format('dddd');
      if (daysArray.includes(dayOfWeek)) {
        counts[dayOfWeek] = (counts[dayOfWeek] || 0) + 1;
        cumulative++;
      }
      currentDate.add(1, 'days');
    }

    setDayCounts(counts);
    setCumulativeSum(cumulative);
  }, []);

  return (
    <View>
      {/* Display the counts of each day */}
      <View>
        <Text>Day Counts:</Text>
        {Object.entries(dayCounts).map(([day, count]) => (
          <Text key={day}>{`${day}: ${count}`}</Text>
        ))}
      </View>

      {/* Display the cumulative sum */}
      <View>
        <Text>Cumulative Sum: {cumulativeSum}</Text>
      </View>
    </View>
  );
};

export default YourComponent;
