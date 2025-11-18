import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialIcons } from "@expo/vector-icons";

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

function Input({ title, placeholder, keyboardType , secureTextEntry, iconName, value, onChangeText }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.wrap, { borderColor: isFocused ? "#2F6BFF" : "#ccc" },
      ]}
      >
      <MaterialIcons name={iconName} size={20} color="blue" style={styles.icon} /> 
      <TextInput  
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor="#a3a3a3"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  </View>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  value : PropTypes.string,
  onChangeText : PropTypes.func,
};

export default Input;

const styles = StyleSheet.create({
  container: { 
    width: "100%", 
},
  title: { 
    fontSize: 14, 
    color: "#7b7171ff", 
    marginTop: 20,
    marginBottom: 5,
},
  input: {
    flex: 1,
    color: "black",
  },
  wrap: {
    width: "100%",
    height: 49,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#2F6BFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
});