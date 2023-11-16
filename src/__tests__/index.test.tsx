import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Picker from '../index';

describe('Picker', () => {
  const onSelect = jest.fn();

  beforeEach(() => {
    const items = [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
    ];

    render(<Picker items={items} onSelect={onSelect} />);
  });

  it('should render default placeholder', () => {
    expect(screen.getByText('Choose')).toBeTruthy();
  });

  it('should open the modal', () => {
    fireEvent.press(screen.getByTestId('picker-input'));
  });

  it('should render items in the modal', () => {
    fireEvent.press(screen.getByTestId('picker-input'));
    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(screen.getByText('Item 2')).toBeTruthy();
    expect(screen.getByText('Item 3')).toBeTruthy();
  });

  it('should be able to select an item', () => {
    fireEvent.press(screen.getByTestId('picker-input'));
    fireEvent.press(screen.getByText('Item 2'));
  });

  it('should call onSelect after selecting the item with the correct item', () => {
    fireEvent.press(screen.getByTestId('picker-input'));
    fireEvent.press(screen.getByText('Item 2'));
    expect(onSelect).toHaveBeenCalledWith({ label: 'Item 2', value: 2 });
  });
});
