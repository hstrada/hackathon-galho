export default {
  primary: '#658072',
  secondary: '#718F7F',
  tertiary: '#DDA95D',
  quaternary: '#544A38',
  background: '#FDFAF5',
  gray: '#F6F6F6',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export interface ColorPropsBackground {
  /** Primary is: gray... */
  primary: string;
  secondary: string;
}

export interface ColorsPropsText {
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
  disabled: string;
  white: string;
}

export type ButtonColorsScheme = {
  borderColor?: string;
  backgroundColor: string;
  textColor: string;
};

export interface ColorsPropsButton {
  base: ButtonColorsScheme;
  outline: ButtonColorsScheme;
}

export interface ColorsProps {
  background: ColorPropsBackground;
  text: ColorsPropsText;
  button: ColorsPropsButton;
}

// general export for components
export type ColorsBackgroundOptions = keyof ColorPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsButtonOptions = keyof ColorsPropsButton;
