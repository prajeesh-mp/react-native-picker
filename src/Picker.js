import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native";

function Picker({ placeHolder = "Choose", selected, items, onSelect }) {
    const [item, setItem] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setItem(selected);
    }, [selected]);

    return (
        <View>
            <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                <Text>{item ? item.label : placeHolder}</Text>
            </TouchableOpacity>

            <Modal visible={openModal}>
                <View style={styles.itemCotainer}>
                    {items &&
                        items.map((item, inedx) => (
                            <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
                                <Text style={styles.label}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCotainer: {
        padding: 10
    },
    item: {
        padding: 10,
        marginVertical: 5
    },
    label: {
        textAlign: "center",
        fontSize: 15,
        color: "#000000"
    }
});

export default Picker;
