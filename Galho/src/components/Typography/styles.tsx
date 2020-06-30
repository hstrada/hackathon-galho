import styled from 'styled-components/native';

import { PropsStyledBaseTitle } from './interface';

export const BaseTitle = styled.Text.attrs(
  ({ numberOfLines }) =>
    numberOfLines && {
      numberOfLines: numberOfLines,
    },
)<PropsStyledBaseTitle>`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.primary};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fonts.size[fontSize] : theme.fonts.size.m}px;
  ${({ weight }) => (weight ? { fontWeight: weight } : '')};
  ${({ align }) => (align ? { textAlign: align } : '')};
  ${({ lineHeight, theme }) =>
    lineHeight && { 'line-height': theme.units.spacing[lineHeight] }};
  ${({ fontFamily, theme }) =>
    fontFamily
      ? { 'font-family': theme.fonts[fontFamily] }
      : { 'font-family': theme.fonts.latoRegular }}
  ${({ marginLeft, theme }) =>
    marginLeft && { 'margin-left': theme.units.spacing[marginLeft] }};
  ${({ marginRight, theme }) =>
    marginRight && { 'margin-right': theme.units.spacing[marginRight] }};
  ${({ textDecorationStyle }) =>
    textDecorationStyle ? { textDecoration: textDecorationStyle } : ''};
  ${({ textDecorationStyleColor, theme }) =>
    textDecorationStyleColor
      ? { textDecorationColor: theme.colors.text[textDecorationStyleColor] }
      : ''};
`;
