import { DefaultTheme } from 'styled-components';

import { ReactNode } from 'react';

import { ViewProps } from 'react-native';

import { ColorsBackgroundOptions } from '../../theme/colors';

import { UnitsSpacingOptions } from '../../theme/units';

export type GridProps = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type GridAlign =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

export type FlexWrapProps =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'initial'
  | 'inherit';

export interface GridAlignProps {
  flexDirection: GridProps;
  theme?: DefaultTheme;
}
export interface CustomGridProps extends ViewProps {
  children?: ReactNode;
  opacity?: number;
  flexDirection?: GridProps;
  alignItems?: GridAlign;
  justifyContent?: GridAlign;
  marginTop?: UnitsSpacingOptions | 'auto';
  marginBottom?: UnitsSpacingOptions;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  paddingTop?: UnitsSpacingOptions;
  paddingBottom?: UnitsSpacingOptions;
  paddingLeft?: UnitsSpacingOptions;
  paddingRight?: UnitsSpacingOptions;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  height?: number;
  flex?: number;
  backgroundColor?: ColorsBackgroundOptions;
  zIndex?: number;
  testID?: string;
  flexWrap?: FlexWrapProps;
}

export interface CustomProps extends Partial<GridAlignProps> {
  marginTop?: UnitsSpacingOptions | 'auto';
  marginBottom?: UnitsSpacingOptions;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  paddingTop?: UnitsSpacingOptions;
  paddingBottom?: UnitsSpacingOptions;
  paddingLeft?: UnitsSpacingOptions;
  paddingRight?: UnitsSpacingOptions;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  height?: number;
  flexWrap?: FlexWrapProps;
  opacity?: number;
}
