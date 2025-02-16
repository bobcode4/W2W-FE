import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";

const AuthButton = ({
  title,
  onPress,
  disabled,
  variant = "solid",
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "outline" ? styles.outline : null,
        disabled ? styles.disabled : null,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && <Image source={icon} style={styles.icon} />}
      <Text
        style={[styles.text, variant === "outline" ? styles.textOutline : null]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#E57373",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  outline: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000000",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  textOutline: {
    color: "#7F7F7F",
    fontSize: 14,
    fontWeight: "400",
  },
  disabled: {
    backgroundColor: "#F3C6C6",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 20,
    resizeMode: "contain",
  },
});

export default AuthButton;
