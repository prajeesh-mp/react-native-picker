import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Picker from "react-native-picker";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <Picker
        items={[
          { label: "One", value: 1 },
          { label: "Two", value: 2 },
          { label: "Three", value: 3 },
          { label: "Four", value: 4 },
        ]}
        onSelect={(item) => console.log(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
});
