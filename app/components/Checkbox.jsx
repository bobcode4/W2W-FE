import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Checkbox = ({ label, checked, onToggle, error }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.container, checked && styles.checked]}
        onPress={onToggle}
      >
        <MaterialIcons
          name={checked ? "check" : ""}
          size={16}
          color={checked ? "#FFFFFF" : "transparent"}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  container: {
    width: 20,
    height: 20,
    borderRadius: 8, // Rounded corners
    borderWidth: 2,
    borderColor: "#E57373", // Primary color
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#E57373", // Primary color when checked
  },
  label: {
    fontSize: 12,
    color: "fontSize: 12,",
    flexShrink: 1,
  },
  error: {
    color: "#E57373",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Checkbox;
