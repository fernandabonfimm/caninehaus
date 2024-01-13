import React from "react";
import { styles } from "./styles";
import { TextInput } from "react-native";

export default function TextInputComponent({ placeholder, value, onChangeText }) {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
  );
}
