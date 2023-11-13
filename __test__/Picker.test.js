// Picker.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Picker from "../src/Picker";

test("renders picker correctly", () => {
    const items = [
        { label: "Item 1", value: 1 },
        { label: "Item 2", value: 2 },
        { label: "Item 3", value: 3 }
    ];

    const onSelect = jest.fn();

    const { getByText, getByTestId } = render(<Picker items={items} onSelect={onSelect} />);

    // Check if the placeholder is rendered
    expect(getByText("Choose")).toBeTruthy();

    // Open the modal
    fireEvent.press(getByTestId("picker-input"));

    // Check if items are rendered in the modal
    expect(getByText("Item 1")).toBeTruthy();
    expect(getByText("Item 2")).toBeTruthy();
    expect(getByText("Item 3")).toBeTruthy();

    // Select an item
    fireEvent.press(getByText("Item 2"));

    // Check if the selected item is rendered in the input
    expect(getByText("Item 2")).toBeTruthy();

    // Check if onSelect is called with the correct item
    expect(onSelect).toHaveBeenCalledWith({ label: "Item 2", value: 2 });
});
