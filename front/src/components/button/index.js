import React from "react";
import { Button } from "react-native";
import { styles } from "./styles";

export default function ButtonComponent({ title, onPress }) {
  return <Button style={styles.button} title={title} onPress={onPress} />;
}
