import { Pressable, StyleSheet, Text } from "react-native";
export const FokusButton = ({title, onPress}) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BB72FF",
    borderRadius: 32,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
  },
});