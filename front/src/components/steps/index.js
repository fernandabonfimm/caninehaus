import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ButtonComponent } from "../button";
import {TextInputComponent} from "../textInput";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (value, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <TextInputComponent
              placeholder="Digite algo..."
              value={formData.step1}
              onChangeText={(text) => handleChange(text, "step1")}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <TextInputComponent
              placeholder="Digite algo..."
              value={formData.step2}
              onChangeText={(text) => handleChange(text, "step2")}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <TextInputComponent
              placeholder="Digite algo..."
              value={formData.step3}
              onChangeText={(text) => handleChange(text, "step3")}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        {[1, 2, 3].map((number) => (
          <View
            key={number}
            style={[
              styles.stepDot,
              { backgroundColor: number <= step ? "#21aaf1" : "#F1F5F5" },
            ]}
          />
        ))}
        <View style={styles.stepLine} />
      </View>

      {renderStep()}

      <View style={styles.navigationContainer}>
        {step > 1 && (
          <ButtonComponent
            style={"disabled"}
            onPress={handlePrev}
            title="Anterior"
          ></ButtonComponent>
        )}

        {step < 3 && (
          <ButtonComponent
            style={"solidRed"}
            onPress={handleNext}
            title="Próximo"
          ></ButtonComponent>
        )}
      </View>
    </View>
  );
};

export default MultiStepForm;
