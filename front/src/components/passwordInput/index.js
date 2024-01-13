import React from "react";
import { styles } from "./styles";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

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
        <AntDesign name={isPasswordVisible ? "eye" : "eyeo"} size={24} color="#2F80ED" />
      </TouchableOpacity>
    </View>
  );
}
