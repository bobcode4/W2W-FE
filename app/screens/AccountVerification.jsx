import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const countries = [
  { code: "+1", flag: require("../../assets/flags/us.webp") },
  { code: "+234", flag: require("../../assets/flags/nigeria.png") },
  { code: "+86", flag: require("../../assets/flags/china.png") },
  { code: "+44", flag: require("../../assets/flags/uk.webp") },
  { code: "+27", flag: require("../../assets/flags/south_africa.jpg") },
];

const AccountVerification = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isValidPhone = phoneNumber.length >= 10;

  const handleContinue = () => {
    if (isValidPhone) {
      router.push({
        pathname: "/screens/OTPVerification",
        params: { phone: `${selectedCountry.code} ${phoneNumber}` },
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace("/screens/SignUp")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Verification</Text>
        </View>

        {/* Instruction */}
        <Text style={styles.subtitle}>
          For added security, please enter your phone number to receive a
          one-time password (OTP) and complete your registration.
        </Text>

        <Text style={styles.label}>Phone Number</Text>

        {/* Phone Number Input Section */}
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => setDropdownVisible(!dropdownVisible)}
            style={styles.countrySelector}
          >
            <Image source={selectedCountry.flag} style={styles.flag} />
            <Text style={styles.countryCode}>{selectedCountry.code}</Text>
            <MaterialIcons name={"arrow-drop-down"} size={20} color="#888" />
          </TouchableOpacity>

          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Dropdown for Country Selection */}
        {dropdownVisible && (
          <View style={styles.dropdown}>
            {countries.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedCountry(country);
                  setDropdownVisible(false);
                }}
              >
                <Image source={country.flag} style={styles.flag} />
                <Text style={styles.dropdownText}>{country.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !isValidPhone && styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={!isValidPhone}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: "#434343",
    textAlign: "center",
    marginRight: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#434343",
    lineHeight: 20,
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: "#7F7F7F",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#434343",
    borderRadius: 10,
    alignItems: "center",
    height: 50,
  },
  countrySelector: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    backgroundColor: "#DCD9DF",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  countryCode: {
    fontSize: 12,
    marginLeft: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  flag: {
    width: 24,
    height: 16,
    resizeMode: "contain",
  },
  dropdown: {
    width: 90,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#f9f4f4",
    padding: 10,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownText: {
    fontSize: 14,
    marginLeft: 10,
    color: "#434343",
  },
  continueButton: {
    backgroundColor: "#E57373",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: "#F3C6C6",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountVerification;
