import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  placeholderTextColor?: string;
  isFocused?: boolean;
}

export interface StyledInputProps extends Partial<InputProps> {
  isFocused: boolean;
}
