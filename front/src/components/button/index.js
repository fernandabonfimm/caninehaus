import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function ButtonComponent({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={
        style === "solid"
          ? styles.buttonSolid
          : style === "outline"
          ? styles.buttonOutline
          : style === "solidRed"
          ? styles.buttonSolidRed
          : style === "outlineRed"
          ? styles.buttonOutlineRed
          : style === "disabled"
          ? styles.buttonDisabled
          : null
      }
      onPress={onPress}
    >
      <Text
        style={{
          color:
            style === "solid"
              ? "#fff"
              : style === "outline"
              ? "#21aaf1"
              : style === "solidRed"
              ? "#fff"
              : style === "outlineRed"
              ? "#f31938"
              : style === "disabled"
              ? "#324858"
              : null,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
