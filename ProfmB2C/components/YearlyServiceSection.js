import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image,Button,TouchableOpacity } from "react-native";
import Property1OneTimeService from "./Property1OneTimeService";

const YearlyServiceSection = () => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const toggleButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const handleSelection = (option) => {
    // Handle selection logic here
    console.log('Selected:', option);
    // Minimize additional buttons after selection
    setShowAdditionalButtons(false);
  };
  return (
    <View>
      <Property1OneTimeService
        oneTimeService="One time service"
        oneTimeHourlyReservationS="One-time hourly reservation service"
        rectangle4369={require("../assets/rectangle-4369.png")}
        property1OneTimeServiceMarginTop="unset"
        oneTimeHourlyReservationWidth={184}
      />
       <View style={styles.container}>
      <Button title="Toggle Additional Buttons" onPress={toggleButtons} />
      <View style={[styles.additionalButtonsContainer, { height: showAdditionalButtons ? 'auto' : 0 }]}>
        <View style={styles.additionalButtons}>
          <TouchableOpacity style={styles.button} onPress={() => handleSelection('Option 1')}>
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSelection('Option 2')}>
            <Text>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSelection('Option 3')}>
            <Text>Option 3</Text>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </View>
      </View>
    </View>
      <Property1OneTimeService
        oneTimeService="Monthly service"
        oneTimeHourlyReservationS={`Periodic service with several visits monthly.
`}
        rectangle4369={require("../assets/rectangle-43691.png")}
        property1OneTimeServiceMarginTop={16}
        oneTimeHourlyReservationWidth={192}
      />
      <Property1OneTimeService
        oneTimeService="Yearly service"
        oneTimeHourlyReservationS={`Multi-visit yearly service available through contract.
`}
        rectangle4369={require("../assets/rectangle-43692.png")}
        property1OneTimeServiceMarginTop={16}
        oneTimeHourlyReservationWidth={184}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default YearlyServiceSection;
