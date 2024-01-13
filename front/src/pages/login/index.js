import React from "react";
import TextInputComponent from "../../components/textInput";
import ButtonComponent from "../../components/button";
import PasswordInputComponent from "../../components/passwordInput";
import { Image, View } from "react-native";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logocanine.png")}
      />
      <TextInputComponent placeholder="Email" />
      <PasswordInputComponent placeholder="Password" />
      <ButtonComponent title="Login" onPress={() => {}} />
    </View>
  );
}
