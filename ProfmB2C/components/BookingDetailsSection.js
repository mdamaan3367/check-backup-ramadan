import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const BookingDetailsSection = () => {
  return (
    <View>
      <View style={styles.frameGroupFlexBox}>
        <Text style={styles.bookingDetails}>Booking Details</Text>
      </View>
      <View style={styles.frameWrapper}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View>
            <Text style={styles.servicesTypo}>Services</Text>
            <Text style={[styles.serviceType, styles.servicesTypo]}>
              Service type
            </Text>
            <Text style={[styles.serviceType, styles.servicesTypo]}>
              Length of service
            </Text>
            <Text style={[styles.serviceType, styles.servicesTypo]}>
              Start date and time
            </Text>
          </View>
          <View style={styles.equipmentMaintenanceParent}>
            <Text style={styles.maintenanceTypo}>Equipment maintenance</Text>
            <Text style={[styles.pumpMaintenance, styles.maintenanceTypo]}>
              Pump maintenance
            </Text>
            <Text style={styles.oneTimeService}>One-time service</Text>
            <Text style={[styles.pumpMaintenance, styles.maintenanceTypo]}>
              Jan 30, 2023 | 9:00 AM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  servicesTypo: {
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  maintenanceTypo: {
    width: 136,
    fontSize: FontSize.med_size,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  bookingDetails: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    width: 125,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  serviceType: {
    marginTop: 16,
  },
  pumpMaintenance: {
    marginTop: 16,
  },
  oneTimeService: {
    width: 126,
    fontSize: FontSize.med_size,
    marginTop: 16,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    alignItems: "center",
  },
  equipmentMaintenanceParent: {
    marginLeft: 79,
  },
  frameGroup: {
    width: 311,
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    overflow: "hidden",
    padding: Padding.p_base,
    marginTop: 16,
  },
});

export default BookingDetailsSection;
