import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from "react-native";
import * as WebBrowser from 'expo-web-browser'; // Updated import statement

const PeerInside = () => {
  const navigation = useNavigation();

  const [isCollapsed, setCollapsed] = useState(true);

  const driveLink =
    "https://drive.google.com/file/d/1LzJWk387DthQ9r_0pS9o6YfohDUHf6fI/view?usp=drive_link";

  const AppointmentForm =
    "https://docs.google.com/forms/d/e/1FAIpQLSeD3SqCezrTy-4K-7nUeTH62EXELIhTuQgw4sUhpkoyynESDQ/viewform";

  const handleCertificationButton = async () => {
    await WebBrowser.openBrowserAsync(driveLink);
  };

  const handleAppointmentButton = async () => {
    await WebBrowser.openBrowserAsync(AppointmentForm);
  };

  const handleCallNumber = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    
    // Check if the device supports the given URL
    Linking.canOpenURL(phoneUrl).then((supported) => {
      if (supported) {
        // Open the phone dialer with the specified phone number
        Linking.openURL(phoneUrl);
      } else {
        console.warn("Couldn't open the phone dialer.");
      }
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
            <Image
              source={require("../../assets/homeicon.jpeg")}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'flex-end',
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.yellowBox}>
          <Image
            source={require("../../assets/peerUp.png")}
            style={styles.yellowBoxImage}
          />
        </View>
        <Text style={styles.heading}>Certified Therapist</Text>
        <TouchableOpacity
          style={styles.greyBoxHeader}
          onPress={() => setCollapsed(!isCollapsed)}
        >
          <Image
            source={require("../../assets/RajshriMam.png")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.name, styles.underline]}>
              Ms. Rajshri Shantaram Wagh
            </Text>
            <Text style={styles.name1}>Speech Therapist</Text>
          </View>
        </TouchableOpacity>
        {!isCollapsed && (
          <View style={styles.dropdownContent}>
            <Text style={styles.fieldLabel}> Clinic Address:</Text>
            <Text>
              Infront of Dr. Babasaheb Ambedkar Garden Near Khwajamia Dargah,
              Ganesh Colony, Jalgaon, Maharashtra 425001
            </Text>
            <Text style={styles.fieldLabel}>Contact:</Text>
            <Text onPress={handleCallNumber}>Phone: +91 9096769868</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.certificationButton}
          onPress={handleCertificationButton}
        >
          <Text style={styles.buttonText}>Certification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.AppointmentFormButton}
          onPress={handleAppointmentButton}
        >
          <Text style={styles.buttonText}>AppointmentForm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFBEF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  yellowBox: {
    height: 300,
    backgroundColor: "#FBB718",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  yellowBoxImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "700",
    textAlign: "center",
  },
  greyBoxHeader: {
    backgroundColor: "#D3D3D3",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  name1: {
    fontWeight: "400",
  },
  certificationButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  AppointmentFormButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  dropdownContent: {
    backgroundColor: "#D3D3D3",
    padding: 10,
  },
  fieldLabel: {
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default PeerInside;
