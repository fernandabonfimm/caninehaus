import React from "react";
import TextInputComponent from "../../components/textInput";
import ButtonComponent from "../../components/button";
import PasswordInputComponent from "../../components/passwordInput";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../context/userContext";
import Toast from "react-native-toast-message";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  const { setUser } = useUser();

  const handleLogin = () => {
    if (email && password) {
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Login realizado com sucesso",
      }).then(() => {
        setUser({
          email: email,
          password: password,
        });
      });
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logocanine.png")}
      />
      <View style={styles.divTitle}>
        <Text style={styles.title}>Bem-vindo a Canine Haus!</Text>
        <Text style={styles.subtitle}>
          Faça login para continuar ou crie um cadastro
        </Text>
      </View>
      <View style={styles.divInputs}>
        <TextInputComponent placeholder="Email" onChangeText={setEmail} value={email}/>
        <PasswordInputComponent placeholder="Password" onChangeText={setPassword} value={password}/>
      </View>
      <View style={styles.divForgotPass}>
        <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
        <AntDesign name="key" size={16} color="#2F80ED" />
      </View>
      <View style={styles.divBtn}>
        <ButtonComponent
          title="Fazer login"
          onPress={handleLogin}
          style={"solid"}
        />
        <ButtonComponent
          title="Cadastre-se"
          onPress={handleRegister}
          style={"outline"}
        />
      </View>
    </View>
  );
}
