import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const RadioButton = ({ selected, onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.radioButton}>
    <View style={[styles.radioInner, selected && styles.radioSelected]}>
      {selected && <AntDesign name="check" size={14} color="#fff" />}
      <Text style={styles.radioText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default RadioButton;
