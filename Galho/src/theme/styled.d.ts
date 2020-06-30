// import { DefaultTheme } from 'styled-components/native';

import { ColorsProps } from './colors';

import { FontsProps } from './fonts';

import { UnitsProps } from './units';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsProps;
    units: UnitsProps;
    fonts: FontsProps;
  }
}
