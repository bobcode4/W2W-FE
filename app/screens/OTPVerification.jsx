import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const OTPVerification = () => {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) setTimeLeft(timeLeft - 1);
      if (timeLeft === 1) setShowResend(true);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleInputChange = (index, value) => {
    let newOtp = [...otp];

    if (value.length === 1 && /^[0-9]$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputRefs[index + 1].current.focus();
      }
    } else if (value === "") {
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleResend = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      setTimeLeft(60);
      setShowResend(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Verification</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Instructions */}
        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to your phone number to{" "}
          <Text style={styles.bold}>{phone}</Text>{" "}
          <Text>verify your account.</Text>
        </Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.otpBox, digit !== "" && styles.filledBox]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              ref={inputRefs[index]}
              onChangeText={(value) => handleInputChange(index, value)}
            />
          ))}
        </View>

        {/* Resend Code */}
        {showResend ? (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resend}>
              Didn’t get the code?{" "}
              <Text style={styles.resendAgain}>Resend again</Text>
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.timer}>{timeLeft}s left</Text>
        )}

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !isOtpComplete && styles.disabledButton,
          ]}
          disabled={!isOtpComplete}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Resend Success Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require("../../assets/images/checkmark.webp")}
              style={styles.checkIcon}
            />
            <Text style={styles.modalText}>Code has been resent to</Text>
            <Text style={styles.modalPhone}>{phone}</Text>
          </View>
        </View>
      </Modal>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#434343",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  otpBox: {
    width: 76,
    height: 76,
    borderWidth: 1,
    borderColor: "#CCC",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 8,
    marginHorizontal: 8,
    color: "#000",
  },
  filledBox: {
    borderColor: "#E57373",
  },
  timer: {
    textAlign: "center",
    color: "#E57373",
    fontSize: 12,
    marginBottom: 20,
  },
  resend: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },
  resendAgain: {
    color: "#F77A7F",
    fontWeight: "400",
  },
  continueButton: {
    backgroundColor: "#E57373",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 150,
  },
  disabledButton: {
    backgroundColor: "#F3C6C6",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "224",
    height: "224",
    padding: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  modalPhone: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default OTPVerification;
