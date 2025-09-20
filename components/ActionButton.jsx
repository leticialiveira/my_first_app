import { Pressable, StyleSheet, Text } from "react-native";
export const ActionButton = ({key, active, onPress, display}) => {
    return (
       <Pressable key={key}
            style={active ? styles.menuPressableAtive : null}
            onPress={onPress}
            >
            <Text style={styles.menuText}>
              {display}
              </Text>
          </Pressable>
    )
}
const styles = StyleSheet.create({
  menuPressableAtive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  menuText:{
    color: "#FFF",
    padding: 16
  }
});
