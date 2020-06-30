export default {
  size: {
    xxs: 8,
    xs: 10,
    s: 12,
    p: 14,
    xp: 16,
    xxp: 18,
    m: 24,
    xm: 32,
    xxm: 36,
    g: 42,
    xg: 48,
    xxg: 54,
    gg: 64,
    xxgg: 72,
  },
  latoRegular: 'Lato-Regular',
  latoLight: 'Lato-Light',
  latoBold: 'Lato-Bold',
};

export interface FontsProps {
  size: FontsPropsSize;
  latoRegular: string;
  latoLight: string;
  latoBold: string;
}

export interface FontsPropsSize {
  xxs: number;
  xs: number;
  s: number;
  p: number;
  xp: number;
  xxp: number;
  m: number;
  xm: number;
  xxm: number;
  g: number;
  xg: number;
  xxg: number;
  gg: number;
  xxgg: number;
}

// general export for components
export type TextOptions = keyof FontsProps;

export type TextUnits = keyof FontsPropsSize;
