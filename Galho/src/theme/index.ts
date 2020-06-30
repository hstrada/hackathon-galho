import 'styled-components/native';

import { DefaultTheme } from 'styled-components/native';

import colors from './colors';

import fonts from './fonts';

import units from './units';

export const galhoTheme: DefaultTheme = {
  colors: {
    background: {
      primary: colors.background,
      secondary: colors.primary,
    },
    text: {
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      fourth: colors.quaternary,
      disabled: colors.gray,
      white: colors.white,
    },
    button: {
      base: {
        backgroundColor: colors.tertiary,
        textColor: colors.background,
      },
      outline: {
        backgroundColor: colors.transparent,
        textColor: colors.tertiary,
        borderColor: colors.tertiary,
      },
    },
  },
  units: {
    spacing: {
      none: units.spacing.none,
      xxs: units.spacing.xxs,
      extraSmall: units.spacing.extraSmall,
      small: units.spacing.small,
      medium: units.spacing.medium,
      mediumX: units.spacing.mediumX,
      large: units.spacing.large,
      xlarge: units.spacing.xlarge,
      xxlarge: units.spacing.xxlarge,
      xxxlarge: units.spacing.xxxlarge,
      xxxxlarge: units.spacing.xxxxlarge,
      extraLarge: units.spacing.extraLarge,
    },
    borderRadius: {
      xxs: units.borderRadius.xxs,
      extraSmall: units.borderRadius.extraSmall,
      small: units.borderRadius.small,
      medium: units.borderRadius.medium,
    },
    button: {
      height: units.button.height,
    },
    input: {
      height: units.input.height,
    },
  },
  fonts: {
    size: {
      xxs: fonts.size.xxs,
      xs: fonts.size.xs,
      s: fonts.size.s,
      p: fonts.size.p,
      xp: fonts.size.xp,
      xxp: fonts.size.xxp,
      m: fonts.size.m,
      xm: fonts.size.xm,
      xxm: fonts.size.xxm,
      g: fonts.size.g,
      xg: fonts.size.xg,
      xxg: fonts.size.xxg,
      gg: fonts.size.gg,
      xxgg: fonts.size.xxgg,
    },
    latoBold: fonts.latoBold,
    latoLight: fonts.latoLight,
    latoRegular: fonts.latoRegular,
  },
};
