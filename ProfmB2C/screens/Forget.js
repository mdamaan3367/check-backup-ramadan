import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const PieChartComponent = () => {
  const data = [
    {
      key: 1,
      value: 50,
    },
    {
      key: 2,
      value: 30,
    },
    {
      key: 3,
      value: 20,
    },
  ];

  // Generate random colors for each slice
  const generateRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
  const colors = data.map(() => generateRandomColor());

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PieChart
        style={{ height: 200, width: 200 }}
        data={data}
        innerRadius="0%"
        outerRadius="80%"
        valueAccessor={({ item }) => item.value}
        animate
      />
    </View>
  );
};

export default PieChartComponent;
