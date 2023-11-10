import React from 'react';
import { Text, View } from "react-native";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

interface Item {
  label: string;
  value: string | number;
}

interface PickerProps {
  items: Item[];
  onSelect: (item: Item) => void;
  selected?: Item; 
}

/**
 * 
 * @param {Array} items - [{ label: string, value: string | number }] 
 * @param {Function} onSelect 
 * @param {Object} selected - { label: string, value: string | number }
 * @returns 
 */
export function Picker({ items, onSelect, selected }: PickerProps) {
  return (
    <View>
      {items.map((item, index) => (
        <Text>{item.label}</Text>
      ))}
    </View>
  )
}