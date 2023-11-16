import { type StyleProp, type ViewStyle, type ImageStyle } from 'react-native';
import Item from './item';

interface PickerProps {
  placeHolder?: string;
  selectedItem?: Item | null;
  items: Item[];
  onSelect: (item: Item) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export default PickerProps;
