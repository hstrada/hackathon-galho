export default {
  // future improvements: change to spacing2px, spacing4px
  spacing: {
    none: 0,
    xxs: 2,
    extraSmall: 4,
    small: 8,
    medium: 12,
    mediumX: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 30,
    xxxlarge: 36,
    xxxxlarge: 42,
    extraLarge: 54,
  },
  borderRadius: {
    xxs: 4,
    extraSmall: 8,
    small: 12,
    medium: 16,
  },
  button: {
    height: 70,
  },
  input: {
    height: 60,
  },
};

export interface UnitPropsSpacing {
  none: number;
  xxs: number;
  extraSmall: number;
  small: number;
  medium: number;
  mediumX: number;
  large: number;
  xlarge: number;
  xxlarge: number;
  xxxlarge: number;
  xxxxlarge: number;
  extraLarge: number;
}

export interface UnitPropsBorder {
  xxs: number;
  extraSmall: number;
  small: number;
  medium: number;
}

export interface UnitPropsButton {
  height: number;
}

export interface UnitPropsInput {
  height: number;
}

export type UnitsBorderRadiusOptions = keyof UnitPropsBorder;

export type UnitsSpacingOptions = keyof UnitPropsSpacing;

export type UnitsButtonOptions = keyof UnitPropsButton;

export type UnitsInputOptions = keyof UnitPropsInput;

export interface UnitsProps {
  spacing: UnitPropsSpacing;
  borderRadius: UnitPropsBorder;
  button: UnitPropsButton;
  input: UnitPropsInput;
}
