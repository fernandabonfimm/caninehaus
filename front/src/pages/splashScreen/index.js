import React, { useEffect } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function SplashScreen() {
  const navigation = useNavigation();
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const redirectTimer = setTimeout(() => {
      navigation.replace("Login");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [animation, navigation]);

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rotateY = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "180deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/logobranca.png")}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ rotateY }],
          },
        ]}
      />
    </View>
  );
}
