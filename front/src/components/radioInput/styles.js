import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#21aaf1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    backgroundColor: "#21aaf1",
  },
  radioText: {
    fontSize: 14,
    color: "#546E7A",
  },
});

export { styles };
