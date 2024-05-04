import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import MultiStepForm from "../../components/steps";

export default function RegisterUser() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logocanine.png")}
      />
      <View style={styles.divTitle}>
        <Text style={styles.title}>Bem-vindo a Canine Haus!</Text>
        <Text style={styles.subtitle}>
          Preencha o formulário abaixo para fazer um cadastro
        </Text>
      </View>
      <View>
        <MultiStepForm />
      </View>
    </View>
  );
}
