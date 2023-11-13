import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Modal, StyleSheet, Image, FlatList } from "react-native";

function Picker({ placeHolder = "Choose", selectedItem, items, onSelect, containerStyle, inputStyle, iconStyle }) {
    const [chosen, setChosen] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSelect = (item) => {
        setChosen(item);
        onSelect(item);
        setTimeout(() => {
            closeModal();
        }, 300);
    };

    const Input = () => (
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.input, containerStyle]} testID="picker-input">
            <Text style={[inputStyle]}>{chosen ? chosen.label : placeHolder}</Text>
            <Image source={require("../assets/chevron-down.png")} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
    );

    useEffect(() => {
        setChosen(selectedItem);
    }, [selectedItem]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Input />

            <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={closeModal}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }} activeOpacity={1} onPressOut={closeModal}>
                    <View style={{ flex: 3, backgroundColor: "rgba(0, 0, 0, 0)" }} />

                    <View style={{ borderTopWidth: 1, borderColor: "#dfdfdf", backgroundColor: "white", padding: 16, maxHeight: "25%" }}>
                        <View style={{}}>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={{ color: "#000" }}>X</Text>
                            </TouchableOpacity>

                            <FlatList
                                data={items}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelect(item)} style={[styles.item, item === chosen ? { backgroundColor: "#dfdfdf" } : null]}>
                                        <Text style={styles.label}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#dfdfdf",
        borderRadius: 10
    },
    icon: {
        width: 25,
        height: 25
    },
    modal: {
        maxHeight: 150
    },
    itemCotainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderWidth: 1,
        padding: 10
    },
    closeButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        right: 10,
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        backgroundColor: "#dfdfdf"
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#dfdfdf"
    },
    label: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000"
    }
});

export default Picker;
