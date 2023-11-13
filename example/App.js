import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Picker from "rn-simple-picker";

export default function App() {
    const [selected, setSelected] = useState(null);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={{ textAlign: "center" }}>React Native Picker</Text>
            <Text style={{ textAlign: "center" }}>Simple DropDown for both iOS and Android</Text>
            <Picker
                items={[
                    { label: "One", value: 1 },
                    { label: "Two", value: 2 },
                    { label: "Three", value: 3 },
                    { label: "Four", value: 4 }
                ]}
                onSelect={(item) => setSelected(item)}
                // selectedItem={selected}
            />
            <Text>Selected: </Text>
            <Text>{JSON.stringify(selected)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: "space-between",
        paddingVertical: 80,
        paddingHorizontal: 20
    }
});
