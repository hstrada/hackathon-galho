import { TextProps } from 'react-native';

import { ColorsTextOptions } from '../../theme/colors';

import { TextOptions, TextUnits } from '../../theme/fonts';

import { UnitsSpacingOptions } from '../../theme/units';

export interface PropsBaseTitle extends TextProps {
  text: string | number | null;
  color?: ColorsTextOptions;
  testID?: string;
  align?: 'center' | 'left' | 'right';
  weight?: 'bold' | 'normal';
  lineHeight?: UnitsSpacingOptions;
  textDecorationStyle?: 'underline' | 'overline' | 'line-through';
  textDecorationStyleColor?: ColorsTextOptions;
  onPress?: () => void;
  numberOfLines?: number;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  fontSize?: TextUnits;
  fontFamily?: TextOptions;
}

export interface PropsStyledBaseTitle {
  color?: ColorsTextOptions;
  align?: 'center' | 'left' | 'right';
  weight?: 'bold' | 'normal';
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  lineHeight?: UnitsSpacingOptions;
  textDecorationStyle?: 'underline' | 'overline' | 'line-through';
  textDecorationStyleColor?: ColorsTextOptions;
  fontSize?: TextUnits;
  fontFamily?: TextOptions;
}

export interface PropsSkeleton {
  width?: number;
  height?: number;
}
