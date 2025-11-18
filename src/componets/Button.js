import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Button({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: disabled ? "#c8d7f1ff" : "#2d66f6ff" },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
  },
});
