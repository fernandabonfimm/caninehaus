import React from "react";
import { styles } from "./styles";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export default function PasswordInputComponent({
  placeholder,
  value,
  onChangeText,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.passwordInputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        secureTextEntry={!isPasswordVisible}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={togglePasswordVisibility}
      >
        <Ionicons
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={24}
          color="#546E7A"
        />
      </TouchableOpacity>
    </View>
  );
}
